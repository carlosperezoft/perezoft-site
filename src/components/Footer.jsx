import { Code2, Heart } from 'lucide-react';
import { NAV_LINKS } from '../constants/navigation';
import { SOCIAL_LINKS } from '../constants/socials';
import scrollToSection from '../utils/scrollToSection';
import './Footer.css';

export default function Footer() {
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
                        Crafting digital products that make a difference.
                    </p>
                    <div className="footer__socials">
                        {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                            <a href={href} target="_blank" rel="noopener noreferrer" className="footer__social" aria-label={label} key={label}>
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer__nav">
                    <h4 className="footer__nav-title">Navigation</h4>
                    <ul className="footer__nav-links">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    className="footer__nav-link"
                                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer__contact">
                    <h4 className="footer__nav-title">Contact</h4>
                    <p className="footer__contact-email">contact@perezoft.com</p>
                    <p className="footer__contact-note">
                        Available for freelance<br />& consulting work.
                    </p>
                    <a
                        href="#contact"
                        className="btn btn-primary footer__cta"
                        onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}
                    >
                        Get in Touch
                    </a>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container footer__bottom-inner">
                    <p className="footer__copy">
                        © {new Date().getFullYear()} PEREZOFT. All rights reserved.
                    </p>
                    <p className="footer__made">
                        Made with <Heart size={12} className="footer__heart" /> by Carlos Perez
                    </p>
                </div>
            </div>
        </footer>
    );
}
