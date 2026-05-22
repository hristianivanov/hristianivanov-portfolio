const DEFAULT_PER_PAGE = 3;
const SPLIDE_SELECTOR = '.splide';
const SPLIDE_TYPE = 'loop';
const SPLIDE_DRAG = 'free';
const SPLIDE_FOCUS = 'center';
const SPLIDE_SNAP = true;
const AUTO_SCROLL_SPEED = 1;

const perPageRestrictions = [
    { maxWidth: 1200, perPage: 2 },
    { maxWidth: 650, perPage: 1 },
];

let perPage = DEFAULT_PER_PAGE;

for (const { maxWidth, perPage: restrictedPerPage } of perPageRestrictions) {
    if (window.innerWidth <= maxWidth) {
        perPage = restrictedPerPage;
        break;
    }
}

const splide = new Splide(SPLIDE_SELECTOR, {
    type: SPLIDE_TYPE,
    drag: SPLIDE_DRAG,
    focus: SPLIDE_FOCUS,
    snap: SPLIDE_SNAP,
    perPage,
    autoScroll: {
        speed: AUTO_SCROLL_SPEED,
    },
});

splide.mount(window.splide.Extensions);