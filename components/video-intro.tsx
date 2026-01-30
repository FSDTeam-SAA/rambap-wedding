'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/context/LanguageContext';

interface VideoIntroProps {
  onStart: () => void;
  onComplete: () => void;
}

export default function VideoIntro({ onStart, onComplete }: VideoIntroProps) {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnvelopeClick = () => {
    if (videoRef.current) {
      setIsPlaying(true);
      onStart();
      videoRef.current.play().catch(console.error);
    }
  };

  const handleVideoEnd = () => {
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <div className={`relative w-full h-screen overflow-hidden transition-opacity duration-800 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Background Envelope Image - Shows First */}
      {!isPlaying && (
        <div
          className="absolute inset-0 cursor-pointer z-20 flex items-center justify-center"
          onClick={handleEnvelopeClick}
        >
          <Image
            src="/envelope-intro.jpg"
            alt="Wedding invitation envelope"
            fill
            priority
            className="object-cover pointer-events-none"
            quality={100}
          />

          {/* Overlay for Names on Wax Seal (Approximation) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            {/* Wax Seal Overlay */}
            {/* <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center -mt-16 md:-mt-20">
              <div className="absolute inset-0 bg-[#f5e6d3] rounded-full blur-[2px] opacity-80 scale-75" />
              <span className="relative z-10 text-[#8c7355] font-serif italic text-xl md:text-2xl mt-1">
                A & E
              </span>
            </div> */}

            {/* Greeting Overlay */}
            {/* <div className="mt-12 md:mt-16 bg-[#a7c093]/95 backdrop-blur-sm px-4 py-2 rounded">
              <p className="text-[#3c4a2e] font-serif italic text-lg md:text-xl">
                {t.envelope.names}
              </p>
            </div> */}
          </div>

          {/* Subtle hint text */}
          <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center pointer-events-none">
            <div className="text-white/60 text-xs md:text-sm font-light tracking-[0.3em] uppercase animate-pulse px-6 py-2 bg-black/20 backdrop-blur-sm rounded-full">
              {t.envelope.click_anywhere}
            </div>
          </div>
        </div>
      )}

      {/* Video Player - Always rendered, shows when clicked */}
      <video
        ref={videoRef}
        src="/intro-video.mov"
        onEnded={handleVideoEnd}
        className={`absolute inset-0 w-full h-full object-cover z-10 ${isPlaying ? 'block' : 'hidden'
          }`}
        playsInline
        preload="auto"
      />
    </div>
  );
}