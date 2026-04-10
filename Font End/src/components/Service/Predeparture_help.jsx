import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import {
  PlaneTakeoff, Globe, ChevronRight, FileText, Users, GraduationCap,
  Smile, Wallet, ShieldCheck, BadgeCheck, CheckCircle2,
  ArrowRight, Sparkles, Heart, Star, Shield, TrendingUp, CheckCircle,
  Coffee, Award, Send, MapPin, Plus, Minus
} from "lucide-react";

/* ── tiny helpers ─────────────────────────────────────── */
function Tag({ children, warm }) {
  return (
    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider
      ${warm
        ? "bg-amber-50 text-amber-600 border border-amber-100"
        : "bg-blue-50 text-blue-500 border border-blue-100"}`}>
      {children}
    </span>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold
      bg-white border border-slate-200 text-slate-500 shadow-sm">
      {children}
    </span>
  );
}

/* ── Accordion FAQ ────────────────────────────────────── */
function FaqItem({ faq, i }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border-b border-slate-100 last:border-0"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ delay: i * 0.07 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`text-sm md:text-base font-bold popins pr-6 transition-colors
          ${open ? "text-blue-500" : "text-slate-800 group-hover:text-blue-400"}`}>
          {faq.q}
        </span>
        <motion.div
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-colors
            ${open ? "bg-blue-500 border-blue-500" : "bg-white border-slate-200"}`}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <Plus className={`w-3.5 h-3.5 ${open ? "text-white" : "text-slate-400"}`} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-500 inter text-sm leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN
═══════════════════════════════════════════════════════ */
export default function PredepartureHelp() {
  const vp = { once: false, amount: 0.12 };
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  /* ── data ──────────────────────────────────────────── */
  const steps = [
    {
      n: "01", warm: false,
      title: "Comprehensive Briefing",
      desc: "Detailed sessions covering academic expectations, classroom culture, local laws, and social etiquette — giving you a genuine head-start.",
      icon: <FileText className="w-5 h-5" />,
      tags: ["Academic Rules", "Cultural Norms", "Local Laws"],
    },
    {
      n: "02", warm: true,
      title: "Interactive Seminars",
      desc: "Workshops designed as networking launchpads. Connect with future peers and absorb first-hand advice from alumni who've done it before you.",
      icon: <Users className="w-5 h-5" />,
      tags: ["Networking", "Alumni Advice", "Workshops"],
    },
    {
      n: "03", warm: false,
      title: "Cultural Adaptation",
      desc: "Practical strategies for managing culture shock, navigating social norms, and building a comfortable life in your new country from day one.",
      icon: <Globe className="w-5 h-5" />,
      tags: ["Lifestyle", "Etiquette", "Social Norms"],
    },
    {
      n: "04", warm: true,
      title: "Travel & Logistics",
      desc: "Flight advice, airport arrival plans, and public transport guides for your destination — so nothing catches you off guard on arrival day.",
      icon: <PlaneTakeoff className="w-5 h-5" />,
      tags: ["Flight Booking", "Public Transport", "Arrival"],
    },
    {
      n: "05", warm: false,
      title: "Safety & Health",
      desc: "Insurance guidance, emergency contact setup, and local healthcare orientation so you feel safe and covered from the moment you land.",
      icon: <ShieldCheck className="w-5 h-5" />,
      tags: ["Insurance", "Healthcare", "Emergency"],
    },
    {
      n: "06", warm: true,
      title: "Financial Planning",
      desc: "Budgeting frameworks, international banking setup, and cost-of-living breakdowns by city — so your money works as hard as you do.",
      icon: <Wallet className="w-5 h-5" />,
      tags: ["Budgeting", "Banking", "Cost of Living"],
    },
  ];

  const reasons = [
    { icon: <BadgeCheck className="w-5 h-5" />, warm: true, title: "Leading Agency in BD", desc: "Recognised as Bangladesh's top education consultancy — our track record of student success speaks louder than any award." },
    { icon: <Users className="w-5 h-5" />, warm: false, title: "Interactive Support", desc: "Seminars and workshops that build real communities — not just slide decks. You leave knowing people, not just facts." },
    { icon: <ShieldCheck className="w-5 h-5" />, warm: true, title: "Safety First", desc: "Every student leaves with a personalised safety plan: insurance, emergency contacts, and local healthcare mapped out before departure." },
    { icon: <Smile className="w-5 h-5" />, warm: false, title: "Emotional Support", desc: "Our counselors are reachable throughout your journey — tackling homesickness, anxiety, and transition stress with real empathy." },
  ];

  const checklist = [
    "Student Assessment & Profile Building",
    "Personalised Guideline & Counselling",
    "Scholarship Management & Applications",
    "End-to-end Admission Support",
    "Expert Guideline to Visa Process",
    "Finance & Travel Assistance",
    "Comprehensive Pre-Departure Orientation",
  ];

  const support = [
    { icon: <GraduationCap className="w-5 h-5" />, warm: false, title: "Academic Preparation", desc: "Familiarise yourself with the educational system, study techniques, and communication norms of your host country before you arrive." },
    { icon: <PlaneTakeoff className="w-5 h-5" />, warm: true, title: "Travel Assistance", desc: "Flight coordination, airport pickup logistics, and city orientation guides for a genuinely stress-free first week." },
    { icon: <Wallet className="w-5 h-5" />, warm: false, title: "Banking & Finance", desc: "Opening overseas bank accounts, managing international transfers, and building a realistic monthly budget — step by step." },
    { icon: <Heart className="w-5 h-5" />, warm: true, title: "Ongoing Mentorship", desc: "We stay with you after departure — checking in, answering questions, and ensuring you settle in with confidence." },
  ];

  const faqs = [
    { q: "What is covered in the pre-departure briefing?", a: "Everything from academic expectations and classroom culture to local laws, social etiquette, and practical daily-life tips. We also provide a comprehensive packing list and guide you through what to expect at the airport and on arrival." },
    { q: "When should I attend the orientation session?", a: "We recommend attending at least 2–4 weeks before your departure date. This gives you enough time to process the information and make any necessary final preparations based on our advice." },
    { q: "Will I meet other students going to the same country?", a: "Yes — our interactive seminars are designed specifically to help students connect with future peers going to the same destination. It's a great way to build your support network before you even leave Bangladesh." },
    { q: "Do you help with airport pickup and accommodation?", a: "We coordinate with universities and partner organisations to ensure you have a concrete plan for airport pickup and safe accommodation when you arrive — even if we're not always providing these services directly." },
  ];

  const stats = [
    { val: "100%", label: "Briefing quality", warm: true },
    { val: "1,200+", label: "Students guided", warm: false },
    { val: "30+", label: "Countries covered", warm: true },
    { val: "8+ Yrs", label: "Consulting exp.", warm: false },
  ];

  return (
    <div className="w-full flex flex-col overflow-x-hidden pt-20 bg-white">

      {/* ══ HERO — light background ══════════════════════════ */}
      <section ref={heroRef} className="relative w-full min-h-[88vh] flex items-end overflow-hidden bg-slate-50">

        {/* subtle blue grid pattern */}
        <div className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage: "linear-gradient(rgba(96,165,250,0.07) 1px, transparent 1px), linear-gradient(90deg,rgba(96,165,250,0.07) 1px,transparent 1px)",
            backgroundSize: "56px 56px"
          }} />

        {/* blue accent blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-20 left-0 w-[360px] h-[360px] rounded-full bg-orange-400/8 blur-3xl pointer-events-none z-0" />

        {/* parallax image — right side only */}
        <motion.div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 z-0" style={{ y: imgY }}>
          <img src="/departure_help.webp" alt="Pre-departure" className="w-full h-full object-cover opacity-20 lg:opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/60 to-slate-50/10 lg:from-slate-50 lg:via-slate-50/40 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
        </motion.div>

        {/* floating label top-left */}
        <motion.div
          className="absolute top-10 left-6 md:left-12 z-20"
          initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
        >
          <Link to="/service">
            <span className="inline-flex items-center gap-2 text-slate-500 text-[11px] font-bold uppercase tracking-widest hover:text-blue-500 transition-colors">
              Services <ChevronRight className="w-3 h-3" /> Pre-departure Help
            </span>
          </Link>
        </motion.div>

        {/* floating stat chips top-right */}
        <motion.div
          className="absolute top-10 right-6 md:right-12 z-20 flex flex-col gap-2 items-end"
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
        >
          {[{ v: "1,200+", l: "Students" }, { v: "30+", l: "Countries" }].map((s, i) => (
            <div key={i} className="bg-white border border-blue-100 shadow-sm rounded-2xl px-4 py-2 text-right">
              <div className="text-blue-500 font-black text-base popins leading-none">{s.v}</div>
              <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{s.l}</div>
            </div>
          ))}
        </motion.div>

        {/* hero content — pinned to bottom */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* overline */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-blue-400" />
              <span className="text-blue-500 text-xs font-black uppercase tracking-[0.2em]">Pre-departure Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black popins text-slate-900 leading-[0.92] mb-6 max-w-4xl">
              Ensuring a<br />
              <span className="text-orange-500">Smooth</span><br />
              <span className="text-blue-400">Transition</span> Abroad
            </h1>

            <p className="text-slate-600 inter text-base md:text-lg max-w-xl leading-relaxed mb-10">
              Expert briefings and interactive seminars covering everything from cultural adaptation to travel logistics — equipping you with the confidence to thrive in your new environment.
            </p>

            {/* blue accent pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Cultural Adaptation", "Travel Logistics", "Financial Prep", "Safety Plans"].map((t, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-blue-50 border border-blue-200 text-blue-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link to="/contact">
                <motion.button
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-orange-500 hover:bg-orange-400 text-white rounded-2xl font-bold text-sm inter transition-colors"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                >
                  Book an Orientation <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link to="/service">
                <motion.button
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white hover:bg-blue-50 border border-blue-200 text-slate-700 hover:text-blue-500 rounded-2xl font-bold text-sm inter transition-colors"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                >
                  All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* bottom stat bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-20 bg-white border-t border-blue-100 shadow-sm"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 divide-x divide-blue-100">
            {stats.map((s, i) => (
              <div key={i} className="px-6 py-4 text-center">
                <div className={`text-xl font-black popins ${s.warm ? "text-orange-500" : "text-blue-400"}`}>{s.val}</div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ══ INTRO STRIP ══════════════════════════════════════ */}
      <section className="w-full py-16 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          <motion.div className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue-400" />
              <span className="text-blue-500 text-[11px] font-black uppercase tracking-[0.2em]">Our Promise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black popins text-slate-900 leading-tight mb-0">
              More than a checklist.<br />
              <span className="text-slate-400 font-normal">A genuine head-start.</span>
            </h2>
          </motion.div>
          <motion.div className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ delay: 0.1 }}>
            <p className="text-slate-600 inter text-base leading-relaxed mb-5">
              At Sunrise Education Consultants, we understand that leaving home is a significant step. Our pre-departure services are designed to ensure you are fully prepared — not just for paperwork, but for life.
            </p>
            <p className="text-slate-500 inter text-sm leading-relaxed mb-6">
              As Bangladesh's leading education consultancy, we've guided over 1,200 students through this transition. Every session we run is built on real experience — not generic advice.
            </p>
            {/* blue accent stripe */}
            <div className="flex gap-3">
              <div className="h-1 w-16 rounded-full bg-blue-400" />
              <div className="h-1 w-8 rounded-full bg-blue-200" />
              <div className="h-1 w-4 rounded-full bg-blue-100" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ 6-STEP PREPARATION ═══════════════════════════════ */}
      <section className="w-full py-16 md:py-24 bg-[#f8f7f4] px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <motion.div className="mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue-400" />
              <span className="text-blue-500 text-[11px] font-black uppercase tracking-[0.2em]">Six Components</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black popins text-slate-900 leading-tight">
              Key Preparation<br />Components
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="group bg-white rounded-3xl p-7 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.07 }}
                whileHover={{ y: -5 }}
              >
                {/* blue top accent on hover */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100
                  ${s.warm ? "bg-orange-400" : "bg-blue-400"}`} />

                {/* big step number watermark */}
                <div className="absolute -bottom-3 -right-2 text-[80px] font-black text-slate-50 select-none leading-none pointer-events-none">
                  {s.n}
                </div>

                {/* step number pill */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-2.5 py-1 rounded-full
                    ${s.warm ? "bg-amber-50 text-amber-500 border border-amber-100" : "bg-blue-50 text-blue-500 border border-blue-100"}`}>
                    Step {s.n}
                  </span>
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors duration-300
                    ${s.warm
                      ? "bg-amber-50 text-amber-500 group-hover:bg-amber-500 group-hover:text-white"
                      : "bg-blue-50 text-blue-400 group-hover:bg-blue-400 group-hover:text-white"}`}>
                    {s.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 popins mb-3">{s.title}</h3>
                <p className="text-slate-500 inter text-sm leading-relaxed mb-5">{s.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t, ti) => <Tag key={ti} warm={s.warm}>{t}</Tag>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY SUNRISE — alternating feature rows ════════════ */}
      <section className="w-full py-16 md:py-24 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          <motion.div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-blue-400" />
                <span className="text-blue-500 text-[11px] font-black uppercase tracking-[0.2em]">Why Sunrise</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black popins text-slate-900 leading-tight">
                What sets us<br />apart
              </h2>
            </div>
            <p className="text-slate-500 inter text-base max-w-md leading-relaxed">
              We don't just process your application. We prepare you — academically, emotionally, and practically — for everything that comes next.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                className="group relative rounded-3xl p-8 border border-slate-100 hover:border-blue-200 overflow-hidden transition-all duration-300 bg-white hover:shadow-md"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.09 }}
                whileHover={{ y: -4 }}
              >
                {/* accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 rounded-t-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100
                  ${r.warm ? "bg-amber-400" : "bg-blue-400"}`} />

                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-5
                  ${r.warm ? "bg-amber-50 text-amber-500" : "bg-blue-50 text-blue-400"}`}>
                  {r.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 popins mb-2">{r.title}</h3>
                <p className="text-slate-500 inter text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ HOW WE SUPPORT YOU — light blue bg ══════════════ */}
      <section className="w-full py-16 md:py-24 bg-blue-50 px-6 md:px-12 relative overflow-hidden">
        {/* subtle blue dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(96,165,250,0.18) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }} />

        {/* decorative blue accent arc */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full border-[40px] border-blue-200/50 pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full border-[30px] border-blue-200/40 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* left — checklist */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-blue-400" />
                <span className="text-blue-500 text-[11px] font-black uppercase tracking-[0.2em]">Full Scope</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black popins text-slate-900 leading-tight mb-5">
                Standard Services to<br />
                <span className="text-blue-400">Keep You Ahead</span>
              </h2>
              <p className="text-slate-600 inter text-base leading-relaxed mb-10">
                From your first assessment to the moment you step off the plane at your destination — our team is dedicated to easing every part of preparing for your studies abroad.
              </p>

              <div className="flex flex-col gap-3">
                {checklist.map((item, i) => (
                  <motion.div key={i}
                    className="flex items-center gap-4 py-3 border-b border-blue-100 last:border-0 group"
                    initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={vp} transition={{ delay: 0.3 + i * 0.07 }}>
                    <div className="w-6 h-6 rounded-full bg-blue-400/20 flex items-center justify-center shrink-0 group-hover:bg-blue-400 transition-colors duration-300">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-500 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-slate-700 inter text-sm font-medium group-hover:text-blue-600 transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* right — support cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.7, delay: 0.15 }}>
              {support.map((s, i) => (
                <motion.div key={i}
                  className="bg-white border border-blue-100 rounded-3xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -4 }}>
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center mb-4
                    ${s.warm ? "bg-amber-50 text-amber-500" : "bg-blue-100 text-blue-500"}`}>
                    {s.icon}
                  </div>
                  <h4 className="font-bold text-slate-900 popins text-sm mb-2">{s.title}</h4>
                  <p className="text-slate-500 inter text-xs leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══ FAQs ═════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            {/* left sticky label */}
            <motion.div className="lg:col-span-2 lg:sticky lg:top-28"
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-blue-400" />
                <span className="text-blue-500 text-[11px] font-black uppercase tracking-[0.2em]">FAQs</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black popins text-slate-900 leading-tight mb-5">
                Common<br />Questions
              </h2>
              <p className="text-slate-500 inter text-sm leading-relaxed mb-8">
                Everything students ask us before attending their first orientation session.
              </p>
              {/* blue decorative element */}
              <div className="flex gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <div className="w-2 h-2 rounded-full bg-blue-300" />
                <div className="w-2 h-2 rounded-full bg-blue-200" />
              </div>
              <Link to="/contact">
                <motion.button
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-2xl font-bold text-sm inter hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  Ask a Question <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>

            {/* right accordion */}
            <div className="lg:col-span-3 divide-y divide-slate-100 border-t border-blue-100">
              {faqs.map((faq, i) => <FaqItem key={i} faq={faq} i={i} />)}
            </div>

          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════ */}
      <section className="w-full py-20 md:py-28 bg-[#f8f7f4] px-6 md:px-12 relative overflow-hidden">
        {/* decorative shapes — blue accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute -top-16 -right-16 w-72 h-72 rounded-full border border-blue-200"
            animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />
          <motion.div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border border-orange-100"
            animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} />
          <motion.div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full border border-blue-100"
            animate={{ rotate: 360, scale: [1, 1.05, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} />
          <motion.div className="absolute top-8 left-1/2 w-2 h-2 bg-blue-400 rounded-full"
            animate={{ y: [0, 12, 0], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.div className="absolute bottom-12 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full"
            animate={{ y: [0, -10, 0], opacity: [0.4, 1, 0.4] }} transition={{ duration: 2.5, repeat: Infinity, delay: 1 }} />
        </div>

        <motion.div className="max-w-3xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.8 }}>

          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 text-blue-500 text-[11px] font-black uppercase tracking-[0.15em] rounded-full shadow-sm">
              <Star className="w-3 h-3 text-blue-400" /> Start Your Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black popins text-slate-900 leading-[0.95] mb-6">
            Ready for a<br />
            Successful<br />
            <span className="text-orange-400">Future Abroad?</span>
          </h2>

          <p className="text-slate-500 inter text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Let Sunrise Education Consultants be your guiding light. Our team is ready to provide the comprehensive support you need for every stage of your journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-base inter hover:bg-orange-500 transition-colors duration-300"
                whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }}>
                <Send className="w-4 h-4" />
                Contact Us Now
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
            <Link to="/service">
              <motion.button
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white border-2 border-blue-200 text-blue-500 rounded-2xl font-bold text-base inter hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }}>
                <Globe className="w-4 h-4" /> All Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}