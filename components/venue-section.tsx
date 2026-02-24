"use client";

import { MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/lib/context/LanguageContext";
import { useLanguageStore } from "@/zustand/useLanguageStore";
import { useQuery } from "@tanstack/react-query";

export default function VenueSection() {
  const { t } = useLanguage();
  const { lang } = useLanguageStore();

  const { data } = useQuery({
    queryKey: ["event", lang],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/event?lang=${lang}`,
      );
      const data = await res.json();
      return data?.data;
    },
  });

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-[#f3efe6]">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-2">
            {data?.title}
          </h2>
          <p className="text-foreground/60 font-light">{data?.subtitle}</p>
        </div>

        {/* Venue Card */}
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Venue Name */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif text-center text-foreground mb-8">
              {data?.venueName}
            </h3>

            {/* Event Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 pb-8 border-b border-border">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-primary mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-lg font-light text-foreground/70">
                    {data?.ceremonyTitle || "Traditional Ceremony"}
                  </span>
                </div>
                <p className="text-lg font-light text-foreground">
                  {data?.ceremonyTime || "N/A"}
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-primary mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-lg font-light text-foreground/70">
                    {data?.weddingTitle || "White Wedding"}
                  </span>
                </div>
                <p className="text-lg font-light text-foreground">
                  {data?.weddingTime || "N/A"}
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-primary mb-2">
                  <Clock className="w-5 h-5" />
                  <span className="text-lg font-light text-foreground/70">
                    {data?.receptionTitle || "Reception"}
                  </span>
                </div>
                <p className="text-lg font-light text-foreground">
                  {data?.receptionTime || "N/A"}
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 text-primary mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <p className="text-foreground/80 font-light leading-relaxed text-lg">
                {data?.address || "N/A"}
              </p>
            </div>

            {/* Map Embed (Placeholder for Tema, Ghana) */}
            <div className="mb-8 rounded-lg overflow-hidden h-64 md:h-80 bg-muted">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src={
                  data?.mapEmbedUrl ||
                  `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.949518366359!2d-0.02478242518396151!3d5.566266633805923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b34577%3A0x60a6c5d80510c2c6!2sTema%2C%20Ghana!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s`
                }
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Open Map Button */}
            <div className="text-center">
              <a
                href={
                  data?.mapLocationLink ||
                  "https://maps.app.goo.gl/8dDLvsm3TBBN5qzK8"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-300 font-light"
              >
                <MapPin className="w-4 h-4" />
                {data?.mapLocationTitle || "View Map"}
              </a>
            </div>
          </div>
        </div>

        {/* Transportation */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-secondary/30 rounded-lg border border-border">
          <div className="flex justify-center gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="currentColor"
                  viewBox="0 0 28 28"
                >
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 10l1.5-4.5h11L19 10H5z" />
                </svg>
                <h4 className="font-light text-foreground text-lg">
                  {data?.transportationTitle || "Transport"}
                </h4>
              </div>
              <p className="text-foreground/70 font-light text-sm">
                {data?.transportationInfo || "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
