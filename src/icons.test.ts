import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const html = readFileSync('index.html', 'utf8');
const code = readdirSync('src')
    .filter(name => name.endsWith('.ts') && !name.endsWith('.test.ts'))
    .map(name => readFileSync(join('src', name), 'utf8'))
    .join('\n');

const sprite = html.slice(html.indexOf('<!-- icons:start -->'), html.indexOf('<!-- icons:end -->'));
const drawn = new Set([...sprite.matchAll(/<symbol id="(i-[a-z0-9-]+)"/g)].map(m => m[1]!));

const asked = new Set([
    ...[...(html + code).matchAll(/#(i-[a-z0-9-]+)/g)].map(m => m[1]!),
    ...[...html.matchAll(/data-icon="([a-z0-9-]+)"/g)].map(m => `i-${m[1]!}`),
    ...[...code.matchAll(/\bicon\('([a-z0-9-]+)'\)/g)].map(m => `i-${m[1]!}`),
]);

describe('icon sprite', () => {
    it('draws every icon the page asks for', () => {
        expect([...asked].filter(id => !drawn.has(id)).sort()).toEqual([]);
    });

    it('carries nothing the page never uses', () => {
        expect([...drawn].filter(id => !asked.has(id)).sort()).toEqual([]);
    });

    it('keeps every symbol on the 24 grid', () => {
        const wrong = [...sprite.matchAll(/<symbol id="(i-[a-z0-9-]+)" viewBox="([^"]+)"/g)]
            .filter(m => m[2] !== '0 0 24 24')
            .map(m => m[1]!);
        expect(wrong).toEqual([]);
    });

    it('is merged, not one rect per pixel', () => {
        const rects = (sprite.match(/<rect/g) ?? []).length;
        expect(rects).toBeGreaterThan(0);
        expect(rects).toBeLessThan(drawn.size * 400);
    });
});
