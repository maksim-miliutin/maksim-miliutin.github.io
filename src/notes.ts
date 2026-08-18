import { $, $$, need } from './dom';
import { icon } from './chrome';
import { currentLang, onLanguageChange, t } from './i18n';
import { posts, type Post } from './posts';

const COPIED_MS = 1400;

export function initNotes(): void
{
    const list = $('#notes-list');
    const reader = $('#reader');

    if (list === null || reader === null)
    {
        return;
    }

    const address = $<HTMLInputElement>('#address');
    const progress = $('#reader-progress');
    const copyButton = $<HTMLButtonElement>('#reader-copy');
    const body = need('#reader-body', reader);
    const scroller = need('.body', reader);

    const linkFor = (id: string): string => `${location.origin}${location.pathname}#note-${id}`;

    let lastFocus: HTMLElement | null = null;
    let openId: string | null = null;

    const paintProgress = (): void =>
    {
        if (progress === null)
        {
            return;
        }

        const room = scroller.scrollHeight - scroller.clientHeight;
        const share = room > 0 ? Math.round((scroller.scrollTop / room) * 100) : 100;
        progress.style.width = `${share}%`;
    };

    const open = (post: Post): void =>
    {
        const copy = post[currentLang()];
        openId = post.id;

        need('#reader-file', reader).textContent = `${post.id}.txt`;
        need('#reader-tag', reader).textContent = post.tag;
        need('#reader-meta', reader).textContent = `${copy.readingTime} · ${post.date}`;
        need('#reader-title', reader).textContent = copy.title;

        body.textContent = '';

        for (const paragraph of copy.body)
        {
            const p = document.createElement('p');
            p.textContent = paragraph;
            body.append(p);
        }

        lastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        reader.hidden = false;
        document.documentElement.style.overflow = 'hidden';
        need<HTMLButtonElement>('.shade', reader).focus();

        // a note is worth sharing on its own, so it gets an address of its own
        history.replaceState(null, '', `#note-${post.id}`);

        if (address !== null)
        {
            address.value = linkFor(post.id);
        }

        scroller.scrollTop = 0;
        paintProgress();
    };

    const close = (): void =>
    {
        if (reader.hidden)
        {
            return;
        }

        reader.hidden = true;
        openId = null;
        document.documentElement.style.overflow = '';
        history.replaceState(null, '', location.pathname);
        lastFocus?.focus();
    };

    const render = (): void =>
    {
        list.textContent = '';

        for (const post of posts)
        {
            const copy = post[currentLang()];

            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'key';
            button.textContent = t('notes.read');
            button.addEventListener('click', () => open(post));

            const item = document.createElement('li');
            item.append(
                cell('note-tag', post.tag),
                cell('note-name', copy.title, 'document'),
                button,
                cell('note-meta', `${copy.readingTime} · ${post.date}`),
            );

            list.append(item);
        }
    };

    for (const element of $$('[data-close]', reader))
    {
        element.addEventListener('click', close);
    }

    scroller.addEventListener('scroll', paintProgress);

    copyButton?.addEventListener('click', () =>
    {
        if (openId === null)
        {
            return;
        }

        navigator.clipboard.writeText(linkFor(openId)).then(() =>
        {
            const label = copyButton.lastChild;

            if (label === null)
            {
                return;
            }

            label.textContent = t('ui.copied');
            setTimeout(() => { label.textContent = t('ui.copy'); }, COPIED_MS);
        },
        () =>
        {
            // clipboard denied; the address bar still shows the same link
        });
    });

    document.addEventListener('keydown', (event) =>
    {
        if (reader.hidden)
        {
            return;
        }

        if (event.key === 'Escape')
        {
            close();
            return;
        }

        if (event.key === 'Tab')
        {
            trap(event, reader);
        }
    });

    render();
    onLanguageChange(render);

    const wanted = location.hash.replace('#note-', '');
    const deep = posts.find((post) => post.id === wanted);

    if (deep !== undefined)
    {
        open(deep);
    }
}

function cell(className: string, text: string, glyph?: string): HTMLSpanElement
{
    const element = document.createElement('span');
    element.className = className;
    element.textContent = text;

    if (glyph !== undefined)
    {
        element.prepend(icon(glyph));
    }

    return element;
}

function trap(event: KeyboardEvent, reader: Element): void
{
    const focusable = $$<HTMLElement>('a[href], button', reader)
        .filter((el) => el.offsetParent !== null);
    const first = focusable.at(0);
    const last = focusable.at(-1);

    if (first === undefined || last === undefined)
    {
        return;
    }

    if (event.shiftKey && document.activeElement === first)
    {
        event.preventDefault();
        last.focus();
        return;
    }

    if (!event.shiftKey && document.activeElement === last)
    {
        event.preventDefault();
        first.focus();
    }
}
