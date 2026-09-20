export type Tongue = 'en' | 'ru' | 'fr';

const KEY = 'tongue';

export const TONGUES: Tongue[] = ['en', 'ru', 'fr'];

export function tongueName(tongue: Tongue): string
{
    if (tongue === 'ru')
    {
        return 'Русский';
    }

    return tongue === 'fr' ? 'Français' : 'English';
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
    return firstTongue(readStored(), navigator.languages ?? []);
}

export function wireTongue(buttons: HTMLElement): void
{
    buttons.addEventListener('click', (event) =>
    {
        const asked = (event.target as HTMLElement).dataset.tongue;

        if (!known(asked ?? null) || asked === spoken())
        {
            return;
        }

        writeStored(asked as Tongue);
        location.reload();
    });
}

function known(what: string | null | undefined): what is Tongue
{
    return what === 'en' || what === 'ru' || what === 'fr';
}

function readStored(): string | null
{
    try
    {
        return localStorage.getItem(KEY);
    }
    catch
    {
        return null;
    }
}

function writeStored(tongue: Tongue): void
{
    try
    {
        localStorage.setItem(KEY, tongue);
    }
    catch
    {
    }
}
