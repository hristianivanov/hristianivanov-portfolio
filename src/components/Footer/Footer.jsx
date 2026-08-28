export default function Footer() {
    return (
        <footer className="site-wrapper footer">
            <div>
                <span>&copy; {new Date().getFullYear()} Hristian Ivanov</span>
                <p className="privacy-note">
                    This site uses privacy-friendly analytics to understand
                    which portfolio sections are useful. No personal forms or
                    accounts are used.
                </p>
            </div>
            <nav aria-label="Footer navigation">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
                <a href="https://revolut.me/hristipp1j" target="_blank" rel="noreferrer">Tip jar</a>
            </nav>
        </footer>
    );
}
