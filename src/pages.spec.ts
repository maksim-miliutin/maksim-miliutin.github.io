import { describe, expect, it } from 'vitest';
import front from '../index.html?raw';
import lost from '../public/404.html?raw';

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
});
