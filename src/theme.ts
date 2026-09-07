export type Theme = 'light' | 'dark';

const KEY = 'theme';

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

    const show = (theme: Theme): void =>
    {
        root.dataset.theme = theme;
        button.textContent = themeLabel(theme);
    };

    show(firstTheme(readStored(), prefersDark));

    button.addEventListener('click', () =>
    {
        const next = otherTheme((root.dataset.theme as Theme) ?? 'light');

        show(next);
        writeStored(next);
    });
}

function readStored(): string | null
{
    try
    {
        return localStorage.getItem(KEY);
    }
    catch
    {
        return null;
    }
}

function writeStored(theme: Theme): void
{
    try
    {
        localStorage.setItem(KEY, theme);
    }
    catch
    {
    }
}
