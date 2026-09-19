import { el } from '../dom';
import { LINKS, WHO } from '../say/content';
import { TONGUES, spoken, tongueName, wireTongue } from '../say/tongue';

export function mastheadSection(): HTMLElement
{
    const links = LINKS.map(({ label, href }) => el('a', { href, text: label }));

    const tongues = el('span', { class: 'tongues' },
        TONGUES.map((tongue) => el('button',
        {
            type: 'button',
            'data-tongue': tongue,
            text: tongueName(tongue),
            ...(tongue === spoken() ? { disabled: 'disabled' } : {}),
        })));

    wireTongue(tongues);

    return el('header', { class: 'top' },
    [
        el('b', { text: WHO.name }),
        el('span', { text: `${WHO.role} · ${WHO.where} · ${WHO.when}` }),
        el('span', { class: 'right' },
        [
            ...links,
            tongues,
            el('button', { class: 'theme', id: 'theme', type: 'button', text: 'Dark' }),
        ]),
    ]);
}
