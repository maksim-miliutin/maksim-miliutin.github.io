import { el } from '../dom';
import { WORKS, Work } from '../say/content';
import { storyBox, tell } from './story';

function named(work: Work, box: HTMLDialogElement): HTMLElement
{
    if (work.story === undefined)
    {
        return el('b', { text: work.name });
    }

    const open = el('button', { class: 'told', text: work.name });

    open.addEventListener('click', () => tell(box, work));

    return el('b', {}, [open]);
}

export function worksSection(): HTMLElement
{
    const box = storyBox();

    const rows = WORKS.map((work) => el('div', { class: 'row' },
    [
        named(work, box),
        el('i', { text: work.figure }),
        el('span', { text: work.what }),
    ]));

    return el('section', { class: 'made' },
    [
        el('h2', { text: 'Everything I have built' }),
        el('div', { class: 'scroll' }, rows),
        box,
    ]);
}
