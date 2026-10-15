import { el } from '../dom';
import { HEADS, LINKS, WHO } from '../say/content';
import { TONGUES, spoken, tongueName, tongueShort, wireTongue } from '../say/tongue';
import { wireTheme } from '../theme';

export function mastheadSection(): HTMLElement
{
    const links = LINKS.map(({ label, href }) => el('a', { href, text: label }));

    const tongues = el('span', { class: 'tongues' },
        TONGUES.map((tongue) => el('button',
        {
            type: 'button',
            'data-tongue': tongue,
            text: tongueShort(tongue),
            title: tongueName(tongue),
            ...(tongue === spoken() ? { disabled: 'disabled' } : {}),
        })));

    const theme = el('button', { class: 'theme', type: 'button', text: HEADS.dark });

    wireTongue(tongues);
    wireTheme(document.documentElement, theme, HEADS);

    return el('header', { class: 'top' },
    [
        el('b', { text: WHO.name }),
        el('span', { text: `${WHO.role} · ${WHO.where} · ${WHO.when}` }),
        el('span', { class: 'right' }, [...links, tongues, theme]),
    ]);
}
