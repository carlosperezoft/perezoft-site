import { useEffect, useRef } from 'react';
import { Globe, Server, Cpu, Terminal, Cloud, Headphones } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Services.css';

const SERVICE_ICONS = [Server, Cpu, Globe, Terminal, Cloud, Headphones];

export default function Services() {
    const { t } = useLanguage();
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
                <p className="section-label">{t.services.sectionLabel}</p>
                <h2 className="section-title">
                    {t.services.titleStart} <span className="gradient-text">{t.services.titleGradient}</span>
                </h2>
                <div className="section-divider" />
                <p className="section-subtitle">
                    {t.services.subtitle}
                </p>

                <div className="services__grid">
                    {t.services.items.map(({ title, description, tags, gradient, border }, i) => {
                        const Icon = SERVICE_ICONS[i] || Server;
                        return (
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
                                    {tags.map((tag) => <span key={tag} className="tech-badge">{tag}</span>)}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
