"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Check, ChevronRight, HelpCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

function Animate({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

const plans = [
  {
    name: "Beginner",
    tagline: "Start your journey",
    price: "£39",
    period: "/month",
    color: "border-white/10",
    accentColor: "text-white",
    highlight: false,
    cta: "Start for Free",
    features: [
      { text: "3 classes per week", included: true },
      { text: "Access to gym floor", included: true },
      { text: "Beginner coaching programme", included: true },
      { text: "Online training resources", included: true },
      { text: "Locker & changing facilities", included: true },
      { text: "All disciplines", included: false },
      { text: "PT sessions", included: false },
      { text: "Competition / fighter programme", included: false },
    ],
  },
  {
    name: "Regular",
    tagline: "Most popular — for committed members",
    price: "£65",
    period: "/month",
    color: "border-[#cc0000]",
    accentColor: "text-[#cc0000]",
    highlight: true,
    cta: "Join Regular",
    features: [
      { text: "Unlimited classes per week", included: true },
      { text: "All disciplines included", included: true },
      { text: "Priority class booking", included: true },
      { text: "1 PT session per month", included: true },
      { text: "Online training resources", included: true },
      { text: "Locker & changing facilities", included: true },
      { text: "Gym floor access", included: true },
      { text: "Competition / fighter programme", included: false },
    ],
  },
  {
    name: "Unlimited",
    tagline: "For serious athletes",
    price: "£95",
    period: "/month",
    color: "border-[#c9a84c]",
    accentColor: "text-[#c9a84c]",
    highlight: false,
    cta: "Go Unlimited",
    features: [
      { text: "Everything in Regular", included: true },
      { text: "2 PT sessions per month", included: true },
      { text: "Fighter programme access", included: true },
      { text: "Competition prep coaching", included: true },
      { text: "Personalised nutrition guide", included: true },
      { text: "Video analysis sessions", included: true },
      { text: "Sparring priority booking", included: true },
      { text: "Guest gym access (partner gyms)", included: true },
    ],
  },
];

const faqs = [
  {
    q: "Is there a joining fee?",
    a: "There is a one-off £20 admin fee on your first month. After that you only pay the monthly membership.",
  },
  {
    q: "Can I try before joining?",
    a: "Yes! We offer a free trial class to all new members. Just show up or contact us to book your slot.",
  },
  {
    q: "Are there contracts?",
    a: "No long-term contracts. All memberships are monthly rolling — cancel any time with 30 days notice.",
  },
  {
    q: "Do you offer family / student discounts?",
    a: "Yes. Students and under-18s receive 20% off any membership. Family bundles available — contact us for details.",
  },
  {
    q: "I've never trained before — is this right for me?",
    a: "Absolutely. The Beginner plan is designed specifically for new starters. Every coach at Predators loves working with beginners.",
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(204,0,0,0.08),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Animate>
            <motion.span variants={fadeUp} className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#c9a84c]" /> Membership
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-black text-white mb-4">
              Invest in Yourself
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-xl">
              Simple, transparent pricing. No hidden fees. No long-term contracts. Just great training.
            </motion.p>
          </Animate>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {plans.map((plan) => (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  className={`relative border-2 ${plan.color} ${plan.highlight ? "bg-[#1a0000]" : "bg-[#111]"} flex flex-col`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-px left-0 right-0 h-1 bg-[#cc0000]" />
                  )}
                  {plan.highlight && (
                    <div className="bg-[#cc0000] text-white text-[10px] font-bold uppercase tracking-widest text-center py-2">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8 border-b border-white/5">
                    <h2 className={`font-black text-2xl uppercase tracking-wide mb-1 ${plan.accentColor}`}>{plan.name}</h2>
                    <p className="text-gray-500 text-sm mb-5">{plan.tagline}</p>
                    <div className="flex items-end gap-1.5">
                      <span className="text-5xl font-black text-white">{plan.price}</span>
                      <span className="text-gray-500 text-sm mb-1.5">{plan.period}</span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((f) => (
                        <li key={f.text} className={`flex items-center gap-3 text-sm ${f.included ? "text-gray-300" : "text-gray-600 line-through"}`}>
                          <Check
                            size={14}
                            className={f.included ? "text-[#cc0000] shrink-0" : "text-gray-700 shrink-0"}
                          />
                          {f.text}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`block text-center font-bold uppercase tracking-widest text-sm py-4 transition-colors ${
                        plan.highlight
                          ? "bg-[#cc0000] hover:bg-[#990000] text-white"
                          : plan.name === "Unlimited"
                          ? "bg-[#c9a84c] hover:bg-[#b8973e] text-black"
                          : "border border-white/20 hover:border-white text-gray-300 hover:text-white"
                      }`}
                    >
                      {plan.cta} <ChevronRight size={14} className="inline -mt-0.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </Animate>

          <Animate className="mt-8 text-center">
            <motion.p variants={fadeUp} className="text-gray-600 text-sm">
              All memberships include a one-off £20 admin fee on first month. Student / family discounts available.
            </motion.p>
          </Animate>
        </div>
      </section>

      {/* Free trial CTA */}
      <section className="relative py-20 bg-[#cc0000] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(0,0,0,0.3),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Animate>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white mb-4">
              Not Sure Yet?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-red-100 text-lg mb-8 max-w-lg mx-auto">
              Book a completely free trial class. No commitment, no pressure. Come in and see if we&apos;re the right fit for you.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#cc0000] font-black uppercase tracking-widest text-sm px-10 py-4 hover:bg-gray-100 transition-colors">
                Book Free Trial
              </Link>
            </motion.div>
          </Animate>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Animate className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#c9a84c]" /> FAQ <span className="w-8 h-px bg-[#c9a84c]" />
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-white">
              Common Questions
            </motion.h2>
          </Animate>

          <Animate>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <motion.div
                  key={faq.q}
                  variants={fadeUp}
                  className="bg-[#111] border border-white/5 p-6"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <HelpCircle size={16} className="text-[#c9a84c] mt-0.5 shrink-0" />
                    <h3 className="text-white font-bold">{faq.q}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed pl-7">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
}
