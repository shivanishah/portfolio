import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '@/components/orbital/SectionReveal';
import SectionLabel from '@/components/orbital/SectionLabel';

const TIMELINE = [
  {
    year: '03/2025 - Present',
    role: 'Software Engineer',
    country: 'Adelaide, Australia',
    org: 'Australasian Space Innovation Institute(SmartSat CRC) / Adelaide University(UniSA)',
    description:
      'Develop simulation and software platforms using basilisk (Python/C/C++)/vizard (Unity) for autonomy, digital engineering, and space/defence demos. Designed various simulation options and digital engineering systems supporting autonomy and space mission workflows using 3D visualisation. Demonstrated various simulation options to group of up to 7 researchers and leaders, securing endorsement for key initiatives and next steps. Developed modular architecture for mission visualisation and geospatial data exploration tools to improve scalability and workflow reuse. Implemented reproducible data pipelines and structured software workflows to support multi-institution collaboration and consistency. Contributed to Kanyini satellite data systems for geospatial imagery analysis using Cesiumjs, Django, SQLite, PostgreSQL, Azure, while supporting project administration and team coordination.  Designed and implemented a real-time telemetry architecture connecting Basilisk spacecraft simulation and BSK-RL autonomy environments with an interactive React/TypeScript mission dashboard and Vizard 3D visualisation. Integrated simulation outputs using FastAPI, ZeroMQ, and Nginx to support live telemetry streaming, backend API communication, and interactive mission monitoring. Developed workflows linking spacecraft simulation, reinforcement learning autonomy environments, and 3D visualisation to support autonomy testing, digital engineering, and space mission demonstrations. Built a responsive mission dashboard to visualise spacecraft telemetry, simulation states, and mission data for researchers, engineers, and demonstration stakeholders. Created a BSK simulation pipeline that uses live Space-Track JSON satellite data to support real-world satellite tracking, orbital scenario generation, and interactive mission visualisation.',
    tags: [
      'Python',
      'C++',
      'Unity',
      'Satellite Systems',
      'Digital Engineering',
      'CesiumJS'
    ],
  },
  {
    year: '09/2023 - 02/2025',
    role: 'Software Engineer',
    country: 'Adelaide, Australia',
    org: 'KWP and Partners',
    description:
      'Designed and maintained backend systems, REST APIs, admin platforms, and database-backed workflows using Laravel, PHP, Nodejs, Yii2, MySQL, MongoDB and Azure. Supported staging and production deployments, maintained CI/CD pipelines, and contributed to reliable release workflows across multiple client platforms. Optimized SQL queries, database migrations (Firebase to MongoDB), and backend logic to improve response times, maintainability, and release reliability. Integrated backend services with web and mobile application workflows, supporting scalable operational systems in agile environments. Prioritized development, testing, deployment, and support tasks across multiple projects by assessing urgency, business impact, and technical risk.',
    tags: [
      'Laravel',
      'PHP',
      'Node.js',
      'Azure',
      'REST APIs',
      'MongoDB'
    ],
  },
  {
    year: '08/2024 - 11/2024',
    role: 'Machine Learning Intern',
    country: 'Adelaide, Australia',
    org: 'SmartSat CRC',
    description:
      'Built end-to-end ML pipelines for native vegetation and land-use classification using Sentinel-2 satellite imagery, including data preprocessing, feature preparation, model training, validation, and evaluation. Trained and evaluated CNN U-Net models for image segmentation/classification, achieving up to 76% accuracy across experimental runs. Conducted data exploration and quality checks on high-resolution geospatial datasets to identify class imbalance, noisy labels, and preprocessing requirements. Used Python, TensorFlow, PyTorch, Keras, Scikit-learn, NumPy, pandas, GDAL, Rasterio, and OpenCV to process imagery and support reproducible experimentation. Used Google Colab GPU environments for model training, experiment iteration, and large-scale image processing workflows. Translated complex model outputs into practical insights for environmental monitoring, conservation planning, and policy-support use cases.',
    tags: [
      'Machine Learning',
      'Computer Vision',
      'TensorFlow',
      'PyTorch',
      'Remote Sensing'
    ],
  },
  {
    year: '05/2021 - 02/2023',
    role: 'Senior Software Engineer',
    country: 'Pune, India',
    org: 'LTIMindtree',
    description:
      'Delivered full-stack enhancements for enterprise web applications using React, TypeScript, GraphQL, JavaScript, HTML5, CSS3, AJAX, and jQuery, improving reliability, usability, and maintainability across production systems. Designed and implemented GraphQL API integrations for staging and production releases within tight delivery timelines, coordinating with backend and QA teams to ensure release readiness. Improved application performance and user experience by optimizing frontend architecture, data-fetching patterns, and reusable components, reducing page load times by 25%. Contributed to system optimization, UI architecture improvements, reusable component design, and long-term maintainability of enterprise application codebases. Provided technical knowledge transfer to team members and supported cross-functional delivery across development, testing, staging, and production environments.',
    tags: [
      'React',
      'TypeScript',
      'GraphQL',
      'Frontend',
      'Enterprise'
    ],
  },
  {
    year: '02/2020 - 04/2021',
    role: 'Senior Developer',
    country: 'Surat, India',
    org: 'Palm Infotech',
    description:
      'Delivered full lifecycle web application development using HTML5, CSS3, and JavaScript with comprehensive troubleshooting, strategic planning, and deployment processes that ensured 30%+ uptime for client projects.',
    tags: [
      'PHP',
      'JavaScript',
      'HTML',
      'CSS'
    ],
  },
  {
    year: '05/2019 - 02/2020',
    role: 'Developer',
    country: 'India',
    org: 'IQLECT',
    description:
      'Designed and launched IQLECT.com using HTML5, CSS3, jQuery, Core PHP, and MySQL, partnering with content and UX teams to improve branding and user engagement.',
    tags: [
      'PHP',
      'MySQL',
      'HTML',
      'CSS',
      'jQuery'
    ],
  },
  {
    year: '01/2019 - 04/2019',
    role: 'Developer',
    country: 'Hyderabad, India',
    org: 'AlgonoX Technologies',
    description:
      'Built Angular-based ACE (Automatic Cognitive Engine) modules including email configuration, file upload (ngx-file-upload), and multi-image cropping (ngx-image-cropper) with advanced drag-and-drop functionality for competitor analysis workflows.',
    tags: [
      'Angular',
      'TypeScript',
      'Image Processing'
    ],
  },
  {
    year: '05/2017 - 10/2018',
    role: 'Developer',
    country: 'Gandhinagar, India',
    org: 'Lucent Innovation',
    description:
      'Developed 10+ Shopify stores using HTML5, CSS3, SCSS, Ruby, Liquid, and JavaScript for clients across Asia in fashion, jewellery, bags, toys, and children’s wear. Delivered pixel-perfect, responsive storefronts for high-traffic retail platforms while supporting production development and performance standards. Mentored junior developers on Shopify workflows, theme development, and e-commerce implementation best practices.',
    tags: [
      'Shopify',
      'Liquid',
      'Ruby',
      'JavaScript'
    ],
  },
  {
    year: '07/2015 - 03/2017',
    role: 'Junior Developer',
    country: 'Surat, India',
    org: 'SN International',
    description:
      'Built responsive websites using HTML, CSS, JavaScript, and jQuery, converting design mockups into functional web pages with cross-browser compatibility. Developed custom themes, enhanced interactivity, debugged issues, performed cross-browser testing, and optimized website loading speed and performance.',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'jQuery'
    ],
  }
];

