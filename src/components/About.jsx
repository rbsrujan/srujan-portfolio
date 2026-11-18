import React from 'react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';
import { GraduationCap, Code2, Cpu, FileText, ArrowUpRight } from 'lucide-react';

export default function About() {
  const edu = EDUCATION[0];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-[#E5E5E3]">
      <div className="container-editorial">
        <div className="max-w-3xl">
          
          <div className="text-xs font-semibold tracking-widest uppercase text-[#777777] mb-3">
            ABOUT ME
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-8">
            Engineering software with intent, craft, and practical utility.
          </h2>

          <div className="space-y-5 text-base sm:text-lg text-[#555555] leading-relaxed mb-12">
            {PERSONAL_INFO.aboutParagraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          {/* Education & Core Focus Card */}
          <div className="bg-[#FFFFFF] border border-[#E5E5E3] rounded-md p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-[#F7F7F5] border border-[#E5E5E3] rounded text-[#171717]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#777777]">
                  EDUCATION
                </div>
                <h3 className="text-xl font-bold text-[#171717]">
                  {edu.fullName}
                </h3>
                <div className="text-sm font-medium text-[#444444]">
                  {edu.degree}
                </div>
                <div className="text-xs text-[#777777] pt-0.5">
                  {edu.duration} &bull; {edu.location}
                </div>
              </div>
            </div>

            <p className="text-sm text-[#666666] leading-relaxed pt-3 border-t border-[#EDEDEB]">
              {edu.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#F7F7F5] rounded border border-[#E5E5E3] space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#171717] uppercase tracking-wider">
                  <Code2 className="w-4 h-4 text-[#4A5548]" />
                  Software &amp; Systems Engineering
                </div>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Full-stack web architectures, relational &amp; vector data storage, REST APIs, and responsive user interfaces.
                </p>
              </div>

              <div className="p-4 bg-[#F7F7F5] rounded border border-[#E5E5E3] space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#171717] uppercase tracking-wider">
                  <Cpu className="w-4 h-4 text-[#4A5548]" />
                  Applied AI &amp; Machine Learning
                </div>
                <p className="text-xs text-[#666666] leading-relaxed">
                  Autonomous ReAct agent swarms, conversational RAG, edge speech translation, and low-latency feature pipelines.
                </p>
              </div>
            </div>

          </div>

          {/* Curriculum Vitae / Resume Link */}
          <div className="mt-8 pt-6 border-t border-[#E5E5E3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#777777]">
                CURRICULUM VITAE
              </div>
              <p className="text-sm text-[#555555] pt-0.5">
                Detailed academic background, projects, internship at HAL, and technical competencies.
              </p>
            </div>
            <a
              href={PERSONAL_INFO.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              download="Srujan_RB_Resume.pdf"
              className="btn-secondary whitespace-nowrap self-start sm:self-auto"
            >
              <FileText className="w-4 h-4 text-[#666666]" />
              <span>View / Download Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
