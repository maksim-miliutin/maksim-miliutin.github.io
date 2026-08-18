import { $, $$, need, stillMotion } from './dom';
import { onLanguageChange, t } from './i18n';
import type { Key } from './i18n-data';

export type CityId = 'moscow' | 'paris' | 'dublin';

interface City
{
    x: number;
    y: number;
    key: Key;
}

// the map was rasterised from Natural Earth at 0.3 degrees per cell, two units
// wide and three tall; a city has to land on the same grid as the coastline
export const project = (lon: number, lat: number): { x: number; y: number } =>
({
    x: Math.round(((lon + 11.5) / 0.3) * 2 * 10) / 10,
    y: Math.round(((61.5 - lat) / 0.3) * 3 * 10) / 10,
});

export const HOME: CityId = 'moscow';

export const CITIES: Record<CityId, City> =
{
    moscow: { x: 327.4, y: 57.4, key: 'map.moscow' },
    paris: { x: 92.3, y: 126.4, key: 'map.paris' },
    dublin: { x: 34.9, y: 81.5, key: 'map.dublin' },
};

const FLIGHT_MS = 700;

export function initAtlas(): void
{
    const map = $('#map');

    if (map === null)
    {
        return;
    }

    const pin = need('#pin', map);
    const route = need('#route', map);
    const fromCell = need('#map-from', map);
    const toCell = need('#map-to', map);
    const buttons = $$<HTMLButtonElement>('[data-city]', map);

    let at: CityId = HOME;
    let cameFrom: CityId | null = null;
    let flying = false;

    const place = (x: number, y: number): void =>
    {
        pin.setAttribute('transform', `translate(${x} ${y})`);
    };

    const paint = (): void =>
    {
        fromCell.textContent = t(CITIES[cameFrom ?? HOME].key);
        toCell.textContent = cameFrom === null ? t('map.pick') : t(CITIES[at].key);
    };

    const land = (next: CityId): void =>
    {
        flying = false;
        at = next;
        map.classList.remove('busy');

        for (const button of buttons)
        {
            button.setAttribute('aria-pressed', String(button.dataset.city === next));
        }
    };

    const flyTo = (next: CityId): void =>
    {
        if (flying || next === at)
        {
            return;
        }

        const from = CITIES[at];
        const to = CITIES[next];

        // the line is drawn first and the pin walks the same two points, so they cannot drift
        route.setAttribute('x1', String(from.x));
        route.setAttribute('y1', String(from.y));
        route.setAttribute('x2', String(to.x));
        route.setAttribute('y2', String(to.y));

        flying = true;
        cameFrom = at;
        map.classList.add('busy');
        fromCell.textContent = t(from.key);
        toCell.textContent = t(to.key);

        if (stillMotion())
        {
            place(to.x, to.y);
            land(next);
            return;
        }

        const started = performance.now();

        const step = (now: number): void =>
        {
            const progress = Math.min(1, (now - started) / FLIGHT_MS);
            const eased = 1 - Math.pow(1 - progress, 3);

            place(from.x + (to.x - from.x) * eased, from.y + (to.y - from.y) * eased);

            if (progress < 1)
            {
                requestAnimationFrame(step);
                return;
            }

            land(next);
        };

        requestAnimationFrame(step);
    };

    for (const button of buttons)
    {
        button.addEventListener('click', () =>
        {
            const id = button.dataset.city;

            if (id === 'moscow' || id === 'paris' || id === 'dublin')
            {
                flyTo(id);
            }
        });
    }

    const home = CITIES[HOME];

    place(home.x, home.y);
    route.setAttribute('x1', String(home.x));
    route.setAttribute('y1', String(home.y));
    route.setAttribute('x2', String(home.x));
    route.setAttribute('y2', String(home.y));

    paint();
    onLanguageChange(paint);
}
