import { describe, expect, it } from 'vitest';
import front from '../index.html?raw';
import lost from '../public/404.html?raw';
import { SAID } from './say/content';

const pages = [['index', front], ['404', lost]] as const;

describe('the pages themselves', () =>
{
	it('write no long dashes, the same as the tables', () =>
	{
		for (const [name, page] of pages)
		{
			expect(page, name).not.toContain('—');
		}
	});

	// The bug this guards: the head once named a LinkedIn address the page never
	// linked to, with a typo in it, and nothing noticed for days.
	it('names in the head every profile the page links to', () =>
	{
		const profiles = SAID.en.links
			.map((one) => one.href)
			.filter((href) => href.startsWith('https://'));

		for (const href of profiles)
		{
			expect(front, href).toContain(`"${href}"`);
		}
	});
});
