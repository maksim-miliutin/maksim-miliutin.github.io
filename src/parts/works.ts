import { el } from '../dom';
import { WORKS } from '../say/content';

export function worksSection(): HTMLElement
{
    const rows = WORKS.map(({ name, what, figure }) => el('div', { class: 'row' },
    [
        el('b', { text: name }),
        el('i', { text: figure }),
        el('span', { text: what }),
    ]));

    return el('section', { class: 'made' },
    [
        el('h2', { text: 'Everything I have built' }),
        el('div', { class: 'scroll' }, rows),
    ]);
}
