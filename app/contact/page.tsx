"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { Send, Mail, Users, HelpCircle } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

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
            Contact
          </span>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-warm-white leading-[0.95] mb-8">
            Get in
            <br />
            <span className="italic text-accent/70">Touch</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <SectionWrapper>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-[10px] tracking-[0.2em] text-soft-grey uppercase mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-white/10 py-3 text-warm-white text-sm focus:border-accent focus:outline-none transition-colors placeholder:text-soft-grey/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[0.2em] text-soft-grey uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-white/10 py-3 text-warm-white text-sm focus:border-accent focus:outline-none transition-colors placeholder:text-soft-grey/30"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[0.2em] text-soft-grey uppercase mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-white/10 py-3 text-warm-white text-sm focus:border-accent focus:outline-none transition-colors resize-none placeholder:text-soft-grey/30"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3 bg-warm-white text-void text-sm font-medium tracking-wide hover:bg-accent transition-colors duration-300"
              >
                {submitted ? "Message Sent" : "Send Message"}
                <Send size={14} />
              </button>
            </form>
          </SectionWrapper>

          <SectionWrapper delay={0.2}>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Mail size={18} className="text-telem" />
                  <h3 className="font-serif text-xl text-warm-white">
                    General Inquiries
                  </h3>
                </div>
                <p className="text-soft-grey text-sm leading-relaxed">
                  For questions about our systems, availability, or general
                  information.
                </p>
                <p className="text-accent text-sm mt-2">hello@astronautia.io</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Users size={18} className="text-telem" />
                  <h3 className="font-serif text-xl text-warm-white">
                    Press & Partnerships
                  </h3>
                </div>
                <p className="text-soft-grey text-sm leading-relaxed">
                  Media inquiries, collaboration proposals, and partnership
                  opportunities.
                </p>
                <p className="text-accent text-sm mt-2">press@astronautia.io</p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <HelpCircle size={18} className="text-telem" />
                  <h3 className="font-serif text-xl text-warm-white">
                    Support
                  </h3>
                </div>
                <p className="text-soft-grey text-sm leading-relaxed">
                  Technical support, troubleshooting, and warranty claims.
                </p>
                <p className="text-accent text-sm mt-2">support@astronautia.io</p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </div>
  );
}
