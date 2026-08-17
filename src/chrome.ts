import { $, $$, ease, need } from './dom';
import { currentLang, onLanguageChange, t } from './i18n';
import type { Key } from './i18n-data';

const SVG = 'http://www.w3.org/2000/svg';

export function icon(name: string) {
    const svg = document.createElementNS(SVG, 'svg');
    svg.setAttribute('class', 'ico');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');

    const use = document.createElementNS(SVG, 'use');
    use.setAttribute('href', `#i-${name}`);
    svg.append(use);

    return svg;
}

export function mountIcons(root: ParentNode = document) {
    for (const el of $$('[data-icon]', root)) {
        if (!$('.ico', el) && el.dataset.icon) el.prepend(icon(el.dataset.icon));
    }
}

export function initTheme() {
    const button = need<HTMLButtonElement>('#theme-toggle');
    const label = need('#theme-label');
    const meta = need<HTMLMetaElement>('meta[name="theme-color"]');
    const desk = { light: '#2C2545', dark: '#0C0A13' } as const;

    const dark = () => document.documentElement.dataset.theme === 'dark';

    const paint = () => {
        label.textContent = dark() ? t('ui.day') : t('ui.night');
        need('.sr-only', button).textContent = dark() ? t('a11y.themeLight') : t('a11y.themeDark');
        button.setAttribute('aria-pressed', String(dark()));
    };

    button.addEventListener('click', () => {
        const next = dark() ? 'light' : 'dark';
        document.documentElement.dataset.theme = next;
        meta.content = desk[next];
        paint();

        try {
            localStorage.setItem('mm-theme', next);
        } catch {
            // ignore
        }
    });

    onLanguageChange(paint);
}

export function initWindows() {
    for (const button of $$<HTMLButtonElement>('[data-shade]')) {
        button.addEventListener('click', () => {
            const body = need('.body', button.closest('.win')!);
            const open = button.getAttribute('aria-expanded') === 'true';

            body.hidden = open;
            button.setAttribute('aria-expanded', String(!open));
            need('use', button).setAttribute('href', open ? '#i-restore' : '#i-collapse');
            need('.sr-only', button).textContent = open ? t('ui.expand') : t('ui.collapse');
        });
    }
}

export function initSpy() {
    const tasks = $$<HTMLAnchorElement>('.task');
    const windows = $$('main section[id]');
    const now = document.querySelector('#taskbar-now');

    for (const win of windows) win.dataset.file = need('.bar-title', win).textContent!.trim();
    const address = document.querySelector<HTMLInputElement>('#address');
    const base = location.origin + location.pathname;

    let here = base;

    if (address) {
        address.value = base;
        address.addEventListener('focus', () => address.select());

        document.addEventListener('mouseover', event => {
            const link = (event.target as Element | null)?.closest?.('a[href]');
            if (link) address.value = (link as HTMLAnchorElement).href;
        });

        document.addEventListener('mouseout', event => {
            if ((event.target as Element | null)?.closest?.('a[href]')) address.value = here;
        });
    }

    const spy = new IntersectionObserver(
        entries => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;

                for (const task of tasks) {
                    const active = task.dataset.target === entry.target.id;
                    task.setAttribute('aria-current', active ? 'true' : 'false');
                }

                if (now) now.textContent = (entry.target as HTMLElement).dataset.file ?? '';

                here = `${base}#${entry.target.id}`;
                if (address && document.activeElement !== address) address.value = here;
            }
        },
        { rootMargin: '-40% 0px -50% 0px' },
    );

    for (const win of windows) spy.observe(win);

    // clicking a task button on a rolled-up window opens it again
    for (const task of tasks) {
        task.addEventListener('click', () => {
            const win = document.getElementById(task.dataset.target ?? '');
            const body = win && $('.body', win);
            const button = win && $<HTMLButtonElement>('[data-shade]', win);
            if (!body || !button || !body.hidden) return;

            body.hidden = false;
            button.setAttribute('aria-expanded', 'true');
            need('use', button).setAttribute('href', '#i-collapse');
            need('.sr-only', button).textContent = t('ui.collapse');
        });
    }
}

export function initStart() {
    const button = document.querySelector<HTMLButtonElement>('#start');
    const menu = document.querySelector<HTMLElement>('#startmenu');
    if (!button || !menu) return;

    const setOpen = (open: boolean) => {
        menu.hidden = !open;
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-pressed', String(open));
    };

    button.addEventListener('click', event => {
        event.stopPropagation();
        setOpen(menu.hidden);
    });

    for (const link of $$('a', menu)) link.addEventListener('click', () => setOpen(false));

    document.addEventListener('click', event => {
        if (!menu.hidden && !menu.contains(event.target as Node)) setOpen(false);
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !menu.hidden) {
            setOpen(false);
            button.focus();
        }
    });
}

export function initClock() {
    const clock = need('#clock');

    const paint = () => {
        const now = new Date();
        const date = new Intl.DateTimeFormat(currentLang(), {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }).format(now);
        const time = new Intl.DateTimeFormat(currentLang(), {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        }).format(now);

        clock.textContent = `${date}  ${time}`;
    };

    paint();
    setInterval(paint, 15_000);
    onLanguageChange(paint);
}

export function initCounters() {
    const counters = $$('[data-count-to]');
    if (!counters.length) return;

    const io = new IntersectionObserver(
        entries => {
            for (const entry of entries) {
                if (!entry.isIntersecting) continue;
                io.unobserve(entry.target);

                const el = entry.target as HTMLElement;
                const target = Number(el.dataset.countTo);
                const suffix = el.dataset.suffix ?? '';
                if (!Number.isFinite(target)) continue;

                ease(800, p => {
                    el.textContent = Math.round(p * target) + suffix;
                });
            }
        },
        { threshold: 0.6 },
    );

    for (const el of counters) io.observe(el);
}

export const label = (key: Key) => t(key);
