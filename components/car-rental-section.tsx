'use client';

import { Car, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function CarRentalSection() {
    const { t } = useLanguage();

    return (
        <section className="w-full py-16 md:py-24 px-4 bg-[#E6E2D3]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-4">
                        {t.car_rental.title}
                    </h2>
                    <p className="text-foreground/60 font-light max-w-2xl mx-auto">
                        {t.car_rental.description}
                    </p>
                </div>

                <div className="flex justify-center">
                    <a
                        href="https://www.rentalcars.com/en/city/gh/tema/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center w-full sm:w-[350px] group border border-border/50"
                    >
                        <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Car className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-serif font-light text-foreground mb-4 flex items-center gap-2">
                            {t.car_rental.view_options}
                            <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                    </a>
                </div>
            </div>
        </section>
    );
}
