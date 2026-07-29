import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SectionReveal from '@/components/orbital/SectionReveal';
import SectionLabel from '@/components/orbital/SectionLabel';
import { Image } from '@/components/ui/image';

const PHOTOS = [
  {
    src: '/images/3b14990ab_generated_555a8476.png',
    alt: 'Brutalist architecture at night with cold orbit filter',
    caption: 'MONOLITH — Adelaide, 2024',
  },
  {
    src: '/images/985a0577f_generated_87896227.png',
    alt: 'Mountain landscape reflected in lake under milky way',
    caption: 'TERMINUS — Southern Alps, 2023',
  },
  {
    src: '/images/6e7b4abd7_generated_e2e97645.png',
    alt: 'Aerial view of coastal city at night from high altitude',
    caption: 'GRID — Perth Basin, 2024',
  },
];

export default function PhotographySection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="photography" className="relative py-12 px-4 sm:py-20 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <SectionLabel number="07" label="Self Made Projects" />
          <h2 className="font-mono font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-4">
            Self <span className="text-[#00F2FF]">Made Projects</span>
          </h2>
          <p className="text-[#8E9AAF] max-w-xs sm:max-w-sm md:max-w-lg mb-6 sm:mb-8 text-sm sm:text-base">
            Cold orbit aesthetics — high clarity, low saturation, infinite perspective.
          </p>
        </SectionReveal>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {PHOTOS.map((photo, idx) => (
            <SectionReveal key={photo.caption} delay={idx * 0.1}>
              <motion.div
                className="relative overflow-hidden cursor-pointer group aspect-[3/2] w-full"
                onClick={() => setSelected(photo)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-[#020408]/40 group-hover:bg-[#020408]/20 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-white/80">{photo.caption}</span>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-5 h-5 border border-[#00F2FF]/30 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#00F2FF]/60" />
                  </div>
                </div>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-[#020408]/95 backdrop-blur-sm p-6 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <motion.div
              className="max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selected.src}
                alt={selected.alt}
                className="w-full h-auto max-h-[80vh]"
                fittingType="fit"
              />
              <p className="font-mono text-xs tracking-[0.2em] text-[#8E9AAF] mt-4 text-center">
                {selected.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}