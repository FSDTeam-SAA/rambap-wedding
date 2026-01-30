'use client';

import { useLanguage } from '@/lib/context/LanguageContext';

export default function DressCodeSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-[#E6E2D3]">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-2">
            {t.dress_code.title}
          </h2>
        </div>

        {/* Dress Code Cards */}
        <div className="flex justify-center flex-wrap gap-8">
          {t.dress_code.items.map((item: any, index: number) => (
            <div key={index} className="bg-card rounded-lg shadow-sm p-8 md:p-10 text-center hover:shadow-md transition-shadow max-w-sm w-full">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-serif font-light text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-foreground/70 font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="mt-12 text-center">
          <p className="text-foreground/60 font-light text-sm italic">
            {t.dress_code.note}
          </p>
        </div>
      </div>
    </section>
  );
}
