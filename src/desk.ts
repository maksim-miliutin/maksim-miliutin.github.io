import { stillMotion } from './dom';

const IDLE_MS = 40_000;
const FRAME_MS = 1000 / 30;
const FOCAL = 420;
const STARS = 260;
const CRUISE = 1.6;
const WARP = 11;
const CLOUDS = 3;
const SHOOT_EVERY = 7000;

const FORCE_WARP = new URLSearchParams(location.search).has('saver');

type Star = { x: number; y: number; z: number; px: number; py: number };
type Cloud = { x: number; y: number; r: number; dx: number; dy: number; tint: number };
type Shot = { x: number; y: number; dx: number; dy: number; life: number };

export function initDesk() {
    const canvas = document.querySelector<HTMLCanvasElement>('#desk');
    if (!canvas || stillMotion()) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stars: Star[] = [];
    let clouds: Cloud[] = [];
    let shot: Shot | null = null;
    let nextShot = SHOOT_EVERY;
    let idleAt = 0;
    let last = 0;

    const css = (name: string) =>
        getComputedStyle(document.documentElement).getPropertyValue(name).trim();

    const spawnStar = (): Star => ({
        x: (Math.random() - 0.5) * canvas.width,
        y: (Math.random() - 0.5) * canvas.height,
        z: Math.random() * 900 + 60,
        px: 0,
        py: 0,
    });

    const spawnCloud = (): Cloud => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.min(canvas.width, canvas.height) * (0.35 + Math.random() * 0.3),
        dx: (Math.random() - 0.5) * 0.12,
        dy: (Math.random() - 0.5) * 0.08,
        tint: Math.random(),
    });

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        stars = Array.from({ length: STARS }, spawnStar);
        clouds = Array.from({ length: CLOUDS }, spawnCloud);
    };

    const drawClouds = () => {
        const warm = css('--lamp-warn');
        const cool = css('--title-a');

        for (const c of clouds) {
            c.x += c.dx;
            c.y += c.dy;
            if (c.x < -c.r) c.x = canvas.width + c.r;
            if (c.x > canvas.width + c.r) c.x = -c.r;
            if (c.y < -c.r) c.y = canvas.height + c.r;
            if (c.y > canvas.height + c.r) c.y = -c.r;

            const glow = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r);
            glow.addColorStop(0, c.tint > 0.5 ? warm : cool);
            glow.addColorStop(1, 'transparent');

            ctx.globalAlpha = 0.09;
            ctx.fillStyle = glow;
            ctx.fillRect(c.x - c.r, c.y - c.r, c.r * 2, c.r * 2);
        }
    };

    const drawStars = (speed: number, warping: boolean) => {
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const colour = css('--title-b');

        ctx.fillStyle = colour;
        ctx.strokeStyle = colour;
        ctx.lineWidth = 1;

        for (const s of stars) {
            const before = FOCAL / s.z;
            s.px = cx + s.x * before;
            s.py = cy + s.y * before;

            s.z -= speed;

            const k = FOCAL / s.z;
            const x = cx + s.x * k;
            const y = cy + s.y * k;

            if (s.z < 40 || Math.abs(x - cx) > cx + 60 || Math.abs(y - cy) > cy + 60) {
                Object.assign(s, spawnStar(), { z: 940 });
                continue;
            }

            const near = 1 - s.z / 960;
            ctx.globalAlpha = 0.28 + near * 0.6;

            if (warping) {
                ctx.beginPath();
                ctx.moveTo(s.px, s.py);
                ctx.lineTo(x, y);
                ctx.stroke();
            } else {
                const size = near > 0.75 ? 3 : near > 0.45 ? 2 : 1;
                ctx.fillRect(Math.round(x), Math.round(y), size, size);
            }
        }
    };

    const drawShot = (delta: number) => {
        nextShot -= delta;

        if (!shot && nextShot <= 0) {
            const fromLeft = Math.random() > 0.5;
            shot = {
                x: fromLeft ? -40 : canvas.width + 40,
                y: Math.random() * canvas.height * 0.6,
                dx: (fromLeft ? 1 : -1) * (9 + Math.random() * 5),
                dy: 3 + Math.random() * 2,
                life: 1,
            };
            nextShot = SHOOT_EVERY + Math.random() * SHOOT_EVERY;
        }

        if (!shot) return;

        shot.x += shot.dx;
        shot.y += shot.dy;
        shot.life -= 0.012;

        if (shot.life <= 0 || shot.x < -80 || shot.x > canvas.width + 80) {
            shot = null;
            return;
        }

        const tail = 16;
        const trail = ctx.createLinearGradient(shot.x, shot.y, shot.x - shot.dx * tail, shot.y - shot.dy * tail);
        trail.addColorStop(0, css('--ink'));
        trail.addColorStop(1, 'transparent');

        ctx.globalAlpha = shot.life;
        ctx.strokeStyle = trail;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(shot.x, shot.y);
        ctx.lineTo(shot.x - shot.dx * tail, shot.y - shot.dy * tail);
        ctx.stroke();
    };

    const tick = (now: number) => {
        requestAnimationFrame(tick);

        const delta = now - last;
        if (document.hidden || delta < FRAME_MS) return;
        last = now;

        const warping = FORCE_WARP || now - idleAt > IDLE_MS;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawClouds();
        drawStars(warping ? WARP : CRUISE, warping);
        drawShot(delta);
    };

    const wake = () => {
        idleAt = performance.now();
    };

    for (const event of ['pointerdown', 'pointermove', 'keydown', 'wheel', 'touchstart', 'scroll']) {
        window.addEventListener(event, wake, { passive: true });
    }

    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', wake);

    resize();
    wake();
    requestAnimationFrame(tick);
}
