"use client";
import { Heart } from "lucide-react";
import { useLanguageStore } from "@/zustand/useLanguageStore";
import { useQuery } from "@tanstack/react-query";

const Footer = () => {
  const { lang } = useLanguageStore();

  const { data: footerData } = useQuery({
    queryKey: ["footer", lang],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/footer?lang=${lang}`,
      );
      const data = await res.json();
      return data?.data;
    },
  });

  if (!footerData) {
    return null; // or a loading skeleton
  }

  const { partnerOne, partnerTwo, date, footerNote } = footerData;

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4">
          {/* Heart Icon */}
          <span className="text-lg opacity-80 select-none">
            <Heart />
          </span>

          {/* Names */}
          <h3 className="font-serif text-2xl md:text-3xl font-medium tracking-wide">
            {partnerOne} & {partnerTwo}
          </h3>

          {/* Date */}
          <p className="text-xs uppercase tracking-[0.3em] opacity-80">
            {date}
          </p>

          {/* Divider */}
          <div className="w-16 h-px bg-white/30 my-6" />

          {/* Credit */}
          <p className="text-[11px]">{footerNote || "Made with love by"} </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
