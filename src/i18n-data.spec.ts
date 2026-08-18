import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { translations, type Dict } from './i18n-data';

const html = readFileSync('index.html', 'utf8');

const keysInMarkup = [...html.matchAll(/data-i18n="([^"]+)"/g)].map((m) => m[1] ?? '');

function flatten(node: unknown, prefix = ''): string[]
{
    if (typeof node === 'string')
    {
        return [prefix];
    }

    return Object.entries(node as Record<string, unknown>)
        .flatMap(([key, value]) => flatten(value, prefix === '' ? key : `${prefix}.${key}`));
}

function lookup(dict: Dict, key: string): unknown
{
    return key.split('.').reduce<unknown>(
        (node, part) => (node !== null && typeof node === 'object')
            ? (node as Record<string, unknown>)[part]
            : undefined,
        dict,
    );
}

describe('dictionaries', () =>
{
    const english = flatten(translations.en).sort();

    // a key added to one language and forgotten in another has broken this page twice
    it('carries the same keys in all three languages', () =>
    {
        expect(flatten(translations.fr).sort()).toEqual(english);
        expect(flatten(translations.ru).sort()).toEqual(english);
    });

    it('has no empty strings anywhere', () =>
    {
        for (const [lang, dict] of Object.entries(translations))
        {
            const empty = flatten(dict).filter((key) =>
            {
                const value = lookup(dict, key);
                return typeof value !== 'string' || value.trim() === '';
            });

            expect(empty, lang).toEqual([]);
        }
    });

    it('resolves every key the markup asks for', () =>
    {
        const missing = keysInMarkup
            .filter((key) => typeof lookup(translations.en, key) !== 'string');

        expect(missing).toEqual([]);
    });
});
