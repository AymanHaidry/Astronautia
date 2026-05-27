"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { journalEntries } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function JournalPage() {
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
            Journal
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-warm-white leading-[0.95] mb-8">
            Mission
            <br />
            <span className="italic text-accent/70">Logs</span>
          </h1>
          <p className="text-soft-grey text-lg leading-relaxed max-w-xl">
            Field notes from our deployments. Raw observations, technical
            reflections, and the quiet moments that make exploration meaningful.
          </p>
        </motion.div>

        <div className="space-y-24">
          {journalEntries.map((entry, i) => (
            <SectionWrapper key={entry.id}>
              <motion.article className="group">
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                  <div className="lg:col-span-2">
                    <div className="aspect-[4/3] bg-surface overflow-hidden">
                      <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(50,50,50,0.3)_0%,_transparent_70%)] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                        <span className="font-mono text-[9px] text-soft-grey/30 tracking-wider">
                          {entry.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-3 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-[10px] text-telem tracking-wider">
                        {entry.date}
                      </span>
                      <span className="w-8 h-px bg-white/10" />
                      <span className="font-mono text-[10px] text-soft-grey tracking-wider">
                        {entry.category}
                      </span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-warm-white group-hover:text-accent transition-colors duration-300 mb-6">
                      {entry.title}
                    </h2>
                    <p className="text-soft-grey leading-relaxed text-base mb-6">
                      {entry.excerpt}
                    </p>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-sm text-soft-grey hover:text-warm-white transition-colors group/link"
                    >
                      Read full entry
                      <ArrowRight
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </div>
  );
}
