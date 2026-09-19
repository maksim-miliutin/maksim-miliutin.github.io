export interface Work
{
    name: string;
    what: string;
    figure: string;
    ways?: Way[];
    story?: Part[];
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
        + 'feature list. It is the evening one order came out as two purchase '
        + 'requests, and the week messages reached everyone except the buyer. Neither '
        + 'crashed, and that is where the tests went next.',
};

export const SHOP =
{
    href: 'https://bronykashop.com',
    image: '/assets/bronyka.jpg',
    alt: 'The Bronyka Shop storefront',
    name: 'bronykashop.com',
    caption: ', the storefront customers actually see',
};

export const NOW =
{
    heading: 'What I am doing now',
    lines:
    [
        'Netwatch is out: a Windows build, a Firefox add-on, and a list of what was '
        + 'watched that never leaves the machine it was watched on.',

        'Obxod is the one being built. It stands between the network card and the '
        + 'machine, and answers a block by giving the inspector a different name '
        + 'from the one the server is left holding.',

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
        ways:
        [
            {
                label: 'Download for Windows',
                href: 'https://github.com/maksim-miliutin/Netwatch/releases/latest',
            },
            { label: 'Firefox add-on', href: 'https://addons.mozilla.org/addon/netwatch/' },
            { label: 'Open code', href: 'https://github.com/maksim-miliutin/Netwatch' },
        ],
        story:
        [
            {
                head: 'What it recognises',
                body: 'YouTube, Twitch, Kinopoisk, Spotify, Yandex Music and thirty-two '
                    + 'more, shorts and clips and short links included. A player that '
                    + 'keeps the track out of the address is asked the other way round: '
                    + 'the page is asked what it is playing. Your own sites can be '
                    + 'added from the page itself.',
            },
            {
                head: 'What friends see',
                body: 'A card on your Discord profile with the name, whose it is, a bar '
                    + 'that runs and a button to the address. It works out of the box. '
                    + 'Services can be kept off it one by one, and the list keeps them '
                    + 'either way.',
            },
            {
                head: 'What you see',
                body: 'The day, folded, with the time spread over the services that '
                    + 'took it. A week, a month or the lot. A search, a cross to strike '
                    + 'one play out, and the whole thing as a spreadsheet. In English, '
                    + 'Russian or French.',
            },
            {
                head: 'What leaves the machine',
                body: 'Only the Discord card, and only while it is on. There is no '
                    + 'server, no account, no telemetry and no analytics. The extension '
                    + 'reaches 127.0.0.1 and nothing else, and the browser holds it to '
                    + 'that.',
            },
            {
                head: 'What I learnt',
                body: 'The compiler caught four name collisions that JavaScript would '
                    + 'have swallowed, because three scripts of an extension share one '
                    + 'global scope. And four services were silently not being written '
                    + 'down for weeks: shorts, clips, short links, and a player that '
                    + 'keeps the track out of the address. Every one was found by '
                    + 'probing rather than by reading, which is why eleven packages '
                    + 'are under test and the extension is not.',
            },
        ],
    },
    {
        name: 'NetCheck',
        what: 'Named the layer where a connection stops working: the router, the '
            + 'provider, the names, the handshake. Diagnosis ran into a ceiling '
            + 'rather than a wall, and the measuring went on into Obxod.',
        figure: 'closed',
        story:
        [
            {
                head: 'What it was asked to do',
                body: 'Say what is actually wrong with a connection. Not "the '
                    + 'internet works" but where the silence starts: the router, '
                    + 'the provider, the names, or the site itself. And then carry '
                    + 'a connection past the box that reads the first packet, finds '
                    + 'the name of the site in it and cuts the line.',
            },
            {
                head: 'A verdict is where the path stops',
                body: 'Nine checks as one path rather than a list of ticks, and each '
                    + 'one is worth running only if the one above it passed. A '
                    + 'gateway that refuses a connection is alive: it got the packet '
                    + 'and answered. Only silence leaves the question open, and that '
                    + 'is what separates a dead router from a dead provider.',
            },
            {
                head: 'A setting for every site',
                body: 'The driver started with one setting for everyone, the newest. '
                    + 'Different addresses of the same service want different things, '
                    + 'and what suited one broke another. Pulling them apart was a '
                    + 'day of its own.',
            },
            {
                head: 'Leave the small datagrams alone',
                body: 'A copy flies ahead of the real packet. But the tiny datagrams '
                    + 'are the probes a client uses to measure its way to the call '
                    + 'servers, and a copy beside a probe spoils the measurement, so '
                    + 'the call never picks a server. That is in no documentation, '
                    + 'only in a log where a call hangs.',
            },
            {
                head: 'Put the setting back, however you leave',
                body: 'The worst mistake in the project. The proxy wrote itself into '
                    + 'the system setting and took itself out only on a button. '
                    + 'Leaving by the window, by a crash, by a restart left it there, '
                    + 'and Windows asked a dead address about every connection. '
                    + 'Nothing worked at all, and rebooting did not help: the setting '
                    + 'outlives it.',
            },
            {
                head: 'What it ran into',
                body: 'One Discord screen never finished loading. The connection goes '
                    + 'through, the hellos reach every address, and the first screen '
                    + 'does not come. Every way the driver knew of spoiling a copy '
                    + 'gave the same result: that one node would not give.',
            },
            {
                head: 'Why it did not work',
                body: 'A mature tool cuts the real hello itself, with segments '
                    + 'overlapping at an offset worked out for the protocol. Not a '
                    + 'spoiled copy and not a cut in two, but a method of its own, '
                    + 'and the offset behind it was found by long debugging. Eight '
                    + 'ways of writing a hello and a thousand odd tests did not help: '
                    + 'tuning for one provider is work a team did for years, and I '
                    + 'came at it in a week.',
            },
            {
                head: 'What I learnt',
                body: 'Almost every version was built before looking at the data, and '
                    + 'almost every one was wrong. The cause was shown by the log '
                    + 'rather than by reasoning. Two things helped: a measurement that '
                    + 'shows bytes downloaded rather than "working or not", and '
                    + 'reading somebody else\'s code instead of guessing from the '
                    + 'names of settings.',
            },
        ],
    },
    {
        name: 'Obxod',
        what: 'Cuts a TLS hello at the name into four, puts a made up name of the same '
            + 'length where the real one goes, then the real one over the top. The '
            + 'inspector reads in the order things arrive and stops at the first; the '
            + 'server puts them back by number and keeps the last.',
        figure: 'building',
        ways:
        [
            { label: 'Open code', href: 'https://github.com/maksim-miliutin/Obxod' },
        ],
        story:
        [
            {
                head: 'The problem',
                body: 'The provider reads the first packet of a TLS connection, finds '
                    + 'the name of the site in it and cuts the line. The inspector has '
                    + 'to see one name while the server gets another, the real one.',
            },
            {
                head: 'Where I was stuck for a week',
                body: 'The obvious move is to send a forged copy of the hello ahead, '
                    + 'with somebody else\'s name, spoiled so the server throws it '
                    + 'away. It half worked: the handshake went through, the server '
                    + 'answered, and the stream broke at about eighteen kilobytes out '
                    + 'of sixty five. A dozen ways of spoiling the copy all gave the '
                    + 'same number: the spoiling decided who would drop the copy, and '
                    + 'the inspector took the name out of the real packet anyway.',
            },
            {
                head: 'What it turned out to be',
                body: 'I stopped guessing and read the source of a mature tool. The '
                    + 'hello is not copied there but cut at the boundaries of the name '
                    + 'into four. The third part carries a made up name of exactly the '
                    + 'same length, in place of the real one; the fourth carries the '
                    + 'real one, at the same number, over the top. The inspector reads '
                    + 'in the order things arrive and stops at the forgery. The server '
                    + 'puts them back by number, and the last packet wins.',
            },
            {
                head: 'The detail that decided it',
                body: 'The sequence number of the forgery has to stay right. It must '
                    + 'be spoiled so the server drops it and the inspector does not, '
                    + 'or nobody reads it at all. A shifted timestamp does that; a '
                    + 'shifted number does not, it carries the packet out of the '
                    + 'window. After that the page loads whole in a tenth of a '
                    + 'second, where before it stopped at eighteen kilobytes of '
                    + 'sixty five.',
            },
            {
                head: 'What I learnt',
                body: 'The name on the forgery is not decoration. With one name the '
                    + 'page loads whole, with another a third of it arrives: the '
                    + 'inspector parses the name and judges by it. The rule picker '
                    + 'walks forty five combinations and judges by whether the client '
                    + 'repeats its hello, which is a weak sign: repeats happen without '
                    + 'any help. And a week of building versions before looking at the '
                    + 'data produced almost nothing that was right.',
            },
        ],
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

export interface Way
{
    label: string;
    href: string;
}

export interface Part
{
    head: string;
    body: string;
}

export interface Shot
{
    image: string;
    alt: string;
}
