import { $, $$ } from './dom';
import { isLang, translations, type Key, type Lang } from './i18n-data';

const STORAGE_KEY = 'mm-lang';

let lang: Lang = 'en';

const listeners = new Set<() => void>();

export const currentLang = () => lang;

export const onLanguageChange = (fn: () => void) => {
    listeners.add(fn);
    return () => listeners.delete(fn);
};

export function t(key: Key): string {
    const value = key.split('.').reduce<unknown>(
        (node, part) => (node && typeof node === 'object' ? (node as Record<string, unknown>)[part] : undefined),
        translations[lang],
    );
    return typeof value === 'string' ? value : key;
}

export function setLanguage(next: Lang) {
    lang = next;
    document.documentElement.lang = next;

    for (const el of $$('[data-i18n]')) {
        const key = el.dataset.i18n as Key | undefined;
        if (!key) continue;

        const icon = $('.ico', el);
        el.textContent = t(key);
        if (icon) el.prepend(icon);
    }

    document.title = t('meta.title');

    for (const btn of $$<HTMLButtonElement>('.lang button')) {
        btn.setAttribute('aria-pressed', String(btn.dataset.lang === next));
    }

    for (const fn of listeners) fn();

    try {
        localStorage.setItem(STORAGE_KEY, next);
    } catch {
        // private mode, nothing to do
    }
}

export function initLanguage() {
    for (const btn of $$<HTMLButtonElement>('.lang button')) {
        btn.addEventListener('click', () => {
            const next = btn.dataset.lang;
            if (next && isLang(next)) setLanguage(next);
        });
    }

    setLanguage(preferred());
}

function preferred(): Lang {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && isLang(saved)) return saved;
    } catch {
        // ignore
    }

    const browser = navigator.language.slice(0, 2).toLowerCase();
    return isLang(browser) ? browser : 'en';
}
