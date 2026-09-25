import React, { useState, useEffect } from 'react';
import { X, Calendar, Send, CheckCircle2 } from 'lucide-react';
import { TREATMENTS } from '../data/clinicData';
import confetti from 'canvas-confetti';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTreatment?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultTreatment = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    treatment: defaultTreatment || TREATMENTS[0].title,
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultTreatment) {
      setFormData((prev) => ({ ...prev, treatment: defaultTreatment }));
    }
  }, [defaultTreatment]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) {
      err.name = 'Please provide your full name.';
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      err.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.date) {
      err.date = 'Please select a preferred date.';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#00B4D8', '#0077B6', '#90E0EF', '#0A1128']
        });
      } catch (err) {}
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      date: '',
      treatment: defaultTreatment || TREATMENTS[0].title,
      message: ''
    });
    setErrors({});
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-soft-xl border border-black/[0.08] text-[#0A1128] overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-[#627D98] hover:text-[#0A1128] hover:bg-black/[0.05] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-[#E8F7FB] text-[#0077B6] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#00B4D8]" />
            </div>
            <h3 id="modal-title" className="font-display text-2xl font-bold text-[#0A1128] mb-2">
              Appointment Requested!
            </h3>
            <p className="text-xs text-[#3E4C59] max-w-sm mx-auto mb-6">
              Thank you, <strong>{formData.name}</strong>. Our team will contact you at <strong>{formData.phone}</strong> to confirm your slot for {formData.treatment}.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-full border border-black/10 text-xs font-semibold uppercase tracking-wider text-[#0A1128] hover:bg-black/5"
              >
                Reset
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#0A1128] hover:bg-[#0077B6] text-white text-xs font-semibold uppercase tracking-wider shadow-sm"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex items-center gap-2 mb-1 text-[#0077B6]">
              <Calendar className="w-4 h-4 text-[#00B4D8]" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Fast Booking</span>
            </div>
            <h3 id="modal-title" className="font-display text-2xl font-bold text-[#0A1128] mb-1">
              Book Your Visit
            </h3>
            <p className="text-xs text-[#627D98] mb-5">
              Sirhind City, Punjab • Dr. Ankit
            </p>

            <div className="space-y-4 mb-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1128] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#0A1128] focus:outline-none transition-all ${
                    errors.name ? 'border-red-500 bg-red-50/50' : 'border-black/10 focus:border-[#00B4D8] bg-[#FAFBFC]'
                  }`}
                />
                {errors.name && <p className="text-[10px] text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1128] mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-[#0A1128] focus:outline-none transition-all ${
                    errors.phone ? 'border-red-500 bg-red-50/50' : 'border-black/10 focus:border-[#00B4D8] bg-[#FAFBFC]'
                  }`}
                />
                {errors.phone && <p className="text-[10px] text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1128] mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={`w-full px-3 py-2.5 rounded-xl border text-sm text-[#0A1128] focus:outline-none transition-all ${
                      errors.date ? 'border-red-500 bg-red-50/50' : 'border-black/10 focus:border-[#00B4D8] bg-[#FAFBFC]'
                    }`}
                  />
                  {errors.date && <p className="text-[10px] text-red-500 mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1128] mb-1.5">
                    Treatment
                  </label>
                  <select
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-black/10 focus:border-[#00B4D8] bg-[#FAFBFC] text-sm text-[#0A1128] focus:outline-none transition-all"
                  >
                    {TREATMENTS.map((t) => (
                      <option key={t.id} value={t.title}>
                        {t.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A1128] mb-1.5">
                  Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Any particular concerns or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-black/10 focus:border-[#00B4D8] bg-[#FAFBFC] text-sm text-[#0A1128] focus:outline-none transition-all resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl bg-[#0A1128] hover:bg-[#0077B6] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 group"
            >
              <Send className="w-4 h-4 text-[#90E0EF]" />
              <span>{isSubmitting ? 'Sending...' : 'Confirm Consultation Request'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
