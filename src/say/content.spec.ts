import { describe, expect, it } from 'vitest';
import { ALSO, LEAD, LINKS, TALLY, WORKS } from './content';

describe('the works', () =>
{
    it('names each one once', () =>
    {
        const names = WORKS.map((one) => one.name);

        expect(new Set(names).size).toBe(names.length);
    });

    it('gives every one a figure and a sentence', () =>
    {
        for (const work of WORKS)
        {
            expect(work.figure.length, work.name).toBeGreaterThan(0);
            expect(work.what.length, work.name).toBeGreaterThan(20);
        }
    });

    it('leads with the one in production', () =>
    {
        expect(WORKS[0]?.name).toBe('Bronyka Shop');
    });
});

describe('the tools', () =>
{
    it('names an icon for every tool in both lists', () =>
    {
        for (const tool of [...LEAD, ...ALSO])
        {
            expect(tool.icon, tool.name).toMatch(/^[a-z0-9-]+$/);
        }
    });

    it('does not name the same tool twice across both lists', () =>
    {
        const led = LEAD.map((one) => one.name);
        const overlap = ALSO.filter((one) => led.includes(one.name));

        expect(overlap.map((one) => one.name)).toEqual([]);
    });

    it('gives each tool a drawing of its own', () =>
    {
        const icons = [...LEAD, ...ALSO].map((one) => one.icon);

        expect(new Set(icons).size).toBe(icons.length);
    });

    it('keeps the leading set small enough to lead', () =>
    {
        expect(LEAD.length).toBeLessThanOrEqual(8);
    });
});

describe('the links', () =>
{
    it('gives every one somewhere to go', () =>
    {
        for (const link of LINKS)
        {
            expect(link.href, link.label).toMatch(/^(https:|mailto:|\/)/);
        }
    });
});

describe('the tally', () =>
{
    it('labels every figure', () =>
    {
        for (const one of TALLY)
        {
            expect(one.label.length).toBeGreaterThan(0);
        }
    });
});
