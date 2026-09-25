import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Disable on touch / mobile devices or if user prefers reduced motion
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Check hovered elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest('button, a, input, select, textarea, [role="button"], .interactive-element');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousemove', handleElementHover, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Precision inner dot */}
      <div
        className="custom-cursor-dot transition-transform duration-75 pointer-events-none"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${isHovered ? 0.5 : 1})`,
          width: '8px',
          height: '8px',
          backgroundColor: '#00B4D8',
          boxShadow: '0 0 10px rgba(0, 180, 216, 0.8)',
        }}
      />
      {/* Outer magnetic follower ring */}
      <div
        className="custom-cursor-dot transition-all duration-200 pointer-events-none"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${isHovered ? 1.7 : 1})`,
          width: '36px',
          height: '36px',
          border: isHovered ? '1.5px solid #00B4D8' : '1px solid rgba(10, 17, 40, 0.25)',
          backgroundColor: isHovered ? 'rgba(0, 180, 216, 0.08)' : 'transparent',
          backdropFilter: isHovered ? 'blur(2px)' : 'none',
        }}
      />
    </>
  );
};
