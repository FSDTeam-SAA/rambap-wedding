'use client';

import { useLanguage } from '@/lib/context/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
            <div className="bg-white/80 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-2 shadow-sm border border-border">
                <Globe className="w-4 h-4 text-primary" />
                <button
                    onClick={() => setLanguage('en')}
                    className={`text-xs font-light transition-colors ${language === 'en' ? 'text-primary' : 'text-foreground/50 hover:text-foreground'
                        }`}
                >
                    EN
                </button>
                <div className="w-px h-3 bg-border" />
                <button
                    onClick={() => setLanguage('fr')}
                    className={`text-xs font-light transition-colors ${language === 'fr' ? 'text-primary' : 'text-foreground/50 hover:text-foreground'
                        }`}
                >
                    FR
                </button>
            </div>
        </div>
    );
}
