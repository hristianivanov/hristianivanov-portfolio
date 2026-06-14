import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section className="site-wrapper section" id="projects">
            <h2>Featured Projects</h2>
            <p>Personal projects built with .NET and modern web technologies.</p>
            <div className="project-list">
                {projects.map((project) => (
                    <ProjectCard project={project} key={project.title} />
                ))}
            </div>
        </section>
    );
}
