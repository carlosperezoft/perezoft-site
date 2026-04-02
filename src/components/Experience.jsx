import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const EXPERIENCE = [
    {
        role: 'Technical Leader',
        company: 'LPG Group',
        period: '2022 – Present',
        location: 'Medellín, Colombia · Remote',
        description:
            'Leading engineering teams to design, develop, and deploy complex business software solutions. Responsible for software architecture decisions, code reviews, technical roadmap, and aligning technology strategy with business goals.',
        tags: ['Java', 'Spring Boot', 'Microservices', 'Software Architecture', 'Technical Leadership'],
        current: true,
    },
    {
        role: 'Software Developer & Founder',
        company: 'PEREZOFT / Efecto Byte S.A.S.',
        period: '2018 – Present',
        location: 'Medellín, Colombia',
        description:
            'Founded PEREZOFT to provide specialized business software consulting and development. Delivering full-stack solutions including enterprise Java backends, React frontends, REST/GraphQL APIs, and cloud-deployed microservices for clients across various industries.',
        tags: ['Java', 'Spring Boot', 'React JS', 'GraphQL', 'Docker', 'Consulting'],
        current: true,
    },
    {
        role: 'Software Engineer',
        company: 'Previous Roles (11+ positions)',
        period: '~2012 – 2022',
        location: 'Antioquia, Colombia',
        description:
            'Over a decade of progressive software engineering experience across multiple companies and roles in the Colombian tech ecosystem. Developed enterprise applications, business integrations, and custom software solutions using Java, Spring, and web technologies.',
        tags: ['Java', 'Enterprise Software', 'Business Software Solutions', 'Web Development'],
        current: false,
    },
];

export default function Experience() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) sectionRef.current?.classList.add('exp--visible'); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="experience" className="section experience" ref={sectionRef}>
            <div className="container">
                <p className="section-label">Career Path</p>
                <h2 className="section-title">Professional <span className="gradient-text">Experience</span></h2>
                <div className="section-divider" />

                <div className="exp__timeline">
                    {EXPERIENCE.map((job, i) => (
                        <div className="exp__item" key={i} style={{ '--delay': `${i * 0.15}s` }}>
                            <div className="exp__dot">
                                <div className={`exp__dot-inner ${job.current ? 'exp__dot-inner--active' : ''}`} />
                            </div>

                            <div className="exp__card card">
                                {job.current && <div className="exp__current-badge">Current</div>}

                                <div className="exp__header">
                                    <div>
                                        <h3 className="exp__role">{job.role}</h3>
                                        <div className="exp__company">
                                            <Briefcase size={13} />
                                            {job.company}
                                        </div>
                                    </div>
                                    <div className="exp__meta">
                                        <span className="exp__meta-item">
                                            <Calendar size={13} />
                                            {job.period}
                                        </span>
                                        <span className="exp__meta-item">
                                            <MapPin size={13} />
                                            {job.location}
                                        </span>
                                    </div>
                                </div>

                                <p className="exp__desc">{job.description}</p>

                                <div className="exp__tags">
                                    {job.tags.map((t) => (
                                        <span key={t} className="tech-badge">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className="exp__education">
                    <h3 className="exp__edu-title gradient-text">Academic Background</h3>
                    <div className="exp__edu-grid">
                        <div className="exp__edu-card card">
                            <div className="exp__edu-degree">Master in Engineering (Informatics)</div>
                            <div className="exp__edu-school">Universidad de Antioquia</div>
                            <div className="exp__edu-year">Postgraduate</div>
                        </div>
                        <div className="exp__edu-card card">
                            <div className="exp__edu-degree">Specialist in Software Development</div>
                            <div className="exp__edu-school">Universidad EAFIT</div>
                            <div className="exp__edu-year">Specialization</div>
                        </div>
                        <div className="exp__edu-card card">
                            <div className="exp__edu-degree">Systems Engineer</div>
                            <div className="exp__edu-school">Universidad de Antioquia</div>
                            <div className="exp__edu-year">Undergraduate</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
