#!/usr/bin/env node

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const GRID = 24;

const SYMBOL = /<symbol id="(i-[^"]+)"[^>]*>([\s\S]*?)<\/symbol>/g;

const files = process.argv.slice(2);

if (files.length === 0)
{
    console.error('usage: node tools/build-sprite.mjs <sprite.svg> [more.svg ...]');
    process.exit(1);
}

const symbols = new Map();

for (const file of files)
{
    const source = readFileSync(file, 'utf8');
    let found = 0;

    for (const match of source.matchAll(SYMBOL))
    {
        const [, id, inner] = match;

        const box = `viewBox="0 0 ${GRID} ${GRID}" shape-rendering="crispEdges"`;
        const open = `<symbol id="${id}" ${box}>`;

        symbols.set(id, open + merge(paint(inner)).map(rect).join('') + '</symbol>');

        found += 1;
    }

    console.log(`${file}: ${found} symbols`);
}

const html = readFileSync('index.html', 'utf8');
const start = html.indexOf('<!-- icons:start -->');
const end = html.indexOf('<!-- icons:end -->');

if (start < 0 || end < 0)
{
    console.error('index.html has no icons:start / icons:end markers');
    process.exit(1);
}

// some icons are only ever named from code, so the modules are scanned too
const code = readdirSync('src')
    .filter((name) => name.endsWith('.ts') && !name.endsWith('.spec.ts'))
    .map((name) => readFileSync(join('src', name), 'utf8'))
    .join('\n');

const asked = new Set(
[
    ...[...(html + code).matchAll(/#(i-[a-z0-9-]+)/g)].map((m) => m[1]),
    ...[...html.matchAll(/data-icon="([a-z0-9-]+)"/g)].map((m) => `i-${m[1]}`),
    ...[...code.matchAll(/\bicon\('([a-z0-9-]+)'\)/g)].map((m) => `i-${m[1]}`),
]);

const missing = [...asked].filter((id) => !symbols.has(id));

if (missing.length > 0)
{
    console.error(`index.html asks for symbols nobody drew: ${missing.join(', ')}`);
    process.exit(1);
}

const dropped = [...symbols.keys()].filter((id) => !asked.has(id));

// the sprite is assembled after the drop; building it first once shipped 12 KB of
// symbols the page never referenced while the log claimed they had been removed
for (const id of dropped)
{
    symbols.delete(id);
}

const body = [...symbols.values()].join('');
const sprite = `<svg class="sprite" width="0" height="0" aria-hidden="true">${body}</svg>`;

const rebuilt = `${html.slice(0, start)}<!-- icons:start -->\n${sprite}\n${html.slice(end)}`;

writeFileSync('index.html', rebuilt);

const size = (sprite.length / 1024).toFixed(1);

console.log(`\nwrote ${symbols.size} symbols, ${size} KB into index.html`);

if (dropped.length > 0)
{
    console.log(`dropped, nothing references them: ${dropped.join(', ')}`);
}

/** Expands every rect of a symbol into a pixel map, so overlapping rects flatten. */
function paint(inner)
{
    const pixels = new Map();

    for (const found of inner.matchAll(/<rect\s([^>]*)>/g))
    {
        const pairs = [...found[1].matchAll(/(\w+)="([^"]*)"/g)].map((m) => [m[1], m[2]]);
        const at = Object.fromEntries(pairs);

        if (at.fill === undefined)
        {
            continue;
        }

        const x0 = Number(at.x ?? 0);
        const y0 = Number(at.y ?? 0);
        const w = Number(at.width ?? 1);
        const h = Number(at.height ?? 1);

        for (let y = y0; y < y0 + h; y += 1)
        {
            for (let x = x0; x < x0 + w; x += 1)
            {
                pixels.set(`${y},${x}`, at.fill);
            }
        }
    }

    return pixels;
}

/** Merges pixels into rows first, then merges identical rows into blocks. */
function merge(pixels)
{
    const runs = [];

    for (let y = 0; y < GRID; y += 1)
    {
        let x = 0;

        while (x < GRID)
        {
            const colour = pixels.get(`${y},${x}`);

            if (colour === undefined)
            {
                x += 1;
                continue;
            }

            let w = 1;

            while (pixels.get(`${y},${x + w}`) === colour)
            {
                w += 1;
            }

            runs.push({ x, y, w, h: 1, colour });
            x += w;
        }
    }

    const merged = [];

    for (const run of runs)
    {
        const above = merged.find((m) => m.x === run.x && m.w === run.w
            && m.colour === run.colour && m.y + m.h === run.y);

        if (above === undefined)
        {
            merged.push({ ...run });
            continue;
        }

        above.h += run.h;
    }

    return merged;
}

function rect(r)
{
    return `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="${r.colour}"/>`;
}
