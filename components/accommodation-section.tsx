"use client";

import { Home, Hotel, ExternalLink, Car, User, Heart } from "lucide-react";
import { useLanguageStore } from "@/zustand/useLanguageStore";
import { useQuery } from "@tanstack/react-query";

export default function AccommodationSection() {
  const { lang } = useLanguageStore();

  const { data: guestInfo } = useQuery({
    queryKey: ["accommodation", lang],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/guestInfo?lang=${lang}`,
      );
      const data = await res.json();
      return data?.data;
    },
  });

  if (!guestInfo) {
    return null; // or a loading spinner
  }

  const { accommodation, carRental, dressCode, gifts } = guestInfo;

  // Map icons based on title or index
  const getAccommodationIcon = (index: number) => {
    const icons = [
      <Home className="w-6 h-6" key="home" />,
      <Hotel className="w-6 h-6" key="hotel" />,
    ];
    return icons[index % icons.length];
  };

  const getAccommodationColor = (index: number) => {
    const colors = [
      "bg-[#ff5a5f]/10 text-[#ff5a5f]",
      "bg-[#003580]/10 text-[#003580]",
      "bg-[#0e4a6b]/10 text-[#0e4a6b]",
      "bg-[#2e7d32]/10 text-[#2e7d32]",
    ];
    return colors[index % colors.length];
  };

  return (
    <div>
      {/* Accommodation Section */}
      <section className="w-full py-16 md:py-24 px-4 bg-[#f3efe6]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-4">
              {accommodation?.title || "Where to Stay"}
            </h2>
            <p className="text-foreground/60 font-light max-w-2xl mx-auto">
              {accommodation?.subtitle || ""}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {accommodation?.items?.map((item: any, index: number) => (
              <a
                key={item._id}
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center w-full sm:w-[300px] group border border-border/50"
              >
                <div
                  className={`w-14 h-14 rounded-full ${getAccommodationColor(index)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {getAccommodationIcon(index)}
                </div>
                <h3 className="text-xl font-serif font-light text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-sm font-light mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-tighter text-primary/60 group-hover:text-primary transition-colors">
                  View Options
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Car Rental Section */}
      <section className="w-full py-16 md:py-24 px-4 bg-[#E6E2D3]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-4">
              {carRental?.title || "Getting Around"}
            </h2>
            <p className="text-foreground/60 font-light max-w-2xl mx-auto">
              {carRental?.subtitle || ""}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {carRental?.items?.map((item: any, index: number) => (
              <a
                key={item._id}
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center w-full sm:w-[350px] group border border-border/50"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-light text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/60 text-sm font-light mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-tighter text-primary/60 group-hover:text-primary transition-colors">
                  View Rental Options
                  <ExternalLink className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Dress Code Section */}
      <section className="w-full pb-16 px-4 bg-[#E6E2D3]">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-2">
              {dressCode?.title || "Attire Guide"}
            </h2>
          </div>

          {/* Dress Code Cards */}
          <div className="flex justify-center flex-wrap gap-8">
            {dressCode?.items?.map((item: any, index: number) => (
              <div
                key={item._id}
                className="bg-card rounded-lg shadow-sm p-8 md:p-10 text-center hover:shadow-md transition-shadow max-w-sm w-full"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-8 h-8 text-primary" />
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

          {/* Footer Note */}
          {dressCode?.footerNote && (
            <div className="mt-12 text-center">
              <p className="text-foreground/60 font-light text-sm italic">
                {dressCode.footerNote}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
