import { describe, expect, it } from 'vitest';
import { along, arcTo, CITIES, ease, HOME, pathTo, project } from './atlas';

describe('project', () =>
{
    it('puts the three cities where the map draws them', () =>
    {
        expect(project(37.6, 55.75).x).toBeCloseTo(327.3, 0);
        expect(project(2.35, 48.85).x).toBeCloseTo(92.3, 0);
        expect(project(-6.26, 53.35).x).toBeCloseTo(34.9, 0);
    });

    it('runs north to south down the picture', () =>
    {
        expect(project(0, 60).y).toBeLessThan(project(0, 40).y);
    });

    it('runs west to east across it', () =>
    {
        expect(project(-10, 50).x).toBeLessThan(project(30, 50).x);
    });
});

describe('the cities', () =>
{
    it('knows the three and says something about each', () =>
    {
        for (const city of [CITIES.moscow, CITIES.paris, CITIES.dublin])
        {
            expect(city.say.length).toBeGreaterThan(10);
        }
    });

    it('starts at home', () =>
    {
        expect(HOME).toBe(CITIES.moscow);
    });
});

describe('along', () =>
{
    const paris = CITIES.paris;

    it('starts at home and finishes at the city', () =>
    {
        expect(along(paris, 0).x).toBeCloseTo(HOME.x, 1);
        expect(along(paris, 1).x).toBeCloseTo(paris.x, 1);
        expect(along(paris, 1).y).toBeCloseTo(paris.y, 1);
    });

    it('bows away from the straight line', () =>
    {
        const straight = (HOME.y + paris.y) / 2;

        expect(along(paris, 0.5).y).toBeLessThan(straight);
    });

    it('keeps moving the whole way', () =>
    {
        const points = [0, 0.25, 0.5, 0.75, 1].map((t) => along(paris, t).x);

        for (let i = 1; i < points.length; i += 1)
        {
            expect(points[i] as number).toBeLessThan(points[i - 1] as number);
        }
    });
});

describe('ease', () =>
{
    it('starts still and ends still', () =>
    {
        expect(ease(0)).toBe(0);
        expect(ease(1)).toBe(1);
    });

    it('is halfway at halfway', () =>
    {
        expect(ease(0.5)).toBeCloseTo(0.5, 5);
    });
});

describe('pathTo', () =>
{
    it('draws from home to the city through the arc', () =>
    {
        const d = pathTo(CITIES.dublin);
        const { midX } = arcTo(CITIES.dublin);

        expect(d.startsWith(`M${HOME.x}`)).toBe(true);
        expect(d).toContain(midX.toString());
        expect(d.endsWith(`${CITIES.dublin.x} ${CITIES.dublin.y}`)).toBe(true);
    });
});
