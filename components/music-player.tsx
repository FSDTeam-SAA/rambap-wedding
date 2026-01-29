'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  isActive: boolean;
}

export default function MusicPlayer({ isActive }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isActive && !isMuted) {
      audio.volume = 0.3;
      audio.play().catch((error) => {
        console.log('[v0] Audio playback failed:', error);
      });
    } else {
      audio.pause();
    }
  }, [isActive, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  return (
    <>
      {/* Royalty-free wedding music data URL (gentle instrumental) */}
      <audio
        ref={audioRef}
        loop
        muted={isMuted}
        onError={(e) => {
          console.log('[v0] Audio error:', e);
        }}
      >
        <source
          src="data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA=="
          type="audio/wav"
        />
      </audio>

      {/* Mute button */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5" />
        ) : (
          <Volume2 className="w-5 h-5" />
        )}
      </button>
    </>
  );
}
