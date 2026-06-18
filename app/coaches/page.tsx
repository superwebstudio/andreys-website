"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star } from "lucide-react";
import { headTrainer } from "@/lib/gym-data";

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

const coaches = [
  {
    name: headTrainer.name,
    role: headTrainer.role,
    discipline: headTrainer.discipline,
    initials: headTrainer.initials,
    color: "from-[#cc0000]/20 to-[#1a0000]",
    bio: headTrainer.bio[0] + " " + headTrainer.bio[1],
    achievements: headTrainer.achievements,
  },
  {
    name: "Sofia Reyes",
    role: "BJJ & Grappling Coach",
    discipline: "BJJ · No-Gi · Wrestling",
    initials: "SR",
    color: "from-[#c9a84c]/20 to-[#1a1500]",
    bio: "A BJJ black belt under the Gracie lineage, Sofia is one of the most technically precise coaches in the UK. Her calm, methodical teaching style makes complex techniques accessible to students at every level.",
    achievements: [
      "BJJ Black Belt — 8 years",
      "National champion 2019, 2020, 2021, 2022",
      "European bronze medallist",
      "Women's programme founder",
    ],
  },
  {
    name: "Danny Okafor",
    role: "Boxing & S&C Coach",
    discipline: "Boxing · Kickboxing · Conditioning",
    initials: "DO",
    color: "from-white/5 to-[#111]",
    bio: "An amateur boxing champion turned strength & conditioning specialist, Danny brings explosive energy to every session. His combination classes blend sharp technical boxing with elite athletic performance training.",
    achievements: [
      "ABA Amateur Boxing Champion",
      "BSc Sports Science",
      "Certified S&C Coach (NSCA)",
      "10+ years professional coaching",
    ],
  },
  {
    name: "Yuki Tanaka",
    role: "Muay Thai Coach",
    discipline: "Muay Thai · Kickboxing",
    initials: "YT",
    color: "from-[#cc0000]/10 to-[#110000]",
    bio: "Trained in Thailand for 5 years under Kru-level coaches, Yuki brings authentic Muay Thai techniques to Manchester. His clinch work and timing drills are legendary in the gym.",
    achievements: [
      "Trained at Sitsongpeenong gym, Bangkok",
      "Thailand national Muay Thai competition veteran",
      "UKMF licensed coach",
      "Specialises in southpaw counter-attacking",
    ],
  },
  {
    name: "Kezia Brown",
    role: "Women's Programme Coach",
    discipline: "MMA · Self-Defence · Boxing",
    initials: "KB",
    color: "from-[#c9a84c]/10 to-[#111300]",
    bio: "Kezia leads our hugely popular women's programme, creating a confident and empowering environment for female members. She holds coaching qualifications in boxing, BJJ, and self-defence.",
    achievements: [
      "BCUK Qualified Boxing Coach",
      "BJJ Purple Belt",
      "Women's self-defence specialist",
      "Grew women's class from 4 to 60+ members",
    ],
  },
  {
    name: "Leo Santos",
    role: "Kids & Youth Coach",
    discipline: "MMA · Kids Kickboxing · Discipline",
    initials: "LS",
    color: "from-purple-900/20 to-[#110011]",
    bio: "Leo combines his background in youth sports coaching with a genuine passion for martial arts. His sessions are high-energy, safe, and fun — building confidence and character in young athletes.",
    achievements: [
      "Youth sports coaching degree",
      "DBS cleared",
      "BJJ Blue Belt",
      "Runs 4 youth sessions per week",
    ],
  },
];

export default function CoachesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(204,0,0,0.08),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Animate>
            <motion.span variants={fadeUp} className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#c9a84c]" /> Our Team
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl sm:text-6xl font-black text-white mb-4">
              Coaches &amp; Fighters
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-xl">
              World-class athletes turned passionate instructors. Learn from those who have lived it.
            </motion.p>
          </Animate>
        </div>
      </section>

      {/* Coaches grid */}
      <section className="py-20 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coaches.map((coach) => (
                <motion.div
                  key={coach.name}
                  variants={fadeUp}
                  className="bg-[#111] border border-white/5 hover:border-[#cc0000]/20 overflow-hidden transition-colors group"
                >
                  {/* Photo placeholder */}
                  <div className={`aspect-[4/3] bg-gradient-to-b ${coach.color} relative overflow-hidden flex items-center justify-center`}>
                    <span className="text-7xl font-black text-white/10 select-none">{coach.initials}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                    <p className="absolute bottom-3 left-3 text-gray-600 text-[10px]">Add photo here</p>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-1">{coach.role}</div>
                    <h2 className="text-white font-black text-xl mb-1">{coach.name}</h2>
                    <div className="flex items-center gap-1.5 mb-4">
                      <Star size={10} className="text-[#cc0000]" fill="#cc0000" />
                      <span className="text-gray-500 text-xs">{coach.discipline}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">{coach.bio}</p>

                    {/* Achievements */}
                    <div className="border-t border-white/5 pt-5">
                      <div className="flex items-center gap-2 mb-3">
                        <Trophy size={12} className="text-[#c9a84c]" />
                        <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest">Achievements</span>
                      </div>
                      <ul className="space-y-1.5">
                        {coach.achievements.map((a) => (
                          <li key={a} className="flex items-start gap-2 text-xs text-gray-500">
                            <span className="w-1 h-1 bg-[#cc0000] rounded-full mt-1.5 shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* Fighter programme CTA */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Animate>
            <motion.span variants={fadeUp} className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-px bg-[#c9a84c]" /> Compete <span className="w-8 h-px bg-[#c9a84c]" />
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-4xl sm:text-5xl font-black text-white mb-4">
              Want to Compete?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Our fighter programme is for members serious about competing. Speak to {headTrainer.name} about entering the programme.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href="/contact" className="inline-flex items-center gap-2 bg-[#cc0000] hover:bg-[#990000] text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-colors">
                Get in Touch
              </a>
            </motion.div>
          </Animate>
        </div>
      </section>
    </>
  );
}
