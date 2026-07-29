import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/orbital/SectionReveal';
import SectionLabel from '@/components/orbital/SectionLabel';
import useMousePosition from '@/lib/useMousePosition';
import SkillsCategorizedGrid from '@/components/orbital/SkillsCategorizedGrid';

const SKILLS = [

  // ================= PROGRAMMING LANGUAGES =================

  {
    id: 'python',
    label: 'Python',
    x: 30,
    y: 15,
    size: 'lg',
    connections: ['django', 'fastapi', 'pandas', 'pytorch', 'tensorflow', 'ml']
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    x: 15,
    y: 30,
    size: 'lg',
    connections: ['react', 'typescript', 'nodejs', 'frontend']
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    x: 25,
    y: 25,
    size: 'md',
    connections: ['react', 'javascript']
  },
  {
    id: 'cpp',
    label: 'C / C++',
    x: 50,
    y: 15,
    size: 'md',
    connections: ['basilisk', 'simulation']
  },
  {
    id: 'php',
    label: 'PHP',
    x: 80,
    y: 20,
    size: 'md',
    connections: ['laravel', 'mysql', 'backend']
  },
  {
    id: 'r',
    label: 'R Programming',
    x: 85,
    y: 80,
    size: 'sm',
    connections: ['statistics', 'analytics']
  },


  // ================= BACKEND DEVELOPMENT =================

  {
    id: 'backend',
    label: 'Backend Engineering',
    x: 45,
    y: 35,
    size: 'lg',
    connections: ['python', 'nodejs', 'apis', 'databases']
  },
  {
    id: 'django',
    label: 'Django',
    x: 40,
    y: 25,
    size: 'md',
    connections: ['python', 'postgresql', 'apis']
  },
  {
    id: 'fastapi',
    label: 'FastAPI',
    x: 55,
    y: 25,
    size: 'md',
    connections: ['python', 'apis']
  },
  {
    id: 'laravel',
    label: 'Laravel',
    x: 75,
    y: 30,
    size: 'md',
    connections: ['php', 'mysql']
  },
  {
    id: 'nodejs',
    label: 'Node.js',
    x: 20,
    y: 45,
    size: 'md',
    connections: ['javascript', 'apis']
  },
  {
    id: 'apis',
    label: 'REST / GraphQL APIs',
    x: 60,
    y: 40,
    size: 'lg',
    connections: ['backend', 'oauth', 'postman']
  },
  {
    id: 'oauth',
    label: 'OAuth 2.0',
    x: 75,
    y: 45,
    size: 'sm',
    connections: ['apis', 'security']
  },
  {
    id: 'security',
    label: 'Secure Coding',
    x: 90,
    y: 45,
    size: 'sm',
    connections: ['oauth']
  },


  // ================= FRONTEND =================

  {
    id: 'react',
    label: 'React',
    x: 15,
    y: 55,
    size: 'lg',
    connections: ['javascript', 'typescript', 'tailwind']
  },
  {
    id: 'html',
    label: 'HTML5',
    x: 5,
    y: 65,
    size: 'sm',
    connections: ['frontend']
  },
  {
    id: 'css',
    label: 'CSS3',
    x: 15,
    y: 70,
    size: 'sm',
    connections: ['frontend']
  },
  {
    id: 'tailwind',
    label: 'Tailwind CSS',
    x: 25,
    y: 65,
    size: 'md',
    connections: ['react']
  },
  {
    id: 'mui',
    label: 'Material UI',
    x: 35,
    y: 75,
    size: 'sm',
    connections: ['react']
  },
  {
    id: 'frontend',
    label: 'Frontend Development',
    x: 20,
    y: 85,
    size: 'lg',
    connections: ['react', 'html', 'css']
  },
  {
    id: 'bootstrap',
    label: 'Bootstrap',
    x: 45,
    y: 85,
    size: 'sm',
    connections: ['frontend']
  },
  {
    id: 'scss',
    label: 'SCSS / LESS',
    x: 60,
    y: 85,
    size: 'sm',
    connections: ['frontend']
  },


  // ================= DATABASES =================

  {
    id: 'databases',
    label: 'Database Systems',
    x: 70,
    y: 55,
    size: 'lg',
    connections: ['sql', 'postgresql', 'mongodb']
  },
  {
    id: 'sql',
    label: 'SQL',
    x: 65,
    y: 65,
    size: 'md',
    connections: ['postgresql', 'mysql']
  },
  {
    id: 'postgresql',
    label: 'PostgreSQL',
    x: 80,
    y: 65,
    size: 'md',
    connections: ['gis', 'django']
  },
  {
    id: 'mysql',
    label: 'MySQL',
    x: 85,
    y: 55,
    size: 'md',
    connections: ['php', 'laravel']
  },
  {
    id: 'mongodb',
    label: 'MongoDB',
    x: 90,
    y: 65,
    size: 'sm',
    connections: ['databases']
  },
  {
    id: 'firebase',
    label: 'Firebase',
    x: 75,
    y: 75,
    size: 'sm',
    connections: ['databases']
  },


  // ================= DATA ENGINEERING =================

  {
    id: 'data-engineering',
    label: 'Data Engineering',
    x: 50,
    y: 55,
    size: 'lg',
    connections: ['python', 'pandas', 'pyspark', 'etl']
  },
  {
    id: 'etl',
    label: 'ETL Pipelines',
    x: 45,
    y: 65,
    size: 'md',
    connections: ['data-engineering']
  },
  {
    id: 'pandas',
    label: 'Pandas',
    x: 35,
    y: 60,
    size: 'md',
    connections: ['python', 'analytics']
  },
  {
    id: 'numpy',
    label: 'NumPy',
    x: 25,
    y: 60,
    size: 'sm',
    connections: ['python']
  },
  {
    id: 'pyspark',
    label: 'PySpark',
    x: 55,
    y: 75,
    size: 'md',
    connections: ['data-engineering']
  },
  {
    id: 'scraping',
    label: 'Web Scraping',
    x: 65,
    y: 80,
    size: 'sm',
    connections: ['python']
  },


  // ================= MACHINE LEARNING =================

  {
    id: 'ml',
    label: 'Machine Learning',
    x: 40,
    y: 45,
    size: 'lg',
    connections: ['python', 'tensorflow', 'pytorch']
  },
  {
    id: 'deep-learning',
    label: 'Deep Learning',
    x: 35,
    y: 30,
    size: 'lg',
    connections: ['tensorflow', 'pytorch']
  },
  {
    id: 'tensorflow',
    label: 'TensorFlow',
    x: 25,
    y: 15,
    size: 'md',
    connections: ['deep-learning']
  },
  {
    id: 'pytorch',
    label: 'PyTorch',
    x: 65,
    y: 15,
    size: 'md',
    connections: ['deep-learning']
  },
  {
    id: 'sklearn',
    label: 'Scikit-learn',
    x: 70,
    y: 20,
    size: 'sm',
    connections: ['ml']
  },
  {
    id: 'cnn',
    label: 'CNN',
    x: 50,
    y: 80,
    size: 'sm',
    connections: ['deep-learning']
  },
  {
    id: 'algorithms',
    label: 'SVM / KNN / Random Forest',
    x: 80,
    y: 85,
    size: 'sm',
    connections: ['ml']
  },


  // ================= SPACE / SIMULATION =================

  {
    id: 'simulation',
    label: 'Simulation Systems',
    x: 50,
    y: 90,
    size: 'lg',
    connections: ['basilisk', 'unity', 'visualisation']
  },
  {
    id: 'basilisk',
    label: 'Basilisk',
    x: 55,
    y: 90,
    size: 'md',
    connections: ['cpp', 'python']
  },
  {
    id: 'unity',
    label: 'Unity / Vizard',
    x: 70,
    y: 90,
    size: 'md',
    connections: ['simulation']
  },
  {
    id: 'geospatial',
    label: 'Geospatial Processing',
    x: 85,
    y: 90,
    size: 'lg',
    connections: ['satellite', 'gis']
  },
  {
    id: 'satellite',
    label: 'Satellite Imagery',
    x: 90,
    y: 75,
    size: 'lg',
    connections: ['computer-vision']
  },


  // ================= CLOUD DEVOPS =================

  {
    id: 'docker',
    label: 'Docker',
    x: 10,
    y: 90,
    size: 'md',
    connections: ['cloud']
  },
  {
    id: 'azure',
    label: 'Microsoft Azure',
    x: 15,
    y: 80,
    size: 'md',
    connections: ['cloud']
  },
  {
    id: 'cicd',
    label: 'CI/CD',
    x: 25,
    y: 90,
    size: 'sm',
    connections: ['github']
  },
  {
    id: 'github',
    label: 'GitHub / Bitbucket',
    x: 35,
    y: 90,
    size: 'sm',
    connections: ['cicd']
  },
  {
    id: 'linux',
    label: 'Linux Shell',
    x: 5,
    y: 85,
    size: 'sm',
    connections: ['cloud']
  },


  // ================= TOOLS =================

  {
    id: 'tools',
    label: 'Engineering Tools',
    x: 90,
    y: 20,
    size: 'lg',
    connections: ['vscode', 'jupyter', 'jira']
  },
  {
    id: 'vscode',
    label: 'VS Code',
    x: 85,
    y: 30,
    size: 'sm',
    connections: ['tools']
  },
  {
    id: 'jupyter',
    label: 'Jupyter Notebook',
    x: 90,
    y: 35,
    size: 'sm',
    connections: ['python']
  },
  {
    id: 'anaconda',
    label: 'Anaconda',
    x: 95,
    y: 40,
    size: 'sm',
    connections: ['python']
  },
  {
    id: 'powerbi',
    label: 'Power BI / Tableau',
    x: 90,
    y: 55,
    size: 'sm',
    connections: ['analytics']
  }

];

