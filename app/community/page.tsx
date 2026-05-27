"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { communityMissions } from "@/lib/data";
import { MapPin, Heart, MessageCircle } from "lucide-react";

export default function CommunityPage() {
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
            Community
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-warm-white leading-[0.95] mb-8">
            Shared
            <br />
            <span className="italic text-accent/70">Discoveries</span>
          </h1>
          <p className="text-soft-grey text-lg leading-relaxed max-w-xl">
            Missions, photos, and stories from explorers around the world using
            Astronautia systems.
          </p>
        </motion.div>

        {/* Featured Map Area */}
        <SectionWrapper className="mb-20">
          <div className="aspect-[21/9] bg-surface mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(50,50,50,0.3)_0%,_transparent_70%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin size={48} className="text-white/5" />
            </div>
            <div className="absolute bottom-4 left-4 font-mono text-[9px] text-soft-grey/40 tracking-wider">
              GLOBAL MISSION MAP // 47 DEPLOYMENTS // 12 COUNTRIES
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-soft-grey">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-telem" />
              47 deployments
            </span>
            <span className="flex items-center gap-2">
              <Heart size={14} className="text-telem" />
              12 countries
            </span>
            <span className="flex items-center gap-2">
              <MessageCircle size={14} className="text-telem" />
              156 shared observations
            </span>
          </div>
        </SectionWrapper>

        {/* Mission Grid */}
        <SectionWrapper>
          <h2 className="font-serif text-2xl text-warm-white mb-8">
            Recent Missions
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityMissions.map((mission, i) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <div className="aspect-square bg-surface mb-4 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(50,50,50,0.3)_0%,_transparent_70%)]" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin size={32} className="text-white/5" />
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
        </SectionWrapper>
      </div>
    </div>
  );
}
