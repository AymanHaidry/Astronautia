"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function EasterEggPage() {
  const [coords, setCoords] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCoords({
        x: 40 + Math.random() * 20,
        y: 40 + Math.random() * 20,
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Ambient particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-px bg-warm-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-center relative z-10"
      >
        <motion.div
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="font-mono text-[9px] tracking-[0.5em] text-telem/40 uppercase mb-12"
        >
          Signal Detected
        </motion.div>

        <motion.div
          className="relative w-48 h-48 mx-auto mb-12"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="rgba(196,168,130,0.1)"
              strokeWidth="0.5"
            />
            <circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="rgba(196,168,130,0.15)"
              strokeWidth="0.5"
            />
            <circle
              cx="100"
              cy="100"
              r="40"
              fill="none"
              stroke="rgba(196,168,130,0.2)"
              strokeWidth="0.5"
            />
            <motion.circle
              cx="100"
              cy="100"
              r="2"
              fill="rgba(196,168,130,0.6)"
              animate={{
                cx: [100, coords.x * 2, 100],
                cy: [100, coords.y * 2, 100],
              }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="font-serif text-2xl md:text-3xl text-warm-white/80 mb-4"
        >
          "The deepest discoveries are made in silence."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="font-mono text-[10px] tracking-[0.4em] text-soft-grey/40 uppercase"
        >
          — Unknown Observer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="mt-16 font-mono text-[9px] tracking-[0.3em] text-telem/30"
        >
          COORDINATES: {coords.x.toFixed(4)}° N, {coords.y.toFixed(4)}° E
        </motion.div>
      </motion.div>
    </div>
  );
}
