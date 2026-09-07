import { el, svg } from './dom';
import { BORDERS, LAND } from './coast';

export interface City
{
    x: number;
    y: number;
    say: string;
}

export function project(lon: number, lat: number): { x: number; y: number }
{
    return { x: ((lon + 11.5) / 0.3) * 2, y: ((61.5 - lat) / 0.3) * 3 };
}

export const CITIES =
{
    moscow: { ...project(37.6, 55.75), say: 'Here now. Remote straight away.' },
    paris: { ...project(2.35, 48.85),
        say: 'Paris. On site from 2027, paperwork mine to start.' },
    dublin: { ...project(-6.26, 53.35),
        say: 'Dublin. On site from 2027, paperwork mine to start.' },
} satisfies Record<string, City>;

export type CityName = keyof typeof CITIES;

export const HOME: City = CITIES.moscow;

const FLIGHT_MS = 750;

export function arcTo(to: City): { midX: number; midY: number }
{
    return {
        midX: (HOME.x + to.x) / 2,
        midY: (HOME.y + to.y) / 2 - Math.abs(HOME.x - to.x) * 0.16,
    };
}

export function along(to: City, t: number): { x: number; y: number }
{
    const { midX, midY } = arcTo(to);
    const u = 1 - t;

    return {
        x: u * u * HOME.x + 2 * u * t * midX + t * t * to.x,
        y: u * u * HOME.y + 2 * u * t * midY + t * t * to.y,
    };
}

export function ease(t: number): number
{
    return t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2;
}

export function pathTo(to: City): string
{
    const { midX, midY } = arcTo(to);

    return `M${HOME.x} ${HOME.y} Q${midX} ${midY} ${to.x} ${to.y}`;
}

export function mapSection(): HTMLElement
{
    const shapes = (paths: string[], group: string): SVGElement =>
        svg('g', { class: group }, paths.map((d) => svg('path', { d })));

    const pin = svg('g', { id: 'pin', transform: `translate(${HOME.x} ${HOME.y})` },
    [
        svg('circle', { class: 'pin-halo', r: '9' }),
        svg('circle', { class: 'pin-dot', r: '4' }),
    ]);

    const mark = (city: City, klass: string): SVGElement => svg('rect',
    {
        class: klass,
        x: (city.x - 3).toFixed(1),
        y: (city.y - 3).toFixed(1),
        width: '6',
        height: '6',
    });

    const name = (city: City, text: string, anchor: string, dx: number, dy: number) =>
        svg('text',
        {
            class: 'label',
            x: (city.x + dx).toFixed(1),
            y: (city.y + dy).toFixed(1),
            'text-anchor': anchor,
        }, [text]);

    const picture = svg('svg',
    {
        viewBox: '10 30 340 210',
        role: 'img',
        'aria-label': 'Map of Europe with Moscow, Paris and Dublin marked',
    },
    [
        shapes(LAND, 'land'),
        shapes(BORDERS, 'borders'),
        svg('path', { class: 'leg', id: 'leg', d: '' }),
        mark(CITIES.paris, 'there'),
        mark(CITIES.dublin, 'there'),
        mark(HOME, 'here'),
        pin,
        name(HOME, 'Moscow', 'end', -7, 3),
        name(CITIES.paris, 'Paris', 'middle', 0, 15),
        name(CITIES.dublin, 'Dublin', 'start', 7, 3),
    ]);

    const buttons = (['moscow', 'paris', 'dublin'] as const).map((key) => el('button',
    {
        type: 'button',
        'data-city': key,
        'aria-pressed': String(key === 'moscow'),
        text: key.charAt(0).toUpperCase() + key.slice(1),
    }));

    return el('section', { class: 'moving' },
    [
        el('h2', { text: 'Where I am going' }),
        el('div', { class: 'plot' }, [picture]),
        el('div', { class: 'cities' }, buttons),
        el('p', { class: 'legend', id: 'legend', text: HOME.say }),
    ]);
}

export interface MapParts
{
    pin: SVGGElement;
    leg: SVGPathElement;
    legend: HTMLElement;
    buttons: NodeListOf<HTMLButtonElement>;
}

export function wireMap(parts: MapParts): void
{
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const put = (x: number, y: number): void =>
    {
        parts.pin.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
    };

    const fly = (name: string): void =>
    {
        const to = CITIES[name as CityName] as City | undefined;

        if (to === undefined)
        {
            return;
        }

        for (const one of parts.buttons)
        {
            one.setAttribute('aria-pressed', String(one.dataset.city === name));
        }

        parts.legend.textContent = to.say;

        if (name === 'moscow')
        {
            parts.leg.setAttribute('d', '');
            put(HOME.x, HOME.y);

            return;
        }

        parts.leg.setAttribute('d', pathTo(to));

        if (still)
        {
            put(to.x, to.y);

            return;
        }

        const started = performance.now();

        const step = (now: number): void =>
        {
            const t = Math.min(1, (now - started) / FLIGHT_MS);
            const { x, y } = along(to, ease(t));

            put(x, y);

            if (t < 1)
            {
                requestAnimationFrame(step);
            }
        };

        requestAnimationFrame(step);
    };

    for (const one of parts.buttons)
    {
        one.addEventListener('click', () => fly(one.dataset.city ?? 'moscow'));
    }
}
