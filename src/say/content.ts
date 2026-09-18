export interface Work
{
    name: string;
    what: string;
    figure: string;
}

export interface Tool
{
    icon: string;
    name: string;
}

export const WHO =
{
    name: 'Maksim Miliutin',
    role: 'full-stack engineer',
    where: 'Moscow',
    when: 'remote now, on site from 2027',
    bio: 'Two years of Computer Science at RTU MIREA, then everything else learned by '
        + 'shipping and fixing what I shipped.',
};

export const LINKS =
[
    { label: 'Email', href: 'mailto:maksim.milutin06@gmail.com' },
    { label: 'Telegram', href: 'https://t.me/QQWaffles' },
    { label: 'GitHub', href: 'https://github.com/maksim-miliutin' },
    { label: 'CV', href: '/Maksim-Miliutin-CV.pdf' },
];

export const CLAIM =
{
    before: 'I run a shop that sells ',
    drawn: 'My Little Pony',
    after: ' figurines, and I wrote every line of it.',
    under: 'From an empty repository to production, alone. What I remember is not the '
        + 'feature list — it is the evening one order came out as two purchase '
        + 'requests, and the week messages reached everyone except the buyer. Neither '
        + 'crashed, and that is where the tests went next.',
};

export const SHOP =
{
    href: 'https://bronykashop.com',
    image: '/assets/bronyka.jpg',
    alt: 'The Bronyka Shop storefront',
    name: 'bronykashop.com',
    caption: ' — the storefront customers actually see',
};

export const NOW =
{
    heading: 'What I am doing now',
    lines:
    [
        'Two at once. Netwatch keeps a list of what was watched on this machine and '
        + 'sends none of it anywhere; NetCheck names the layer where a connection '
        + 'stops working, and then gets past the block it found.',

        'Looking for a full-stack or backend role where I keep this much ownership and '
        + 'learn from people who have run systems larger than mine.',
    ],
};

export const TALLY =
[
    { figure: '70+', label: 'orders' },
    { figure: '2026', label: 'running since' },
    { figure: '1', label: 'engineer' },
    { figure: '8', label: 'products solo' },
];

export const WORKS: Work[] =
[
    {
        name: 'Bronyka Shop',
        what: 'Collectibles marketplace in production. NestJS · Prisma · Postgres · Redis · React.',
        figure: 'live',
    },
    {
        name: 'Netwatch',
        what: 'A list of what was watched and listened to on this machine, across '
            + 'thirty-seven services. One Go binary, and it listens on loopback only.',
        figure: 'Go',
    },
    {
        name: 'NetCheck',
        what: 'Names the layer where your connection stops working, then gets past the '
            + 'block it found. Still being built.',
        figure: '658 tests',
    },
    {
        name: 'Trellis',
        what: 'Grammar as a dependency graph rather than a list of topics. Not shipped yet.',
        figure: '598 tests',
    },
    {
        name: 'Vydokh',
        what: 'Quitting vape without shame. A slip resets one number and leaves the other two '
            + 'alone.',
        figure: '262 tests',
    },
    {
        name: 'Veilla',
        what: 'A daily check-in call for a parent living alone. Audio and transcript are never '
            + 'stored.',
        figure: '157 checks',
    },
    {
        name: 'Reste',
        what: 'An €800 French crown at “70% reimbursed” returns €84. Reste says what you will '
            + 'actually pay.',
        figure: '67 tests',
    },
    {
        name: 'Pasmurno',
        what: 'A mood journal for five close people. No feed, no algorithm, chat encrypted on '
            + 'the device.',
        figure: '8 languages',
    },
];

export const LEAD: Tool[] =
[
    { icon: 'typescript', name: 'TypeScript' },
    { icon: 'golang', name: 'Go' },
    { icon: 'csharp', name: 'C#' },
    { icon: 'nestjs', name: 'NestJS' },
    { icon: 'postgresql', name: 'PostgreSQL' },
    { icon: 'react', name: 'React' },
    { icon: 'docker', name: 'Docker' },
];

export const ALSO: Tool[] =
[
    { icon: 'cpp', name: 'C++' },
    { icon: 'rust', name: 'Rust' },
    { icon: 'javascript', name: 'JavaScript' },
    { icon: 'dotnet', name: '.NET' },
    { icon: 'efcore', name: 'EF Core' },
    { icon: 'nodejs', name: 'Node.js' },
    { icon: 'fastify', name: 'Fastify' },
    { icon: 'fastapi', name: 'FastAPI' },
    { icon: 'socketio', name: 'Socket.IO' },
    { icon: 'redis', name: 'Redis' },
    { icon: 'prisma', name: 'Prisma' },
    { icon: 'sqlite', name: 'SQLite' },
    { icon: 'supabase', name: 'Supabase' },
    { icon: 'react-native', name: 'React Native' },
    { icon: 'expo', name: 'Expo' },
    { icon: 'vite', name: 'Vite' },
    { icon: 'qtcreator', name: 'Qt Creator' },
    { icon: 'nginx', name: 'nginx' },
];

export const REACH =
{
    heading: 'Getting in touch',
    line: 'Email is read the same day; Telegram is faster. Either is fine, and neither '
        + 'needs an introduction from anybody.',
};

export const RULES = '“Cannot compute” is an answer · every rate carries its dates '
    + '· a tab left open overnight was not nine hours of YouTube';

export const COLOPHON = 'Written by hand. No framework, no analytics.';
