'use client';

import { useState } from 'react';
import { AlertTriangle, Music, Bus } from 'lucide-react';

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="w-full py-20 px-4 bg-[#f3efe6]">
      <div className="max-w-xl mx-auto bg-white border border-[#e6e0d6] rounded-xl p-8 shadow-sm">

        {/* Full name */}
        <div className="mb-6">
          <label className="block text-sm mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-md bg-[#f1ede4] border border-[#d8d2c8]"
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm mb-2">
            Email <span className="text-xs text-gray-500">(optional)</span>
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-md bg-[#f1ede4] border border-[#d8d2c8]"
          />
        </div>

        {/* Attendance */}
        <div className="mb-6">
          <label className="block text-sm mb-3">
            Will you attend? <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="radio" name="attend" defaultChecked />
              Yes, I will attend
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="attend" />
              I won’t be able to attend
            </label>
          </div>
        </div>

        {/* Guests */}
        <div className="mb-6">
          <label className="block text-sm mb-2">
            Number of guests (including yourself)
          </label>
          <input
            type="number"
            defaultValue={1}
            min={1}
            className="w-20 px-3 py-2 rounded-md bg-[#f1ede4] border border-[#d8d2c8]"
          />
        </div>

        {/* Allergies */}
        <div className="mb-6">
          <div className="flex gap-2 items-start mb-3">
            <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
            <p className="text-sm">
              <strong>Food allergies and intolerances</strong><br />
              <span className="text-xs text-gray-600">
                Select all that apply
              </span>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              'Gluten-free / Celiac',
              'Lactose-free',
              'Vegetarian',
              'Vegan',
              'Nut allergy',
              'Seafood allergy',
            ].map(item => (
              <label key={item} className="flex items-center gap-2">
                <input type="checkbox" />
                {item}
              </label>
            ))}
          </div>

          <textarea
            placeholder="Other allergies or restrictions..."
            className="mt-3 w-full px-4 py-2 rounded-md bg-[#f1ede4] border border-[#d8d2c8]"
          />
        </div>

        {/* Song */}
        <div className="mb-6">
          <div className="flex gap-2 items-center mb-2">
            <Music className="w-4 h-4" />
            <label className="text-sm">Your must-play song</label>
          </div>
          <input
            placeholder="Artist – Song name"
            className="w-full px-4 py-3 rounded-md bg-[#f1ede4] border border-[#d8d2c8]"
          />
        </div>

        {/* Transport */}
        <div className="mb-6">
          <div className="flex gap-2 items-center mb-2">
            <Bus className="w-4 h-4" />
            <label className="text-sm">
              Transportation <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="radio" name="transport" />
              Yes, I will need the bus
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="transport" />
              No, I will drive
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Parking is available at the venue.
          </p>
        </div>

        {/* Message */}
        <div className="mb-8">
          <label className="block text-sm mb-2">
            Message for the couple <span className="text-xs text-gray-500">(optional)</span>
          </label>
          <textarea
            placeholder="Write us a few words..."
            className="w-full px-4 py-3 rounded-md bg-[#f1ede4] border border-[#d8d2c8]"
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#3f4b3a] text-white py-3 rounded-md flex items-center justify-center gap-2 text-sm tracking-widest"
        >
          ✈ Send confirmation
        </button>

        {submitted && (
          <p className="text-center text-sm text-green-700 mt-4">
            Thank you! Your response has been received.
          </p>
        )}
      </div>
    </section>
  );
}
