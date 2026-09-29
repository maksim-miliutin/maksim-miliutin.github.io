import { el } from '../dom';
import { HEADS, WORKS, Work } from '../say/content';
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

function row(work: Work, box: HTMLDialogElement): HTMLElement
{
    return el('div', { class: 'row' },
    [
        named(work, box),
        el('i', { text: work.figure }),
        el('span', { text: work.what }),
    ]);
}

// Shipped above started: the first question a reader has is what is real, and
// a list that mixes the two makes them hunt for the answer.
function group(said: string, some: Work[], box: HTMLDialogElement): HTMLElement[]
{
    if (some.length === 0)
    {
        return [];
    }

    return [
        el('p', { class: 'state', text: said }),
        ...some.map((work) => row(work, box)),
    ];
}

export function worksSection(): HTMLElement
{
    const box = storyBox();

    const out = WORKS.filter((work) => work.state === 'shipped');
    const started = WORKS.filter((work) => work.state === 'unfinished');

    return el('section', { class: 'made' },
    [
        el('h2', { text: HEADS.works }),
        el('div', { class: 'scroll' },
        [
            ...group(HEADS.out, out, box),
            ...group(HEADS.started, started, box),
        ]),
        box,
    ]);
}
