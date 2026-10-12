import { useState, useEffect } from 'react';
import { Menu, X, Code2, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

export default function Navbar() {
    const { lang, setLang, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    const navLinks = [
        { label: t.nav.about, href: '#about' },
        { label: t.nav.experience, href: '#experience' },
        { label: t.nav.skills, href: '#skills' },
        { label: t.nav.projects, href: '#projects' },
        { label: t.nav.services, href: '#services' },
        { label: t.nav.contact, href: '#contact' },
    ];

    const renderLangSwitch = (isMobile = false) => (
        <div className={`navbar__lang-switch ${isMobile ? 'navbar__lang-switch--mobile' : ''}`}>
            <Globe size={14} className="navbar__lang-icon" />
            <button
                type="button"
                className={`navbar__lang-btn ${lang === 'en' ? 'navbar__lang-btn--active' : ''}`}
                onClick={() => setLang('en')}
                aria-label="Switch language to English"
            >
                EN
            </button>
            <span className="navbar__lang-divider">|</span>
            <button
                type="button"
                className={`navbar__lang-btn ${lang === 'es' ? 'navbar__lang-btn--active' : ''}`}
                onClick={() => setLang('es')}
                aria-label="Cambiar idioma a Español"
            >
                ES
            </button>
        </div>
    );

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="container navbar__inner">
                {/* Logo */}
                <a className="navbar__logo" href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}>
                    <div className="navbar__logo-icon">
                        <Code2 size={18} />
                    </div>
                    <span className="navbar__logo-text">PEREZOFT</span>
                </a>

                {/* Desktop Links */}
                <ul className="navbar__links">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="navbar__link"
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Language Switcher Desktop */}
                {renderLangSwitch(false)}

                {/* CTA Desktop */}
                <a
                    href="#contact"
                    className="btn btn-primary navbar__cta"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                >
                    {t.nav.hireMe}
                </a>

                {/* Mobile Toggle */}
                <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    {menuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
                <div className="navbar__mobile-header">
                    {renderLangSwitch(true)}
                </div>
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="navbar__mobile-link"
                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="#contact"
                    className="btn btn-primary"
                    style={{ alignSelf: 'flex-start', marginTop: '12px' }}
                    onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                >
                    {t.nav.hireMe}
                </a>
            </div>
        </nav>
    );
}
