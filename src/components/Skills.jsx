import { useEffect, useRef } from 'react';
import useInView from '../hooks/useInView';
import SectionHeader from './SectionHeader';
import './Skills.css';

const SKILLS = [
    {
        category: 'Backend',
        color: '#8b5cf6',
        items: [
            { name: 'Java / Spring Boot', level: 97 },
            { name: 'Microservices Architecture', level: 93 },
            { name: 'GraphQL APIs', level: 88 },
            { name: 'Node.js', level: 78 },
        ],
    },
    {
        category: 'Frontend',
        color: '#3b82f6',
        items: [
            { name: 'React JS', level: 90 },
            { name: 'JavaScript / ES6+', level: 92 },
            { name: 'HTML5 / CSS3', level: 88 },
            { name: 'Web Design', level: 78 },
        ],
    },
    {
        category: 'Architecture & Engineering',
        color: '#06b6d4',
        items: [
            { name: 'Software Architecture', level: 95 },
            { name: 'Business Software Solutions', level: 94 },
            { name: 'Enterprise Integration', level: 90 },
            { name: 'Technical Leadership', level: 92 },
        ],
    },
    {
        category: 'DevOps & Tools',
        color: '#10b981',
        items: [
            { name: 'Docker / Containers', level: 85 },
            { name: 'Git / GitHub', level: 95 },
            { name: 'Cloud Services', level: 80 },
            { name: 'Agile / Scrum', level: 90 },
        ],
    },
];

export default function Skills() {
    const sectionRef = useInView('skills--visible');
    const barsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
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
    }, [sectionRef]);

    let barIndex = 0;

    return (
        <section id="skills" className="section skills" ref={sectionRef}>
            <div className="container">
                <SectionHeader label="What I know" title="Technical" highlight="Skills" />

                <div className="skills__grid">
                    {SKILLS.map(({ category, color, items }) => (
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
