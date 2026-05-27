"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { downloads } from "@/lib/data";
import { Download, FileCode, AppWindow, Smartphone, BookOpen, Box } from "lucide-react";

const icons = [FileCode, AppWindow, Smartphone, BookOpen, Box];

export default function DownloadsPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-telem uppercase mb-6 block">
            Downloads
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-warm-white leading-[0.95] mb-8">
            Software &
            <br />
            <span className="italic text-accent/70">Resources</span>
          </h1>
          <p className="text-soft-grey text-lg leading-relaxed max-w-xl">
            Firmware, applications, documentation, and design files for your
            Astronautia system.
          </p>
        </motion.div>

        <div className="space-y-4">
          {downloads.map((dl, i) => {
            const Icon = icons[i];
            return (
              <SectionWrapper key={dl.id} delay={i * 0.05}>
                <motion.div
                  className="flex flex-col md:flex-row md:items-center gap-6 p-6 border border-white/5 hover:border-white/10 transition-colors group"
                >
                  <div className="w-12 h-12 bg-surface flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-telem group-hover:text-accent transition-colors" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-serif text-xl text-warm-white group-hover:text-accent transition-colors">
                        {dl.name}
                      </h3>
                      <span className="font-mono text-[10px] text-telem">
                        {dl.version}
                      </span>
                    </div>
                    <p className="text-soft-grey text-sm leading-relaxed">
                      {dl.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-mono text-[10px] text-soft-grey">
                      {dl.size}
                    </span>
                    <button className="flex items-center gap-2 px-4 py-2 bg-warm-white text-void text-xs font-medium hover:bg-accent transition-colors">
                      <Download size={14} />
                      Download
                    </button>
                  </div>
                </motion.div>
              </SectionWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
}
