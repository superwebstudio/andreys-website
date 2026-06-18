"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Check, ChevronRight, HelpCircle, Users } from "lucide-react";
import { membershipPlans, privateSessions } from "@/lib/gym-data";

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

const faqs = [
  {
    q: "Can I try before joining?",
    a: "Yes. Drop in for a per-session class at £10, or contact us to arrange your first visit.",
  },
  {
    q: "What's included in the monthly membership?",
    a: "£60/month gives you unlimited access to all group classes on the timetable — K-1, Muay Thai, boxing, grappling and more.",
  },
  {
    q: "Do you offer private training?",
    a: "Yes. Private sessions and small groups are available from £40 for a 45-minute 1-to-1, up to £60 for a 60-minute session with 4 people.",
  },
  {
    q: "Are there contracts?",
    a: "No long-term contracts. Pay monthly or per session — whichever suits you.",
  },
  {
    q: "I've never trained before — is this right for me?",
    a: "Absolutely. Our drills and technique classes welcome all levels. Come in, train with us, and build from there.",
  },
];

export default function MembershipPage() {
  return (
    <>
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
              Simple, transparent pricing. Monthly membership or pay per session — plus private coaching for individuals and small groups.
            </motion.p>
          </Animate>
        </div>
      </section>

      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-3xl font-black text-white">
              Group Classes
            </motion.h2>
          </Animate>

          <Animate>
            <div className="grid sm:grid-cols-2 gap-6 items-start max-w-4xl mx-auto">
              {membershipPlans.map((plan) => (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  className={`relative border-2 ${plan.color} ${plan.highlight ? "bg-[#1a0000]" : "bg-[#111]"} flex flex-col`}
                >
                  {plan.highlight && (
                    <>
                      <div className="absolute -top-px left-0 right-0 h-1 bg-[#cc0000]" />
                      <div className="bg-[#cc0000] text-white text-[10px] font-bold uppercase tracking-widest text-center py-2">
                        Best Value
                      </div>
                    </>
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
                      {plan.features.map((text) => (
                        <li key={text} className="flex items-center gap-3 text-sm text-gray-300">
                          <Check size={14} className="text-[#cc0000] shrink-0" />
                          {text}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className={`block text-center font-bold uppercase tracking-widest text-sm py-4 transition-colors ${
                        plan.highlight
                          ? "bg-[#cc0000] hover:bg-[#990000] text-white"
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
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate className="text-center mb-12">
            <motion.span variants={fadeUp} className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#c9a84c]" /> Private Coaching <span className="w-8 h-px bg-[#c9a84c]" />
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-white mb-3">
              Private Sessions &amp; Small Groups
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 max-w-xl mx-auto">
              One-to-one or small group coaching tailored to your goals. Contact us to book.
            </motion.p>
          </Animate>

          <Animate>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {privateSessions.map((session) => (
                <motion.div
                  key={`${session.people}-${session.duration}`}
                  variants={fadeUp}
                  className="bg-[#111] border border-[#c9a84c]/20 p-6 text-center hover:border-[#c9a84c]/40 transition-colors"
                >
                  <div className="w-10 h-10 border border-[#c9a84c]/30 flex items-center justify-center mx-auto mb-4">
                    <Users size={18} className="text-[#c9a84c]" />
                  </div>
                  <div className="text-4xl font-black text-white mb-1">{session.price}</div>
                  <div className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-2">
                    {session.duration}
                  </div>
                  <p className="text-gray-400 text-sm">
                    {session.people} {session.people === 1 ? "person" : "people"}
                  </p>
                </motion.div>
              ))}
            </div>
          </Animate>

          <Animate className="text-center mt-8">
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-[#c9a84c] text-gray-300 hover:text-white text-sm font-bold uppercase tracking-widest px-8 py-3.5 transition-colors"
              >
                Book Private Session <ChevronRight size={14} />
              </Link>
            </motion.div>
          </Animate>
        </div>
      </section>

      <section className="relative py-20 bg-[#cc0000] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(0,0,0,0.3),transparent)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Animate>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white mb-4">
              Not Sure Yet?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-red-100 text-lg mb-8 max-w-lg mx-auto">
              Try a single class for £10, or get in touch to arrange your first visit.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#cc0000] font-black uppercase tracking-widest text-sm px-10 py-4 hover:bg-gray-100 transition-colors">
                Get in Touch
              </Link>
            </motion.div>
          </Animate>
        </div>
      </section>

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
                <motion.div key={faq.q} variants={fadeUp} className="bg-[#111] border border-white/5 p-6">
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
