type DeepKeys<T> = {
  [K in keyof T & string]: T[K] extends string ? K : `${K}.${DeepKeys<T[K]>}`;
}[keyof T & string];

export const en = {
  meta: { title: "Maksim Miliutin — Full-Stack Engineer" },
  a11y: {
    skip: "Skip to content",
    themeDark: "Switch to the night theme",
    themeLight: "Switch to the day theme",
    close: "Close",
  },
  nav: { about: "About", method: "Method", resume: "Resume", work: "Work", notes: "Notes", contact: "Contact" },

  hero: {
    kicker: "Full-stack engineer · open to relocation",
    headline: "I built a marketplace on my own. It has been in production ever since.",
    lead: "Schema, API, storefront, deploy pipeline — one engineer, end to end. Bronyka Shop runs on NestJS, PostgreSQL and Docker, and I am the one who ships it and keeps it up.",
    lead2: "Beyond it: Trellis, a language-learning platform at 97,000 lines and 598 tests, plus five smaller products. Around 170,000 lines of TypeScript, and a habit of testing anything that touches someone's money or their progress.",
    cv: "Download CV (PDF)",
    work: "See the work",
    email: "Email me"
  },
  id: {
    based: "Based in",
    name: "Name",
    role: "Role",
    roleValue: "Full-stack engineer",
    basedValue: "Russia · open to relocation & visa sponsorship",
    study: "Education",
    studyValue: "Computer Science, RTU MIREA — two years completed",
    langs: "Languages",
    langsValue: "Russian, Ukrainian — native · English — improving toward B2"
  },

  board: {
    state: "operational",
    owner: "Owner",
    ownerValue: "1 engineer — architecture to deploy",
    users: "Users",
    products: "Products",
    orders: "Orders",
    runtime: "Runtime",
    client: "Client",
    edge: "Edge",
    realtime: "Realtime",
    realtimeValue: "Socket.IO buyer–seller chat"
  },

  about: {
    heading: "About",
    p1: "I am a full-stack engineer with production experience rather than a folder of tutorials. I designed and built an online marketplace from an empty repository: database schema, backend, frontend, infrastructure. It now serves real customers and processes real orders, and every incident on it is mine to fix.",
    p2: "Two years of Computer Science at RTU MIREA gave me the fundamentals; everything past that I learned by shipping. I am looking for a team where I can bring the same ownership — and learn from engineers who have run systems larger than mine.",
    k1: "Shipped solo", v1: "One marketplace in production, five more products beside it",
    k2: "Comfortable with", v2: "Owning a feature from schema to production",
    k3: "Looking for", v3: "Full-stack or backend role, relocation welcome"
  },

  how: {
    heading: "How I work",
    seams: {
      title: "Bugs live between modules",
      body: "Almost every defect I have found sat in the seam, not inside a unit: a column renamed on one side only, a rule declared in two places, a contract field written but never read. So the seams get their own tests: schema against queries, contract against both ends."
    },
    correctness: {
      title: "Money code gets tests",
      body: "Reste has 67 tests and Veilla 103. Not because tests are a ritual, but because a wrong number about someone's money is worse than no number: the user has no way to tell it is wrong."
    },
    data: {
      title: "Rates are data, not constants",
      body: "The French GP consultation went from €26.50 to €30 in December 2024. Hardcoded figures go stale silently and keep returning answers. Every rate in Reste carries a validity period and a source, and every calculation is made as of a date."
    },
    honesty: {
      title: "\"Cannot compute\" is a valid answer",
      body: "When a line has no known reimbursement base, Reste says so instead of treating it as zero. A line without a base looks exactly like an honest full-cost line, so a silent zero would put a wrong total next to four right ones."
    },
    scope: {
      title: "What I leave out",
      body: "No invented regional averages, no annual cap I cannot verify. If the data to do it honestly does not exist, the feature does not ship."
    }
  },

  resume: {
    heading: "Resume",
    experience: "Experience",
    roleTitle: "Founder & lead full-stack developer",
    period: "2026 — present",
    b0: "Owned the whole stack: architecture, development, deployment and production upkeep across backend, frontend and infrastructure.",
    b1: "Backend on NestJS, Prisma and PostgreSQL — REST API, JWT auth with access/refresh rotation, role-based access control, rate limiting.",
    b2: "Buyer–seller messaging over WebSockets (Socket.IO), with an admin panel that watches live message flow.",
    b3: "Storefront on React and Vite: catalog, cart, checkout, order tracking, RU/EN localisation, mobile-first PWA with offline support.",
    b4: "Ran it as a business: checkout funnel, SEO (sitemap, Open Graph), and customer orders handled through the built-in chat.",
    b5: "Deployed with Docker Compose behind nginx and Cloudflare, assets on R2, CI through GitHub Actions.",
    skills: "Technical skills",
    catLang: "Languages", catBack: "Backend", catFront: "Frontend",
    catOps: "Infrastructure", catAlso: "Also worked with",
    education: "Education",
    degree: "Computer Science — two years completed"
  },

  projects: {
    heading: "Projects",
    bronykaLead: "A collectibles marketplace with real-time buyer–seller chat, order management and a mobile-first PWA storefront. Built solo, running in production.",
    visit: "Visit the site",
    cppTitle: "C++ desktop library",
    cppDesc: "A C++ library with a Qt GUI, talking to PostgreSQL through libpqxx.",
    dotnetTitle: "C# / .NET APIs",
    dotnetDesc: "REST services in C# with data access through Entity Framework Core.",
    academicTitle: "Academic web projects",
    academicDesc: "Full-stack coursework projects, built and hosted end to end.",
    siteTitle: "This site",
    siteDesc: "TypeScript, Vite and hand-written CSS. Three languages, two themes, a pixel icon set and a map built from real geodata.",
    github: "More on GitHub"
  },

  side: {
    heading: "Beyond the marketplace",
    lead: "Bronyka Shop pays the bills. These are the products I build when I get to choose the problem — mostly things I needed myself and could not find.",
    reste: {
      name: "Reste",
      tag: "React Native · TypeScript · 67 tests",
      body: "French medical quotes advertise \"70% reimbursed\" and mean 70% of a reimbursement base that can be a fifth of the price. An €800 crown returns €84, not €560. Reste reads the quote and shows what you will actually pay, with every number traced to its official source."
    },
    veilla: {
      name: "Veilla",
      tag: "Monorepo · 7 packages · 54 + 103 checks",
      body: "A daily check-in call for an elderly parent living alone, scheduled in the parent's timezone. Transcript and audio are never stored — only structure leaves the call. The product is not the call: it is the decision about when to wake the daughter at two in the morning, and, more importantly, when not to. Suppressed alarms are a measured number."
    },
    pasmurno: {
      name: "Pasmurno",
      tag: "NestJS · Prisma · PostgreSQL · Expo · 8 languages",
      body: "A mood journal for a circle of five people rather than a feed — no likes, no algorithm. The AI companion answers at four in the morning and says plainly that it is not a therapist. Chat never reaches the server and sits encrypted on the device. When the words sound like a real crisis, it surfaces the helplines for the user's country."
    },
    vydokh: {
      name: "Vydokh",
      tag: "Expo · Supabase · 7 languages · 262 core tests",
      body: "Quitting vape without shame. A slip resets the streak and nothing else: current streak, best streak and total clean days are three separate numbers, and the last two never burn. Money saved counts every clean day, because it really was not spent. There is no red anywhere in the palette — a slip is data, not a failure."
    },
    mira: {
      name: "Mira",
      tag: "Expo SDK 57 · React 19 · 8 languages",
      body: "Point the camera at a plate for calories and macros, or at yourself for a face and skin read. It keeps both histories and correlates habits against the face score with a lag of nought to two days, entirely on device — always with the sample size, never claiming a cause. Barcodes are scored from Open Food Facts with a source link on every finding."
    },
    note: "Full source and READMEs on GitHub."
  },

  notes: {
    heading: "Technical notes",
    sub: "Decisions I made while building Bronyka Shop, written up short.",
    read: "Read"
  },

  contact: {
    heading: "Get in touch",
    lead: "Open to full-stack and backend roles. Relocation welcome — I am actively planning a move to the EU and can start the paperwork on my side.",
    availability: "Available for remote work now; on site from 2027.",
    email: "Email",
    telegram: "Telegram",
    github: "GitHub",
    linkedin: "LinkedIn",
    site: "Website"
  },

  building: {
    kicker: "Currently building",
    name: "Trellis",
    tagline: "Grammar is a dependency graph, not a list of topics",
    lead: "A language app from A0 to C2 where topics unlock when their prerequisites are consolidated, explanations are written for the learner's native language, and essays feed back into the same graph: a mistake in your text drops the topic and schedules it for review.",
    scale: "97,494 lines · 358 files · 598 tests · six languages",
    honest: "Not shipped yet. The learning logic, the schema contracts and the seams between layers are covered by tests; the app has not been run end to end. The first real launch will find things, and that is worth budgeting for rather than hiding.",
    d1: {
      title: "Questions are not generated at runtime",
      body: "Templates are expanded ahead of time and slots are filled only with words the learner already knows. An unfamiliar word in a Present Simple exercise turns a grammar check into a vocabulary check, and the result stops meaning what it claims to measure."
    },
    d2: {
      title: "Slots are not independent",
      body: "\"Read\" goes with a book and not with a car, boring requires bored, Russian past tense agrees with gender. Hence compatibility tags and links between slots, rather than filling each one at random."
    },
    d3: {
      title: "Mistakes are seeded from the native language",
      body: "The error-hunt exercise corrupts sentences along interference patterns: what a Russian speaker gets wrong about articles is not what a German speaker gets wrong. A generic distractor trains nothing."
    },
    d4: {
      title: "Pseudo-words in the placement test",
      body: "If a false positive costs nothing, the measurement does not work. Invented words that follow the phonotactics of the language sit alongside real ones, and the score is corrected for guessing."
    },
    d5: {
      title: "Learning logic knows no framework",
      body: "It does not import Nest, Prisma or React. Server, app and tests run the same code — three implementations of one rule would drift, and the drift would not show as a crash but as \"for some reason it doesn't count on my phone\"."
    },
    d6: {
      title: "The seams are tested on purpose",
      body: "Almost every bug found so far lived between modules, not inside them: a field the code asks the database for and the column is missing, a rule declared twice and grown apart, a contract line the server fills and the client never reads. None of them crashed anything."
    },
    stackLabel: "Stack",
    stack: "TypeScript · gRPC · Prisma · Expo · React Native · monorepo"
  },

  map: {
    heading: "Where I am",
    lead: "Moscow now. Both targets are cities I can work from on site, and the paperwork is mine to start.",
    alt: "Map of Europe with Moscow, Paris and Dublin marked",
    from: "From",
    to: "To",
    status: "Status",
    pick: "Pick a destination",
    moscow: "Moscow, Russia",
    paris: "Paris, France",
    dublin: "Dublin, Ireland",
    moscowShort: "Moscow",
    parisShort: "Paris",
    dublinShort: "Dublin"
  },

  era: {
    heading: "Dressed as 1995",
    lead: "The chrome is a costume; the year is not. Shipped in 1995: Windows 95, Java, JavaScript, PHP, Ruby, Apache, the PNG format, Qt 0.90 — and the Linux kernel reached 1.2 that March.",
    note: "Two of them are still in my stack. Qt is in the C++ work above, and Ubuntu descends from that same kernel."
  },

  ui: {
    start: "Start",
    copy: "Copy link",
    copyAddress: "Copy address",
    copied: "Copied",
    construction: "Under construction",
    address: "Address",
    decisions: "Design decisions",
    night: "Night",
    day: "Day",
    collapse: "Roll up window",
    expand: "Roll down window",
    close: "Close",
    colName: "Name",
    colWhat: "What it does",
    colBuilt: "Built with"
  },

  footer: { built: "TypeScript and Vite, hand-written CSS, pixel icons on a 24 grid." }
};

