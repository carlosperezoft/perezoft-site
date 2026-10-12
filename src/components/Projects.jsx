import { useEffect, useRef } from 'react';
import { Github, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

export default function Projects() {
    const { t } = useLanguage();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) sectionRef.current?.classList.add('projects--visible'); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="projects" className="section projects" ref={sectionRef}>
            <div className="container">
                <p className="section-label">{t.projects.sectionLabel}</p>
                <h2 className="section-title">
                    {t.projects.titleStart} <span className="gradient-text">{t.projects.titleGradient}</span>
                </h2>
                <div className="section-divider" />

                <div className="projects__grid">
                    {t.projects.items.map((project, i) => (
                        <div
                            className="projects__card card"
                            key={project.title}
                            style={{ '--delay': `${i * 0.1}s` }}
                        >
                            <div
                                className="projects__card-header"
                                style={{ background: project.gradient, '--accent': project.accent }}
                            >
                                <div className="projects__card-glow" style={{ background: project.accent }} />
                                <div className="projects__card-title-area">
                                    <h3 className="projects__card-name">{project.title}</h3>
                                    <div className="projects__card-links">
                                        {project.demo !== '#' && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="projects__link" aria-label="Live demo">
                                                <Globe size={15} />
                                            </a>
                                        )}
                                        {project.github !== '#' && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__link" aria-label="GitHub">
                                                <Github size={15} />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="projects__card-body">
                                <p className="projects__card-desc">{project.description}</p>
                                <div className="projects__tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tech-badge">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
