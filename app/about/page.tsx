"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Shield, Flame, Users, Target, ChevronRight, Trophy } from "lucide-react";
import { headTrainer } from "@/lib/gym-data";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Animate({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "visible" : "hidden"} className={className}>
      {children}
    </motion.div>
  );
}

const values = [
  {
    icon: Shield,
    title: "Discipline",
    desc: "The foundation of all growth. We cultivate mental toughness alongside physical strength.",
  },
  {
    icon: Flame,
    title: "Confidence",
    desc: "Every class is designed to push you further and prove to yourself what you're truly capable of.",
  },
  {
    icon: Users,
    title: "Community",
    desc: "Walk in as a stranger, leave as family. Our gym is built on mutual respect and support.",
  },
  {
    icon: Target,
    title: "Excellence",
    desc: "We hold ourselves to the highest standards — in technique, coaching, and character.",
  },
];

const milestones = [
  { year: "2009", event: "Predators MMA founded in a small unit in East Manchester" },
  { year: "2012", event: "Moved to current 8,000 sq ft facility with full mat space" },
  { year: "2015", event: "First national champion produced from our ranks" },
  { year: "2018", event: "Women's programme launched — fastest growing class in the gym" },
  { year: "2021", event: "Kids & teens programme expanded to 4 sessions per week" },
  { year: "2024", event: "500+ active members and counting" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(204,0,0,0.1),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Animate>
            <motion.span variants={fadeUp} className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#c9a84c]" /> Our Story
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-7xl font-black text-white leading-tight mb-6">
              Built by Fighters.<br />
              <span className="text-[#cc0000]">For Everyone.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Predators MMA was born out of a passion for martial arts and a belief that combat sports can transform lives — not just bodies.
            </motion.p>
          </Animate>
        </div>
      </section>

      {/* Story + Image */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image block */}
          <Animate>
            <motion.div variants={fadeUp} className="relative aspect-[3/4] bg-[#1a1a1a] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[#cc0000]/20 text-[8rem] font-black leading-none">15+</div>
                  <p className="text-gray-600 text-xs">Years of excellence</p>
                </div>
              </div>
              <div className="absolute inset-0 border border-[#cc0000]/10" />
              <p className="absolute bottom-4 left-4 text-gray-600 text-xs">Add gym interior photo</p>
            </motion.div>
          </Animate>

          {/* Text */}
          <Animate>
            <motion.span variants={fadeUp} className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#c9a84c]" /> The Predators Story
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-white mb-6">
              Where it all began
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed mb-5">
              In 2009, head coach {headTrainer.name}{" "}converted a warehouse space into what would become one of Manchester&apos;s most respected martial arts gyms. Starting with just a handful of fighters and a single set of mats, Predators MMA was built on sweat, sacrifice, and an unwavering standard of coaching.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed mb-5">
              Over the years we have expanded our programmes to cover MMA, Muay Thai, Boxing, BJJ, Wrestling, and more — welcoming everyone from absolute beginners to professional competitors.
            </motion.p>
            <motion.p variants={fadeUp} className="text-gray-400 leading-relaxed mb-8">
              Our mission has never changed: <span className="text-white font-medium">motivate, instil confidence, and make you physically and mentally stronger</span>. We measure success not just in titles and medals, but in the transformation of every member who walks through our doors.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#cc0000] hover:bg-[#990000] text-white font-bold uppercase tracking-widest text-sm px-7 py-3.5 transition-colors">
                Book a Trial <ChevronRight size={15} />
              </Link>
            </motion.div>
          </Animate>
        </div>
      </section>

      {/* About the Trainer */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          <Animate>
            <motion.div variants={fadeUp} className="relative aspect-[4/5] bg-[#1a1a1a] overflow-hidden flex items-center justify-center">
              <span className="text-8xl font-black text-[#cc0000]/15 select-none">{headTrainer.initials}</span>
              <div className="absolute inset-0 border border-[#cc0000]/10" />
              <p className="absolute bottom-4 left-4 text-gray-600 text-xs">Add coach photo</p>
            </motion.div>
          </Animate>

          <Animate>
            <motion.span variants={fadeUp} className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#c9a84c]" /> About the Trainer
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-white mb-2">
              {headTrainer.name}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[#c9a84c] text-sm font-bold uppercase tracking-widest mb-6">
              {headTrainer.role} · {headTrainer.discipline}
            </motion.p>
            {headTrainer.bio.map((paragraph) => (
              <motion.p key={paragraph.slice(0, 40)} variants={fadeUp} className="text-gray-400 leading-relaxed mb-5">
                {paragraph}
              </motion.p>
            ))}
            <motion.blockquote variants={fadeUp} className="border-l-2 border-[#cc0000] pl-5 mb-8">
              <p className="text-gray-300 italic leading-relaxed">&ldquo;{headTrainer.testimonial}&rdquo;</p>
            </motion.blockquote>
            <motion.div variants={fadeUp}>
              <div className="flex items-center gap-2 mb-4">
                <Trophy size={14} className="text-[#c9a84c]" />
                <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">Achievements</span>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {headTrainer.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-2 text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-[#cc0000] rounded-full mt-2 shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Animate>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#c9a84c]" /> What Drives Us <span className="w-8 h-px bg-[#c9a84c]" />
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white">
              Our Core Values
            </motion.h2>
          </Animate>

          <Animate>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="bg-[#111] border border-white/5 hover:border-[#cc0000]/30 p-8 transition-colors group"
                >
                  <div className="w-12 h-12 border border-[#cc0000]/30 flex items-center justify-center mb-5 group-hover:bg-[#cc0000]/10 transition-colors">
                    <Icon size={20} className="text-[#cc0000]" />
                  </div>
                  <h3 className="text-white font-black text-xl uppercase tracking-wide mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate className="text-center mb-14">
            <motion.span variants={fadeUp} className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#c9a84c]" /> Our Journey <span className="w-8 h-px bg-[#c9a84c]" />
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white">
              Milestones
            </motion.h2>
          </Animate>

          <Animate>
            <div className="relative border-l-2 border-[#cc0000]/20 pl-8 space-y-10">
              {milestones.map((m) => (
                <motion.div key={m.year} variants={fadeUp} className="relative">
                  <div className="absolute -left-[2.7rem] w-5 h-5 border-2 border-[#cc0000] bg-[#0d0d0d] flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#cc0000]" />
                  </div>
                  <div className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-1">{m.year}</div>
                  <p className="text-gray-300 font-medium">{m.event}</p>
                </motion.div>
              ))}
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
}
