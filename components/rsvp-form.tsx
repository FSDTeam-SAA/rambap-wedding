'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function RSVPForm() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="w-full py-20 px-4 bg-[#f3efe6]">
        <div className="max-w-xl mx-auto bg-white border border-[#e6e0d6] rounded-xl p-12 shadow-sm text-center">
          <h3 className="text-2xl font-serif text-primary mb-4">{t.rsvp.confirmation}</h3>
          <button
            onClick={() => setSubmitted(false)}
            className="text-sm font-light text-primary/60 hover:text-primary transition-colors"
          >
            Send another response
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-20 px-4 bg-[#f3efe6]">
      <div className="max-w-xl mx-auto bg-white border border-[#e6e0d6] rounded-xl p-8 shadow-sm">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-foreground mb-2">{t.rsvp.title}</h2>
          <p className="text-sm font-light text-foreground/60">{t.rsvp.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Guest name */}
          <div className="mb-6">
            <label className="block text-sm mb-2 font-light">
              {t.rsvp.fields.name} <span className="text-red-500">*</span>
            </label>
            <input
              required
              placeholder={t.rsvp.fields.name}
              className="w-full px-4 py-3 rounded-md bg-[#f1ede4] border border-[#d8d2c8] focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm font-light"
            />
          </div>

          {/* Attendance */}
          <div className="mb-6">
            <label className="block text-sm mb-3 font-light">
              {t.rsvp.fields.attendance} <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3 text-sm font-light">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="attend" defaultChecked className="accent-primary" />
                <span className="group-hover:text-primary transition-colors">{t.rsvp.fields.attendance_yes}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="radio" name="attend" className="accent-primary" />
                <span className="group-hover:text-primary transition-colors">{t.rsvp.fields.attendance_no}</span>
              </label>
            </div>
          </div>

          {/* Guests */}
          <div className="mb-6">
            <label className="block text-sm mb-2 font-light">
              {t.rsvp.fields.guests} <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              required
              defaultValue={1}
              min={1}
              className="w-32 px-4 py-3 rounded-md bg-[#f1ede4] border border-[#d8d2c8] focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm font-light"
            />
          </div>

          {/* Meal Preference */}
          <div className="mb-6">
            <label className="block text-sm mb-2 font-light">
              {t.rsvp.fields.meal}
            </label>
            <textarea
              placeholder={t.rsvp.fields.meal}
              className="w-full px-4 py-3 rounded-md bg-[#f1ede4] border border-[#d8d2c8] focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm font-light min-h-[80px]"
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block text-sm mb-2 font-light">
              {t.rsvp.fields.message}
            </label>
            <textarea
              placeholder={t.rsvp.fields.message}
              className="w-full px-4 py-3 rounded-md bg-[#f1ede4] border border-[#d8d2c8] focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm font-light min-h-[100px]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#3f4b3a] hover:bg-[#2f382a] text-white py-4 rounded-md flex items-center justify-center gap-2 text-sm tracking-widest transition-colors duration-300"
          >
            {t.rsvp.submit}
          </button>
        </form>
      </div>
    </section>
  );
}
