import { $, stillMotion } from './dom';

const FRAME_MS = 1000 / 30;
const FOCAL = 420;
const STARS = 220;
const SPEED = 1.6;

interface Star
{
    x: number;
    y: number;
    z: number;
}

/** Draws the one thing on the page that moves: stars falling towards the viewer. */
export function initDesk(): void
{
    const canvas = $<HTMLCanvasElement>('#desk');

    if (canvas === null || stillMotion())
    {
        return;
    }

    const ctx = canvas.getContext('2d');

    if (ctx === null)
    {
        return;
    }

    let stars: Star[] = [];
    let last = 0;

    const spawn = (): Star =>
    ({
        x: (Math.random() - 0.5) * canvas.width,
        y: (Math.random() - 0.5) * canvas.height,
        z: Math.random() * 900 + 60,
    });

    const resize = (): void =>
    {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        stars = Array.from({ length: STARS }, spawn);
    };

    const draw = (): void =>
    {
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const root = getComputedStyle(document.documentElement);
        ctx.fillStyle = root.getPropertyValue('--title-b').trim();

        for (const star of stars)
        {
            star.z -= SPEED;

            const k = FOCAL / star.z;
            const x = cx + star.x * k;
            const y = cy + star.y * k;

            // a star that has flown past the edge is reused rather than left off screen
            if (star.z < 40 || Math.abs(x - cx) > cx + 60 || Math.abs(y - cy) > cy + 60)
            {
                Object.assign(star, spawn(), { z: 940 });
                continue;
            }

            const near = 1 - star.z / 960;
            const size = near > 0.7 ? 2 : 1;

            ctx.globalAlpha = 0.24 + near * 0.5;
            ctx.fillRect(Math.round(x), Math.round(y), size, size);
        }
    };

    const tick = (now: number): void =>
    {
        requestAnimationFrame(tick);

        if (document.hidden || now - last < FRAME_MS)
        {
            return;
        }

        last = now;
        draw();
    };

    window.addEventListener('resize', resize);

    resize();
    requestAnimationFrame(tick);
}
