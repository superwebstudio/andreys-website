"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Clock,
  MapPin,
  Shield,
  Flame,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { membershipPlans, schedule } from "@/lib/gym-data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const trainingTimes = schedule
  .filter((day) => day.classes.length > 0)
  .map((day) => ({
    day: day.day,
    classes: day.classes.map((cls) => `${cls.time} – ${cls.name}`),
  }));

const stats = [
  { value: "500+", label: "Active Members" },
  { value: "15+", label: "Years Experience" },
  { value: "8", label: "Disciplines Taught" },
  { value: "50+", label: "Fighters Trained" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#130000] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(204,0,0,0.15),transparent)]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Big background text */}
        <span className="absolute select-none pointer-events-none text-[20vw] font-black text-white/[0.02] leading-none tracking-tighter top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          PREDATORS
        </span>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] mb-6 border border-[#c9a84c]/30 px-4 py-1.5">
              Southampton&apos;s Premier MMA Gym
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none tracking-tighter mb-4"
          >
            <span className="text-white">TRAIN.</span>
            <br />
            <span className="text-[#cc0000]">FIGHT.</span>
            <br />
            <span className="text-[#c9a84c]">CONQUER.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mt-6 mb-10 leading-relaxed"
          >
            We motivate, instil confidence, and make you physically and mentally
            stronger. No experience needed — just the will to start.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/membership"
              className="inline-flex items-center gap-2 bg-[#cc0000] hover:bg-[#990000] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-200"
            >
              Join Now <ChevronRight size={16} />
            </Link>
            <Link
              href="/timetable"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors duration-200"
            >
              View Timetable
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-widest text-gray-600">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" as const }}
            className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────── */}
      <section className="bg-[#cc0000] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-black text-white">{stat.value}</div>
                <div className="text-red-200 text-xs uppercase tracking-widest mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRO ───────────────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Section>
              <motion.span variants={fadeUp} className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-[#c9a84c]" /> Who We Are
              </motion.span>
              <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6">
                More Than a Gym.<br />
                <span className="text-[#cc0000]">A Community.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed mb-4">
                Predators MMA was founded on one simple belief: that every person has a predator inside them waiting to be unleashed. Whether you&apos;re brand new to martial arts or a seasoned fighter, we meet you where you are.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed mb-8">
                Our coaches are world-class competitors turned passionate instructors. Our gym is a place of discipline, respect, and relentless improvement.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                {[
                  { icon: Shield, label: "Safe Environment" },
                  { icon: Flame, label: "Elite Coaching" },
                  { icon: Trophy, label: "Proven Results" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 bg-[#1a1a1a] border border-white/5 px-4 py-2.5 text-sm text-gray-300">
                    <Icon size={14} className="text-[#cc0000]" />
                    {label}
                  </div>
                ))}
              </motion.div>
            </Section>

            {/* Image placeholder */}
            <Section className="relative">
              <motion.div variants={fadeUp} className="relative aspect-[4/5] bg-[#1a1a1a] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[#cc0000] text-6xl font-black opacity-20">PMMA</div>
                    <p className="text-gray-600 text-xs mt-2">Add your gym photo here</p>
                  </div>
                </div>
                {/* Decorative border */}
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-[#cc0000]/20 pointer-events-none" />
              </motion.div>
              {/* Gold accent block */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#c9a84c] flex items-center justify-center">
                <span className="text-black font-black text-2xl">15+</span>
              </div>
            </Section>
          </div>
        </div>
      </section>

      {/* ── TRAINING TIMES PREVIEW ──────────────────────── */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#c9a84c]" /> When We Train <span className="w-8 h-px bg-[#c9a84c]" />
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white">
              Weekly Timetable
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-3 max-w-xl mx-auto">
              K-1, Muay Thai, boxing, grappling and kids classes throughout the week.
            </motion.p>
          </Section>

          <Section>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {trainingTimes.slice(0, 4).map((day) => (
                <motion.div
                  key={day.day}
                  variants={fadeUp}
                  className="bg-[#111] border border-white/5 hover:border-[#cc0000]/30 transition-colors p-5"
                >
                  <div className="text-[#c9a84c] font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                    <Clock size={12} />
                    {day.day}
                  </div>
                  <ul className="space-y-2">
                    {day.classes.map((cls) => (
                      <li key={cls} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#cc0000] mt-2 shrink-0" />
                        {cls}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/timetable"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-[#cc0000] text-gray-300 hover:text-white text-sm font-bold uppercase tracking-widest px-8 py-3.5 transition-colors"
              >
                Full Timetable <ArrowRight size={14} />
              </Link>
            </div>
          </Section>
        </div>
      </section>

      {/* ── MEMBERSHIP TEASER ────────────────────────────── */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Section className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#c9a84c]" /> Membership <span className="w-8 h-px bg-[#c9a84c]" />
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white">
              Choose Your Path
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-500 mt-3 max-w-xl mx-auto">
              £60/month unlimited, or £10 per session. Private coaching available too.
            </motion.p>
          </Section>

          <Section>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {membershipPlans.map((plan) => (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  className={`relative border-2 ${plan.color} p-8 flex flex-col ${
                    plan.highlight ? "bg-[#1a0000]" : "bg-[#111]"
                  }`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#cc0000] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1">
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-white font-black text-xl uppercase tracking-wide mb-2">{plan.name}</h3>
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-black text-white">{plan.price}</span>
                      <span className="text-gray-500 text-sm mb-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 bg-[#cc0000] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/membership"
                    className={`text-center text-sm font-bold uppercase tracking-widest py-3 transition-colors ${
                      plan.highlight
                        ? "bg-[#cc0000] hover:bg-[#990000] text-white"
                        : "border border-white/20 hover:border-white text-gray-300 hover:text-white"
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#cc0000]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_50%,rgba(0,0,0,0.4),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Section>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-6xl font-black text-white leading-tight mb-4">
              Book Your Free<br />Trial Session Today
            </motion.h2>
            <motion.p variants={fadeUp} className="text-red-100 text-lg mb-10 max-w-xl mx-auto">
              Come in, train with us, and see why Predators MMA is Southampton&apos;s most respected combat sports gym.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#cc0000] font-black uppercase tracking-widest text-sm px-10 py-4 hover:bg-gray-100 transition-colors"
              >
                Book a Trial <ChevronRight size={16} />
              </Link>
              <a
                href="tel:+441234567890"
                className="inline-flex items-center gap-2 border-2 border-white/50 hover:border-white text-white font-bold uppercase tracking-widest text-sm px-10 py-4 transition-colors"
              >
                <MapPin size={16} /> Call Us
              </a>
            </motion.div>
          </Section>
        </div>
      </section>
    </>
  );
}
