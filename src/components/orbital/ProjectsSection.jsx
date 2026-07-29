import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionReveal from '@/components/orbital/SectionReveal';
import SectionLabel from '@/components/orbital/SectionLabel';
import { Image } from '@/components/ui/image';

const PROJECT_IMAGE = '';

const PROJECTS = [
  {
    title: 'Employee Feedback Insight Assistant',
    subtitle: 'AI-Powered Workplace Analytics Platform',
    description: 'Built a prototype AI-powered employee feedback analytics app using Python, Streamlit, pandas, Plotly, Seaborn, OpenAI API, aligned with employee experience and workplace insight use cases. Developed LLM and transformer-based sentiment analysis workflows to classify open-text feedback, compare predicted sentiment against labelled data, and evaluate model performance. Implemented evaluation metrics including accuracy, macro/weighted F1-score, precision, recall, confusion matrix, confidence distribution, and misclassification review. Designed topic extraction and text enrichment workflows to identify recurring workplace themes such as management, culture, communication, workload, growth, recognition, and work-life balance. Created interactive dashboards for sentiment distribution, department-level ratings, trend analysis, topic frequency, pros/consexploration, and data quality checks. Built a natural-language Q&A assistant that allows users to ask questions about employee feedback and receive evidence-based summaries and recommendations. Applied a human-centred AI approach by making outputs interpretable, measurable, and focused on actionable improvements to employee experience.',
    tags: ['Python','LLMs', 'NLP', 'Streamlit', 'OpenAI', 'Pandas', 'Plotly'],
    status: 'COMPLETED',
    link: 'https://github.com/shivanishah/feedback-insight',
    img: '/images/d9dca89bc_generated_37b016ff.png',
    livelink:'https://feedback-insight.streamlit.app/'
  }
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <SectionReveal delay={index * 0.1}>
      <motion.div
        className="glass-panel relative overflow-hidden group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4 }}
      >
        {/* Project image */}
        <div className="h-36 sm:h-48 relative overflow-hidden">
          <Image
            src={project.img}
            alt={`${project.title} project visualization`}
            className="w-full h-full"
            fittingType="fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/60 to-transparent" />

          {/* Status badge */}
          <div className="absolute top-4 right-4">
            <span className={`font-mono text-[9px] tracking-[0.2em] px-3 py-1 ${
              project.status === 'ACTIVE' ? 'bg-[#00F2FF]/10 text-[#00F2FF] border border-[#00F2FF]/30'
                : project.status === 'DEPLOYED' ? 'bg-green-500/10 text-green-400 border border-green-400/30'
                : 'bg-yellow-500/10 text-yellow-400 border border-yellow-400/30'
            }`}>
              {project.status}
            </span>
          </div>

          {/* Holographic scan effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-[#00F2FF]/5 to-transparent"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="font-mono font-semibold text-base sm:text-lg mb-1">{project.title}</h3>
          <p className="text-[#00F2FF] font-mono text-xs tracking-wider mb-2 sm:mb-3">{project.subtitle}</p>
          <p className="text-[#8E9AAF] text-sm leading-relaxed mb-2 sm:mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-[8px] sm:text-[9px] tracking-wider px-2 py-1 border border-white/10 text-[#8E9AAF]">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 sm:gap-4">
            <a href={project.livelink} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-wider text-[#00F2FF] hover:text-white transition-colors px-3 sm:px-4 py-2 sm:py-3">
                VIEW MISSION
            </button></a>
            {/* <a href={project.livelink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-wider text-[#00F2FF] hover:text-white transition-colors px-3 sm:px-4 py-2 sm:py-3">
               VIEW MISSION
            </a> */}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-wider text-[#8E9AAF] hover:text-white transition-colors px-3 sm:px-4 py-2 sm:py-3">
              <Github size={12} /> SOURCE
            </a>
          </div>

          {/* Bottom edge glow on hover */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[1px]"
            style={{ background: 'linear-gradient(90deg, transparent, #00F2FF, transparent)' }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </motion.div>
    </SectionReveal>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen py-2 px-4 sm:py-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <SectionLabel number="03" label="Projects" />
          <h2 className="font-mono font-semibold text-3xl md:text-5xl mb-4 sm:mb-16">
            Active <span className="text-[#00F2FF]">Missions</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}