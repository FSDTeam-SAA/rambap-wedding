'use client';

import { useState } from 'react';

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  if (isOpening) {
    return (
      <div className="animate-envelope-open" onClick={handleClick}>
        <div className="w-96 h-64 bg-white rounded-sm shadow-2xl relative">
          {/* Envelope front */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Wax seal */}
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-amber-50 to-amber-100 shadow-lg flex items-center justify-center border-8 border-amber-50">
                <svg
                  viewBox="0 0 100 100"
                  className="w-20 h-20 text-amber-200"
                  fill="currentColor"
                >
                  <text
                    x="50"
                    y="55"
                    textAnchor="middle"
                    fontSize="48"
                    fontFamily="serif"
                    fontStyle="italic"
                    opacity="0.8"
                  >
                    P&I
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={handleClick}
      className="transform transition-all duration-300 hover:scale-105 active:scale-95 animate-float"
      aria-label="Open wedding invitation"
    >
      <div className="w-96 h-64 bg-white rounded-sm shadow-2xl relative cursor-pointer hover:shadow-3xl transition-shadow">
        {/* Envelope flap effect */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-stone-100 to-white rounded-sm"></div>

        {/* Envelope body */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Wax seal */}
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-amber-50 to-amber-100 shadow-lg flex items-center justify-center border-8 border-amber-50">
              <svg
                viewBox="0 0 100 100"
                className="w-20 h-20 text-amber-200"
                fill="currentColor"
              >
                <text
                  x="50"
                  y="55"
                  textAnchor="middle"
                  fontSize="48"
                  fontFamily="serif"
                  fontStyle="italic"
                  opacity="0.8"
                >
                  P&I
                </text>
              </svg>
            </div>

            {/* Seal shine effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-transparent opacity-40"></div>
          </div>
        </div>

        {/* Decorative lines on envelope */}
        <div className="absolute top-12 left-8 right-8 flex justify-between opacity-20">
          <div className="w-6 h-6 border-2 border-stone-300 rounded"></div>
          <div className="w-6 h-6 border-2 border-stone-300 rounded"></div>
        </div>

        {/* Click hint */}
        <div className="absolute bottom-4 left-0 right-0 text-center text-xs text-stone-400 font-light">
          Click to open
        </div>
      </div>
    </button>
  );
}
