"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { exploreModes } from "@/lib/data";
import { Waves, Eye, Cloud, Thermometer, MapPin, Moon } from "lucide-react";

const icons = [Waves, Eye, Cloud, Thermometer, MapPin, Moon];

export default function ExplorePage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-telem uppercase mb-6 block">
            Explore
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-warm-white leading-[0.95] mb-8">
            Modes of
            <br />
            <span className="italic text-accent/70">Discovery</span>
          </h1>
          <p className="text-soft-grey text-lg leading-relaxed max-w-xl">
            Six ways to observe the world around you. Each mode is designed for a
            specific environment and type of discovery.
          </p>
        </motion.div>

        {/* Mission Timeline */}
        <SectionWrapper className="mb-24">
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-px" />

            {exploreModes.map((mode, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={mode.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className={`relative mb-16 md:mb-24 ${
                    i % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:text-left"
                  }`}
                >
                  <div
                    className={`ml-12 md:ml-0 ${
                      i % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    <div
                      className={`absolute left-4 md:left-1/2 top-0 w-8 h-8 -translate-x-1/2 rounded-full bg-surface border border-white/10 flex items-center justify-center ${
                        i % 2 === 0 ? "md:-translate-x-1/2" : "md:-translate-x-1/2"
                      }`}
                    >
                      <Icon size={14} className="text-telem" />
                    </div>

                    <div className="aspect-[16/9] bg-surface mb-6 overflow-hidden">
                      <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(50,50,50,0.3)_0%,_transparent_70%)] flex items-center justify-center">
                        <Icon size={40} className="text-white/5" />
                      </div>
                    </div>

                    <span className="font-mono text-[10px] tracking-[0.3em] text-telem uppercase mb-2 block">
                      Mode {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl text-warm-white mb-2">
                      {mode.title}
                    </h3>
                    <p className="text-accent italic mb-4">{mode.subtitle}</p>
                    <p className="text-soft-grey leading-relaxed max-w-md">
                      {mode.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </SectionWrapper>

        {/* Cinematic imagery section */}
        <SectionWrapper>
          <div className="grid md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="aspect-[3/4] bg-surface overflow-hidden group"
              >
                <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(50,50,50,0.3)_0%,_transparent_70%)] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <Waves size={32} className="text-white/5" />
                </div>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}
