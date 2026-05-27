"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Waves, Eye, Radio } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";
import { journalEntries, communityMissions } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-void">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(20,20,20,1)_0%,_rgba(10,10,10,1)_100%)]" />
          {/* Stars */}
          <div className="absolute inset-0">
            {Array.from({ length: 60 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-px bg-warm-white/60 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 60}%`,
                }}
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
          {/* Horizon line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[35%] left-0 right-0 h-px bg-warm-white/10 origin-center"
          />
          {/* Sonar sweep */}
          <motion.div
            className="absolute bottom-[35%] left-1/2 w-[600px] h-[600px] -translate-x-1/2 rounded-full border border-telem/10"
            animate={{ scale: [0.5, 1.5], opacity: [0.3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <span className="font-mono text-[10px] tracking-[0.4em] text-telem uppercase">
              Compact Autonomous Exploration
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-warm-white leading-[0.95] tracking-tight mb-8"
          >
            A new way to
            <br />
            <span className="italic text-accent/80">explore water</span>
            <br />
            and sky.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.2 }}
            className="text-soft-grey text-base md:text-lg max-w-lg mx-auto mb-10 leading-relaxed"
          >
            Compact autonomous exploration systems designed for curious minds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/systems"
              className="group inline-flex items-center gap-2 px-8 py-3 bg-warm-white text-void text-sm font-medium tracking-wide hover:bg-accent transition-colors duration-300"
            >
              Explore Systems
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 px-8 py-3 border border-white/15 text-warm-white text-sm tracking-wide hover:border-white/30 transition-colors duration-300"
            >
              View Mission Journal
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-warm-white/20"
          />
        </motion.div>
      </section>

      {/* Sea and Sky */}
      <SectionWrapper className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] text-telem uppercase mb-4 block">
                Observation
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-white leading-[1.05] mb-6">
                Sea and
                <br />
                <span className="italic text-accent/70">Sky</span>
              </h2>
              <p className="text-soft-grey leading-relaxed mb-8 max-w-md">
                From the surface of a calm lake to the clouds above, Astronautia
                systems observe both worlds simultaneously. Dual-camera setups
                capture underwater life and atmospheric phenomena in a single
                continuous mission.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-soft-grey">
                  <Waves size={16} className="text-telem" />
                  <span>Underwater</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-soft-grey">
                  <Eye size={16} className="text-telem" />
                  <span>Surface</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-soft-grey">
                  <Radio size={16} className="text-telem" />
                  <span>Sky</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] bg-surface rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(40,40,40,0.5)_0%,_transparent_70%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Waves size={64} className="text-white/5" />
              </div>
              <div className="absolute bottom-4 left-4 font-mono text-[9px] text-soft-grey/40 tracking-wider">
                DUAL OBSERVATION MODE // ACTIVE
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Autonomous Exploration */}
      <SectionWrapper className="py-24 lg:py-32 px-6 lg:px-8 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] tracking-[0.3em] text-telem uppercase mb-4 block">
              Intelligence
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-white leading-[1.05]">
              Autonomous
              <br />
              <span className="italic text-accent/70">Exploration</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Compass,
                title: "Waypoint Navigation",
                desc: "Pre-program routes with GPS precision. The vessel follows your path autonomously, adjusting for currents and obstacles.",
              },
              {
                icon: Radio,
                title: "Fleet Coordination",
                desc: "Multiple vessels communicate via LoRa mesh networking. Deploy a fleet that shares data and avoids collision automatically.",
              },
              {
                icon: Eye,
                title: "Adaptive Observation",
                desc: "Onboard sensors adjust camera settings, recording intervals, and movement speed based on environmental conditions.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="p-8 border border-white/5 hover:border-white/10 transition-colors duration-500 group"
              >
                <feature.icon
                  size={24}
                  className="text-telem mb-6 group-hover:text-accent transition-colors duration-500"
                />
                <h3 className="font-serif text-xl text-warm-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-soft-grey text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Built for Quiet Discovery */}
      <SectionWrapper className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] bg-surface rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(40,40,40,0.5)_0%,_transparent_70%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Compass size={64} className="text-white/5" />
              </div>
              <div className="absolute bottom-4 left-4 font-mono text-[9px] text-soft-grey/40 tracking-wider">
                QUIET MODE // ENGAGED
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-mono text-[10px] tracking-[0.3em] text-telem uppercase mb-4 block">
                Philosophy
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-white leading-[1.05] mb-6">
                Built for
                <br />
                <span className="italic text-accent/70">Quiet Discovery</span>
              </h2>
              <p className="text-soft-grey leading-relaxed mb-6 max-w-md">
                Every mission is designed to leave no trace. Electric propulsion,
                minimal wake, and silent operation mean the environment remains
                undisturbed while you observe.
              </p>
              <p className="text-soft-grey leading-relaxed max-w-md">
                The goal is not conquest. It is understanding. Not extraction,
                but observation. Astronautia systems are built for those who
                believe the best discoveries happen in silence.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission Journal Preview */}
      <SectionWrapper className="py-24 lg:py-32 px-6 lg:px-8 bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] text-telem uppercase mb-4 block">
                Field Notes
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-warm-white">
                Mission Journal
              </h2>
            </div>
            <Link
              href="/journal"
              className="hidden md:inline-flex items-center gap-2 text-sm text-soft-grey hover:text-warm-white transition-colors group"
            >
              View all entries
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {journalEntries.slice(0, 2).map((entry, i) => (
              <motion.article
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <Link href="/journal">
                  <div className="aspect-[16/9] bg-surface mb-6 overflow-hidden">
                    <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(50,50,50,0.3)_0%,_transparent_70%)] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                      <span className="font-mono text-[9px] text-soft-grey/30 tracking-wider">
                        {entry.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-[10px] text-telem">
                      {entry.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-soft-grey/30" />
                    <span className="font-mono text-[10px] text-soft-grey">
                      {entry.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-warm-white group-hover:text-accent transition-colors duration-300 mb-3">
                    {entry.title}
                  </h3>
                  <p className="text-soft-grey text-sm leading-relaxed line-clamp-2">
                    {entry.excerpt}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Community Missions */}
      <SectionWrapper className="py-24 lg:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[10px] tracking-[0.3em] text-telem uppercase mb-4 block">
              Community
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-warm-white leading-[1.05] mb-4">
              Shared Discoveries
            </h2>
            <p className="text-soft-grey max-w-md mx-auto">
              Missions from explorers around the world using Astronautia systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityMissions.map((mission, i) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="aspect-square bg-surface mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(50,50,50,0.3)_0%,_transparent_70%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Compass size={32} className="text-white/5" />
                  </div>
                  <div className="absolute bottom-3 left-3 font-mono text-[9px] text-soft-grey/40">
                    {mission.location}
                  </div>
                </div>
                <p className="font-mono text-[10px] text-telem mb-1">
                  {mission.user}
                </p>
                <p className="text-soft-grey text-sm leading-relaxed">
                  {mission.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/community"
              className="inline-flex items-center gap-2 text-sm text-soft-grey hover:text-warm-white transition-colors group"
            >
              Explore all missions
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
