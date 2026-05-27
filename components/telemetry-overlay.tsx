"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function TelemetryOverlay() {
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "t" && e.ctrlKey) {
        e.preventDefault();
        setActive((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  if (!active) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] pointer-events-none"
    >
      <div className="absolute top-20 left-6 font-mono text-[10px] text-telem/60 space-y-1">
        <p>SYS: ASTRONAUTIA_OS v2.1.4</p>
        <p>UTC: {time.toISOString().split("T")[1].split(".")[0]}</p>
        <p>LAT: 12.9716° N</p>
        <p>LON: 77.5946° E</p>
        <p>ALT: +920m</p>
        <p>TMP: 24.3°C</p>
        <p>HUM: 68%</p>
        <p className="pt-2 text-accent/40">CTRL+T to toggle</p>
      </div>

      <div className="absolute top-20 right-6 font-mono text-[10px] text-telem/60 space-y-1 text-right">
        <p>LINK: ESTABLISHED</p>
        <p>SIG: -72 dBm</p>
        <p>BAT: 87%</p>
        <p>MEM: 42% free</p>
        <p>CAM: STANDBY</p>
        <p>GPS: 8 sats</p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ scaleX: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-24 h-px bg-telem/30"
          />
          <span className="font-mono text-[9px] text-telem/40 tracking-[0.3em]">TELEMETRY ACTIVE</span>
          <motion.div
            animate={{ scaleX: [0.2, 1, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-24 h-px bg-telem/30"
          />
        </div>
      </div>

      <div className="absolute top-1/2 left-6 -translate-y-1/2">
        <motion.div
          animate={{ height: [20, 60, 30, 80, 20] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-telem/20"
        />
      </div>

      <div className="absolute top-1/2 right-6 -translate-y-1/2">
        <motion.div
          animate={{ height: [40, 20, 70, 30, 40] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-telem/20"
        />
      </div>
    </motion.div>
  );
}
