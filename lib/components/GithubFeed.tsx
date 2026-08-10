import { createResource, For, Match, Switch } from 'solid-js';
import { ClientOnly } from 'solidstep/client-only';

interface GithubRepo {
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    stargazers_count: number;
    fork: boolean;
}

// Already shown elsewhere on the page (flagship/OSS sections) or not a
// project in its own right (the profile README repo, this site's own repo).
const EXCLUDED_REPOS = new Set(['HamzaKV', 'HamzaKV.github.io', 'solidstep', 'ai-sdk', 'anchor', 'monorun']);

const fetchRepos = async (): Promise<GithubRepo[]> => {
    const res = await fetch(
        'https://api.github.com/users/HamzaKV/repos?sort=updated&per_page=20',
    );
    if (!res.ok) throw new Error(`GitHub API returned ${res.status}`);
    const repos = (await res.json()) as GithubRepo[];
    return repos.filter((r) => !r.fork && !EXCLUDED_REPOS.has(r.name));
};

function FeedList() {
    const [repos] = createResource(fetchRepos);

    return (
        <Switch>
            <Match when={repos.loading}>
                <p class="empty-state">Loading recent repositories…</p>
            </Match>
            <Match when={repos.error}>
                <p class="empty-state">
                    Couldn't load live repositories right now — see the full list on{' '}
                    <a
                        href="https://github.com/HamzaKV"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    .
                </p>
            </Match>
            <Match when={repos()}>
                {(list) => (
                    <div class="project-grid">
                        <For each={list()}>
                            {(repo) => (
                                <article class="project-card">
                                    <h3 class="project-card-name">{repo.name}</h3>
                                    <p class="project-card-desc">
                                        {repo.description ?? 'No description provided.'}
                                    </p>
                                    <div class="tag-row">
                                        {repo.language ? (
                                            <span class="tag">{repo.language}</span>
                                        ) : null}
                                        {repo.stargazers_count > 0 ? (
                                            <span class="tag">
                                                &#9733; {repo.stargazers_count}
                                            </span>
                                        ) : null}
                                    </div>
                                    <a
                                        class="project-card-link"
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub &rarr;
                                    </a>
                                </article>
                            )}
                        </For>
                    </div>
                )}
            </Match>
        </Switch>
    );
}

// Fetched client-side only: no reason to put an external, rate-limited API
// call in the static SSR payload.
export default function GithubFeed() {
    return (
        <ClientOnly fallback={<p class="empty-state">Loading recent repositories…</p>}>
            {() => <FeedList />}
        </ClientOnly>
    );
}
