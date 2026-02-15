"use client";

import { ChevronDown } from "lucide-react";
import { useLanguageStore } from "@/zustand/useLanguageStore";
import { useQuery } from "@tanstack/react-query";

interface HeroSectionProps {
  onScroll?: () => void;
}

export default function HeroSection({ onScroll }: HeroSectionProps) {
  const { lang } = useLanguageStore();

  const { data } = useQuery({
    queryKey: ["hero", lang],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/hero?lang=${lang}`,
      );
      const data = await res.json();
      return data?.data;
    },
  });

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(/rambap.png)",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 py-8">
        <p className="text-sm md:text-base font-light tracking-[0.3em] mb-4 uppercase">
          {data?.topMessage}
        </p>

        <div className="mb-6 space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light">
            {data?.partnerOne}
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-serif font-light">
            &
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light">
            {data?.partnerTwo}
          </h1>
        </div>

        {/* Decorative Line */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-primary" />
          <span className="text-primary text-lg">✦</span>
          <div className="w-12 h-px bg-primary" />
        </div>

        {/* Date */}
        <p className="text-lg md:text-xl font-light tracking-wider mb-2">
          {data?.weddingDate}
        </p>

        {/* Location */}
        <p className="text-sm md:text-base font-light tracking-widest uppercase mb-12 text-primary">
          {data?.location || "Tema, Ghana"}
        </p>

        {/* CTA */}
        <button
          onClick={onScroll}
          className="inline-flex flex-col items-center gap-2 text-white/90 hover:text-white transition-colors duration-300 group cursor-pointer"
        >
          <span className="text-sm font-light tracking-widest uppercase">
            {data?.bottomMessage}
          </span>
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
