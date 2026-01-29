'use client';

import { ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onScroll?: () => void;
}

export default function HeroSection({ onScroll }: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 py-8">
        <p className="text-sm md:text-base font-light tracking-[0.3em] mb-4 uppercase">
          Nos Casamos
        </p>

        <div className="mb-6 space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light">
            Pedro
          </h1>
          <p className="text-2xl md:text-3xl text-amber-300 font-serif font-light">
            &
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light">
            Júlia
          </h1>
        </div>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-amber-300" />
          <span className="text-amber-300 text-lg">✦</span>
          <div className="w-12 h-px bg-amber-300" />
        </div>

        {/* Date */}
        <p className="text-lg md:text-xl font-light tracking-wider mb-12">
          May 9, 2026
        </p>

        {/* CTA */}
        <button
          onClick={onScroll}
          className="inline-flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
        >
          <span className="text-sm font-light tracking-widest uppercase">
            Confirm Your Attendance
          </span>
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
