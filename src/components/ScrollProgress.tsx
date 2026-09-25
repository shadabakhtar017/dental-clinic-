import React, { useEffect, useRef } from 'react';

export const ScrollProgress: React.FC = () => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0 && progressBarRef.current) {
        const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1);
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[3px] z-[100] pointer-events-none bg-transparent"
      aria-hidden="true"
    >
      <div
        ref={progressBarRef}
        className="h-full w-full bg-gradient-to-r from-[#00B4D8] via-[#0077B6] to-[#0A1128] origin-left will-change-transform"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
};
