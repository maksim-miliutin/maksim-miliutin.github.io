export function $<T extends Element = HTMLElement>(
    selector: string,
    root: ParentNode = document,
): T | null
{
    return root.querySelector<T>(selector);
}

export function $$<T extends Element = HTMLElement>(
    selector: string,
    root: ParentNode = document,
): T[]
{
    return [...root.querySelectorAll<T>(selector)];
}

export function need<T extends Element = HTMLElement>(
    selector: string,
    root: ParentNode = document,
): T
{
    const element = root.querySelector<T>(selector);

    if (element === null)
    {
        throw new Error(`missing element: ${selector}`);
    }

    return element;
}

export const stillMotion = (): boolean => matchMedia('(prefers-reduced-motion: reduce)').matches;
