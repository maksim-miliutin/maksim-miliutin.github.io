type Attributes = Record<string, string>;

type Child = Node | string;

export function el<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    attributes: Attributes = {},
    children: Child[] = [],
): HTMLElementTagNameMap[K]
{
    const node = document.createElement(tag);

    for (const [name, value] of Object.entries(attributes))
    {
        if (name === 'class')
        {
            node.className = value;
            continue;
        }

        if (name === 'text')
        {
            node.textContent = value;
            continue;
        }

        node.setAttribute(name, value);
    }

    node.append(...children);

    return node;
}

export function svg(tag: string, attributes: Attributes = {}, children: Child[] = []): SVGElement
{
    const node = document.createElementNS('http://www.w3.org/2000/svg', tag);

    for (const [name, value] of Object.entries(attributes))
    {
        node.setAttribute(name, value);
    }

    node.append(...children);

    return node;
}

export function mount(id: string, node: Node): void
{
    const host = document.getElementById(id);

    if (host === null)
    {
        throw new Error(`No mount point "${id}" in the page`);
    }

    host.replaceChildren(node);
}
