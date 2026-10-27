import React, { useState } from 'react';
import { portfolioConfig, Project } from '../data/portfolioData';
import { ArrowUpRight, ExternalLink, X, ShieldAlert } from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = portfolioConfig.projects;
  const featuredProject = projects[0];
  const gridProjects = projects.slice(1);

  return (
    <section id="work" className="relative z-10 w-full py-24 px-6 sm:px-8 lg:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-[#F5F2ED]/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#8B0D1A] font-semibold block mb-2">
              // SELECTED WORKS
            </span>
            <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-tight uppercase text-[#F5F2ED] leading-none">
              PROJECTS
            </h2>
          </div>
          <p className="font-mono text-xs text-[#F5F2ED]/50 max-w-sm sm:text-right mt-4 sm:mt-0 uppercase tracking-wider">
            Production-style full-stack architectures & explainable ML systems
          </p>
        </div>

        {/* 1. Featured Flagship Card: Vitalis */}
        <div className="mb-12">
          <div
            onClick={() => setSelectedProject(featuredProject)}
            className="group relative rounded-2xl border border-[#F5F2ED]/10 bg-[#121212]/80 hover:border-[#8B0D1A] transition-all duration-500 hover:-translate-y-1.5 p-6 sm:p-8 lg:p-10 cursor-pointer overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(139,13,26,0.2)]"
          >
            {/* Top Bar inside card */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F5F2ED]/10">
              <div className="flex items-center gap-3">
                <span className="font-display font-black text-3xl sm:text-4xl text-[#8B0D1A]">
                  {featuredProject.number}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[#8B0D1A]/15 text-[#8B0D1A] border border-[#8B0D1A]/30">
                  FEATURED FLAGSHIP
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#F5F2ED]/60 group-hover:text-[#F5F2ED] transition-colors">
                <span className="hidden sm:inline uppercase tracking-wider">Explore Architecture</span>
                <ArrowUpRight className="w-5 h-5 text-[#8B0D1A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </div>

            {/* Content & Media Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F5F2ED] uppercase tracking-tight mb-2 group-hover:text-[#F5F2ED] transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#8B0D1A] mb-4">
                    {featuredProject.type}
                  </p>
                  <p className="text-sm sm:text-base text-[#F5F2ED]/75 leading-relaxed mb-6">
                    {featuredProject.summary}
                  </p>

                  {/* Bullet points */}
                  <div className="flex flex-col gap-2.5 mb-8">
                    {featuredProject.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F5F2ED]/70 leading-relaxed">
                        <span className="text-[#8B0D1A] font-bold mt-0.5">•</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags & CTAs */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-[#F5F2ED]/15 text-[#F5F2ED]/70 bg-[#0B0B0B]/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#F5F2ED]/20 hover:border-[#8B0D1A] text-[#F5F2ED] text-xs font-mono uppercase tracking-wider hover:bg-[#8B0D1A]/10 transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#8B0D1A] hover:bg-[#A8111F] text-[#F5F2ED] text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-[0_4px_20px_rgba(139,13,26,0.35)]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Screenshot (5 cols) */}
              <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-[#F5F2ED]/10 group-hover:border-[#8B0D1A]/50 transition-colors shadow-2xl">
                <picture>
                  {featuredProject.imageWebp && (
                    <source srcSet={featuredProject.imageWebp} type="image/webp" />
                  )}
                  <img
                    src={featuredProject.image}
                    alt={`${featuredProject.title} preview`}
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* 2. 2x2 Grid for Remaining Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl border border-[#F5F2ED]/10 bg-[#121212]/80 hover:border-[#8B0D1A] transition-all duration-500 hover:-translate-y-1.5 p-6 sm:p-7 flex flex-col justify-between cursor-pointer overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(139,13,26,0.2)]"
            >
              <div>
                {/* Header row with red numeral and arrow */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#F5F2ED]/10">
                  <span className="font-display font-black text-2xl sm:text-3xl text-[#8B0D1A]">
                    {project.number}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#F5F2ED]/50 group-hover:text-[#F5F2ED] transition-colors">
                    <span className="hidden sm:inline uppercase tracking-wider text-[11px]">View Details</span>
                    <ArrowUpRight className="w-4 h-4 text-[#8B0D1A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Screenshot Tile */}
                <div className="relative rounded-lg overflow-hidden border border-[#F5F2ED]/10 group-hover:border-[#8B0D1A]/40 transition-colors mb-5 aspect-[16/10] bg-[#0E0E0E]">
                  <picture>
                    {project.imageWebp && (
                      <source srcSet={project.imageWebp} type="image/webp" />
                    )}
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Title & Tagline */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F2ED] uppercase tracking-tight mb-1">
                  {project.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-[#8B0D1A] mb-3">
                  {project.type}
                </p>
                <p className="text-xs sm:text-sm text-[#F5F2ED]/70 leading-relaxed mb-4 line-clamp-2">
                  {project.summary}
                </p>

                {/* 2 Bullets */}
                <div className="flex flex-col gap-2 mb-6">
                  {project.bullets.slice(0, 2).map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#F5F2ED]/65 leading-relaxed">
                      <span className="text-[#8B0D1A] font-bold mt-0.5">•</span>
                      <span className="line-clamp-2">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Tags & Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-[#F5F2ED]/10 text-[#F5F2ED]/60 bg-[#0B0B0B]/50"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="text-[10px] font-mono text-[#F5F2ED]/40 self-center">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#F5F2ED]/5" onClick={(e) => e.stopPropagation()}>
                  {/* GitHub button (always enabled, no "link coming soon" disabled state) */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#F5F2ED]/20 hover:border-[#8B0D1A] text-[#F5F2ED] text-xs font-mono uppercase tracking-wider hover:bg-[#8B0D1A]/10 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  {/* Live demo or Notebook label */}
                  {project.liveUrl ? (
                    <div className="relative group/tooltip inline-block">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#8B0D1A] hover:bg-[#A8111F] text-[#F5F2ED] text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-[0_2px_15px_rgba(139,13,26,0.3)]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                      {project.liveTooltip && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/tooltip:block w-48 p-2 bg-[#1C1C1C] border border-[#8B0D1A]/50 rounded text-[10px] font-mono text-[#F5F2ED] text-center shadow-xl z-30 pointer-events-none">
                          {project.liveTooltip}
                        </div>
                      )}
                    </div>
                  ) : (
                    <span className="text-[11px] font-mono text-[#F5F2ED]/40 italic pl-1">
                      Notebook / code on GitHub
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#8B0D1A]/50 bg-[#121212] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#1C1C1C] hover:bg-[#8B0D1A] text-[#F5F2ED] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-2">
              <span className="font-display font-black text-3xl text-[#8B0D1A]">
                {selectedProject.number}
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#8B0D1A]">
                {selectedProject.type}
              </span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-4xl text-[#F5F2ED] uppercase tracking-tight mb-2">
              {selectedProject.title}
            </h3>
            <p className="text-sm text-[#F5F2ED]/70 mb-6 leading-relaxed">
              {selectedProject.tagline}
            </p>

            {/* Modal Image */}
            <div className="relative rounded-xl overflow-hidden border border-[#F5F2ED]/10 mb-6 aspect-video bg-[#0E0E0E]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Vitalis "How It Works" Breakdown */}
            {selectedProject.architectureBreakdown && (
              <div className="mb-8 p-5 rounded-xl border border-[#8B0D1A]/40 bg-[#1A0A0D]/50">
                <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-[#8B0D1A] font-bold mb-4">
                  <ShieldAlert className="w-4 h-4 text-[#8B0D1A]" />
                  <span>Architecture & Reliability Breakdown</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[#0B0B0B]/60 border border-[#F5F2ED]/10">
                    <span className="text-[10px] font-mono text-[#8B0D1A] uppercase tracking-wider block mb-1">
                      Role Architecture
                    </span>
                    <ul className="text-xs text-[#F5F2ED]/80 space-y-1">
                      {selectedProject.architectureBreakdown.roles.map((r, i) => (
                        <li key={i}>• {r}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-3 rounded-lg bg-[#0B0B0B]/60 border border-[#F5F2ED]/10 sm:col-span-2">
                    <span className="text-[10px] font-mono text-[#8B0D1A] uppercase tracking-wider block mb-1">
                      LLM Retry & Deterministic Fallback
                    </span>
                    <p className="text-xs text-[#F5F2ED]/80 leading-relaxed">
                      {selectedProject.architectureBreakdown.llmLogic}
                    </p>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-[#0B0B0B]/60 border border-[#F5F2ED]/10">
                  <span className="text-[10px] font-mono text-[#8B0D1A] uppercase tracking-wider block mb-1">
                    Concurrency Lock & Double-Booking Prevention
                  </span>
                  <p className="text-xs text-[#F5F2ED]/80 leading-relaxed">
                    {selectedProject.architectureBreakdown.concurrencyProtection}
                  </p>
                </div>
              </div>
            )}

            {/* Technical Bullets */}
            <div className="mb-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[#F5F2ED]/50 mb-3">
                Key Technical Highlights
              </h4>
              <div className="space-y-2.5">
                {selectedProject.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#F5F2ED]/80 leading-relaxed">
                    <span className="text-[#8B0D1A] font-bold">•</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-8">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-[#F5F2ED]/15 text-[#F5F2ED]/70 bg-[#0B0B0B]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Modal Links: GitHub only for Parkinson's, GitHub + Live for others */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#F5F2ED]/10">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#F5F2ED]/25 hover:border-[#8B0D1A] text-[#F5F2ED] text-xs font-mono uppercase tracking-wider hover:bg-[#8B0D1A]/10 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              {selectedProject.liveUrl ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#8B0D1A] hover:bg-[#A8111F] text-[#F5F2ED] text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-[0_4px_20px_rgba(139,13,26,0.35)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-[#F5F2ED]/40 italic">
                  Notebook & code available on GitHub
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
