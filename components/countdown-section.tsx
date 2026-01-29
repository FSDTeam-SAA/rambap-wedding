'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date('2026-05-09').getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-8 md:px-12 py-6 md:py-8 min-w-[120px] md:min-w-[140px]">
        <p className="text-4xl md:text-5xl font-light text-white text-center">
          {String(value).padStart(2, '0')}
        </p>
      </div>
      <p className="text-xs md:text-sm font-light tracking-[0.2em] text-white/80 mt-3 uppercase">
        {label}
      </p>
    </div>
  );

  return (
    <section
      id="countdown"
      className="section-padding relative overflow-hidden py-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="floral-background-B0YBMwJP.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-sage-dark/70"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-3">
            Countdown
          </h2>
          <p className="text-white/80 font-light text-base md:text-lg">
            To the most special day of our lives
          </p>
        </div>

        {/* Countdown Boxes */}
        <div className="flex justify-center items-center gap-4 md:gap-6 flex-wrap">
          <CountdownBox value={timeLeft.days} label="Days" />
          <CountdownBox value={timeLeft.hours} label="Hours" />
          <CountdownBox value={timeLeft.minutes} label="Minutes" />
          <CountdownBox value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
}