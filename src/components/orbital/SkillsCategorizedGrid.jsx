import React from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/orbital/SectionReveal';

const CATEGORIES = [
  {
    title: 'Backend & API Engineering',
    skills: [
      'Python',
      'Django',
      'FastAPI',
      'Node.js',
      'Resend',
      'email API integration',
      'PHP',
      'Laravel',
      'Yii2',
      'C',
      'C++',
      'REST APIs',
      'GraphQL',
      'API Design',
      'AJAX',
      'OAuth 2.0',
      'Secure Coding',
    ],
  },

  {
    title: 'Frontend Engineering',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Material UI',
      'Radix UI',
      'React Router',
      'React Hook Form',
      'Framer Motion',
      'Vite',
      'jQuery',
      'Bootstrap',
      'SCSS',
      'LESS',
      'Flask',
    ],
  },

  {
    title: 'Databases & Data Systems',
    skills: [
      'PostgreSQL',
      'SQL',
      'MySQL',
      'MongoDB',
      'Microsoft SQL Server',
      'Microsoft Access',
      'Firebase',
      'ETL Pipelines',
      'Data Ingestion',
      'Database Optimisation',
    ],
  },

  {
    title: 'Cloud, DevOps & Engineering',
    skills: [
      'Microsoft Azure',
      'Docker',
      'CI/CD',
      'GitHub',
      'Bitbucket',
      'Linux',
      'Vercel',
      'ESLint',
      'automated build pipelines',
      'Linux Shell Scripting',
      'Staging & Production Deployments',
      'Postman',
      'Jira',
      'Asana',
      'Agile Methodologies',
    ],
  },

  {
    title: 'AI & Machine Learning',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'CNN',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'SVM',
      'KNN',
      'Random Forest',
      'SciPy',
    ],
  },

  {
    title: 'Data Engineering & Analytics',
    skills: [
      'Data Collection',
      'Data Cleaning',
      'Data Transformation',
      'ETL',
      'Web Scraping',
      'Pandas',
      'NumPy',
      'PySpark',
      'Microsoft Excel',
      'Power BI',
      'Tableau',
      'SAS',
      'Orange',
    ],
  },

  {
    title: 'Space, Simulation & Geospatial',
    skills: [
      'Basilisk',
      'Vizard',
      'Unity',
      'Geospatial Data Processing',
      'Satellite Imagery',
      'Mission Visualisation',
    ],
  },

  {
    title: 'Development & Research Environment',
    skills: [
      'VS Code',
      'Jupyter Notebook',
      'Anaconda',
      'RStudio',
      'Spyder',
      'AI-Assisted Development',
      'Technical Research',
    ],
  },

  {
    title: 'Professional & Collaboration',
    skills: [
      'Technical Communication',
      'Team Collaboration',
      'Time Management',
      'Adaptability',
      'Continuous Learning',
      'Problem Solving',
      'Cross-functional Collaboration',
    ],
  },
];

export default function SkillsCategorizedGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {CATEGORIES.map((cat, idx) => (
        <SectionReveal key={cat.title} delay={idx * 0.1}>
          <div className="glass-panel p-6 h-full">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#00F2FF]" style={{ boxShadow: '0 0 8px #00F2FF' }} />
              <h3 className="font-mono text-sm font-medium tracking-wide">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 + i * 0.04 }}
                  className="font-mono text-[11px] tracking-wider px-3 py-1.5 border border-[#00F2FF]/20 text-[#00F2FF]/80 bg-[#00F2FF]/5"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </SectionReveal>
      ))}
    </div>
  );
}