const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID;

export const analyticsEvents = {
    viewCv: "view_cv_click",
    liveDemo: "live_demo_click",
    sourceCode: "source_code_click",
    projectDetail: "project_detail_click",
};

export function initAnalytics() {
    if (import.meta.env.DEV) {
        console.info("[Analytics] Clarity initialization skipped in development");
        return;
    }

    if (!clarityProjectId || typeof window === "undefined") {
        return;
    }

    try {
        window.clarity =
            window.clarity ||
            function clarity(...args) {
                (window.clarity.q = window.clarity.q || []).push(args);
            };

        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.clarity.ms/tag/${clarityProjectId}`;
        document.head.appendChild(script);
    } catch {
        // Analytics must never affect the portfolio experience.
    }
}

export function trackEvent(eventName, payload = {}) {
    if (import.meta.env.DEV) {
        console.info(`[Analytics] Tracking event: ${eventName}`, payload);
        return;
    }

    if (
        typeof window === "undefined" ||
        typeof window.clarity !== "function"
    ) {
        return;
    }

    try {
        Object.entries(payload).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                window.clarity("set", key, String(value));
            }
        });

        window.clarity("event", eventName);
    } catch {
        // Tracking failures are intentionally ignored.
    }
}
