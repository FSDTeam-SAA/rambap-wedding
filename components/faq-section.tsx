'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Gift, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen py-16 md:py-24 px-4 bg-[#f3efe6]">
      <div className="max-w-2xl mx-auto">
        {/* Important Information Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <HelpCircle className="w-8 h-8" style={{ color: '#6B6B6B' }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-700 mb-8">
            {t.faq.title}
          </h2>

          {/* FAQ Accordion Items */}
          <div className="space-y-3">
            {t.faq.items.map((faq: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-md shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gray-700 font-normal text-sm md:text-base">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 flex-shrink-0 ${openIndex === index ? 'transform rotate-180' : ''
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-48' : 'max-h-0'
                    }`}
                >
                  <div className="px-5 pb-4 pt-2 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed pl-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gifts Section */}
        <div className="mt-20 text-center">
          <div className="flex justify-center mb-3">
            <Gift className="w-8 h-8" style={{ color: '#6B6B6B' }} />
          </div>
          <h3 className="text-3xl md:text-4xl font-serif text-gray-700 mb-8">
            {t.gifts.title}
          </h3>

          <div className="bg-white/40 rounded-lg px-8 py-10 max-w-xl mx-auto">
            <div className="flex justify-center mb-4">
              <Heart className="w-6 h-6" style={{ color: '#A0A0A0' }} />
            </div>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              {t.gifts.description1}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t.gifts.description2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}