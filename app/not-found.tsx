"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <span className="font-mono text-[10px] tracking-[0.4em] text-telem uppercase mb-8 block">
          Error 404
        </span>
        <h1 className="font-serif text-6xl md:text-8xl text-warm-white mb-6">
          Lost at
          <span className="italic text-accent/70"> Sea</span>
        </h1>
        <p className="text-soft-grey text-lg mb-10 max-w-md mx-auto">
          The page you are looking for has drifted beyond our navigation range.
          Return to known waters.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 border border-white/15 text-warm-white text-sm tracking-wide hover:border-white/30 transition-colors duration-300"
        >
          <ArrowLeft size={14} />
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
