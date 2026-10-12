import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { BOOKING_SCHEDULE_URL } from './utils/calendar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
    useEffect(() => {
        let attempts = 0;
        const interval = setInterval(() => {
            attempts++;
            if (window.calendar && window.calendar.schedulingButton) {
                const container = document.getElementById('google-calendar-anchor');
                if (container && !document.querySelector('.google-calendar-hidden-trigger')) {
                    const dummy = document.createElement('div');
                    container.appendChild(dummy);
                    try {
                        window.calendar.schedulingButton.load({
                            url: BOOKING_SCHEDULE_URL,
                            color: '#7CB342',
                            label: 'Book an appointment',
                            target: dummy,
                        });
                        const inserted = dummy.nextElementSibling;
                        if (inserted) {
                            inserted.classList.add('google-calendar-hidden-trigger');
                            inserted.style.display = 'none';
                        }
                    } catch {
                        // ignore if blocked or failed
                    }
                }
                clearInterval(interval);
            } else if (attempts > 30) {
                clearInterval(interval);
            }
        }, 250);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div id="google-calendar-anchor" style={{ display: 'none' }} aria-hidden="true" />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Services />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

function App() {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
}

export default App;