export type Dict = typeof en;
export type Key = DeepKeys<Dict>;

const fr: Dict = {
  meta: { title: "Maksim Miliutin — Ingénieur full-stack" },
  a11y: {
    skip: "Aller au contenu",
    themeDark: "Passer au thème nuit",
    themeLight: "Passer au thème jour",
    close: "Fermer",
  },
  nav: { about: "À propos", method: "Méthode", resume: "CV", work: "Projets", notes: "Notes", contact: "Contact" },

  hero: {
    kicker: "Ingénieur full-stack · ouvert à la mobilité",
    headline: "J'ai construit une marketplace seul. Elle tourne en production depuis.",
    lead: "Schéma, API, boutique, pipeline de déploiement — un seul ingénieur, de bout en bout. Bronyka Shop tourne sur NestJS, PostgreSQL et Docker, et c'est moi qui livre et qui maintiens.",
    lead2: "À côté : Trellis, une plateforme d'apprentissage des langues de 97 000 lignes et 598 tests, plus cinq produits plus petits. Environ 170 000 lignes de TypeScript.",
    cv: "Télécharger le CV (PDF)",
    work: "Voir les projets",
    email: "M'écrire"
  },
  id: {
    based: "Basé en",
    name: "Nom",
    role: "Poste",
    roleValue: "Ingénieur full-stack",
    basedValue: "Russie · ouvert à la mobilité et au parrainage de visa",
    study: "Formation",
    studyValue: "Informatique, RTU MIREA — deux années",
    langs: "Langues",
    langsValue: "Russe, ukrainien — natif · Anglais — en progression vers B2"
  },

  board: {
    state: "en production",
    owner: "Responsable",
    ownerValue: "1 ingénieur — de l'architecture au déploiement",
    users: "Utilisateurs",
    products: "Produits",
    orders: "Commandes",
    runtime: "Serveur",
    client: "Client",
    edge: "Infrastructure",
    realtime: "Temps réel",
    realtimeValue: "Chat acheteur–vendeur en Socket.IO"
  },

  about: {
    heading: "À propos",
    p1: "Je suis ingénieur full-stack avec une vraie expérience en production, pas un dossier de tutoriels. J'ai conçu et développé une marketplace à partir d'un dépôt vide : schéma de base de données, backend, frontend, infrastructure. Elle sert aujourd'hui de vrais clients et traite de vraies commandes, et chaque incident est à moi de le régler.",
    p2: "Deux années d'informatique à RTU MIREA m'ont donné les fondamentaux ; tout le reste, je l'ai appris en livrant. Je cherche une équipe où apporter le même sens de la responsabilité — et apprendre d'ingénieurs qui ont opéré des systèmes plus grands que le mien.",
    k1: "Livré en solo", v1: "Une marketplace en production, cinq autres produits à côté",
    k2: "À l'aise pour", v2: "Porter une fonctionnalité du schéma à la production",
    k3: "Je cherche", v3: "Un poste full-stack ou backend, mobilité bienvenue"
  },

  how: {
    heading: "Ma façon de travailler",
    seams: {
      title: "Les bugs vivent entre les modules",
      body: "Presque tous les défauts que j'ai trouvés étaient dans la jointure, pas dans un module : une colonne renommée d'un seul côté, une règle déclarée à deux endroits, un champ de contrat écrit et jamais lu. Les jointures ont donc leurs propres tests : le schéma contre les requêtes, le contrat contre ses deux extrémités."
    },
    correctness: {
      title: "Le code qui touche à l'argent est testé",
      body: "Reste a 67 tests et Veilla 103. Non par rituel, mais parce qu'un chiffre faux sur l'argent de quelqu'un est pire qu'aucun chiffre : l'utilisateur n'a aucun moyen de voir qu'il est faux."
    },
    data: {
      title: "Les tarifs sont des données, pas des constantes",
      body: "La consultation d'un généraliste est passée de 26,50 € à 30 € en décembre 2024. Les valeurs codées en dur périment en silence et continuent de répondre. Chaque tarif dans Reste porte une période de validité et une source, et chaque calcul se fait à une date donnée."
    },
    honesty: {
      title: "« Impossible à calculer » est une réponse valable",
      body: "Quand une ligne n'a pas de base de remboursement connue, Reste le dit au lieu de la traiter comme zéro. Une ligne sans base ressemble exactement à une ligne honnête au prix plein : un zéro silencieux mettrait un total faux à côté de quatre justes."
    },
    scope: {
      title: "Ce que je laisse de côté",
      body: "Pas de moyennes régionales inventées, pas de plafond annuel que je ne peux pas vérifier. Si les données pour le faire honnêtement n'existent pas, la fonctionnalité ne sort pas."
    }
  },

  resume: {
    heading: "CV",
    experience: "Expérience",
    roleTitle: "Fondateur & développeur full-stack principal",
    period: "2026 — aujourd'hui",
    b0: "Responsable de toute la stack : architecture, développement, déploiement et maintien en production (backend, frontend, infrastructure).",
    b1: "Backend en NestJS, Prisma et PostgreSQL — API REST, authentification JWT avec rotation access/refresh, contrôle d'accès par rôles, limitation de débit.",
    b2: "Messagerie acheteur–vendeur en WebSockets (Socket.IO), avec un panneau d'administration qui suit les messages en direct.",
    b3: "Boutique en React et Vite : catalogue, panier, paiement, suivi des commandes, localisation RU/EN, PWA mobile-first avec mode hors ligne.",
    b4: "Gérée comme une vraie activité : tunnel de commande, SEO (sitemap, Open Graph) et suivi client via le chat intégré.",
    b5: "Déployée avec Docker Compose derrière nginx et Cloudflare, fichiers sur R2, CI via GitHub Actions.",
    skills: "Compétences techniques",
    catLang: "Langages", catBack: "Backend", catFront: "Frontend",
    catOps: "Infrastructure", catAlso: "Également utilisé",
    education: "Formation",
    degree: "Informatique — deux années"
  },

  projects: {
    heading: "Projets",
    bronykaLead: "Une marketplace de collection avec chat acheteur–vendeur en temps réel, gestion des commandes et boutique PWA mobile-first. Construite seul, en production.",
    visit: "Voir le site",
    cppTitle: "Bibliothèque C++ avec interface",
    cppDesc: "Une bibliothèque C++ avec interface Qt, connectée à PostgreSQL via libpqxx.",
    dotnetTitle: "APIs C# / .NET",
    dotnetDesc: "Services REST en C# avec accès aux données via Entity Framework Core.",
    academicTitle: "Projets web académiques",
    academicDesc: "Projets full-stack réalisés et hébergés de bout en bout pendant les études.",
    siteTitle: "Ce site",
    siteDesc: "TypeScript, Vite et CSS écrit à la main. Trois langues, deux thèmes, un jeu d'icônes pixel et une carte construite à partir de vraies données géographiques.",
    github: "Plus sur GitHub"
  },

  side: {
    heading: "Au-delà de la marketplace",
    lead: "Bronyka Shop, c'est le travail. Voici les produits que je construis quand je choisis le problème moi-même — surtout des choses dont j'avais besoin et que je n'ai pas trouvées.",
    reste: {
      name: "Reste",
      tag: "React Native · TypeScript · 67 tests",
      body: "Un devis annonce « remboursé à 70 % » et veut dire 70 % d'une base de remboursement qui peut valoir un cinquième du prix. Une couronne à 800 € rapporte 84 €, pas 560 €. Reste lit le devis et affiche ce que vous paierez vraiment, chaque chiffre relié à sa source officielle."
    },
    veilla: {
      name: "Veilla",
      tag: "Monorepo · 7 paquets · 54 + 103 vérifications",
      body: "Un appel quotidien pour un parent âgé qui vit seul, planifié dans son fuseau horaire. Ni transcription ni audio ne sont conservés — seule la structure sort de l'appel. Le produit n'est pas l'appel : c'est la décision de réveiller la fille à deux heures du matin, et surtout celle de ne pas la réveiller. Les alertes supprimées sont un chiffre mesuré."
    },
    pasmurno: {
      name: "Pasmurno",
      tag: "NestJS · Prisma · PostgreSQL · Expo · 8 langues",
      body: "Un journal d'humeur pour un cercle de cinq proches, pas pour un fil — sans likes, sans algorithme. L'IA répond à quatre heures du matin et dit clairement qu'elle n'est pas thérapeute. La conversation n'atteint jamais le serveur et reste chiffrée sur l'appareil. Si les mots évoquent une vraie crise, l'application affiche les lignes d'écoute du pays de l'utilisateur."
    },
    vydokh: {
      name: "Vydokh",
      tag: "Expo · Supabase · 7 langues · 262 tests du cœur",
      body: "Arrêter la vape sans honte. Une rechute remet à zéro la série et rien d'autre : série en cours, meilleure série et total de jours propres sont trois nombres distincts, et les deux derniers ne brûlent jamais. L'argent économisé compte chaque jour propre, parce qu'il n'a effectivement pas été dépensé. Aucun rouge dans la palette — une rechute est une donnée, pas un échec."
    },
    mira: {
      name: "Mira",
      tag: "Expo SDK 57 · React 19 · 8 langues",
      body: "La caméra sur l'assiette pour les calories et les macros, ou sur soi pour une lecture du visage et de la peau. L'application garde les deux historiques et corrèle les habitudes au score du visage avec un décalage de zéro à deux jours, entièrement sur l'appareil — toujours avec la taille de l'échantillon, jamais en affirmant une cause. Les codes-barres sont notés à partir d'Open Food Facts, chaque constat avec sa source."
    },
    note: "Sources et READMEs sur GitHub."
  },

  notes: {
    heading: "Notes techniques",
    sub: "Les décisions prises en construisant Bronyka Shop, en version courte.",
    read: "Lire"
  },

  contact: {
    heading: "Me contacter",
    lead: "Ouvert aux postes full-stack et backend. Relocalisation bienvenue — un déménagement vers l'UE est en préparation de mon côté.",
    availability: "En télétravail dès maintenant, sur place à partir de 2027.",
    email: "E-mail",
    telegram: "Telegram",
    github: "GitHub",
    linkedin: "LinkedIn",
    site: "Site web"
  },

  building: {
    kicker: "En cours",
    name: "Trellis",
    tagline: "La grammaire est un graphe de dépendances, pas une liste de thèmes",
    lead: "Une application d'apprentissage des langues de A0 à C2 : un thème s'ouvre quand ses prérequis sont consolidés, les explications sont écrites pour la langue maternelle de l'apprenant, et les rédactions rejoignent le même graphe — une faute dans le texte fait retomber le thème et le remet en révision.",
    scale: "97 494 lignes · 358 fichiers · 598 tests · six langues",
    honest: "Pas encore lancé. La logique d'apprentissage, les contrats de schéma et les jointures entre couches sont couverts par des tests ; l'application n'a jamais tourné de bout en bout. Le premier vrai lancement trouvera des choses, et cela se planifie plutôt que se cache.",
    d1: {
      title: "Les questions ne sont pas générées à l'exécution",
      body: "Les gabarits sont déroulés à l'avance et les emplacements ne reçoivent que des mots déjà connus. Un mot inconnu dans un exercice de Present Simple transforme un test de grammaire en test de vocabulaire."
    },
    d2: {
      title: "Les emplacements ne sont pas indépendants",
      body: "« Lire » va avec un livre et pas avec une voiture, boring appelle bored, le passé russe s'accorde en genre. D'où des étiquettes de compatibilité et des liens entre emplacements."
    },
    d3: {
      title: "Les fautes viennent de la langue maternelle",
      body: "L'exercice de chasse aux erreurs abîme les phrases selon les schémas d'interférence : un russophone ne se trompe pas d'articles comme un germanophone. Un distracteur générique n'entraîne rien."
    },
    d4: {
      title: "Des pseudo-mots dans le test de placement",
      body: "Si un faux positif ne coûte rien, la mesure ne mesure rien. Des mots inventés respectant la phonotactique de la langue côtoient les vrais, et le score est corrigé pour la devinette."
    },
    d5: {
      title: "La logique d'apprentissage ignore les frameworks",
      body: "Elle n'importe ni Nest, ni Prisma, ni React. Serveur, application et tests exécutent le même code : trois implémentations d'une même règle divergeraient, et la divergence n'apparaîtrait pas comme un plantage mais comme « sur mon téléphone ça ne compte pas »."
    },
    d6: {
      title: "Les jointures sont testées exprès",
      body: "Presque tous les bugs trouvés vivaient entre les modules, pas dedans : un champ demandé à la base dont la colonne manque, une règle déclarée deux fois et devenue incohérente, une ligne de contrat que le serveur remplit et que le client ne lit jamais. Aucun n'a fait planter quoi que ce soit."
    },
    stackLabel: "Stack",
    stack: "TypeScript · gRPC · Prisma · Expo · React Native · monorepo"
  },

  map: {
    heading: "Où je suis",
    lead: "Moscou pour l'instant. Les deux destinations sont des villes où je peux travailler sur place, et les démarches sont de mon côté.",
    alt: "Carte de l'Europe avec Moscou, Paris et Dublin",
    from: "Depuis",
    to: "Vers",
    status: "Statut",
    pick: "Choisissez une destination",
    moscow: "Moscou, Russie",
    paris: "Paris, France",
    dublin: "Dublin, Irlande",
    moscowShort: "Moscou",
    parisShort: "Paris",
    dublinShort: "Dublin"
  },

  era: {
    heading: "Déguisé en 1995",
    lead: "L\'habillage est un costume, l\'année ne l\'est pas. Sont sortis en 1995 : Windows 95, Java, JavaScript, PHP, Ruby, Apache, le format PNG, Qt 0.90 — et le noyau Linux est passé en 1.2 en mars.",
    note: "Deux d\'entre eux sont encore dans ma stack. Qt est dans le travail C++ plus haut, et Ubuntu descend de ce même noyau."
  },

  ui: {
    start: "Démarrer",
    copy: "Copier le lien",
    copyAddress: "Copier l'adresse",
    copied: "Copié",
    construction: "En construction",
    address: "Adresse",
    decisions: "Choix de conception",
    night: "Nuit",
    day: "Jour",
    collapse: "Replier la fenêtre",
    expand: "Déplier la fenêtre",
    close: "Fermer",
    colName: "Nom",
    colWhat: "Ce que ça fait",
    colBuilt: "Construit avec"
  },

  footer: { built: "TypeScript et Vite, CSS écrit à la main, icônes pixel sur une grille de 24." }
};

