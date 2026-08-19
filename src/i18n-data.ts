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
    lead: "Schema, API, storefront, deploy pipeline. One engineer, start to finish. Bronyka Shop runs on NestJS, PostgreSQL and Docker, and I am the one who ships it and gets the call when it breaks.",
    lead2: "Beside it: Trellis at 97,494 lines, and five smaller products. 173,099 lines of TypeScript in total. Anything that touches someone's money or their progress gets tests.",
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
    langsValue: "Russian, Ukrainian: native. English: reading and writing daily, still pulling it up"
  },

  board: {
    state: "operational",
    owner: "Owner",
    ownerValue: "1 engineer, architecture to deploy",
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
    p1: "I have shipped one thing that real people pay money through, and I maintain it. I designed and built the marketplace from an empty repository: database schema, backend, frontend, infrastructure. Every incident on it is mine to fix.",
    p2: "Two years of Computer Science at RTU MIREA gave me the fundamentals; everything past that I learned by shipping. I am looking for a team where I can bring the same ownership and learn from engineers who have run systems larger than mine.",
    k1: "Shipped solo", v1: "One marketplace in production, five more products beside it",
    k2: "Comfortable with", v2: "Owning a feature from schema to production",
    k3: "Looking for", v3: "Full-stack or backend role, relocation welcome"
  },

  how: {
    heading: "How I work",
    seams: {
      title: "Bugs live between modules",
      body: "Almost every defect I have found sat in the seam between two units: a column renamed on one side only, a rule declared in two places, a contract field written and never read. So the seams get their own tests. Schema against queries, contract against both ends."
    },
    correctness: {
      title: "Money code gets tests",
      body: "Reste has 67 tests and Veilla 103. Not because tests are a ritual, but because a wrong number about someone's money is worse than no number: the user has no way to tell it is wrong."
    },
    data: {
      title: "Every rate carries its dates",
      body: "The French GP consultation went from €26.50 to €30 in December 2024. Hardcoded figures go stale silently and keep answering. Every rate in Reste carries the dates it was in force and a link to the source it came from, and every calculation is made as of a date."
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
    b1: "Backend on NestJS, Prisma and PostgreSQL. REST API, JWT auth with access/refresh rotation, role-based access control, rate limiting.",
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

  work: { shot: "bronykashop.com — the storefront customers see" },

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
    siteDesc: "Hand-written TypeScript, CSS and HTML. No UI framework, no component library, just Vite to bundle it. Three languages, two themes, a pixel icon set and a map built from real geodata.",
    github: "Other work"
  },

  side: {
    heading: "Beyond the marketplace",
    lead: "Bronyka Shop pays the bills. These are the products I build when I get to choose the problem, mostly things I needed myself and could not find.",
    reste: {
      name: "Reste",
      tag: "React Native · TypeScript · 67 tests",
      body: "French medical quotes advertise \"70% reimbursed\" and mean 70% of a reimbursement base that can be a fifth of the price. An €800 crown returns €84. Reste reads the quote and shows what you will actually pay, with every number traced to its official source."
    },
    veilla: {
      name: "Veilla",
      tag: "Monorepo · 7 packages · 157 checks",
      body: "A daily check-in call for an elderly parent living alone, scheduled in the parent's timezone. Transcript and audio are never stored: only structure leaves the call. But the call is the easy part. Anyone can place a call. The hard part is deciding whether what you heard is worth waking the daughter at two in the morning, and far more often, deciding that it is not. Get that wrong in one direction and someone lies on a floor until morning. Get it wrong the other way often enough and the family mutes the app, which is the same outcome with extra steps. So suppressed alarms are a number I measure, not a footnote."
    },
    pasmurno: {
      name: "Pasmurno",
      tag: "NestJS · Prisma · PostgreSQL · Expo · 8 languages",
      body: "A mood journal for a circle of five close people. No feed, no likes, no algorithm. The AI companion answers at four in the morning and says plainly that it is not a therapist. Chat never reaches the server and sits encrypted on the device. When the words sound like a real crisis, it surfaces the helplines for the user's country."
    },
    vydokh: {
      name: "Vydokh",
      tag: "Expo · Supabase · 7 languages · 262 core tests",
      body: "Quitting vape without shame. Three numbers: current streak, best streak, total clean days. A slip resets the first and leaves the other two alone. Money saved counts every clean day, because it really was not spent. There is no red anywhere in the palette; a slip just moves one number."
    },
    mira: {
      name: "Mira",
      tag: "Expo SDK 57 · React 19 · 8 languages",
      body: "Camera on a plate for calories and macros, camera on yourself for a face and skin read. It correlates the two histories on device, with a lag of nought to two days, and always shows the sample size."
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
    lead: "Open to full-stack and backend roles. Relocation welcome: I am actively planning a move to the EU and can start the paperwork on my side.",
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
    honest: "Not shipped yet. The learning logic, the schema contracts and the seams between layers are covered by tests; the app has not been run end to end. The first real launch will find things, and I would rather budget for that than hide it.",
    d1: {
      title: "Questions are not generated at runtime",
      body: "Templates are expanded ahead of time and slots are filled only with words the learner already knows. An unfamiliar word in a Present Simple exercise turns a grammar check into a vocabulary check, and the result stops meaning what it claims to measure."
    },
    d2: {
      title: "Slots are not independent",
      body: "\"Read\" goes with a book and not with a car, boring requires bored, Russian past tense agrees with gender. Hence compatibility tags and links between slots, so a generated sentence stays legal."
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
      body: "It does not import Nest, Prisma or React. Server, app and tests run the same code. Three implementations of one rule would drift, and the drift would not show as a crash but as \"for some reason it doesn't count on my phone\"."
    },
    d6: {
      title: "The seams are tested on purpose",
      body: "Almost every bug found so far lived between modules: a field the code asks the database for and the column is missing, a rule declared twice and grown apart, a contract line the server fills and the client never reads. None of them crashed anything."
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

  footer: { built: "Hand-written TypeScript, CSS and HTML. No UI framework, just Vite to bundle it.", updated: "Last updated: August 2026" }
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
    lead: "Schéma, API, boutique, pipeline de déploiement. Un seul ingénieur, du début à la fin. Bronyka Shop tourne sur NestJS, PostgreSQL et Docker, et c'est moi qui le livre et qu'on appelle quand il casse.",
    lead2: "À côté : Trellis, 97 494 lignes, et cinq produits plus petits. 173 099 lignes de TypeScript au total. Tout ce qui touche à l'argent ou aux progrès de quelqu'un est couvert par des tests.",
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
    langsValue: "Russe, ukrainien : natif. Anglais : lu et écrit tous les jours, encore en progression"
  },

  board: {
    state: "en production",
    owner: "Responsable",
    ownerValue: "1 ingénieur, de l'architecture au déploiement",
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
    p1: "J'ai livré une chose par laquelle de vraies personnes paient, et je la maintiens. J'ai conçu et construit la place de marché à partir d'un dépôt vide : schéma de base, backend, frontend, infrastructure. Chaque incident est à moi de réparer.",
    p2: "Deux ans d'informatique à RTU MIREA m'ont donné les bases ; tout le reste, je l'ai appris en livrant. Je cherche une équipe où apporter la même prise de responsabilité et apprendre d'ingénieurs qui ont fait tourner des systèmes plus grands que le mien.",
    k1: "Livré en solo", v1: "Une marketplace en production, cinq autres produits à côté",
    k2: "À l'aise pour", v2: "Porter une fonctionnalité du schéma à la production",
    k3: "Je cherche", v3: "Un poste full-stack ou backend, mobilité bienvenue"
  },

  how: {
    heading: "Ma façon de travailler",
    seams: {
      title: "Les bugs vivent entre les modules",
      body: "Presque tous les défauts que j'ai trouvés étaient à la jointure entre deux modules : une colonne renommée d'un seul côté, une règle déclarée à deux endroits, un champ de contrat écrit et jamais lu. Les jointures ont donc leurs propres tests. Le schéma contre les requêtes, le contrat contre ses deux extrémités."
    },
    correctness: {
      title: "Le code qui touche à l'argent est testé",
      body: "Reste a 67 tests et Veilla 103. Non par rituel, mais parce qu'un chiffre faux sur l'argent de quelqu'un est pire qu'aucun chiffre : l'utilisateur n'a aucun moyen de voir qu'il est faux."
    },
    data: {
      title: "Chaque tarif porte ses dates",
      body: "La consultation d'un généraliste est passée de 26,50 € à 30 € en décembre 2024. Les valeurs codées en dur périment en silence et continuent de répondre. Chaque tarif dans Reste porte les dates où il était en vigueur et un lien vers sa source, et chaque calcul se fait à une date donnée."
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
    b1: "Backend sur NestJS, Prisma et PostgreSQL. API REST, authentification JWT avec rotation access/refresh, contrôle d'accès par rôles, limitation de débit.",
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

  work: { shot: "bronykashop.com — la boutique telle que les clients la voient" },

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
    siteDesc: "TypeScript, CSS et HTML écrits à la main. Aucun framework d'interface, aucune bibliothèque de composants, juste Vite pour le bundle. Trois langues, deux thèmes, un jeu d'icônes pixel et une carte construite à partir de vraies données géographiques.",
    github: "Autres travaux"
  },

  side: {
    heading: "Au-delà de la marketplace",
    lead: "Bronyka Shop paie les factures. Voici les produits que je construis quand je choisis le problème, surtout des choses dont j'avais besoin et que je n'ai pas trouvées.",
    reste: {
      name: "Reste",
      tag: "React Native · TypeScript · 67 tests",
      body: "Les devis médicaux français annoncent « remboursé à 70 % » et sous-entendent 70 % d'une base de remboursement qui peut valoir un cinquième du prix. Une couronne à 800 € rapporte 84 €. Reste lit le devis et montre ce que vous paierez vraiment, chaque chiffre relié à sa source officielle."
    },
    veilla: {
      name: "Veilla",
      tag: "Monorepo · 7 paquets · 157 vérifications",
      body: "Un appel quotidien pour un parent âgé qui vit seul, planifié dans son fuseau horaire. Ni transcription ni audio ne sont conservés : seule la structure sort de l'appel. Mais l'appel est la partie facile. N'importe qui sait téléphoner. Le difficile, c'est de décider si ce qu'on a entendu mérite de réveiller la fille à deux heures du matin, et bien plus souvent, de décider que non. Se tromper dans un sens, et quelqu'un reste par terre jusqu'au matin. Se tromper assez souvent dans l'autre, et la famille coupe les notifications, ce qui revient au même en plus long. Les alertes supprimées sont donc un chiffre que je mesure, pas une note de bas de page."
    },
    pasmurno: {
      name: "Pasmurno",
      tag: "NestJS · Prisma · PostgreSQL · Expo · 8 langues",
      body: "Un journal d'humeur pour un cercle de cinq proches. Pas de fil, pas de likes, pas d'algorithme. L'IA répond à quatre heures du matin et dit clairement qu'elle n'est pas thérapeute. La conversation n'atteint jamais le serveur et reste chiffrée sur l'appareil. Si les mots évoquent une vraie crise, l'application affiche les lignes d'écoute du pays de l'utilisateur."
    },
    vydokh: {
      name: "Vydokh",
      tag: "Expo · Supabase · 7 langues · 262 tests du cœur",
      body: "Arrêter la vape sans honte. Trois nombres : série en cours, meilleure série, total de jours propres. Une rechute remet le premier à zéro et laisse les deux autres tranquilles. L'argent économisé compte chaque jour propre, parce qu'il n'a effectivement pas été dépensé. Aucun rouge dans la palette ; une rechute déplace simplement un nombre."
    },
    mira: {
      name: "Mira",
      tag: "Expo SDK 57 · React 19 · 8 langues",
      body: "La caméra sur l'assiette pour les calories et les macros, sur soi pour une lecture du visage et de la peau. L'application corrèle les deux historiques sur l'appareil, avec un décalage de zéro à deux jours, et affiche toujours la taille de l'échantillon."
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
    lead: "Ouvert aux postes full-stack et backend. Mobilité bienvenue : je prépare activement une installation dans l'UE et peux lancer les démarches de mon côté.",
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
    honest: "Pas encore livré. La logique d'apprentissage, les contrats de schéma et les jointures entre couches sont couverts par des tests ; l'application n'a jamais été lancée de bout en bout. Le premier vrai lancement trouvera des choses, et je préfère le budgéter que le cacher.",
    d1: {
      title: "Les questions ne sont pas générées à l'exécution",
      body: "Les gabarits sont déroulés à l'avance et les emplacements ne reçoivent que des mots déjà connus. Un mot inconnu dans un exercice de Present Simple transforme un test de grammaire en test de vocabulaire."
    },
    d2: {
      title: "Les emplacements ne sont pas indépendants",
      body: "« Lire » va avec un livre et pas avec une voiture, boring demande bored, le passé russe s'accorde en genre. D'où les étiquettes de compatibilité et les liens entre emplacements, pour qu'une phrase générée reste correcte."
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
      body: "Elle n'importe ni Nest, ni Prisma, ni React. Le serveur, l'application et les tests exécutent le même code. Trois implémentations d'une même règle finiraient par diverger, et la divergence n'apparaîtrait pas comme un plantage mais comme « pour une raison ou une autre, ça ne compte pas sur mon téléphone »."
    },
    d6: {
      title: "Les jointures sont testées exprès",
      body: "Presque tous les bugs trouvés jusqu'ici vivaient entre les modules : un champ que le code demande à la base et dont la colonne manque, une règle déclarée deux fois et devenue divergente, une ligne de contrat que le serveur remplit et que le client ne lit jamais. Aucun n'a fait planter quoi que ce soit."
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

  footer: { built: "TypeScript, CSS et HTML écrits à la main. Aucun framework d'interface, juste Vite pour le bundle.", updated: "Mise à jour : août 2026" }
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
    lead: "Схема, API, витрина, деплой. Один инженер от начала до конца. Bronyka Shop работает на NestJS, PostgreSQL и Docker, и звонят мне, когда он падает.",
    lead2: "Рядом: Trellis на 97 494 строки и пять продуктов поменьше. Всего 173 099 строк TypeScript. Всё, что касается чужих денег или чужого прогресса, покрыто тестами.",
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
    langsValue: "Русский, украинский: родные. Английский: читаю и пишу каждый день, подтягиваю"
  },

  board: {
    state: "в продакшене",
    owner: "Ответственный",
    ownerValue: "1 инженер, от архитектуры до деплоя",
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
    p1: "Я сделал вещь, через которую живые люди платят деньги, и я её поддерживаю. Маркетплейс собран с пустого репозитория: схема базы, бэкенд, фронтенд, инфраструктура. Каждый инцидент на нём чиню я.",
    p2: "Два года Computer Science в РТУ МИРЭА дали фундамент; всё остальное я выучил, выкатывая. Ищу команду, где смогу принести такую же ответственность и поучиться у инженеров, которые водили системы больше моей.",
    k1: "Сделано в одиночку", v1: "Маркетплейс в продакшене и ещё пять продуктов рядом",
    k2: "Умею", v2: "Вести фичу от схемы базы до продакшена",
    k3: "Ищу", v3: "Full-stack или backend позицию, переезд не пугает"
  },

  how: {
    heading: "Как я работаю",
    seams: {
      title: "Ошибки живут между модулями",
      body: "Почти все дефекты, которые я находил, сидели на стыке двух модулей: колонка, переименованная с одной стороны; правило, объявленное в двух местах; поле контракта, которое пишут и не читают. Поэтому у стыков свои тесты. Схема против запросов, контракт против обоих концов."
    },
    correctness: {
      title: "Код про деньги покрыт тестами",
      body: "У Reste 67 тестов, у Veilla 103. Не потому что тесты это ритуал, а потому что неверное число про чужие деньги хуже, чем никакого: пользователю нечем понять, что оно неверное."
    },
    data: {
      title: "У каждого тарифа свои даты",
      body: "Приём терапевта во Франции подорожал с 26,50 € до 30 € в декабре 2024-го. Зашитые в код цифры устаревают молча и продолжают отвечать. У каждого тарифа в Reste есть даты, когда он действовал, и ссылка на источник, а расчёт делается на конкретную дату."
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
    b1: "Бэкенд на NestJS, Prisma и PostgreSQL. REST API, JWT-аутентификация с ротацией access/refresh, ролевой доступ, ограничение частоты запросов.",
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

  work: { shot: "bronykashop.com — витрина, которую видят покупатели" },

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
    siteDesc: "TypeScript, CSS и HTML написаны руками. Ни UI-фреймворка, ни библиотеки компонентов, только Vite для сборки. Три языка, две темы, пиксельный набор иконок и карта из настоящих геоданных.",
    github: "Другие работы"
  },

  side: {
    heading: "Кроме маркетплейса",
    lead: "Bronyka Shop оплачивает счета. Это продукты, которые я делаю, когда задачу выбираю сам, в основном то, что было нужно мне и чего я не нашёл.",
    reste: {
      name: "Reste",
      tag: "React Native · TypeScript · 67 тестов",
      body: "Французские медицинские сметы обещают «возмещение 70 %», имея в виду 70 % от базы возмещения, которая бывает впятеро меньше цены. Коронка за 800 € возвращает 84 €. Reste читает смету и показывает реальную доплату, где каждая цифра ведёт к официальному источнику."
    },
    veilla: {
      name: "Veilla",
      tag: "Монорепо · 7 пакетов · 157 проверок",
      body: "Ежедневный звонок пожилому родителю, который живёт один, по его часовому поясу. Ни транскрипт, ни аудио не сохраняются: наружу выходит только структура. Но звонок — простая часть. Позвонить умеет любой. Сложное — решить, стоит ли услышанное того, чтобы будить дочь в два часа ночи, и гораздо чаще решить, что не стоит. Ошибись в одну сторону — человек пролежит на полу до утра. Ошибайся достаточно часто в другую — семья отключит уведомления, и это тот же исход, только длиннее. Поэтому подавленные тревоги я измеряю, а не упоминаю сноской."
    },
    pasmurno: {
      name: "Pasmurno",
      tag: "NestJS · Prisma · PostgreSQL · Expo · 8 языков",
      body: "Дневник настроения для круга из пяти близких. Без ленты, без лайков, без алгоритмов. ИИ-собеседник отвечает и в четыре утра, и честно говорит, что он не терапевт. Переписка не доходит до сервера и лежит на устройстве зашифрованной. Если в словах слышится настоящий кризис, приложение показывает живые линии помощи страны пользователя."
    },
    vydokh: {
      name: "Vydokh",
      tag: "Expo · Supabase · 7 языков · 262 теста ядра",
      body: "Бросить вейп без стыда. Три числа: текущая серия, лучшая серия, всего чистых дней. Срыв обнуляет первое и не трогает остальные два. Сэкономленные деньги считаются от всех чистых дней, потому что они и правда не потрачены. В палитре нет красного; срыв просто сдвигает одно число."
    },
    mira: {
      name: "Mira",
      tag: "Expo SDK 57 · React 19 · 8 языков",
      body: "Камера на тарелку — калории и макросы, камера на себя — разбор лица и кожи. Приложение сопоставляет две истории на устройстве со сдвигом в ноль-два дня и всегда показывает размер выборки."
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
    lead: "Открыт к full-stack и backend позициям. Релокация приветствуется: переезд в ЕС планирую и оформление со своей стороны начну сам.",
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
    honest: "Ещё не запущено. Логика обучения, контракты схемы и стыки между слоями покрыты тестами; приложение ни разу не прогонялось от начала до конца. Первый настоящий запуск что-нибудь найдёт, и я предпочитаю заложить это в план, а не прятать.",
    d1: {
      title: "Вопросы не генерируются в рантайме",
      body: "Шаблоны раскатываются заранее, слоты заполняются только словами, которые ученик уже знает. Незнакомое слово в задании на Present Simple превращает проверку грамматики в проверку словаря, и результат перестаёт значить то, что заявлено."
    },
    d2: {
      title: "Слоты не независимы",
      body: "«Читать» сочетается с книгой и не сочетается с машиной, boring требует bored, русское прошедшее согласуется по роду. Отсюда теги совместимости и связи между слотами, чтобы сгенерированная фраза оставалась допустимой."
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
      body: "Она не импортирует ни Nest, ни Prisma, ни React. Сервер, приложение и тесты выполняют один и тот же код. Три реализации одного правила разъехались бы, и расхождение проявилось бы не падением, а фразой «почему-то на телефоне не засчитывает»."
    },
    d6: {
      title: "Стыки проверяются намеренно",
      body: "Почти все найденные баги жили между модулями: поле, которое код просит у базы, а колонки нет; правило, объявленное дважды и разъехавшееся; строка контракта, которую сервер заполняет, а клиент не читает. Ни один ничего не уронил."
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

  footer: { built: "TypeScript, CSS и HTML написаны руками. Без UI-фреймворка, только Vite для сборки.", updated: "Обновлено: август 2026" }
};

export const translations = { en, fr, ru };
export type Lang = keyof typeof translations;

export const isLang = (value: string): value is Lang => value in translations;
