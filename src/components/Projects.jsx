import React, { useState } from 'react';
import { MAJOR_PROJECTS, ADDITIONAL_PROJECTS } from '../data/portfolioData';
import { ExternalLink, ArrowRight, ChevronDown, ChevronUp, Layers, CheckCircle, ZoomIn, X } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  // Track which major project has expanded technical deep-dive
  const [expandedId, setExpandedId] = useState(null);
  // Track image lightbox preview
  const [lightboxImage, setLightboxImage] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-[#E5E5E3]">
      <div className="container-editorial">
        
        {/* ====================================================================
            PART 1: FEATURED PROJECTS (LARGE EDITORIAL SHOWCASES)
            ==================================================================== */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#777777]">
            PORTFOLIO SHOWCASE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717]">
            Featured Projects
          </h2>
          <p className="text-base text-[#666666] leading-relaxed">
            Four flagship software engineering systems spanning autonomous multi-agent networks, conversational RAG, autonomous text-to-SQL querying, and on-device neural speech translation.
          </p>
        </div>

        {/* Large Editorial Project Showcases (Alternating Layout) */}
        <div className="space-y-24 lg:space-y-32">
          {MAJOR_PROJECTS.map((project, index) => {
            const isImageLeft = index % 2 === 0;
            const isExpanded = expandedId === project.id;

            return (
              <article
                key={project.id}
                className="pt-10 border-t border-[#EDEDEB] first:border-t-0 first:pt-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  
                  {/* Visual / Application Screenshot Column */}
                  <div
                    className={`lg:col-span-6 ${
                      isImageLeft ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="bg-[#FFFFFF] border border-[#E5E5E3] rounded-md p-2.5 shadow-sm hover:shadow-md transition-shadow group sticky top-24">
                      <div
                        onClick={() => setLightboxImage({ src: project.image, title: project.title, desc: project.subtitle })}
                        className="aspect-[16/10] overflow-hidden rounded bg-[#FAFAF9] border border-[#EDEDEB] relative flex items-center justify-center cursor-pointer"
                        title="Click to expand screenshot in full resolution"
                      >
                        <img
                          src={project.image}
                          alt={`${project.title} Architectural Interface Preview`}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#171717]/0 group-hover:bg-[#171717]/5 transition-colors flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 bg-[#FFFFFF] text-[#171717] text-[11px] font-semibold px-2.5 py-1 rounded shadow-sm border border-[#E5E5E3] flex items-center gap-1 transition-opacity">
                            <ZoomIn className="w-3 h-3" />
                            Expand Screenshot
                          </span>
                        </div>
                      </div>
                      
                      <div className="pt-2 px-1 flex items-center justify-between text-[11px] text-[#777777]">
                        <span>PROJECT {project.number} &bull; {project.isFlagship ? 'FLAGSHIP ARCHITECTURE' : 'FEATURED SYSTEM'}</span>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#171717] flex items-center gap-1 font-medium"
                        >
                          Source Code &rarr;
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Narrative & Engineering Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isImageLeft ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Header line */}
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#777777]">
                          PROJECT {project.number}
                        </span>
                        {project.isFlagship && (
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-[#171717] text-[#FFFFFF] px-2 py-0.5 rounded">
                            Flagship System
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717] leading-tight">
                        {project.title}
                      </h3>
                      
                      <p
                        className="text-xs sm:text-sm font-semibold text-[#4A5548]"
                        dangerouslySetInnerHTML={{ __html: project.subtitle }}
                      />
                    </div>

                    {/* Overview & Problem */}
                    <div className="space-y-3 text-sm text-[#555555] leading-relaxed">
                      <p className="font-medium text-[#171717]">
                        {project.overview}
                      </p>
                      
                      <div className="p-3.5 bg-[#FFFFFF] border border-[#E5E5E3] rounded-md">
                        <span className="font-semibold text-[#171717] block mb-1 text-xs uppercase tracking-wider">
                          The Core Problem:
                        </span>
                        <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                    </div>

                    {/* Key Implementation Highlights */}
                    <div className="space-y-2.5">
                      <div className="text-xs font-semibold text-[#171717] uppercase tracking-wider">
                        What I Implemented
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#555555]">
                        {project.implementation.slice(0, 4).map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2 leading-relaxed">
                            <span className="text-[#171717] font-bold text-xs mt-0.5">&bull;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benchmark & Projected Outcomes Metrics */}
                    {project.projectedOutcomes && (
                      <div className="grid grid-cols-2 gap-2.5 pt-1">
                        {project.projectedOutcomes.map((metricItem, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-2.5 bg-[#FFFFFF] border border-[#E5E5E3] rounded"
                          >
                            <div className="text-base sm:text-lg font-bold text-[#171717]">
                              {metricItem.metric}
                            </div>
                            <div className="text-[11px] text-[#777777] leading-tight">
                              {metricItem.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Expandable Architecture Drawer Toggle */}
                    <div className="pt-1">
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="text-xs font-semibold text-[#171717] hover:text-[#4A5548] flex items-center gap-1.5 py-1 transition-colors"
                      >
                        <Layers className="w-3.5 h-3.5 text-[#4A5548]" />
                        <span>
                          {isExpanded ? 'Hide Architecture & Full Details' : 'Inspect Full Architecture & Execution Details'}
                        </span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5" />
                        )}
                      </button>

                      {isExpanded && (
                        <div className="mt-3 p-4 bg-[#FFFFFF] border border-[#E5E5E3] rounded-md space-y-3.5 text-xs text-[#555555] leading-relaxed">
                          <div>
                            <span className="font-bold text-[#171717] block mb-1 uppercase tracking-wider">
                              End-to-End Execution Flow:
                            </span>
                            <p className="font-mono text-[11px] text-[#444444] bg-[#F7F7F5] p-2.5 rounded border border-[#E5E5E3]">
                              {project.architectureDetails}
                            </p>
                          </div>

                          {project.implementation.length > 4 && (
                            <div>
                              <span className="font-bold text-[#171717] block mb-1 uppercase tracking-wider">
                                Additional Implementation Notes:
                              </span>
                              <ul className="space-y-1.5 pl-2">
                                {project.implementation.slice(4).map((extra, eIdx) => (
                                  <li key={eIdx} className="flex items-start gap-1.5">
                                    <CheckCircle className="w-3.5 h-3.5 text-[#15803D] mt-0.5 shrink-0" />
                                    <span>{extra}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Technology Stack Tags */}
                    <div>
                      <div className="text-[11px] font-semibold text-[#777777] uppercase tracking-wider mb-2">
                        Technologies Used
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium bg-[#FFFFFF] border border-[#E5E5E3] text-[#333333] px-2.5 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-xs"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Inspect Repository</span>
                      </a>

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-xs"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Web Application</span>
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* ====================================================================
            PART 2: ADDITIONAL PROJECTS (3 VERIFIED PROJECTS — NO GREENKO)
            ==================================================================== */}
        <div className="mt-28 pt-16 border-t border-[#E5E5E3]">
          
          <div className="max-w-2xl mb-12 space-y-2">
            <div className="text-xs font-semibold tracking-widest uppercase text-[#777777]">
              PORTFOLIO SHOWCASE
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
              Additional Projects
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Three verified engineering projects across high-concurrency fraud detection, university financial logistics, and vehicle telematics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ADDITIONAL_PROJECTS.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFFFFF] border border-[#E5E5E3] rounded-md p-5 flex flex-col justify-between hover:border-[#D1D1CE] hover:shadow-sm transition-all group"
              >
                <div className="space-y-3.5">
                  
                  {/* Thumbnail (Clickable for full view) */}
                  <div
                    onClick={() => setLightboxImage({ src: item.image, title: item.title, desc: item.tagline })}
                    className="aspect-[16/10] overflow-hidden rounded bg-[#FAFAF9] border border-[#EDEDEB] relative flex items-center justify-center cursor-pointer"
                    title="Click to view full image"
                  >
                    <img
                      src={item.image}
                      alt={`${item.title} Schematic Preview`}
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#171717]/0 group-hover:bg-[#171717]/5 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 bg-[#FFFFFF] text-[#171717] text-[10px] font-semibold px-2 py-0.5 rounded shadow-sm border border-[#E5E5E3] flex items-center gap-1 transition-opacity">
                        <ZoomIn className="w-3 h-3" />
                        Expand
                      </span>
                    </div>
                  </div>

                  {/* Header & Number */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-[#777777] font-mono">
                      <span>PROJECT {item.number}</span>
                      <span className="uppercase">ADDITIONAL</span>
                    </div>

                    <h4 className="text-lg font-bold text-[#171717] group-hover:text-[#4A5548] transition-colors leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs font-semibold text-[#4A5548]">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Footer with Tags and GitHub Links */}
                <div className="pt-4 mt-3 border-t border-[#EDEDEB] space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {item.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium bg-[#F7F7F5] border border-[#E5E5E3] text-[#444444] px-1.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 4 && (
                      <span className="text-[10px] text-[#777777] px-1 py-0.5">
                        +{item.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-xs py-1 px-2.5"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>

                    {item.demo && (
                      <a
                        href={item.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-xs py-1 px-2.5"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* ==================================================================
              PART 3: PROMINENT "VIEW ALL PROJECTS ON GITHUB" LINK
              ================================================================== */}
          <div className="mt-16 pt-8 border-t border-[#EDEDEB] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FFFFFF] border border-[#E5E5E3] p-6 rounded-md shadow-sm">
            <div className="space-y-1">
              <div className="text-sm font-bold text-[#171717]">
                Looking for more technical repositories and codebases?
              </div>
              <div className="text-xs text-[#666666]">
                Explore utility packages, academic coursework repositories, and experimental pipelines directly on my GitHub profile.
              </div>
            </div>

            <a
              href="https://github.com/rbsrujan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0 self-start sm:self-center"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View All Projects on GitHub</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </a>
          </div>

        </div>

      </div>

      {/* Global Screenshot Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-[#171717]/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="bg-[#FFFFFF] border border-[#E5E5E3] rounded-lg max-w-4xl w-full p-4 sm:p-6 shadow-2xl relative space-y-4 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#EDEDEB]">
              <div>
                <h4 className="text-lg font-bold text-[#171717]">
                  {lightboxImage.title}
                </h4>
                <p
                  className="text-xs text-[#666666]"
                  dangerouslySetInnerHTML={{ __html: lightboxImage.desc }}
                />
              </div>

              <button
                onClick={() => setLightboxImage(null)}
                className="p-1.5 text-[#777777] hover:text-[#171717] hover:bg-[#F0F0EE] rounded transition-colors"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High-Res View */}
            <div className="aspect-[16/10] bg-[#FAF9F5] border border-[#E5E5E3] rounded flex items-center justify-center overflow-hidden">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex justify-end pt-1">
              <button
                onClick={() => setLightboxImage(null)}
                className="btn-secondary text-xs py-1 px-3"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
