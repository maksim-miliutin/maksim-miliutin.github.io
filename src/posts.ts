export type Post = {
    id: string;
    tag: string;
    date: string;
    en: Copy;
    fr: Copy;
    ru: Copy;
};

export type Copy = {
    title: string;
    readingTime: string;
    body: string[];
};

export const posts: Post[] = [
  {
    id: "realtime-chat",
    tag: "WebSockets",
    date: "2026-05",
    en: {
      title: "Real-time buyer–seller chat with WebSockets",
      readingTime: "4 min read",
      body: [
        "Bronyka Shop needed buyers and sellers to talk without refreshing the page. Polling the REST API every few seconds was wasteful and still felt laggy, so I moved messaging to a persistent WebSocket connection using Socket.IO on top of NestJS.",
        "On the backend I used a NestJS WebSocket gateway. Each connection is authenticated with the same JWT the REST API issues — the token is verified in a handshake guard before the socket is allowed to join any room, so an unauthenticated client never receives a single message.",
        "Every conversation is its own room. When a user opens a chat, the client joins `chat:<conversationId>`; the server emits new messages only to that room instead of broadcasting. This keeps traffic proportional to who is actually in the conversation.",
        "Messages are persisted to PostgreSQL through Prisma the moment they arrive, then echoed to the room. That ordering matters: if the socket write fails, the message is still saved, so history is never lost — the UI just reconciles on reconnect.",
        "I also built a small admin panel that subscribes to an `admin` room, so support can watch live message flow and step into a conversation when a buyer reports a problem.",
        "What I'd revisit: adding delivery/read receipts and a Redis adapter so the gateway scales across more than one Node process."
      ]
    },
    fr: {
      title: "Chat acheteur–vendeur en temps réel avec WebSockets",
      readingTime: "4 min de lecture",
      body: [
        "Bronyka Shop devait permettre aux acheteurs et vendeurs de discuter sans recharger la page. Interroger l'API REST toutes les quelques secondes était coûteux et restait lent ; j'ai donc déplacé la messagerie vers une connexion WebSocket persistante avec Socket.IO au-dessus de NestJS.",
        "Côté backend, j'ai utilisé une passerelle WebSocket NestJS. Chaque connexion est authentifiée avec le même JWT que l'API REST — le token est vérifié dans un guard de handshake avant que le socket ne rejoigne une room, donc un client non authentifié ne reçoit jamais le moindre message.",
        "Chaque conversation est sa propre room. Quand un utilisateur ouvre un chat, le client rejoint `chat:<conversationId>` ; le serveur n'émet les nouveaux messages qu'à cette room au lieu de tout diffuser. Le trafic reste proportionnel aux participants réels.",
        "Les messages sont persistés dans PostgreSQL via Prisma dès leur arrivée, puis renvoyés à la room. Cet ordre compte : si l'écriture socket échoue, le message est quand même sauvegardé — l'historique n'est jamais perdu, l'UI se resynchronise à la reconnexion.",
        "J'ai aussi construit un petit panneau d'administration abonné à une room `admin`, pour que le support suive les messages en direct et intervienne quand un acheteur signale un problème.",
        "Ce que je revisiterais : ajouter les accusés de livraison/lecture et un adaptateur Redis pour que la passerelle passe à l'échelle sur plusieurs processus Node."
      ]
    },
    ru: {
      title: "Чат покупатель–продавец в реальном времени на WebSockets",
      readingTime: "4 мин чтения",
      body: [
        "В Bronyka Shop нужно было, чтобы покупатели и продавцы общались без перезагрузки страницы. Опрашивать REST API каждые несколько секунд — расточительно и всё равно с задержкой, поэтому я перенёс переписку на постоянное WebSocket-соединение через Socket.IO поверх NestJS.",
        "На бэкенде я использовал WebSocket-шлюз NestJS. Каждое соединение аутентифицируется тем же JWT, что выдаёт REST API — токен проверяется в guard на этапе handshake до того, как сокет допускается в любую комнату, так что неаутентифицированный клиент не получает ни одного сообщения.",
        "Каждый диалог — отдельная комната. Когда пользователь открывает чат, клиент входит в `chat:<conversationId>`; сервер шлёт новые сообщения только в эту комнату, а не всем подряд. Трафик остаётся пропорционален числу реальных участников.",
        "Сообщения сохраняются в PostgreSQL через Prisma сразу при поступлении, а затем отправляются в комнату. Порядок важен: если запись в сокет не удалась, сообщение всё равно сохранено — история не теряется, а интерфейс досинхронизируется при переподключении.",
        "Ещё я сделал небольшую админ-панель, подписанную на комнату `admin`, чтобы поддержка видела поток сообщений вживую и подключалась к диалогу, когда покупатель сообщает о проблеме.",
        "Что бы доработал: статусы доставки/прочтения и Redis-адаптер, чтобы шлюз масштабировался на несколько Node-процессов."
      ]
    }
  },
  {
    id: "nestjs-prisma",
    tag: "Architecture",
    date: "2026-04",
    en: {
      title: "Why I chose NestJS + Prisma for the backend",
      readingTime: "3 min read",
      body: [
        "For a solo-built marketplace I needed a backend that stays organized as it grows, without me inventing structure from scratch. NestJS gives that out of the box: modules, dependency injection, and guards mean auth, rate limiting, and validation live in one predictable place instead of scattered middleware.",
        "Prisma was the other half. Its schema file is the single source of truth for the database, and the generated client is fully typed — so a wrong column name or a missing relation is a compile error in my editor, not a 500 in production.",
        "Migrations are the underrated part. `prisma migrate` turns every schema change into a versioned, reviewable SQL file, which meant I could evolve the products and orders tables safely while real data was already in the database.",
        "The combination pays off at the seams: a NestJS service method receives a typed Prisma result, passes it through a DTO, and the response shape is guaranteed end to end. Fewer runtime surprises means more time shipping features.",
        "Trade-off I accepted: Prisma's generated queries aren't always the most efficient SQL. For the few hot paths that mattered I checked the query plan and would drop to raw SQL if needed — but for 95% of the app the productivity win was worth it."
      ]
    },
    fr: {
      title: "Pourquoi j'ai choisi NestJS + Prisma pour le backend",
      readingTime: "3 min de lecture",
      body: [
        "Pour une marketplace développée seul, il me fallait un backend qui reste organisé en grandissant, sans inventer une structure de zéro. NestJS l'offre nativement : modules, injection de dépendances et guards font que l'auth, le rate limiting et la validation vivent au même endroit prévisible plutôt qu'éparpillés en middleware.",
        "Prisma était l'autre moitié. Son fichier de schéma est la source unique de vérité pour la base, et le client généré est entièrement typé — un mauvais nom de colonne ou une relation manquante devient une erreur de compilation dans mon éditeur, pas une 500 en production.",
        "Les migrations sont la partie sous-estimée. `prisma migrate` transforme chaque changement de schéma en fichier SQL versionné et relisible, ce qui m'a permis de faire évoluer les tables produits et commandes en toute sécurité alors que des données réelles étaient déjà en base.",
        "La combinaison paie aux jointures : une méthode de service NestJS reçoit un résultat Prisma typé, le passe dans un DTO, et la forme de la réponse est garantie de bout en bout. Moins de surprises à l'exécution, plus de temps pour livrer.",
        "Compromis accepté : les requêtes générées par Prisma ne sont pas toujours le SQL le plus efficace. Pour les quelques chemins critiques, j'ai vérifié le plan de requête et serais passé au SQL brut si nécessaire — mais pour 95 % de l'app, le gain de productivité en valait la peine."
      ]
    },
    ru: {
      title: "Почему для бэкенда я выбрал NestJS + Prisma",
      readingTime: "3 мин чтения",
      body: [
        "Для маркетплейса, который делаю в одиночку, нужен был бэкенд, остающийся структурным по мере роста, без изобретения архитектуры с нуля. NestJS даёт это из коробки: модули, внедрение зависимостей и guard'ы означают, что аутентификация, rate limiting и валидация живут в одном предсказуемом месте, а не разбросаны по middleware.",
        "Prisma — вторая половина. Её файл схемы — единственный источник правды о базе, а сгенерированный клиент полностью типизирован, поэтому неверное имя колонки или пропущенная связь — это ошибка компиляции в редакторе, а не 500 в продакшене.",
        "Миграции — недооценённая часть. `prisma migrate` превращает каждое изменение схемы в версионируемый и проверяемый SQL-файл, что позволило безопасно развивать таблицы товаров и заказов, когда в базе уже были реальные данные.",
        "Связка окупается на стыках: метод сервиса NestJS получает типизированный результат Prisma, прогоняет через DTO, и форма ответа гарантирована от начала до конца. Меньше сюрпризов в рантайме — больше времени на фичи.",
        "Компромисс, на который я пошёл: сгенерированные Prisma запросы не всегда самый эффективный SQL. Для немногих горячих путей я смотрел план запроса и при необходимости спустился бы к сырому SQL — но для 95% приложения выигрыш в скорости разработки того стоил."
      ]
    }
  },
  {
    id: "jwt-auth",
    tag: "Security",
    date: "2026-03",
    en: {
      title: "JWT auth with access/refresh rotation",
      readingTime: "3 min read",
      body: [
        "Authentication on Bronyka Shop uses two tokens instead of one. A short-lived access token authorizes each request; a longer-lived refresh token, stored separately, is used only to mint a new access token when it expires. If an access token leaks, it's useless within minutes.",
        "On every refresh I rotate the refresh token too — the old one is invalidated and a new one issued. That way a stolen refresh token can be detected: if the original owner and an attacker both try to use it, the reuse is caught and the session is killed.",
        "Authorization is role-based. A guard reads the role claim from the verified token and decides whether the request can reach a given route, so a normal user can never hit a seller-only or admin-only endpoint even by guessing the URL.",
        "I added rate limiting on the auth routes specifically, because login and refresh are the endpoints people brute-force. Throttling them protects accounts without annoying normal usage.",
        "If I rebuilt it: move refresh tokens into httpOnly cookies rather than storage the frontend can read, to shrink the XSS surface further."
      ]
    },
    fr: {
      title: "Auth JWT avec rotation access/refresh",
      readingTime: "3 min de lecture",
      body: [
        "L'authentification de Bronyka Shop utilise deux tokens au lieu d'un. Un access token à courte durée autorise chaque requête ; un refresh token à durée plus longue, stocké séparément, sert uniquement à générer un nouvel access token à son expiration. Si un access token fuit, il est inutile en quelques minutes.",
        "À chaque refresh, je fais aussi tourner le refresh token — l'ancien est invalidé et un nouveau émis. Ainsi un refresh token volé peut être détecté : si le propriétaire d'origine et un attaquant tentent tous deux de l'utiliser, la réutilisation est repérée et la session tuée.",
        "L'autorisation est basée sur les rôles. Un guard lit le claim de rôle du token vérifié et décide si la requête peut atteindre une route, si bien qu'un utilisateur normal ne peut jamais toucher un endpoint réservé aux vendeurs ou aux admins, même en devinant l'URL.",
        "J'ai ajouté un rate limiting spécifiquement sur les routes d'auth, car login et refresh sont les endpoints qu'on attaque par force brute. Les throttler protège les comptes sans gêner l'usage normal.",
        "Si je le refaisais : mettre les refresh tokens dans des cookies httpOnly plutôt qu'un stockage lisible par le frontend, pour réduire encore la surface XSS."
      ]
    },
    ru: {
      title: "JWT-аутентификация с ротацией access/refresh",
      readingTime: "3 мин чтения",
      body: [
        "Аутентификация в Bronyka Shop использует два токена вместо одного. Короткоживущий access-токен авторизует каждый запрос; более долгоживущий refresh-токен, хранящийся отдельно, нужен только чтобы выпустить новый access-токен по истечении. Если access-токен утечёт, он бесполезен уже через минуты.",
        "При каждом обновлении я ротирую и refresh-токен — старый инвалидируется, выпускается новый. Так украденный refresh-токен можно обнаружить: если исходный владелец и атакующий пытаются использовать его оба, повторное использование ловится и сессия убивается.",
        "Авторизация ролевая. Guard читает claim роли из проверенного токена и решает, дойдёт ли запрос до маршрута, так что обычный пользователь никогда не попадёт на endpoint для продавцов или админов, даже угадав URL.",
        "Я добавил rate limiting именно на маршруты аутентификации, потому что вход и refresh — это то, что брутфорсят. Троттлинг защищает аккаунты, не мешая обычной работе.",
        "Если бы делал заново: перенёс бы refresh-токены в httpOnly-cookie вместо хранилища, доступного фронтенду, чтобы ещё сократить поверхность XSS."
      ]
    }
  }
];
