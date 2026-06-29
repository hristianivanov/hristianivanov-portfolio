import { Github, Linkedin, Mail } from "lucide-react";
import { links } from "../../data/links";
import ActionLink from "../ActionLink/ActionLink";

export default function Contact() {
    return (
        <section className="site-wrapper section" id="contact">
            <h2>Let's Work Together</h2>
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
