import { useEffect, useState } from "react";

const metadataCache = new Map();

function formatUpdatedDate(updatedAt) {
    const date = new Date(updatedAt);

    if (Number.isNaN(date.getTime())) {
        return null;
    }

    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        year: "numeric",
    }).format(date);
}

async function fetchGithubMetadata(owner, repo) {
    const cacheKey = `${owner}/${repo}`;

    if (!metadataCache.has(cacheKey)) {
        const request = fetch(`https://api.github.com/repos/${owner}/${repo}`, {
            headers: {
                Accept: "application/vnd.github+json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    return null;
                }

                return response.json();
            })
            .then((repository) => {
                if (!repository) {
                    return null;
                }

                const stars = Number.isFinite(repository.stargazers_count)
                    ? repository.stargazers_count
                    : null;
                const language =
                    typeof repository.language === "string"
                        ? repository.language
                        : null;
                const updated = formatUpdatedDate(repository.updated_at);

                if (stars === null && !language && !updated) {
                    return null;
                }

                return {
                    stars,
                    language,
                    updated,
                };
            })
            .catch(() => null);

        metadataCache.set(cacheKey, request);
    }

    return metadataCache.get(cacheKey);
}

export default function useGithubMetadata(owner, repo) {
    const [metadata, setMetadata] = useState(null);

    useEffect(() => {
        let isCurrent = true;

        if (!owner || !repo) {
            setMetadata(null);
            return () => {
                isCurrent = false;
            };
        }

        fetchGithubMetadata(owner, repo).then((result) => {
            if (isCurrent) {
                setMetadata(result);
            }
        });

        return () => {
            isCurrent = false;
        };
    }, [owner, repo]);

    return metadata;
}
