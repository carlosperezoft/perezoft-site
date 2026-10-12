import { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Mail, Linkedin, Github, Calendar } from 'lucide-react';
import BookingButton from './BookingButton';
import { useLanguage } from '../context/LanguageContext';
import './Contact.css';

function WhatsAppIcon({ size = 18, className = '' }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.889 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.414z" />
        </svg>
    );
}

const SOCIALS = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/carlosperezoft' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/carlos-alberto-perez-moncada/' },
    { icon: WhatsAppIcon, label: 'WhatsApp', href: 'https://wa.me/573002697624' },
    { icon: Mail, label: 'Email', href: 'mailto:carlos.perezoft@gmail.com' },
];

export default function Contact() {
    const { t } = useLanguage();
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
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        setForm({ name: '', email: '', service: '', message: '' });
    };

    return (
        <section id="contact" className="section contact" ref={sectionRef}>
            <div className="container">
                <p className="section-label">{t.contact.sectionLabel}</p>
                <h2 className="section-title">
                    {t.contact.titleStart} <span className="gradient-text">{t.contact.titleGradient}</span>
                </h2>
                <div className="section-divider" />

                <div className="contact__inner">
                    {/* Left info */}
                    <div className="contact__info">
                        <p className="contact__intro">
                            {t.contact.intro1} <strong>{t.contact.introCity}</strong> {t.contact.intro2} <strong>{t.contact.introTime}</strong>
                        </p>

                        <div className="contact__details">
                            <a href="mailto:carlos.perezoft@gmail.com" className="contact__detail contact__detail--interactive">
                                <div className="contact__detail-icon">
                                    <Mail size={16} />
                                </div>
                                <span>carlos.perezoft@gmail.com</span>
                            </a>
                            <a
                                href="https://wa.me/573002697624"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact__detail contact__detail--interactive"
                            >
                                <div className="contact__detail-icon contact__detail-icon--wa">
                                    <WhatsAppIcon size={16} />
                                </div>
                                <span>+57 300 269 7624 (WhatsApp)</span>
                            </a>
                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <MapPin size={16} />
                                </div>
                                <span>{t.contact.locationLabel}</span>
                            </div>
                        </div>

                        {/* Booking CTA Card */}
                        <div className="contact__booking-card card">
                            <div className="contact__booking-header">
                                <div className="contact__booking-icon">
                                    <Calendar size={18} />
                                </div>
                                <h4 className="contact__booking-title">{t.contact.bookingCardTitle}</h4>
                            </div>
                            <p className="contact__booking-desc">{t.contact.bookingCardDesc}</p>
                            <BookingButton className="btn btn-primary contact__booking-btn">
                                {t.contact.bookBtn}
                            </BookingButton>
                        </div>

                        <div className="contact__socials">
                            {SOCIALS.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a href={social.href} key={social.label} target="_blank" rel="noopener noreferrer" className="contact__social">
                                        <Icon size={18} />
                                        <span>{social.label}</span>
                                    </a>
                                );
                            })}
                        </div>

                        <div className="contact__avail">
                            <span className="contact__avail-dot" />
                            <span>{t.contact.avail}</span>
                        </div>
                    </div>

                    {/* Right form */}
                    <form className="contact__form card" onSubmit={handleSubmit}>
                        <div className="contact__form-row">
                            <div className="contact__field">
                                <label htmlFor="name">{t.contact.formName}</label>
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
                                <label htmlFor="email">{t.contact.formEmail}</label>
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
                            <label htmlFor="service">{t.contact.formService}</label>
                            <select id="service" name="service" value={form.service} onChange={handleChange} required>
                                <option value="" disabled>{t.contact.selectService}</option>
                                {t.contact.servicesList.map((svc) => (
                                    <option key={svc} value={svc}>{svc}</option>
                                ))}
                            </select>
                        </div>

                        <div className="contact__field">
                            <label htmlFor="message">{t.contact.formMessage}</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder={t.contact.messagePlaceholder}
                                required
                                value={form.message}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary contact__submit">
                            {sent ? t.contact.sentSuccess : <><Send size={16} /> {t.contact.submitBtn}</>}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
