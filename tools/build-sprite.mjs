#!/usr/bin/env node

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';

const files = process.argv.slice(2);
if (!files.length) {
  console.error('usage: node tools/build-sprite.mjs <sprite.svg> [more.svg ...]');
  process.exit(1);
}

const GRID = 24;
const symbols = new Map();

for (const file of files) {
  const src = readFileSync(file, 'utf8');
  let found = 0;

  for (const m of src.matchAll(/<symbol id="(i-[^"]+)"[^>]*>([\s\S]*?)<\/symbol>/g)) {
    const [, id, inner] = m;
    const px = new Map();

    for (const r of inner.matchAll(/<rect\s([^>]*)>/g)) {
      const at = Object.fromEntries([...r[1].matchAll(/(\w+)="([^"]*)"/g)].map(m => [m[1], m[2]]));
      if (!at.fill) continue;
      const x0 = +(at.x ?? 0), y0 = +(at.y ?? 0);
      const w = +(at.width ?? 1), h = +(at.height ?? 1);
      for (let y = y0; y < y0 + h; y++)
        for (let x = x0; x < x0 + w; x++) px.set(`${y},${x}`, at.fill);
    }

    const runs = [];
    for (let y = 0; y < GRID; y++) {
      let x = 0;
      while (x < GRID) {
        const colour = px.get(`${y},${x}`);
        if (!colour) { x++; continue; }
        let w = 1;
        while (px.get(`${y},${x + w}`) === colour) w++;
        runs.push({ x, y, w, h: 1, colour });
        x += w;
      }
    }

    const byRow = new Map();
    for (const r of runs) {
      if (!byRow.has(r.y)) byRow.set(r.y, []);
      byRow.get(r.y).push(r);
    }
    const merged = [];
    const taken = new Set();
    for (const r of runs) {
      if (taken.has(r)) continue;
      let y = r.y + 1;
      for (;;) {
        const below = (byRow.get(y) || []).find(
          o => !taken.has(o) && o.x === r.x && o.w === r.w && o.colour === r.colour);
        if (!below) break;
        taken.add(below);
        r.h++;
        y++;
      }
      merged.push(r);
    }

    const out = merged
      .map(r => `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="${r.colour}"/>`)
      .join('');

    symbols.set(id, `<symbol id="${id}" viewBox="0 0 ${GRID} ${GRID}" shape-rendering="crispEdges">${out}</symbol>`);
    found++;
  }

  console.log(`${basename(file)}: ${found} symbols`);
}

const html = readFileSync('index.html', 'utf8');
const code = readdirSync('src')
  .filter(f => f.endsWith('.ts'))
  .map(f => readFileSync(join('src', f), 'utf8'))
  .join('\n');

const used = new Set([
  ...[...(html + code).matchAll(/#(i-[a-z0-9-]+)/g)].map(m => m[1]),
  ...[...html.matchAll(/data-icon="([a-z0-9-]+)"/g)].map(m => 'i-' + m[1]),
  ...[...code.matchAll(/\bicon\('([a-z0-9-]+)'\)/g)].map(m => 'i-' + m[1]),
]);

const missing = [...used].filter(id => !symbols.has(id));
const dropped = [...symbols.keys()].filter(id => !used.has(id));
for (const id of dropped) symbols.delete(id);

const sprite = `<svg class="sprite" width="0" height="0" aria-hidden="true">${[...symbols.values()].join('')}</svg>`;

const start = html.indexOf('<!-- icons:start');
const end = html.indexOf('<!-- icons:end -->');
if (start === -1 || end === -1) {
  console.error('markers not found in index.html');
  process.exit(1);
}

const head = html.slice(0, start);
const marker = html.slice(start, html.indexOf('-->', start) + 3);
writeFileSync('index.html', `${head}${marker}\n${sprite}\n${html.slice(end)}`);

const bytes = Buffer.byteLength(sprite);
console.log(`\nwrote ${symbols.size} symbols, ${(bytes / 1024).toFixed(1)} KB into index.html`);
if (missing.length) console.log(`MISSING (page asks for these, sprite has none): ${missing.join(', ')}`);
if (dropped.length) console.log(`dropped, nothing references them: ${dropped.join(', ')}`);
