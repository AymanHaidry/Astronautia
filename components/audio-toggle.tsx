"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AudioToggle() {
  const [muted, setMuted] = useState(true);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setMuted(!muted)}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-graphite/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-soft-grey hover:text-warm-white transition-colors"
      aria-label={muted ? "Enable ambient audio" : "Mute ambient audio"}
    >
      <AnimatePresence mode="wait">
        {muted ? (
          <motion.div
            key="muted"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <VolumeX size={16} />
          </motion.div>
        ) : (
          <motion.div
            key="unmuted"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <Volume2 size={16} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