const SIZE_MAP = { lg: 6, md: 4, sm: 3 };

export default function SkillsConstellation() {
  const [hoveredId, setHoveredId] = useState(null);
  const mouse = useMousePosition();

  const hoveredSkill = SKILLS.find(s => s.id === hoveredId);
  const activeConnections = hoveredSkill ? hoveredSkill.connections : [];

  const getNodeColor = useCallback((id) => {
    if (!hoveredId) return '#00F2FF';
    if (id === hoveredId) return '#FFFFFF';
    if (activeConnections.includes(id)) return '#00F2FF';
    return '#8E9AAF';
  }, [hoveredId, activeConnections]);

  const connections = useMemo(() => {
    const lines = [];
    const seen = new Set();
    SKILLS.forEach(skill => {
      skill.connections.forEach(targetId => {
        const key = [skill.id, targetId].sort().join('-');
        if (seen.has(key)) return;
        seen.add(key);
        const target = SKILLS.find(s => s.id === targetId);
        if (target) lines.push({ from: skill, to: target, key });
      });
    });
    return lines;
  }, []);

  return (
    <section id="skills" className="relative min-h-screen py-2 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <SectionLabel number="05" label="Skills" />
          <h2 className="font-mono font-semibold text-3xl md:text-5xl mb-4">
            Skill <span className="text-[#00F2FF]">Constellation</span>
          </h2>
          <p className="text-[#8E9AAF] max-w-lg mb-5 text-sm hidden lg:block">
            Hover over nodes to explore connections between skills and technologies.
          </p>
        </SectionReveal>

        {/* Categorized grid for tablet & mobile */}
        <div className="lg:hidden mb-8">
          <SkillsCategorizedGrid />
        </div>

        {/* Constellation for desktop */}
        <SectionReveal delay={0.2}>
          <div className="hidden lg:block relative w-full aspect-[16/9] glass-panel overflow-hidden">
            {/* Parallax background */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: `radial-gradient(circle at ${50 + mouse.normalizedX * 5}% ${50 + mouse.normalizedY * 5}%, rgba(0,242,255,0.08) 0%, transparent 60%)`,
              }}
            />

            {/* SVG connections */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              {connections.map(({ from, to, key }) => {
                const isActive = hoveredId && (
                  (from.id === hoveredId && activeConnections.includes(to.id)) ||
                  (to.id === hoveredId && activeConnections.includes(from.id))
                );
                return (
                  <line
                    key={key}
                    x1={`${from.x}%`} y1={`${from.y}%`}
                    x2={`${to.x}%`} y2={`${to.y}%`}
                    stroke={isActive ? '#00F2FF' : '#8E9AAF'}
                    strokeWidth={isActive ? 1.5 : 0.5}
                    strokeOpacity={isActive ? 0.8 : 0.15}
                    className="transition-all duration-300"
                  />
                );
              })}
            </svg>

            {/* Nodes */}
            {SKILLS.map((skill) => {
              const size = SIZE_MAP[skill.size];
              const isActive = skill.id === hoveredId || activeConnections.includes(skill.id);

              return (
                <motion.div
                  key={skill.id}
                  className="absolute cursor-pointer flex flex-col items-center"
                  style={{
                    left: `${skill.x}%`,
                    top: `${skill.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onMouseEnter={() => setHoveredId(skill.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  whileHover={{ scale: 1.3 }}
                >
                  <div
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: `${size * 2 + 4}px`,
                      height: `${size * 2 + 4}px`,
                      backgroundColor: getNodeColor(skill.id),
                      boxShadow: isActive ? `0 0 ${size * 4}px ${getNodeColor(skill.id)}` : 'none',
                    }}
                  />
                  <span
                    className={`font-mono text-[9px] md:text-[10px] mt-1 whitespace-nowrap tracking-wider transition-all duration-300 ${
                      isActive ? 'text-white opacity-100' : 'text-[#8E9AAF] opacity-50'
                    }`}
                  >
                    {skill.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}