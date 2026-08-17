export const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
    root.querySelector<T>(sel);

export const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
    [...root.querySelectorAll<T>(sel)];

export const need = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document): T => {
    const el = root.querySelector<T>(sel);
    if (!el) throw new Error(`missing element: ${sel}`);
    return el;
};

export const stillMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

export function ease(duration: number, onFrame: (progress: number) => void, onDone?: () => void) {
    if (stillMotion()) {
        onFrame(1);
        onDone?.();
        return;
    }

    const started = performance.now();

    const frame = (now: number) => {
        const p = Math.min(1, (now - started) / duration);
        onFrame(1 - Math.pow(1 - p, 3));
        if (p < 1) requestAnimationFrame(frame);
        else onDone?.();
    };

    requestAnimationFrame(frame);
}
