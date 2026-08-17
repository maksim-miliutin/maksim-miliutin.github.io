import { stillMotion } from './dom';

const LIFE = 520;
const MAX = 40;
const MIN_SPEED = 9;

type Spark = { x: number; y: number; dx: number; dy: number; born: number; hot: boolean };

export function initSparks() {
    const canvas = document.querySelector<HTMLCanvasElement>('#sparks');
    if (!canvas || stillMotion() || matchMedia('(hover: none)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const sparks: Spark[] = [];
    let lastX = 0;
    let lastY = 0;
    let running = false;

    const css = (name: string) =>
        getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    const draw = (now: number) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = sparks.length - 1; i >= 0; i--) {
            const s = sparks[i]!;
            const age = (now - s.born) / LIFE;

            if (age >= 1) {
                sparks.splice(i, 1);
                continue;
            }

            s.x += s.dx;
            s.y += s.dy;
            s.dy += 0.06;

            ctx.globalAlpha = 1 - age;
            ctx.fillStyle = s.hot ? css('--lamp-warn') : css('--title-b');
            const size = age < 0.4 ? 3 : 2;
            ctx.fillRect(Math.round(s.x), Math.round(s.y), size, size);
        }

        if (sparks.length) requestAnimationFrame(draw);
        else running = false;
    };

    window.addEventListener('pointermove', event => {
        const dx = event.clientX - lastX;
        const dy = event.clientY - lastY;
        lastX = event.clientX;
        lastY = event.clientY;

        if (Math.hypot(dx, dy) < MIN_SPEED || sparks.length >= MAX) return;

        sparks.push({
            x: event.clientX,
            y: event.clientY,
            dx: (Math.random() - 0.5) * 1.6,
            dy: (Math.random() - 0.5) * 1.6 - 0.4,
            born: performance.now(),
            hot: Math.random() > 0.6,
        });

        if (!running) {
            running = true;
            requestAnimationFrame(draw);
        }
    }, { passive: true });

    window.addEventListener('resize', resize);
    resize();
}
