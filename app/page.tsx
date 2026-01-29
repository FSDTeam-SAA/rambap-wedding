'use client';

import { useRef, useState } from 'react';
import VideoIntro from '@/components/video-intro';
import HeroSection from '@/components/hero-section';
import CountdownSection from '@/components/countdown-section';
import VenueSection from '@/components/venue-section';
import DayProgramSection from '@/components/day-program-section';
import DressCodeSection from '@/components/dress-code-section';
import FAQSection from '@/components/faq-section';
import RSVPForm from '@/components/rsvp-form';
import AudioPlayer from '@/components/audio-player';
import Footer from '@/components/footer';

export default function Home() {
  const [showLanding, setShowLanding] = useState(false);
  const audioRef = useRef<any>(null);
  const rsvpRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    rsvpRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 🔥 Called when envelope is clicked
  const handleIntroStart = () => {
    audioRef.current?.play();
  };

  // 🔥 Called when video ends
  const handleIntroComplete = () => {
    setShowLanding(true);
  };

  return (
    <main className="bg-background">
      {/* Audio always mounted */}
      <AudioPlayer ref={audioRef} />

      {!showLanding ? (
        <VideoIntro
          onStart={handleIntroStart}
          onComplete={handleIntroComplete}
        />
      ) : (
        <div className="animate-fade-in">
          <HeroSection onScroll={handleScroll} />
          <CountdownSection />
          <VenueSection />
          <DayProgramSection />
          <DressCodeSection />
          <FAQSection />
          <div ref={rsvpRef}>
            <RSVPForm />
          </div>
          <Footer />
        </div>
      )}
    </main>
  );
}
