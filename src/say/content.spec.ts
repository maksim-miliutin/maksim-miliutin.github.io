import { describe, expect, it } from 'vitest';
import { SAID } from './content';
import { TONGUES } from './tongue';

const tables = TONGUES.map((tongue) => [tongue, SAID[tongue]] as const);

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
    it('says the same thing for everything that is out', () =>
    {
        for (const [tongue, table] of tables)
        {
            const out = table.works
                .filter((one) => one.state === 'shipped')
                .map((one) => one.figure);

            expect(new Set(out).size, `${tongue}: ${out.join(', ')}`).toBe(1);
        }
    });
});
