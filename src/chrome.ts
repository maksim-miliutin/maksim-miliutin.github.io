import { $, $$, need } from './dom';
import { currentLang, onLanguageChange, t } from './i18n';

const SVG_NS = 'http://www.w3.org/2000/svg';

const DESK_COLOUR = { light: '#2C2545', dark: '#0C0A13' } as const;

/** Builds a reference into the sprite that sits inlined at the top of the document. */
export function icon(name: string): SVGSVGElement
{
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('class', 'ico');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');

    const use = document.createElementNS(SVG_NS, 'use');
    use.setAttribute('href', `#i-${name}`);
    svg.append(use);

    return svg;
}

export function mountIcons(root: ParentNode = document): void
{
    for (const element of $$('[data-icon]', root))
    {
        const name = element.dataset.icon;

        if (name !== undefined && $('.ico', element) === null)
        {
            element.prepend(icon(name));
        }
    }
}

export function initTheme(): void
{
    const button = need<HTMLButtonElement>('#theme-toggle');
    const label = need('#theme-label');
    const meta = need<HTMLMetaElement>('meta[name="theme-color"]');

    const dark = (): boolean => document.documentElement.dataset.theme === 'dark';

    // the button offers the other mode, so its label is the one you are not in
    const paint = (): void =>
    {
        label.textContent = dark() ? t('ui.day') : t('ui.night');
        need('.sr-only', button).textContent = dark() ? t('a11y.themeLight') : t('a11y.themeDark');
        button.setAttribute('aria-pressed', String(dark()));
    };

    button.addEventListener('click', () =>
    {
        const next = dark() ? 'light' : 'dark';

        document.documentElement.dataset.theme = next;
        meta.content = DESK_COLOUR[next];
        paint();

        try
        {
            localStorage.setItem('mm-theme', next);
        }
        catch (err)
        {
            // private mode denies storage; the theme just will not survive a reload
        }
    });

    onLanguageChange(paint);
}

export function initWindows(): void
{
    for (const button of $$<HTMLButtonElement>('[data-shade]'))
    {
        button.addEventListener('click', () =>
        {
            const win = button.closest('.win');

            if (win === null)
            {
                return;
            }

            roll(win, button.getAttribute('aria-expanded') !== 'true');
        });
    }
}

export function initSpy(): void
{
    const tasks = $$<HTMLAnchorElement>('.task');
    const windows = $$('main section[id]');
    const now = $('#taskbar-now');
    const address = $<HTMLInputElement>('#address');
    const base = location.origin + location.pathname;

    let here = base;

    for (const win of windows)
    {
        win.dataset.file = need('.bar-title', win).textContent?.trim() ?? '';
    }

    if (address !== null)
    {
        address.value = base;
        address.addEventListener('focus', () => address.select());

        // a real browser shows the link you are pointing at, so this one does too
        document.addEventListener('mouseover', (event) =>
        {
            const link = linkUnder(event.target);

            if (link !== null)
            {
                address.value = link.href;
            }
        });

        document.addEventListener('mouseout', (event) =>
        {
            if (linkUnder(event.target) !== null)
            {
                address.value = here;
            }
        });
    }

    const spy = new IntersectionObserver((entries) =>
    {
        for (const entry of entries)
        {
            if (!entry.isIntersecting)
            {
                continue;
            }

            const win = entry.target as HTMLElement;

            for (const task of tasks)
            {
                task.setAttribute('aria-current', String(task.dataset.target === win.id));
            }

            if (now !== null)
            {
                now.textContent = win.dataset.file ?? '';
            }

            here = `${base}#${win.id}`;

            if (address !== null && document.activeElement !== address)
            {
                address.value = here;
            }
        }
    },
    {
        rootMargin: '-40% 0px -50% 0px',
    });

    for (const win of windows)
    {
        spy.observe(win);
    }

    for (const task of tasks)
    {
        task.addEventListener('click', () =>
        {
            const win = document.getElementById(task.dataset.target ?? '');

            if (win !== null)
            {
                roll(win, true);
            }
        });
    }
}

export function initStart(): void
{
    const button = $<HTMLButtonElement>('#start');
    const menu = $('#startmenu');

    if (button === null || menu === null)
    {
        return;
    }

    const setOpen = (open: boolean): void =>
    {
        menu.hidden = !open;
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-pressed', String(open));
    };

    button.addEventListener('click', (event) =>
    {
        event.stopPropagation();
        setOpen(menu.hidden);
    });

    for (const link of $$('a', menu))
    {
        link.addEventListener('click', () => setOpen(false));
    }

    document.addEventListener('click', (event) =>
    {
        if (!menu.hidden && !menu.contains(event.target as Node))
        {
            setOpen(false);
        }
    });

    document.addEventListener('keydown', (event) =>
    {
        if (event.key === 'Escape' && !menu.hidden)
        {
            setOpen(false);
            button.focus();
        }
    });
}

export function initClock(): void
{
    const clock = need('#clock');

    const paint = (): void =>
    {
        const now = new Date();
        const lang = currentLang();

        const date = new Intl.DateTimeFormat(lang,
        {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        });

        const time = new Intl.DateTimeFormat(lang,
        {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });

        clock.textContent = `${date.format(now)}  ${time.format(now)}`;
    };

    paint();
    setInterval(paint, 15_000);
    onLanguageChange(paint);
}

/** Rolls a window up or down and keeps the shade button telling the truth. */
function roll(win: Element, open: boolean): void
{
    const body = $('.body', win);
    const button = $<HTMLButtonElement>('[data-shade]', win);

    if (body === null || button === null || body.hidden !== open)
    {
        return;
    }

    body.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    need('use', button).setAttribute('href', open ? '#i-collapse' : '#i-restore');
    need('.sr-only', button).textContent = open ? t('ui.collapse') : t('ui.expand');
}

function linkUnder(target: EventTarget | null): HTMLAnchorElement | null
{
    return target instanceof Element ? target.closest('a[href]') : null;
}
