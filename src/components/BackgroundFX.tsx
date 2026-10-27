import React from 'react';

export const BackgroundFX: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Film grain */}
      <div className="absolute inset-0 grain-overlay opacity-40 mix-blend-screen" />

      {/* Top Left Deep Crimson Radial Glow */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#8B0D1A]/18 blur-[140px]" />

      {/* Hero Right Ambient Rim Glow */}
      <div className="absolute top-1/4 -right-40 w-[550px] h-[700px] rounded-full bg-[#8B0D1A]/14 blur-[160px]" />

      {/* Bottom Center Subtle Glow */}
      <div className="absolute bottom-0 left-1/3 w-[800px] h-[450px] rounded-full bg-[#8B0D1A]/10 blur-[180px]" />
    </div>
  );
};

export const FleurDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-4 py-8 select-none ${className}`}>
      <div className="h-[1px] w-24 sm:w-36 bg-gradient-to-r from-transparent via-[#8B0D1A]/40 to-[#8B0D1A]" />
      <div className="relative flex items-center justify-center text-[#8B0D1A]">
        {/* Diamond with glowing core */}
        <span className="w-2 h-2 rotate-45 bg-[#8B0D1A] shadow-[0_0_8px_#8B0D1A]" />
        <span className="absolute -top-1 w-4 h-4 rounded-full border border-[#8B0D1A]/30 animate-pulse" />
      </div>
      <div className="h-[1px] w-24 sm:w-36 bg-gradient-to-l from-transparent via-[#8B0D1A]/40 to-[#8B0D1A]" />
    </div>
  );
};
