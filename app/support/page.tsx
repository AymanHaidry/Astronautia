"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { faqs } from "@/lib/data";
import { ChevronDown, BookOpen, Download, Battery, Shield, Wrench } from "lucide-react";

const guides = [
  { icon: BookOpen, title: "Setup Guides", desc: "Step-by-step instructions for first deployment and calibration." },
  { icon: Download, title: "Firmware Updates", desc: "Latest firmware releases and update procedures for all systems." },
  { icon: Battery, title: "Battery Safety", desc: "Lithium-polymer handling, charging guidelines, and storage recommendations." },
  { icon: Shield, title: "Waterproofing", desc: "Seal inspection, IP ratings, and maintenance procedures." },
  { icon: Wrench, title: "Troubleshooting", desc: "Common issues and their resolutions." },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
            Support
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-warm-white leading-[0.95] mb-8">
            Help &
            <br />
            <span className="italic text-accent/70">Resources</span>
          </h1>
          <p className="text-soft-grey text-lg leading-relaxed max-w-xl">
            Everything you need to operate, maintain, and get the most from your
            Astronautia system.
          </p>
        </motion.div>

        {/* Guides Grid */}
        <SectionWrapper className="mb-20">
          <h2 className="font-serif text-2xl text-warm-white mb-8">
            Quick Access
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {guides.map((guide, i) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="p-6 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group"
              >
                <guide.icon size={20} className="text-telem mb-4 group-hover:text-accent transition-colors" />
                <h3 className="font-serif text-lg text-warm-white mb-2">
                  {guide.title}
                </h3>
                <p className="text-soft-grey text-sm leading-relaxed">
                  {guide.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>

        {/* FAQs */}
        <SectionWrapper>
          <h2 className="font-serif text-2xl text-warm-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="border border-white/5"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="text-warm-white text-sm pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-soft-grey shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-soft-grey text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}
