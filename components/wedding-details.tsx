'use client';

import { Calendar, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WeddingDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-background">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 max-w-4xl mx-auto">
        <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-serif text-primary mb-2">
            Priya & Isaac
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground font-light tracking-wide mb-8">
            Together, Forever
          </p>
          <div className="flex justify-center">
            <Heart className="w-8 h-8 text-primary" fill="currentColor" />
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="px-4 py-12 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Date */}
          <div
            className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Calendar className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-serif text-primary">The Date</h2>
            </div>
            <p className="text-lg font-light text-foreground mb-2">
              Saturday, the twelfth of June
            </p>
            <p className="text-sm text-muted-foreground">
              Two thousand twenty-six
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Ceremony at 4:00 PM
            </p>
            <p className="text-sm text-muted-foreground">
              Reception to follow
            </p>
          </div>

          {/* Location */}
          <div
            className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-serif text-primary">The Venue</h2>
            </div>
            <p className="text-lg font-light text-foreground mb-2">
              Bella Vista Gardens
            </p>
            <p className="text-sm text-muted-foreground">
              1234 Blossom Lane
            </p>
            <p className="text-sm text-muted-foreground">
              Malibu, California
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Nestled in the hills with breathtaking views of the Pacific Ocean
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div
          className="bg-white rounded-lg p-10 shadow-md animate-fade-in-up mb-12"
          style={{ animationDelay: '0.8s' }}
        >
          <h2 className="text-3xl font-serif text-primary mb-6">Our Story</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Priya and Isaac's love story began with a chance encounter at a coffee shop in downtown Los Angeles. What started as a brief conversation over cappuccinos blossomed into a beautiful journey of partnership, laughter, and adventure.
          </p>
          <p className="text-foreground leading-relaxed">
            Through countless road trips, shared dreams, and quiet moments of understanding, they discovered in each other a true soulmate. Now, as they embark on this new chapter together, they invite you to celebrate the love that has brought them to this moment.
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="px-4 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif text-primary mb-8 text-center">Events</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Ceremony */}
          <div
            className="bg-secondary rounded-lg p-8 animate-fade-in-up"
            style={{ animationDelay: '1s' }}
          >
            <h3 className="text-2xl font-serif text-primary mb-4">Ceremony</h3>
            <p className="text-muted-foreground mb-2">Saturday, June 12, 2026</p>
            <p className="text-muted-foreground mb-4">4:00 PM</p>
            <p className="text-sm text-foreground leading-relaxed">
              Join us for an intimate ceremony celebrating the union of two hearts.
            </p>
          </div>

          {/* Reception */}
          <div
            className="bg-secondary rounded-lg p-8 animate-fade-in-up"
            style={{ animationDelay: '1.2s' }}
          >
            <h3 className="text-2xl font-serif text-primary mb-4">Reception</h3>
            <p className="text-muted-foreground mb-2">Saturday, June 12, 2026</p>
            <p className="text-muted-foreground mb-4">6:00 PM onwards</p>
            <p className="text-sm text-foreground leading-relaxed">
              Dinner, dancing, and celebration under the stars.
            </p>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="px-4 py-20 max-w-4xl mx-auto text-center">
        <div
          className="bg-white rounded-lg p-12 shadow-md animate-fade-in-up"
          style={{ animationDelay: '1.4s' }}
        >
          <h2 className="text-3xl font-serif text-primary mb-4">RSVP</h2>
          <p className="text-muted-foreground mb-8">
            Please confirm your attendance by May 15, 2026
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-primary text-primary-foreground hover:bg-opacity-90 text-base py-6 px-8"
              asChild
            >
              <a href="mailto:priya.isaac@wedding.com">Send RSVP</a>
            </Button>
            <Button
              variant="outline"
              className="text-primary border-primary hover:bg-secondary text-base py-6 px-8 bg-transparent"
              asChild
            >
              <a href="tel:+1-555-0123">Call Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-light">
            With love and gratitude for being part of our journey
          </p>
          <p className="text-sm mt-4 opacity-75">
            © 2026 Priya & Isaac. All moments are precious.
          </p>
        </div>
      </footer>
    </div>
  );
}
