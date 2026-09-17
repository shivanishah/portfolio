import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionReveal from '@/components/orbital/SectionReveal';
import SectionLabel from '@/components/orbital/SectionLabel';
import { Image } from '@/components/ui/image';

// Mission status vocabulary. Keys are what a project's `status` field holds;
// legacy values (ACTIVE / DEPLOYED) are aliased so old entries keep rendering.
const STATUS_CONFIG = {
  ONGOING: {
    label: 'ONGOING',
    className: 'bg-[#00F2FF]/10 text-[#00F2FF] border border-[#00F2FF]/30',
    dot: 'bg-[#00F2FF]',
    pulse: true,
  },
  COMPLETED: {
    label: 'COMPLETED',
    className: 'bg-green-500/10 text-green-400 border border-green-400/30',
    dot: 'bg-green-400',
    pulse: false,
  },
  PAUSED: {
    label: 'PAUSED',
    className: 'bg-yellow-500/10 text-yellow-400 border border-yellow-400/30',
    dot: 'bg-yellow-400',
    pulse: false,
  },
};
STATUS_CONFIG.ACTIVE = STATUS_CONFIG.ONGOING;
STATUS_CONFIG.DEPLOYED = STATUS_CONFIG.COMPLETED;

const PROJECTS = [
  {
    title: 'PortfolioForge',
    subtitle: 'Interactive Software Engineering Portfolio Platform',
    description:
      'A modern, responsive portfolio platform showcasing software engineering experience, research projects, technical skills, and professional achievements.',
    highlights: [
      {
        label: 'Responsive Portfolio Platform',
        text: 'Designed and developed a modern, responsive platform to showcase engineering experience, research projects, technical skills, and professional achievements.',
      },
      {
        label: 'Component-Based Architecture',
        text: 'Built a component-based frontend using React 18, Vite, and Tailwind CSS, enabling reusable UI components, maintainability, and optimized performance.',
      },
      {
        label: 'Interactive UI Animations',
        text: 'Implemented dynamic user experiences with Framer Motion, including project transitions, skill visualizations, and responsive UI interactions.',
      },
      {
        label: 'Scalable Content Structure',
        text: 'Developed structured sections for the experience timeline, project showcases, technical skills, blog content, and testimonials with scalable content patterns.',
      },
      {
        label: 'Contact Form Integration',
        text: 'Built a validated contact form using React Hook Form, wired to Resend through a Vercel serverless function for real email submissions with success and error handling.',
      },
      {
        label: 'Performance, Quality & Deployment',
        text: 'Applied frontend best practices: responsive design, cross-device compatibility, ESLint code quality checks, production builds, and automated Vercel deployments.',
      },
    ],
    tags: ['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Hook Form', 'Resend', 'Vercel'],
    status: 'ONGOING',
    link: 'https://github.com/shivanishah/portfolio',
    img: '/images/3c263f9f5_generated_264b0ad9.png',
  },
  {
    title: 'Employee Feedback Insight Assistant',
    subtitle: 'AI-Powered Workplace Analytics Platform',
    description:
      'A prototype AI-powered employee feedback analytics app that turns open-text feedback into measurable, actionable workplace insight.',
    highlights: [
      {
        label: 'AI-Powered Feedback Analytics',
        text: 'Built a prototype analytics app using Python, Streamlit, pandas, Plotly, Seaborn, and the OpenAI API, aligned with employee experience and workplace insight use cases.',
      },
      {
        label: 'LLM & Transformer Sentiment Analysis',
        text: 'Developed sentiment workflows to classify open-text feedback, compare predictions against labelled data, and evaluate model performance.',
      },
      {
        label: 'Model Evaluation & Metrics',
        text: 'Implemented accuracy, macro/weighted F1-score, precision, recall, confusion matrix, confidence distribution, and misclassification review.',
      },
      {
        label: 'Topic Extraction & Text Enrichment',
        text: 'Designed workflows to surface recurring themes such as management, culture, communication, workload, growth, recognition, and work-life balance.',
      },
      {
        label: 'Interactive Dashboards',
        text: 'Created dashboards for sentiment distribution, department-level ratings, trend analysis, topic frequency, pros/cons exploration, and data quality checks.',
      },
      {
        label: 'Natural-Language Q&A Assistant',
        text: 'Built an assistant that answers questions about employee feedback with evidence-based summaries and recommendations.',
      },
      {
        label: 'Human-Centred AI',
        text: 'Made outputs interpretable, measurable, and focused on actionable improvements to employee experience.',
      },
    ],
    tags: ['Python', 'LLMs', 'NLP', 'Streamlit', 'OpenAI', 'Pandas', 'Plotly', 'Seaborn'],
    status: 'COMPLETED',
    link: 'https://github.com/shivanishah/feedback-insight',
    img: '/images/d9dca89bc_generated_37b016ff.png',
    livelink: 'https://feedback-insight.streamlit.app/',
  },
];

const VISIBLE_HIGHLIGHTS = 3;

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const status = STATUS_CONFIG[project.status] ?? STATUS_CONFIG.ONGOING;
  const highlights = project.highlights ?? [];
  const shownHighlights = expanded ? highlights : highlights.slice(0, VISIBLE_HIGHLIGHTS);
  const hiddenCount = highlights.length - VISIBLE_HIGHLIGHTS;

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
            <span className={`inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.2em] px-3 py-1 ${status.className}`}>
              <motion.span
                className={`w-1.5 h-1.5 rounded-full ${status.dot}`}
                animate={status.pulse ? { opacity: [1, 0.25, 1] } : { opacity: 1 }}
                transition={status.pulse ? { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } : undefined}
              />
              {status.label}
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
          <p className="text-[#8E9AAF] text-sm leading-relaxed mb-3 sm:mb-4">{project.description}</p>

          {highlights.length > 0 && (
            <ul className="space-y-2 mb-3 sm:mb-4">
              {shownHighlights.map((item) => (
                <li key={item.label} className="flex gap-2.5 text-[#8E9AAF] text-xs sm:text-sm leading-relaxed">
                  <span className="mt-[7px] w-1 h-1 shrink-0 rotate-45 bg-[#00F2FF]/70" />
                  <span>
                    <span className="text-white/80 font-medium">{item.label}:</span> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {hiddenCount > 0 && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="font-mono text-[9px] sm:text-[10px] tracking-wider text-[#00F2FF]/70 hover:text-[#00F2FF] transition-colors mb-3 sm:mb-4"
            >
              {expanded ? '— SHOW LESS' : `+ ${hiddenCount} MORE`}
            </button>
          )}

          <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-[8px] sm:text-[9px] tracking-wider px-2 py-1 border border-white/10 text-[#8E9AAF]">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3 sm:gap-4">
            {project.livelink && (
              <a
                href={project.livelink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-wider text-[#00F2FF] hover:text-white transition-colors px-3 sm:px-4 py-2 sm:py-3"
              >
                <ExternalLink size={12} /> VIEW MISSION
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] tracking-wider text-[#8E9AAF] hover:text-white transition-colors px-3 sm:px-4 py-2 sm:py-3"
              >
                <Github size={12} /> SOURCE
              </a>
            )}
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