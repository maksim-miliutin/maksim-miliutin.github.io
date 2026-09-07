import { describe, expect, it } from 'vitest';
import { firstTheme, otherTheme, themeLabel } from './theme';

describe('firstTheme', () =>
{
    it('takes what was chosen before over the system', () =>
    {
        expect(firstTheme('light', true)).toBe('light');
        expect(firstTheme('dark', false)).toBe('dark');
    });

    it('follows the system when nothing was chosen', () =>
    {
        expect(firstTheme(null, true)).toBe('dark');
        expect(firstTheme(null, false)).toBe('light');
    });

    it('ignores a stored value that is not a theme', () =>
    {
        expect(firstTheme('purple', true)).toBe('dark');
        expect(firstTheme('', false)).toBe('light');
    });
});

describe('otherTheme', () =>
{
    it('goes both ways', () =>
    {
        expect(otherTheme('dark')).toBe('light');
        expect(otherTheme('light')).toBe('dark');
    });
});

describe('themeLabel', () =>
{
    it('names where pressing it goes, not where you are', () =>
    {
        expect(themeLabel('dark')).toBe('Light');
        expect(themeLabel('light')).toBe('Dark');
    });
});
