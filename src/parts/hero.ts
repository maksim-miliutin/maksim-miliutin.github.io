import { el } from '../dom';
import { CLAIM, LEAD, NOW, SHOP, TALLY, WHO } from '../say/content';

function face(): HTMLElement
{
    return el('div', { class: 'face' },
    [
        el('img', { src: '/assets/avatar.jpg', alt: WHO.name }),
        el('div', {},
        [
            el('b', { text: WHO.name }),
            el('span', { text: WHO.bio }),
        ]),
    ]);
}

function claim(): HTMLElement
{
    return el('h1', {},
    [
        document.createTextNode(CLAIM.before),
        el('em', { text: CLAIM.drawn }),
        document.createTextNode(CLAIM.after),
    ]);
}

function proof(): HTMLElement
{
    return el('a', { class: 'proof', href: SHOP.href },
    [
        el('img', { src: SHOP.image, alt: SHOP.alt }),
        el('span', {}, [el('b', { text: SHOP.name }), document.createTextNode(SHOP.caption)]),
    ]);
}

function now(): HTMLElement
{
    return el('div', { class: 'now' },
    [
        el('h2', { text: NOW.heading }),
        ...NOW.lines.map((line) => el('p', { text: line })),
    ]);
}

function tally(): HTMLElement
{
    return el('div', { class: 'tally' },
        TALLY.map(({ figure, label }) => el('span', {},
        [
            el('b', { text: figure }),
            document.createTextNode(` ${label}`),
        ])));
}

export function heroSection(): HTMLElement
{
    return el('section', { class: 'say' },
    [
        face(),
        claim(),
        el('p', { text: CLAIM.under }),
        proof(),
        now(),
        tally(),
    ]);
}

export { LEAD };
