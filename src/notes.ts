import { $$, need } from './dom';
import { icon } from './chrome';
import { currentLang, onLanguageChange, t } from './i18n';
import { posts, type Post } from './posts';

export function initNotes() {
    const list = document.querySelector('#notes-list');
    const reader = document.querySelector<HTMLElement>('#reader');
    if (!list || !reader) return;

    const address = document.querySelector<HTMLInputElement>('#address');
    const progress = document.querySelector<HTMLElement>('#reader-progress');
    const copyButton = document.querySelector<HTMLButtonElement>('#reader-copy');
    const body = need('#reader-body', reader);
    const scroller = need('.body', reader);

    const linkFor = (id: string) => `${location.origin}${location.pathname}#note-${id}`;
    const copyFor = (post: Post) => post[currentLang()];

    let lastFocus: HTMLElement | null = null;
    let openId: string | null = null;

    const paintProgress = () => {
        if (!progress) return;
        const room = scroller.scrollHeight - scroller.clientHeight;
        progress.style.width = `${room > 0 ? Math.round((scroller.scrollTop / room) * 100) : 100}%`;
    };

    const cell = (className: string, text: string, glyph?: string) => {
        const el = document.createElement('span');
        el.className = className;
        el.textContent = text;
        if (glyph) el.prepend(icon(glyph));
        return el;
    };

    const open = (post: Post) => {
        const copy = copyFor(post);
        openId = post.id;

        need('#reader-file', reader).textContent = `${post.id}.txt`;
        need('#reader-tag', reader).textContent = post.tag;
        need('#reader-meta', reader).textContent = `${copy.readingTime} · ${post.date}`;
        need('#reader-title', reader).textContent = copy.title;

        body.textContent = '';
        for (const paragraph of copy.body) {
            const p = document.createElement('p');
            p.textContent = paragraph;
            body.append(p);
        }

        lastFocus = document.activeElement as HTMLElement | null;
        reader.hidden = false;
        document.documentElement.style.overflow = 'hidden';
        need<HTMLButtonElement>('.shade', reader).focus();

        history.replaceState(null, '', `#note-${post.id}`);
        if (address) address.value = linkFor(post.id);

        scroller.scrollTop = 0;
        paintProgress();
    };

    const close = () => {
        if (reader.hidden) return;
        reader.hidden = true;
        openId = null;
        document.documentElement.style.overflow = '';
        history.replaceState(null, '', location.pathname);
        lastFocus?.focus();
    };

    const render = () => {
        list.textContent = '';

        for (const post of posts) {
            const copy = copyFor(post);

            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'key';
            button.textContent = t('notes.read');
            button.addEventListener('click', () => open(post));

            const li = document.createElement('li');
            li.append(
                cell('note-tag', post.tag),
                cell('note-name', copy.title, 'document'),
                button,
                cell('note-meta', `${copy.readingTime} · ${post.date}`),
            );
            list.append(li);
        }
    };

    for (const el of $$('[data-close]', reader)) el.addEventListener('click', close);

    scroller.addEventListener('scroll', paintProgress);

    copyButton?.addEventListener('click', async () => {
        if (!openId) return;

        try {
            await navigator.clipboard.writeText(linkFor(openId));
        } catch {
            return;
        }

        const label = copyButton.lastChild;
        if (!label) return;

        label.textContent = t('ui.copied');
        setTimeout(() => {
            label.textContent = t('ui.copy');
        }, 1400);
    });

    document.addEventListener('keydown', event => {
        if (reader.hidden) return;

        if (event.key === 'Escape') return close();
        if (event.key !== 'Tab') return;

        const focusable = $$<HTMLElement>('a[href], button', reader).filter(el => el.offsetParent !== null);
        const first = focusable.at(0);
        const last = focusable.at(-1);
        if (!first || !last) return;

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    });

    render();
    onLanguageChange(render);

    const wanted = location.hash.replace('#note-', '');
    const deep = posts.find(post => post.id === wanted);
    if (deep) open(deep);
}
