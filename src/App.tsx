import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BackgroundFX } from './components/BackgroundFX';
import { CustomCursor } from './components/CustomCursor';
import Lenis from 'lenis';

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B0B0B] text-[#F5F2ED] selection:bg-[#8B0D1A] selection:text-[#F5F2ED]">
      <CustomCursor />
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
