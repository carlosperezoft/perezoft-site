import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import profileImg from '../assets/profile.png';
import './Hero.css';

const TECH_STACK = ['Java', 'Spring Boot', 'React JS', 'Microservices', 'GraphQL', 'Docker'];

export default function Hero() {
    const heroRef = useRef(null);
    const [imgError, setImgError] = useState(false);

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
                        <span>Available for new projects</span>
                    </div>

                    <h1 className="hero__name">
                        Hi, I'm <span className="gradient-text">Carlos Perez</span><br />
                        <span className="gradient-text" style={{ fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 800 }}>Moncada</span>
                    </h1>

                    <div className="hero__title">
                        <span className="hero__title-prefix">{'<'}</span>
                        <span className="gradient-text-purple hero__title-role">Technical Leader & Software Architect</span>
                        <span className="hero__title-prefix">{' />'}</span>
                    </div>

                    <p className="hero__description">
                        Systems Engineer & <strong>Master in Engineering</strong> from Universidad de Antioquia.
                        Specialist in business software solutions, software architecture, and enterprise integrations.
                        Building robust, scalable systems that power real businesses.
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
                            Hire Me
                        </button>
                        <button
                            className="btn btn-outline"
                            onClick={() => scrollToSection('#projects')}
                        >
                            <ExternalLink size={16} />
                            View Projects
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
                        <a href="mailto:contact@perezoft.com" className="hero__social-link" aria-label="Email">
                            <Mail size={20} />
                        </a>
                        <div className="hero__social-divider" />
                        <span className="hero__social-label">Medellín, Colombia</span>
                    </div>
                </div>

                {/* Image Side */}
                <div className="hero__image-wrapper">
                    <div className="hero__image-ring" />
                    <div className="hero__image-ring hero__image-ring--2" />
                    <div className="hero__image-container animate-float">
                        {imgError ? (
                            <div
                                className="hero__image hero__image--fallback"
                                role="img"
                                aria-label="Carlos Alberto Perez Moncada - PEREZOFT"
                            />
                        ) : (
                            <img
                                src={profileImg}
                                alt="Carlos Alberto Perez Moncada - PEREZOFT"
                                className="hero__image"
                                onError={() => setImgError(true)}
                            />
                        )}
                        <div className="hero__image-overlay" />
                    </div>

                    {/* Floating cards */}
                    <div className="hero__float-card hero__float-card--1">
                        <span className="hero__float-card-num">10+</span>
                        <span className="hero__float-card-label">Years Exp.</span>
                    </div>
                    <div className="hero__float-card hero__float-card--2">
                        <span className="hero__float-card-num">MSc</span>
                        <span className="hero__float-card-label">Engineering</span>
                    </div>
                </div>
            </div>

            {/* Scroll hint */}
            <button
                className="hero__scroll-hint"
                onClick={() => scrollToSection('#about')}
                aria-label="Scroll down"
            >
                <ArrowDown size={20} />
            </button>
        </section>
    );
}
