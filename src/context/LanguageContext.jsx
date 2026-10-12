/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState(() => {
        try {
            const saved = localStorage.getItem('perezoft_lang');
            if (saved === 'en' || saved === 'es') return saved;
            if (typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('es')) {
                return 'es';
            }
        } catch {
            // fallback
        }
        return 'en';
    });

    const setLang = (newLang) => {
        if (newLang === 'en' || newLang === 'es') {
            setLangState(newLang);
            try {
                localStorage.setItem('perezoft_lang', newLang);
            } catch {
                // fallback
            }
        }
    };

    const toggleLang = () => {
        setLang(lang === 'en' ? 'es' : 'en');
    };

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const t = translations[lang] || translations.en;

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
