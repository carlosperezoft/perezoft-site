import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

export default function Experience() {
    const { t } = useLanguage();
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
                <p className="section-label">{t.experience.sectionLabel}</p>
                <h2 className="section-title">
                    {t.experience.titleStart} <span className="gradient-text">{t.experience.titleGradient}</span>
                </h2>
                <div className="section-divider" />

                <div className="exp__timeline">
                    {t.experience.jobs.map((job, i) => (
                        <div className="exp__item" key={i} style={{ '--delay': `${i * 0.15}s` }}>
                            <div className="exp__dot">
                                <div className={`exp__dot-inner ${job.current ? 'exp__dot-inner--active' : ''}`} />
                            </div>

                            <div className="exp__card card">
                                {job.current && <div className="exp__current-badge">{t.experience.currentBadge}</div>}

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
                                    {job.tags.map((tag) => (
                                        <span key={tag} className="tech-badge">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className="exp__education">
                    <h3 className="exp__edu-title gradient-text">{t.experience.academicTitle}</h3>
                    <div className="exp__edu-grid">
                        {t.experience.degrees.map((edu, i) => (
                            <div className="exp__edu-card card" key={i}>
                                <div className="exp__edu-degree">{edu.degree}</div>
                                <div className="exp__edu-school">{edu.school}</div>
                                <div className="exp__edu-year">{edu.year}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
