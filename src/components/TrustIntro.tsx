import React from 'react';
import { Sparkles, Shield, Cpu, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const TrustIntro: React.FC = () => {
  const highlights = [
    {
      icon: Cpu,
      title: 'Digital Accuracy',
      desc: 'Sub-millimeter 3D intraoral optical scanning for crowns, aligners, and guided implant placement.'
    },
    {
      icon: HeartHandshake,
      title: 'Gentle Clinical Protocols',
      desc: 'Computerized anesthesia and soothing sound-buffered suites engineered specifically for nervous patients.'
    },
    {
      icon: Shield,
      title: 'Biomimetic Materials',
      desc: 'Non-toxic, metal-free monolithic zirconia and lithium disilicate matching real enamel resilience.'
    }
  ];

  return (
    <section id="trust" className="relative py-24 sm:py-32 bg-[#FAFBFC] border-t border-black/[0.04] overflow-hidden">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#00B4D8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#90E0EF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Tag */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-[1.5px] bg-[#00B4D8]" />
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#0077B6] font-display">
            PHILOSOPHY & EXCELLENCE
          </span>
        </div>

        {/* Large Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0A1128] leading-[1.12] mb-8">
              Advanced dentistry. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] to-[#00B4D8]">
                A more comfortable experience.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#3E4C59] leading-relaxed mb-6">
              At Ankit Dental Implant Centre, we believe that world-class oral healthcare begins with 
              uncompromising comfort. Traditional dental visits often carried clinical apprehension; 
              we have re-engineered every touchpoint to feel calming, transparent, and restorative.
            </p>

            <p className="text-base sm:text-lg text-[#627D98] leading-relaxed mb-10">
              By pairing state-of-the-art 3D imaging and computer-assisted restorations with Dr. Ankit’s 
              gentle, empathetic approach, your treatments are completed with remarkable speed, minimal downtime, 
              and results that look effortlessly natural.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'Single-Sitting Digital Procedures',
                'Comprehensive Smile Symmetry Analysis',
                'Strict Hospital-Grade Class B Sterilization',
                'Transparent Treatment Estimates'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm font-medium text-[#0A1128]">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Split-screen Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Outer decorative card */}
              <div className="relative rounded-3xl bg-gradient-to-br from-white to-[#F4F7FB] p-6 sm:p-8 shadow-soft-xl border border-black/[0.06] overflow-hidden">
                {/* Tech Badge */}
                <div className="flex items-center justify-between pb-6 border-b border-black/[0.06] mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#00B4D8] animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0A1128]">
                      ANKIT DENTAL CARE MATRIX
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#627D98]">EST. SIRHIND, PUNJAB</span>
                </div>

                {/* 3 Pillars */}
                <div className="space-y-5">
                  {highlights.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white/90 hover:bg-white border border-black/[0.04] shadow-sm hover:shadow-soft transition-all duration-300 group"
                      >
                        <div className="flex items-start gap-3.5">
                          <div className="w-10 h-10 rounded-xl bg-[#E8F7FB] text-[#0077B6] group-hover:bg-[#00B4D8] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-sm font-bold text-[#0A1128] mb-1 group-hover:text-[#0077B6] transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-xs text-[#627D98] leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Quote Banner */}
                <div className="mt-6 pt-5 border-t border-black/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#00B4D8]" />
                    <span className="text-xs font-semibold text-[#0A1128]">Zero-Pressure Consultations</span>
                  </div>
                  <span className="text-xs text-[#0077B6] font-semibold">Sirhind City Studio</span>
                </div>
              </div>

              {/* Floating accent card offset */}
              <div className="absolute -bottom-6 -left-6 bg-[#0A1128] text-white p-4 rounded-2xl shadow-soft-lg hidden sm:flex items-center gap-3 border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-[#00B4D8]/20 flex items-center justify-center text-[#90E0EF]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold">100% Digital Workflow</p>
                  <p className="text-[11px] text-white/60">No messy dental impressions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
