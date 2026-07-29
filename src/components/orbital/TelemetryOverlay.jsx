import React, { useState, useEffect } from 'react';
import useScrollProgress from '@/lib/useScrollProgress';

export default function TelemetryOverlay() {
  const progress = useScrollProgress();
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => setTime(new Date().toISOString().slice(11, 23));
    tick();
    const interval = setInterval(tick, 100);
    return () => clearInterval(interval);
  }, []);

  const lat = (progress * 180 - 90).toFixed(4);
  const lng = (progress * 360 - 180).toFixed(4);

  return (
    <div className="fixed inset-0 pointer-events-none z-40" aria-hidden="true">
      {/* Top-left telemetry */}
      {/* <div className="absolute top-4 left-4 telemetry-text">
        <div>SYS.STATUS: NOMINAL</div>
        <div className="mt-1">UTC {time}</div>
      </div> */}

      {/* Top-right coordinates */}
      {/* <div className="absolute top-4 right-4 telemetry-text text-right">
        <div>LAT {lat}°</div>
        <div className="mt-1">LNG {lng}°</div>
      </div> */}

      {/* Bottom-left scroll depth */}
      {/* <div className="absolute bottom-4 left-4 telemetry-text">
        <div>SCROLL.DEPTH: {(progress * 100).toFixed(1)}%</div>
      </div> */}

      {/* Horizon line */}
      <div
        className="horizon-line"
        style={{ top: `${50 + progress * 10}%` }}
      />

      {/* Right edge progress bar */}
      <div className="absolute right-0 top-0 bottom-0 w-[2px]">
        <div
          className="w-full transition-all duration-300"
          style={{
            height: `${progress * 100}%`,
            background: 'linear-gradient(180deg, transparent, #00F2FF)',
          }}
        />
      </div>
    </div>
  );
}