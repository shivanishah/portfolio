import React from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/orbital/SectionReveal';
import SectionLabel from '@/components/orbital/SectionLabel';
import { Image } from '@/components/ui/image';

const EDUCATION_IMAGE = '/images/f7c0ac09c_generated_2cb0c557.png';

const EDUCATION_DETAILS = [
  {
    degree: 'Master of Data Science',
    institution: 'University of South Australia',
    year: '02/2023 - 12/2024',
    description:
      'Advanced study in data science, machine learning, artificial intelligence, data analytics, and data visualisation with practical applications in real-world datasets and intelligent systems.',
    relevantCourses: [
      'Machine Learning',
      'Data Visualisation',
      'Big Data Concepts',
      'Data Engineering',
      'Statistical Modelling',
      'Predictive Analytics',
      'Advanced Databases, Warehouses and The Cloud'
    ]
  },
  {
    degree: 'Master of Science (Information Technology)',
    institution:
      'Dhirubhai Ambani Institute of Information and Communication Technology',
    year: '07/2015 - 05/2017',
    description:
      'Focused on software development, web technologies, database systems, and information technology concepts with practical software engineering projects.',
    relevantCourses: [
      'C Programming',
      'Algorithms and Data Structure',
      'Database Management Systems',
      'Discrete Mathematics'
    ]
  },
  {
    degree: 'Bachelor of Science (Information Technology)',
    institution:
      'JP Dawer Institute of Information Communication Technology',
    year: '05/2012 - 06/2015',
    description:
      'Built foundational knowledge in programming, computer systems, web development, and information technology principles.',
    relevantCourses: [
      'Programming Fundamentals',
      'Web Development',
      'Computer Networks',
      'Database Management'
    ]
  }
];

const VOLUNTEER_WORK = [
  {
    role: 'Code Camp Instructor',
    organization: 'Code Camp Australia',
    duration: '2025 ',
    description:
      'Supported students in learning programming concepts, computational thinking, and technology skills through interactive coding activities and workshops.',
    impact:
      'Helped students build confidence and practical coding skills'
  },
  {
    role: 'Technology Speaker & STEM Outreach Volunteer',
    organization: 'School and Community Events',
    duration: '2025',
    description:
      'Delivered technology talks and career sessions sharing experiences in software engineering, artificial intelligence, data science, and emerging technologies.',
    impact:
      'Engaged students and community audiences through technology-focused presentations'
  }
];

export default function EducationSection() {
  return (
    <section id="education" className="relative min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <SectionLabel number="04" label="Education" />
          <h2 className="font-mono font-semibold text-3xl md:text-5xl mb-6">
            Education <span className="text-[#00F2FF]">Background</span>
          </h2>
          <p className="text-[#8E9AAF] py-2 leading-relaxed">
            Academic foundation in information technology and data science, with a focus on intelligent systems, machine learning, software engineering, and emerging technologies.
          </p>
        </SectionReveal>

        {/* Education visualization */}
        <div className="flex flex-col mb-5 space-y-4">
          {EDUCATION_DETAILS.map((edu, idx) => (
            <SectionReveal key={edu.degree} delay={0.15 + idx * 0.1}>
              <motion.div
                className="glass-panel p-6 group hover:border-[#00F2FF]/30 transition-all duration-500"
                whileHover={{ x: 4 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-mono font-medium text-base mb-2 group-hover:text-[#00F2FF] transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-[#8E9AAF] text-sm leading-relaxed">{edu.institution}</p>
                    <p className="text-[#8E9AAF] text-sm leading-relaxed">{edu.year}</p>
                    <p className="text-[#8E9AAF] text-sm leading-relaxed">{edu.description}</p>
                    <div className="mt-2 sm:mt-3">
                      <span className="font-mono text-[8px] tracking-wider text-[#00F2FF] block">
                        Relevant Coursework:
                      </span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {edu.relevantCourses.map((course) => (
                          <span key={course} className="font-mono text-[8px] tracking-wider px-2 py-1 border border-[#00F2FF]/20 text-[#00F2FF]/70">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono text-[10px] tracking-wider text-[#00F2FF] block">
                      {edu.year.split(' - ')[0]}
                    </span>
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
        {/* Volunteer Work */}
        <SectionReveal delay={0.3}>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#00F2FF]" style={{ boxShadow: '0 0 8px #00F2FF' }} />
            <span className="font-mono text-xs tracking-[0.2em] text-[#00F2FF]">VOLUNTEER WORK</span>
          </div>

          <div className="space-y-2 lg:space-y-3">
            {VOLUNTEER_WORK.map((volunteer) => (
              <div key={volunteer.role} className="group cursor-pointer hover:border-[#00F2FF]/20 transition-colors lg:items-baseline lg:gap-4 lg:py-3 lg:border-b lg:border-white/5 flex flex-col gap-2 lg:flex-row lg:justify-between border border-white/10 px-4 py-4 lg:border-0 lg:p-0">
                <div className="flex-1">
                  <span className="text-sm font-medium group-hover:text-[#00F2FF] transition-colors  leading-snug block lg:inline">{volunteer.role}</span>
                  <span className="text-[#00F2FF]/70 font-mono text-[10px] tracking-wider lg:text-[#8E9AAF] lg:text-xs lg:ml-3 block lg:inline">{volunteer.organization}</span>
                </div>
                <div className="flex flex-col space-x-2 text-right shrink-0">
                  <span className="font-mono text-[10px] text-[#8E9AAF] gap-1.5">{volunteer.duration}</span>
                  <span className="font-mono text-[10px] text-[#8E9AAF] ">{volunteer.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}