export default function ExperienceSection() {
  const [active, setActive] = useState(null);

  return (
    <section id="experience" className="relative min-h-screen py-2 px-4 sm:py-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <SectionLabel number="02" label="Experience" />
          <h2 className="font-mono font-semibold text-3xl md:text-5xl mb-4 sm:mb-16">
            Mission <span className="text-[#00F2FF]">Timeline</span>
          </h2>
        </SectionReveal>

        {/* Corridor visualization */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#00F2FF]/30 via-[#00F2FF]/10 to-transparent" />

          {TIMELINE.map((item, idx) => (
            <SectionReveal key={item.year} delay={idx * 0.15}>
              <div
                className={`relative flex items-start mb-4 sm:mb-8 cursor-pointer group ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                onClick={() => setActive(active === idx ? null : idx)}
              >
                {/* Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="w-4 h-4 rounded-full border-2 border-[#00F2FF] bg-[#020408] group-hover:bg-[#00F2FF]/20 transition-colors"
                    whileHover={{ scale: 1.4 }}
                  />
                </div>

                {/* Content */}
                <div className={`ml-4 sm:ml-20 w-full sm:w-auto md:w-[45%] ${idx % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="glass-panel p-4 sm:p-6 hover:border-[#00F2FF]/30 transition-all duration-500">
                    <div className="flex items-center gap-2 sm:gap-3 mb-2">
                      <span className="font-mono text-[#00F2FF] text-sm font-semibold">{item.year}</span>
                      <div className="h-[0.5px] flex-1 bg-[#00F2FF]/20" />
                    </div>
                    <h3 className="font-mono text-base font-medium mb-1">{item.role}</h3>
                    <p className="text-[#8E9AAF] text-sm mb-2">{item.org}</p>

                    <AnimatePresence>
                      {active === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <p className="text-[#8E9AAF] text-sm leading-relaxed mb-2">{item.description}</p>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="font-mono text-[9px] tracking-wider px-2 py-1 border border-[#00F2FF]/20 text-[#00F2FF]/70"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {active !== idx && (
                      <span className="telemetry-text text-[8px] sm:text-[9px] mt-1 block">
                        CLICK TO EXPAND
                      </span>
                    )}
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