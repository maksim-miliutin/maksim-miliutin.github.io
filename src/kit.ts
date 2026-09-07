import { el } from './dom';
import { ALSO, LEAD } from './content';
import type { Tool } from './content';

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
        el('h2', { text: 'What I build with' }),
        el('p', { class: 'kit-say', text: 'Seven of these are most of my day.' }),
        el('div', { class: 'lead-tools' }, LEAD.map((one) => tool(one, 'lead-tool'))),
        el('div', { class: 'also-tools' }, ALSO.map((one) => tool(one, 'also-tool'))),
    ]);
}
