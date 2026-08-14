import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/orbital/SectionReveal';
import SectionLabel from '@/components/orbital/SectionLabel';

const POSTS = [
  {
    title: 'Are We Using AI or Outsourcing Our Thinking?',
    excerpt:
      'AI can accelerate coding, research, learning, and creativity. But as we delegate more cognitive work to machines, an important question emerges: how do we preserve human understanding, judgement, and responsibility?',
    link: 'https://www.linkedin.com/posts/shah-shivani_artificialintelligence-ai-generativeai-share-7493106287744823296-EORW/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1aoL8BzgXYTJCE54dNGPkerp6M1VJxCAA',
    date: '2026.08.12',
    readTime: '5 min',
    tag: 'Responsible AI',
  },
  {
    title: 'When Your Brain Has Too Many Tabs Open',
    excerpt:
      'Think of a Parking Lot as external memory for your mind — a trusted place to offload ideas, tasks, and future actions so you can preserve attention for what matters right now.',
      link: 'https://www.linkedin.com/posts/shah-shivani_mentalwellness-mentalhealthawareness-workplacewellbeing-share-7490671416359448577-BqjK/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1aoL8BzgXYTJCE54dNGPkerp6M1VJxCAA',
    date: '2026.08.6',
    readTime: '3 min',
    tag: 'Productivity & Wellbeing',
  },
  {
    title: '💜 Selected as a Women In Data™ Scholar',
    excerpt:
      'A new chapter in my journey from software engineering to data, machine learning, and AI — deepening my skills while exploring how intelligent systems can solve overlooked real-world problems.',
    link: 'https://www.linkedin.com/posts/shah-shivani_womenindata-womeninai-artificialintelligence-ugcPost-7490569694274310145-bbOE/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1aoL8BzgXYTJCE54dNGPkerp6M1VJxCAA',
    date: '2026.08.5',
    readTime: '2 min',
    tag: 'Career Milestone',
  },
  {
    title: 'Behind Every Migration Statistic Is a Story of Courage',
    excerpt:
      'A personal reflection on migration, resilience, belonging, and the quiet determination it takes to rebuild a career, create new opportunities, and turn arrival into advantage.',
    link: 'https://www.linkedin.com/posts/shah-shivani_migrantwomen-fromarrivaltoadvantage-amrc-activity-7487723364141379584-aTF7/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1aoL8BzgXYTJCE54dNGPkerp6M1VJxCAA',
    date: '2026.07.30',
    readTime: '2 min',
    tag: 'Personal Journey',
  },
  {
    title: 'From Software Engineering to Research-Driven Innovation',
    excerpt:
      'My journey across full-stack engineering, data and ML systems, geospatial platforms, and research software — and why I am continuing to explore opportunities where engineering can create meaningful real-world impact.',
    link: 'https://www.linkedin.com/posts/shah-shivani_opentowork-softwareengineer-fullstackdeveloper-activity-7485584958129074176-AhoU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1aoL8BzgXYTJCE54dNGPkerp6M1VJxCAA',
    date: '2026.07.28',
    readTime: '1 min',
    tag: 'Engineering Journey',
  },
  {
    title: '🤯 What if AI could give you back years of your life?',
    excerpt:
      'Exploring how AI-driven drug discovery is accelerating breakthroughs in healthcare, from sleep science and personalised medicine to the future of biological innovation.',
    link: 'https://www.linkedin.com/posts/shah-shivani_ai-artificialintelligence-drugdiscovery-activity-7481217694281801728-956A?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1aoL8BzgXYTJCE54dNGPkerp6M1VJxCAA',
    date: '2026.07.13',
    readTime: '3 min',
    tag: 'AI + Healthcare',
  },
  {
    title: 'AI Won’t Replace You. But Someone Using AI Might.',
    excerpt:
      'A reflection on how artificial intelligence is becoming a force multiplier for human creativity, problem-solving, and continuous learning rather than simply a replacement for human work.',
    link: 'https://www.linkedin.com/posts/shah-shivani_artificialintelligence-ai-futureofwork-activity-7480491650050584577-b0ef?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1aoL8BzgXYTJCE54dNGPkerp6M1VJxCAA',
    date: '2026.07.16',
    readTime: '3 min',
    tag: 'AI & Innovation',
  },
  {
    title: 'Learning, Networking, and Building Career Pathways in South Australia',
    excerpt:
      'A reflection on meaningful conversations, career insights, and the importance of persistence, adaptability, and community support when building a professional journey in a new environment.',
    link:'https://www.linkedin.com/posts/shah-shivani_skilledmigrants-sapublicsector-careerdevelopment-activity-7475366964895432704-dn2j?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1aoL8BzgXYTJCE54dNGPkerp6M1VJxCAA',
    date: '2026.06.27',
    readTime: '2 min',
    tag: 'Career Journey',
  },
  {
    title: 'Trust, Verify, and Stay Safe: Navigating Modern Job Searches',
    excerpt:
      'Recruitment scams are becoming increasingly sophisticated. Sharing lessons learned from a LinkedIn impersonation attempt and practical steps professionals can take to protect themselves.',
    link:'https://www.linkedin.com/posts/shah-shivani_linkedin-jobsearch-recruitmentscam-activity-7472889277257957377-yEgf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1aoL8BzgXYTJCE54dNGPkerp6M1VJxCAA',
    date: '2026.06.26',
    readTime: '1 min',
    tag: 'Career Safety',
  },
  {
    title: 'When Networking Gets Real: Lessons from Walking Through the Rain',
    excerpt:
      'Sometimes the best professional connections happen outside traditional settings. A story about embracing uncertainty, building authentic relationships, and finding community through shared experiences.',
    link:'https://www.linkedin.com/posts/shah-shivani_techwalking-adelaide-networking-activity-7467933450247770114-JOx4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB1aoL8BzgXYTJCE54dNGPkerp6M1VJxCAA',
    date: '2026.06.20',
    readTime: '2 min',
    tag: 'Professional Growth',
  }
];

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-5 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <SectionLabel number="08" label="Blog" />
          <h2 className="font-mono font-semibold text-3xl md:text-5xl mb-16">
            Signal <span className="text-[#00F2FF]">Log</span>
          </h2>
        </SectionReveal>

        <div className="space-y-4">
          {POSTS.map((post, idx) => (
            <SectionReveal key={post.title} delay={idx * 0.1}>
              <motion.article
                className="glass-panel p-6 md:p-8 group cursor-pointer hover:border-[#00F2FF]/30 transition-all duration-500"
                whileHover={{ x: 4 }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-[9px] tracking-wider text-[#00F2FF] px-2 py-0.5 border border-[#00F2FF]/20">
                        {post.tag}
                      </span>
                      <span className="telemetry-text text-[9px]">{post.date}</span>
                      <span className="telemetry-text text-[9px]">{post.readTime}</span>
                    </div>
                    <h3 className="font-mono text-base md:text-lg font-medium mb-2 group-hover:text-[#00F2FF] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#8E9AAF] text-sm leading-relaxed">{post.excerpt}</p>
                  </div>
                  <div className="shrink-0">
                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                      <ArrowUpRight
                        size={20}
                        className="text-[#8E9AAF] group-hover:text-[#00F2FF] transition-colors"
                      />
                    </a>
                  </div>
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}