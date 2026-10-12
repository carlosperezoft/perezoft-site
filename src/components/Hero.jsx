import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import profileImg from '../assets/profile.png';
import BookingButton from './BookingButton';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const TECH_STACK = ['Java', 'Spring Boot', 'React JS', 'Microservices', 'GraphQL', 'Docker'];

export default function Hero() {
    const { t } = useLanguage();
    const heroRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    heroRef.current?.classList.add('hero--visible');
                }
            },
            { threshold: 0.1 }
        );
        if (heroRef.current) observer.observe(heroRef.current);
        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="hero" ref={heroRef}>
            {/* Animated background orbs */}
            <div className="hero__orb hero__orb--1" />
            <div className="hero__orb hero__orb--2" />
            <div className="hero__orb hero__orb--3" />
            <div className="hero__grid-bg" />

            <div className="container hero__inner">
                {/* Text Side */}
                <div className="hero__content">
                    <div className="hero__eyebrow">
                        <span className="hero__status-dot" />
                        <span>{t.hero.available}</span>
                    </div>

                    <h1 className="hero__name">
                        {t.hero.greeting} <span className="gradient-text">Carlos Perez</span><br />
                        <span className="gradient-text" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 800 }}>Moncada</span>
                    </h1>

                    <div className="hero__title">
                        <span className="hero__title-prefix">{'<'}</span>
                        <span className="gradient-text-purple hero__title-role">{t.hero.role}</span>
                        <span className="hero__title-prefix">{' />'}</span>
                    </div>

                    <p className="hero__description">
                        {t.hero.description}
                    </p>

                    {/* Tech badges */}
                    <div className="hero__badges">
                        {TECH_STACK.map((tech) => (
                            <span key={tech} className="tech-badge">{tech}</span>
                        ))}
                    </div>

                    {/* CTA buttons */}
                    <div className="hero__actions">
                        <button
                            className="btn btn-primary"
                            onClick={() => scrollToSection('#contact')}
                        >
                            <Mail size={16} />
                            {t.hero.hireMe}
                        </button>
                        <BookingButton className="btn btn-outline">
                            {t.hero.bookCall}
                        </BookingButton>
                        <button
                            className="btn btn-outline"
                            onClick={() => scrollToSection('#projects')}
                        >
                            <ExternalLink size={16} />
                            {t.hero.viewProjects}
                        </button>
                    </div>

                    {/* Social links */}
                    <div className="hero__socials">
                        <a href="https://github.com/carlosperezoft" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/carlos-alberto-perez-moncada/" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:carlos.perezoft@gmail.com" className="hero__social-link" aria-label="Email">
                            <Mail size={20} />
                        </a>
                        <div className="hero__social-divider" />
                        <span className="hero__social-label">{t.hero.location}</span>
                    </div>
                </div>

                {/* Image Side */}
                <div className="hero__image-wrapper">
                    <div className="hero__image-ring" />
                    <div className="hero__image-ring hero__image-ring--2" />
                    <div className="hero__image-container animate-float">
                        <img src={profileImg} alt="Carlos Alberto Perez Moncada - PEREZOFT" className="hero__image" />
                        <div className="hero__image-overlay" />
                    </div>

                    {/* Floating badge */}
                    <div className="hero__float-badge">
                        <span className="hero__float-badge-icon">⚡</span>
                        <div>
                            <div className="hero__float-badge-title">10+ Years</div>
                            <div className="hero__float-badge-sub">Enterprise Experience</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero__scroll-indicator" onClick={() => scrollToSection('#about')} style={{ cursor: 'pointer' }}>
                <span className="hero__scroll-text">Scroll down</span>
                <ArrowDown size={14} className="hero__scroll-arrow" />
            </div>
        </section>
    );
}
