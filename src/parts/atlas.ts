import { HEADS, MAP } from '../say/content';
import { el, svg } from '../dom';
import { BORDERS, LAND } from './coast';

export interface City
{
	x: number;
	y: number;
	label: { anchor: 'start' | 'middle' | 'end'; dx: number; dy: number };
}

export type CityName = keyof typeof MAP.cities;

interface MapParts
{
	pin: SVGElement;
	leg: SVGElement;
	legend: HTMLElement;
	buttons: Map<CityName, HTMLButtonElement>;
}

export function project(lon: number, lat: number): { x: number; y: number }
{
	return { x: ((lon + 11.5) / 0.3) * 2, y: ((61.5 - lat) / 0.3) * 3 };
}

export const CITIES =
{
	moscow:
	{
		...project(37.6, 55.75),
		label: { anchor: 'end', dx: -7, dy: 3 },
	},
	paris:
	{
		...project(2.35, 48.85),
		label: { anchor: 'middle', dx: 0, dy: 15 },
	},
	amsterdam:
	{
		...project(4.9, 52.37),
		label: { anchor: 'start', dx: 7, dy: 3 },
	},
} satisfies Record<CityName, City>;

const HOME_NAME: CityName = 'moscow';

export const HOME: City = CITIES[HOME_NAME];

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
	const keys = Object.keys(CITIES) as CityName[];

	const shapes = (paths: string[], group: string): SVGElement =>
		svg('g', { class: group }, paths.map((d) => svg('path', { d })));

	const mark = (city: City): SVGElement => svg('rect',
	{
		class: city === HOME ? 'here' : 'there',
		x: (city.x - 3).toFixed(1),
		y: (city.y - 3).toFixed(1),
		width: '6',
		height: '6',
	});

	const label = (key: CityName): SVGElement => svg('text',
	{
		class: 'label',
		x: (CITIES[key].x + CITIES[key].label.dx).toFixed(1),
		y: (CITIES[key].y + CITIES[key].label.dy).toFixed(1),
		'text-anchor': CITIES[key].label.anchor,
	}, [MAP.cities[key].name]);

	const pin = svg('g', { transform: `translate(${HOME.x} ${HOME.y})` },
	[
		svg('circle', { class: 'pin-halo', r: '9' }),
		svg('circle', { class: 'pin-dot', r: '4' }),
	]);

	const leg = svg('path', { class: 'leg', d: '' });

	const picture = svg('svg',
	{
		viewBox: '10 30 340 210',
		role: 'img',
		'aria-label': MAP.label,
	},
	[
		shapes(LAND, 'land'),
		shapes(BORDERS, 'borders'),
		leg,
		...keys.map((key) => mark(CITIES[key])),
		pin,
		...keys.map(label),
	]);

	const buttons = new Map(keys.map((key) => [key, el('button',
	{
		type: 'button',
		'aria-pressed': String(CITIES[key] === HOME),
		text: MAP.cities[key].name,
	})]));

	const legend = el('p', { class: 'legend', text: MAP.cities[HOME_NAME].say });

	wireMap({ pin, leg, legend, buttons });

	return el('section', { class: 'moving' },
	[
		el('h2', { text: HEADS.atlas }),
		el('div', { class: 'plot' }, [picture]),
		el('div', { class: 'cities' }, [...buttons.values()]),
		legend,
	]);
}

function wireMap(parts: MapParts): void
{
	const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	const put = (x: number, y: number): void =>
	{
		parts.pin.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
	};

	const fly = (name: CityName): void =>
	{
		const to = CITIES[name];

		for (const [key, button] of parts.buttons)
		{
			button.setAttribute('aria-pressed', String(key === name));
		}

		parts.legend.textContent = MAP.cities[name].say;

		if (to === HOME)
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

	for (const [key, button] of parts.buttons)
	{
		button.addEventListener('click', () => fly(key));
	}
}
