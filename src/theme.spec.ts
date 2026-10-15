import { describe, expect, it } from 'vitest';
import page from '../index.html?raw';
import { THEME_KEY, firstTheme, otherTheme, themeLabel } from './theme';

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
    const names = { light: 'Светлая', dark: 'Тёмная' };

    it('names where pressing it goes, not where you are', () =>
    {
        expect(themeLabel('dark', names)).toBe('Светлая');
        expect(themeLabel('light', names)).toBe('Тёмная');
    });
});

describe('the first paint', () =>
{
    // The bug this guards: the page painted from one key while the button kept the
    // choice under another, so a dark choice flashed white on every visit.
    it('reads the theme from where the button keeps it', () =>
    {
        expect(page).toContain(`localStorage.getItem('${THEME_KEY}')`);
    });
});
