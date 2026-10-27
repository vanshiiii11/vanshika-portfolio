import React, { useState, useEffect } from 'react';
import { portfolioConfig, EditorialPillar } from '../data/portfolioData';

// ---------- Typewriter role hook ----------
function useTypewriter(roles: string[], reducedMotion: boolean) {
  const [display, setDisplay] = useState(reducedMotion ? roles[0] : '');
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    if (reducedMotion) {
      setDisplay(roles[0]);
      return;
    }

    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let pausing = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const TYPE_SPEED = 70;
    const DELETE_SPEED = 40;
    const PAUSE_AFTER = 1800;
    const PAUSE_BEFORE = 300;

    const tick = () => {
      const current = roles[roleIdx];

      if (pausing) {
        pausing = false;
        deleting = true;
        timeoutId = setTimeout(tick, PAUSE_BEFORE);
        return;
      }

      if (!deleting) {
        // Typing
        charIdx++;
        setDisplay(current.slice(0, charIdx));
        if (charIdx === current.length) {
          pausing = true;
          timeoutId = setTimeout(tick, PAUSE_AFTER);
        } else {
          timeoutId = setTimeout(tick, TYPE_SPEED);
        }
      } else {
        // Deleting
        charIdx--;
        setDisplay(current.slice(0, charIdx));
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          timeoutId = setTimeout(tick, TYPE_SPEED);
        } else {
          timeoutId = setTimeout(tick, DELETE_SPEED);
        }
      }
    };

    timeoutId = setTimeout(tick, 400);
    return () => clearTimeout(timeoutId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion]);

  // Blinking caret
  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => setShowCaret((v) => !v), 530);
    return () => clearInterval(id);
  }, [reducedMotion]);

  return { display, showCaret };
}

import { MapPin, ArrowDown, FileText, Code2, PlusCircle } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

interface RotatingBulletProps {
  pillar: EditorialPillar;
  staggerMs: number;
  isPaused: boolean;
  reducedMotion: boolean;
}

