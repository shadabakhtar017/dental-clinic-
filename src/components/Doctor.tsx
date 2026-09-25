import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { GraduationCap, CheckCircle2, Calendar, Star, ShieldCheck, Heart } from 'lucide-react';

interface DoctorProps {
  onOpenBooking: () => void;
}

export const Doctor: React.FC<DoctorProps> = ({ onOpenBooking }) => {
  const { doctor } = CLINIC_INFO;

  return (
    <section id="doctor" className="py-24 sm:py-32 bg-[#FAFBFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Doctor Portrait Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative accent frames */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#00B4D8]/20 via-[#90E0EF]/30 to-transparent blur-xl pointer-events-none" />
              
              <div className="relative rounded-3xl overflow-hidden bg-[#0A1128] border border-black/[0.08] shadow-soft-xl group">
                {/* Doctor Portrait Image */}
                <div className="w-full aspect-[4/5] relative overflow-hidden bg-slate-100">
                  <img
                    src="/images/doctor.jpg"
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient scrim at the bottom for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/95 via-[#0A1128]/40 to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium mb-2 border border-white/20">
                      <Star className="w-3.5 h-3.5 text-[#90E0EF] fill-[#90E0EF]" />
                      <span>Chief Dental Surgeon & Implantologist</span>
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-0.5">
                      {doctor.name}
                    </h3>
                    <p className="text-xs text-[#90E0EF] font-medium tracking-wide">
                      {doctor.qualifications}
                    </p>
                  </div>
                </div>

                {/* Floating Experience Ribbon */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-soft border border-black/[0.06] text-center z-10">
                  <span className="block font-display text-xl font-bold text-[#0077B6] leading-none">
                    9+
                  </span>
                  <span className="text-[10px] font-semibold text-[#627D98] uppercase tracking-wider">
                    Years Exp.
                  </span>
                </div>
              </div>

              {/* Patient Trust Tag below picture */}
              <div className="mt-4 flex items-center justify-between p-4 rounded-2xl bg-white border border-black/[0.06] shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F7FB] text-[#0077B6] flex items-center justify-center">
                    <Heart className="w-5 h-5 text-[#00B4D8]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0A1128]">8,000+ Smiles Treated</p>
                    <p className="text-[11px] text-[#627D98]">Zero-anxiety compassionate care</p>
                  </div>
                </div>
                <ShieldCheck className="w-5 h-5 text-[#00B4D8]" />
              </div>
            </div>
          </div>

          {/* Right: Bio & Qualifications */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-[1.5px] bg-[#00B4D8]" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#0077B6] font-display">
                CLINICAL LEADERSHIP
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A1128] leading-[1.15] mb-4">
              Meet {doctor.name}
            </h2>

            <p className="text-sm sm:text-base font-semibold text-[#0077B6] mb-6">
              9+ years of clinical excellence in dental implantology & smile design.
            </p>

            <p className="text-sm sm:text-base text-[#3E4C59] leading-relaxed mb-6">
              {doctor.bio}
            </p>

            {/* Professional Memberships & Accreditations */}
            <div className="mb-8 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0A1128] mb-3">
                CERTIFICATIONS & ACCREDITATIONS
              </h4>
              {doctor.memberships.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-[#0A1128]">
                  <GraduationCap className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-black/[0.08]">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-[#0A1128] hover:bg-[#0077B6] text-white text-xs font-semibold uppercase tracking-wider shadow-soft-lg hover:shadow-cyan-glow transition-all flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-[#90E0EF]" />
                <span>Schedule Consultation with {doctor.name}</span>
              </button>
              <div className="flex items-center gap-2 text-xs text-[#627D98] justify-center">
                <CheckCircle2 className="w-4 h-4 text-[#00B4D8]" />
                <span>Sirhind City, Punjab</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
