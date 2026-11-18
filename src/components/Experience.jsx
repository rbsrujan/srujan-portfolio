import React from 'react';
import { EXPERIENCE } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck, Factory } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Experience() {
  const exp = EXPERIENCE[0];

  return (
    <section id="experience" className="py-20 md:py-28 border-b border-[#E5E5E3]">
      <div className="container-editorial">
        <div className="max-w-4xl">
          
          <div className="text-xs font-semibold tracking-widest uppercase text-[#777777] mb-3">
            PROFESSIONAL EXPERIENCE
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            Industrial Internship &bull; HAL
          </h2>

          <div className="bg-[#FFFFFF] border border-[#E5E5E3] rounded-md p-6 sm:p-9 space-y-8 shadow-sm">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-[#EDEDEB]">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#4A5548] uppercase tracking-wider">
                  <Briefcase className="w-4 h-4" />
                  <span>{exp.role}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#171717]">
                  {exp.organization}
                </h3>
                <div className="text-sm font-semibold text-[#555555] flex items-center gap-1.5">
                  <Factory className="w-4 h-4 text-[#777777]" />
                  <span>{exp.division}</span>
                </div>
              </div>

              <div className="text-xs sm:text-right text-[#777777] space-y-1.5">
                <div className="flex sm:justify-end items-center gap-1.5 font-medium text-[#171717]">
                  <Calendar className="w-3.5 h-3.5 text-[#777777]" />
                  <span>{exp.period}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#777777]" />
                  <span>{exp.division}</span>
                </div>
              </div>
            </div>

            {/* Industrial Context Banner */}
            <div className="p-4 bg-[#F7F7F5] border border-[#E5E5E3] rounded-md flex items-start gap-3 text-xs sm:text-sm text-[#444444] leading-relaxed">
              <ShieldCheck className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#171717]">Industrial Setting: </strong>
                Gained firsthand technical exposure to precision aero-engine manufacturing, heavy machining bays, component process planning, quality assurance protocols, and engine performance testing cells at Hindustan Aeronautics Limited.
              </div>
            </div>

            {/* Assigned Project & System Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-1">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#777777]">
                    ASSIGNED INDUSTRIAL PROJECT
                  </div>
                  <h4 className="text-xl font-bold text-[#171717]">
                    {exp.project}
                  </h4>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#777777]">
                    ACTUAL RESPONSIBILITIES &amp; IMPLEMENTATION
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#555555]">
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#15803D] mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-4 border-t border-[#EDEDEB]">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#777777] mb-2.5">
                    TECHNOLOGIES UTILIZED
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-[#F7F7F5] border border-[#E5E5E3] text-[#333333] px-3 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Application Visual Preview */}
              <div className="lg:col-span-5">
                <div className="bg-[#FFFFFF] border border-[#E5E5E3] rounded-md p-2 shadow-sm space-y-2">
                  <div className="aspect-[4/3] rounded overflow-hidden bg-[#FAFAF9] border border-[#EDEDEB] flex items-center justify-center">
                    <img
                      src="/projects/hal_complaint.svg"
                      alt="HAL Complaint Log Management System GUI"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-1 text-[11px] text-[#777777] flex items-center justify-between">
                    <span>Tkinter &bull; SQLite Relational GUI</span>
                    <a
                      href="https://github.com/rbsrujan/complaint-Log-HAL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#171717] hover:underline flex items-center gap-1 font-medium"
                    >
                      <GithubIcon className="w-3 h-3" />
                      Repo
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
