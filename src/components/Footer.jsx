import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#F7F7F5] border-t border-[#E5E5E3]">
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Brand Name */}
          <div className="space-y-1">
            <div className="text-base font-bold tracking-tight text-[#171717]">
              {PERSONAL_INFO.brandName}
            </div>
            <div className="text-xs text-[#666666]">
              Computer Science Student &amp; Software Developer &bull; {PERSONAL_INFO.institutionShort}
            </div>
          </div>

          {/* Navigation Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-5 text-xs text-[#666666]">
            <a href="#home" className="hover:text-[#171717] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#171717] transition-colors">About</a>
            <a href="#projects" className="hover:text-[#171717] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#171717] transition-colors">Experience</a>
            <a href="#skills" className="hover:text-[#171717] transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-[#171717] transition-colors">Certifications</a>
            <a href="#contact" className="hover:text-[#171717] transition-colors">Contact</a>
            <span className="text-[#D1D1CE]">&bull;</span>
            <a
              href={PERSONAL_INFO.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#171717] transition-colors font-medium"
            >
              LinkedIn &rarr;
            </a>
            <a
              href={PERSONAL_INFO.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#171717] transition-colors font-medium"
            >
              GitHub &rarr;
            </a>
            <span className="text-[#D1D1CE]">&bull;</span>
            <a
              href={PERSONAL_INFO.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              download="Srujan_RB_Resume.pdf"
              className="hover:text-[#171717] transition-colors font-medium"
            >
              Resume (PDF) &rarr;
            </a>

            <button
              onClick={scrollToTop}
              className="ml-auto flex items-center gap-1.5 font-medium text-[#171717] hover:underline"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Minimal Copyright */}
        <div className="mt-8 pt-6 border-t border-[#EDEDEB] text-center text-xs text-[#8A8A88]">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React, Vite, and Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
