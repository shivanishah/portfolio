import React from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/orbital/SectionReveal';
import SectionLabel from '@/components/orbital/SectionLabel';

const TESTIMONIALS = [
  {
    quote: 'Shivani joined us at KWPX as a software developer, working across the full stack of several key projects to bring new features and functionality to national clients. Shivani is a talented developer and excellent at picking up new projects and skills quickly, delivering great work in complex projects. She fit in very well with our team, being kind and passionate, bringing great energy to the office. Her communication skills allowed her to keep clients happy and informed, and work well in high stress situations. Having worked across a breadth of technologies and projects, her experience across different software languages means she can adapt to new projects and skills quickly. I would recommend Shivani to anyone looking for a talented, fast learning developer, who will be a delight to work with.',
    author: 'Ben Turner ',
    role: 'Full Stack Developer, eCommerce and Applications',
  },
  {
    quote: "I had the privilege of mentoring Shivani Shah during her professional capstone project with SmartSat CRC, working on gathering satellite imagery and using machine learning to identify native vegetation. Shivani worked exceptionally well with her team members, adapting to the processing of imagery data rather than textual data with determination, great skill and perseverance. Shivani ensured that the team deliverables were of the highest quality, ultimately leading to the team winning the 'Most Outstanding Poster for a post-graduate Professional Capstone Project’. Throughout the project, Shivani demonstrated exceptional organisational skills, clear communication with team members, and the ability to adapt to technical challenges that were occurring during the project. I am thrilled to recommend Shivani as a skilled technician and wish her the best in her future endeavours.",
    author: 'Donna Fitzgerald',
    role: 'Environmental Scientist - PhD candidate Adelaide University',
  },
  {
    quote: "I had the privilege of mentoring Shivani Shah during her professional capstone project, where she delivered exceptional results. Shivani demonstrated outstanding commitment, technical expertise, and leadership. She implemented a CNN-U Net model, optimised it effectively, and achieved highly accurate image classification results, significantly enhancing the project’s outcomes. Her organisational skills and proactive leadership ensured the team met milestones and stayed aligned with project goals. Shivani’s adaptability and clear communication made her an invaluable asset to the team. I highly recommend her for any opportunity requiring technical excellence, leadership, and dedication.",
    author: 'Eric Lam',
    role: 'Solutions Architect | Expert in Data Analytics & Cloud Solutions | Innovator and Mentor',
  },
  {
    quote: "I highly recommend Shivani Shah for her exceptional work ethic and dedication. Shah expertise in UI and front end framework has greatly contributed to the success of our team. Shah is not only a skilled professional but also a collaborative and reliable team player. It's a pleasure working alongside someone with such a positive impact.",
    author: 'Shajahan Shaik',
    role: 'Senior Software Engineer',
  },
  {
    quote: "I highly recommend Shivani for her exceptional contributions as a frontend developer. She has proficiency in coding, attention to detail, and collaborative spirit significantly enhanced our team's ability to deliver high-quality user interfaces. She consistently met project deadlines and demonstrated a strong commitment to innovation and problem-solving. It was a pleasure working with her, and I believe her skills would be a valuable asset to any future project or team.",
    author: 'Vineet Thutheja',
    role: 'Senior Software Engineer',
  },
  {
    quote: "She is very good in front end developing. she have very depth knowledge in same. and very help full team member.",
    author: 'Abhishek Dutta',
    role: 'Specialist Software Engineer',
  },
  {
    quote: "Shivani is a good team player who helps the team members whenever needed. She is a good problem solver and thinks out of the box for providing the solutions.",
    author: 'Sourabh Sharma',
    role: 'Senior Software Engineer',
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-5 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <SectionLabel number="09" label="Testimonials" />
          <h2 className="font-mono font-semibold text-3xl md:text-5xl mb-16">
            Incoming <span className="text-[#00F2FF]">Transmissions</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <SectionReveal key={t.author} delay={idx * 0.12}>
              <motion.div
                className="glass-panel p-8 h-full relative"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
              >
                {/* Signal indicator */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00F2FF] animate-pulse" />
                  <span className="telemetry-text text-[9px]">SIGNAL RECEIVED</span>
                </div>

                <blockquote className="text-[#8E9AAF] text-sm leading-relaxed mb-8 italic">
                  "{t.quote}"
                </blockquote>

                <div className="border-t border-white/5 pt-4">
                  <div className="font-mono text-sm font-medium">{t.author}</div>
                  <div className="text-[#8E9AAF] text-xs mt-1">{t.role}</div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#00F2FF]/15" />
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}