import React from 'react';
import { motion } from 'framer-motion';

export default function IntroAnimation({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center"
      style={{ backgroundColor: '#020408' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1.5, delay: 2 }}
      onAnimationComplete={onComplete}
    >
      {/* Expanding ring effect */}
      <div className="relative">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-[#00F2FF]"
            initial={{ width: 0, height: 0, opacity: 0.8, x: '-50%', y: '-50%' }}
            animate={{
              width: [0, 300 + i * 200],
              height: [0, 300 + i * 200],
              opacity: [0.8, 0],
            }}
            transition={{ duration: 2, delay: i * 0.3, ease: 'easeOut' }}
            style={{ left: '50%', top: '50%' }}
          />
        ))}

        {/* Central point */}
        <motion.div
          className="w-2 h-2 rounded-full bg-[#00F2FF]"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1] }}
          transition={{ duration: 0.6 }}
          style={{ boxShadow: '0 0 40px #00F2FF, 0 0 80px #00F2FF' }}
        />

        {/* Crosshair lines */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: 0.3 }}
        >
          <div className="absolute w-[200px] h-[0.5px] bg-gradient-to-r from-transparent via-[#00F2FF]/40 to-transparent -translate-x-1/2" />
          <div className="absolute h-[200px] w-[0.5px] bg-gradient-to-b from-transparent via-[#00F2FF]/40 to-transparent -translate-y-1/2" />
        </motion.div>
      </div>

      {/* Corner brackets */}
      <motion.div
        className="absolute inset-24 md:inset-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 2.5, delay: 0.5 }}
      >
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#00F2FF]/40" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#00F2FF]/40" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#00F2FF]/40" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#00F2FF]/40" />
      </motion.div>
    </motion.div>
  );
}