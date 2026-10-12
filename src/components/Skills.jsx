import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

export default function Skills() {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const barsRef = useRef([]);

    const skillsData = [
        {
            category: t.skills.categories.backend,
            color: '#8b5cf6',
            items: [
                { name: 'Java / Spring Boot', level: 97 },
                { name: 'Microservices Architecture', level: 93 },
                { name: 'GraphQL APIs', level: 88 },
                { name: 'Node.js', level: 78 },
            ],
        },
        {
            category: t.skills.categories.frontend,
            color: '#3b82f6',
            items: [
                { name: 'React JS', level: 90 },
                { name: 'JavaScript / ES6+', level: 92 },
                { name: 'HTML5 / CSS3', level: 88 },
                { name: 'Web Design', level: 78 },
            ],
        },
        {
            category: t.skills.categories.architecture,
            color: '#06b6d4',
            items: [
                { name: 'Software Architecture', level: 95 },
                { name: 'Business Software Solutions', level: 94 },
                { name: 'Enterprise Integration', level: 90 },
                { name: 'Technical Leadership', level: 92 },
            ],
        },
        {
            category: t.skills.categories.devops,
            color: '#10b981',
            items: [
                { name: 'Docker / Containers', level: 85 },
                { name: 'Git / GitHub', level: 95 },
                { name: 'Cloud Services', level: 80 },
                { name: 'Agile / Scrum', level: 90 },
            ],
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current?.classList.add('skills--visible');
                    barsRef.current.forEach((bar, i) => {
                        setTimeout(() => {
                            if (bar) bar.style.width = bar.dataset.width;
                        }, i * 60);
                    });
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    let barIndex = 0;

    return (
        <section id="skills" className="section skills" ref={sectionRef}>
            <div className="container">
                <p className="section-label">{t.skills.sectionLabel}</p>
                <h2 className="section-title">
                    {t.skills.titleStart} <span className="gradient-text">{t.skills.titleGradient}</span>
                </h2>
                <div className="section-divider" />

                <div className="skills__grid">
                    {skillsData.map(({ category, color, items }) => (
                        <div className="skills__group card" key={category}>
                            <h3 className="skills__category" style={{ color }}>{category}</h3>
                            <div className="skills__bars">
                                {items.map(({ name, level }) => {
                                    const idx = barIndex++;
                                    return (
                                        <div className="skills__bar-item" key={name}>
                                            <div className="skills__bar-header">
                                                <span className="skills__bar-name">{name}</span>
                                                <span className="skills__bar-pct">{level}%</span>
                                            </div>
                                            <div className="skills__bar-track">
                                                <div
                                                    className="skills__bar-fill"
                                                    style={{ '--bar-color': color, width: '0%' }}
                                                    data-width={`${level}%`}
                                                    ref={(el) => { barsRef.current[idx] = el; }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
