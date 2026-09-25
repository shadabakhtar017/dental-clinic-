import React, { useState } from 'react';
import { TREATMENTS, CLINIC_INFO } from '../data/clinicData';
import { Phone, CheckCircle2, AlertCircle, Sparkles, Clock, Send, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AppointmentSectionProps {
  initialTreatment?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ initialTreatment = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    treatment: initialTreatment || TREATMENTS[0].title,
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      err.date = 'Please select a preferred consultation date.';
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
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00B4D8', '#0077B6', '#90E0EF', '#0A1128']
        });
      } catch (err) {}
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      date: '',
      treatment: TREATMENTS[0].title,
      message: ''
    });
    setErrors({});
  };

  return (
    <section id="appointment" className="py-24 sm:py-32 bg-[#0A1128] text-white relative overflow-hidden">
      {/* Background glow graphics */}
      <div className="absolute -top-32 left-1/4 w-[32rem] h-[32rem] bg-[#00B4D8]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0077B6]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Callout Information */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#90E0EF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DIRECT RESERVATIONS</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.12] mb-6">
              Ready to give your smile <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#90E0EF] via-[#00B4D8] to-white">
                the attention it deserves?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8">
              Schedule your comprehensive oral examination and digital aesthetic consultation 
              with Dr. Your Name at our centre in Sirhind City, Punjab.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Clock className="w-5 h-5 text-[#00B4D8]" />
                <span>Monday – Saturday: 9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <CheckCircle2 className="w-5 h-5 text-[#00B4D8]" />
                <span>Zero wait time with scheduled appointments</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <CheckCircle2 className="w-5 h-5 text-[#00B4D8]" />
                <span>Transparent treatment quotes prior to care</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-xs text-white/60 mb-2">Need immediate assistance or emergency care?</p>
              <a
                href={`tel:${CLINIC_INFO.contact.phoneClean}`}
                className="inline-flex items-center gap-2 text-lg font-bold text-[#90E0EF] hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-[#00B4D8]" />
                <span>CALL THE CLINIC: {CLINIC_INFO.contact.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Appointment Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-soft-xl border border-white/10 text-[#0A1128] relative">
              {isSubmitted ? (
                <div className="py-8 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#E8F7FB] text-[#0077B6] flex items-center justify-center mx-auto mb-6 shadow-soft">
                    <CheckCircle2 className="w-10 h-10 text-[#00B4D8]" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0A1128] mb-3">
                    Consultation Request Received
                  </h3>
                  <p className="text-sm text-[#3E4C59] max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <strong>{formData.name}</strong>. We have registered your preference for{' '}
                    <strong>{formData.treatment}</strong> on <strong>{formData.date}</strong>.
                  </p>
                  
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-black/[0.06] text-xs text-[#627D98] max-w-md mx-auto mb-8 text-left">
                    <p className="font-semibold text-[#0A1128] mb-1">What happens next:</p>
                    <p>
                      Our clinic coordinator will phone you at <strong>{formData.phone}</strong> within 
                      2 business hours to confirm your final time slot and share preparation guidelines.
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A1128] hover:bg-[#0077B6] text-white text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Submit Another Request</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="font-display text-2xl font-bold text-[#0A1128] mb-2">
                    Request an Appointment
                  </h3>
                  <p className="text-xs text-[#627D98] mb-6">
                    Fill in your preferred date and procedure. We will contact you promptly to finalize.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="patient-name" className="block text-xs font-bold uppercase tracking-wider text-[#0A1128] mb-2">
                        Full Name *
                      </label>
                      <input
                        id="patient-name"
                        type="text"
                        placeholder="e.g. Aditi Gupta"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0A1128] focus:outline-none transition-all ${
                          errors.name
                            ? 'border-red-500 bg-red-50/50'
                            : 'border-black/10 focus:border-[#00B4D8] bg-[#FAFBFC]'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="patient-phone" className="block text-xs font-bold uppercase tracking-wider text-[#0A1128] mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="patient-phone"
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0A1128] focus:outline-none transition-all ${
                          errors.phone
                            ? 'border-red-500 bg-red-50/50'
                            : 'border-black/10 focus:border-[#00B4D8] bg-[#FAFBFC]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="appointment-date" className="block text-xs font-bold uppercase tracking-wider text-[#0A1128] mb-2">
                        Preferred Date *
                      </label>
                      <input
                        id="appointment-date"
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-[#0A1128] focus:outline-none transition-all ${
                          errors.date
                            ? 'border-red-500 bg-red-50/50'
                            : 'border-black/10 focus:border-[#00B4D8] bg-[#FAFBFC]'
                        }`}
                      />
                      {errors.date && (
                        <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.date}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="treatment-select" className="block text-xs font-bold uppercase tracking-wider text-[#0A1128] mb-2">
                        Preferred Treatment
                      </label>
                      <select
                        id="treatment-select"
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#00B4D8] bg-[#FAFBFC] text-sm text-[#0A1128] focus:outline-none transition-all"
                      >
                        {TREATMENTS.map((t) => (
                          <option key={t.id} value={t.title}>
                            {t.number} — {t.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="patient-message" className="block text-xs font-bold uppercase tracking-wider text-[#0A1128] mb-2">
                      Notes or Concerns (Optional)
                    </label>
                    <textarea
                      id="patient-message"
                      rows={3}
                      placeholder="Share any dental symptoms, previous treatments, or special requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 focus:border-[#00B4D8] bg-[#FAFBFC] text-sm text-[#0A1128] focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-[#0A1128] hover:bg-[#0077B6] text-white text-xs font-bold uppercase tracking-wider shadow-soft-lg hover:shadow-cyan-glow transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#90E0EF] group-hover:translate-x-1 transition-transform" />
                        <span>CONFIRM APPOINTMENT REQUEST</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-[#627D98] text-center mt-4">
                    Your personal information is handled with strict medical confidentiality.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
