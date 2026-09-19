import { describe, expect, it } from 'vitest';
import { WORKS } from '../say/content';

const told = WORKS.filter((one) => one.story !== undefined);

describe('the stories behind the work', () =>
{
    it('tells one for the projects that have something to tell', () =>
    {
        expect(told.map((one) => one.name)).toEqual(['Netwatch', 'NetCheck', 'Obxod']);
    });

    it('starts each one with the problem and ends with what was learnt', () =>
    {
        for (const one of told)
        {
            const heads = (one.story ?? []).map((part) => part.head);

            expect(heads[0], one.name).toMatch(/problem|wanted|asked|what it/i);
            expect(heads[heads.length - 1], one.name).toMatch(/learnt|learned/i);
        }
    });

    it('says something in every part, not a heading on its own', () =>
    {
        for (const one of told)
        {
            for (const part of one.story ?? [])
            {
                expect(part.body.length, `${one.name}: ${part.head}`).toBeGreaterThan(60);
            }
        }
    });

    it('keeps a story short enough to read in one sitting', () =>
    {
        for (const one of told)
        {
            expect((one.story ?? []).length, one.name).toBeLessThanOrEqual(8);
        }
    });

    it('gives every way in somewhere to go', () =>
    {
        for (const one of told)
        {
            for (const way of one.ways ?? [])
            {
                expect(way.href, `${one.name}: ${way.label}`).toMatch(/^https:/);
            }
        }
    });

    it('offers the code of anything it offers to download', () =>
    {
        for (const one of told)
        {
            const labels = (one.ways ?? []).map((way) => way.label);

            if (labels.length > 0)
            {
                expect(labels, one.name).toContain('Open code');
            }
        }
    });
});

describe('what makes a story worth reading', () =>
{
    it('carries a number somewhere, not only adjectives', () =>
    {
        for (const one of told)
        {
            const said = (one.story ?? []).map((part) => part.body).join(' ');

            expect(said, one.name).toMatch(
                /\d|one|two|three|four|five|six|eight|nine|ten|dozen|thousand/i);
        }
    });

    it('offers the code of every project whose code is open', () =>
    {
        const open = told.filter((one) => one.ways !== undefined);

        expect(open.map((one) => one.name)).toEqual(['Netwatch', 'Obxod']);
    });
});
