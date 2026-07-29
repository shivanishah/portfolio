import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/shivanishah', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shah-shivani/', icon: Linkedin },
  // { label: 'Email', href: 'mailto:spshah289@gmail.com÷', icon: Mail },
];

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function FooterSection() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => setTime(new Date().toISOString().slice(0, 19).replace('T', ' '));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-mono font-semibold text-lg mb-2">
              SHIVANI<span className="text-[#00F2FF]">.</span>SHAH
            </div>
            <p className="text-[#8E9AAF] text-sm leading-relaxed">
              Software Engineer, Data Enthusiast & AI/ML Innovation
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="telemetry-text text-[9px] block mb-4">NAVIGATION</span>
            <div className="space-y-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block font-mono text-xs text-[#8E9AAF] hover:text-[#00F2FF] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <span className="telemetry-text text-[9px] block mb-4">EXTERNAL LINKS</span>
            <div className="flex gap-4">
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-[#00F2FF]/40 hover:text-[#00F2FF] text-[#8E9AAF] transition-all"
                  aria-label={link.label}
                >
                  <link.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="telemetry-text text-[9px]">
            © {new Date().getFullYear()} SHIVANI SHAH. ALL RIGHTS RESERVED.
          </div>
          <div className="telemetry-text text-[9px]">
            SYS.TIME: {time} UTC
          </div>
        </div>
      </div>
    </footer>
  );
}