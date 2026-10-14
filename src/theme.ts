import { readStored, writeStored } from './stored';

export type Theme = 'light' | 'dark';

export const THEME_KEY = 'theme';

export function firstTheme(stored: string | null, prefersDark: boolean): Theme
{
    if (stored === 'light' || stored === 'dark')
    {
        return stored;
    }

    return prefersDark ? 'dark' : 'light';
}

export function otherTheme(theme: Theme): Theme
{
    return theme === 'dark' ? 'light' : 'dark';
}

export function themeLabel(theme: Theme): string
{
    return theme === 'dark' ? 'Light' : 'Dark';
}

export function wireTheme(root: HTMLElement, button: HTMLElement): void
{
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let shown = firstTheme(readStored(THEME_KEY), prefersDark);

    const show = (theme: Theme): void =>
    {
        shown = theme;
        root.dataset.theme = theme;
        button.textContent = themeLabel(theme);
    };

    show(shown);

    button.addEventListener('click', () =>
    {
        const next = otherTheme(shown);

        show(next);
        writeStored(THEME_KEY, next);
    });
}
