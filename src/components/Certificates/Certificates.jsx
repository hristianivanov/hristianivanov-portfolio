import { useEffect, useState } from "react";
import { getCertificates } from "../../data/certificatesApi";
import { links } from "../../data/links";

export default function Certificates() {
    const [certificates, setCertificates] = useState([]);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        let isMounted = true;

        async function loadCertificates() {
            try {
                const loadedCertificates = await getCertificates();

                if (isMounted) {
                    setCertificates(loadedCertificates);
                    setStatus("ready");
                }
            } catch {
                if (isMounted) {
                    setStatus("error");
                }
            }
        }

        loadCertificates();

        return () => {
            isMounted = false;
        };
    }, []);

    const renderCertificates = (copy) =>
        certificates.map((certificate) => (
            <img
                key={`${copy}-${certificate.id}`}
                src={certificate.imageUrl}
                alt={
                    copy === "primary"
                        ? `${certificate.title} certificate from ${certificate.issuer}`
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
                {status === "loading" && (
                    <p className="certificate-status">Loading certificates...</p>
                )}
                {status === "error" && (
                    <p className="certificate-status">
                        Certificates could not be loaded right now.
                    </p>
                )}
            </div>
            {status === "ready" && (
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
            )}
        </section>
    );
}
