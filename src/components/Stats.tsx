import React, { useEffect, useRef, useState } from 'react';
import { CLINIC_STATS } from '../data/clinicData';
import { Award, Users, Star, Clock } from 'lucide-react';

export const Stats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setAnimatedValues(CLINIC_STATS.map((s) => s.value));
      return;
    }

    const duration = 2000; // ms
    const startTime = performance.now();

    const frame = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const nextValues = CLINIC_STATS.map((s) => {
        return Number((s.value * eased).toFixed(s.decimals || 0));
      });

      setAnimatedValues(nextValues);

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        setAnimatedValues(CLINIC_STATS.map((s) => s.value));
      }
    };

    const animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, [isInView]);

  const statIcons = [Award, Users, Star, Clock];

  return (
    <section
      ref={containerRef}
      className="relative py-20 bg-[#0A1128] text-white overflow-hidden"
    >
      {/* Subtle background tech accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00B4D8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-32 right-10 w-80 h-80 bg-[#00B4D8]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {CLINIC_STATS.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            const displayVal =
              stat.decimals
                ? animatedValues[idx].toFixed(stat.decimals)
                : animatedValues[idx].toLocaleString();

            return (
              <div
                key={stat.label}
                className="relative p-6 sm:p-8 rounded-3xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 transition-all duration-300 group"
              >
                {/* Accent line */}
                <div className="w-8 h-1 bg-[#00B4D8] rounded-full mb-6 group-hover:w-16 transition-all duration-300" />

                <div className="flex items-center justify-between mb-4">
                  <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white flex items-baseline">
                    <span>{displayVal}</span>
                    <span className="text-[#00B4D8] text-3xl ml-0.5">{stat.suffix}</span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#90E0EF] group-hover:text-white group-hover:bg-[#00B4D8]/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-white mb-1 tracking-tight">
                  {stat.label}
                </h3>
                <p className="text-xs text-white/60">
                  {stat.sublabel}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