const RotatingBullet: React.FC<RotatingBulletProps> = ({
  pillar,
  staggerMs,
  isPaused,
  reducedMotion,
}) => {
  const [index, setIndex] = useState(0);
  const [animState, setAnimState] = useState<'visible' | 'exiting' | 'entering'>('visible');
  const descriptions = pillar.descriptions;

  useEffect(() => {
    if (reducedMotion) return;

    let intervalId: ReturnType<typeof setInterval>;

    const initialTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        if (!isPaused) {
          // 1. Begin exit: crossfade + upward slide out
          setAnimState('exiting');

          setTimeout(() => {
            // 2. Switch text and stage below (+8px)
            setIndex((prev) => (prev + 1) % descriptions.length);
            setAnimState('entering');

            // 3. Slide up to 0px + fade in (600ms total transition)
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                setAnimState('visible');
              });
            });
          }, 280);
        }
      }, 5000);
    }, staggerMs);

    return () => {
      clearTimeout(initialTimer);
      if (intervalId) clearInterval(intervalId);
    };
  }, [descriptions.length, isPaused, reducedMotion, staggerMs]);

  // Transition style mapping
  const getTextStyle = () => {
    if (reducedMotion) {
      return 'opacity-60 translate-y-0';
    }
    switch (animState) {
      case 'exiting':
        return 'opacity-0 -translate-y-2 transition-all duration-300 ease-in';
      case 'entering':
        return 'opacity-0 translate-y-2';
      case 'visible':
      default:
        return 'opacity-60 translate-y-0 transition-all duration-300 ease-out';
    }
  };

  return (
    <div className="group flex flex-col text-left">
      <div className="flex items-start gap-2 mb-1">
        <span className="text-[#8B0D1A] font-bold text-base leading-none mt-0.5">+</span>
        <span className="text-xs font-semibold uppercase tracking-wider text-[#F5F2ED] group-hover:text-[#8B0D1A] transition-colors">
          {pillar.title}
        </span>
      </div>

      {/* Fixed reserved height (38px) so the layout never jumps */}
      <div className="h-[38px] pl-4 relative overflow-hidden flex items-start">
        <p className={`text-[11px] text-[#F5F2ED] leading-snug transform will-change-transform ${getTextStyle()}`}>
          {descriptions[reducedMotion ? 0 : index]}
        </p>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const [isBulletsHovered, setIsBulletsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReduced);
  }, []);

  const { display: roleDisplay, showCaret } = useTypewriter(
    portfolioConfig.personal.typewriterRoles,
    reducedMotion
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-16 pb-12 px-6 sm:px-8 lg:px-12 overflow-hidden bg-[#0B0B0B]"
    >
      {/* 1. GIANT BACKGROUND DISPLAY TEXT: "VANSHIKA" (z-0, behind portrait and left text) */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden -translate-y-[50px]"
        aria-hidden="true"
      >
        {/* Desktop single line: Scaled ~1.5x taller, positioned so its center sits at chest/shoulder level (~60-65% down portrait) */}
        <span
          className="hidden md:block font-display font-black tracking-tighter text-[23vw] leading-none uppercase translate-y-[14%]"
          style={{
            letterSpacing: '-0.04em',
            transform: 'translateY(12%) scaleY(1.45)',
            transformOrigin: 'center center',
            background: 'linear-gradient(to bottom, rgba(139, 13, 26, 0.85) 0%, rgba(139, 13, 26, 0.65) 45%, rgba(139, 13, 26, 0.12) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          VANSHIKA
        </span>
        {/* Mobile stacked two lines */}
        <div
          className="md:hidden flex flex-col items-center justify-center font-display font-black tracking-tighter text-[32vw] leading-[0.8] uppercase translate-y-4"
          style={{
            transform: 'scaleY(1.3)',
            background: 'linear-gradient(to bottom, rgba(139, 13, 26, 0.85) 0%, rgba(139, 13, 26, 0.50) 50%, rgba(139, 13, 26, 0.12) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          <span>VAN</span>
          <span>SHIKA</span>
        </div>
      </div>

      {/* Soft dark gradient behind left text column to guarantee 100% readability */}
      <div
        className="absolute inset-y-0 left-0 w-[55%] pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to right, rgba(11, 11, 11, 0.88) 0%, rgba(11, 11, 11, 0.65) 40%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      {/* 2. MAIN HERO CONTENT GRID (z-10, ABOVE BACKGROUND TEXT, shifted up ~50px together with background text) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end my-auto min-h-[calc(100vh-170px)] -translate-y-[50px]">
        {/* LEFT COLUMN: Name, Pitch, Role & CTAs (5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left order-2 lg:order-1 pt-4 lg:pt-0 pb-6 lg:pb-10 z-20">
          {/* Script Greeting */}
          <div className="mb-1">
            <span className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#8B0D1A] tracking-wide inline-block">
              Hello, I'm
            </span>
          </div>

          {/* Full Name in Giant Condensed Display */}
          <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase text-[#F5F2ED] leading-[0.92] mb-3">
            VANSHIKA
            <span className="block text-[#F5F2ED]/90">MOTWANI</span>
          </h1>

          {/* Typewriter Role Line — high contrast crimson-bright (#C8192D) / off-white, reserved fixed height, blinking caret */}
          <div className="h-8 flex items-center gap-2 mb-6" aria-label={`Role: ${roleDisplay}`}>
            <span className="w-2 h-2 rounded-full bg-[#C8192D] flex-shrink-0 shadow-[0_0_8px_#C8192D]" />
            <span className="font-mono text-sm sm:text-base text-[#C8192D] tracking-wider uppercase font-bold whitespace-nowrap overflow-hidden">
              {roleDisplay}
              <span
                className="inline-block w-[2px] h-[1.1em] align-middle ml-[2px] bg-[#C8192D]"
                style={{ opacity: showCaret ? 1 : 0 }}
              />
            </span>
          </div>

          {/* 3-Line Strategic Pitch */}
          <p className="text-sm sm:text-base md:text-lg text-[#F5F2ED]/85 font-normal leading-relaxed max-w-md mb-6">
            {portfolioConfig.personal.pitch}
          </p>

          {/* Location Badge: Only "BASED IN INDIA" */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#F5F2ED]/70 mb-8 uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-[#C8192D]" />
            <span>BASED IN INDIA</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full bg-[#8B0D1A] hover:bg-[#A8111F] text-[#F5F2ED] text-xs font-mono tracking-widest uppercase font-semibold transition-all duration-300 shadow-[0_4px_25px_rgba(139,13,26,0.35)] hover:shadow-[0_6px_30px_rgba(139,13,26,0.55)] hover:-translate-y-0.5 cursor-pointer"
            >
              View My Work
            </a>

            <a
              href={portfolioConfig.urls.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#F5F2ED]/25 hover:border-[#F5F2ED] text-[#F5F2ED] text-xs font-mono tracking-widest uppercase transition-all duration-300 hover:bg-[#F5F2ED]/5"
            >
              <FileText className="w-3.5 h-3.5 text-[#C8192D]" />
              <span>Resume</span>
            </a>
          </div>

          {/* Outlined Social Icon Circles: GitHub, LinkedIn, LeetCode only */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href={portfolioConfig.urls.github}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-[#F5F2ED]/15 hover:border-[#8B0D1A] flex items-center justify-center text-[#F5F2ED]/70 hover:text-[#F5F2ED] hover:bg-[#8B0D1A]/10 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioConfig.urls.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-[#F5F2ED]/15 hover:border-[#8B0D1A] flex items-center justify-center text-[#F5F2ED]/70 hover:text-[#F5F2ED] hover:bg-[#8B0D1A]/10 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioConfig.urls.leetcode}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-[#F5F2ED]/15 hover:border-[#8B0D1A] flex items-center justify-center text-[#F5F2ED]/70 hover:text-[#F5F2ED] hover:bg-[#8B0D1A]/10 transition-all"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* CENTER / RIGHT: Cutout Portrait (~92% hero height, whole upper body drawn on top of text) */}
        <div className="lg:col-span-4 relative flex items-end justify-center order-1 lg:order-2 select-none z-20 h-full">
          <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] flex items-end justify-center">
            {/* 3. Compact backlight glow behind head only (~400px at rgba(168,17,31,0.25)) */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[380px] h-[350px] rounded-full pointer-events-none -z-10"
              style={{
                background: 'radial-gradient(circle, rgba(168, 17, 31, 0.25) 0%, rgba(168, 17, 31, 0.08) 50%, transparent 70%)',
              }}
            />

            <div className="relative overflow-visible flex items-end justify-center w-full">
              <img
                src={portfolioConfig.personal.photo.src}
                alt={portfolioConfig.personal.photo.alt}
                width={1133}
                height={1388}
                className="w-auto h-auto max-h-[600px] sm:max-h-[720px] lg:max-h-[92vh] object-contain mx-auto"
                style={{
                  filter: 'grayscale(1) contrast(1.18) brightness(1.04) drop-shadow(0 0 14px rgba(168, 17, 31, 0.35)) drop-shadow(0 20px 30px rgba(0, 0, 0, 0.95))',
                }}
                loading="eager"
                fetchPriority="high"
              />

              {/* Shortened bottom fade to only the final 8% */}
              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Editorial Pillars with Staggered Descriptions (3 cols on lg) */}
        <div
          className="lg:col-span-3 hidden lg:flex flex-col justify-center order-3 pl-4 pb-10 z-20"
          onMouseEnter={() => setIsBulletsHovered(true)}
          onMouseLeave={() => setIsBulletsHovered(false)}
        >
          {/* Tagline Card */}
          <div className="p-4 rounded-xl border border-[#F5F2ED]/10 bg-[#121212]/70 backdrop-blur-sm mb-6">
            <div className="flex items-center gap-2 text-[#8B0D1A] mb-2">
              <PlusCircle className="w-4 h-4" />
              <span className="text-[10px] font-mono tracking-widest uppercase">Philosophy</span>
            </div>
            <p className="text-xs text-[#F5F2ED]/90 font-medium leading-relaxed">
              "Building reliable products, end to end."
            </p>
          </div>

          {/* Three Staggered Rotating Bullets */}
          <div className="flex flex-col gap-4">
            {portfolioConfig.editorialPillars.map((pillar, i) => (
              <RotatingBullet
                key={pillar.title}
                pillar={pillar}
                staggerMs={i * 1500}
                isPaused={isBulletsHovered}
                reducedMotion={reducedMotion}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. HERO BOTTOM BAR */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 flex items-center justify-between border-t border-[#F5F2ED]/10 text-xs font-mono text-[#F5F2ED]/50">
        <div className="flex items-center gap-6">
          <span>VIT Bhopal CSE '27 (CGPA 9.13)</span>
          <span className="hidden sm:inline text-[#8B0D1A]">•</span>
          <span className="hidden sm:inline">Tested REST & SQL Architectures</span>
        </div>

        <a
          href="#projects"
          className="flex items-center gap-2 text-[#F5F2ED]/70 hover:text-[#8B0D1A] transition-colors cursor-pointer group"
        >
          <span className="uppercase tracking-widest text-[11px]">Explore Selected Works</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-[#8B0D1A]" />
        </a>
      </div>
    </section>
  );
};
