import React from 'react';

export default function SectionLabel({ number, label }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-xs tracking-[0.3em] text-[#00F2FF] opacity-60">
        {number}
      </span>
      <div className="h-[0.5px] w-12 bg-[#00F2FF] opacity-30" />
      <span className="font-mono text-xs tracking-[0.3em] text-[#8E9AAF] uppercase">
        {label}
      </span>
    </div>
  );
}