const ru: Dict = {
  meta: { title: "Максим Милютин — Full-stack разработчик" },
  a11y: {
    skip: "Перейти к содержимому",
    themeDark: "Включить ночную тему",
    themeLight: "Включить дневную тему",
    close: "Закрыть",
  },
  nav: { about: "Обо мне", method: "Подход", resume: "Резюме", work: "Проекты", notes: "Заметки", contact: "Контакты" },

  hero: {
    kicker: "Full-stack разработчик · готов к переезду",
    headline: "Я в одиночку собрал маркетплейс. С тех пор он работает в продакшене.",
    lead: "Схема базы, API, витрина, пайплайн деплоя — один разработчик, от начала до конца. Bronyka Shop работает на NestJS, PostgreSQL и Docker; я выкатываю релизы и держу сервис живым.",
    lead2: "Кроме него: Trellis — платформа для изучения языков на 97 000 строк и 598 тестов, плюс пять продуктов поменьше. Около 170 000 строк TypeScript и привычка покрывать тестами всё, что касается чужих денег или чужого прогресса.",
    cv: "Скачать CV (PDF)",
    work: "Смотреть проекты",
    email: "Написать"
  },
  id: {
    based: "Локация",
    name: "Имя",
    role: "Роль",
    roleValue: "Full-stack разработчик",
    basedValue: "Россия · готов к переезду и визовой поддержке",
    study: "Образование",
    studyValue: "Информатика, РТУ МИРЭА — два курса",
    langs: "Языки",
    langsValue: "Русский, украинский — родные · Английский — подтягиваю до B2"
  },

  board: {
    state: "в продакшене",
    owner: "Ответственный",
    ownerValue: "1 разработчик — от архитектуры до деплоя",
    users: "Пользователи",
    products: "Товары",
    orders: "Заказы",
    runtime: "Сервер",
    client: "Клиент",
    edge: "Инфраструктура",
    realtime: "Реалтайм",
    realtimeValue: "Чат покупатель–продавец на Socket.IO"
  },

  about: {
    heading: "Обо мне",
    p1: "Я full-stack разработчик с продакшен-опытом, а не с папкой туториалов. Спроектировал и собрал маркетплейс из пустого репозитория: схема базы, backend, frontend, инфраструктура. Сейчас им пользуются реальные покупатели и через него проходят реальные заказы, и любой инцидент чиню я.",
    p2: "Два курса информатики в РТУ МИРЭА дали базу; всё остальное я выучил, выкатывая продукты. Ищу команду, куда можно принести такой же уровень ответственности — и поучиться у инженеров, которые работали с системами больше моей.",
    k1: "Сделано в одиночку", v1: "Маркетплейс в продакшене и ещё пять продуктов рядом",
    k2: "Умею", v2: "Вести фичу от схемы базы до продакшена",
    k3: "Ищу", v3: "Full-stack или backend позицию, переезд не пугает"
  },

  how: {
    heading: "Как я работаю",
    seams: {
      title: "Ошибки живут между модулями",
      body: "Почти все дефекты, которые я находил, сидели на стыке, а не внутри модуля: колонка, переименованная с одной стороны; правило, объявленное в двух местах; поле контракта, которое пишут и не читают. Поэтому у стыков свои тесты: схема против запросов, контракт против обоих концов."
    },
    correctness: {
      title: "Код про деньги покрыт тестами",
      body: "У Reste 67 тестов, у Veilla 103. Не потому что тесты это ритуал, а потому что неверное число про чужие деньги хуже, чем никакого: пользователю нечем понять, что оно неверное."
    },
    data: {
      title: "Тарифы — данные, а не константы",
      body: "Приём терапевта во Франции подорожал с 26,50 € до 30 € в декабре 2024-го. Зашитые в код цифры устаревают молча и продолжают отвечать. У каждого тарифа в Reste есть период действия и источник, а расчёт делается на конкретную дату."
    },
    honesty: {
      title: "«Посчитать нельзя» — тоже ответ",
      body: "Если у строки нет известной базы возмещения, Reste так и говорит, а не считает её нулём. Строка без базы выглядит точно как честная строка на полную стоимость, и тихий ноль подставил бы неверный итог рядом с четырьмя верными."
    },
    scope: {
      title: "Чего я не делаю",
      body: "Никаких выдуманных средних по региону и годовых потолков, которые я не могу проверить. Если данных, чтобы сделать честно, нет, функция не выходит."
    }
  },

  resume: {
    heading: "Резюме",
    experience: "Опыт",
    roleTitle: "Основатель и ведущий full-stack разработчик",
    period: "2026 — настоящее время",
    b0: "Отвечал за весь стек: архитектура, разработка, деплой и поддержка в продакшене — backend, frontend и инфраструктура.",
    b1: "Backend на NestJS, Prisma и PostgreSQL: REST API, JWT-аутентификация с ротацией access/refresh, ролевая модель доступа, rate limiting.",
    b2: "Чат покупатель–продавец на WebSockets (Socket.IO) и админ-панель, которая видит поток сообщений в реальном времени.",
    b3: "Витрина на React и Vite: каталог, корзина, оформление, отслеживание заказов, локализация RU/EN, mobile-first PWA с офлайн-режимом.",
    b4: "Вёл как бизнес: воронка оформления заказа, SEO (sitemap, Open Graph), работа с заказами клиентов через встроенный чат.",
    b5: "Деплой через Docker Compose за nginx и Cloudflare, файлы на R2, CI на GitHub Actions.",
    skills: "Технические навыки",
    catLang: "Языки", catBack: "Backend", catFront: "Frontend",
    catOps: "Инфраструктура", catAlso: "Также работал с",
    education: "Образование",
    degree: "Информатика — два курса"
  },

  projects: {
    heading: "Проекты",
    bronykaLead: "Маркетплейс коллекционных товаров: чат покупатель–продавец в реальном времени, управление заказами и mobile-first PWA-витрина. Собран в одиночку, работает в продакшене.",
    visit: "Открыть сайт",
    cppTitle: "C++ библиотека с GUI",
    cppDesc: "Библиотека на C++ с интерфейсом на Qt и подключением к PostgreSQL через libpqxx.",
    dotnetTitle: "API на C# / .NET",
    dotnetDesc: "REST-сервисы на C# с доступом к данным через Entity Framework Core.",
    academicTitle: "Учебные веб-проекты",
    academicDesc: "Full-stack проекты, собранные и развёрнутые целиком в рамках учёбы.",
    siteTitle: "Этот сайт",
    siteDesc: "TypeScript, Vite и CSS руками. Три языка, две темы, пиксельный набор иконок и карта из настоящих геоданных.",
    github: "Ещё на GitHub"
  },

  side: {
    heading: "Кроме маркетплейса",
    lead: "Bronyka Shop — это работа. А это продукты, которые я делаю, когда сам выбираю задачу: в основном то, что понадобилось мне и чего не нашлось готового.",
    reste: {
      name: "Reste",
      tag: "React Native · TypeScript · 67 тестов",
      body: "Французские медицинские сметы обещают «возмещение 70 %», имея в виду 70 % от базы возмещения, которая бывает впятеро меньше цены. Коронка за 800 € возвращает 84 €, а не 560. Reste читает смету и показывает реальную доплату, где каждая цифра ведёт к официальному источнику."
    },
    veilla: {
      name: "Veilla",
      tag: "Монорепо · 7 пакетов · 54 + 103 проверки",
      body: "Ежедневный звонок пожилому родителю, который живёт один, по его часовому поясу. Ни транскрипт, ни аудио не сохраняются — наружу выходит только структура. Продукт — не звонок: продукт это решение, когда будить дочь в два часа ночи и, что важнее, когда её не будить. Подавленные тревоги — измеряемая величина."
    },
    pasmurno: {
      name: "Pasmurno",
      tag: "NestJS · Prisma · PostgreSQL · Expo · 8 языков",
      body: "Дневник настроения для круга из пяти близких, а не для ленты — без лайков и алгоритмов. ИИ-собеседник отвечает и в четыре утра, и честно говорит, что он не терапевт. Переписка не доходит до сервера и лежит на устройстве зашифрованной. Если в словах слышится настоящий кризис, приложение показывает живые линии помощи страны пользователя."
    },
    vydokh: {
      name: "Vydokh",
      tag: "Expo · Supabase · 7 языков · 262 теста ядра",
      body: "Бросить вейп без стыда. Срыв обнуляет серию и больше ничего: текущая серия, лучшая серия и всего чистых дней — три разных числа, и последние два не сгорают никогда. Сэкономленные деньги считаются от всех чистых дней, потому что они и правда не потрачены. В палитре нет красного — срыв это данные, а не провал."
    },
    mira: {
      name: "Mira",
      tag: "Expo SDK 57 · React 19 · 8 языков",
      body: "Камера на тарелку — калории и макросы, камера на себя — разбор лица и кожи. Приложение держит обе истории и сопоставляет привычки с оценкой лица со сдвигом в ноль-два дня, целиком на устройстве: всегда показывает размер выборки и никогда не утверждает причину. Штрихкоды оцениваются по Open Food Facts, у каждого вывода своя ссылка на источник."
    },
    note: "Исходники и README на GitHub."
  },

  notes: {
    heading: "Технические заметки",
    sub: "Решения, которые я принимал, когда делал Bronyka Shop — коротко.",
    read: "Читать"
  },

  contact: {
    heading: "Связаться",
    lead: "Открыт к full-stack и backend позициям. Готов к релокации — переезд в ЕС планирую и оформление со своей стороны начну сам.",
    availability: "Удалённо — сейчас, на месте — с 2027 года.",
    email: "Почта",
    telegram: "Telegram",
    github: "GitHub",
    linkedin: "LinkedIn",
    site: "Сайт"
  },

  building: {
    kicker: "Сейчас в работе",
    name: "Trellis",
    tagline: "Грамматика — это граф зависимостей, а не список тем",
    lead: "Приложение для изучения языков от A0 до C2, где тема открывается, когда закреплены предпосылки, объяснения написаны под конкретный родной язык, а эссе замкнуто на тот же граф: ошибка в тексте роняет тему и поднимает её в повторение.",
    scale: "97 494 строки · 358 файлов · 598 тестов · шесть языков",
    honest: "Ещё не запущено. Логика обучения, контракты схемы и стыки между слоями покрыты тестами; приложение целиком ни разу не прогонялось. Первый настоящий запуск найдёт своё, и это стоит закладывать в сроки, а не прятать.",
    d1: {
      title: "Вопросы не генерируются в рантайме",
      body: "Шаблоны раскатываются заранее, слоты заполняются только словами, которые ученик уже знает. Незнакомое слово в задании на Present Simple превращает проверку грамматики в проверку словаря, и результат перестаёт значить то, что заявлено."
    },
    d2: {
      title: "Слоты не независимы",
      body: "«Читать» сочетается с книгой и не сочетается с машиной, boring требует bored, русское прошедшее согласуется по роду. Отсюда метки сочетаемости и связи между слотами вместо случайного заполнения."
    },
    d3: {
      title: "Ошибки подсеваются от родного языка",
      body: "Упражнение на поиск ошибок портит предложения по образцу интерференции: русскоязычный ошибается в артиклях не так, как немецкоязычный. Универсальный отвлекающий вариант не тренирует ничего."
    },
    d4: {
      title: "Псевдослова во входном тесте",
      body: "Если за ложное срабатывание ничего не стоит, измерение не работает. Рядом с настоящими словами стоят выдуманные по фонотактике языка, и результат корректируется на угадывание."
    },
    d5: {
      title: "Логика обучения не знает фреймворков",
      body: "Она не импортирует ни Nest, ни Prisma, ни React. Сервер, приложение и тесты берут один и тот же код: три реализации одного правила разъехались бы, и расхождение проявилось бы не падением, а как «на телефоне почему-то не засчитывает»."
    },
    d6: {
      title: "Стыки проверяются намеренно",
      body: "Почти все найденные ошибки лежали между модулями, а не внутри них: поле, которое код спрашивает у базы, а колонки нет; правило, объявленное дважды и разъехавшееся; строка контракта, которую сервер заполняет, а клиент не читает. Ни одна из них не падала."
    },
    stackLabel: "Стек",
    stack: "TypeScript · gRPC · Prisma · Expo · React Native · монорепозиторий"
  },

  map: {
    heading: "Где я",
    lead: "Сейчас Москва. Обе цели — города, где я могу работать на месте, и оформление беру на себя.",
    alt: "Карта Европы с отметками Москвы, Парижа и Дублина",
    from: "Откуда",
    to: "Куда",
    status: "Статус",
    pick: "Выберите город",
    moscow: "Москва, Россия",
    paris: "Париж, Франция",
    dublin: "Дублин, Ирландия",
    moscowShort: "Москва",
    parisShort: "Париж",
    dublinShort: "Дублин"
  },

  era: {
    heading: "Костюм 1995 года",
    lead: "Оформление — маскарад, а год настоящий. В 1995-м вышли: Windows 95, Java, JavaScript, PHP, Ruby, Apache, формат PNG, Qt 0.90 — и ядро Linux в марте дошло до версии 1.2.",
    note: "Двое из них до сих пор в моём стеке. Qt — в работах на C++ выше, а Ubuntu ведёт родословную от того же ядра."
  },

  ui: {
    start: "Пуск",
    copy: "Скопировать ссылку",
    copyAddress: "Скопировать адрес",
    copied: "Скопировано",
    construction: "В разработке",
    address: "Адрес",
    decisions: "Проектные решения",
    night: "Ночь",
    day: "День",
    collapse: "Свернуть окно",
    expand: "Развернуть окно",
    close: "Закрыть",
    colName: "Имя",
    colWhat: "Что делает",
    colBuilt: "На чём"
  },

  footer: { built: "TypeScript и Vite, CSS написан руками, пиксельные иконки по сетке 24." }
};

export const translations = { en, fr, ru };
export type Lang = keyof typeof translations;

export const isLang = (value: string): value is Lang => value in translations;
