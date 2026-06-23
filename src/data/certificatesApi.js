// Certificates are managed in the separate softuni-certificates repository.
export const CERTIFICATES_DATA_URL =
    "https://raw.githubusercontent.com/hristianivanov/softuni-certificates/main/certificates.json";
export const CERTIFICATES_ASSET_BASE_URL =
    "https://raw.githubusercontent.com/hristianivanov/softuni-certificates/main/";

export async function getCertificates() {
    const response = await fetch(CERTIFICATES_DATA_URL);

    if (!response.ok) {
        throw new Error("Unable to load certificates.");
    }

    const certificates = await response.json();

    if (!Array.isArray(certificates)) {
        throw new Error("Invalid certificates response.");
    }

    return certificates
        .filter((certificate) => certificate?.imageUrl)
        .sort((first, second) => first.priority - second.priority)
        .map((certificate) => ({
            ...certificate,
            imageUrl: `${CERTIFICATES_ASSET_BASE_URL}${certificate.imageUrl}`,
        }));
}
