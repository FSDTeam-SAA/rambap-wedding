'use client';

import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer = forwardRef((props, ref) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useImperativeHandle(ref, () => ({
    play() {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.play();
      }
    },
    stop() {
      audioRef.current?.pause();
    },
  }));

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/intro-music.mp3"
        loop
        muted={isMuted}
      />

      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center"
      >
        {isMuted ? <VolumeX /> : <Volume2 />}
      </button>
    </>
  );
});

AudioPlayer.displayName = 'AudioPlayer';
export default AudioPlayer;
