'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

interface RSVPFormData {
  guestName: string;
  attendance: boolean;
  guestNumber: number;
  mealPreference?: string;
  message?: string;
}

export default function RSVPForm() {
  const [formData, setFormData] = useState<RSVPFormData>({
    guestName: '',
    attendance: true,
    guestNumber: 1,
    mealPreference: '',
    message: ''
  });

  const rsvpMutation = useMutation({
    mutationFn: async (data: RSVPFormData) => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rsvp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit RSVP');
      }

      return response.json();
    },
    onSuccess: () => {
      // Show success toast
      toast.success('RSVP submitted successfully!');

      // Reset form data
      setFormData({
        guestName: '',
        attendance: true,
        guestNumber: 1,
        mealPreference: '',
        message: ''
      });
    },
    onError: (error) => {
      console.error('RSVP submission error:', error);
      toast.error('Failed to submit RSVP. Please try again.', {
        position: 'top-center',
        duration: 5000,
      });
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'radio') {
      const radio = e.target as HTMLInputElement;
      if (radio.name === 'attendance') {
        setFormData(prev => ({
          ...prev,
          attendance: radio.value === 'yes',
          ...(radio.value === 'no' && { guestNumber: 1, mealPreference: '' })
        }));
      }
    } else if (type === 'number') {
      setFormData(prev => ({
        ...prev,
        [name]: parseInt(value) || 1
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const submitData = {
      ...formData,
      ...(!formData.attendance && { 
        guestNumber: 0, 
        mealPreference: undefined 
      })
    };
    
    rsvpMutation.mutate(submitData);
  };

  const isAttending = formData.attendance;

  return (
    <section className="w-full py-20 px-4 bg-[#f3efe6]">
      <div className="max-w-xl mx-auto bg-white border border-[#e6e0d6] rounded-xl p-8 shadow-sm">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif text-foreground mb-2">Confirm Your Presence</h2>
          <p className="text-sm font-light text-foreground/60">Please let us know if you can join us</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Guest name */}
          <div className="mb-6">
            <label className="block text-sm mb-2 font-light">
              Guest Name <span className="text-red-500">*</span>
            </label>
            <input
              required
              name="guestName"
              value={formData.guestName}
              onChange={handleInputChange}
              placeholder="Guest Name"
              className="w-full px-4 py-3 rounded-md bg-[#f1ede4] border border-[#d8d2c8] focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm font-light"
              disabled={rsvpMutation.isPending}
            />
          </div>

          {/* Attendance */}
          <div className="mb-6">
            <label className="block text-sm mb-3 font-light">
              Attendance <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3 text-sm font-light">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="radio" 
                  name="attendance" 
                  value="yes"
                  checked={formData.attendance === true}
                  onChange={handleInputChange}
                  className="accent-primary" 
                  disabled={rsvpMutation.isPending}
                />
                <span className="group-hover:text-primary transition-colors">Yes, I'll be there!</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input 
                  type="radio" 
                  name="attendance" 
                  value="no"
                  checked={formData.attendance === false}
                  onChange={handleInputChange}
                  className="accent-primary" 
                  disabled={rsvpMutation.isPending}
                />
                <span className="group-hover:text-primary transition-colors">Sorry, I can't make it</span>
              </label>
            </div>
          </div>

          {/* Conditional Fields - Only show if attending */}
          {isAttending && (
            <>
              {/* Guests */}
              <div className="mb-6">
                <label className="block text-sm mb-2 font-light">
                  Number of Guests <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="guestNumber"
                  required={isAttending}
                  value={formData.guestNumber}
                  onChange={handleInputChange}
                  min={1}
                  className="w-32 px-4 py-3 rounded-md bg-[#f1ede4] border border-[#d8d2c8] focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm font-light"
                  disabled={rsvpMutation.isPending}
                />
              </div>

              {/* Meal Preference */}
              <div className="mb-6">
                <label className="block text-sm mb-2 font-light">
                  Meal Preference (Optional)
                </label>
                <textarea
                  name="mealPreference"
                  value={formData.mealPreference}
                  onChange={handleInputChange}
                  placeholder="Meal Preference"
                  className="w-full px-4 py-3 rounded-md bg-[#f1ede4] border border-[#d8d2c8] focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm font-light min-h-[80px]"
                  disabled={rsvpMutation.isPending}
                />
              </div>
            </>
          )}

          {/* Message - Always visible */}
          <div className="mb-8">
            <label className="block text-sm mb-2 font-light">
              Message to the Couple (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message to the Couple"
              className="w-full px-4 py-3 rounded-md bg-[#f1ede4] border border-[#d8d2c8] focus:outline-none focus:ring-1 focus:ring-primary/50 text-sm font-light min-h-[100px]"
              disabled={rsvpMutation.isPending}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={rsvpMutation.isPending}
            className="w-full bg-primary text-white py-4 rounded-md flex items-center justify-center gap-2 text-sm tracking-widest transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {rsvpMutation.isPending ? 'Submitting...' : 'Send RSVP'}
          </button>
        </form>
      </div>
    </section>
  );
}