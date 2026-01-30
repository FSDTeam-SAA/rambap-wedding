import React from "react";
import { useLanguage } from '@/lib/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#3f4b32] text-[#f5f5f0] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4">

          {/* Heart Icon */}
          <span className="text-lg opacity-80 select-none">♡</span>

          {/* Names */}
          <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-wide">
            Axel-Philippe & Eunice
          </h3>

          {/* Date */}
          <p className="text-xs uppercase tracking-[0.3em] opacity-80">
            {t.hero.date}
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-white/30 my-6" />

          {/* Credit */}
          <p className="text-[11px] opacity-60">
            Made with love by{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:opacity-100 transition"
            >
              The Digital Yes
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
