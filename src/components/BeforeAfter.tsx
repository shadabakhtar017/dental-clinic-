import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal, AlertCircle } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  }, [isDragging, handleMove]);

  return (
    <section id="transformations" className="py-24 sm:py-32 bg-[#F4F7FB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-6 h-[1.5px] bg-[#00B4D8]" />
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#0077B6] font-display">
              SMILE TRANSFORMATION
            </span>
            <div className="w-6 h-[1.5px] bg-[#00B4D8]" />
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A1128] leading-[1.12] mb-4">
            Artistry meets digital precision.
          </h2>
          <p className="text-base text-[#627D98] leading-relaxed">
            Drag the slider to interactively compare simulated restorative and aesthetic outcomes. 
            Every transformation is uniquely tailored to facial proportions and biological harmony.
          </p>
        </div>

        {/* Comparison Slider Container */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[480px] rounded-3xl overflow-hidden shadow-soft-xl border border-black/[0.08] select-none cursor-ew-resize bg-[#E2E8F0]"
          >
            {/* "After" Image / Layer (Full background) */}
            <div className="absolute inset-0 bg-[#0A1128] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#0D2040] to-[#0077B6] opacity-90" />
              {/* Stylized Aesthetic Teeth After Vector */}
              <div className="relative text-center p-8 text-white z-10">
                <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-[#90E0EF]" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#00B4D8] text-white text-[11px] font-bold tracking-wider uppercase mb-2">
                  RESTORED AESTHETICS (AFTER)
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                  Luminous Biomimetic Alignment
                </h3>
                <p className="text-xs sm:text-sm text-[#90E0EF] max-w-sm mx-auto">
                  Even tooth shade, balanced smile line, closed midline diastema, and monolithic zirconia durability.
                </p>
              </div>
            </div>

            {/* "Before" Layer (Clipped by slider position) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden bg-[#2D3748]"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#1A202C] to-[#2D3748] flex items-center justify-center">
                <div className="text-center p-8 text-white w-[360px] sm:w-[480px] max-w-none">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-3xl bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center">
                    <MoveHorizontal className="w-12 h-12 text-white/50" />
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white/90 text-[11px] font-bold tracking-wider uppercase mb-2">
                    INITIAL PRESENTATION (BEFORE)
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2 text-white/80">
                    Discoloration & Spacing
                  </h3>
                  <p className="text-xs sm:text-sm text-white/60 max-w-sm mx-auto">
                    Micro-fractures, coffee/tea enamel staining, and irregular incisal edges prior to digital care.
                  </p>
                </div>
              </div>
            </div>

            {/* Vertical Divider Line with Grab Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-lg pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl border-2 border-[#00B4D8] flex items-center justify-center text-[#0A1128]">
                <MoveHorizontal className="w-5 h-5 text-[#0077B6]" />
              </div>
            </div>

            {/* Tags on bottom corners */}
            <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
              <span className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                BEFORE
              </span>
            </div>
            <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
              <span className="px-3 py-1.5 rounded-xl bg-[#00B4D8]/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider">
                AFTER
              </span>
            </div>
          </div>

          {/* Mandatory Healthcare Legal Disclaimer */}
          <div className="mt-4 flex items-start gap-2.5 p-3.5 rounded-2xl bg-white border border-black/[0.06] text-[#627D98] text-xs">
            <AlertCircle className="w-4 h-4 text-[#00B4D8] flex-shrink-0 mt-0.5" />
            <p>
              <strong>SAMPLE / DEMO IMAGERY:</strong> Visual representations are illustrative 
              demonstrations of restorative capabilities. Individual dental results vary according to 
              clinical anatomy, bone structure, and post-procedure oral hygiene. No medical outcome guarantees are implied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
