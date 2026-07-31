import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionReveal from '@/components/orbital/SectionReveal';
import SectionLabel from '@/components/orbital/SectionLabel';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

const FIELDS = [
  { key: 'name', label: 'OPERATOR_ID', placeholder: 'Enter your name...' },
  { key: 'email', label: 'COMM_CHANNEL', placeholder: 'Enter your email...' },
  { key: 'subject', label: 'SUBJECT_CODE', placeholder: 'Enter subject...' },
  { key: 'message', label: 'PAYLOAD_DATA', placeholder: 'Enter your message...', multiline: true },
];

export default function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = (key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('transmitting');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || `Unable to transmit your message. (${response.status})`);
      }

      setForm(INITIAL_FORM);
      setStatus('confirmed');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('idle');
      setError(err.message || 'Unable to transmit your message.');
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <SectionLabel number="10" label="Contact" />
          <h2 className="font-mono font-semibold text-3xl md:text-5xl mb-4">
            Command <span className="text-[#00F2FF]">Terminal</span>
          </h2>
          <p className="text-[#8E9AAF] max-w-lg mb-16 text-sm">
            Initialize a direct uplink. All transmissions are encrypted end-to-end.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="glass-panel-strong relative overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-3 px-6 py-3 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF3B30]/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="font-mono text-[10px] tracking-wider text-[#8E9AAF]">
                UPLINK_TERMINAL — v0.1.2
              </span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00F2FF] animate-pulse" />
                <span className="telemetry-text text-[9px]">CONNECTED</span>
              </div>
            </div>

            {/* Terminal body */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
              <div className="font-mono text-xs text-[#8E9AAF] mb-6">
                {'>'} READY FOR INPUT. ENTER TRANSMISSION PARAMETERS.
              </div>

              {FIELDS.map((field) => (
                <div key={field.key}>
                  <label className="font-mono text-[10px] tracking-[0.2em] text-[#00F2FF]/70 block mb-2">
                    {field.label}
                  </label>
                  {field.multiline ? (
                    <textarea
                      value={form[field.key]}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      rows={4}
                      className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder:text-[#8E9AAF]/40 focus:border-[#00F2FF]/50 focus:outline-none transition-colors resize-none"
                      required
                    />
                  ) : (
                    <input
                      type={field.key === 'email' ? 'email' : 'text'}
                      value={form[field.key]}
                      onChange={(e) => handleChange(field.key, e.target.value)}
                      placeholder={field.placeholder}
                      className="w-full bg-transparent border border-white/10 px-4 py-3 font-mono text-sm text-white placeholder:text-[#8E9AAF]/40 focus:border-[#00F2FF]/50 focus:outline-none transition-colors"
                      required
                    />
                  )}
                </div>
              ))}

              {/* Submit */}
              <div className="pt-4">
                <AnimatePresence mode="wait">
                  {status === 'confirmed' ? (
                    <motion.div
                      key="confirmed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="font-mono text-sm text-[#00F2FF] flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#00F2FF]" style={{ boxShadow: '0 0 10px #00F2FF' }} />
                      UPLINK CONFIRMED — TRANSMISSION RECEIVED
                    </motion.div>
                  ) : (
                    <motion.button
                      key="submit"
                      type="submit"
                      disabled={status === 'transmitting'}
                      className="w-full font-mono text-xs tracking-[0.3em] py-4 border border-[#00F2FF]/30 text-[#00F2FF] hover:bg-[#00F2FF]/10 disabled:opacity-50 transition-all duration-300 relative overflow-hidden"
                    >
                      {status === 'transmitting' ? (
                        <span className="flex items-center justify-center gap-3">
                          <motion.div
                            className="w-3 h-3 border border-[#00F2FF] border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          />
                          TRANSMITTING SIGNAL...
                        </span>
                      ) : (
                        'TRANSMIT SIGNAL'
                      )}

                      {/* Progress bar during transmit */}
                      {status === 'transmitting' && (
                        <motion.div
                          className="absolute bottom-0 left-0 h-[2px] bg-[#00F2FF]"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 2, ease: 'linear' }}
                        />
                      )}
                    </motion.button>
                  )}
                </AnimatePresence>
                {error && <p className="mt-3 font-mono text-xs text-red-400">{error}</p>}
              </div>
            </form>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}