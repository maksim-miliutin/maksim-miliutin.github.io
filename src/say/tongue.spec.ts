import { describe, expect, it } from 'vitest';
import { TONGUES, firstTongue, tongueName, tongueShort } from './tongue';

describe('choosing a language', () =>
{
    it('keeps what was chosen before anything else', () =>
    {
        expect(firstTongue('fr', ['ru-RU', 'ru'])).toBe('fr');
    });

    it('takes the first one the browser asks for that it knows', () =>
    {
        expect(firstTongue(null, ['de-DE', 'ru-RU', 'en'])).toBe('ru');
    });

    it('falls back to English rather than to nothing', () =>
    {
        expect(firstTongue(null, ['de-DE', 'ja'])).toBe('en');
        expect(firstTongue(null, [])).toBe('en');
    });

    it('ignores a stored value it does not know', () =>
    {
        expect(firstTongue('kl', ['fr-FR'])).toBe('fr');
    });

    it('names every language in that language', () =>
    {
        expect(TONGUES.map(tongueName)).toEqual(['English', 'Русский', 'Français']);
    });
});

describe('naming a language', () =>
{
    it('shortens each one to two letters for a crowded header', () =>
    {
        expect(TONGUES.map(tongueShort)).toEqual(['EN', 'RU', 'FR']);
    });
});
