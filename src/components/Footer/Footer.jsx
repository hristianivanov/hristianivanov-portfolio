export default function Footer() {
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
