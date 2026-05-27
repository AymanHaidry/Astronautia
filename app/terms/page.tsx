"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
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
            Terms of Service
          </h1>

          <div className="space-y-8 text-soft-grey leading-relaxed">
            <section>
              <h2 className="font-serif text-xl text-warm-white mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using Astronautia products, services, or websites,
                you agree to be bound by these Terms of Service. If you do not agree
                to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-warm-white mb-3">
                2. Product Use
              </h2>
              <p>
                Astronautia systems are designed for peaceful observation in calm
                freshwater and coastal environments. They are not intended for
                military, surveillance, or industrial applications. Users are
                responsible for complying with local regulations regarding
                autonomous vessels and environmental protection.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-warm-white mb-3">
                3. Warranty
              </h2>
              <p>
                Astronautia systems come with a limited one-year warranty covering
                manufacturing defects. The warranty does not cover damage from
                misuse, exposure to conditions outside specified operating parameters,
                or unauthorized modifications.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-warm-white mb-3">
                4. Intellectual Property
              </h2>
              <p>
                All software, firmware, designs, and documentation are the property
                of Astronautia. Users are granted a limited license to use firmware
                and software solely in conjunction with Astronautia hardware.
                Reverse engineering is prohibited.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-warm-white mb-3">
                5. Limitation of Liability
              </h2>
              <p>
                Astronautia shall not be liable for any indirect, incidental,
                special, or consequential damages arising from the use of our
                products. Total liability shall not exceed the purchase price of
                the product in question.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-warm-white mb-3">
                6. Governing Law
              </h2>
              <p>
                These terms shall be governed by and construed in accordance with
                the laws of the jurisdiction in which Astronautia is incorporated,
                without regard to conflict of law principles.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
