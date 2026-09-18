import { el } from '../dom';
import { LINKS, WHO } from '../say/content';

export function mastheadSection(): HTMLElement
{
    const links = LINKS.map(({ label, href }) => el('a', { href, text: label }));

    return el('header', { class: 'top' },
    [
        el('b', { text: WHO.name }),
        el('span', { text: `${WHO.role} · ${WHO.where} · ${WHO.when}` }),
        el('span', { class: 'right' },
        [
            ...links,
            el('button', { class: 'theme', id: 'theme', type: 'button', text: 'Dark' }),
        ]),
    ]);
}
