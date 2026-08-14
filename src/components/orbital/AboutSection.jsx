import React from 'react';
import SectionReveal from '@/components/orbital/SectionReveal';
import SectionLabel from '@/components/orbital/SectionLabel';

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center py-6 px-4 sm:py-20 sm:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <SectionReveal>
          <SectionLabel number="01" label="About" />
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-16 items-center">
          <SectionReveal delay={0.1}>
            <h2 className="font-mono font-semibold text-3xl md:text-5xl leading-tight mb-4 sm:mb-8">
              <span className="text-[#00F2FF]">Code.</span>
              <span className="text-[#fff]">Compute.</span>
              <span className="text-[#00F2FF]">Create.</span>
            </h2>
            <div className="space-y-4 text-[#8E9AAF] leading-relaxed text-sm sm:text-base">
              <p>
                Senior Software Engineer with 9+ years of experience developing backend systems, full-stack applications, APIs, data workflows, and research-to-production platforms. Strong expertise in Python, Node.js, React, TypeScript, SQL/NoSQL databases, REST/GraphQL APIs, CI/CD, docker, Azure and scalable software architecture. Recent experience includes simulation and digital engineering systems, geospatial and satellite-data platforms, machine learning pipelines, and AI-powered applications using LLMs and the OpenAI API. Proven ability to translate complex requirements into reliable, maintainable solutions, own delivery from concept to production, collaborate with researchers and cross-functional teams, and provide technical guidance and mentoring.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="glass-panel p-4 sm:p-6 space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-2 h-2 rounded-full bg-[#00F2FF]" style={{ boxShadow: '0 0 8px #00F2FF' }} />
                <span className="font-mono text-xs sm:text-sm tracking-[0. tracking-[0.2em] text-[#00F2FF]">SYSTEM PROFILE</span>
              </div>

              {[
                { label: 'DESIGNATION', value: 'Software Engineer' },
                { label: 'MISSION', value: 'Building Scalable Software for various Domains & AI' },
                { label: 'AFFILIATION', value: 'SmartSat CRC | Australasian Space Innovation Institute (ASII) | Adelaide University' },
                { label: 'FOCUS', value: '3D Visualisation • Digital Engineering • ML' },
                { label: 'CLEARANCE', value: 'Master of Data Science' },
                { label: 'LOCATION', value: 'Adelaide, Australia' },
                { label: 'STATUS', value: 'Available for Research & Professional Collaboration' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-baseline border-b border-white/5">
                  <span className="telemetry-text system-text">{item.label}</span>
                  <span className="font-mono text-sm text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}