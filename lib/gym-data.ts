export type ClassLevel = "All" | "Beginner" | "Intermediate" | "Advanced" | "Kids";

export type ClassEntry = {
  time: string;
  name: string;
  level: ClassLevel;
};

export type DaySchedule = {
  day: string;
  short: string;
  classes: ClassEntry[];
};

export const schedule: DaySchedule[] = [
  {
    day: "Monday",
    short: "Mon",
    classes: [
      { time: "5:30 PM", name: "K-1 & Muay Thai — drills & techniques", level: "All" },
      { time: "6:30 PM", name: "Thai pads", level: "All" },
    ],
  },
  {
    day: "Tuesday",
    short: "Tue",
    classes: [{ time: "6:00 PM", name: "Sparring & grappling", level: "Intermediate" }],
  },
  {
    day: "Wednesday",
    short: "Wed",
    classes: [
      { time: "5:00 PM", name: "Kids MMA & Boxing", level: "Kids" },
      { time: "6:00 PM", name: "K-1 & Muay Thai — drills & techniques", level: "All" },
      { time: "7:00 PM", name: "Thai pads", level: "All" },
      { time: "8:00 PM", name: "Boxing", level: "All" },
    ],
  },
  {
    day: "Thursday",
    short: "Thu",
    classes: [{ time: "6:00 PM", name: "Sparring & grappling", level: "Intermediate" }],
  },
  {
    day: "Friday",
    short: "Fri",
    classes: [
      { time: "6:00 PM", name: "K-1 & Muay Thai — drills & techniques", level: "All" },
      { time: "7:00 PM", name: "Thai pads", level: "All" },
      { time: "8:00 PM", name: "Boxing", level: "All" },
    ],
  },
  {
    day: "Saturday",
    short: "Sat",
    classes: [
      { time: "10:00 AM", name: "Sparring & bag work", level: "All" },
      { time: "12:15 PM", name: "Kids MMA & Boxing", level: "Kids" },
    ],
  },
  {
    day: "Sunday",
    short: "Sun",
    classes: [],
  },
];

export const membershipPlans = [
  {
    name: "Monthly",
    tagline: "Unlimited access to all group classes",
    price: "£60",
    period: "/month",
    color: "border-[#cc0000]",
    accentColor: "text-[#cc0000]",
    highlight: true,
    cta: "Join Monthly",
    features: [
      "Unlimited group classes",
      "All disciplines on the timetable",
      "K-1, Muay Thai, boxing & grappling",
      "Kids classes (separate booking)",
      "No long-term contract",
    ],
  },
  {
    name: "Per Session",
    tagline: "Pay as you go — no commitment",
    price: "£10",
    period: "/session",
    color: "border-white/10",
    accentColor: "text-white",
    highlight: false,
    cta: "Book a Session",
    features: [
      "Drop in to any group class",
      "Perfect for trying us out",
      "Pay on the day",
      "Same timetable as members",
      "Upgrade to monthly anytime",
    ],
  },
];

export const privateSessions = [
  { people: 1, duration: "45 min", price: "£40" },
  { people: 2, duration: "45 min", price: "£50" },
  { people: 3, duration: "60 min", price: "£55" },
  { people: 4, duration: "60 min", price: "£60" },
];

export const headTrainer = {
  name: "Andy Manzolo",
  role: "Head Coach",
  discipline: "Muay Thai · MMA · K-1",
  initials: "AM",
  bio: [
    "Coach Andy Manzolo is one of the most experienced and accomplished Muay Thai and MMA coaches. A multiple-time world champion, Andy has won prestigious titles in ISKA Muay Thai, Dynamite K-1, PFN, Freon, and Fusion Fighting Championships. He has also competed on some of the biggest stages in combat sports, including Bellator, Glory, and Cage Warriors.",
    "With a professional MMA record of over 28 wins and numerous victories by submission and knockout, plus 63 Muay Thai and K-1 victories, Andy brings real-world elite-level experience into every training session. His technical knowledge, attention to detail, and ability to develop fighters of all levels are second to none.",
    "Andy creates a positive and motivating training environment where athletes of all levels feel welcome and supported. Whether you're a complete beginner looking to build confidence or an experienced fighter aiming to sharpen your skills, he adapts his coaching to help you reach your goals. His knowledge of striking, technique, and fight strategy is outstanding, and he has a great ability to break down complex movements into easy-to-understand steps.",
    "What sets Andy apart is his passion for the sport, attention to detail, and genuine commitment to his students' progress. Every session is challenging, engaging, and focused on continuous improvement — demanding but supportive, pushing you to achieve more than you thought possible.",
    "Whether you're training for competition, fitness, self-defence, or personal confidence, Coach Andy creates a motivating and professional environment where everyone feels welcome. His achievements in the ring and cage speak for themselves, but it's his commitment to his students' success that makes him truly exceptional.",
  ],
  testimonial:
    "I highly recommend Coach Andy Manzolo to anyone interested in Muay Thai, MMA, fitness, or self-defence training.",
  achievements: [
    "Multiple-time world champion",
    "ISKA Muay Thai champion",
    "Dynamite K-1 champion",
    "PFN, Freon & Fusion Fighting Championships titles",
    "Competed on Bellator, Glory & Cage Warriors",
    "Professional MMA record: 28+ wins",
    "63 Muay Thai & K-1 victories",
  ],
};

export const levelColors: Record<ClassLevel, string> = {
  All: "bg-white/10 text-gray-300",
  Beginner: "bg-emerald-900/40 text-emerald-400",
  Intermediate: "bg-blue-900/40 text-blue-400",
  Advanced: "bg-[#cc0000]/20 text-[#ff6666]",
  Kids: "bg-purple-900/40 text-purple-400",
};
