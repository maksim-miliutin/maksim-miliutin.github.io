import { describe, expect, it } from 'vitest';
import { LEAD, SAID, Work } from './content';
import { TONGUES, Tongue } from './tongue';

const tables = TONGUES.map((tongue) => [tongue, SAID[tongue]] as const);

const VERSION = /^v\d+\.\d+\.\d+ · /;

function work(tongue: Tongue, name: string): Work
{
	const found = SAID[tongue].works.find((one) => one.name === name);

	if (found === undefined)
	{
		throw new Error(`${tongue}: no ${name} on the page`);
	}

	return found;
}

// The word the rest of the out shelf carries, so a release can be held to it.
function shipped(tongue: Tongue): string
{
	return work(tongue, 'Bronyka Shop').figure;
}

describe('the three languages', () =>
{
	it('has a table for every language offered', () =>
	{
		for (const [tongue, table] of tables)
		{
			expect(table, tongue).toBeDefined();
		}
	});

	it('lists the same work in the same order everywhere', () =>
	{
		const names = tables.map(([, table]) => table.works.map((one) => one.name));

		for (const one of names)
		{
			expect(one).toEqual(names[0]);
		}
	});

	it('tells a story wherever the others tell one', () =>
	{
		SAID.en.works.forEach((work, at) =>
		{
			const lengths = tables.map(([, table]) => (table.works[at]?.story ?? []).length);

			expect(lengths, work.name).toEqual(lengths.map(() => lengths[0]));
		});
	});

	it('keeps the same addresses behind the same links', () =>
	{
		SAID.en.works.forEach((work, at) =>
		{
			const where = tables.map(([, table]) =>
				(table.works[at]?.ways ?? []).map((way) => way.href));

			expect(where, work.name).toEqual(where.map(() => where[0]));
		});
	});

	it('sends every language to the same places', () =>
	{
		const where = tables.map(([, table]) => table.links.map((one) => one.href));

		for (const one of where)
		{
			expect(one).toEqual(where[0]);
		}
	});

	it('counts the same things in the tally', () =>
	{
		const figures = tables.map(([, table]) => table.tally.map((one) => one.figure));

		for (const one of figures)
		{
			expect(one).toEqual(figures[0]);
		}
	});

	it('says something in every line, in every language', () =>
	{
		for (const [tongue, table] of tables)
		{
			expect(table.who.role.length, tongue).toBeGreaterThan(3);
			expect(table.claim.under.length, tongue).toBeGreaterThan(80);
			expect(table.now.lines.length, tongue).toBe(3);
			expect(table.rules.length, tongue).toBeGreaterThan(40);
		}
	});

	it('writes no long dashes anywhere', () =>
	{
		for (const [tongue, table] of tables)
		{
			expect(JSON.stringify(table), tongue).not.toContain('\u2014');
		}
	});
});

describe('the headings', () =>
{
	it('are translated rather than pinned to one language', () =>
	{
		const works = tables.map(([, table]) => table.heads.works);

		expect(new Set(works).size, works.join(' / ')).toBe(TONGUES.length);
	});

	it('name every section the page draws', () =>
	{
		for (const [tongue, table] of tables)
		{
			for (const [what, said] of Object.entries(table.heads))
			{
				expect(said.length, `${tongue}: ${what}`).toBeGreaterThan(2);
			}
		}
	});
});

describe('the column on the right', () =>
{
	// A version in front is the one thing allowed to differ, and an early release
	// is let off the shared word: calling a 0.1 shipped would oversell it.
	it('says the same thing for everything that is out, a version aside', () =>
	{
		for (const [tongue, table] of tables)
		{
			const out = table.works
				.filter((one) => one.shelf === 'out' && !one.figure.startsWith('v0.'))
				.map((one) => one.figure.replace(VERSION, ''));

			expect(new Set(out).size, `${tongue}: ${out.join(', ')}`).toBe(1);
		}
	});
});

describe('the Obxod release', () =>
{
	const obxod = 'https://github.com/maksim-miliutin/Obxod';

	it('shows Obxod as 1.0.0 and shipped, in every language', () =>
	{
		for (const tongue of TONGUES)
		{
			expect(work(tongue, 'Obxod').figure).toBe(`v1.0.0 · ${shipped(tongue)}`);
		}
	});

	it('sends the download to the release and the code to the repository', () =>
	{
		expect(work('en', 'Obxod').ways).toEqual(
		[
			{ label: 'Download for Windows', href: `${obxod}/releases/tag/v1.0.0` },
			{ label: 'Open code', href: obxod },
		]);
	});

	// The Windows release and the Android port are separate things; a link from one
	// to the other in the release's own story reads as if the port shipped with it.
	it('leaves the Android port out of the Windows release', () =>
	{
		for (const tongue of TONGUES)
		{
			const hrefs = (work(tongue, 'Obxod').ways ?? []).map((way) => way.href);

			expect(hrefs.join(' '), tongue).not.toContain('obxod-mobile');
			expect(work(tongue, 'obxod-mobile').shelf, tongue).toBe('going');
		}
	});

	it('keeps the technical names as they are, in every language', () =>
	{
		const names =
		{
			Obxod: ['WinDivert', 'TLS ClientHello', 'atomic.Pointer', 'STUN'],
		};

		for (const tongue of TONGUES)
		{
			for (const [project, terms] of Object.entries(names))
			{
				const said = JSON.stringify(work(tongue, project));

				for (const term of terms)
				{
					expect(said, `${tongue}: ${project}`).toContain(term);
				}
			}
		}
	});
});

describe('the line under the kit', () =>
{
	it('says as many as it leads with, in every language', () =>
	{
		const seven = { en: /^Seven /, ru: /^Семь /, fr: /^Sept / };

		expect(LEAD).toHaveLength(7);

		for (const [tongue, table] of tables)
		{
			expect(table.kitSay, tongue).toMatch(seven[tongue]);
		}
	});
});

describe('the map', () =>
{
	it('says something about every city, in every language', () =>
	{
		for (const [tongue, table] of tables)
		{
			for (const [key, city] of Object.entries(table.map.cities))
			{
				expect(city.name.length, `${tongue}: ${key}`).toBeGreaterThan(2);
				expect(city.say.length, `${tongue}: ${key}`).toBeGreaterThan(10);
			}
		}
	});
});
