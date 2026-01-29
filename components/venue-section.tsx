'use client';

import { MapPin, Clock } from 'lucide-react';

export default function VenueSection() {
  return (
    <section className="w-full py-16 md:py-24 px-4 bg-[#f3efe6]">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-2">
            Where We Celebrate
          </h2>
          <p className="text-foreground/60 font-light">
            The place where we'll say "I do"
          </p>
        </div>

        {/* Venue Card */}
        <div className="bg-card rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Venue Name */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif text-center text-foreground mb-8">
              Finca Comassema
            </h3>

            {/* Event Details */}
            <div className="grid grid-cols-2 gap-6 md:gap-12 mb-8 pb-8 border-b border-border">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-primary mb-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-light text-foreground/70">Ceremony</span>
                </div>
                <p className="text-lg font-light text-foreground">16:00h</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-primary mb-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-light text-foreground/70">Banquet</span>
                </div>
                <p className="text-lg font-light text-foreground">19:00h</p>
              </div>
            </div>

            {/* Address */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-2 text-primary mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <p className="text-foreground/80 font-light leading-relaxed">
                Carretera Orient-Alaró, km 10, 07340 Alaró, Mallorca
              </p>
            </div>

            {/* Map Embed */}
            <div className="mb-8 rounded-lg overflow-hidden h-64 md:h-80 bg-muted">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.5048840024816!2d2.7333!3d39.8167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297962b0e0e0e0f%3A0x1297962b0e0e0e0f!2sFinca%20Comassema!5e0!3m2!1sen!2sis!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Open Map Button */}
            <div className="text-center">
              <a
                href="https://maps.google.com/?q=Finca+Comassema,+Alaró,+Mallorca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors duration-300 font-light"
              >
                <MapPin className="w-4 h-4" />
                Open in Maps
              </a>
            </div>
          </div>
        </div>

        {/* Transportation */}
        <div className="mt-12 md:mt-16 p-6 md:p-8 bg-secondary/30 rounded-lg border border-border">
          <div className="flex items-start gap-4">
            <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm11 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM5 10l1.5-4.5h11L19 10H5z" />
            </svg>
            <div>
              <h4 className="font-light text-foreground mb-2">Transportation</h4>
              <p className="text-foreground/70 font-light text-sm">
                There will be a bus available for guests. There is also parking at the venue for those who prefer to drive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
