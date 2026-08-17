import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { CITIES, HOME, project, type CityId } from './atlas';

// real coordinates, so the projection is checked against the world and not against itself
const REAL: Record<CityId, [number, number]> = {
    moscow: [37.6173, 55.7558],
    paris: [2.3522, 48.8566],
    dublin: [-6.2603, 53.3498],
};

const html = readFileSync('index.html', 'utf8');
const markers = [...html.matchAll(/<rect class="(spot|home)" x="([\d.]+)" y="([\d.]+)"/g)].map(m => ({
    kind: m[1]!,
    x: Number(m[2]!) + 3.5,
    y: Number(m[3]!) + 3.5,
}));

describe('atlas', () => {
    it.each(Object.keys(CITIES) as CityId[])('%s sits where the projection puts it', id => {
        const { x, y } = project(...REAL[id]);
        expect(CITIES[id].x).toBeCloseTo(x, 1);
        expect(CITIES[id].y).toBeCloseTo(y, 1);
    });

    it('every city has a marker drawn on the map', () => {
        for (const id of Object.keys(CITIES) as CityId[]) {
            const city = CITIES[id];
            const found = markers.some(
                m => Math.abs(m.x - city.x) < 1.5 && Math.abs(m.y - city.y) < 1.5,
            );
            expect(found, `${id} has no rect in index.html`).toBe(true);
        }
    });

    it('home is the only marker drawn as home', () => {
        const home = markers.filter(m => m.kind === 'home');
        expect(home).toHaveLength(1);
        expect(home[0]!.x).toBeCloseTo(CITIES[HOME].x, 0);
    });

    it('stays inside the drawn viewBox', () => {
        for (const city of Object.values(CITIES)) {
            expect(city.x).toBeGreaterThan(0);
            expect(city.x).toBeLessThan(360);
            expect(city.y).toBeGreaterThan(0);
            expect(city.y).toBeLessThan(276);
        }
    });
});
