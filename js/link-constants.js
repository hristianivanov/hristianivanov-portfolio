const LINK_URLS = {
    github: 'https://github.com/hristianivanov',
    linkedin: 'https://www.linkedin.com/in/hristian-ivanov',
    instagram: 'https://instagram.com/h_ivanow',
    cvDownload: './cv/hristian_ivanov_cv.pdf',
    softUni: 'https://softuni.bg/',
    index: 'index.html',
    contact: 'contact.html',
    subscribe: '#',
    tipJar: '#',
    itJobFinder: 'https://github.com/hristianivanov/ITJob-Finder-ASP.NET-MVC',
    softUniCourses: 'https://github.com/hristianivanov/SoftUni-Courses',
};

const LINK_ATTRIBUTE = 'data-link-key';

function applyLinkConstants() {
    document.querySelectorAll(`a[${LINK_ATTRIBUTE}]`).forEach((link) => {
        const key = link.dataset.linkKey;

        if (!key) {
            return;
        }

        const url = LINK_URLS[key];

        if (typeof url === 'string') {
            link.href = url;
        }
    });
}

document.addEventListener('DOMContentLoaded', applyLinkConstants);
