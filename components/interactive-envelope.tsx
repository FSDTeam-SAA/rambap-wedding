'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface InteractiveEnvelopeProps {
  onComplete: () => void;
}

export default function InteractiveEnvelope({ onComplete }: InteractiveEnvelopeProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSealClick = () => {
    if (isPlaying) return;

    setIsPlaying(true);

    // Play audio
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log('[v0] Audio play error:', error);
      });
    }

    // Play video
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('[v0] Video play error:', error);
      });
    }
  };

  const handleVideoEnd = () => {
    setVideoEnded(true);
    setTimeout(() => {
      onComplete();
    }, 500);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Audio and Video elements */}
      <audio ref={audioRef} src="/intro-music.mp3" />
      <video
        ref={videoRef}
        src="/intro-video.mov"
        onEnded={handleVideoEnd}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Envelope Background - shown when not playing video */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image
          src="/envelope-intro.jpg"
          alt="Wedding invitation envelope"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Interactive Seal Button - shown when not playing video */}
      {!isPlaying && (
        <div className="relative z-10 flex items-center justify-center">
          <button
            onClick={handleSealClick}
            className="relative w-32 h-32 md:w-40 md:h-40 focus:outline-none group"
            aria-label="Click to open invitation"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

            {/* Pulse animation */}
            <div className="absolute inset-0 border-2 border-white/40 rounded-full animate-pulse" />

            {/* Instruction text */}
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <p className="text-sm md:text-base text-gray-700 font-light tracking-wide">
                Click to open
              </p>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
