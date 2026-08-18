import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { CITIES, HOME, project, type CityId } from './atlas';

// real coordinates, so the projection is checked against the world and not against itself
const REAL: Record<CityId, [number, number]> =
{
    moscow: [37.6173, 55.7558],
    paris: [2.3522, 48.8566],
    dublin: [-6.2603, 53.3498],
};

const MARKER_HALF = 3.5;

const html = readFileSync('index.html', 'utf8');

const MARKER = /<rect class="(spot|home)" x="([\d.]+)" y="([\d.]+)"/g;

const markers = [...html.matchAll(MARKER)].map((m) =>
({
    kind: m[1] ?? '',
    x: Number(m[2]) + MARKER_HALF,
    y: Number(m[3]) + MARKER_HALF,
}));

describe('atlas', () =>
{
    it('puts every city where its real coordinates project to', () =>
    {
        for (const id of Object.keys(CITIES) as CityId[])
        {
            const [lon, lat] = REAL[id];
            const where = project(lon, lat);

            expect(CITIES[id].x, id).toBeCloseTo(where.x, 1);
            expect(CITIES[id].y, id).toBeCloseTo(where.y, 1);
        }
    });

    // the coordinates live twice: here and as marker rects in the markup
    it('draws a marker under every city', () =>
    {
        for (const id of Object.keys(CITIES) as CityId[])
        {
            const city = CITIES[id];
            const near = markers.some((m) =>
                Math.abs(m.x - city.x) < 1.5 && Math.abs(m.y - city.y) < 1.5);

            expect(near, `${id} has no rect in index.html`).toBe(true);
        }
    });

    it('marks exactly one city as home', () =>
    {
        const home = markers.filter((m) => m.kind === 'home');

        expect(home).toHaveLength(1);
        expect(home[0]?.x).toBeCloseTo(CITIES[HOME].x, 0);
    });

    it('keeps every city inside the drawn viewBox', () =>
    {
        for (const city of Object.values(CITIES))
        {
            expect(city.x).toBeGreaterThan(0);
            expect(city.x).toBeLessThan(360);
            expect(city.y).toBeGreaterThan(0);
            expect(city.y).toBeLessThan(276);
        }
    });
});
