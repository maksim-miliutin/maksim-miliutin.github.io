import { el } from '../dom';
import { HEADS, ALSO, KIT_SAY, LEAD } from '../say/content';
import type { Tool } from '../say/content';

function tool(one: Tool, klass: string): HTMLElement
{
    return el('div', { class: klass },
    [
        el('img', { src: `/assets/icons/${one.icon}.png`, alt: '' }),
        el('b', { text: one.name }),
    ]);
}

export function kitSection(): HTMLElement
{
    return el('section', { class: 'kit' },
    [
        el('h2', { text: HEADS.kit }),
        el('p', { class: 'kit-say', text: KIT_SAY }),
        el('div', { class: 'lead-tools' }, LEAD.map((one) => tool(one, 'lead-tool'))),
        el('div', { class: 'also-tools' }, ALSO.map((one) => tool(one, 'also-tool'))),
    ]);
}
