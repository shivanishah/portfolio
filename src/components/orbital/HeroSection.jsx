import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';

const HERO_IMAGE = '/images/public/3c263f9f5_generated_264b0ad9.png';

const SIGNAL_PINGS = [
  { x: 30, y: 35, label: 'SmartSat CRC/ASII', delay: 0 },
  { x: 70, y: 40, label: 'KWP & Partners', delay: 1.5 },
  { x: 80, y: 80, label: 'UniSA/AU', delay: 3 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-gray-900/90 to-black overflow-hidden">
      <div className="absolute inset-0">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10 animate-[gridScroll_15s_linear_infinite]"></div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <Image
            src={HERO_IMAGE}
            alt="Orbital Mechanics Illustration"
            className="w-full h-full object-cover opacity-70"
          />
        </motion.div>

        {/* Signal Pings */}
        <div className="absolute inset-0 pointer-events-none">
          {SIGNAL_PINGS.map((ping, index) => (
            <motion.div
              key={ping.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0.6],
                scale: [0, 1.2, 1.2]
              }}
              transition={{ duration: 2, delay: index * 0.5, repeat: Infinity }}
              className="absolute"
              style={{ left: `${ping.x}%`, top: `${ping.y}%` }}
            >
              <div className="w-2 h-2 rounded-full bg-[#00F2FF] relative">
                <div className="absolute inset-0 rounded-full border border-[#00F2FF]/50 animate-ping" />
              </div>
              <span className="absolute -translate-x-1/2 -translate-y-4 left-1/2 bottom-0 text-xs text-[#00F2FF]/80 whitespace-nowrap">
                {ping.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl sm:max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="telemetry-text my-10 sm:my-6 text-xs sm:text-sm tracking-[0.4em]">
            Software Engineer · Data Science, Backend & Full-Stack Systems · ML & Simulation Systems
          </div>
        </motion.div>

        <motion.h1
          className="font-mono font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="text-white">SHIVANI</span>
          <br />
          <span className="text-[#00F2FF] text-glow-cyan">SHAH</span>
        </motion.h1>

        <motion.p
          className="text-[#8E9AAF] text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
           With experience across startups, enterprise organizations, and research institutions, she enjoys transforming complex ideas into scalable.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a
            href="#experience"
            className="font-mono text-xs sm:text-sm tracking-[0.2em] px-4 py-2 sm:px-6 sm:py-3 border border-[#00F2FF]/30 text-[#00F2FF] hover:bg-[#00F2FF]/10 transition-all duration-300"
          >
            VIEW MISSIONS TIMELINE
          </a>
          <a
            href="#contact"
            className="font-mono text-xs sm:text-sm tracking-[0.2em] px-4 py-2 sm:px-6 sm:py-3 bg-[#00F2FF]/10 text-[#00F2FF] hover:bg-[#00F2FF]/20 transition-all duration-300"
          >
            ESTABLISH UPLINK
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-[#00F2FF]/50" />
        <span className="telemetry-text text-[8px]">SCROLL</span>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;