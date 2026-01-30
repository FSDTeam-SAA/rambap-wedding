'use client';

import { Home, Hotel, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function AccommodationSection() {
    const { t } = useLanguage();

    const options = [
        {
            title: t.accommodation.airbnb,
            icon: <Home className="w-6 h-6" />,
            link: "https://www.airbnb.com/s/Tema--Ghana/homes",
            color: "bg-[#ff5a5f]/10 text-[#ff5a5f]"
        },
        {
            title: t.accommodation.hotels,
            icon: <Hotel className="w-6 h-6" />,
            link: "https://www.booking.com/searchresults.html?ss=Tema%2C+Ghana",
            color: "bg-[#003580]/10 text-[#003580]"
        }
    ];

    return (
        <section className="w-full py-16 md:py-24 px-4 bg-[#f3efe6]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-4">
                        {t.accommodation.title}
                    </h2>
                    <p className="text-foreground/60 font-light max-w-2xl mx-auto">
                        {t.accommodation.description}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6">
                    {options.map((option, index) => (
                        <a
                            key={index}
                            href={option.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center w-full sm:w-[300px] group border border-border/50"
                        >
                            <div className={`w-14 h-14 rounded-full ${option.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {option.icon}
                            </div>
                            <h3 className="text-xl font-serif font-light text-foreground mb-4 flex items-center gap-2">
                                {option.title}
                                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
