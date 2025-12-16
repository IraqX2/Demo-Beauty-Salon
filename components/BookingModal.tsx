import React, { useState } from 'react';
import { X, Calendar, CheckCircle } from 'lucide-react';
import { BookingFormData, ModalType } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
  onSuccess: () => void;
}

export const BookingModal: React.FC<Props> = ({ isOpen, onClose, preSelectedService, onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: preSelectedService || '',
    datetime: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate Netlify form submission encoding
    const encode = (data: { [key: string]: string }) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "booking", ...formData })
      });
      // Artificial delay for UX
      setTimeout(() => {
        setIsSubmitting(false);
        onSuccess();
      }, 1000);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left shadow-2xl shadow-rose-900/20 transition-all animate-fade-in-up border-t-4 border-rose-400">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-serif font-bold text-gray-900">
            Book Your Glow
          </h3>
          <button 
            onClick={onClose}
            className="rounded-full p-2 text-rose-400 hover:bg-rose-50 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4" name="booking" data-netlify="true">
          <input type="hidden" name="form-name" value="booking" />
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              required
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-200 bg-rose-50/50 p-3 text-sm focus:border-rose-400 focus:ring-rose-400 outline-none transition-all"
              placeholder="e.g., Payel Islam"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-200 bg-rose-50/50 p-3 text-sm focus:border-rose-400 focus:ring-rose-400 outline-none transition-all"
              placeholder="017..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service or Package</label>
            <input
              required
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-200 bg-rose-50/50 p-3 text-sm focus:border-rose-400 focus:ring-rose-400 outline-none transition-all"
              placeholder="Which package?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date & Time</label>
            <input
              required
              type="datetime-local"
              name="datetime"
              value={formData.datetime}
              onChange={handleChange}
              className="w-full rounded-lg border-gray-200 bg-rose-50/50 p-3 text-sm focus:border-rose-400 focus:ring-rose-400 outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-rose-400 px-6 py-3.5 text-white font-semibold shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-[1.02] transition-all disabled:opacity-70"
          >
            {isSubmitting ? 'Scheduling...' : (
              <>
                Confirm Booking <Calendar size={18} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export const SuccessModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-8 text-center shadow-2xl animate-fade-in-up">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-500">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Booking Received!</h3>
        <p className="text-gray-600 mb-6">Thank you, darling! We have received your request and will call you shortly to confirm.</p>
        <button 
          onClick={onClose}
          className="w-full rounded-xl bg-gray-900 text-white py-3 font-medium hover:bg-gray-800 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};
