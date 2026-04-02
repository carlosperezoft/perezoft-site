import { useEffect, useRef } from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';
import './Projects.css';

const PROJECTS = [
    {
        title: 'Spring Boot + React CRUD',
        description:
            'Full-stack application demonstrating seamless integration between a Spring Boot REST API backend and a React JS frontend. Implements full CRUD operations with clean architecture patterns.',
        tags: ['Spring Boot', 'React JS', 'Java', 'REST API', 'MySQL'],
        gradient: 'linear-gradient(135deg, #1e3a5f, #0f2a44)',
        accent: '#3b82f6',
        demo: 'https://github.com/carlosperezoft/spring-boot-react-crud',
        github: 'https://github.com/carlosperezoft/spring-boot-react-crud',
    },
    {
        title: 'Microservices with Spring Boot',
        description:
            'Advanced microservices architecture implementation using Spring Boot. Covers service discovery, API gateway, inter-service communication, and independent deployability for enterprise-grade systems.',
        tags: ['Spring Boot', 'Microservices', 'Java', 'API Gateway', 'Docker'],
        gradient: 'linear-gradient(135deg, #2d1b69, #1a103f)',
        accent: '#8b5cf6',
        demo: 'https://github.com/carlosperezoft/micro-servicios-spring-boot',
        github: 'https://github.com/carlosperezoft/micro-servicios-spring-boot',
    },
    {
        title: 'GraphQL Java API',
        description:
            'Modern API layer built with GraphQL and Java. Provides flexible querying, type-safe schema design, and efficient data fetching — demonstrating the power of GraphQL over traditional REST for complex data models.',
        tags: ['GraphQL', 'Java', 'Spring Boot', 'API Design'],
        gradient: 'linear-gradient(135deg, #064e3b, #03352a)',
        accent: '#10b981',
        demo: 'https://github.com/carlosperezoft/graphql-java',
        github: 'https://github.com/carlosperezoft/graphql-java',
    },
    {
        title: 'Business Software Solutions',
        description:
            'Enterprise-level business software developed under PEREZOFT brand. Full lifecycle: requirements analysis, architecture design, development, testing, and deployment for Colombian companies across multiple industries.',
        tags: ['Java', 'Spring Boot', 'React JS', 'Enterprise', 'Consulting'],
        gradient: 'linear-gradient(135deg, #1e3a5f, #0e2639)',
        accent: '#06b6d4',
        demo: '#',
        github: '#',
    },
];

export default function Projects() {
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
                <p className="section-label">What I've built</p>
                <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                <div className="section-divider" />

                <div className="projects__grid">
                    {PROJECTS.map((project, i) => (
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
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__link" aria-label="GitHub">
                                            <Github size={15} />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="projects__card-body">
                                <p className="projects__card-desc">{project.description}</p>
                                <div className="projects__tags">
                                    {project.tags.map((t) => (
                                        <span key={t} className="tech-badge">{t}</span>
                                    ))}
                                </div>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__view-btn">
                                    View Project <ExternalLink size={13} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects__github-cta">
                    <a
                        href="https://github.com/carlosperezoft"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        <Github size={16} />
                        See more on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
