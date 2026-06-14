import { skillGroups } from "../../data/skills";

export default function Skills() {
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
