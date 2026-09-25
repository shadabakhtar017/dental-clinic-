import React, { useState } from 'react';
import { TREATMENTS, type TreatmentItem } from '../data/clinicData';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Calendar,
  Layers,
  Activity,
  Smile,
  Zap,
  Shield,
  Heart,
  Eye,
  Sparkles
} from 'lucide-react';

interface TreatmentsProps {
  onSelectTreatmentForBooking: (treatmentTitle: string) => void;
}

export const Treatments: React.FC<TreatmentsProps> = ({ onSelectTreatmentForBooking }) => {
  const [activeTreatment, setActiveTreatment] = useState<TreatmentItem>(TREATMENTS[0]);

  // Icon mapping for 8 treatments
  const treatmentIcons = [
    Layers,       // 01 Dental Implants
    Zap,          // 02 Root Canal
    Sparkles,     // 03 Teeth Whitening
    Smile,        // 04 Invisible Aligners
    Activity,     // 05 Cosmetic Dentistry
    Shield,       // 06 Crowns & Bridges
    Heart,        // 07 Pediatric
    Eye           // 08 Preventive
  ];

  return (
    <section id="treatments" className="py-24 sm:py-32 bg-[#FAFBFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-[1.5px] bg-[#00B4D8]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#0077B6] font-display">
                CLINICAL PROCEDURES
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A1128] leading-[1.12]">
              Care designed around <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] to-[#00B4D8]">
                your smile.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#627D98] leading-relaxed">
            Every procedure at Ankit Dental Implant Centre combines biomimetic clinical principles with digital accuracy, 
            ensuring your treatments are conservative, comfortable, and enduring.
          </p>
        </div>

        {/* Desktop Split Layout (Interactive List + Sticky Preview) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Treatment List */}
          <div className="lg:col-span-7 space-y-3">
            {TREATMENTS.map((treatment, idx) => {
              const Icon = treatmentIcons[idx % treatmentIcons.length];
              const isActive = activeTreatment.id === treatment.id;

              return (
                <div
                  key={treatment.id}
                  onMouseEnter={() => setActiveTreatment(treatment)}
                  onClick={() => setActiveTreatment(treatment)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-between border ${
                    isActive
                      ? 'bg-white shadow-soft-lg border-[#00B4D8]/40 translate-x-2'
                      : 'bg-white/60 hover:bg-white border-black/[0.04] hover:shadow-soft'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-sm font-bold text-[#00B4D8]">
                      {treatment.number}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#00B4D8] text-white' : 'bg-[#E8F7FB] text-[#0077B6]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0A1128]">
                        {treatment.title}
                      </h3>
                      <p className="text-xs text-[#627D98] line-clamp-1">
                        {treatment.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-[#627D98] bg-[#F4F7FB] px-2.5 py-1 rounded-full">
                      {treatment.duration}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isActive ? 'bg-[#0A1128] text-white rotate-0' : 'text-[#627D98] -rotate-45'
                    }`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Active Treatment Preview Panel */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="rounded-3xl bg-white p-8 shadow-soft-xl border border-black/[0.06] relative overflow-hidden">
              {/* Background gradient orb */}
              <div className="absolute -top-20 -right-20 w-52 h-52 bg-[#00B4D8]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Number and Badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-[#0077B6] bg-[#E8F7FB] px-3 py-1 rounded-full">
                  PROCEDURE {activeTreatment.number} OF 08
                </span>
                <span className="text-xs text-[#627D98] flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#00B4D8]" />
                  {activeTreatment.duration}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display text-2xl font-bold text-[#0A1128] mb-2">
                {activeTreatment.title}
              </h3>
              <p className="text-xs font-medium text-[#0077B6] uppercase tracking-wider mb-4">
                {activeTreatment.tagline}
              </p>
              <p className="text-sm text-[#3E4C59] leading-relaxed mb-6">
                {activeTreatment.description}
              </p>

              {/* Clinical Benefits */}
              <div className="space-y-3 mb-6 pb-6 border-b border-black/[0.06]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1128]">
                  KEY ADVANTAGES
                </h4>
                {activeTreatment.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#3E4C59]">
                    <CheckCircle2 className="w-4 h-4 text-[#00B4D8] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Recommended For */}
              <div className="mb-8">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#627D98] block mb-1">
                  Ideal candidate:
                </span>
                <p className="text-xs font-medium text-[#0A1128] bg-[#F4F7FB] p-2.5 rounded-xl border border-black/[0.04]">
                  {activeTreatment.recommendedFor}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectTreatmentForBooking(activeTreatment.title)}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#0A1128] hover:bg-[#0077B6] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-cyan-glow transition-all flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-[#90E0EF]" />
                <span>BOOK FOR {activeTreatment.title.toUpperCase()}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Card Layout */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
          {TREATMENTS.map((treatment, idx) => {
            const Icon = treatmentIcons[idx % treatmentIcons.length];
            return (
              <div
                key={treatment.id}
                className="p-6 rounded-2xl bg-white border border-black/[0.06] shadow-soft flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#00B4D8]">
                      {treatment.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#E8F7FB] text-[#0077B6] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1128] mb-1">
                    {treatment.title}
                  </h3>
                  <p className="text-xs text-[#0077B6] font-medium mb-3">
                    {treatment.tagline}
                  </p>
                  <p className="text-xs text-[#627D98] leading-relaxed mb-4">
                    {treatment.description}
                  </p>
                  <div className="space-y-1.5 mb-4">
                    {treatment.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#3E4C59]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00B4D8] flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                  <span className="text-xs text-[#627D98]">{treatment.duration}</span>
                  <button
                    onClick={() => onSelectTreatmentForBooking(treatment.title)}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#0A1128] hover:bg-[#0077B6] rounded-xl flex items-center gap-1.5"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
