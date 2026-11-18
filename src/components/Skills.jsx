import React from 'react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 border-b border-[#E5E5E3]">
      <div className="container-editorial">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#777777]">
            TECHNICAL EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717]">
            Skills &amp; Engineering Disciplines
          </h2>
          <p className="text-base text-[#666666] leading-relaxed">
            Verified technical proficiencies spanning low-level system languages, applied deep learning, distributed backend architectures, and relational databases.
          </p>
        </div>

        {/* Clean Categorized Grid (No fake percentages, no bars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#FFFFFF] border border-[#E5E5E3] rounded-md p-6 flex flex-col justify-between hover:border-[#D1D1CE] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#EDEDEB]">
                  <h3 className="text-base font-bold text-[#171717]">
                    {cat.category}
                  </h3>
                  <span className="text-xs font-mono text-[#777777]">
                    0{idx + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium bg-[#F7F7F5] border border-[#E5E5E3] text-[#333333] px-2.5 py-1 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
