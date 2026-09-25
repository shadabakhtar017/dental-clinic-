import React from 'react';
import { TECHNOLOGIES } from '../data/clinicData';
import { Eye, CheckCircle2, ShieldCheck, Activity, Radio } from 'lucide-react';

export const Technology: React.FC = () => {
  const techIcons = [Eye, Radio, ShieldCheck];

  return (
    <section id="technology" className="py-24 sm:py-32 bg-[#F4F7FB] relative overflow-hidden">
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#00B4D8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0077B6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-[1.5px] bg-[#00B4D8]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#0077B6] font-display">
              CLINICAL INNOVATION
            </span>
            <div className="w-6 h-[1.5px] bg-[#00B4D8]" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A1128] leading-[1.12] mb-4">
            Modern technology. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077B6] to-[#00B4D8]">
              Gentler dentistry.
            </span>
          </h2>
          <p className="text-base text-[#627D98] leading-relaxed">
            By eliminating outdated manual guesswork and invasive techniques, our digital equipment 
            ensures precise diagnoses, faster recoveries, and a remarkably comfortable chairside experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TECHNOLOGIES.map((tech, idx) => {
            const Icon = techIcons[idx % techIcons.length];
            return (
              <div
                key={tech.id}
                className="bg-white rounded-3xl p-8 shadow-soft-lg hover:shadow-soft-xl border border-black/[0.06] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#E8F7FB] text-[#0077B6] group-hover:bg-[#00B4D8] group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0077B6] bg-[#E8F7FB] px-3 py-1 rounded-full">
                      {tech.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#0A1128] mb-2">
                    {tech.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#0077B6] mb-4">
                    {tech.subtitle}
                  </p>
                  <p className="text-xs text-[#627D98] leading-relaxed mb-6">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-2 pt-6 border-t border-black/[0.06]">
                  <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-black/[0.04] mb-4">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#627D98] mb-2">
                      <span>STATUS: CALIBRATED</span>
                      <span className="text-[#00B4D8] flex items-center gap-1">
                        <Activity className="w-3 h-3 animate-pulse" /> 100%
                      </span>
                    </div>
                    <div className="w-full bg-[#E2E8F0] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] h-full rounded-full animate-pulse" style={{ width: '88%' }} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    {tech.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#3E4C59]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00B4D8] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
