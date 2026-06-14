import { certificates } from "../../data/certificates";
import { links } from "../../data/links";

export default function Certificates() {
    const renderCertificates = (copy) =>
        certificates.map((certificate) => (
            <img
                key={`${copy}-${certificate}`}
                src={`/imgs/certificates/${certificate}`}
                alt={
                    copy === "primary"
                        ? certificate.replace(/\.(jpeg|jpg|png)$/i, "")
                        : ""
                }
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
