"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Gift, Heart } from "lucide-react";
import { useLanguageStore } from "@/zustand/useLanguageStore";
import { useQuery } from "@tanstack/react-query";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { lang } = useLanguageStore();

  const { data: guestInfo } = useQuery({
    queryKey: ["faq-gift", lang],
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

  const { faq, gifts } = guestInfo;

  // Helper function to check if question contains visa-related keywords
  const isVisaQuestion = (question: string) => {
    const visaKeywords = [
      "visa",
      "Visa",
      "VISa",
      "VISA",
      "entry",
      "Entry",
      "immigration",
    ];
    return visaKeywords.some((keyword) => question.includes(keyword));
  };

  return (
    <section className="w-full pt-16 px-4 bg-[#f3efe6]">
      <div className="max-w-2xl mx-auto">
        {/* Important Information Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <HelpCircle className="w-8 h-8" style={{ color: "#6B6B6B" }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-gray-700 mb-8">
            {faq?.title || "Frequently Asked Questions"}
          </h2>

          {/* FAQ Accordion Items */}
          <div className="space-y-3">
            {faq?.items?.map((item: any, index: number) => {
              const hasVisaInfo = isVisaQuestion(item.question);

              return (
                <div
                  key={item._id}
                  className="bg-white rounded-md shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-gray-700 font-normal text-sm md:text-base">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-[1200px]" : "max-h-0"
                    }`}
                  >
                    <div className="px-5 pb-6 pt-4 border-t border-gray-100 text-left">
                      <p className="text-gray-600 text-sm leading-relaxed pl-4 mb-4">
                        {item.answer}
                      </p>

                      {hasVisaInfo && (
                        <div className="pl-4 space-y-4">
                          <div className="text-sm space-y-2">
                            <p className="text-gray-700">
                              <strong>Visa application from Paris:</strong>{" "}
                              <a
                                href="https://paris.mfa.gov.gh/VisaApplicationInfo.aspx"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline break-all hover:text-blue-700 transition-colors"
                              >
                                https://paris.mfa.gov.gh/VisaApplicationInfo.aspx
                              </a>
                            </p>
                            <p className="text-gray-700">
                              <strong>Visa application from Brussels:</strong>{" "}
                              <a
                                href="https://brussels.mfa.gov.gh/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline break-all hover:text-blue-700 transition-colors"
                              >
                                https://brussels.mfa.gov.gh/
                              </a>
                            </p>
                          </div>

                          <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                            <img
                              src="/faq.png"
                              alt="Visa Exemption Table"
                              className="w-full h-auto object-contain"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gifts Section */}
        {gifts && (
          <div className="mt-20 text-center">
            <div className="flex justify-center mb-3">
              <Gift className="w-8 h-8" style={{ color: "#6B6B6B" }} />
            </div>
            <h3 className="text-3xl md:text-4xl font-serif text-gray-700 mb-8">
              {gifts.title || "Gifts"}
            </h3>

            <div className="bg-white/40 rounded-lg px-8 py-10 max-w-xl mx-auto">
              <div className="flex justify-center mb-4">
                <Heart className="w-6 h-6" style={{ color: "#A0A0A0" }} />
              </div>

              {gifts.subtitle && (
                <p className="text-gray-600 text-base leading-relaxed mb-2 font-light italic">
                  {gifts.subtitle}
                </p>
              )}

              <p className="text-gray-600 text-base leading-relaxed mb-4">
                {gifts.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
