import React from 'react';
import { Award } from 'lucide-react';
import SectionReveal from '@/components/orbital/SectionReveal';
import SectionLabel from '@/components/orbital/SectionLabel';

const CERTS = [
  { name: 'AWS Certified Machine Learning — Specialty', issuer: 'Amazon Web Services', year: '2023' },
  { name: 'TensorFlow Developer Certificate', issuer: 'Google', year: '2022' },
  { name: 'NVIDIA Deep Learning Institute — Jetson AI', issuer: 'NVIDIA', year: '2023' },
  { name: 'ESA Earth Observation Data Processing', issuer: 'European Space Agency', year: '2021' },
  { name: 'Professional Scrum Master I', issuer: 'Scrum.org', year: '2020' },
];

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <SectionLabel number="06" label="Certifications" />
          <h2 className="font-mono font-semibold text-3xl md:text-5xl mb-16">
            Verified <span className="text-[#00F2FF]">Clearances</span>
          </h2>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTS.map((cert, idx) => (
            <SectionReveal key={cert.name} delay={idx * 0.08}>
              <div className="glass-panel p-6 h-full hover:border-[#00F2FF]/30 transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <Award size={16} className="text-[#00F2FF] group-hover:drop-shadow-[0_0_6px_rgba(0,242,255,0.5)] transition-all" />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm font-medium mb-2 leading-snug">{cert.name}</h3>
                    <p className="text-[#8E9AAF] text-xs">{cert.issuer}</p>
                    <span className="telemetry-text text-[9px] mt-2 block">{cert.year}</span>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}