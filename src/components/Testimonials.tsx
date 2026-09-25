import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/clinicData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-[#FAFBFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-[1.5px] bg-[#00B4D8]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#0077B6] font-display">
                PATIENT EXPERIENCES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A1128] leading-[1.12]">
              Words from our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] to-[#00B4D8]">
                smiling patients.
              </span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-black/10 bg-white hover:bg-[#0A1128] hover:text-white flex items-center justify-center transition-all shadow-sm focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-black/10 bg-white hover:bg-[#0A1128] hover:text-white flex items-center justify-center transition-all shadow-sm focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid & Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => {
            const isFeatured = idx === currentIndex;
            return (
              <div
                key={t.id}
                className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between border ${
                  isFeatured
                    ? 'bg-white shadow-soft-xl border-[#00B4D8]/40 ring-2 ring-[#00B4D8]/20'
                    : 'bg-white/70 hover:bg-white border-black/[0.06] shadow-soft'
                }`}
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-[#00B4D8]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-[#00B4D8]" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#CBD5E1]" />
                  </div>

                  {/* Quote */}
                  <p className="text-sm sm:text-base text-[#0A1128] leading-relaxed mb-6 font-medium italic">
                    "{t.quote}"
                  </p>
                </div>

                {/* Patient Author info */}
                <div className="pt-5 border-t border-black/[0.06]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-[#0A1128]">{t.name}</h3>
                      <p className="text-xs text-[#627D98]">{t.role}</p>
                    </div>
                    <span className="flex items-center gap-1 text-[11px] text-[#0077B6] font-medium bg-[#E8F7FB] px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-[#00B4D8]" /> Verified
                    </span>
                  </div>
                  <p className="text-[11px] font-semibold text-[#0077B6] mt-2">
                    Procedure: {t.treatment}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
