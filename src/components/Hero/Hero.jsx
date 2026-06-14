import { ExternalLink, FileText, Github } from "lucide-react";
import { links } from "../../data/links";
import ActionLink from "../ActionLink/ActionLink";

export default function Hero() {
    return (
        <header className="site-header site-wrapper">
            <p className="eyebrow">Portfolio</p>
            <h1>Hristian Ivanov</h1>
            <p className="subtitle">Junior Software Developer</p>
            <p className="intro">
                I build web applications with ASP.NET Core, C#, Entity
                Framework Core, SQL Server, React, and TypeScript. My focus is
                on building maintainable applications, solving real problems
                through projects, and continuing to grow as a full-stack
                developer.
            </p>
            <div className="actions">
                <ActionLink href="#projects" className="primary">
                    View projects <ExternalLink size={17} />
                </ActionLink>
                <ActionLink href={links.cv} target="_blank" rel="noreferrer">
                    View CV <FileText size={17} />
                </ActionLink>
                <ActionLink href={links.github} target="_blank" rel="noreferrer">
                    GitHub <Github size={17} />
                </ActionLink>
            </div>
        </header>
    );
}
