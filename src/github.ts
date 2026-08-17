type Repo = {
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    fork: boolean;
    stargazers_count: number;
    pushed_at: string;
};

const USER = 'maksim-miliutin';

export async function initRepos() {
    const list = document.querySelector('#gh-list');
    if (!list) return;

    let repos: Repo[];
    try {
        const response = await fetch(`https://api.github.com/users/${USER}/repos?sort=updated&per_page=30`);
        if (!response.ok) return;
        repos = (await response.json()) as Repo[];
    } catch {
        return;
    }

    const picks = repos
        .filter(repo => !repo.fork && !repo.name.endsWith('.github.io'))
        .sort((a, b) => b.stargazers_count - a.stargazers_count || Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
        .slice(0, 4);

    if (!picks.length) return;

    for (const repo of picks) {
        const li = document.createElement('li');

        const name = document.createElement('h4');
        name.textContent = repo.name;
        li.append(name);

        if (repo.description) {
            const text = document.createElement('p');
            text.textContent = repo.description;
            li.append(text);
        }

        const link = document.createElement('a');
        link.href = repo.html_url;
        link.target = '_blank';
        link.rel = 'noopener';
        link.textContent = repo.full_name;
        li.append(link);

        list.append(li);
    }

    (list as HTMLElement).hidden = false;
}
