import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  '> INITIALIZING SHIVANI ENGINEERING PROFILE...',
  '> LOADING FULL-STACK SYSTEMS... OK',
  '> CONNECTING AI & DATA INTELLIGENCE MODULES...',
  '> ACTIVATING MACHINE LEARNING PIPELINES...',
  '> SYNCHRONIZING SPACE TECHNOLOGY SYSTEMS...',
  '> RENDERING DIGITAL ENGINEERING ENVIRONMENT...',
  '> CALIBRATING 3D VISUALISATION ENGINE...',
  '> VERIFYING CLOUD DEPLOYMENT CHANNELS...',
  '> ESTABLISHING RESEARCH COLLABORATION LINK...',
  '> KNOWLEDGE DATABASE: SYNCHRONIZED',
  '> ALL SYSTEMS NOMINAL',
  '> ENTERING EXPLORATION MODE...',
];

export default function LoadingScreen({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        setLines((prev) => [...prev, BOOT_LINES[i]]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setDone(true), 400);
        setTimeout(() => onComplete(), 1200);
      }
    }, 180);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: '#020408' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-lg w-full px-6">
            <div className="font-mono text-xs leading-6 text-[#8E9AAF]">
              {lines.map((line, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.15 }}
                  className={idx === lines.length - 1 && line?.includes('NOMINAL') ? 'text-[#00F2FF]' : ''}
                >
                  {line}
                </motion.div>
              ))}
              {lines.length < BOOT_LINES.length && (
                <span className="inline-block w-2 h-4 bg-[#00F2FF] animate-pulse ml-1" />
              )}
            </div>

            {/* Progress bar */}
            <div className="mt-8 h-[1px] w-full bg-[#8E9AAF]/20">
              <motion.div
                className="h-full bg-[#00F2FF]"
                initial={{ width: 0 }}
                animate={{ width: `${(lines.length / BOOT_LINES.length) * 100}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
            <div className="mt-2 flex justify-between telemetry-text">
              <span>BOOT SEQUENCE</span>
              <span>{Math.round((lines.length / BOOT_LINES.length) * 100)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}