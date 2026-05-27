"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-void">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-2xl text-warm-white">
                Astronautia
              </span>
            </Link>
            <p className="text-soft-grey text-sm leading-relaxed max-w-sm">
              Compact autonomous exploration systems for observing water and sky.
              Built for lakes, coastlines, and calm waters.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-soft-grey uppercase mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/systems", label: "Systems" },
                { href: "/explore", label: "Explore" },
                { href: "/store", label: "Store" },
                { href: "/journal", label: "Journal" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-soft-grey hover:text-warm-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-[0.2em] text-soft-grey uppercase mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About" },
                { href: "/community", label: "Community" },
                { href: "/support", label: "Support" },
                { href: "/contact", label: "Contact" },
                { href: "/downloads", label: "Downloads" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-soft-grey hover:text-warm-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-soft-grey/60">
            &copy; {new Date().getFullYear()} Astronautia. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-soft-grey/60 hover:text-warm-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-soft-grey/60 hover:text-warm-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/easter-egg" className="group inline-block">
            <p className="font-mono text-[10px] tracking-[0.4em] text-soft-grey/40 group-hover:text-accent/60 transition-colors duration-500 uppercase">
              Built for the relentless.
            </p>
          </Link>
        </motion.div>
      </div>
    </footer>
  );
}
