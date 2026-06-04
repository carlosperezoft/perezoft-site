import { Sparkles, Target, Users, Zap } from 'lucide-react';
import useInView from '../hooks/useInView';
import SectionHeader from './SectionHeader';
import './About.css';

const HIGHLIGHTS = [
    { icon: Zap, label: 'Technical Leader', desc: 'Leading engineering teams to deliver business-critical systems' },
    { icon: Target, label: 'Software Architect', desc: 'Designing scalable enterprise-grade architectures' },
    { icon: Users, label: 'Team Builder', desc: 'Mentoring developers and aligning technology with business goals' },
    { icon: Sparkles, label: 'Clean Code', desc: 'Readable, maintainable, well-tested software' },
];

export default function About() {
    const sectionRef = useInView('about--visible');

    return (
        <section id="about" className="section about" ref={sectionRef}>
            <div className="container">
                <div className="about__inner">
                    {/* Left: text */}
                    <div className="about__text">
                        <SectionHeader
                            label="About Me"
                            title="Building enterprise software"
                            highlight="that matters"
                        />
                        <p className="about__bio">
                            I'm <strong>Carlos Alberto Perez Moncada</strong>, a <strong>Systems Engineer</strong> and
                            {' '}<strong>Master in Engineering (Informatics)</strong> from the Universidad de Antioquia, with a
                            specialization in Software Development from Universidad EAFIT.
                        </p>
                        <p className="about__bio">
                            Under the <strong>PEREZOFT</strong> brand, I deliver business software solutions — from
                            enterprise Java backends to modern React frontends — with a strong focus on software architecture,
                            microservices, and enterprise integrations. I believe great software bridges the gap between
                            technology and real business needs.
                        </p>
                        <p className="about__bio">
                            Based in <strong>Medellín Metropolitan Area, Colombia</strong>, I work with clients locally and
                            internationally, helping teams build better, faster, and smarter.
                        </p>
                        <div className="about__stats">
                            <div className="about__stat">
                                <span className="about__stat-num gradient-text">10+</span>
                                <span className="about__stat-label">Years Experience</span>
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-num gradient-text">11+</span>
                                <span className="about__stat-label">Career Roles</span>
                            </div>
                            <div className="about__stat">
                                <span className="about__stat-num gradient-text">MSc</span>
                                <span className="about__stat-label">Engineering Degree</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: highlights cards */}
                    <div className="about__cards">
                        {HIGHLIGHTS.map(({ icon: Icon, label, desc }, i) => (
                            <div className="about__card card" key={label} style={{ '--delay': `${i * 0.1}s` }}>
                                <div className="about__card-icon">
                                    <Icon size={22} />
                                </div>
                                <div>
                                    <h4 className="about__card-title">{label}</h4>
                                    <p className="about__card-desc">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
