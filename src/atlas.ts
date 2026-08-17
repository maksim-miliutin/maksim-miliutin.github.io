import { $$, ease, need } from './dom';
import { onLanguageChange, t } from './i18n';
import type { Key } from './i18n-data';

export type CityId = 'moscow' | 'paris' | 'dublin';

type City = {
    x: number;
    y: number;
    key: Key;
};

export const CITIES: Record<CityId, City> = {
    moscow: { x: 327.4, y: 57.4, key: 'map.moscow' },
    paris: { x: 92.3, y: 126.4, key: 'map.paris' },
    dublin: { x: 34.9, y: 81.5, key: 'map.dublin' },
};

export const HOME: CityId = 'moscow';

// the map was rasterised from Natural Earth at 0.3 degrees per cell,
// 2 units wide and 3 tall; a city has to land on the same grid as the coastline
export const project = (lon: number, lat: number) => ({
    x: Math.round(((lon + 11.5) / 0.3) * 2 * 10) / 10,
    y: Math.round(((61.5 - lat) / 0.3) * 3 * 10) / 10,
});

export function initAtlas() {
    const map = document.querySelector('#map');
    if (!map) return;

    const pin = need('#pin', map);
    const route = need('#route', map);
    const fromCell = need('#map-from', map);
    const toCell = need('#map-to', map);
    const buttons = $$<HTMLButtonElement>('[data-city]', map);

    let at: CityId = HOME;
    let cameFrom: CityId | null = null;
    let flying = false;

    const place = (x: number, y: number) => pin.setAttribute('transform', `translate(${x} ${y})`);

    const paint = () => {
        fromCell.textContent = t(CITIES[cameFrom ?? HOME].key);
        toCell.textContent = cameFrom ? t(CITIES[at].key) : t('map.pick');
    };

    const flyTo = (next: CityId) => {
        if (flying || next === at) return;

        const from = CITIES[at];
        const to = CITIES[next];

        // the line is drawn first, then the pin walks it — same two points, no drift
        route.setAttribute('x1', String(from.x));
        route.setAttribute('y1', String(from.y));
        route.setAttribute('x2', String(to.x));
        route.setAttribute('y2', String(to.y));

        flying = true;
        map.classList.add('busy');
        cameFrom = at;
        fromCell.textContent = t(from.key);
        toCell.textContent = t(to.key);

        ease(
            700,
            p => place(from.x + (to.x - from.x) * p, from.y + (to.y - from.y) * p),
            () => {
                flying = false;
                at = next;
                map.classList.remove('busy');

                for (const button of buttons) {
                    button.setAttribute('aria-pressed', String(button.dataset.city === next));
                }
            },
        );
    };

    for (const button of buttons) {
        button.addEventListener('click', () => {
            const id = button.dataset.city as CityId | undefined;
            if (id && id in CITIES) flyTo(id);
        });
    }

    place(CITIES[HOME].x, CITIES[HOME].y);
    route.setAttribute('x1', String(CITIES[HOME].x));
    route.setAttribute('y1', String(CITIES[HOME].y));
    route.setAttribute('x2', String(CITIES[HOME].x));
    route.setAttribute('y2', String(CITIES[HOME].y));

    paint();
    onLanguageChange(paint);
}
