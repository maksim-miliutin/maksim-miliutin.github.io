import { el } from '../dom';
import { HEADS, SHELVES, WORKS, Work } from '../say/content';
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

// Out above the rest: the first question a reader has is what is real, and a
// list that mixes the two makes them hunt for the answer.
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

	const shelves = SHELVES.flatMap((shelf) =>
		group(HEADS[shelf], WORKS.filter((work) => work.shelf === shelf), box));

	return el('section', { class: 'made' },
	[
		el('h2', { text: HEADS.works }),
		el('div', { class: 'scroll' }, shelves),
		box,
	]);
}
