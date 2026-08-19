export interface Copy
{
    title: string;
    readingTime: string;
    body: string[];
}

export interface Post
{
    id: string;
    tag: string;
    date: string;
    en: Copy;
    fr: Copy;
    ru: Copy;
}

// each note is a bug that reached a real person before it reached a test
export const posts: Post[] =
[
    {
        id: "realtime-chat",
        tag: "WebSockets",
        date: "2026-05",

        en:
        {
            title: "Messages that arrived everywhere except the buyer",
            readingTime: "3 min read",
            body:
            [
                "Sellers complained that buyers were not answering. Buyers said they never got the message. The sender saw his own line appear instantly, so from his side the conversation looked normal.",
                "Nothing was lost. Every message was in the database, and the gateway emitted it to the conversation room without an error.",
                "The buyer was not in that room. A buyer connects to a socket room named after his own user id, which gives him every dialogue he has without joining each one. Category rooms have their own id, so for those the emit went to a room the buyer had never joined.",
                "The fix is two lines: broadcast to the room the message belongs to, and to the room owner as well, skipping the second emit when they are the same. The typing indicator had the identical hole and was fixed alongside it.",
                "The lesson I took: a delivery bug with no error in the log is a routing bug. Nothing crashes when you send correctly addressed data to the wrong address.",
            ],
        },

        fr:
        {
            title: "Des messages qui arrivaient partout sauf chez l'acheteur",
            readingTime: "3 min de lecture",
            body:
            [
                "Les vendeurs se plaignaient que les acheteurs ne répondaient pas. Les acheteurs disaient n'avoir rien reçu. L'expéditeur voyait sa propre ligne apparaître aussitôt, donc de son côté la conversation semblait normale.",
                "Rien n'était perdu. Chaque message était en base, et la passerelle l'émettait vers la salle de conversation sans erreur.",
                "L'acheteur n'était pas dans cette salle. Un acheteur se connecte à une salle socket nommée d'après son propre identifiant, ce qui lui donne tous ses dialogues sans rejoindre chacun. Les salles par catégorie ont leur propre identifiant : l'émission partait vers une salle que l'acheteur n'avait jamais rejointe.",
                "Le correctif tient en deux lignes : diffuser vers la salle du message et vers le propriétaire de la salle, en évitant la seconde émission quand les deux coïncident. L'indicateur de saisie avait exactement le même trou.",
                "Ce que j'en retiens : un bug de livraison sans erreur dans les logs est un bug d'adressage. Rien ne plante quand on envoie des données correctes à la mauvaise adresse.",
            ],
        },

        ru:
        {
            title: "Сообщения доходили всем, кроме покупателя",
            readingTime: "3 мин чтения",
            body:
            [
                "Продавцы жаловались, что покупатели не отвечают. Покупатели говорили, что ничего не получали. Отправитель видел свою строку сразу, поэтому с его стороны переписка выглядела нормально.",
                "Ничего не терялось. Каждое сообщение лежало в базе, и гейтвей отправлял его в комнату диалога без ошибок.",
                "Покупателя в этой комнате не было. Он подключён к socket-комнате со своим userId — так он получает все свои диалоги, не заходя в каждый отдельно. У категорийных комнат свой id, и для них эмит уходил в комнату, куда покупатель никогда не заходил.",
                "Правка в две строки: слать и в комнату сообщения, и владельцу комнаты, пропуская второй эмит, когда это одно и то же. У индикатора «печатает» была ровно та же дыра, починил заодно.",
                "Вывод, который я забрал: баг доставки без ошибки в логах — это баг адресации. Ничего не падает, когда правильные данные уходят по неправильному адресу.",
            ],
        },
    },

    {
        id: "order-duplicates",
        tag: "Orders",
        date: "2026-06",

        en:
        {
            title: "One order, two purchase requests in the chat",
            readingTime: "3 min read",
            body:
            [
                "A manager reported seeing the same purchase request twice in the chat while the orders panel showed a single order. The order side was already deduplicated on the server; the chat was not.",
                "The frontend guard only caught a double click inside one page. Real duplicates came from retries on a slow connection, the back button, and two parallel requests from the same cart.",
                "Now the server checks it: if the same user already has a pending order with the identical set of product, variant and quantity within ninety seconds, that order is returned instead of a new one being created.",
                "Returning the existing order was not enough. The frontend still sent its chat card, because as far as it knew the checkout had succeeded. So the response carries a duplicate flag that never touches the database and exists only to tell the client to stay quiet.",
                "Deduplicating the write is half the job. Everything downstream of the write has to learn that nothing new happened.",
            ],
        },

        fr:
        {
            title: "Une commande, deux demandes d'achat dans le chat",
            readingTime: "3 min de lecture",
            body:
            [
                "Un manager a signalé la même demande d'achat deux fois dans le chat alors que le panneau des commandes n'en montrait qu'une. Le côté commande était déjà dédupliqué sur le serveur ; le chat ne l'était pas.",
                "La garde côté front n'attrapait qu'un double clic dans une même page. Les vrais doublons venaient des reprises sur réseau lent, du bouton retour et de deux requêtes parallèles depuis le même panier.",
                "Le serveur le vérifie maintenant : si l'utilisateur a déjà une commande en attente avec le même ensemble produit, variante et quantité dans les quatre-vingt-dix secondes, cette commande est renvoyée au lieu d'en créer une autre.",
                "Renvoyer la commande existante ne suffisait pas. Le front envoyait quand même sa carte de chat, puisque pour lui la commande avait réussi. La réponse porte donc un indicateur de doublon, absent de la base, qui sert uniquement à faire taire le client.",
                "Dédupliquer l'écriture n'est que la moitié du travail. Tout ce qui suit l'écriture doit apprendre qu'il ne s'est rien passé de neuf.",
            ],
        },

        ru:
        {
            title: "Один заказ, две заявки на покупку в чате",
            readingTime: "3 мин чтения",
            body:
            [
                "Менеджер сообщил, что видит одну и ту же заявку на покупку дважды, хотя в панели заказов заказ один. Со стороны заказов дедупликация на сервере уже была, со стороны чата — нет.",
                "Защита на фронте ловила только двойной клик в пределах одной страницы. Настоящие дубли приходили с ретраев на медленной сети, с кнопки «назад» и с двух параллельных запросов из одной корзины.",
                "Теперь это проверяет сервер: если у пользователя за последние девяносто секунд уже есть pending-заказ с тем же набором товара, варианта и количества, возвращается он, а не создаётся новый.",
                "Вернуть существующий заказ оказалось мало. Фронт всё равно отправлял свою карточку в чат, потому что с его точки зрения оформление прошло успешно. Поэтому в ответе появился флаг дубля, которого нет в базе и который существует ровно для того, чтобы клиент промолчал.",
                "Дедупликация записи — половина дела. Всё, что стоит после записи, тоже должно узнать, что нового ничего не произошло.",
            ],
        },
    },

    {
        id: "jwt-auth",
        tag: "Auth",
        date: "2026-04",

        en:
        {
            title: "Refresh rotation, and the tab that lost the race",
            readingTime: "3 min read",
            body:
            [
                "Access tokens are short so a stolen one expires quickly, and refresh tokens are long so nobody is logged out mid-purchase. That is the convenience half.",
                "The security half is rotation. Each refresh call deletes the session it came from and issues a new pair, and the refresh token is stored as a bcrypt hash rather than in the clear. If a token arrives that does not match the stored hash, every session for that user is deleted and the attempt is logged as reuse detected.",
                "That worked and then broke ordinary browsing. Two tabs refresh within the same second: the first rotates and gets new cookies, the second arrives with a token whose session no longer exists, and the user is thrown out for a reuse he did not commit.",
                "So a rotated token id is marked before the session is deleted, and a request that hits a recently rotated id gets told to retry rather than being treated as an attack. The window is small and it is the difference between a working shop and a shop that logs you out when you open a product in a new tab.",
                "The lesson: a security rule that has never met a real browser will treat normal behaviour as an attack.",
            ],
        },

        fr:
        {
            title: "Rotation des refresh, et l'onglet qui perd la course",
            readingTime: "3 min de lecture",
            body:
            [
                "Les jetons d'accès sont courts pour qu'un vol expire vite, et les jetons de rafraîchissement sont longs pour que personne ne soit déconnecté au milieu d'un achat. C'est la moitié confort.",
                "La moitié sécurité, c'est la rotation. Chaque rafraîchissement supprime la session d'origine et émet une nouvelle paire, et le jeton est stocké en hachage bcrypt, jamais en clair. Si un jeton ne correspond pas au hachage stocké, toutes les sessions de l'utilisateur sont supprimées et la tentative est journalisée comme réutilisation détectée.",
                "Cela fonctionnait, puis cassait la navigation ordinaire. Deux onglets se rafraîchissent dans la même seconde : le premier tourne et reçoit de nouveaux cookies, le second arrive avec un jeton dont la session n'existe plus, et l'utilisateur est éjecté pour une réutilisation qu'il n'a pas commise.",
                "L'identifiant du jeton ayant tourné est donc marqué avant la suppression de la session, et une requête qui tombe sur un identifiant récemment tourné reçoit l'ordre de réessayer au lieu d'être traitée comme une attaque.",
                "La leçon : une règle de sécurité qui n'a jamais rencontré un vrai navigateur prend le comportement normal pour une attaque.",
            ],
        },

        ru:
        {
            title: "Ротация refresh и вкладка, проигравшая гонку",
            readingTime: "3 мин чтения",
            body:
            [
                "Access-токены короткие, чтобы украденный быстро протух, а refresh длинный, чтобы человека не выкидывало посреди покупки. Это половина про удобство.",
                "Вторая половина — про безопасность, и это ротация. Каждый обмен удаляет сессию, из которой пришёл, и выдаёт новую пару, а сам refresh лежит bcrypt-хешем, а не открытым текстом. Если приходит токен, не совпадающий с хешем, все сессии пользователя удаляются, а попытка пишется в лог как обнаруженное переиспользование.",
                "Это работало и ломало обычную работу. Две вкладки обновляются в одну секунду: первая ротирует и получает свежие куки, вторая приходит с токеном, сессии которого уже нет, и человека выкидывает за переиспользование, которого он не совершал.",
                "Поэтому id ротированного токена помечается до удаления сессии, и запрос, попавший на недавно ротированный id, получает ответ «повтори», а не обвинение в атаке. Окно маленькое, но это разница между работающим магазином и магазином, который разлогинивает при открытии товара в новой вкладке.",
                "Вывод: правило безопасности, которое ни разу не встречалось с настоящим браузером, принимает нормальное поведение за атаку.",
            ],
        },
    },
];
