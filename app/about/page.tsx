"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Telescope, Heart, Brain, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-telem uppercase mb-6 block">
            About
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-warm-white leading-[0.95] mb-8">
            Compact exploration
            <br />
            <span className="italic text-accent/70">infrastructure</span>
            <br />
            for curious minds.
          </h1>
          <p className="text-soft-grey text-lg leading-relaxed max-w-2xl">
            Astronautia builds autonomous systems that transform how we observe
            the natural world. Not through force, but through quiet, intelligent
            presence.
          </p>
        </motion.div>

        <SectionWrapper className="mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-3xl text-warm-white mb-6">
                What We Build
              </h2>
              <p className="text-soft-grey leading-relaxed mb-6">
                Our systems are small-scale autonomous vessels—approximately 30–40
                cm in length—designed for lakes, ponds, beaches, and calm coastal
                waters. Each vessel carries onboard cameras, GPS-assisted navigation,
                environmental sensors, and the ability to deploy miniature underwater
                observation modules.
              </p>
              <p className="text-soft-grey leading-relaxed">
                Control logic is embedded directly into onboard firmware using
                ESP32 and Arduino-based microcontrollers. Systems are preconfigured
                before deployment and operate autonomously using predefined
                behaviors and navigation logic.
              </p>
            </div>
            <div>
              <h2 className="font-serif text-3xl text-warm-white mb-6">
                What We Believe
              </h2>
              <p className="text-soft-grey leading-relaxed mb-6">
                Exploration technology should feel calm, accessible, intelligent,
                atmospheric, and emotionally engaging. Every mission should feel
                like operating a miniature observatory—not a military drone, not an
                industrial tool.
              </p>
              <p className="text-soft-grey leading-relaxed">
                The goal is not seafaring or industrial marine work. The goal is
                peaceful, continuous observation of environments that are normally
                difficult to access and observe.
              </p>
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="mb-20">
          <div className="border-t border-white/5 pt-16">
            <h2 className="font-serif text-3xl text-warm-white mb-12 text-center">
              Our Principles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Telescope,
                  title: "Curiosity",
                  desc: "We build tools that extend human curiosity into environments we cannot easily reach.",
                },
                {
                  icon: Heart,
                  title: "Peace",
                  desc: "Our systems are designed to observe without disturbing. Quiet propulsion, minimal wake.",
                },
                {
                  icon: Brain,
                  title: "Intelligence",
                  desc: "Autonomous decision-making reduces human intervention and enables longer missions.",
                },
                {
                  icon: Sparkles,
                  title: "Atmosphere",
                  desc: "Every interaction should feel cinematic and emotionally resonant, not clinical.",
                },
              ].map((principle, i) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <principle.icon
                    size={28}
                    className="text-telem mx-auto mb-4"
                  />
                  <h3 className="font-serif text-lg text-warm-white mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-soft-grey text-sm leading-relaxed">
                    {principle.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper>
          <div className="border-t border-white/5 pt-16 text-center">
            <p className="font-mono text-[10px] tracking-[0.4em] text-telem uppercase mb-4">
              Current Generation
            </p>
            <p className="text-soft-grey text-sm max-w-lg mx-auto leading-relaxed">
              Our current prototypes are approximately 30–40 cm in length. They use
              onboard ESP32 and Arduino-based microcontrollers. All control logic is
              hardcoded directly into onboard firmware. Systems are preconfigured
              before deployment and operate autonomously using predefined behaviors
              and navigation logic.
            </p>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-soft-grey">
              <span>Autonomous movement</span>
              <span className="w-1 h-1 rounded-full bg-soft-grey/30" />
              <span>Waypoint navigation</span>
              <span className="w-1 h-1 rounded-full bg-soft-grey/30" />
              <span>Camera streaming</span>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}
