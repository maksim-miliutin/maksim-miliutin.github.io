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

describe('the two Windows releases', () =>
{
	const obxod = 'https://github.com/maksim-miliutin/Obxod';
	const sublayer = 'https://github.com/maksim-miliutin/Sublayer';

	it('shows Obxod as 1.0.0 and shipped, in every language', () =>
	{
		for (const tongue of TONGUES)
		{
			expect(work(tongue, 'Obxod').figure).toBe(`v1.0.0 · ${shipped(tongue)}`);
		}
	});

	it('shows Sublayer as an early 0.1.0 rather than as finished', () =>
	{
		for (const tongue of TONGUES)
		{
			const figure = work(tongue, 'Sublayer').figure;

			expect(figure, tongue).toMatch(/^v0\.1\.0 · /);
			expect(figure.replace(VERSION, ''), tongue).not.toBe(shipped(tongue));
		}
	});

	it('sends the download to the release and the code to the repository', () =>
	{
		expect(work('en', 'Obxod').ways).toEqual(
		[
			{ label: 'Download for Windows', href: `${obxod}/releases/tag/v1.0.0` },
			{ label: 'Open code', href: obxod },
		]);

		expect(work('en', 'Sublayer').ways).toEqual(
		[
			{ label: 'Download v0.1.0', href: `${sublayer}/releases/tag/v0.1.0` },
			{ label: 'Open code', href: sublayer },
		]);
	});

	it('keeps Sublayer next to Obxod among what is out', () =>
	{
		const names = SAID.en.works.map((one) => one.name);

		expect(names.indexOf('Sublayer')).toBe(names.indexOf('Obxod') + 1);
		expect(work('en', 'Sublayer').shelf).toBe('out');
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
			Sublayer: ['WASAPI', 'whisper.cpp'],
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

	// The bug this guards: the brief for this page listed German and Spanish, and
	// 0.1.0 hears French and English only. A claim the program cannot back up is
	// the quickest way to lose a reader who downloads it.
	it('claims no language Sublayer 0.1.0 does not hear', () =>
	{
		const others = { en: /German|Spanish/i, ru: /немец|испан/i, fr: /allemand|espagnol/i };

		for (const tongue of TONGUES)
		{
			expect(JSON.stringify(work(tongue, 'Sublayer')), tongue).not.toMatch(others[tongue]);
		}
	});

	it('names both releases in the line about now, in every language', () =>
	{
		for (const [tongue, table] of tables)
		{
			const now = table.now.lines.join(' ');

			expect(now, tongue).toContain('Obxod');
			expect(now, tongue).toContain('v1.0.0');
			expect(now, tongue).toContain('Sublayer');
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
