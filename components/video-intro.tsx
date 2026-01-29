'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface VideoIntroProps {
  onStart: () => void;   // 🔹 new
  onComplete: () => void;
}


export default function VideoIntro({ onStart, onComplete }: VideoIntroProps) {

  const [isPlaying, setIsPlaying] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

const handleEnvelopeClick = () => {
  if (videoRef.current) {
    setIsPlaying(true);

    onStart(); // 🔥 START MUSIC HERE (user gesture)

    videoRef.current.play().catch(console.error);
  }
};


  const handleVideoEnd = () => {
    console.log("[v0] Video ended, transitioning to landing page");
    
    // Start fade out transition
    setFadeOut(true);
    
    // Complete transition after fade
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  // Preload video on component mount for instant playback
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
          className="absolute inset-0 cursor-pointer z-20"
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
          
          {/* Subtle hint text */}
          <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center pointer-events-none">
            <div className="text-white/60 text-xs md:text-sm font-light tracking-[0.3em] uppercase animate-pulse px-6 py-2 bg-black/20 backdrop-blur-sm rounded-full">
              Click Anywhere to Open
            </div>
          </div>
        </div>
      )}

      {/* Video Player - Always rendered, shows when clicked */}
      <video
        ref={videoRef}
        src="/intro-video.mov"
        onEnded={handleVideoEnd}
        className={`absolute inset-0 w-full h-full object-cover z-10 ${
          isPlaying ? 'block' : 'hidden'
        }`}
        playsInline
        preload="auto"
      />
    </div>
  );
}