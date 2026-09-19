import { spoken } from './tongue';

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


const EN =
{
    who:{
        name: 'Maksim Miliutin',
        role: 'full-stack engineer',
        where: 'Moscow',
        when: 'remote now, on site from 2027',
        bio: 'Two years of Computer Science at RTU MIREA, then everything else learned by '
            + 'shipping and fixing what I shipped.',
    },

    links:[
        { label: 'Email', href: 'mailto:maksim.milutin06@gmail.com' },
        { label: 'Telegram', href: 'https://t.me/QQWaffles' },
        { label: 'GitHub', href: 'https://github.com/maksim-miliutin' },
        { label: 'CV', href: '/Maksim-Miliutin-CV.pdf' },
    ],

    claim:{
        before: 'I run a shop that sells ',
        drawn: 'My Little Pony',
        after: ' figurines, and I wrote every line of it.',
        under: 'From an empty repository to production, alone. What I remember is not the '
            + 'feature list. It is the evening one order came out as two purchase '
            + 'requests, and the week messages reached everyone except the buyer. Neither '
            + 'crashed, and that is where the tests went next.',
    },

    shop:{
        href: 'https://bronykashop.com',
        image: '/assets/bronyka.jpg',
        alt: 'The Bronyka Shop storefront',
        name: 'bronykashop.com',
        caption: ', the storefront customers actually see',
    },

    now:{
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
    },

    tally:[
        { figure: '70+', label: 'orders' },
        { figure: '2026', label: 'running since' },
        { figure: '1', label: 'engineer' },
        { figure: '8', label: 'products solo' },
    ],

    works:[
        {
            name: 'Bronyka Shop',
            what: 'Collectibles marketplace in production. NestJS · Prisma '
                + '· Postgres · Redis · React.',
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
    ] as Work[],

    reach:{
        heading: 'Getting in touch',
        line: 'Email is read the same day; Telegram is faster. Either is fine, and neither '
            + 'needs an introduction from anybody.',
    },

    rules: '“Cannot compute” is an answer · every rate carries its dates '
    + '· a tab left open overnight was not nine hours of YouTube',

    colophon: 'Written by hand. No framework, no analytics.',
};

type Copy = typeof EN;

const RU: Copy =
{
    who:
    {
        name: 'Максим Милютин',
        role: 'фулстек-разработчик',
        where: 'Москва',
        when: 'сейчас удалённо, с 2027 в офисе',
        bio: 'Два года информатики в РТУ МИРЭА, остальное выучено на том, что выпускал '
            + 'и потом чинил.',
    },

    links:
    [
        { label: 'Почта', href: 'mailto:maksim.milutin06@gmail.com' },
        { label: 'Телеграм', href: 'https://t.me/QQWaffles' },
        { label: 'GitHub', href: 'https://github.com/maksim-miliutin' },
        { label: 'Резюме', href: '/Maksim-Miliutin-CV.pdf' },
    ],

    claim:
    {
        before: 'Я держу магазин, где продают фигурки ',
        drawn: 'My Little Pony',
        after: ', и весь код в нём мой.',
        under: 'От пустого репозитория до боевого сервера, один. Помнится не список '
            + 'возможностей. Помнится вечер, когда один заказ вышел двумя платежами, '
            + 'и неделя, когда письма доходили всем, кроме покупателя. Ни то, ни '
            + 'другое не падало, и туда пошли следующие тесты.',
    },

    shop:
    {
        href: 'https://bronykashop.com',
        image: '/assets/bronyka.jpg',
        alt: 'Витрина Bronyka Shop',
        name: 'bronykashop.com',
        caption: ', витрина, которую видят покупатели',
    },

    now:
    {
        heading: 'Чем занят сейчас',
        lines:
        [
            'Netwatch выложен: сборка под Windows, дополнение для Firefox и список '
            + 'просмотров, который не покидает машину, где их смотрели.',

            'Obxod сейчас строится. Он стоит между сетевой картой и системой и '
            + 'отвечает на блокировку тем, что показывает проверяющему одно имя, '
            + 'а серверу оставляет другое.',

            'Ищу работу на фулстеке или бэкенде, где останется столько же '
            + 'ответственности и появятся люди, водившие системы больше моих.',
        ],
    },

    tally:
    [
        { figure: '70+', label: 'заказов' },
        { figure: '2026', label: 'работает с' },
        { figure: '1', label: 'разработчик' },
        { figure: '8', label: 'продуктов в одиночку' },
    ],

    works:
    [
        {
            name: 'Bronyka Shop',
            what: 'Магазин коллекционных фигурок в бою. NestJS · Prisma · Postgres '
                + '· Redis · React.',
            figure: 'в работе',
        },
        {
            name: 'Netwatch',
            what: 'Список того, что смотрели и слушали на этой машине, по тридцати '
                + 'семи службам. Один бинарник на Go, слушает только петлю.',
            figure: 'Go',
            ways:
            [
                {
                    label: 'Скачать для Windows',
                    href: 'https://github.com/maksim-miliutin/Netwatch/releases/latest',
                },
                {
                    label: 'Дополнение Firefox',
                    href: 'https://addons.mozilla.org/addon/netwatch/',
                },
                { label: 'Open code', href: 'https://github.com/maksim-miliutin/Netwatch' },
            ],
            story:
            [
                {
                    head: 'Что он узнаёт',
                    body: 'YouTube, Twitch, Кинопоиск, Spotify, Яндекс Музыку и ещё '
                        + 'тридцать две службы, вместе с шортсами, клипами и короткими '
                        + 'ссылками. У плеера, который не держит трек в адресе, '
                        + 'спрашивают иначе: спрашивают саму страницу. Свои сайты '
                        + 'добавляются прямо со страницы.',
                },
                {
                    head: 'Что видят друзья',
                    body: 'Карточку в профиле Discord: название, чьё оно, бегущую '
                        + 'полосу и кнопку на адрес. Работает сразу. Службы можно '
                        + 'убирать с карточки по одной, в список они пишутся всё равно.',
                },
                {
                    head: 'Что видите вы',
                    body: 'День, свёрнутый, с раскладкой времени по службам. Неделя, '
                        + 'месяц или всё время. Поиск, крестик, чтобы вычеркнуть '
                        + 'просмотр, и выгрузка таблицей. На английском, русском или '
                        + 'французском.',
                },
                {
                    head: 'Что уходит с машины',
                    body: 'Только карточка Discord, и только пока она включена. Ни '
                        + 'сервера, ни учётной записи, ни телеметрии, ни аналитики. '
                        + 'Расширение дотягивается до 127.0.0.1 и никуда больше, и '
                        + 'браузер держит его в этих рамках.',
                },
                {
                    head: 'Чему научился',
                    body: 'Компилятор поймал четыре столкновения имён, которые '
                        + 'JavaScript проглотил бы: три скрипта расширения делят одну '
                        + 'глобальную область. И четыре службы неделями молча не '
                        + 'записывались: шортсы, клипы, короткие ссылки и плеер без '
                        + 'трека в адресе. Каждую нашли проверкой, а не чтением, '
                        + 'поэтому под тестами одиннадцать пакетов, а расширение нет.',
                },
            ],
        },
        {
            name: 'NetCheck',
            what: 'Называл слой, на котором связь перестаёт работать: роутер, '
                + 'провайдер, имена, рукопожатие. Диагностика упёрлась в потолок, а '
                + 'не в стену, и измерение ушло в Obxod.',
            figure: 'закрыт',
            story:
            [
                {
                    head: 'Что он должен был делать',
                    body: 'Говорить, что именно со связью не так. Не «интернет '
                        + 'работает», а где начинается тишина: роутер, провайдер, '
                        + 'имена или сам сайт. И проводить соединение мимо коробки, '
                        + 'которая читает первый пакет, находит в нём имя сайта и '
                        + 'рвёт связь.',
                },
                {
                    head: 'Вердикт это место обрыва',
                    body: 'Девять проверок идут одной дорогой, а не списком галочек, '
                        + 'и каждая следующая имеет смысл, только если прошла '
                        + 'предыдущая. Шлюз, отказавший в соединении, жив: он получил '
                        + 'пакет и ответил. Вопрос открытым оставляет только тишина, '
                        + 'и она же отличает мёртвый роутер от мёртвого провайдера.',
                },
                {
                    head: 'Своя настройка каждому сайту',
                    body: 'Драйвер начинал с одной настройки на всех, самой свежей. '
                        + 'Разным адресам одной службы нужно разное, и что подходило '
                        + 'одному, ломало другое. Разведение заняло отдельный день.',
                },
                {
                    head: 'Мелкие датаграммы не трогать',
                    body: 'Копия летит впереди настоящего пакета. Но крошечные '
                        + 'датаграммы это пробы, которыми клиент меряет путь до '
                        + 'голосовых серверов, и копия рядом с пробой портит замер, '
                        + 'так что звонок не выбирает сервер. Этого нет ни в одной '
                        + 'документации, только в журнале, где звонок висит.',
                },
                {
                    head: 'Настройку вернуть, как бы ни ушёл',
                    body: 'Худшая ошибка проекта. Прокси прописывал себя в системную '
                        + 'настройку, а убирал только по кнопке. Уход через крестик, '
                        + 'падение или перезагрузку оставлял её на месте, и Windows '
                        + 'спрашивала мёртвый адрес про каждое соединение. Не работало '
                        + 'ничего, и перезагрузка не спасала: настройка её переживает.',
                },
                {
                    head: 'Во что упёрся',
                    body: 'Один экран Discord так и не догружался. Соединение проходит, '
                        + 'приветствия доходят до всех адресов, а первый экран не '
                        + 'приходит. Все известные драйверу способы испортить копию '
                        + 'давали один и тот же итог: этот узел не поддавался.',
                },
                {
                    head: 'Почему не получилось',
                    body: 'Зрелый инструмент режет настоящее приветствие сам, '
                        + 'сегментами с перекрытием на смещении, рассчитанном под '
                        + 'протокол. Не испорченная копия и не разрез надвое, а свой '
                        + 'приём, и смещение за ним найдено долгой отладкой. Восемь '
                        + 'способов записи приветствия и тысяча с лишним тестов не '
                        + 'помогли: подгонка под одного провайдера это работа, которую '
                        + 'команда делала годами, а я подошёл к ней за неделю.',
                },
                {
                    head: 'Чему научился',
                    body: 'Почти каждая версия строилась до того, как я смотрел на '
                        + 'данные, и почти каждая оказывалась неверной. Причину '
                        + 'показывал журнал, а не рассуждение. Помогли две вещи: '
                        + 'замер, который показывает скачанные байты, а не «работает '
                        + 'или нет», и чтение чужого кода вместо угадывания по '
                        + 'названиям настроек.',
                },
            ],
        },
        {
            name: 'Obxod',
            what: 'Режет приветствие TLS по границам имени на четыре части, ставит '
                + 'выдуманное имя той же длины на место настоящего, а настоящее '
                + 'кладёт поверх. Проверяющий читает в порядке прихода и '
                + 'останавливается на первом; сервер собирает по номерам и оставляет '
                + 'последнее.',
            figure: 'строится',
            ways:
            [
                { label: 'Open code', href: 'https://github.com/maksim-miliutin/Obxod' },
            ],
            story:
            [
                {
                    head: 'Задача',
                    body: 'Провайдер читает первый пакет TLS-соединения, находит в нём '
                        + 'имя сайта и рвёт связь. Нужно, чтобы проверяющая железка '
                        + 'увидела одно имя, а сервер получил другое, настоящее.',
                },
                {
                    head: 'Где застрял на неделю',
                    body: 'Очевидный ход: послать вперёд поддельную копию приветствия '
                        + 'с чужим именем и испортить её так, чтобы сервер выбросил. '
                        + 'Работало наполовину: рукопожатие проходило, сервер отвечал, '
                        + 'а поток обрывался примерно на восемнадцати килобайтах из '
                        + 'шестидесяти пяти. Десяток способов испортить копию дали одно '
                        + 'и то же число: порча решала лишь, кто выбросит копию, а имя '
                        + 'железка всё равно доставала из настоящего пакета.',
                },
                {
                    head: 'Что оказалось',
                    body: 'Я перестал подбирать и прочитал исходники зрелого аналога. '
                        + 'Приветствие там не копируется, а режется по границам имени '
                        + 'на четыре части. Третья несёт выдуманное имя ровно той же '
                        + 'длины, на месте настоящего; четвёртая несёт настоящее, с '
                        + 'тем же номером, поверх. Железка читает в порядке прихода и '
                        + 'останавливается на подделке. Сервер собирает по номерам, и '
                        + 'последний пакет затирает предыдущий.',
                },
                {
                    head: 'Мелочь, которая всё решила',
                    body: 'Номер последовательности подделки должен остаться '
                        + 'правильным. Испортить её нужно так, чтобы выбросил сервер, '
                        + 'а не железка, иначе подделку никто не прочитает. Подходит '
                        + 'сдвиг метки времени; сдвиг номера нет, он уводит пакет за '
                        + 'пределы окна. После этого страница грузится целиком за '
                        + 'десятую долю секунды, а раньше вставала на восемнадцати '
                        + 'килобайтах из шестидесяти пяти.',
                },
                {
                    head: 'Чему научился',
                    body: 'Имя на подделке не украшение. С одним именем страница '
                        + 'грузится целиком, с другим приходит треть: железка разбирает '
                        + 'имя и судит по нему. Подбор правил перебирает сорок пять '
                        + 'сочетаний и судит по тому, повторил ли клиент приветствие, '
                        + 'а это слабый признак: повторы случаются и без помощи. И '
                        + 'неделя версий, построенных до взгляда на данные, дала почти '
                        + 'ничего верного.',
                },
            ],
        },
        {
            name: 'Trellis',
            what: 'Грамматика как граф зависимостей, а не список тем. Ещё не выпущен.',
            figure: '598 тестов',
        },
        {
            name: 'Vydokh',
            what: 'Бросить вейп без стыда. Срыв сбрасывает одно число и не трогает два '
                + 'других.',
            figure: '262 теста',
        },
        {
            name: 'Veilla',
            what: 'Ежедневный звонок-проверка родителю, живущему одному. Ни запись, ни '
                + 'расшифровка не хранятся.',
            figure: '157 проверок',
        },
        {
            name: 'Reste',
            what: 'Коронка во Франции за 800 евро при «возмещаем 70%» возвращает 84. '
                + 'Reste говорит, сколько вы заплатите на самом деле.',
            figure: '67 тестов',
        },
        {
            name: 'Pasmurno',
            what: 'Дневник настроения для пятерых близких. Ни ленты, ни алгоритма, чат '
                + 'шифруется на устройстве.',
            figure: '8 языков',
        },
    ] as Work[],

    reach:
    {
        heading: 'Как связаться',
        line: 'Почту читаю в тот же день, телеграм быстрее. Подойдёт любое, и '
            + 'представлять вас никому не нужно.',
    },

    rules: '«Не могу посчитать» это ответ · у каждой ставки есть дата · вкладка, '
        + 'забытая на ночь, не была девятью часами YouTube',

    colophon: 'Написано руками. Ни фреймворка, ни аналитики.',
};

const FR: Copy =
{
    who:
    {
        name: 'Maksim Miliutin',
        role: 'ingénieur full stack',
        where: 'Moscou',
        when: 'à distance pour le moment, sur site à partir de 2027',
        bio: 'Deux ans d’informatique à RTU MIREA, puis tout le reste appris en '
            + 'livrant et en réparant ce que j’avais livré.',
    },

    links:
    [
        { label: 'Courriel', href: 'mailto:maksim.milutin06@gmail.com' },
        { label: 'Telegram', href: 'https://t.me/QQWaffles' },
        { label: 'GitHub', href: 'https://github.com/maksim-miliutin' },
        { label: 'CV', href: '/Maksim-Miliutin-CV.pdf' },
    ],

    claim:
    {
        before: 'Je tiens une boutique de figurines ',
        drawn: 'My Little Pony',
        after: ', et j’en ai écrit chaque ligne.',
        under: 'D’un dépôt vide à la production, seul. Ce dont je me souviens n’est '
            + 'pas la liste des fonctions. C’est le soir où une commande est sortie '
            + 'en deux paiements, et la semaine où les messages arrivaient à tout le '
            + 'monde sauf à l’acheteur. Ni l’un ni l’autre ne plantait, et c’est là '
            + 'que les tests sont allés ensuite.',
    },

    shop:
    {
        href: 'https://bronykashop.com',
        image: '/assets/bronyka.jpg',
        alt: 'La vitrine de Bronyka Shop',
        name: 'bronykashop.com',
        caption: ', la boutique que les clients voient vraiment',
    },

    now:
    {
        heading: 'Ce que je fais en ce moment',
        lines:
        [
            'Netwatch est sorti : une version Windows, une extension Firefox, et une '
            + 'liste de ce qui a été regardé qui ne quitte jamais la machine.',

            'Obxod est celui que je construis. Il se tient entre la carte réseau et '
            + 'la machine, et répond à un blocage en montrant à l’inspecteur un nom '
            + 'autre que celui qui reste au serveur.',

            'Je cherche un poste full stack ou back end où je garde autant de '
            + 'responsabilité et où j’apprends de gens qui ont mené des systèmes '
            + 'plus grands que les miens.',
        ],
    },

    tally:
    [
        { figure: '70+', label: 'commandes' },
        { figure: '2026', label: 'en service depuis' },
        { figure: '1', label: 'ingénieur' },
        { figure: '8', label: 'produits seul' },
    ],

    works:
    [
        {
            name: 'Bronyka Shop',
            what: 'Boutique d’objets de collection en production. NestJS · Prisma '
                + '· Postgres · Redis · React.',
            figure: 'en ligne',
        },
        {
            name: 'Netwatch',
            what: 'Une liste de ce qui a été regardé et écouté sur cette machine, sur '
                + 'trente sept services. Un seul binaire Go, qui n’écoute que la '
                + 'boucle locale.',
            figure: 'Go',
            ways:
            [
                {
                    label: 'Télécharger pour Windows',
                    href: 'https://github.com/maksim-miliutin/Netwatch/releases/latest',
                },
                {
                    label: 'Extension Firefox',
                    href: 'https://addons.mozilla.org/addon/netwatch/',
                },
                { label: 'Open code', href: 'https://github.com/maksim-miliutin/Netwatch' },
            ],
            story:
            [
                {
                    head: 'Ce qu’il reconnaît',
                    body: 'YouTube, Twitch, Kinopoisk, Spotify, Yandex Music et trente '
                        + 'deux autres, avec les shorts, les clips et les liens courts. '
                        + 'Un lecteur qui garde le morceau hors de l’adresse est '
                        + 'interrogé autrement : on demande à la page. Vos propres '
                        + 'sites s’ajoutent depuis la page elle même.',
                },
                {
                    head: 'Ce que voient vos amis',
                    body: 'Une carte sur votre profil Discord : le nom, à qui il est, '
                        + 'une barre qui avance et un bouton vers l’adresse. Cela '
                        + 'marche sans réglage. Les services se retirent de la carte '
                        + 'un par un, et la liste les garde quand même.',
                },
                {
                    head: 'Ce que vous voyez',
                    body: 'La journée, pliée, avec le temps réparti sur les services '
                        + 'qui l’ont pris. Une semaine, un mois ou tout. Une recherche, '
                        + 'une croix pour rayer une lecture, et le tout en tableur. En '
                        + 'anglais, en russe ou en français.',
                },
                {
                    head: 'Ce qui quitte la machine',
                    body: 'Seulement la carte Discord, et seulement tant qu’elle est '
                        + 'active. Pas de serveur, pas de compte, pas de télémétrie ni '
                        + 'd’analyse. L’extension atteint 127.0.0.1 et rien d’autre, '
                        + 'et le navigateur l’y tient.',
                },
                {
                    head: 'Ce que j’ai appris',
                    body: 'Le compilateur a attrapé quatre collisions de noms que '
                        + 'JavaScript aurait avalées : trois scripts d’une extension '
                        + 'partagent une seule portée globale. Et quatre services '
                        + 'n’étaient pas notés pendant des semaines, en silence : '
                        + 'shorts, clips, liens courts, et un lecteur sans morceau dans '
                        + 'l’adresse. Chacun a été trouvé en sondant plutôt qu’en '
                        + 'lisant, d’où onze paquets sous test et l’extension non.',
                },
            ],
        },
        {
            name: 'NetCheck',
            what: 'Nommait la couche où une connexion cesse de marcher : le routeur, '
                + 'le fournisseur, les noms, la poignée de main. Le diagnostic a '
                + 'touché un plafond plutôt qu’un mur, et la mesure a continué dans '
                + 'Obxod.',
            figure: 'fermé',
            story:
            [
                {
                    head: 'Ce qu’on lui demandait',
                    body: 'Dire ce qui ne va pas dans une connexion. Non pas « internet '
                        + 'marche » mais où commence le silence : le routeur, le '
                        + 'fournisseur, les noms, ou le site lui même. Puis faire '
                        + 'passer une connexion devant la boîte qui lit le premier '
                        + 'paquet, y trouve le nom du site et coupe la ligne.',
                },
                {
                    head: 'Un verdict est l’endroit où le chemin s’arrête',
                    body: 'Neuf vérifications en un chemin plutôt qu’une liste de '
                        + 'cases, et chacune ne vaut la peine que si celle d’avant est '
                        + 'passée. Une passerelle qui refuse une connexion est '
                        + 'vivante : elle a reçu le paquet et répondu. Seul le silence '
                        + 'laisse la question ouverte, et c’est ce qui sépare un '
                        + 'routeur mort d’un fournisseur mort.',
                },
                {
                    head: 'Un réglage par site',
                    body: 'Le pilote a commencé avec un seul réglage pour tous, le plus '
                        + 'récent. Des adresses différentes d’un même service veulent '
                        + 'des choses différentes, et ce qui convenait à l’un cassait '
                        + 'l’autre. Les séparer a pris une journée entière.',
                },
                {
                    head: 'Laisser les petits datagrammes tranquilles',
                    body: 'Une copie part devant le vrai paquet. Mais les minuscules '
                        + 'datagrammes sont les sondes avec lesquelles un client mesure '
                        + 'le chemin vers les serveurs vocaux, et une copie à côté '
                        + 'd’une sonde gâche la mesure, si bien que l’appel ne choisit '
                        + 'jamais de serveur. Cela n’est dans aucune documentation, '
                        + 'seulement dans un journal où un appel reste suspendu.',
                },
                {
                    head: 'Remettre le réglage, quelle que soit la sortie',
                    body: 'La pire erreur du projet. Le proxy s’inscrivait dans le '
                        + 'réglage du système et ne s’en retirait que sur un bouton. '
                        + 'Sortir par la croix, par un plantage ou par un redémarrage '
                        + 'le laissait en place, et Windows interrogeait une adresse '
                        + 'morte à chaque connexion. Plus rien ne marchait, et '
                        + 'redémarrer n’aidait pas : le réglage lui survit.',
                },
                {
                    head: 'Ce sur quoi il a buté',
                    body: 'Un écran de Discord ne finissait jamais de charger. La '
                        + 'connexion passe, les saluts atteignent toutes les adresses, '
                        + 'et le premier écran ne vient pas. Toutes les façons connues '
                        + 'du pilote d’abîmer une copie donnaient le même résultat : ce '
                        + 'noeud ne cédait pas.',
                },
                {
                    head: 'Pourquoi cela n’a pas marché',
                    body: 'Un outil mûr coupe lui même le vrai salut, en segments qui '
                        + 'se recouvrent à un décalage calculé pour le protocole. Ni '
                        + 'une copie abîmée ni une coupe en deux, mais une méthode à '
                        + 'lui, et le décalage derrière a été trouvé par un long '
                        + 'débogage. Huit façons d’écrire un salut et un millier de '
                        + 'tests n’ont pas aidé : régler pour un seul fournisseur est '
                        + 'un travail qu’une équipe a fait pendant des années, et je '
                        + 'l’ai abordé en une semaine.',
                },
                {
                    head: 'Ce que j’ai appris',
                    body: 'Presque chaque version a été construite avant de regarder '
                        + 'les données, et presque chacune était fausse. La cause était '
                        + 'montrée par le journal, pas par le raisonnement. Deux choses '
                        + 'ont aidé : une mesure qui montre les octets téléchargés '
                        + 'plutôt que « marche ou pas », et la lecture du code des '
                        + 'autres au lieu de deviner d’après les noms des réglages.',
                },
            ],
        },
        {
            name: 'Obxod',
            what: 'Coupe un salut TLS aux bords du nom en quatre, met un nom inventé de '
                + 'la même longueur là où va le vrai, puis le vrai par dessus. '
                + 'L’inspecteur lit dans l’ordre d’arrivée et s’arrête au premier ; le '
                + 'serveur les remet par numéro et garde le dernier.',
            figure: 'en cours',
            ways:
            [
                { label: 'Open code', href: 'https://github.com/maksim-miliutin/Obxod' },
            ],
            story:
            [
                {
                    head: 'Le problème',
                    body: 'Le fournisseur lit le premier paquet d’une connexion TLS, y '
                        + 'trouve le nom du site et coupe la ligne. Il faut que '
                        + 'l’inspecteur voie un nom tandis que le serveur reçoit '
                        + 'l’autre, le vrai.',
                },
                {
                    head: 'Où je suis resté coincé une semaine',
                    body: 'Le geste évident est d’envoyer devant une copie falsifiée du '
                        + 'salut, avec le nom d’un autre, abîmée pour que le serveur la '
                        + 'jette. Cela marchait à moitié : la poignée de main passait, '
                        + 'le serveur répondait, et le flux s’arrêtait vers dix huit '
                        + 'kilooctets sur soixante cinq. Une douzaine de façons '
                        + 'd’abîmer la copie donnaient le même nombre : l’abîmage '
                        + 'décidait seulement qui jetterait la copie, et l’inspecteur '
                        + 'prenait le nom dans le vrai paquet de toute façon.',
                },
                {
                    head: 'Ce que c’était',
                    body: 'J’ai cessé de deviner et lu le code d’un outil mûr. Le salut '
                        + 'n’y est pas copié mais coupé aux bords du nom en quatre. La '
                        + 'troisième partie porte un nom inventé exactement de la même '
                        + 'longueur, à la place du vrai ; la quatrième porte le vrai, '
                        + 'au même numéro, par dessus. L’inspecteur lit dans l’ordre '
                        + 'd’arrivée et s’arrête à la contrefaçon. Le serveur les remet '
                        + 'par numéro, et le dernier paquet gagne.',
                },
                {
                    head: 'Le détail qui a décidé',
                    body: 'Le numéro de séquence de la contrefaçon doit rester juste. '
                        + 'Elle doit être abîmée de sorte que le serveur la jette et '
                        + 'que l’inspecteur ne la jette pas, sinon personne ne la lit. '
                        + 'Un horodatage décalé fait cela ; un numéro décalé non, il '
                        + 'porte le paquet hors de la fenêtre. Ensuite la page charge '
                        + 'entièrement en un dixième de seconde, là où elle s’arrêtait '
                        + 'à dix huit kilooctets sur soixante cinq.',
                },
                {
                    head: 'Ce que j’ai appris',
                    body: 'Le nom sur la contrefaçon n’est pas un ornement. Avec un nom '
                        + 'la page charge entièrement, avec un autre un tiers arrive : '
                        + 'l’inspecteur analyse le nom et juge d’après lui. Le '
                        + 'sélecteur de règles parcourt quarante cinq combinaisons et '
                        + 'juge selon que le client répète son salut, ce qui est un '
                        + 'signe faible : les répétitions arrivent sans aucune aide. Et '
                        + 'une semaine de versions bâties avant de regarder les données '
                        + 'n’a presque rien donné de juste.',
                },
            ],
        },
        {
            name: 'Trellis',
            what: 'La grammaire comme graphe de dépendances plutôt que liste de sujets. '
                + 'Pas encore livré.',
            figure: '598 tests',
        },
        {
            name: 'Vydokh',
            what: 'Arrêter la vape sans honte. Une rechute remet un seul compteur à zéro '
                + 'et laisse les deux autres.',
            figure: '262 tests',
        },
        {
            name: 'Veilla',
            what: 'Un appel quotidien pour un parent qui vit seul. Ni l’audio ni la '
                + 'transcription ne sont conservés.',
            figure: '157 contrôles',
        },
        {
            name: 'Reste',
            what: 'Une couronne à 800 euros « remboursée à 70% » rend 84 euros. Reste dit '
                + 'ce que vous paierez vraiment.',
            figure: '67 tests',
        },
        {
            name: 'Pasmurno',
            what: 'Un journal d’humeur pour cinq proches. Pas de fil, pas d’algorithme, '
                + 'discussion chiffrée sur l’appareil.',
            figure: '8 langues',
        },
    ] as Work[],

    reach:
    {
        heading: 'Pour me joindre',
        line: 'Le courriel est lu le jour même ; Telegram est plus rapide. L’un ou '
            + 'l’autre convient, et aucun n’a besoin d’une introduction.',
    },

    rules: '« Je ne peux pas calculer » est une réponse · chaque taux porte ses dates '
        + '· un onglet laissé ouvert la nuit n’était pas neuf heures de YouTube',

    colophon: 'Écrit à la main. Pas de framework, pas d’analyse.',
};

const SAID: Record<string, Copy> = { en: EN, ru: RU, fr: FR };

const said = SAID[spoken()] ?? EN;

export const WHO = said.who;
export const LINKS = said.links;
export const CLAIM = said.claim;
export const SHOP = said.shop;
export const NOW = said.now;
export const TALLY = said.tally;
export const WORKS = said.works;
export const REACH = said.reach;
export const RULES = said.rules;
export const COLOPHON = said.colophon;

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
