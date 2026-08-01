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
    connections: [
      'django', 'fastapi', 'flask', 'pandas', 'numpy', 'pytorch',
      'tensorflow', 'sklearn', 'scipy', 'ml', 'data-engineering',
      'web-scraping', 'basilisk'
    ]
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    x: 15,
    y: 30,
    size: 'lg',
    connections: [
      'react', 'typescript', 'nodejs', 'jquery', 'ajax',
      'vite', 'frontend'
    ]
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    x: 25,
    y: 35,
    size: 'lg',
    connections: ['react', 'nodejs', 'frontend', 'api-design']
  },
  {
    id: 'c',
    label: 'C',
    x: 45,
    y: 15,
    size: 'md',
    connections: ['cpp', 'basilisk', 'simulation']
  },
  {
    id: 'cpp',
    label: 'C++',
    x: 55,
    y: 15,
    size: 'md',
    connections: ['c', 'basilisk', 'simulation']
  },
  {
    id: 'php',
    label: 'PHP',
    x: 80,
    y: 20,
    size: 'md',
    connections: ['laravel', 'yii2', 'mysql', 'backend']
  },


  // ================= BACKEND DEVELOPMENT =================

  {
    id: 'backend',
    label: 'Backend Engineering',
    x: 45,
    y: 35,
    size: 'lg',
    connections: [
      'python', 'nodejs', 'php', 'django', 'fastapi', 'flask',
      'laravel', 'yii2', 'apis', 'graphql', 'api-design',
      'databases', 'secure-coding'
    ]
  },
  {
    id: 'django',
    label: 'Django',
    x: 38,
    y: 25,
    size: 'md',
    connections: ['python', 'postgresql', 'apis', 'backend']
  },
  {
    id: 'fastapi',
    label: 'FastAPI',
    x: 52,
    y: 25,
    size: 'md',
    connections: ['python', 'apis', 'api-design', 'backend']
  },
  {
    id: 'flask',
    label: 'Flask',
    x: 62,
    y: 25,
    size: 'sm',
    connections: ['python', 'apis', 'backend']
  },
  {
    id: 'laravel',
    label: 'Laravel',
    x: 75,
    y: 30,
    size: 'md',
    connections: ['php', 'mysql', 'backend']
  },
  {
    id: 'yii2',
    label: 'Yii2',
    x: 85,
    y: 30,
    size: 'sm',
    connections: ['php', 'mysql', 'backend']
  },
  {
    id: 'nodejs',
    label: 'Node.js',
    x: 20,
    y: 45,
    size: 'md',
    connections: ['javascript', 'typescript', 'apis', 'resend', 'backend']
  },
  {
    id: 'apis',
    label: 'REST APIs',
    x: 55,
    y: 40,
    size: 'lg',
    connections: ['backend', 'graphql', 'api-design', 'oauth', 'postman']
  },
  {
    id: 'graphql',
    label: 'GraphQL',
    x: 68,
    y: 38,
    size: 'md',
    connections: ['apis', 'api-design', 'react', 'nodejs']
  },
  {
    id: 'api-design',
    label: 'API Design',
    x: 63,
    y: 48,
    size: 'md',
    connections: ['apis', 'graphql', 'backend', 'secure-coding']
  },
  {
    id: 'ajax',
    label: 'AJAX',
    x: 35,
    y: 50,
    size: 'sm',
    connections: ['javascript', 'jquery', 'apis']
  },
  {
    id: 'oauth',
    label: 'OAuth 2.0',
    x: 78,
    y: 45,
    size: 'sm',
    connections: ['apis', 'secure-coding']
  },
  {
    id: 'secure-coding',
    label: 'Secure Coding',
    x: 90,
    y: 45,
    size: 'md',
    connections: ['oauth', 'api-design', 'backend']
  },
  {
    id: 'resend',
    label: 'Resend',
    x: 30,
    y: 42,
    size: 'sm',
    connections: ['nodejs', 'email-api', 'vercel']
  },
  {
    id: 'email-api',
    label: 'Email API Integration',
    x: 38,
    y: 43,
    size: 'sm',
    connections: ['resend', 'nodejs', 'apis']
  },


  // ================= FRONTEND =================

  {
    id: 'frontend',
    label: 'Frontend Development',
    x: 20,
    y: 85,
    size: 'lg',
    connections: [
      'react', 'html5', 'css3', 'tailwind', 'mui', 'radix',
      'react-router', 'react-hook-form', 'framer-motion',
      'vite', 'jquery', 'bootstrap', 'scss-less'
    ]
  },
  {
    id: 'react',
    label: 'React',
    x: 15,
    y: 55,
    size: 'lg',
    connections: [
      'javascript', 'typescript', 'tailwind', 'mui', 'radix',
      'react-router', 'react-hook-form', 'framer-motion',
      'vite', 'graphql', 'frontend'
    ]
  },
  {
    id: 'html5',
    label: 'HTML5',
    x: 5,
    y: 65,
    size: 'sm',
    connections: ['frontend', 'css3']
  },
  {
    id: 'css3',
    label: 'CSS3',
    x: 15,
    y: 70,
    size: 'sm',
    connections: ['frontend', 'html5', 'tailwind', 'scss-less']
  },
  {
    id: 'tailwind',
    label: 'Tailwind CSS',
    x: 25,
    y: 65,
    size: 'md',
    connections: ['react', 'css3', 'frontend']
  },
  {
    id: 'mui',
    label: 'Material UI',
    x: 35,
    y: 75,
    size: 'sm',
    connections: ['react', 'frontend']
  },
  {
    id: 'radix',
    label: 'Radix UI',
    x: 45,
    y: 75,
    size: 'sm',
    connections: ['react', 'frontend']
  },
  {
    id: 'react-router',
    label: 'React Router',
    x: 5,
    y: 75,
    size: 'sm',
    connections: ['react', 'frontend']
  },
  {
    id: 'react-hook-form',
    label: 'React Hook Form',
    x: 30,
    y: 80,
    size: 'sm',
    connections: ['react', 'frontend', 'email-api']
  },
  {
    id: 'framer-motion',
    label: 'Framer Motion',
    x: 40,
    y: 65,
    size: 'md',
    connections: ['react', 'frontend']
  },
  {
    id: 'vite',
    label: 'Vite',
    x: 10,
    y: 50,
    size: 'md',
    connections: ['react', 'javascript', 'typescript', 'eslint', 'automated-builds']
  },
  {
    id: 'jquery',
    label: 'jQuery',
    x: 50,
    y: 85,
    size: 'sm',
    connections: ['javascript', 'ajax', 'frontend']
  },
  {
    id: 'bootstrap',
    label: 'Bootstrap',
    x: 60,
    y: 85,
    size: 'sm',
    connections: ['frontend', 'css3']
  },
  {
    id: 'scss-less',
    label: 'SCSS / LESS',
    x: 70,
    y: 85,
    size: 'sm',
    connections: ['frontend', 'css3']
  },


  // ================= DATABASES & DATA PIPELINES =================

  {
    id: 'databases',
    label: 'Database Systems',
    x: 70,
    y: 55,
    size: 'lg',
    connections: [
      'sql', 'postgresql', 'mysql', 'mongodb', 'mssql',
      'ms-access', 'firebase', 'database-optimization',
      'data-ingestion', 'etl'
    ]
  },
  {
    id: 'sql',
    label: 'SQL',
    x: 65,
    y: 65,
    size: 'md',
    connections: ['postgresql', 'mysql', 'mssql', 'database-optimization']
  },
  {
    id: 'postgresql',
    label: 'PostgreSQL',
    x: 80,
    y: 65,
    size: 'md',
    connections: ['sql', 'django', 'geospatial', 'databases']
  },
  {
    id: 'mysql',
    label: 'MySQL',
    x: 85,
    y: 55,
    size: 'md',
    connections: ['sql', 'php', 'laravel', 'yii2']
  },
  {
    id: 'mongodb',
    label: 'MongoDB',
    x: 90,
    y: 65,
    size: 'sm',
    connections: ['databases', 'data-ingestion']
  },
  {
    id: 'firebase',
    label: 'Firebase',
    x: 75,
    y: 75,
    size: 'sm',
    connections: ['databases', 'data-ingestion']
  },
  {
    id: 'mssql',
    label: 'Microsoft SQL Server',
    x: 95,
    y: 58,
    size: 'sm',
    connections: ['sql', 'databases']
  },
  {
    id: 'ms-access',
    label: 'Microsoft Access',
    x: 95,
    y: 72,
    size: 'sm',
    connections: ['databases', 'data-collection']
  },
  {
    id: 'database-optimization',
    label: 'Database Optimization',
    x: 78,
    y: 48,
    size: 'md',
    connections: ['sql', 'postgresql', 'mysql', 'databases']
  },
  {
    id: 'data-ingestion',
    label: 'Data Ingestion',
    x: 58,
    y: 58,
    size: 'md',
    connections: ['etl', 'databases', 'data-engineering']
  },
  {
    id: 'etl',
    label: 'ETL Pipelines',
    x: 45,
    y: 65,
    size: 'md',
    connections: ['data-engineering', 'data-ingestion', 'cleaning', 'transformation']
  },


  // ================= CLOUD / DEVOPS =================

  {
    id: 'cloud',
    label: 'Cloud / DevOps',
    x: 12,
    y: 90,
    size: 'lg',
    connections: [
      'docker', 'azure', 'vercel', 'cicd', 'github',
      'bitbucket', 'linux', 'linux-shell', 'deployments',
      'automated-builds', 'agile', 'jira', 'asana', 'postman', 'eslint'
    ]
  },
  {
    id: 'docker',
    label: 'Docker',
    x: 5,
    y: 90,
    size: 'md',
    connections: ['cloud', 'deployments']
  },
  {
    id: 'azure',
    label: 'Azure',
    x: 15,
    y: 80,
    size: 'md',
    connections: ['cloud', 'deployments']
  },
  {
    id: 'vercel',
    label: 'Vercel',
    x: 25,
    y: 80,
    size: 'md',
    connections: ['cloud', 'automated-builds', 'resend']
  },
  {
    id: 'cicd',
    label: 'CI/CD',
    x: 25,
    y: 90,
    size: 'md',
    connections: ['github', 'bitbucket', 'automated-builds', 'deployments']
  },
  {
    id: 'github',
    label: 'GitHub',
    x: 35,
    y: 90,
    size: 'sm',
    connections: ['cicd', 'cloud']
  },
  {
    id: 'bitbucket',
    label: 'Bitbucket',
    x: 45,
    y: 90,
    size: 'sm',
    connections: ['cicd', 'cloud']
  },
  {
    id: 'linux',
    label: 'Linux',
    x: 5,
    y: 82,
    size: 'sm',
    connections: ['linux-shell', 'cloud']
  },
  {
    id: 'linux-shell',
    label: 'Linux Shell Scripting',
    x: 12,
    y: 85,
    size: 'sm',
    connections: ['linux', 'cloud', 'automated-builds']
  },
  {
    id: 'deployments',
    label: 'Staging / Production Deployments',
    x: 38,
    y: 82,
    size: 'md',
    connections: ['cicd', 'docker', 'azure', 'vercel']
  },
  {
    id: 'automated-builds',
    label: 'Automated Build Pipelines',
    x: 32,
    y: 72,
    size: 'md',
    connections: ['cicd', 'vercel', 'vite', 'eslint']
  },
  {
    id: 'agile',
    label: 'Agile Methodologies',
    x: 55,
    y: 92,
    size: 'sm',
    connections: ['jira', 'asana', 'teamwork']
  },
  {
    id: 'jira',
    label: 'Jira',
    x: 65,
    y: 92,
    size: 'sm',
    connections: ['agile', 'cloud']
  },
  {
    id: 'asana',
    label: 'Asana',
    x: 72,
    y: 92,
    size: 'sm',
    connections: ['agile', 'time-management']
  },
  {
    id: 'postman',
    label: 'Postman',
    x: 68,
    y: 50,
    size: 'sm',
    connections: ['apis', 'api-design', 'cloud']
  },
  {
    id: 'eslint',
    label: 'ESLint',
    x: 18,
    y: 72,
    size: 'sm',
    connections: ['vite', 'automated-builds', 'frontend']
  },


  // ================= SIMULATION & DATA SYSTEMS =================

  {
    id: 'simulation',
    label: 'Simulation Systems',
    x: 50,
    y: 90,
    size: 'lg',
    connections: ['basilisk', 'vizard', 'unity', 'mission-visualisation', 'cpp', 'python']
  },
  {
    id: 'basilisk',
    label: 'Basilisk',
    x: 55,
    y: 88,
    size: 'md',
    connections: ['simulation', 'python', 'c', 'cpp']
  },
  {
    id: 'vizard',
    label: 'Vizard',
    x: 62,
    y: 88,
    size: 'md',
    connections: ['simulation', 'mission-visualisation']
  },
  {
    id: 'unity',
    label: 'Unity',
    x: 70,
    y: 88,
    size: 'md',
    connections: ['simulation', 'mission-visualisation']
  },
  {
    id: 'geospatial',
    label: 'Geospatial Data Processing',
    x: 85,
    y: 90,
    size: 'lg',
    connections: ['satellite', 'mission-visualisation', 'postgresql', 'data-engineering']
  },
  {
    id: 'satellite',
    label: 'Satellite Imagery',
    x: 90,
    y: 78,
    size: 'lg',
    connections: ['geospatial', 'cnn', 'computer-vision', 'ml']
  },
  {
    id: 'mission-visualisation',
    label: 'Mission Visualisation',
    x: 78,
    y: 88,
    size: 'md',
    connections: ['simulation', 'vizard', 'unity', 'geospatial']
  },


  // ================= DATA ENGINEERING & ANALYSIS =================

  {
    id: 'data-engineering',
    label: 'Data Engineering',
    x: 50,
    y: 55,
    size: 'lg',
    connections: [
      'python', 'pandas', 'numpy', 'pyspark', 'etl',
      'data-collection', 'cleaning', 'transformation',
      'web-scraping', 'excel', 'data-ingestion'
    ]
  },
  {
    id: 'data-collection',
    label: 'Data Collection',
    x: 40,
    y: 58,
    size: 'sm',
    connections: ['data-engineering', 'web-scraping', 'ms-access']
  },
  {
    id: 'cleaning',
    label: 'Data Cleaning',
    x: 35,
    y: 63,
    size: 'sm',
    connections: ['data-engineering', 'pandas', 'etl']
  },
  {
    id: 'transformation',
    label: 'Data Transformation',
    x: 42,
    y: 70,
    size: 'sm',
    connections: ['data-engineering', 'etl', 'pyspark']
  },
  {
    id: 'web-scraping',
    label: 'Web Scraping',
    x: 65,
    y: 80,
    size: 'sm',
    connections: ['python', 'data-collection', 'data-engineering']
  },
  {
    id: 'pandas',
    label: 'Pandas',
    x: 35,
    y: 60,
    size: 'md',
    connections: ['python', 'numpy', 'analytics', 'cleaning']
  },
  {
    id: 'numpy',
    label: 'NumPy',
    x: 25,
    y: 60,
    size: 'sm',
    connections: ['python', 'pandas', 'scipy']
  },
  {
    id: 'pyspark',
    label: 'PySpark',
    x: 55,
    y: 75,
    size: 'md',
    connections: ['data-engineering', 'transformation']
  },
  {
    id: 'excel',
    label: 'Excel',
    x: 75,
    y: 82,
    size: 'sm',
    connections: ['data-engineering', 'analytics']
  },


  // ================= MACHINE LEARNING & ANALYTICS =================

  {
    id: 'ml',
    label: 'Machine Learning',
    x: 40,
    y: 45,
    size: 'lg',
    connections: [
      'python', 'deep-learning', 'tensorflow', 'pytorch',
      'sklearn', 'scipy', 'svm', 'knn', 'random-forest',
      'analytics'
    ]
  },
  {
    id: 'deep-learning',
    label: 'Deep Learning',
    x: 35,
    y: 30,
    size: 'lg',
    connections: ['tensorflow', 'pytorch', 'cnn', 'ml']
  },
  {
    id: 'tensorflow',
    label: 'TensorFlow',
    x: 25,
    y: 15,
    size: 'md',
    connections: ['deep-learning', 'python', 'ml']
  },
  {
    id: 'pytorch',
    label: 'PyTorch',
    x: 65,
    y: 15,
    size: 'md',
    connections: ['deep-learning', 'python', 'ml']
  },
  {
    id: 'sklearn',
    label: 'Scikit-learn',
    x: 70,
    y: 20,
    size: 'sm',
    connections: ['ml', 'python', 'svm', 'knn', 'random-forest']
  },
  {
    id: 'scipy',
    label: 'SciPy',
    x: 75,
    y: 18,
    size: 'sm',
    connections: ['python', 'numpy', 'ml']
  },
  {
    id: 'cnn',
    label: 'CNN',
    x: 50,
    y: 80,
    size: 'sm',
    connections: ['deep-learning', 'satellite', 'computer-vision']
  },
  {
    id: 'svm',
    label: 'SVM',
    x: 78,
    y: 84,
    size: 'sm',
    connections: ['ml', 'sklearn']
  },
  {
    id: 'knn',
    label: 'KNN',
    x: 84,
    y: 84,
    size: 'sm',
    connections: ['ml', 'sklearn']
  },
  {
    id: 'random-forest',
    label: 'Random Forest',
    x: 90,
    y: 84,
    size: 'sm',
    connections: ['ml', 'sklearn']
  },
  {
    id: 'computer-vision',
    label: 'Computer Vision',
    x: 92,
    y: 70,
    size: 'md',
    connections: ['cnn', 'satellite', 'deep-learning']
  },
  {
    id: 'analytics',
    label: 'Analytics',
    x: 88,
    y: 52,
    size: 'lg',
    connections: ['powerbi', 'tableau', 'sas', 'orange', 'pandas', 'excel', 'ml']
  },
  {
    id: 'powerbi',
    label: 'Power BI',
    x: 90,
    y: 55,
    size: 'sm',
    connections: ['analytics']
  },
  {
    id: 'tableau',
    label: 'Tableau',
    x: 95,
    y: 52,
    size: 'sm',
    connections: ['analytics']
  },
  {
    id: 'sas',
    label: 'SAS',
    x: 95,
    y: 47,
    size: 'sm',
    connections: ['analytics']
  },
  {
    id: 'orange',
    label: 'Orange',
    x: 88,
    y: 60,
    size: 'sm',
    connections: ['analytics', 'ml']
  },


  // ================= DEVELOPMENT ENVIRONMENTS =================

  {
    id: 'dev-environments',
    label: 'Development Environments',
    x: 90,
    y: 20,
    size: 'lg',
    connections: ['vscode', 'jupyter', 'anaconda', 'rstudio', 'spyder']
  },
  {
    id: 'vscode',
    label: 'VS Code',
    x: 85,
    y: 30,
    size: 'sm',
    connections: ['dev-environments', 'frontend', 'backend']
  },
  {
    id: 'jupyter',
    label: 'Jupyter Notebook',
    x: 90,
    y: 35,
    size: 'sm',
    connections: ['dev-environments', 'python', 'ml', 'data-engineering']
  },
  {
    id: 'anaconda',
    label: 'Anaconda',
    x: 95,
    y: 40,
    size: 'sm',
    connections: ['dev-environments', 'python', 'jupyter']
  },
  {
    id: 'rstudio',
    label: 'RStudio',
    x: 85,
    y: 38,
    size: 'sm',
    connections: ['dev-environments', 'analytics']
  },
  {
    id: 'spyder',
    label: 'Spyder',
    x: 82,
    y: 42,
    size: 'sm',
    connections: ['dev-environments', 'python']
  },


  // ================= PROFESSIONAL SKILLS =================

  {
    id: 'professional-skills',
    label: 'Professional Skills',
    x: 50,
    y: 5,
    size: 'lg',
    connections: [
      'communication', 'teamwork', 'time-management',
      'adaptability', 'quick-learning', 'continuous-learning',
      'ai-assisted-development', 'creative-problem-solving'
    ]
  },
  {
    id: 'communication',
    label: 'Strong Communication',
    x: 42,
    y: 5,
    size: 'sm',
    connections: ['professional-skills', 'teamwork']
  },
  {
    id: 'teamwork',
    label: 'Teamwork',
    x: 48,
    y: 8,
    size: 'sm',
    connections: ['professional-skills', 'communication', 'agile']
  },
  {
    id: 'time-management',
    label: 'Time Management',
    x: 56,
    y: 8,
    size: 'sm',
    connections: ['professional-skills', 'asana']
  },
  {
    id: 'adaptability',
    label: 'Adaptability',
    x: 62,
    y: 5,
    size: 'sm',
    connections: ['professional-skills', 'quick-learning']
  },
  {
    id: 'quick-learning',
    label: 'Quick Learning Ability',
    x: 68,
    y: 8,
    size: 'sm',
    connections: ['professional-skills', 'continuous-learning']
  },
  {
    id: 'continuous-learning',
    label: 'Continuous Learning',
    x: 74,
    y: 5,
    size: 'sm',
    connections: ['professional-skills', 'ai-assisted-development']
  },
  {
    id: 'ai-assisted-development',
    label: 'AI-Assisted Development',
    x: 80,
    y: 8,
    size: 'sm',
    connections: ['professional-skills', 'creative-problem-solving']
  },
  {
    id: 'creative-problem-solving',
    label: 'Creative Problem-Solving',
    x: 86,
    y: 5,
    size: 'sm',
    connections: ['professional-skills', 'adaptability']
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