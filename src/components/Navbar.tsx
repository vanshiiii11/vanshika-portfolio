import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenAiBuddy?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAiBuddy }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'work', 'skills', 'process', 'experience', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0B]/85 backdrop-blur-md border-b border-[#F5F2ED]/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Micro Headline */}
        <a
          href="#hero"
          className="flex flex-col group text-left tracking-wider"
          aria-label="Vanshika Motwani - Home"
        >
          <span className="text-[11px] sm:text-xs font-mono font-medium text-[#8B0D1A] group-hover:text-[#A8111F] transition-colors flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8B0D1A] animate-ping" />
            {portfolioConfig.personal.metaHeadline}
          </span>
          <span className="text-sm font-semibold tracking-widest text-[#F5F2ED] uppercase opacity-90">
            VANSHIKA MOTWANI
          </span>
        </a>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-[#F5F2ED]/70">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`transition-colors hover:text-[#F5F2ED] relative py-1 ${
                activeSection === link.id ? 'text-[#F5F2ED] font-semibold' : ''
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8B0D1A]" />
              )}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* AI Buddy Trigger Button */}
          {onOpenAiBuddy && (
            <button
              onClick={onOpenAiBuddy}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#8B0D1A]/50 bg-[#8B0D1A]/10 text-xs font-mono text-[#F5F2ED] hover:bg-[#8B0D1A]/20 transition-all cursor-pointer"
              aria-label="Open AI Buddy"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8B0D1A]" />
              <span>Ask AI Buddy</span>
            </button>
          )}

          {/* Status Badge */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium tracking-wider uppercase text-[#F5F2ED] border border-[#F5F2ED]/20 hover:border-[#8B0D1A] hover:bg-[#8B0D1A]/10 rounded-full transition-all group"
          >
            <span>{portfolioConfig.personal.statusBadge}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#8B0D1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#F5F2ED] hover:text-[#8B0D1A] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[65px] bg-[#0B0B0B]/98 backdrop-blur-xl border-t border-[#F5F2ED]/10 p-8 flex flex-col justify-between z-50 animate-fadeIn">
          <div className="flex flex-col gap-6 pt-6">
            <span className="text-xs font-mono text-[#8B0D1A] tracking-widest uppercase">
              // Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-display uppercase tracking-wider text-[#F5F2ED] hover:text-[#8B0D1A] transition-colors flex items-center justify-between py-2 border-b border-[#F5F2ED]/5"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#8B0D1A]">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
            {onOpenAiBuddy && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAiBuddy();
                }}
                className="mt-2 flex items-center justify-center gap-2 py-3 rounded-lg border border-[#8B0D1A] bg-[#8B0D1A]/15 text-[#F5F2ED] font-mono text-sm tracking-wider uppercase"
              >
                <Sparkles className="w-4 h-4 text-[#8B0D1A]" />
                <span>Chat with AI Buddy</span>
              </button>
            )}
          </div>

          <div className="pt-8 border-t border-[#F5F2ED]/10 flex flex-col gap-3">
            <span className="text-xs font-mono text-[#F5F2ED]/50 uppercase">Connect Directly</span>
            <div className="flex gap-6 text-sm font-mono text-[#F5F2ED]">
              <a href={portfolioConfig.urls.github} target="_blank" rel="noreferrer" className="hover:text-[#8B0D1A]">
                GitHub
              </a>
              <a href={portfolioConfig.urls.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#8B0D1A]">
                LinkedIn
              </a>
              <a href={portfolioConfig.urls.leetcode} target="_blank" rel="noreferrer" className="hover:text-[#8B0D1A]">
                LeetCode
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
