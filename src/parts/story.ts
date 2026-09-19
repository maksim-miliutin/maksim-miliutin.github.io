import { el } from '../dom';
import { Part, Way, Work } from '../say/content';

function ways(all: Way[]): HTMLElement[]
{
    if (all.length === 0)
    {
        return [];
    }

    return [el('div', { class: 'ways' },
        all.map(({ label, href }, at) => el('a',
        {
            class: at === 0 ? 'way first' : 'way',
            href,
            text: label,
        })))];
}

function parts(story: Part[]): HTMLElement[]
{
    return story.flatMap(({ head, body }) =>
    [
        el('h3', { text: head }),
        el('p', { text: body }),
    ]);
}

export function storyBox(): HTMLDialogElement
{
    const box = document.createElement('dialog');

    box.className = 'story';
    box.append(el('div', { class: 'told' }));

    // A click on the backdrop lands on the dialog itself rather than on
    // anything inside it, which is the only way to tell the two apart.
    box.addEventListener('click', (event) =>
    {
        if (event.target === box)
        {
            box.close();
        }
    });

    return box;
}

export function tell(box: HTMLDialogElement, work: Work): void
{
    if (work.story === undefined)
    {
        return;
    }

    const told = box.querySelector('.told');

    if (told === null)
    {
        return;
    }

    told.replaceChildren(
        el('button', { class: 'shut', text: '×', 'aria-label': 'Close' }),
        el('b', { class: 'name', text: work.name }),
        el('p', { class: 'what', text: work.what }),
        ...ways(work.ways ?? []),
        ...parts(work.story));

    told.querySelector('.shut')?.addEventListener('click', () => box.close());

    box.showModal();
}
