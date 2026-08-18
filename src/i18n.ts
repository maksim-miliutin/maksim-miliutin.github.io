import { $, $$ } from './dom';
import { isLang, translations, type Key, type Lang } from './i18n-data';

const STORAGE_KEY = 'mm-lang';

const listeners = new Set<() => void>();

let lang: Lang = 'en';

export const currentLang = (): Lang => lang;

export function onLanguageChange(fn: () => void): () => void
{
    listeners.add(fn);
    return () => listeners.delete(fn);
}

export function t(key: Key): string
{
    const value = key.split('.').reduce<unknown>(
        (node, part) => (node !== null && typeof node === 'object')
            ? (node as Record<string, unknown>)[part]
            : undefined,
        translations[lang],
    );

    return typeof value === 'string' ? value : key;
}

export function setLanguage(next: Lang): void
{
    lang = next;
    document.documentElement.lang = next;

    for (const element of $$('[data-i18n]'))
    {
        const key = element.dataset.i18n as Key | undefined;

        if (key === undefined)
        {
            continue;
        }

        const value = t(key);

        if (value === key)
        {
            continue;
        }

        // textContent wipes children, so the icon is lifted out and put back
        const icon = $('.ico', element);
        element.textContent = value;

        if (icon !== null)
        {
            element.prepend(icon);
        }
    }

    document.title = t('meta.title');

    for (const button of $$<HTMLButtonElement>('.lang button'))
    {
        button.setAttribute('aria-pressed', String(button.dataset.lang === next));
    }

    for (const fn of listeners)
    {
        fn();
    }

    remember(next);
}

export function initLanguage(): void
{
    for (const button of $$<HTMLButtonElement>('.lang button'))
    {
        button.addEventListener('click', () =>
        {
            const next = button.dataset.lang;

            if (next !== undefined && isLang(next))
            {
                setLanguage(next);
            }
        });
    }

    setLanguage(preferred());
}

function preferred(): Lang
{
    const saved = recall();

    if (saved !== null)
    {
        return saved;
    }

    const browser = navigator.language.slice(0, 2).toLowerCase();
    return isLang(browser) ? browser : 'en';
}

function recall(): Lang | null
{
    try
    {
        const saved = localStorage.getItem(STORAGE_KEY);
        return (saved !== null && isLang(saved)) ? saved : null;
    }
    catch (err)
    {
        // private mode denies storage; the browser language is a fine fallback
        return null;
    }
}

function remember(next: Lang): void
{
    try
    {
        localStorage.setItem(STORAGE_KEY, next);
    }
    catch (err)
    {
        // nothing to do: the choice simply will not survive a reload
    }
}
