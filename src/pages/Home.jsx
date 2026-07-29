import React, { useState, useCallback } from 'react';
import LoadingScreen from '@/components/orbital/LoadingScreen';
import IntroAnimation from '@/components/orbital/IntroAnimation';
import Navigation from '@/components/orbital/Navigation';
import Starfield from '@/components/orbital/Starfield';
import TelemetryOverlay from '@/components/orbital/TelemetryOverlay';
import HeroSection from '@/components/orbital/HeroSection';
import AboutSection from '@/components/orbital/AboutSection';
import ExperienceSection from '@/components/orbital/ExperienceSection';
import ProjectsSection from '@/components/orbital/ProjectsSection';
import EducationSection from '@/components/orbital/EducationSection';
import SkillsConstellation from '@/components/orbital/SkillsConstellation';
import CertificationsSection from '@/components/orbital/CertificationsSection';
import PhotographySection from '@/components/orbital/PhotographySection';
import BlogSection from '@/components/orbital/BlogSection';
import TestimonialsSection from '@/components/orbital/TestimonialsSection';
import ContactSection from '@/components/orbital/ContactSection';
import FooterSection from '@/components/orbital/FooterSection';

export default function Home() {
  const [phase, setPhase] = useState('loading');

  const handleLoadComplete = useCallback(() => setPhase('intro'), []);
  const handleIntroComplete = useCallback(() => setPhase('ready'), []);

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#020408' }}>
      {/* Loading sequence */}
      {phase === 'loading' && <LoadingScreen onComplete={handleLoadComplete} />}
      {phase === 'intro' && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* Background layers */}
      <Starfield count={180} />
      {phase === 'ready' && <TelemetryOverlay />}
      {phase === 'ready' && <Navigation />}

      {/* Volumetric light leak between sections */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#00F2FF]/[0.02] rounded-full blur-[120px]" />
        <div className="absolute top-[60%] left-1/4 w-[400px] h-[400px] bg-[#00F2FF]/[0.015] rounded-full blur-[100px]" />
        <div className="absolute top-[85%] right-1/4 w-[300px] h-[300px] bg-[#00F2FF]/[0.01] rounded-full blur-[80px]" />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsConstellation />
        {/* <CertificationsSection /> */}
        {/* <PhotographySection /> */}
        <BlogSection />
        <TestimonialsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}