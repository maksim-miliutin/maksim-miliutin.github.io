import { readStored, writeStored } from '../stored';

export const TONGUES = ['en', 'ru', 'fr'] as const;

export type Tongue = (typeof TONGUES)[number];

const NAMES: Record<Tongue, string> = { en: 'English', ru: 'Русский', fr: 'Français' };

const KEY = 'tongue';

export function tongueName(tongue: Tongue): string
{
    return NAMES[tongue];
}

// Two letters rather than a word: the header already carries a role, a city,
// four links and a theme button, and three names take a quarter of the line.
export function tongueShort(tongue: Tongue): string
{
    return tongue.toUpperCase();
}

export function firstTongue(stored: string | null, asked: readonly string[]): Tongue
{
    if (known(stored))
    {
        return stored;
    }

    for (const one of asked)
    {
        const short = one.slice(0, 2).toLowerCase();

        if (known(short))
        {
            return short;
        }
    }

    return 'en';
}

export function spoken(): Tongue
{
    return firstTongue(readStored(KEY), navigator.languages ?? []);
}

export function wireTongue(buttons: HTMLElement): void
{
    buttons.addEventListener('click', (event) =>
    {
        const asked = (event.target as HTMLElement).dataset.tongue;

        if (!known(asked) || asked === spoken())
        {
            return;
        }

        writeStored(KEY, asked);
        location.reload();
    });
}

function known(what: string | null | undefined): what is Tongue
{
    return TONGUES.some((tongue) => tongue === what);
}
