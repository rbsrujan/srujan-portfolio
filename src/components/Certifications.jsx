import React from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Certifications() {
  const professionalCerts = CERTIFICATIONS.filter((c) => c.group === 'professional');
  const nptelCerts = CERTIFICATIONS.filter((c) => c.group === 'nptel');

  return (
    <section id="certifications" className="py-20 md:py-28 border-b border-[#E5E5E3]">
      <div className="container-editorial">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#777777]">
            CREDENTIALS &amp; CERTIFICATIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717]">
            Certifications
          </h2>
          <p className="text-base text-[#666666] leading-relaxed">
            Professional industry specializations and academic course certifications in machine learning, database engineering, generative AI, and computational systems.
          </p>
        </div>

        {/* PART 1: PROFESSIONAL CERTIFICATIONS (01 - 03) */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#E5E5E3]">
            <Award className="w-4 h-4 text-[#171717]" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#171717]">
              Professional Specializations &amp; Skill Certifications
            </h3>
            <span className="text-xs text-[#777777] ml-auto font-mono">01 — 03</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {professionalCerts.map((cert) => (
              <div
                key={cert.id}
                className="bg-[#FFFFFF] border border-[#E5E5E3] rounded-md p-6 flex flex-col justify-between hover:border-[#D1D1CE] hover:shadow-sm transition-all"
              >
                <div className="space-y-4">
                  {/* Top Bar: Provider and Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold font-mono text-[#555555] uppercase tracking-wider">
                      {cert.provider}
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${cert.badgeColor}`}>
                      {cert.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-bold text-[#171717] leading-snug">
                    {cert.title}
                  </h4>

                  {/* Metadata */}
                  <div className="space-y-1 text-xs text-[#555555] pt-1 border-t border-[#EDEDEB]">
                    <div>
                      <span className="font-semibold text-[#171717]">Provider:</span> {cert.provider}
                    </div>
                    {cert.instructor && (
                      <div>
                        <span className="font-semibold text-[#171717]">Instructor:</span> {cert.instructor}
                      </div>
                    )}
                    {cert.category && (
                      <div>
                        <span className="font-semibold text-[#171717]">Certification:</span> {cert.category}
                      </div>
                    )}
                  </div>

                  {/* Summary Description */}
                  <p className="text-xs text-[#666666] leading-relaxed pt-1">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Status */}
                <div className="pt-4 mt-4 border-t border-[#EDEDEB] flex items-center gap-1.5 text-xs text-[#4A5548] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D]" />
                  <span>Verified Credential</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: NPTEL CERTIFICATIONS (04 - 06) — TEXT ONLY, NO IMAGES, NO SCORES */}
        <div>
          <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#E5E5E3]">
            <Award className="w-4 h-4 text-[#171717]" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#171717]">
              NPTEL Academic Certifications
            </h3>
            <span className="text-xs text-[#777777] ml-auto font-mono">04 — 06</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nptelCerts.map((cert) => (
              <div
                key={cert.id}
                className="bg-[#FFFFFF] border border-[#E5E5E3] rounded-md p-6 flex flex-col justify-between hover:border-[#D1D1CE] hover:shadow-sm transition-all"
              >
                <div className="space-y-4">
                  {/* Top Bar: Provider and Category Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold font-mono text-[#555555] uppercase tracking-wider">
                      {cert.provider}
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${cert.badgeColor}`}>
                      {cert.category}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h4 className="text-lg font-bold text-[#171717] leading-snug">
                    {cert.title}
                  </h4>

                  {/* Text Details (Provider, Course Title, Duration, Category) */}
                  <div className="space-y-1 text-xs text-[#555555] pt-1 border-t border-[#EDEDEB]">
                    <div>
                      <span className="font-semibold text-[#171717]">Provider:</span> {cert.provider}
                    </div>
                    <div>
                      <span className="font-semibold text-[#171717]">Duration:</span> {cert.duration}
                    </div>
                    <div>
                      <span className="font-semibold text-[#171717]">Certification Category:</span> {cert.category}
                    </div>
                  </div>

                  {/* Course Summary */}
                  <p className="text-xs text-[#666666] leading-relaxed pt-1">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-4 mt-4 border-t border-[#EDEDEB] flex items-center justify-between text-xs text-[#666666]">
                  <span className="text-[11px] font-mono text-[#777777]">NPTEL &bull; IITs/IISc</span>
                  <span className="text-[11px] font-medium text-[#171717]">{cert.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
