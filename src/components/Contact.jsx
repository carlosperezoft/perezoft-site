import { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import './Contact.css';

const SOCIALS = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/carlosperezoft' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/carlos-alberto-perez-moncada/' },
    { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com/perezoft' },
    { icon: Mail, label: 'Email', href: 'mailto:carlos.perezoft@gmail.com' },
];

export default function Contact() {
    const sectionRef = useRef(null);
    const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });
    const [sent, setSent] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) sectionRef.current?.classList.add('contact--visible'); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, connect to a backend or service like EmailJS/Formspree
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: '', email: '', service: '', message: '' });
    };

    return (
        <section id="contact" className="section contact" ref={sectionRef}>
            <div className="container">
                <p className="section-label">Get in touch</p>
                <h2 className="section-title">Let's build something <span className="gradient-text">great.</span></h2>
                <div className="section-divider" />

                <div className="contact__inner">
                    {/* Left info */}
                    <div className="contact__info">
                        <p className="contact__intro">
                            Based in <strong>Medellín, Colombia</strong> — working remotely worldwide.
                            Have a project in mind or need expert advice?
                            Reach out and I'll respond within <strong>24 hours</strong>.
                        </p>

                        <div className="contact__details">
                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <Mail size={16} />
                                </div>
                                <span>carlos.perezoft@gmail.com</span>
                            </div>
                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <MapPin size={16} />
                                </div>
                                <span>Medellín Metropolitan Area, Colombia</span>
                            </div>
                        </div>

                        <div className="contact__socials">
                            {SOCIALS.map(({ icon: Icon, label, href }) => (
                                <a href={href} key={label} target="_blank" rel="noopener noreferrer" className="contact__social">
                                    <Icon size={18} />
                                    <span>{label}</span>
                                </a>
                            ))}
                        </div>

                        <div className="contact__avail">
                            <span className="contact__avail-dot" />
                            <span>Available for freelance projects</span>
                        </div>
                    </div>

                    {/* Right form */}
                    <form className="contact__form card" onSubmit={handleSubmit}>
                        <div className="contact__form-row">
                            <div className="contact__field">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="John Smith"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="contact__field">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john@company.com"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="contact__field">
                            <label htmlFor="service">Service Needed</label>
                            <select id="service" name="service" value={form.service} onChange={handleChange} required>
                                <option value="" disabled>Select a service...</option>
                                <option>Web Development</option>
                                <option>Backend / API</option>
                                <option>Cloud & DevOps</option>
                                <option>Progressive Web App</option>
                                <option>Technical Consulting</option>
                                <option>Ongoing Support</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="contact__field">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Tell me about your project..."
                                required
                                value={form.message}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary contact__submit">
                            {sent ? '✓ Message Sent!' : <><Send size={16} /> Send Message</>}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
