import { el } from '../dom';
import { COLOPHON, LINKS, REACH, RULES } from '../say/content';

export function reachSection(): HTMLElement
{
    const links = LINKS.map(({ label, href }) => el('a', { href, text: label }));

    return el('section', { class: 'reach' },
    [
        el('h2', { text: REACH.heading }),
        el('p', { text: REACH.line }),
        el('div', { class: 'reach-links' }, links),
    ]);
}

export function footSection(): HTMLElement
{
    return el('footer', { class: 'foot' },
    [
        el('span', { text: RULES }),
        el('span', { class: 'right', text: COLOPHON }),
    ]);
}
