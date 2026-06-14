import About from "./components/About/About";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

export default function App() {
    return (
        <>
            <Hero />
            <main>
                <About />
                <Skills />
                <Projects />
                <Certificates />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
