import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { NAV_LINKS } from '../constants/navigation';
import scrollToSection from '../utils/scrollToSection';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    scrollToSection(href);
  };

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
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
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

        {/* CTA */}
        <a
          href="#contact"
          className="btn btn-primary navbar__cta"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
        >
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button className="navbar__toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
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
          style={{ alignSelf: 'flex-start', marginTop: '8px' }}
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
