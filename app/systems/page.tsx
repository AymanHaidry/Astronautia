"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { systems } from "@/lib/data";
import { Ruler, Camera, Navigation, Radio, Anchor, Clock } from "lucide-react";

export default function SystemsPage() {
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
            Systems
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-warm-white leading-[0.95] mb-8">
            Current
            <br />
            <span className="italic text-accent/70">Prototypes</span>
          </h1>
          <p className="text-soft-grey text-lg leading-relaxed max-w-xl">
            Each system is designed around a specific mode of observation. Choose
            the vessel that matches your exploration style.
          </p>
        </motion.div>

        <div className="space-y-24">
          {systems.map((system, i) => (
            <SectionWrapper key={system.id}>
              <motion.div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] bg-surface rounded-sm overflow-hidden relative mb-8">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(50,50,50,0.4)_0%,_transparent_70%)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Anchor size={48} className="text-white/5" />
                    </div>
                    <div className="absolute bottom-4 left-4 font-mono text-[9px] text-soft-grey/40 tracking-wider">
                      {system.dimensions}
                    </div>
                  </div>
                </div>

                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="font-mono text-[10px] tracking-[0.3em] text-telem uppercase mb-3 block">
                    {system.id === "one"
                      ? "Flagship"
                      : system.id === "drift"
                      ? "Passive"
                      : "Module"}
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl text-warm-white mb-2">
                    {system.name}
                  </h2>
                  <p className="text-accent text-lg italic mb-6">
                    {system.tagline}
                  </p>
                  <p className="text-soft-grey leading-relaxed mb-8">
                    {system.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start gap-3 p-4 border border-white/5">
                      <Ruler size={16} className="text-telem mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[10px] font-mono text-soft-grey uppercase tracking-wider mb-1">
                          Dimensions
                        </p>
                        <p className="text-sm text-warm-white">
                          {system.dimensions}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 border border-white/5">
                      <Camera size={16} className="text-telem mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[10px] font-mono text-soft-grey uppercase tracking-wider mb-1">
                          Camera
                        </p>
                        <p className="text-sm text-warm-white">
                          {system.camera}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 border border-white/5">
                      <Navigation
                        size={16}
                        className="text-telem mt-0.5 shrink-0"
                      />
                      <div>
                        <p className="text-[10px] font-mono text-soft-grey uppercase tracking-wider mb-1">
                          GPS
                        </p>
                        <p className="text-sm text-warm-white">{system.gps}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 border border-white/5">
                      <Radio size={16} className="text-telem mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[10px] font-mono text-soft-grey uppercase tracking-wider mb-1">
                          Communication
                        </p>
                        <p className="text-sm text-warm-white">{system.comms}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 border border-white/5">
                      <Anchor size={16} className="text-telem mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[10px] font-mono text-soft-grey uppercase tracking-wider mb-1">
                          Deployment
                        </p>
                        <p className="text-sm text-warm-white">
                          {system.deploy}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 border border-white/5">
                      <Clock size={16} className="text-telem mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[10px] font-mono text-soft-grey uppercase tracking-wider mb-1">
                          Runtime
                        </p>
                        <p className="text-sm text-warm-white">
                          {system.runtime}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}
