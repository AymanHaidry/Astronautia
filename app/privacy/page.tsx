"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] text-telem uppercase mb-6 block">
            Legal
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-warm-white mb-12">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-soft-grey leading-relaxed">
            <section>
              <h2 className="font-serif text-xl text-warm-white mb-3">
                Information We Collect
              </h2>
              <p>
                Astronautia collects minimal data necessary to operate our services.
                This includes account information, telemetry data from your vessels
                (if cloud connectivity is enabled), and usage analytics to improve
                our systems. We do not sell your data to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-warm-white mb-3">
                Telemetry Data
              </h2>
              <p>
                When you opt into cloud-connected telemetry, your vessel may transmit
                GPS coordinates, sensor readings, and system status to our servers. This
                data is used to provide mission analytics and fleet management
                features. You can disable telemetry at any time through the Mission
                Planner application.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-warm-white mb-3">
                Data Retention
              </h2>
              <p>
                Telemetry data is retained for 90 days unless you have an active
                subscription that extends retention. Account information is retained
                as long as your account is active. You may request deletion of your
                data at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-warm-white mb-3">
                Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your data.
                All communications between your vessel and our servers are encrypted
                using TLS 1.3. Access to telemetry data requires authentication.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-warm-white mb-3">
                Contact
              </h2>
              <p>
                For privacy-related inquiries, please contact us at{" "}
                <span className="text-accent">privacy@astronautia.io</span>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
