import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, FileText, Mail, MapPin, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-[#E5E5E3]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Personal Introduction */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Greeting */}
            <div className="text-xs font-semibold tracking-widest uppercase text-[#777777]">
              HELLO, I'M
            </div>

            {/* Most Prominent Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] leading-[1.06]">
              {PERSONAL_INFO.brandName}
            </h1>

            {/* Professional Positioning */}
            <div className="text-sm sm:text-base font-semibold text-[#4A5548] tracking-wide">
              {PERSONAL_INFO.title}
            </div>

            {/* Headline from Resume */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#171717] leading-snug">
              "{PERSONAL_INFO.heroHeadline}"
            </h2>

            {/* Natural Narrative Description */}
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-2xl">
              {PERSONAL_INFO.heroIntroduction}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary">
                <span>View Flagship Projects</span>
                <ArrowDown className="w-4 h-4 ml-0.5" />
              </a>
              <a
                href={PERSONAL_INFO.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                download="Srujan_RB_Resume.pdf"
                className="btn-secondary"
              >
                <FileText className="w-4 h-4 text-[#666666]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Location & Direct Contact Channels */}
            <div className="pt-6 border-t border-[#EBEBEA] flex flex-wrap items-center gap-5 text-sm text-[#666666]">
              <div className="flex items-center gap-1.5 font-medium text-[#171717]">
                <MapPin className="w-4 h-4 text-[#777777]" />
                Based in {PERSONAL_INFO.location}
              </div>
              
              <span className="text-[#D1D1CE] hidden sm:inline">&bull;</span>
              
              <a
                href={PERSONAL_INFO.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#171717] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>

              <span className="text-[#D1D1CE] hidden sm:inline">&bull;</span>

              <a
                href={PERSONAL_INFO.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#171717] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>

              <span className="text-[#D1D1CE] hidden sm:inline">&bull;</span>

              <a
                href={PERSONAL_INFO.links.email}
                className="flex items-center gap-1.5 hover:text-[#171717] transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>

              <span className="text-[#D1D1CE] hidden sm:inline">&bull;</span>

              <a
                href={PERSONAL_INFO.links.phone}
                className="flex items-center gap-1.5 hover:text-[#171717] transition-colors"
              >
                <Phone className="w-4 h-4" />
                {PERSONAL_INFO.links.phoneRaw}
              </a>
            </div>

          </div>

          {/* Right Column: Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm bg-[#FFFFFF] border border-[#E5E5E3] rounded-md p-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/5] overflow-hidden rounded bg-[#F7F7F5] border border-[#EDEDEB] relative flex items-center justify-center">
                <img
                  src={PERSONAL_INFO.avatar}
                  alt={`${PERSONAL_INFO.name} — Software Developer`}
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="pt-3 px-1 flex items-center justify-between text-xs text-[#777777]">
                <span>{PERSONAL_INFO.institutionShort}</span>
                <span className="font-mono text-[#4A5548]">{PERSONAL_INFO.educationPeriod}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
