import {
    Download,
    ExternalLink,
    Github,
    Linkedin,
    Mail,
} from "lucide-react";
import { certificates, links, projects, skillGroups } from "./data";

function ActionLink({ children, className = "", ...props }) {
    return (
        <a className={`action-link ${className}`.trim()} {...props}>
            {children}
        </a>
    );
}

function Header() {
    return (
        <header className="site-header site-wrapper">
            <p className="eyebrow">Portfolio</p>
            <h1>Hristian Ivanov</h1>
            <p className="subtitle">Junior .NET Developer</p>
            <p className="intro">
                I build tested ASP.NET Core applications with C#, Entity
                Framework Core, and SQL Server. My flagship project, DevHunter,
                includes role-based workflows, security controls, GitHub
                Actions CI, and 177 automated tests.
            </p>
            <div className="actions">
                <ActionLink href="#projects" className="primary">
                    View projects <ExternalLink size={17} />
                </ActionLink>
                <ActionLink href={links.cv} target="_blank" rel="noreferrer">
                    Download CV <Download size={17} />
                </ActionLink>
                <ActionLink href={links.github} target="_blank" rel="noreferrer">
                    GitHub <Github size={17} />
                </ActionLink>
            </div>
        </header>
    );
}

function About() {
    return (
        <section className="site-wrapper section" id="about">
            <h2>About</h2>
            <p>
                I am a junior .NET developer based in Bulgaria, seeking my first
                professional software-development role. I enjoy turning
                requirements into maintainable features and strengthening
                projects through testing, authorization, CI, and clear
                documentation.
            </p>
            <p>
                I am especially interested in backend development, scalable
                systems, cloud-native applications, and learning through code
                review.
            </p>
        </section>
    );
}

function Skills() {
    return (
        <section className="site-wrapper section" id="skills">
            <h2>Technical Skills</h2>
            <div className="skill-grid">
                {skillGroups.map((group) => (
                    <article className="skill-card" key={group.title}>
                        <h3>{group.title}</h3>
                        <ul>
                            {group.skills.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}

function ProjectCard({ project }) {
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
                <ul className="tag-list" aria-label={`${project.title} technologies`}>
                    {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
                <div className="project-actions">
                    {project.demo && (
                        <ActionLink
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="primary"
                        >
                            Live showcase <ExternalLink size={16} />
                        </ActionLink>
                    )}
                    <ActionLink
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Source code <Github size={16} />
                    </ActionLink>
                </div>
            </div>
        </article>
    );
}

function Projects() {
    return (
        <section className="site-wrapper section" id="projects">
            <h2>Featured Projects</h2>
            <p>
                Selected .NET projects demonstrating application design,
                testing, security, and delivery.
            </p>
            <div className="project-list">
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.title} />
                ))}
            </div>
        </section>
    );
}

function Certificates() {
    const renderCertificates = (copy) =>
        certificates.map((certificate) => (
            <img
                key={`${copy}-${certificate}`}
                src={`/imgs/certificates/${certificate}`}
                alt={copy === "primary"
                    ? certificate.replace(/\.(jpeg|jpg|png)$/i, "")
                    : ""}
                aria-hidden={copy === "duplicate" ? "true" : undefined}
                loading="lazy"
                width="320"
                height="180"
            />
        ));

    return (
        <section className="section" id="certificates">
            <div className="site-wrapper">
                <h2>Certificates</h2>
                <p>
                    Selected coursework completed at{" "}
                    <a href={links.softUni} target="_blank" rel="noreferrer">
                        SoftUni
                    </a>
                    .
                </p>
            </div>
            <div className="certificate-carousel" aria-label="Certificates">
                <div className="certificate-track">
                    <div className="certificate-group">
                        {renderCertificates("primary")}
                    </div>
                    <div className="certificate-group" aria-hidden="true">
                        {renderCertificates("duplicate")}
                    </div>
                </div>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <section className="site-wrapper section" id="contact">
            <h2>Let&apos;s Work Together</h2>
            <p>
                I am seeking a Junior .NET Developer role where I can contribute
                to production software and grow through collaboration and code
                review.
            </p>
            <div className="actions">
                <ActionLink href={links.email} className="primary">
                    Email me <Mail size={17} />
                </ActionLink>
                <ActionLink
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn <Linkedin size={17} />
                </ActionLink>
                <ActionLink
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub <Github size={17} />
                </ActionLink>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="site-wrapper footer">
            <span>&copy; {new Date().getFullYear()} Hristian Ivanov</span>
            <nav aria-label="Footer navigation">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </footer>
    );
}

export default function App() {
    return (
        <>
            <Header />
            <main>
                <About />
                <Skills />
                <Projects />
                <Certificates />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
