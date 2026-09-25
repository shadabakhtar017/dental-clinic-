import React from 'react';
import { ThreeCanvas } from './ThreeCanvas';
import { ArrowRight, Award, ShieldCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToTreatments = () => {
    const treatmentsEl = document.querySelector('#treatments');
    if (treatmentsEl) {
      treatmentsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTrust = () => {
    const trustEl = document.querySelector('#trust');
    if (trustEl) {
      trustEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] lg:min-h-[105vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 overflow-hidden tech-grid-pattern bg-[#FAFBFC]"
    >
      {/* 3D WebGL Dental Visual Canvas Container */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-90 transition-opacity">
        <ThreeCanvas className="w-full h-full" />
      </div>

      {/* Atmospheric Soft Radiant Ambient Background Blurs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00B4D8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#90E0EF]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle radial gradient overlay to preserve extreme text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAFBFC]/50 via-transparent to-[#FAFBFC] pointer-events-none z-0" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#00B4D8]/30 shadow-sm mb-6 animate-fade-in">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B4D8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B4D8]"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#0A1128] font-display">
              MODERN DENTISTRY • PERSONALIZED CARE
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A1128] leading-[1.08] mb-6">
            Your Smile, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0A1128] via-[#0077B6] to-[#00B4D8]">
              Designed to Shine.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-[#3E4C59] max-w-2xl leading-relaxed mb-10 font-normal">
            Modern, comfortable, and personalized dental care for healthier smiles. 
            Combining precision digital diagnostics with an anxiety-free, gentle experience 
            in the heart of Sirhind City, Punjab.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mb-12">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#0A1128] hover:bg-[#0077B6] rounded-full shadow-soft-lg hover:shadow-cyan-glow transition-all duration-300 flex items-center justify-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
            >
              <span>BOOK AN APPOINTMENT</span>
              <ArrowRight className="w-4 h-4 text-[#90E0EF] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={scrollToTreatments}
              className="px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#0A1128] bg-white/80 hover:bg-white border border-black/10 rounded-full shadow-sm hover:shadow-soft transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#0A1128]"
            >
              <span>EXPLORE TREATMENTS</span>
            </button>
          </div>

          {/* Trust Highlights Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-black/[0.08] max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E8F7FB] flex items-center justify-center text-[#0077B6]">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0A1128]">Dr. Ankit</p>
                <p className="text-[11px] text-[#627D98]">BDS, MDS • 9+ Yrs Exp</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E8F7FB] flex items-center justify-center text-[#0077B6]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0A1128]">Sirhind City</p>
                <p className="text-[11px] text-[#627D98]">Punjab, India</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#E8F7FB] flex items-center justify-center text-[#0077B6]">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0A1128]">Zero-Anxiety Care</p>
                <p className="text-[11px] text-[#627D98]">Computerized Gentle Anesthesia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center mt-6">
        <button
          onClick={scrollToTrust}
          className="flex flex-col items-center text-[#627D98] hover:text-[#0A1128] transition-colors focus:outline-none group"
          aria-label="Scroll down to explore clinic philosophy"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-2 group-hover:tracking-[0.25em] transition-all">
            Scroll to discover
          </span>
          <div className="w-5 h-8 rounded-full border border-[#CBD5E1] flex items-start justify-center p-1 group-hover:border-[#00B4D8] transition-colors">
            <div className="w-1.5 h-2 bg-[#00B4D8] rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
};
