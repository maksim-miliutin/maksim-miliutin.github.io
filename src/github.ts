import { $ } from './dom';

interface Repo
{
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    fork: boolean;
    stargazers_count: number;
    pushed_at: string;
}

const USER = 'maksim-miliutin';

const SHOWN = 4;

/** Fills the repository list, or leaves it hidden when the API says nothing useful. */
export async function initRepos(): Promise<void>
{
    const list = $('#gh-list');

    if (list === null)
    {
        return;
    }

    const repos = await fetchRepos();

    // the call is unauthenticated, so sixty requests an hour per address is the ceiling
    if (repos === null)
    {
        return;
    }

    const picks = repos
        .filter((repo) => !repo.fork && !repo.name.endsWith('.github.io'))
        .sort((a, b) => b.stargazers_count - a.stargazers_count
            || Date.parse(b.pushed_at) - Date.parse(a.pushed_at))
        .slice(0, SHOWN);

    if (picks.length === 0)
    {
        return;
    }

    for (const repo of picks)
    {
        list.append(card(repo));
    }

    list.hidden = false;
}

function card(repo: Repo): HTMLLIElement
{
    const item = document.createElement('li');

    const name = document.createElement('h4');
    name.textContent = repo.name;
    item.append(name);

    if (repo.description !== null)
    {
        const text = document.createElement('p');
        text.textContent = repo.description;
        item.append(text);
    }

    const link = document.createElement('a');
    link.href = repo.html_url;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = repo.full_name;
    item.append(link);

    return item;
}

async function fetchRepos(): Promise<Repo[] | null>
{
    try
    {
        const url = `https://api.github.com/users/${USER}/repos?sort=updated&per_page=30`;
        const response = await fetch(url);

        return response.ok ? (await response.json()) as Repo[] : null;
    }
    catch (err)
    {
        // offline or blocked; the section simply stays hidden
        return null;
    }
}
