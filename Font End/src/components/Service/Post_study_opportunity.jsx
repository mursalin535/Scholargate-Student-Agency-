import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  Briefcase, Globe, Users, TrendingUp, ChevronRight, GraduationCap,
  Star, ArrowRight, Send, CheckCircle, Sparkles,
  BookOpen, Clock, Shield, Award, Heart, Zap, Target, Compass,
  MapPin, Calendar, FileText, MessageCircle, Rocket, Coffee
} from "lucide-react";

/* ─── Floating ambient orb ─────────────────────────────── */
function Orb({ className, size = 320, color = "blue", delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        width: size, height: size,
        background: color === "blue"
          ? "radial-gradient(circle, rgba(96,165,250,0.18) 0%, transparent 70%)"
          : "radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%)",
      }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 7 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

/* ─── Animated counter ─────────────────────────────────── */
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const num = parseInt(target.toString().replace(/\D/g, ""));
    const step = Math.ceil(num / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  const display = typeof target === "string" && isNaN(parseInt(target)) ? target : count + suffix;
  return <span ref={ref}>{display}</span>;
}

/* ─── Tilt service card ────────────────────────────────── */
function TiltCard({ item, i }) {
  const ref = useRef(null);
  const rX = useMotionValue(0);
  const rY = useMotionValue(0);
  const srX = useSpring(rX, { stiffness: 200, damping: 22 });
  const srY = useSpring(rY, { stiffness: 200, damping: 22 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current.getBoundingClientRect();
        rY.set(((e.clientX - rect.left - rect.width / 2) / rect.width) * 12);
        rX.set(-((e.clientY - rect.top - rect.height / 2) / rect.height) * 12);
      }}
      onMouseLeave={() => { rX.set(0); rY.set(0); }}
      style={{ rotateX: srX, rotateY: srY, transformPerspective: 800 }}
      className={`group relative bg-white rounded-3xl p-7 border-2 ${item.accent === "blue" ? "border-blue-100 hover:border-blue-300" : "border-orange-100 hover:border-orange-300"} shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-default`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ delay: i * 0.09, duration: 0.55 }}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
        style={{
          background: item.accent === "blue"
            ? "radial-gradient(ellipse at 65% 15%, rgba(96,165,250,0.09) 0%, transparent 60%)"
            : "radial-gradient(ellipse at 65% 15%, rgba(251,146,60,0.08) 0%, transparent 60%)"
        }}
      />
      <div className={`absolute -top-2 -right-1 text-7xl font-black select-none leading-none ${item.accent === "blue" ? "text-blue-50" : "text-orange-50"}`}>
        {item.number}
      </div>
      <motion.div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${item.accent === "blue" ? "bg-blue-50 text-blue-400" : "bg-orange-50 text-orange-400"}`}
        whileHover={{ scale: 1.18, rotate: [0, -8, 8, 0] }}
        transition={{ duration: 0.4 }}
      >
        {item.icon}
      </motion.div>
      <h3 className="text-lg font-bold text-slate-800 popins mb-3 relative z-10">{item.title}</h3>
      <p className="text-slate-500 inter text-sm leading-relaxed mb-5 relative z-10">{item.desc}</p>
      <div className="flex flex-wrap gap-2 relative z-10">
        {item.tags.map((t, ti) => (
          <motion.span
            key={ti}
            className={`px-3 py-1 rounded-full text-[10px] font-bold ${item.accent === "blue" ? "bg-blue-50 text-blue-500" : "bg-orange-50 text-orange-500"}`}
            whileHover={{ scale: 1.1 }}
          >
            {t}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Accordion FAQ ────────────────────────────────────── */
function Faq({ faq, i }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border border-slate-100 rounded-2xl overflow-hidden bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ delay: i * 0.07 }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-3">
          <motion.div
            className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
            animate={{ backgroundColor: open ? "#3b82f6" : "#eff6ff" }}
          >
            <span className={`text-xs font-black transition-colors ${open ? "text-white" : "text-blue-400"}`}>Q</span>
          </motion.div>
          <span className={`text-sm md:text-base font-bold popins transition-colors ${open ? "text-blue-500" : "text-slate-800"}`}>
            {faq.q}
          </span>
        </div>
        <motion.div animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }}>
          <span className="text-slate-400 text-xl font-light">+</span>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="px-6 pb-5 pl-16 text-slate-500 inter text-sm leading-relaxed border-t border-slate-50 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN
═══════════════════════════════════════════════════════════ */
export default function PostStudyOpportunity() {
  const vp = { once: false, amount: 0.12 };
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const stats = [
    { val: "97", suffix: "%", label: "Employment Rate", icon: <Briefcase className="w-5 h-5" />, blue: true },
    { val: "25", suffix: "%", label: "Higher Starting Salary", icon: <TrendingUp className="w-5 h-5" />, blue: false },
    { val: "10", suffix: "+", label: "Top Destinations", icon: <Globe className="w-5 h-5" />, blue: true },
    { val: "Free", suffix: "", label: "Career Consultation", icon: <Star className="w-5 h-5" />, blue: false },
  ];

  const services = [
    {
      number: "01", accent: "blue",
      title: "Work Visa Guidance",
      desc: "We walk you through post-study work permits in Australia, UK, US, Canada, and Germany — timelines, requirements, and application steps fully covered.",
      icon: <Shield className="w-6 h-6" />,
      tags: ["OPT / STEM", "PGWP", "Graduate Visa", "PSW"],
    },
    {
      number: "02", accent: "orange",
      title: "Global Job Market Insights",
      desc: "Access curated industry breakdowns, in-demand sectors, and salary benchmarks for your destination city — data-driven decisions for your next career move.",
      icon: <TrendingUp className="w-6 h-6" />,
      tags: ["Salary Data", "Industry Trends", "In-Demand Roles"],
    },
    {
      number: "03", accent: "blue",
      title: "Alumni & Recruiter Network",
      desc: "Tap into our active alumni network across 30+ countries. Warm introductions to international recruiters, referrals, and insider job board access.",
      icon: <Users className="w-6 h-6" />,
      tags: ["30+ Countries", "Recruiter Intros", "Job Boards"],
    },
    {
      number: "04", accent: "orange",
      title: "Traineeships & Internships",
      desc: "Combine your study period with a practical traineeship. We connect you with vetted programs across North America, Europe, and Asia in your field.",
      icon: <BookOpen className="w-6 h-6" />,
      tags: ["North America", "Europe", "Asia", "Practical XP"],
    },
    {
      number: "05", accent: "blue",
      title: "Postgraduate Pathways",
      desc: "Not ready for the workforce? We guide you through Masters and PhD applications, Erasmus+ grants, and scholarship integration for further study.",
      icon: <GraduationCap className="w-6 h-6" />,
      tags: ["Masters", "PhD", "Erasmus+", "Scholarships"],
    },
    {
      number: "06", accent: "orange",
      title: "Resume & LinkedIn Overhaul",
      desc: "International employers read CVs differently. Our team tailors your resume and LinkedIn for global audiences — action verbs, quantified wins, global framing.",
      icon: <Target className="w-6 h-6" />,
      tags: ["Global CV", "LinkedIn", "Personal Brand"],
    },
  ];

  const pathways = [
    { icon: <Briefcase className="w-5 h-5 text-blue-400" />, title: "Enter the Workforce", desc: "Leverage your degree for local or multinational roles. Define your industry, role-type, and start applying 3–4 months before graduation." },
    { icon: <GraduationCap className="w-5 h-5 text-orange-400" />, title: "Continue Studying", desc: "Masters, PhD, or specialist diplomas. Cultural immersion, unique courses, language learning, and grants like Erasmus+ make this an enriching next step." },
    { icon: <Globe className="w-5 h-5 text-blue-400" />, title: "Volunteer Abroad", desc: "IVHQ and Volunteering Solutions offer 40+ destinations from $20/day. Education, health, wildlife, community development — earn academic credit too." },
    { icon: <Compass className="w-5 h-5 text-orange-400" />, title: "Build Your Network", desc: "Engage your university's alumni office, professors, and LinkedIn communities. Personalize outreach, add value first, and watch doors open globally." },
  ];

  const faqs = [
    { q: "Which countries offer the most job opportunities for international students?", a: "The top countries are the United States, Canada, Germany, Australia, New Zealand, the United Kingdom, Singapore, and Japan. Each combines a strong graduate job market with favourable post-study work permit policies." },
    { q: "Which countries are ideal for permanent residency (PR) after studies?", a: "Ireland, Denmark, Italy, the Netherlands, Canada, the UK, the USA, and Finland are highly favoured. Their welcoming immigration policies and cultural richness make them ideal for students aiming for permanent residency post-graduation." },
    { q: "Which countries offer the most generous post-study work visas?", a: "Australia stands out — offering Hong Kong passport holders up to 5 years under its skilled visa program. The UK's 2–3 year Graduate Route and the US OPT with its 24-month STEM extension are also among the most generous globally." },
    { q: "What is the average starting salary boost from studying abroad?", a: "International students report a 25% higher starting salary on average compared to their domestic-only peers. The combination of language skills, cultural agility, and global networks makes graduates highly attractive to multinationals." },
    { q: "What are the best countries for postgraduate studies?", a: "The USA, UK, Canada, Australia, Germany, France, and Ireland consistently rank highest for postgraduate programs — recognised for high-quality education, international research collaboration, and strong post-study employment rates." },
  ];

  return (
    <div className="w-full flex flex-col overflow-x-hidden pt-20">

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section ref={heroRef} className="w-full relative min-h-[70vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-white">
        <Orb className="top-0 right-0 translate-x-1/3 -translate-y-1/3" size={520} color="blue" delay={0} />
        <Orb className="bottom-0 left-0 -translate-x-1/3 translate-y-1/3" size={400} color="orange" delay={2} />

        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img src="/carrier2.webp" alt="Post Study" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/10 to-white/80" />
        </motion.div>

        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(rgba(96,165,250,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.3) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
            animate={{ backgroundPosition: ["0px 0px", "80px 80px"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-400/10 rounded-3xl"
            animate={{ rotate: [20, 30, 20], scale: [1, 1.06, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute top-10 right-24 w-24 h-24 border-2 border-blue-300/25 rounded-2xl"
            animate={{ rotate: [10, 20, 10], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 7, repeat: Infinity }} />
          <motion.div className="absolute -bottom-10 -left-10 w-52 h-52 bg-orange-400/8 rounded-3xl"
            animate={{ rotate: [-18, -28, -18], scale: [1, 1.05, 1] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        <motion.div className="z-10 max-w-4xl" style={{ opacity: heroOpacity }}>
          <motion.div className="flex justify-center mb-5" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors bg-white/75 px-3 py-1.5 rounded-full border border-slate-200 backdrop-blur-sm">
              Services <ChevronRight className="w-3 h-3" /> Post-Study Opportunity
            </Link>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 popins mb-5 leading-tight">
            {"Build Your ".split("").map((c, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.035 }}>{c === " " ? "\u00A0" : c}</motion.span>
            ))}
            <br />
            <span className="text-blue-500">
              {"Global Career".split("").map((c, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.04 }}>{c === " " ? "\u00A0" : c}</motion.span>
              ))}
            </span>
          </h1>

          <motion.p className="text-base md:text-xl text-slate-700 inter max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
            Graduation is a launchpad, not a finish line. We guide you through post-study work visas, global networks, and career pathways so your international degree delivers its full return.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-4 mt-10"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }}>
            <Link to="/contact">
              <motion.button
                className="relative px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-base inter flex items-center gap-3 overflow-hidden"
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              >
                <motion.span
                  className="absolute inset-0 rounded-2xl border-2 border-blue-400"
                  animate={{ scale: [1, 1.12], opacity: [0.8, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                />
                <Send className="w-4 h-4" /> Get Career Advice
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                className="px-10 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold text-base inter flex items-center gap-3 hover:border-blue-300 hover:text-blue-500 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Globe className="w-4 h-4" /> Other Services
              </motion.button>
            </Link>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
            {stats.map((s, i) => (
              <motion.div key={i}
                className="px-5 py-2.5 bg-white/90 border border-slate-200 rounded-2xl shadow-sm text-center backdrop-blur-sm"
                whileHover={{ y: -4, boxShadow: "0 10px 24px -4px rgba(96,165,250,0.18)" }}
                initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2 + i * 0.1 }}
              >
                <div className="text-base font-black text-slate-900 popins">
                  <Counter target={s.val} suffix={s.suffix} />
                </div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
          <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Scroll</span>
          <motion.div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded-full"
            animate={{ scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity }} />
        </motion.div>
      </section>

      {/* ══ STATS STRIP ════════════════════════════════════════ */}
      <section className="w-full py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <motion.div key={i}
                className={`flex flex-col items-center text-center p-6 rounded-2xl border ${s.blue ? "bg-blue-50 border-blue-100" : "bg-orange-50 border-orange-100"}`}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
              >
                <motion.div className={`mb-2 ${s.blue ? "text-blue-400" : "text-orange-400"}`}
                  animate={{ rotate: [0, 8, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.6 }}>
                  {s.icon}
                </motion.div>
                <div className={`text-2xl font-black popins ${s.blue ? "text-blue-500" : "text-orange-500"}`}>
                  <Counter target={s.val} suffix={s.suffix} />
                </div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAREER PATHWAYS ════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 bg-slate-50 px-4 sm:px-6 md:px-12 relative overflow-hidden">
        <Orb className="top-0 right-0" size={380} color="blue" delay={1} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-500 text-xs font-bold uppercase tracking-widest rounded-full mb-5">
              <Compass className="w-3 h-3" /> Decide Your Direction
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 popins mb-4">Your Post-Study Pathways</h2>
            <motion.div className="h-1.5 bg-blue-400 mx-auto rounded-full"
              initial={{ width: 0 }} whileInView={{ width: 96 }} viewport={vp} transition={{ duration: 0.8 }} />
          </motion.div>

          <div className="relative">
            <motion.div
              className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-200 via-orange-200 to-blue-200"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={vp}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {pathways.map((p, i) => (
                <motion.div key={i}
                  className="flex flex-col items-center text-center group"
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp} transition={{ delay: i * 0.15 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-white rounded-full shadow-lg border-2 border-slate-100 flex items-center justify-center mb-5 group-hover:border-blue-300 transition-colors"
                    whileHover={{ scale: 1.15, boxShadow: "0 12px 28px -4px rgba(96,165,250,0.25)" }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                  >
                    {p.icon}
                  </motion.div>
                  <h3 className="font-bold text-slate-800 popins text-base mb-2 group-hover:text-blue-500 transition-colors">{p.title}</h3>
                  <p className="text-slate-500 inter text-xs leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICES GRID ══════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 bg-white px-4 sm:px-6 md:px-12 relative overflow-hidden">
        <Orb className="bottom-0 left-0" size={350} color="orange" delay={3} />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 popins mb-4">Our Post-Study Services</h2>
            <motion.div className="h-1.5 bg-orange-400 mx-auto rounded-full"
              initial={{ width: 0 }} whileInView={{ width: 96 }} viewport={vp} transition={{ duration: 0.8 }} />
            <p className="text-slate-500 inter text-base md:text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
              From work visa paperwork to your first job offer — we cover the full post-study journey.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s, i) => <TiltCard key={i} item={s} i={i} />)}
          </div>
        </div>
      </section>

      {/* ══ HOW WE WORK — minimal mosaic layout ════════════════ */}
      <section className="w-full py-16 md:py-24 bg-slate-50 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-widest rounded-full mb-5">
                <Sparkles className="w-3 h-3 text-blue-400" /> Our Process
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 popins leading-tight">
                How We Get<br />You There
              </h2>
            </div>
            <p className="text-slate-500 inter text-sm md:text-base max-w-sm leading-relaxed md:text-right">
              Six deliberate steps — from first conversation to your first day at work abroad.
            </p>
          </motion.div>

          {/* Mosaic grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            {/* Step 01 — wide */}
            <motion.div
              className="md:col-span-7 bg-white rounded-3xl border border-slate-100 p-8 flex flex-col justify-between min-h-[220px] group hover:border-slate-300 transition-colors duration-300"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[11px] font-black text-slate-300 uppercase tracking-[0.2em]">01</span>
                <motion.div
                  className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-400 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.4 }}
                >
                  <Coffee className="w-5 h-5" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 popins mb-2">Free Discovery Call</h3>
                <p className="text-slate-500 inter text-sm leading-relaxed mb-5">
                  A warm, no-pressure 30-minute conversation to understand your degree, aspirations, and dream destinations. Your journey is unique — we tailor our approach from day one.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["30-min session", "No obligation", "Expert insights"].map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-[10px] font-bold bg-slate-50 border border-slate-100 text-slate-400">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Step 02 — dark narrow */}
            <motion.div
              className="md:col-span-5 bg-slate-900 rounded-3xl border border-slate-800 p-8 flex flex-col justify-between min-h-[220px] group hover:border-slate-600 transition-colors duration-300"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0.07 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[11px] font-black text-slate-600 uppercase tracking-[0.2em]">02</span>
                <motion.div
                  className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-orange-400"
                  whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.4 }}
                >
                  <Target className="w-5 h-5" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white popins mb-2">Strategic Pathway Design</h3>
                <p className="text-slate-400 inter text-sm leading-relaxed">
                  Your personalised post-study roadmap — visa eligibility, job market alignment, and study options across 15+ countries.
                </p>
              </div>
            </motion.div>

            {/* Step 03 — narrow */}
            <motion.div
              className="md:col-span-5 bg-white rounded-3xl border border-slate-100 p-8 flex flex-col justify-between min-h-[220px] group hover:border-slate-300 transition-colors duration-300"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0.12 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[11px] font-black text-slate-300 uppercase tracking-[0.2em]">03</span>
                <motion.div
                  className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-400 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.4 }}
                >
                  <FileText className="w-5 h-5" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 popins mb-2">Visa & Document Mastery</h3>
                <p className="text-slate-500 inter text-sm leading-relaxed">
                  Our specialists handle your post-study work permit end-to-end. No paperwork stress — every detail handled perfectly.
                </p>
              </div>
            </motion.div>

            {/* Step 04 — blue accent wide */}
            <motion.div
              className="md:col-span-7 bg-blue-500 rounded-3xl p-8 flex flex-col justify-between min-h-[220px] group hover:bg-blue-600 transition-colors duration-300"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0.18 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[11px] font-black text-blue-300 uppercase tracking-[0.2em]">04</span>
                <motion.div
                  className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center text-white"
                  whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.4 }}
                >
                  <Briefcase className="w-5 h-5" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white popins mb-2">Global Career Positioning</h3>
                <p className="text-blue-100 inter text-sm leading-relaxed mb-5">
                  CV and LinkedIn transformed for international audiences. Compelling narratives that make you irresistible to multinational employers.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Global CV overhaul", "LinkedIn optimisation", "Interview coaching"].map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/15 text-white/90">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Step 05 — wide */}
            <motion.div
              className="md:col-span-7 bg-white rounded-3xl border border-slate-100 p-8 flex flex-col justify-between min-h-[220px] group hover:border-slate-300 transition-colors duration-300"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0.22 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[11px] font-black text-slate-300 uppercase tracking-[0.2em]">05</span>
                <motion.div
                  className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-orange-400 group-hover:bg-orange-50 group-hover:border-orange-100 transition-colors duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.4 }}
                >
                  <Users className="w-5 h-5" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 popins mb-2">Network Activation</h3>
                <p className="text-slate-500 inter text-sm leading-relaxed mb-5">
                  Exclusive access to our alumni network across 30+ countries. Warm introductions, recruiter connections, and hidden opportunities that never reach public boards.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["30+ countries", "Recruiter intros", "Hidden openings"].map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-[10px] font-bold bg-slate-50 border border-slate-100 text-slate-400">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Step 06 — dark narrow */}
            <motion.div
              className="md:col-span-5 bg-slate-900 rounded-3xl border border-slate-800 p-8 flex flex-col justify-between min-h-[220px] group hover:border-slate-600 transition-colors duration-300"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0.28 }}
              whileHover={{ y: -3 }}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[11px] font-black text-slate-600 uppercase tracking-[0.2em]">06</span>
                <motion.div
                  className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-blue-400"
                  whileHover={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 0.4 }}
                >
                  <Rocket className="w-5 h-5" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white popins mb-2">Launch & Lifelong Support</h3>
                <p className="text-slate-400 inter text-sm leading-relaxed">
                  Post-arrival support, contract reviews, and your next career moves — we're with you long after the offer letter.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Bottom CTA strip — clean, no gradient */}
          <motion.div
            className="mt-6 bg-white rounded-3xl border border-slate-200 p-7 flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0.35 }}
          >
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center shrink-0 text-slate-400">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-slate-900 popins text-base">Start 3–4 months before graduation</p>
                <p className="text-slate-400 inter text-sm">Early planning = the best outcomes. Book your free call today.</p>
              </div>
            </div>
            <Link to="/contact" className="shrink-0">
              <motion.button
                className="px-8 py-3.5 bg-slate-900 text-white rounded-2xl font-bold text-sm inter flex items-center gap-3 hover:bg-blue-500 transition-colors duration-300"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              >
                Book Free Consultation <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ══ WHY IT MATTERS ═════════════════════════════════════ */}
      <section className="w-full py-16 md:py-24 bg-white px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-500 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                <Zap className="w-3 h-3" /> Why It Matters
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 popins mb-6 leading-tight">
                International Experience Changes Everything
              </h2>
              <p className="text-slate-600 inter leading-relaxed mb-5 text-lg">
                97% of international graduates secure employment within a year — and they earn 25% more on average than those who stayed home. The global exposure, language depth, and cultural agility you gain are irreplaceable career assets.
              </p>
              <p className="text-slate-600 inter leading-relaxed">
                Sunrise ensures you don't just survive post-study — you thrive. From visa paperwork to your first LinkedIn recommendation from a global recruiter, we're with you every step.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { icon: <TrendingUp className="w-4 h-4 text-blue-400" />, text: "25% higher salary" },
                  { icon: <Users className="w-4 h-4 text-orange-400" />, text: "Global alumni network" },
                  { icon: <Shield className="w-4 h-4 text-blue-400" />, text: "Visa compliance" },
                  { icon: <Award className="w-4 h-4 text-orange-400" />, text: "Recruiter introductions" },
                ].map((b, i) => (
                  <motion.div key={i}
                    className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 group"
                    initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={vp} transition={{ delay: 0.2 + i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-white rounded-lg w-8 h-8 flex items-center justify-center shadow-sm shrink-0">{b.icon}</div>
                    <span className="text-slate-700 font-bold inter text-xs">{b.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={vp} transition={{ duration: 0.7 }}>
              <motion.div
                className="absolute inset-0 rounded-[2.5rem] border-2 border-dashed border-blue-200 pointer-events-none"
                animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                style={{ margin: "-14px" }}
              />
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white relative z-10">
                <img src="/carrier2.webp" alt="Career Success" className="w-full h-full object-cover" />
              </div>
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-3xl shadow-xl border border-slate-100 max-w-[210px] z-20"
                animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <motion.div className="w-8 h-8 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    <CheckCircle className="w-5 h-5" />
                  </motion.div>
                  <span className="font-bold text-slate-800 text-sm">97% Employed</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">Within 1 year of graduation for international students.</p>
              </motion.div>
              <motion.div
                className="absolute -top-5 -right-5 bg-blue-500 text-white p-4 rounded-2xl shadow-lg z-20 text-center"
                animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="text-xl font-black popins">25%</div>
                <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Higher Pay</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ FAQs ═══════════════════════════════════════════════ */}
      <section className="w-full py-16 md:py-20 bg-slate-50 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 popins mb-3">Post-Study FAQs</h2>
            <motion.div className="h-1.5 bg-blue-400 mx-auto rounded-full"
              initial={{ width: 0 }} whileInView={{ width: 96 }} viewport={vp} transition={{ duration: 0.8 }} />
            <p className="text-slate-500 inter text-base max-w-xl mx-auto mt-5 leading-relaxed">
              Answers to the most common questions about working and living abroad after graduation.
            </p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => <Faq key={i} faq={faq} i={i} />)}
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════ */}
      <section className="w-full py-20 md:py-28 bg-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-25">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(rgba(96,165,250,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,0.2) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
            animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <Orb className="top-0 right-0" size={350} color="blue" delay={0} />
        <Orb className="bottom-0 left-0" size={300} color="orange" delay={2} />

        <motion.div className="max-w-3xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.8 }}>
          <div className="flex justify-center mb-5">
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-500 text-xs font-bold uppercase tracking-widest rounded-full"
              animate={{ boxShadow: ["0 0 0 0 rgba(96,165,250,0)", "0 0 0 10px rgba(96,165,250,0)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-3 h-3" /> Start Your Next Chapter
            </motion.span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 popins mb-5 leading-tight">
            Your Degree. Your Future.<br /><span className="text-blue-500">Our Guidance.</span>
          </h2>
          <p className="text-slate-600 inter text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Let Sunrise Education Consultants help you turn your international degree into a thriving global career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                className="relative px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-base inter flex items-center justify-center gap-3 hover:bg-blue-500 transition-colors duration-300 overflow-hidden"
                whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }}
              >
                <motion.span
                  className="absolute inset-0 rounded-2xl border-2 border-blue-400"
                  animate={{ scale: [1, 1.1], opacity: [0.7, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                />
                <Send className="w-5 h-5" />
                Book a Free Consultation
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                className="px-10 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold text-base inter flex items-center justify-center gap-3 hover:border-blue-300 hover:text-blue-500 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }}>
                <Globe className="w-5 h-5" /> All Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}