import { Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
    const { t } = useLanguage();

    const scrollTo = (href) => {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    const footerLinks = [
        { label: t.nav.about, href: '#about' },
        { label: t.nav.experience, href: '#experience' },
        { label: t.nav.skills, href: '#skills' },
        { label: t.nav.projects, href: '#projects' },
        { label: t.nav.services, href: '#services' },
        { label: t.nav.contact, href: '#contact' },
    ];

    return (
        <footer className="footer">
            <div className="footer__glow" />
            <div className="container footer__inner">
                <div className="footer__brand">
                    <div className="footer__logo">
                        <div className="footer__logo-icon">
                            <Code2 size={16} />
                        </div>
                        <span className="footer__logo-text">PEREZOFT</span>
                    </div>
                    <p className="footer__tagline">
                        {t.footer.tagline}
                    </p>
                    <div className="footer__socials">
                        <a href="https://github.com/carlosperezoft" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="GitHub">
                            <Github size={16} />
                        </a>
                        <a href="https://www.linkedin.com/in/carlos-alberto-perez-moncada/" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="LinkedIn">
                            <Linkedin size={16} />
                        </a>
                        <a href="mailto:carlos.perezoft@gmail.com" className="footer__social" aria-label="Email">
                            <Mail size={16} />
                        </a>
                    </div>
                </div>

                <div className="footer__nav">
                    <h4 className="footer__nav-title">{t.footer.navTitle}</h4>
                    <ul className="footer__nav-links">
                        {footerLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="footer__nav-link"
                                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer__contact">
                    <h4 className="footer__nav-title">{t.footer.contactTitle}</h4>
                    <p className="footer__contact-email">carlos.perezoft@gmail.com</p>
                    <p className="footer__contact-note" style={{ whiteSpace: 'pre-line' }}>
                        {t.footer.contactNote}
                    </p>
                    <a
                        href="#contact"
                        className="btn btn-primary footer__cta"
                        onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
                    >
                        {t.footer.cta}
                    </a>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <p className="footer__copy">
                        © {new Date().getFullYear()} PEREZOFT. {t.footer.copyright}
                    </p>
                    <p className="footer__made">
                        {t.footer.madeWith} <Heart size={12} className="footer__heart" /> {t.footer.by}
                    </p>
                </div>
            </div>
        </footer>
    );
}
