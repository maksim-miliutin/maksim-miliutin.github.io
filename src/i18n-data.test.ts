import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { translations, type Dict } from './i18n-data';

const flatten = (node: unknown, prefix = ''): string[] =>
    typeof node === 'string'
        ? [prefix]
        : Object.entries(node as Record<string, unknown>).flatMap(([key, value]) =>
              flatten(value, prefix ? `${prefix}.${key}` : key),
          );

const html = readFileSync('index.html', 'utf8');
const keysInMarkup = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]!);

describe('dictionaries', () => {
    const english = flatten(translations.en).sort();

    it.each(['fr', 'ru'] as const)('%s has exactly the same keys as en', lang => {
        expect(flatten(translations[lang]).sort()).toEqual(english);
    });

    it.each(Object.keys(translations) as (keyof typeof translations)[])(
        '%s has no empty strings',
        lang => {
            const dict = translations[lang] as Dict;
            const empty = flatten(dict).filter(key => {
                const value = key
                    .split('.')
                    .reduce<unknown>((node, part) => (node as Record<string, unknown>)[part], dict);
                return typeof value !== 'string' || value.trim() === '';
            });
            expect(empty).toEqual([]);
        },
    );

    it('every data-i18n in the markup resolves', () => {
        const missing = keysInMarkup.filter(key => {
            const value = key
                .split('.')
                .reduce<unknown>(
                    (node, part) =>
                        node && typeof node === 'object'
                            ? (node as Record<string, unknown>)[part]
                            : undefined,
                    translations.en,
                );
            return typeof value !== 'string';
        });
        expect(missing).toEqual([]);
    });
});
