import { ExternalLink, Github, Star } from "lucide-react";
import useGithubMetadata from "../../hooks/useGithubMetadata";
import { analyticsEvents, trackEvent } from "../../utils/analytics";
import ActionLink from "../ActionLink/ActionLink";

export default function ProjectCard({ project }) {
    const githubMetadata = useGithubMetadata(
        project.githubOwner,
        project.githubRepo,
    );

    return (
        <article className="project-card">
            {project.image ? (
                <img
                    src={project.image}
                    alt={project.imageAlt}
                    width="600"
                    height="338"
                    loading="lazy"
                />
            ) : (
                <div
                    className="project-visual wildrift-visual"
                    role="img"
                    aria-label={project.imageAlt}
                >
                    <span>{project.visualLabel}</span>
                </div>
            )}
            <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="highlights">
                    {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                    ))}
                </ul>
                <ul
                    className="tag-list"
                    aria-label={`${project.title} technologies`}
                >
                    {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
                {githubMetadata && (
                    <div
                        className="project-metadata"
                        aria-label={`${project.title} GitHub metadata`}
                    >
                        {githubMetadata.stars !== null && (
                            <span>
                                <Star size={13} aria-hidden="true" />
                                {githubMetadata.stars}
                            </span>
                        )}
                        {githubMetadata.language && (
                            <span>{githubMetadata.language}</span>
                        )}
                        {githubMetadata.updated && (
                            <span>Updated {githubMetadata.updated}</span>
                        )}
                    </div>
                )}
                <div className="project-actions">
                    {project.demo && (
                        <ActionLink
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="primary"
                            onClick={() =>
                                trackEvent(analyticsEvents.liveDemo, {
                                    projectTitle: project.title,
                                    projectSlug: project.slug,
                                    url: project.demo,
                                })
                            }
                        >
                            Live showcase <ExternalLink size={16} />
                        </ActionLink>
                    )}
                    <ActionLink
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() =>
                            trackEvent(analyticsEvents.sourceCode, {
                                projectTitle: project.title,
                                projectSlug: project.slug,
                                url: project.source,
                            })
                        }
                    >
                        Source code <Github size={16} />
                    </ActionLink>
                </div>
            </div>
        </article>
    );
}
