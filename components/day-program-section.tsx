'use client';

import { Printer, MapPin } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function DayProgramSection() {
  const { t } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-[#f3efe6] print:bg-white print:py-8">
      <div className="max-w-5xl mx-auto">
        {/* Title & Print Action */}
        <div className="flex justify-between items-start mb-16 md:mb-20">
          <div className="flex-1 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-2">
              {t.program.title}
            </h2>
            <p className="text-foreground/60 font-light">
              {t.program.subtitle}
            </p>
          </div>
          <button
            onClick={handlePrint}
            className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors print:hidden"
            title="Print Program"
          >
            <Printer className="w-6 h-6" />
          </button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20" />

          {/* Events */}
          <div className="space-y-12 md:space-y-16">
            {t.program.events.map((event: any, index: number) => (
              <div
                key={index}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-6 md:gap-8`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className={`space-y-2 ${index % 2 === 0 ? 'pr-4 md:pr-8' : 'pl-4 md:pl-8'}`}>
                    <div className="flex items-center gap-2 justify-end mb-1">
                      {index % 2 !== 0 && <span className="text-2xl">{event.icon}</span>}
                      <p className="text-xs md:text-sm font-light tracking-widest text-primary uppercase">
                        {event.title}
                      </p>
                      {index % 2 === 0 && <span className="text-2xl">{event.icon}</span>}
                    </div>
                    <p className="text-foreground/60 font-light text-sm md:text-base">
                      {event.description}
                    </p>
                    <a
                      href="https://maps.google.com/?q=Tema,+Ghana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] uppercase tracking-tighter text-primary/60 hover:text-primary transition-colors mt-2"
                    >
                      <MapPin className="w-3 h-3" />
                      View Map
                    </a>
                  </div>
                </div>

                {/* Center dot with time */}
                <div className="z-10 flex flex-col items-center">
                  {/* Time badge */}
                  <div className="mb-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-[10px] md:text-xs font-light whitespace-nowrap shadow-sm">
                    {event.time}
                  </div>

                  {/* Dot */}
                  <div className="w-4 h-4 rounded-full bg-white border-2 border-primary shadow-sm" />
                </div>

                {/* Icon placeholder (for alignment) */}
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
