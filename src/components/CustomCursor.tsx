import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Desktop only & respect prefers-reduced-motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const el = glowRef.current;
    if (!el) return;

    // Show the glow once we have a mouse position
    el.style.opacity = '0';

    const SIZE = 450;
    const HALF = SIZE / 2;
    const LERP = 0.35;

    let currentX = -1000;
    let currentY = -1000;
    let targetX = -1000;
    let targetY = -1000;
    let rafId: number;
    let started = false;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!started) {
        currentX = targetX;
        currentY = targetY;
        el.style.opacity = '1';
        started = true;
      }
    };

    const tick = () => {
      // Lerp toward mouse
      currentX += (targetX - currentX) * LERP;
      currentY += (targetY - currentY) * LERP;
      el.style.transform = `translate3d(${currentX - HALF}px, ${currentY - HALF}px, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 pointer-events-none z-30"
      aria-hidden="true"
      style={{
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(200,25,45,0.55) 0%, rgba(139,13,26,0.25) 40%, transparent 70%)',
        willChange: 'transform',
        opacity: 0,
      }}
    />
  );
};
