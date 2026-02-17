"use client";

import { useLanguageStore } from "@/zustand/useLanguageStore";
import { useQuery } from "@tanstack/react-query";
import { Utensils, Printer } from "lucide-react";
import { useRef } from "react";

export default function MenuSection() {
  const { lang } = useLanguageStore();
  const menuRef = useRef<HTMLDivElement>(null);

  const { data: menuData } = useQuery({
    queryKey: ["menu", lang],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/details/menu?lang=${lang}`,
      );
      const data = await res.json();
      return data?.data;
    },
  });

  const handlePrint = () => {
    if (!menuRef.current) return;

    const printContent = menuRef.current.innerHTML;
    const originalTitle = document.title;

    // Create a new window for printing
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    // Get the styles from the current page
    const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
    let stylesHTML = "";
    styles.forEach((style) => {
      if (style.tagName === "STYLE") {
        stylesHTML += style.outerHTML;
      } else if (style.tagName === "LINK") {
        stylesHTML += style.outerHTML;
      }
    });

    // Write the print content with styles
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Wedding Menu</title>
          ${stylesHTML}
          <style>
            body { 
              background: white; 
              padding: 2rem; 
              margin: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              font-family: system-ui, -apple-system, sans-serif;
            }
            .print-section { 
              max-width: 800px; 
              width: 100%;
              margin: 0 auto; 
            }
            @media print {
              body { padding: 0; }
              button { display: none !important; }
            }
          </style>
        </head>
        <body>
          <div class="print-section">
            ${printContent}
          </div>
          <script>
            window.onload = () => window.print();
          </script>
        </body>
      </html>
    `);

    printWindow.document.close();
  };

  if (!menuData) {
    return null; // or a loading spinner
  }

  const { title, menuSections } = menuData;

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-[#fdfaf5] print:bg-white print:py-8">
      <div className="max-w-3xl mx-auto">
        {/* Menu Card */}
        <div
          ref={menuRef}
          className="border-2 border-primary/20 p-8 md:p-16 relative bg-white"
        >
          {/* Decorative Corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/40" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/40" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/40" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/40" />

          <div className="text-center mb-12 relative">
            <Utensils className="w-8 h-8 text-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-2">
              {title}
            </h2>
            <div className="w-24 h-px bg-primary/30 mx-auto mt-4" />
          </div>

          <div className="space-y-12 text-center">
            {menuSections?.map((section: any) => (
              <div key={section._id}>
                <h3 className="text-xl font-serif text-primary uppercase tracking-widest mb-6">
                  {section.categoryName}
                </h3>
                <ul className="space-y-2 text-foreground/80 font-light">
                  {section.items.map((item: string, i: number) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Print Button - Hidden when printing */}
        <div className="mt-16 text-center print:hidden">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all font-light text-sm shadow-md"
          >
            <Printer className="w-4 h-4" />
            Print Menu
          </button>
        </div>
      </div>
    </section>
  );
}
