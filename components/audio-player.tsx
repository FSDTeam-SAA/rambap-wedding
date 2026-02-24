// 'use client';

// import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
// import { Volume2, VolumeX } from 'lucide-react';

// const AudioPlayer = forwardRef((props, ref) => {
//   const [isMuted, setIsMuted] = useState(false);
//   const audioRef = useRef<HTMLAudioElement>(null);

//   useImperativeHandle(ref, () => ({
//     play() {
//       if (audioRef.current) {
//         audioRef.current.volume = 0.4;
//         audioRef.current.play().catch(console.error);
//       }
//     },
//     stop() {
//       audioRef.current?.pause();
//     },
//   }));

//   const toggleMute = () => {
//     if (audioRef.current) {
//       audioRef.current.muted = !isMuted;
//       setIsMuted(!isMuted);
//     }
//   };

//   return (
//     <>
//       <audio
//         ref={audioRef}
//         src="/intro-music.mp3"
//         loop
//         muted={isMuted}
//       />

//       <button
//         onClick={toggleMute}
//         className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
//       >
//         {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
//       </button>
//     </>
//   );
// });

// AudioPlayer.displayName = 'AudioPlayer';
// export default AudioPlayer;


'use client';

import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';

const AudioPlayer = forwardRef((props, ref) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useImperativeHandle(ref, () => ({
    play() {
      if (audioRef.current) {
        audioRef.current.volume = 0.4;
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            setShowPlayButton(false);
          })
          .catch(console.error);
      }
    },
    stop() {
      audioRef.current?.pause();
      setIsPlaying(false);
    },
  }));

  // অটোপ্লে চেক করুন
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.4;
    
    // অটোপ্লে করার চেষ্টা
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // অটোপ্লে সফল
          setIsPlaying(true);
        })
        .catch(() => {
          // অটোপ্লে ব্যর্থ - প্লে বাটন দেখান
          setShowPlayButton(true);
        });
    }
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowPlayButton(false);
        })
        .catch(console.error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/intro-music.mp3"
        loop
        muted={isMuted}
        preload="auto"
      />

      {/* প্লে বাটন (যদি অটোপ্লে ব্যর্থ হয়) */}
      {showPlayButton && (
        <button
          onClick={handlePlay}
          className="fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse"
          aria-label="Play music"
        >
          <Play className="w-5 h-5" />
        </button>
      )}

      {/* মিউট/আনমিউট বাটন */}
      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
      </button>
    </>
  );
});

AudioPlayer.displayName = 'AudioPlayer';
export default AudioPlayer;