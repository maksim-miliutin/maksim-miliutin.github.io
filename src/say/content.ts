import { Tongue, spoken } from './tongue';

export type Shelf = 'out' | 'going' | 'mobile' | 'frozen';

export const SHELVES: Shelf[] = ['out', 'going', 'mobile', 'frozen'];

export interface Work
{
	name: string;
	what: string;
	figure: string;
	shelf: Shelf;
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
	who:
	{
		name: 'Maksim Miliutin',
		role: 'full-stack engineer',
		where: 'Moscow',
		when: 'remote now, open to relocation',
		bio: 'Two years of Computer Science at RTU MIREA, then everything else learned by '
			+ 'shipping and fixing what I shipped.',
	},

	links:
	[
		{ label: 'Email', href: 'mailto:maksim.milutin06@gmail.com' },
		{ label: 'Telegram', href: 'https://t.me/QQWaffles' },
		{ label: 'GitHub', href: 'https://github.com/maksim-miliutin' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/miliutin-maksim/' },
		{ label: 'CV', href: '/Maksim-Miliutin-CV.pdf' },
	],

	claim:
	{
		before: 'I run a shop that sells ',
		drawn: 'My Little Pony',
		after: ' figurines, and I wrote every line of it.',
		under: 'From an empty repository to production, alone. What I remember is not the '
			+ 'feature list. It is the evening one order came out as two purchase '
			+ 'requests, and the week messages reached everyone except the buyer. Neither '
			+ 'crashed, and that is where the tests went next.',
	},

	shop:
	{
		href: 'https://bronykashop.com',
		image: '/assets/bronyka.jpg',
		alt: 'The Bronyka Shop storefront',
		name: 'bronykashop.com',
		caption: ', the storefront customers actually see',
	},

	now:
	{
		heading: 'What I am doing now',
		lines:
		[
			'Plafond is live: four checks for tenants in France, each ending in a letter '
			+ 'to the landlord. Lyon and Villeurbanne are next, then the other cities '
			+ 'where rents are capped.',

			'Obxod reached v1.0.0: a complete Windows DPI-bypass application built in Go, '
			+ 'with automatic method selection, a desktop interface, and live rule switching '
			+ 'without restarting its packet-processing driver. Sublayer has its first public '
			+ 'release too. It captures speaker audio during calls, recognises speech locally, '
			+ 'and displays translated subtitles over the desktop.',

			'Looking for a full-stack or backend role where I keep this much ownership and '
			+ 'learn from people who have run systems larger than mine.',
		],
	},

	tally:
	[
		{ figure: '70+', label: 'orders' },
		{ figure: '2026', label: 'running since' },
		{ figure: '1', label: 'engineer' },
		{ figure: '5', label: 'shipped solo' },
	],

	works:
	[
		{
			name: 'Bronyka Shop',
			what: 'Collectibles marketplace in production. NestJS · Prisma '
				+ '· Postgres · Redis · React.',
			shelf: 'out',
			figure: 'shipped',
		},
		{
			name: 'Netwatch',
			what: 'A list of what was watched and listened to on this machine, across '
				+ 'thirty-seven services. One Go binary, and it listens on loopback only.',
			shelf: 'out',
			figure: 'shipped',
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
			name: 'Obxod',
			what: 'An open-source Windows DPI bypass tool built in Go. Fifteen packet-handling '
				+ 'methods, automatic method selection, live rule switching, TCP/UDP process '
				+ 'exclusions, and a native desktop interface.',
			shelf: 'out',
			figure: 'v1.0.0 · shipped',
			ways:
			[
				{
					label: 'Download for Windows',
					href: 'https://github.com/maksim-miliutin/Obxod/releases/tag/v1.0.0',
				},
				{ label: 'Open code', href: 'https://github.com/maksim-miliutin/Obxod' },
			],
			story:
			[
				{
					head: 'The problem',
					body: 'A provider can cut a connection by the site name it reads in the TLS '
						+ 'ClientHello, the first packet of the handshake. Obxod reshapes that '
						+ 'packet on its way out, so the inspector in the middle misses the name '
						+ 'while the server still gets it whole. That answers a block by name and '
						+ 'nothing more: a service blocked by its IP address stays blocked, and '
						+ 'the console version can tell which of the two a site is.',
				},
				{
					head: 'The engine',
					body: 'Go on top of the WinDivert driver, which hands outgoing packets to the '
						+ 'program before they leave the machine. Fifteen packet-handling '
						+ 'methods, each a mix of moves: split and multisplit at the name, '
						+ 'overlapping segments, fake packets sent ahead, disorder, IP fragments, '
						+ 'a name swapped in place. QUIC gets fake packets for the sites that need '
						+ 'them, and Discord voice has a UDP path of its own. Providers differ, so '
						+ 'the auto-pick runs the methods against a live probe and keeps the one '
						+ 'that works on this network.',
				},
				{
					head: 'An engineering challenge: live rule switching',
					body: 'Changing the method used to mean closing the WinDivert session and '
						+ 'opening a new one, and every open connection dropped with it. Now the '
						+ 'driver stays open. Whatever changes the method stores the new rule set '
						+ 'in an atomic.Pointer[rules.Set], and the packet loop swaps it in before '
						+ 'its next packet. That pointer is the only thing that crosses between '
						+ 'goroutines, so switching adds no mutex to the path every packet takes.',
				},
				{
					head: 'The application',
					body: 'A desktop window built with Gio, and a console version of the same '
						+ 'engine. One button turns the bypass on; closing the window leaves it '
						+ 'running in the tray. Apps can be excluded by name or by folder, and '
						+ 'your own domains go on top of the built-in list. Logs, a speed graph, '
						+ 'start with Windows, English and Russian. One executable for Windows '
						+ '10 and 11, with the driver inside it.',
				},
				{
					head: 'Testing',
					body: 'Unit tests across the engine, run again under the race detector, and '
						+ 'fuzz tests for the IP, TCP, UDP and ClientHello parsers. go vet, the '
						+ 'tests and a build run on Linux and on Windows for every change. The '
						+ 'window stays out of CI and is checked by hand on Windows, and each of '
						+ 'the fifteen methods was confirmed by hand against a live DPI.',
				},
				{
					head: 'What I learnt from a clash with Radmin VPN',
					body: 'With Obxod on, Radmin VPN misbehaved, and two causes met there. STUN '
						+ 'recognition was not specific to Discord, so the STUN datagrams Radmin '
						+ 'uses to get through NAT were handled as Discord voice. And excluding '
						+ 'an app only looked up who owned TCP ports. Now the owners of UDP ports '
						+ 'are found too, through the Windows API, and the exclusion is checked '
						+ 'before a UDP datagram is changed. An exclusion that knows one protocol '
						+ 'excludes by half. This was one setup watched by hand, not a sweep of '
						+ 'every network.',
				},
			],
		},
		{
			name: 'Sublayer',
			what: 'Live translated subtitles for Windows calls, built in Go. Captures speaker '
				+ 'audio through WASAPI, uses local whisper.cpp speech recognition, and '
				+ 'displays translations in a transparent, click-through overlay.',
			shelf: 'out',
			figure: 'v0.1.0 · early release',
			ways:
			[
				{
					label: 'Download v0.1.0',
					href: 'https://github.com/maksim-miliutin/Sublayer/releases/tag/v0.1.0',
				},
				{ label: 'Open code', href: 'https://github.com/maksim-miliutin/Sublayer' },
			],
			story:
			[
				{
					head: 'Why I built it',
					body: 'A call in a foreign language is easier to follow with the words on the '
						+ 'screen. Sublayer puts them there for Discord, Teams or any other '
						+ 'program that plays through the speakers, and it never records the '
						+ 'microphone: only the other side of the call is transcribed.',
				},
				{
					head: 'Audio capture',
					body: 'Go code opens Windows WASAPI in loopback mode, which hands over what '
						+ 'the speakers are playing rather than what a microphone hears. The '
						+ 'stream is resampled for recognition and cut into phrases at pauses; '
						+ 'the shortest speech that counts, the pause that ends a phrase and the '
						+ 'longest phrase are all settings.',
				},
				{
					head: 'Speech recognition and translation',
					body: 'Each finished phrase goes to a local whisper.cpp server and then to '
						+ 'LibreTranslate. This release hears French and English, telling them '
						+ 'apart phrase by phrase if asked, and translates into Russian or '
						+ 'English, French reaching Russian through English. A phrase is '
						+ 'translated once it ends, so the subtitles follow a phrase behind the '
						+ 'speaker rather than word by word.',
				},
				{
					head: 'Windows integration',
					body: 'The subtitles sit in a transparent window above every other one, and '
						+ 'clicks pass through them to whatever is underneath. One key unlocks '
						+ 'them to be dragged, and the next start remembers where they were left. '
						+ 'A tray icon whose colour tells the state, global hotkeys to show, '
						+ 'pause and copy the last pair, and a settings window that applies the '
						+ 'languages and the look of the subtitles at once.',
				},
				{
					head: 'Privacy',
					body: 'With the default local servers, speech is recognised and translated on '
						+ 'the machine. Both servers are only addresses in the settings, though: '
						+ 'point one at a remote host and the audio or the text goes there. '
						+ 'Subtitle pairs are held in memory, and this release writes no '
						+ 'transcript to disk. The people on the call should still be told that '
						+ 'subtitles are on.',
				},
				{
					head: 'Engineering details',
					body: 'A bounded queue sits between cutting and recognition: when whisper.cpp '
						+ 'falls behind, the oldest waiting phrases are dropped and reported '
						+ 'rather than piling up, so the subtitles stay close to the '
						+ 'conversation. The two servers are child processes with a lifecycle of '
						+ 'their own: started only when nothing answers at their address, waited '
						+ 'on with a time limit, and stopped on exit only if Sublayer started '
						+ 'them. The overlay is a layered, transparent, topmost Win32 window, and '
						+ 'the hotkeys go through RegisterHotKey, which says when another program '
						+ 'already holds a key.',
				},
				{
					head: 'Current limitations',
					body: 'v0.1.0 is an early public release, not a finished product. It runs on '
						+ 'Windows 10 and 11, x64; Linux and macOS are not available yet. '
						+ 'whisper.cpp with a recognition model and LibreTranslate have to be '
						+ 'installed and named in the settings first: the download is the '
						+ 'program alone, not a bundle with everything inside.',
				},
			],
		},
		{
			name: 'Plafond',
			what: 'Checks a French rent against its legal cap, a deposit against its deadline, '
				+ 'a charges statement against what may be passed on, and writes the formal '
				+ 'notice. Runs on your device, nothing sent to a server.',
			shelf: 'out',
			figure: 'shipped',
			ways:
			[
				{ label: 'Open code', href: 'https://github.com/maksim-miliutin/Plafond' },
				{ label: 'Try it', href: 'https://maksim-miliutin.github.io/Plafond' },
			],
			story:
			[
				{
					head: 'What it was asked to do',
					body: 'Tell a tenant in France, in figures, whether the landlord is asking too '
						+ 'much: a rent above the legal cap, a deposit kept past its month, '
						+ 'charges the law does not let him pass on, a rise on a flat rated F or '
						+ 'G. Then write the formal notice that asks for the money back.',
				},
				{
					head: 'What it stands on',
					body: 'Published open data, never a figure typed from memory. Each rate keeps '
						+ 'the day it takes effect, the day it ends and the prefect\'s decree '
						+ 'behind it, and a lease is checked against the rates in force on the day '
						+ 'it was signed. The import reads the decree\'s own annexes and checks '
						+ 'every line by the decree\'s own rules: furnished is empty plus its '
						+ 'supplement, majored is twenty percent above, reduced thirty below.',
				},
				{
					head: 'What stays on the phone',
					body: 'The calculation runs on the device. The address goes once, straight to '
						+ 'the public geocoder of the Géoplateforme, to find the quartier, and '
						+ 'never through a server of mine; the rent goes nowhere at all. No '
						+ 'account, no fee, no ads.',
				},
				{
					head: 'Where it is now',
					body: 'Live, and it can be put on the home screen of a phone. Four checks, '
						+ 'each ending in a letter: a hundred and twenty one commits in a week, '
						+ 'four hundred and twenty five tests, fourteen of them in real browsers, '
						+ 'iPhones among them. Eight rents read by hand off the prefecture\'s own '
						+ 'map match the ones Plafond holds.',
				},
				{
					head: 'What I learnt',
					body: 'Three bugs crashed nothing, and each now has a test of its own. After '
						+ 'the 2026 rents went out, a phone kept last year\'s table for ten '
						+ 'minutes, as long as Pages lets a browser keep a file, and refused a '
						+ 'July lease; now every opening asks the server whether the tables '
						+ 'changed. A badge took the class name label and turned every form label '
						+ 'into a square that took the taps meant for the choices around it. And a '
						+ 'letter written after the six months had run out asked the landlord to '
						+ 'keep the proofs until a day already past.',
				},
			],
		},
		{
			name: 'NormPrichel',
			what: 'A crosshair overlay for Windows games, written in Go. No game memory read, '
				+ 'no input sent, no screen capture. Twelve shapes, a profile per game.',
			shelf: 'going',
			figure: '12 shapes',
			ways:
			[
				{ label: 'Open code', href: 'https://github.com/maksim-miliutin/NormPrichel' },
			],
		},
		{
			name: 'obxod-mobile',
			what: 'The same bypass on Android: a local VPN service with no root and no '
				+ 'server in the middle, so traffic goes straight to the sites. The Go '
				+ 'core is shared through gomobile.',
			shelf: 'going',
			figure: 'back soon',
			ways:
			[
				{
					label: 'Open code',
					href: 'https://github.com/maksim-miliutin/obxod-mobile',
				},
			],
		},
		{
			name: 'Trellis',
			what: 'Grammar as a dependency graph rather than a list of topics. Not shipped yet.',
			shelf: 'mobile',
			figure: '598 tests',
		},
		{
			name: 'Vydokh',
			what: 'Quitting vape without shame. A slip resets one number and leaves the other two '
				+ 'alone.',
			shelf: 'mobile',
			figure: '262 tests',
		},
		{
			name: 'Veilla',
			what: 'A daily check-in call for a parent living alone. Audio and transcript are never '
				+ 'stored.',
			shelf: 'mobile',
			figure: '157 checks',
		},
		{
			name: 'Pasmurno',
			what: 'A mood journal for five close people. No feed, no algorithm, chat encrypted on '
				+ 'the device.',
			shelf: 'mobile',
			figure: '8 languages',
		},
		{
			name: 'Mira',
			what: 'A camera on the plate for calories and macros, and on yourself for a read '
				+ 'of face and skin, correlated on the device.',
			shelf: 'mobile',
			figure: '8 languages',
		},
		{
			name: 'NetCheck',
			what: 'Named the layer where a connection stops working: the router, the '
				+ 'provider, the names, the handshake. Diagnosis ran into a ceiling '
				+ 'rather than a wall, and the measuring went on into Obxod.',
			shelf: 'frozen',
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
			name: 'Reste',
			what: 'An €800 French crown at “70% reimbursed” returns €84. Reste says what you will '
				+ 'actually pay.',
			shelf: 'frozen',
			figure: '67 tests',
		},
		{
			name: 'MiniVPN',
			what: 'A small VPN built to show how one works rather than to replace one: one '
				+ 'server, one client, one shared key, no key rotation yet.',
			shelf: 'frozen',
			figure: '2 setups tested',
			ways:
			[
				{ label: 'Open code', href: 'https://github.com/maksim-miliutin/MiniVPN' },
			],
		},
	] as Work[],

	reach:
	{
		heading: 'Getting in touch',
		line: 'Email is read the same day; Telegram is faster. Either is fine, and neither '
			+ 'needs an introduction from anybody.',
	},

	heads:
	{
		works: 'Everything I have built',
		out: 'Out',
		going: 'In progress',
		mobile: 'Mobile apps in React Native, frozen',
		frozen: 'Frozen',
		kit: 'What I build with',
		atlas: 'Where I am going',
		dark: 'Dark',
		light: 'Light',
		close: 'Close',
	},

	kitSay: 'Seven of these are most of my day.',

	map:
	{
		label: 'Map of Europe with Moscow, Paris and Amsterdam marked',
		cities:
		{
			moscow: { name: 'Moscow', say: 'Here now. Remote straight away.' },
			paris: { name: 'Paris', say: 'Paris. On site with a sponsored work visa.' },
			amsterdam: { name: 'Amsterdam', say: 'Amsterdam. On site with a sponsored work visa.' },
		},
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
		when: 'сейчас удалённо, готов к переезду',
		bio: 'Два года информатики в РТУ МИРЭА, остальное выучено на том, что выпускал '
			+ 'и потом чинил.',
	},

	links:
	[
		{ label: 'Почта', href: 'mailto:maksim.milutin06@gmail.com' },
		{ label: 'Телеграм', href: 'https://t.me/QQWaffles' },
		{ label: 'GitHub', href: 'https://github.com/maksim-miliutin' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/miliutin-maksim/' },
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
			'Plafond работает: четыре проверки для тех, кто снимает жильё во Франции, '
			+ 'и каждая заканчивается письмом владельцу. Дальше Лион и Вильёрбан, '
			+ 'потом остальные города, где аренда ограничена.',

			'Obxod дошёл до v1.0.0: законченное приложение на Go для обхода DPI на Windows, '
			+ 'с автоматическим подбором метода, оконным интерфейсом и сменой правил на лету, '
			+ 'без перезапуска драйвера, который обрабатывает пакеты. У Sublayer тоже первый '
			+ 'публичный выпуск: во время звонка он берёт звук из динамиков, распознаёт речь '
			+ 'на самом компьютере и показывает переведённые субтитры поверх рабочего стола.',

			'Ищу работу на фулстеке или бэкенде, где останется столько же '
			+ 'ответственности и появятся люди, водившие системы больше моих.',
		],
	},

	tally:
	[
		{ figure: '70+', label: 'заказов' },
		{ figure: '2026', label: 'работает с' },
		{ figure: '1', label: 'разработчик' },
		{ figure: '5', label: 'выпущено в одиночку' },
	],

	works:
	[
		{
			name: 'Bronyka Shop',
			what: 'Магазин коллекционных фигурок в бою. NestJS · Prisma · Postgres '
				+ '· Redis · React.',
			shelf: 'out',
			figure: 'выпущен',
		},
		{
			name: 'Netwatch',
			what: 'Список того, что смотрели и слушали на этой машине, по тридцати '
				+ 'семи службам. Один бинарник на Go, слушает только петлю.',
			shelf: 'out',
			figure: 'выпущен',
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
			name: 'Obxod',
			what: 'Открытая утилита для обхода DPI на Windows, написанная на Go. Пятнадцать '
				+ 'способов обработки пакетов, автоматический подбор метода, смена правил на '
				+ 'лету, исключения процессов для TCP и UDP и нативный оконный интерфейс.',
			shelf: 'out',
			figure: 'v1.0.0 · выпущен',
			ways:
			[
				{
					label: 'Скачать для Windows',
					href: 'https://github.com/maksim-miliutin/Obxod/releases/tag/v1.0.0',
				},
				{ label: 'Open code', href: 'https://github.com/maksim-miliutin/Obxod' },
			],
			story:
			[
				{
					head: 'Задача',
					body: 'Провайдер может оборвать соединение по имени сайта, которое прочитал в '
						+ 'TLS ClientHello, первом пакете рукопожатия. Obxod перекраивает этот '
						+ 'пакет на выходе: проверяющая железка имени не видит, а сервер получает '
						+ 'его целиком. Это ответ на блокировку по имени и ни на что больше: '
						+ 'сервис, заблокированный по IP-адресу, остаётся заблокированным, а '
						+ 'консольная версия умеет сказать, какой из двух случаев у сайта.',
				},
				{
					head: 'Движок',
					body: 'Go поверх драйвера WinDivert, который отдаёт исходящие пакеты программе '
						+ 'раньше, чем они покинут машину. Пятнадцать способов обработки пакетов, '
						+ 'и каждый собран из приёмов: split и multisplit по имени, перекрывающиеся '
						+ 'сегменты, фейковые пакеты впереди, disorder, IP-фрагменты, подмена '
						+ 'имени на месте. QUIC получает фейковые пакеты там, где сайту это нужно, '
						+ 'у голоса Discord свой путь по UDP. Провайдеры разные, поэтому '
						+ 'автоподбор гоняет методы на живой пробе и оставляет тот, что работает '
						+ 'в этой сети.',
				},
				{
					head: 'Инженерная задача: смена правил на лету',
					body: 'Раньше, чтобы сменить метод, приходилось закрыть сессию WinDivert и '
						+ 'открыть новую, и все открытые соединения рвались. Теперь драйвер '
						+ 'остаётся открытым. Тот, кто меняет метод, кладёт новый набор правил в '
						+ 'atomic.Pointer[rules.Set], а цикл обработки забирает его перед '
						+ 'следующим пакетом. Этот указатель единственное, что переходит между '
						+ 'горутинами, поэтому смена правил не добавляет мьютекса на путь, по '
						+ 'которому идёт каждый пакет.',
				},
				{
					head: 'Приложение',
					body: 'Окно на Gio и консольная версия того же движка. Одна кнопка включает '
						+ 'обход; если закрыть окно, он продолжает работать из трея. Приложения '
						+ 'исключаются по имени или по папке, свои домены добавляются к '
						+ 'встроенному списку. Логи, график скорости, автозапуск с Windows, '
						+ 'английский и русский интерфейс. Один исполняемый файл для Windows 10 '
						+ 'и 11, драйвер внутри.',
				},
				{
					head: 'Тестирование',
					body: 'Модульные тесты по всему движку, повторный прогон с детектором гонок и '
						+ 'фаззинг разборщиков IP, TCP, UDP и ClientHello. go vet, тесты и сборка '
						+ 'идут на Linux и на Windows при каждом изменении. Окно в CI не входит и '
						+ 'проверяется вручную на Windows, а каждый из пятнадцати методов '
						+ 'подтверждён вручную на живом DPI.',
				},
				{
					head: 'Чему научил конфликт с Radmin VPN',
					body: 'С включённым Obxod сбоил Radmin VPN, и сошлись две причины. '
						+ 'Распознавание STUN не было привязано к Discord, поэтому STUN-датаграммы, '
						+ 'которыми Radmin пробивает NAT, обрабатывались как голос Discord. А '
						+ 'исключение приложения смотрело только на владельцев TCP-портов. Теперь '
						+ 'владельцы UDP-портов тоже определяются через Windows API, и исключение '
						+ 'проверяется до того, как UDP-датаграмма будет изменена. Исключение, '
						+ 'которое знает один протокол, исключает наполовину. Это одна '
						+ 'конфигурация, проверенная вручную, а не обход всех сетей.',
				},
			],
		},
		{
			name: 'Sublayer',
			what: 'Субтитры с переводом для звонков на Windows, на Go. Захватывает звук '
				+ 'динамиков через WASAPI, распознаёт речь локальным whisper.cpp и показывает '
				+ 'перевод в прозрачном оверлее, сквозь который проходят клики.',
			shelf: 'out',
			figure: 'v0.1.0 · ранний выпуск',
			ways:
			[
				{
					label: 'Скачать v0.1.0',
					href: 'https://github.com/maksim-miliutin/Sublayer/releases/tag/v0.1.0',
				},
				{ label: 'Open code', href: 'https://github.com/maksim-miliutin/Sublayer' },
			],
			story:
			[
				{
					head: 'Зачем я его сделал',
					body: 'Звонок на чужом языке легче понять, когда слова видны на экране. '
						+ 'Sublayer выводит их для Discord, Teams и любой другой программы, '
						+ 'которая играет через динамики, и никогда не записывает микрофон: '
						+ 'расшифровывается только собеседник.',
				},
				{
					head: 'Захват звука',
					body: 'Код на Go открывает Windows WASAPI в режиме loopback, и тот отдаёт '
						+ 'то, что играют динамики, а не то, что слышит микрофон. Поток '
						+ 'пересчитывается под частоту распознавания и режется на фразы по '
						+ 'паузам; самая короткая речь, которая считается, пауза, которая '
						+ 'завершает фразу, и самая длинная фраза задаются в настройках.',
				},
				{
					head: 'Распознавание и перевод',
					body: 'Каждая законченная фраза идёт в локальный сервер whisper.cpp, а затем '
						+ 'в LibreTranslate. Этот выпуск слышит французский и английский, а если '
						+ 'попросить, различает их по каждой фразе, и переводит на русский или '
						+ 'английский; французский попадает в русский через английский. Фраза '
						+ 'переводится, когда закончилась, поэтому субтитры отстают на фразу, а '
						+ 'не идут слово в слово.',
				},
				{
					head: 'Интеграция с Windows',
					body: 'Субтитры лежат в прозрачном окне поверх всех остальных, и клики '
						+ 'проходят сквозь них к тому, что под ними. Одна клавиша открепляет их, '
						+ 'чтобы перетащить, и следующий запуск помнит, где их оставили. Значок в '
						+ 'трее, цвет которого показывает состояние, глобальные горячие клавиши, '
						+ 'чтобы показать, поставить на паузу и скопировать последнюю пару, и '
						+ 'окно настроек, которое сразу применяет языки и вид субтитров.',
				},
				{
					head: 'Приватность',
					body: 'С локальными серверами по умолчанию речь распознаётся и переводится на '
						+ 'самом компьютере. Но оба сервера в настройках лишь адреса: если '
						+ 'указать удалённый, звук или текст уйдёт туда. Пары субтитров хранятся '
						+ 'в памяти, на диск этот выпуск расшифровку не пишет. Собеседников всё '
						+ 'равно стоит предупредить, что субтитры включены.',
				},
				{
					head: 'Инженерные детали',
					body: 'Между нарезкой и распознаванием стоит ограниченная очередь: когда '
						+ 'whisper.cpp отстаёт, самые старые ждущие фразы выбрасываются с '
						+ 'отметкой об этом, а не копятся, и субтитры не отрываются от разговора. '
						+ 'Оба сервера это дочерние процессы со своим жизненным циклом: '
						+ 'запускаются, только если по адресу никто не отвечает, ждутся с '
						+ 'ограничением по времени и останавливаются при выходе, только если их '
						+ 'запустил сам Sublayer. Оверлей это прозрачное многослойное окно Win32 '
						+ 'поверх остальных, а горячие клавиши регистрируются через '
						+ 'RegisterHotKey, который сообщает, если клавишу уже держит другая '
						+ 'программа.',
				},
				{
					head: 'Текущие ограничения',
					body: 'v0.1.0 ранний публичный выпуск, а не законченный продукт. Работает на '
						+ 'Windows 10 и 11, x64; Linux и macOS пока недоступны. whisper.cpp с '
						+ 'моделью распознавания и LibreTranslate нужно сначала установить и '
						+ 'указать в настройках: в загрузке только сама программа, а не комплект '
						+ 'со всем внутри.',
				},
			],
		},
		{
			name: 'Plafond',
			what: 'Проверяет аренду во Франции против законного потолка, депозит против '
				+ 'срока возврата, счёт за обслуживание против того, что можно переложить '
				+ 'на жильца, и пишет официальную претензию. Считает на вашем устройстве, '
				+ 'ничего не уходит на сервер.',
			shelf: 'out',
			figure: 'выпущен',
			ways:
			[
				{ label: 'Open code', href: 'https://github.com/maksim-miliutin/Plafond' },
				{ label: 'Попробовать', href: 'https://maksim-miliutin.github.io/Plafond' },
			],
			story:
			[
				{
					head: 'Что он должен был делать',
					body: 'Сказать арендатору во Франции цифрами, не просит ли хозяин лишнего: '
						+ 'аренда выше законного потолка, депозит, задержанный дольше месяца, '
						+ 'расходы, которые закон не разрешает перекладывать на жильца, повышение '
						+ 'аренды в квартире класса F или G. А потом написать официальную '
						+ 'претензию с требованием вернуть деньги.',
				},
				{
					head: 'На чём он стоит',
					body: 'Только опубликованные открытые данные, ни одной цифры по памяти. У '
						+ 'каждой ставки есть день, с которого она действует, день, когда '
						+ 'перестаёт, и указ префекта за ней, и договор проверяется по ставкам, '
						+ 'действовавшим в день подписания. Импорт читает приложения самого указа '
						+ 'и проверяет каждую строку по его же правилам: ставка с мебелью равна '
						+ 'пустой плюс надбавка, повышенная на двадцать процентов выше, пониженная '
						+ 'на тридцать ниже.',
				},
				{
					head: 'Что остаётся на телефоне',
					body: 'Расчёт идёт на устройстве. Адрес уходит один раз, напрямую в публичный '
						+ 'геокодер Géoplateforme, чтобы найти квартал, и никогда не проходит '
						+ 'через мой сервер; аренда не уходит никуда. Ни учётной записи, ни платы, '
						+ 'ни рекламы.',
				},
				{
					head: 'Где он сейчас',
					body: 'Работает, и его можно поставить на главный экран телефона. Четыре '
						+ 'проверки, каждая заканчивается письмом: сто двадцать один коммит за '
						+ 'неделю, четыреста двадцать пять тестов, четырнадцать из них в настоящих '
						+ 'браузерах, айфоны среди них. Восемь ставок, прочитанных вручную с карты '
						+ 'самой префектуры, совпадают с теми, что держит Plafond.',
				},
				{
					head: 'Чему научился',
					body: 'Три бага ничего не роняли, и у каждого теперь свой тест. Когда вышли '
						+ 'ставки 2026 года, телефон ещё десять минут держал прошлогоднюю таблицу, '
						+ 'столько Pages разрешает браузеру хранить файл, и отказывал договору, '
						+ 'подписанному в июле; теперь каждое открытие спрашивает сервер, не '
						+ 'поменялись ли таблицы. Значок взял имя класса label и превратил каждую '
						+ 'подпись формы в квадрат, который забирал нажатия у соседних вариантов. '
						+ 'А письмо, написанное после того, как шесть месяцев истекли, просило '
						+ 'хозяина хранить документы до дня, который уже прошёл.',
				},
			],
		},
		{
			name: 'NormPrichel',
			what: 'Оверлей-прицел для игр на Windows, на Go. Не читает память игры, не '
				+ 'эмулирует ввод, не захватывает экран. Двенадцать форм, свой профиль '
				+ 'на игру.',
			shelf: 'going',
			figure: '12 форм',
			ways:
			[
				{ label: 'Open code', href: 'https://github.com/maksim-miliutin/NormPrichel' },
			],
		},
		{
			name: 'obxod-mobile',
			what: 'Тот же обход на Android: служба VPN на самом телефоне, без рута и '
				+ 'без сервера посередине, трафик идёт прямо на сайты. Ядро на Go '
				+ 'общее, через gomobile.',
			shelf: 'going',
			figure: 'скоро продолжу',
			ways:
			[
				{
					label: 'Open code',
					href: 'https://github.com/maksim-miliutin/obxod-mobile',
				},
			],
		},
		{
			name: 'Trellis',
			what: 'Грамматика как граф зависимостей, а не список тем. Ещё не выпущен.',
			shelf: 'mobile',
			figure: '598 тестов',
		},
		{
			name: 'Vydokh',
			what: 'Бросить вейп без стыда. Срыв сбрасывает одно число и не трогает два '
				+ 'других.',
			shelf: 'mobile',
			figure: '262 теста',
		},
		{
			name: 'Veilla',
			what: 'Ежедневный звонок-проверка родителю, живущему одному. Ни запись, ни '
				+ 'расшифровка не хранятся.',
			shelf: 'mobile',
			figure: '157 проверок',
		},
		{
			name: 'Pasmurno',
			what: 'Дневник настроения для пятерых близких. Ни ленты, ни алгоритма, чат '
				+ 'шифруется на устройстве.',
			shelf: 'mobile',
			figure: '8 языков',
		},
		{
			name: 'Mira',
			what: 'Камера на тарелку для калорий и БЖУ и на себя для оценки лица и кожи, '
				+ 'всё сопоставляется на устройстве.',
			shelf: 'mobile',
			figure: '8 языков',
		},
		{
			name: 'NetCheck',
			what: 'Называл слой, на котором связь перестаёт работать: роутер, '
				+ 'провайдер, имена, рукопожатие. Диагностика упёрлась в потолок, а '
				+ 'не в стену, и измерение ушло в Obxod.',
			shelf: 'frozen',
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
			name: 'Reste',
			what: 'Коронка во Франции за 800 евро при «возмещаем 70%» возвращает 84. '
				+ 'Reste говорит, сколько вы заплатите на самом деле.',
			shelf: 'frozen',
			figure: '67 тестов',
		},
		{
			name: 'MiniVPN',
			what: 'Маленький VPN, чтобы показать, как он устроен, а не чтобы заменить '
				+ 'настоящий: один сервер, один клиент, один общий ключ, без смены ключей.',
			shelf: 'frozen',
			figure: '2 стенда',
			ways:
			[
				{ label: 'Open code', href: 'https://github.com/maksim-miliutin/MiniVPN' },
			],
		},
	] as Work[],

	reach:
	{
		heading: 'Как связаться',
		line: 'Почту читаю в тот же день, телеграм быстрее. Подойдёт любое, и '
			+ 'представлять вас никому не нужно.',
	},

	heads:
	{
		works: 'Всё, что я сделал',
		out: 'Выпущено',
		going: 'В работе',
		mobile: 'Мобильные приложения на React Native, заморожены',
		frozen: 'Заморожено',
		kit: 'Чем я строю',
		atlas: 'Куда я еду',
		dark: 'Тёмная',
		light: 'Светлая',
		close: 'Закрыть',
	},

	kitSay: 'Семь из них и есть почти весь мой день.',

	map:
	{
		label: 'Карта Европы, на ней отмечены Москва, Париж и Амстердам',
		cities:
		{
			moscow: { name: 'Москва', say: 'Здесь сейчас. Удалённо можно сразу.' },
			paris: { name: 'Париж', say: 'Париж. В офисе, если компания оформит рабочую визу.' },
			amsterdam: { name: 'Амстердам', say: 'Амстердам. В офисе, если компания оформит рабочую визу.' },
		},
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
		when: 'à distance pour le moment, ouvert à la mobilité',
		bio: 'Deux ans d’informatique à RTU MIREA, puis tout le reste appris en '
			+ 'livrant et en réparant ce que j’avais livré.',
	},

	links:
	[
		{ label: 'Courriel', href: 'mailto:maksim.milutin06@gmail.com' },
		{ label: 'Telegram', href: 'https://t.me/QQWaffles' },
		{ label: 'GitHub', href: 'https://github.com/maksim-miliutin' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/miliutin-maksim/' },
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
			'Plafond est en ligne : quatre vérifications pour les locataires en France, '
			+ 'chacune se termine par une lettre au propriétaire. Ensuite Lyon et '
			+ 'Villeurbanne, puis les autres villes où les loyers sont encadrés.',

			'Obxod est arrivé à la v1.0.0 : une application Windows complète de contournement '
			+ 'du DPI, écrite en Go, avec le choix automatique de la méthode, une interface de '
			+ 'bureau et le changement de règles à chaud, sans redémarrer le pilote qui traite '
			+ 'les paquets. Sublayer a aussi sa première version publique : il capte le son des '
			+ 'haut-parleurs pendant les appels, reconnaît la parole en local et affiche des '
			+ 'sous-titres traduits par-dessus le bureau.',

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
		{ figure: '5', label: 'livrés seul' },
	],

	works:
	[
		{
			name: 'Bronyka Shop',
			what: 'Boutique d’objets de collection en production. NestJS · Prisma '
				+ '· Postgres · Redis · React.',
			shelf: 'out',
			figure: 'publié',
		},
		{
			name: 'Netwatch',
			what: 'Une liste de ce qui a été regardé et écouté sur cette machine, sur '
				+ 'trente sept services. Un seul binaire Go, qui n’écoute que la '
				+ 'boucle locale.',
			shelf: 'out',
			figure: 'publié',
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
			name: 'Obxod',
			what: 'Un outil open source de contournement du DPI pour Windows, écrit en Go. '
				+ 'Quinze méthodes de traitement des paquets, choix automatique de la méthode, '
				+ 'changement de règles à chaud, exclusions de processus TCP et UDP, et une '
				+ 'interface de bureau native.',
			shelf: 'out',
			figure: 'v1.0.0 · publié',
			ways:
			[
				{
					label: 'Télécharger pour Windows',
					href: 'https://github.com/maksim-miliutin/Obxod/releases/tag/v1.0.0',
				},
				{ label: 'Open code', href: 'https://github.com/maksim-miliutin/Obxod' },
			],
			story:
			[
				{
					head: 'Le problème',
					body: 'Un fournisseur peut couper une connexion d’après le nom du site qu’il '
						+ 'lit dans le TLS ClientHello, le premier paquet de la poignée de main. '
						+ 'Obxod remanie ce paquet à la sortie : l’inspecteur au milieu manque le '
						+ 'nom, et le serveur le reçoit entier. Cela répond à un blocage par nom '
						+ 'et à rien d’autre : un service bloqué par son adresse IP le reste, et '
						+ 'la version console sait dire lequel des deux touche un site.',
				},
				{
					head: 'Le moteur',
					body: 'Du Go au-dessus du pilote WinDivert, qui remet les paquets sortants au '
						+ 'programme avant qu’ils quittent la machine. Quinze méthodes de '
						+ 'traitement des paquets, chacune un assemblage de gestes : split et '
						+ 'multisplit au nom, segments qui se recouvrent, faux paquets envoyés '
						+ 'devant, disorder, fragments IP, nom remplacé sur place. QUIC reçoit de '
						+ 'faux paquets pour les sites qui en ont besoin, et la voix de Discord a '
						+ 'son propre chemin UDP. Les fournisseurs diffèrent, alors la sélection '
						+ 'automatique essaie les méthodes sur une sonde réelle et garde celle '
						+ 'qui marche sur ce réseau.',
				},
				{
					head: 'Un défi d’ingénierie : changer les règles à chaud',
					body: 'Changer de méthode voulait dire fermer la session WinDivert et en '
						+ 'ouvrir une autre, et toutes les connexions ouvertes tombaient avec. '
						+ 'Désormais le pilote reste ouvert. Ce qui change la méthode dépose le '
						+ 'nouveau jeu de règles dans un atomic.Pointer[rules.Set], et la boucle '
						+ 'des paquets le prend avant son paquet suivant. Ce pointeur est la seule '
						+ 'chose qui passe d’une goroutine à l’autre, donc changer de règles '
						+ 'n’ajoute aucun mutex sur le chemin de chaque paquet.',
				},
				{
					head: 'L’application',
					body: 'Une fenêtre de bureau faite avec Gio, et une version console du même '
						+ 'moteur. Un bouton active le contournement ; fermer la fenêtre le laisse '
						+ 'tourner dans la zone de notification. Les applications s’excluent par '
						+ 'nom ou par dossier, vos propres domaines s’ajoutent à la liste '
						+ 'intégrée. Journaux, graphique de débit, démarrage avec Windows, '
						+ 'anglais et russe. Un seul exécutable pour Windows 10 et 11, le pilote '
						+ 'à l’intérieur.',
				},
				{
					head: 'Les tests',
					body: 'Des tests unitaires sur tout le moteur, relancés avec le race detector, '
						+ 'et du fuzzing pour les analyseurs IP, TCP, UDP et ClientHello. go vet, '
						+ 'les tests et une compilation tournent sous Linux et sous Windows à '
						+ 'chaque changement. La fenêtre reste hors de la CI et se vérifie à la '
						+ 'main sous Windows, et chacune des quinze méthodes a été confirmée à la '
						+ 'main face à un DPI réel.',
				},
				{
					head: 'Ce que m’a appris un conflit avec Radmin VPN',
					body: 'Avec Obxod actif, Radmin VPN se comportait mal, et deux causes se sont '
						+ 'croisées. La détection de STUN n’était pas propre à Discord, si bien '
						+ 'que les datagrammes STUN qui servent à Radmin pour traverser le NAT '
						+ 'étaient traités comme la voix de Discord. Et l’exclusion d’une '
						+ 'application ne regardait que les propriétaires des ports TCP. Désormais '
						+ 'les propriétaires des ports UDP sont trouvés aussi, par l’API Windows, '
						+ 'et l’exclusion est vérifiée avant de modifier un datagramme UDP. Une '
						+ 'exclusion qui ne connaît qu’un protocole n’exclut qu’à moitié. C’est '
						+ 'une configuration observée à la main, pas un passage en revue de tous '
						+ 'les réseaux.',
				},
			],
		},
		{
			name: 'Sublayer',
			what: 'Des sous-titres traduits en direct pour les appels sous Windows, écrit en Go. '
				+ 'Capte le son des haut-parleurs par WASAPI, reconnaît la parole avec '
				+ 'whisper.cpp en local et affiche les traductions dans une surimpression '
				+ 'transparente que les clics traversent.',
			shelf: 'out',
			figure: 'v0.1.0 · préversion',
			ways:
			[
				{
					label: 'Télécharger v0.1.0',
					href: 'https://github.com/maksim-miliutin/Sublayer/releases/tag/v0.1.0',
				},
				{ label: 'Open code', href: 'https://github.com/maksim-miliutin/Sublayer' },
			],
			story:
			[
				{
					head: 'Pourquoi je l’ai fait',
					body: 'Un appel dans une langue étrangère se suit mieux avec les mots à '
						+ 'l’écran. Sublayer les y met pour Discord, Teams ou tout autre '
						+ 'programme qui joue par les haut-parleurs, et n’enregistre jamais le '
						+ 'micro : seul l’interlocuteur est transcrit.',
				},
				{
					head: 'La capture du son',
					body: 'Le code Go ouvre Windows WASAPI en mode loopback, qui livre ce que '
						+ 'jouent les haut-parleurs plutôt que ce qu’entend un micro. Le flux est '
						+ 'rééchantillonné pour la reconnaissance et coupé en phrases aux pauses ; '
						+ 'la parole la plus courte qui compte, la pause qui clôt une phrase et la '
						+ 'phrase la plus longue sont des réglages.',
				},
				{
					head: 'Reconnaissance et traduction',
					body: 'Chaque phrase terminée part vers un serveur whisper.cpp local, puis '
						+ 'vers LibreTranslate. Cette version entend le français et l’anglais, en '
						+ 'les distinguant phrase par phrase si on le demande, et traduit vers le '
						+ 'russe ou l’anglais, le français passant par l’anglais pour aller au '
						+ 'russe. Une phrase est traduite une fois finie, si bien que les '
						+ 'sous-titres suivent avec une phrase de retard plutôt que mot à mot.',
				},
				{
					head: 'L’intégration à Windows',
					body: 'Les sous-titres sont dans une fenêtre transparente au-dessus de toutes '
						+ 'les autres, et les clics la traversent vers ce qui est dessous. Une '
						+ 'touche les libère pour les déplacer, et le démarrage suivant se '
						+ 'souvient de leur place. Une icône de notification dont la couleur dit '
						+ 'l’état, des raccourcis globaux pour afficher, mettre en pause et '
						+ 'copier la dernière paire, et une fenêtre de réglages qui applique tout '
						+ 'de suite les langues et l’aspect des sous-titres.',
				},
				{
					head: 'La confidentialité',
					body: 'Avec les serveurs locaux par défaut, la parole est reconnue et traduite '
						+ 'sur la machine. Mais les deux serveurs ne sont que des adresses dans '
						+ 'les réglages : pointez l’un vers un hôte distant et le son ou le texte '
						+ 'y part. Les paires de sous-titres restent en mémoire, et cette version '
						+ 'n’écrit aucune transcription sur le disque. Il reste correct de '
						+ 'prévenir les gens de l’appel que les sous-titres sont actifs.',
				},
				{
					head: 'Détails d’ingénierie',
					body: 'Une file bornée sépare le découpage de la reconnaissance : quand '
						+ 'whisper.cpp prend du retard, les phrases en attente les plus anciennes '
						+ 'sont abandonnées et signalées au lieu de s’empiler, et les sous-titres '
						+ 'restent près de la conversation. Les deux serveurs sont des processus '
						+ 'enfants avec leur propre cycle de vie : lancés seulement si rien ne '
						+ 'répond à leur adresse, attendus avec une limite de temps, et arrêtés à '
						+ 'la sortie seulement si Sublayer les a lancés. La surimpression est une '
						+ 'fenêtre Win32 layered, transparente et toujours au premier plan, et '
						+ 'les raccourcis passent par RegisterHotKey, qui signale quand un autre '
						+ 'programme tient déjà une touche.',
				},
				{
					head: 'Limites actuelles',
					body: 'La v0.1.0 est une première version publique, pas un produit fini. Elle '
						+ 'tourne sous Windows 10 et 11, x64 ; Linux et macOS ne sont pas encore '
						+ 'disponibles. whisper.cpp avec un modèle de reconnaissance et '
						+ 'LibreTranslate doivent d’abord être installés et indiqués dans les '
						+ 'réglages : le téléchargement contient le programme seul, pas un paquet '
						+ 'avec tout dedans.',
				},
			],
		},
		{
			name: 'Plafond',
			what: 'Vérifie un loyer français contre son plafond légal, un dépôt contre son '
				+ 'délai, un décompte de charges contre ce qui peut être refacturé, et rédige '
				+ 'la mise en demeure. Calcule sur votre appareil, rien n’est envoyé à un '
				+ 'serveur.',
			shelf: 'out',
			figure: 'publié',
			ways:
			[
				{ label: 'Open code', href: 'https://github.com/maksim-miliutin/Plafond' },
				{ label: 'Essayer', href: 'https://maksim-miliutin.github.io/Plafond' },
			],
			story:
			[
				{
					head: 'Ce qu’on lui demandait',
					body: 'Dire à un locataire en France, chiffres à l’appui, si le propriétaire '
						+ 'demande trop : un loyer au-dessus du plafond légal, un dépôt rendu '
						+ 'après le délai, des charges que la loi ne permet pas de récupérer, une '
						+ 'hausse sur un logement classé F ou G. Puis rédiger la mise en demeure '
						+ 'qui réclame l’argent.',
				},
				{
					head: 'Sur quoi il repose',
					body: 'Des données ouvertes publiées, jamais un chiffre tapé de mémoire. '
						+ 'Chaque taux garde le jour où il entre en vigueur, celui où il prend fin '
						+ 'et l’arrêté préfectoral qui le fixe, et un bail est vérifié avec les '
						+ 'taux en vigueur le jour de sa signature. L’import lit les annexes de '
						+ 'l’arrêté et contrôle chaque ligne selon ses propres règles : le meublé '
						+ 'vaut le vide plus son complément, le majoré vingt pour cent de plus, le '
						+ 'minoré trente de moins.',
				},
				{
					head: 'Ce qui reste sur le téléphone',
					body: 'Le calcul se fait sur l’appareil. L’adresse part une seule fois, '
						+ 'directement vers le géocodeur public de la Géoplateforme, pour trouver '
						+ 'le quartier, et ne passe jamais par un serveur à moi ; le loyer ne part '
						+ 'nulle part. Pas de compte, pas de frais, pas de publicité.',
				},
				{
					head: 'Où il en est',
					body: 'En ligne, et on peut l’ajouter à l’écran d’accueil d’un téléphone. '
						+ 'Quatre vérifications, chacune finit par une lettre : cent vingt et un '
						+ 'commits en une semaine, quatre cent vingt-cinq tests, dont quatorze '
						+ 'dans de vrais navigateurs, iPhone compris. Huit loyers relevés à la '
						+ 'main sur la carte de la préfecture elle-même correspondent à ceux que '
						+ 'Plafond détient.',
				},
				{
					head: 'Ce que j’ai appris',
					body: 'Trois bugs ne faisaient rien planter, et chacun a maintenant son test. '
						+ 'Après la sortie des loyers 2026, un téléphone a gardé la table de l’an '
						+ 'dernier pendant dix minutes, le temps que Pages laisse un navigateur '
						+ 'garder un fichier, et refusait un bail de juillet ; désormais chaque '
						+ 'ouverture demande au serveur si les tables ont changé. Un badge a pris '
						+ 'le nom de classe label et transformé chaque libellé de formulaire en '
						+ 'carré qui volait les touches destinées aux choix voisins. Et une lettre '
						+ 'écrite après les six mois demandait au propriétaire de garder les '
						+ 'justificatifs jusqu’à un jour déjà passé.',
				},
			],
		},
		{
			name: 'NormPrichel',
			what: 'Un viseur en surimpression pour les jeux Windows, écrit en Go. Ne lit pas '
				+ 'la mémoire du jeu, n’envoie aucune entrée, ne capture pas l’écran. Douze '
				+ 'formes, un profil par jeu.',
			shelf: 'going',
			figure: '12 formes',
			ways:
			[
				{ label: 'Open code', href: 'https://github.com/maksim-miliutin/NormPrichel' },
			],
		},
		{
			name: 'obxod-mobile',
			what: 'Le même contournement sur Android : un service VPN local, sans root '
				+ 'et sans serveur au milieu, le trafic va droit aux sites. Le coeur '
				+ 'en Go est partagé via gomobile.',
			shelf: 'going',
			figure: 'reprise bientôt',
			ways:
			[
				{
					label: 'Open code',
					href: 'https://github.com/maksim-miliutin/obxod-mobile',
				},
			],
		},
		{
			name: 'Trellis',
			what: 'La grammaire comme graphe de dépendances plutôt que liste de sujets. '
				+ 'Pas encore livré.',
			shelf: 'mobile',
			figure: '598 tests',
		},
		{
			name: 'Vydokh',
			what: 'Arrêter la vape sans honte. Une rechute remet un seul compteur à zéro '
				+ 'et laisse les deux autres.',
			shelf: 'mobile',
			figure: '262 tests',
		},
		{
			name: 'Veilla',
			what: 'Un appel quotidien pour un parent qui vit seul. Ni l’audio ni la '
				+ 'transcription ne sont conservés.',
			shelf: 'mobile',
			figure: '157 contrôles',
		},
		{
			name: 'Pasmurno',
			what: 'Un journal d’humeur pour cinq proches. Pas de fil, pas d’algorithme, '
				+ 'discussion chiffrée sur l’appareil.',
			shelf: 'mobile',
			figure: '8 langues',
		},
		{
			name: 'Mira',
			what: 'Une caméra sur l’assiette pour les calories et les macros, et sur soi pour '
				+ 'lire le visage et la peau, croisées sur l’appareil.',
			shelf: 'mobile',
			figure: '8 langues',
		},
		{
			name: 'NetCheck',
			what: 'Nommait la couche où une connexion cesse de marcher : le routeur, '
				+ 'le fournisseur, les noms, la poignée de main. Le diagnostic a '
				+ 'touché un plafond plutôt qu’un mur, et la mesure a continué dans '
				+ 'Obxod.',
			shelf: 'frozen',
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
			name: 'Reste',
			what: 'Une couronne à 800 euros « remboursée à 70% » rend 84 euros. Reste dit '
				+ 'ce que vous paierez vraiment.',
			shelf: 'frozen',
			figure: '67 tests',
		},
		{
			name: 'MiniVPN',
			what: 'Un petit VPN fait pour montrer comment ça marche plutôt que pour en '
				+ 'remplacer un vrai : un serveur, un client, une seule clé partagée, pas '
				+ 'encore de rotation de clé.',
			shelf: 'frozen',
			figure: '2 essais',
			ways:
			[
				{ label: 'Open code', href: 'https://github.com/maksim-miliutin/MiniVPN' },
			],
		},
	] as Work[],

	reach:
	{
		heading: 'Pour me joindre',
		line: 'Le courriel est lu le jour même ; Telegram est plus rapide. L’un ou '
			+ 'l’autre convient, et aucun n’a besoin d’une introduction.',
	},

	heads:
	{
		works: 'Tout ce que j’ai construit',
		out: 'Livrés',
		going: 'En cours',
		mobile: 'Applications mobiles en React Native, gelées',
		frozen: 'Gelés',
		kit: 'Avec quoi je construis',
		atlas: 'Où je vais',
		dark: 'Sombre',
		light: 'Clair',
		close: 'Fermer',
	},

	kitSay: 'Sept d’entre eux font l’essentiel de ma journée.',

	map:
	{
		label: 'Carte de l’Europe où sont marquées Moscou, Paris et Amsterdam',
		cities:
		{
			moscow: { name: 'Moscou', say: 'Ici pour le moment. À distance tout de suite.' },
			paris: { name: 'Paris', say: 'Paris. Sur site avec un visa de travail sponsorisé.' },
			amsterdam: { name: 'Amsterdam', say: 'Amsterdam. Sur site avec un visa de travail sponsorisé.' },
		},
	},

	rules: '« Je ne peux pas calculer » est une réponse · chaque taux porte ses dates '
		+ '· un onglet laissé ouvert la nuit n’était pas neuf heures de YouTube',

	colophon: 'Écrit à la main. Pas de framework, pas d’analyse.',
};

export const SAID: Record<Tongue, Copy> = { en: EN, ru: RU, fr: FR };

const said = SAID[spoken()];

export const WHO = said.who;
export const LINKS = said.links;
export const CLAIM = said.claim;
export const SHOP = said.shop;
export const NOW = said.now;
export const TALLY = said.tally;
export const WORKS = said.works;
export const REACH = said.reach;
export const HEADS = said.heads;
export const KIT_SAY = said.kitSay;
export const MAP = said.map;
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
