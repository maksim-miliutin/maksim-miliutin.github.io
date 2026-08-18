import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const html = readFileSync('index.html', 'utf8');
const css = readFileSync('src/style.css', 'utf8');
const code = readdirSync('src')
    .filter(name => name.endsWith('.ts') && !name.endsWith('.test.ts'))
    .map(name => readFileSync(join('src', name), 'utf8'))
    .join('\n');

// classes the page actually wears, from the markup and from what the modules attach
const worn = new Set<string>();
for (const group of html.matchAll(/class="([^"]*)"/g)) {
    for (const name of group[1]!.split(/\s+/)) if (name) worn.add(name);
}
for (const m of code.matchAll(/classList\.(?:add|toggle|remove)\('([\w-]+)'/g)) worn.add(m[1]!);
for (const m of code.matchAll(/className = '([^']+)'/g)) {
    for (const name of m[1]!.split(/\s+/)) worn.add(name);
}
for (const m of code.matchAll(/setAttribute\('class', '([^']+)'/g)) worn.add(m[1]!);

const styled = new Set([...css.matchAll(/\.([a-zA-Z][\w-]*)/g)].map(m => m[1]!));

// these carry no styling on purpose
const bare = new Set(['notranslate', 'sr-only']);

describe('stylesheet', () => {
    it('has a rule for every class the page wears', () => {
        expect([...worn].filter(name => !styled.has(name) && !bare.has(name)).sort()).toEqual([]);
    });

    it('has balanced braces', () => {
        let depth = 0;
        css.split('\n').forEach((line, index) => {
            depth += (line.match(/\{/g) ?? []).length - (line.match(/\}/g) ?? []).length;
            expect(depth, `unbalanced at line ${index + 1}`).toBeGreaterThanOrEqual(0);
        });
        expect(depth).toBe(0);
    });

    it('keeps the fixed bars fixed', () => {
        for (const selector of ['.menubar', '.taskbar', '.startmenu']) {
            const rule = css.slice(css.indexOf(`\n${selector} {`));
            expect(rule.slice(0, rule.indexOf('}'))).toContain('position: fixed');
        }
    });
});
