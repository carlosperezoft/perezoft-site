import { useEffect, useRef } from 'react';
import { Globe, Server, Cpu, Terminal, Cloud, Headphones } from 'lucide-react';
import './Services.css';

const SERVICES = [
    {
        icon: Server,
        title: 'Enterprise Java Development',
        description:
            'Custom Java and Spring Boot applications built for performance and scalability. From REST APIs to complex enterprise backends, I architect systems that last.',
        tags: ['Java', 'Spring Boot', 'REST API'],
        gradient: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(139,92,246,0.03))',
        border: 'rgba(139, 92, 246, 0.25)',
    },
    {
        icon: Cpu,
        title: 'Microservices Architecture',
        description:
            'Design and implementation of distributed microservices systems with service discovery, API gateways, and independent deployability for large-scale platforms.',
        tags: ['Microservices', 'Docker', 'Spring Boot'],
        gradient: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.03))',
        border: 'rgba(59, 130, 246, 0.25)',
    },
    {
        icon: Globe,
        title: 'React JS Frontend',
        description:
            'Modern, responsive web interfaces built with React JS. From business dashboards to customer-facing apps — clean UI/UX backed by solid JavaScript fundamentals.',
        tags: ['React JS', 'JavaScript', 'HTML5 / CSS3'],
        gradient: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(6,182,212,0.03))',
        border: 'rgba(6, 182, 212, 0.25)',
    },
    {
        icon: Terminal,
        title: 'GraphQL API Design',
        description:
            'Flexible, efficient GraphQL APIs that give clients exactly the data they need. Ideal for complex data relationships and high-performance modern web applications.',
        tags: ['GraphQL', 'Java', 'API Design'],
        gradient: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.03))',
        border: 'rgba(16, 185, 129, 0.25)',
    },
    {
        icon: Cloud,
        title: 'Software Architecture Consulting',
        description:
            'Architecture reviews, technology selection, design patterns, and roadmap planning. I help businesses make the right technical decisions from the start.',
        tags: ['Architecture', 'Consulting', 'Enterprise'],
        gradient: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(245,158,11,0.03))',
        border: 'rgba(245, 158, 11, 0.25)',
    },
    {
        icon: Headphones,
        title: 'Technical Leadership',
        description:
            'Embedded technical leadership for your team — code reviews, mentoring, sprint planning, and aligning engineering with business objectives for lasting impact.',
        tags: ['Leadership', 'Mentoring', 'Agile / Scrum'],
        gradient: 'linear-gradient(135deg, rgba(239,68,68,0.12), rgba(239,68,68,0.03))',
        border: 'rgba(239, 68, 68, 0.2)',
    },
];

export default function Services() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) sectionRef.current?.classList.add('services--visible'); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" className="section services" ref={sectionRef}>
            <div className="container">
                <p className="section-label">What I offer</p>
                <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
                <div className="section-divider" />
                <p className="section-subtitle">
                    From enterprise Java backends to modern React frontends — specialized software solutions
                    tailored to your business needs and technology goals.
                </p>

                <div className="services__grid">
                    {SERVICES.map(({ icon: Icon, title, description, tags, gradient, border }, i) => (
                        <div
                            className="services__card"
                            key={title}
                            style={{ '--delay': `${i * 0.08}s`, background: gradient, borderColor: border }}
                        >
                            <div className="services__icon-wrap" style={{ borderColor: border }}>
                                <Icon size={22} />
                            </div>
                            <h3 className="services__title">{title}</h3>
                            <p className="services__desc">{description}</p>
                            <div className="services__tags">
                                {tags.map((t) => <span key={t} className="tech-badge">{t}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
