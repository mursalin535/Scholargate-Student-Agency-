import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap, FileCheck, Globe, BookOpen,
  Users, Clock, ArrowRight, CheckCircle,
  MapPin, FileText, CreditCard, Plane,
  ChevronRight, Star, AlertCircle, Heart, Shield, TrendingUp, Sparkles
} from "lucide-react";

export default function UniversityAdmission() {

  const vp = { once: false, amount: 0.12 };

  const steps = [
    {
      number: "01",
      icon: <Globe className="w-6 h-6" />,
      title: "Choose Country & University",
      desc: "Research countries based on your course, budget, culture fit, and long-term career goals. Shortlist universities by ranking, faculty strength, research output, and international student support infrastructure. Consider factors like post-study work rights, PR pathways, and the size of the Bangladeshi student community already established there — because your support network matters as much as your degree.",
      tags: ["Rankings", "Course Fit", "Budget", "Culture"],
      color: "blue"
    },
    {
      number: "02",
      icon: <BookOpen className="w-6 h-6" />,
      title: "Decide Your Course",
      desc: "Match your academic background and career ambitions to the right program — not just the most prestigious one. Research module content, specialization tracks, dissertation options, and graduate employment outcomes for each program. A well-chosen course at a mid-tier university will always outperform a mismatched one at a top-ranked institution. We help you make this distinction with data, not guesswork.",
      tags: ["Program Match", "Duration", "Career Scope"],
      color: "orange"
    },
    {
      number: "03",
      icon: <FileText className="w-6 h-6" />,
      title: "Prepare Documents",
      desc: "Gather academic transcripts, notarized certificates, recommendation letters, Statement of Purpose, language proficiency scores, and passport-sized ID documents. Many countries require official translations and apostille authentication — a process that can take 3–6 weeks if you don't plan ahead. Our document checklist is tailored to each destination country so nothing catches you off guard.",
      tags: ["Transcripts", "LORs", "SOP", "IELTS/TOEFL"],
      color: "blue"
    },
    {
      number: "04",
      icon: <FileCheck className="w-6 h-6" />,
      title: "Submit Application",
      desc: "Apply through official university portals before hard deadlines — late submissions are almost universally rejected regardless of how strong your profile is. Most universities prefer digital submissions through centralized systems like UCAS, Uni-Assist, or their own portals. Double-check every field, verify file formats, and keep a timestamped screenshot of your submission confirmation. Our team reviews every application before it's submitted.",
      tags: ["Online Portal", "Deadlines", "Review"],
      color: "orange"
    },
    {
      number: "05",
      icon: <CreditCard className="w-6 h-6" />,
      title: "Financial Planning",
      desc: "Plan comprehensively for tuition, accommodation, food, transport, insurance, and incidental expenses — not just the headline tuition figure. Explore merit scholarships, need-based grants, government-funded programs, and institutional bursaries. Many countries also allow international students to work 20 hours per week during term time, which can meaningfully offset living costs. We map out a realistic financial plan for every student we work with.",
      tags: ["Scholarships", "Tuition", "Living Cost"],
      color: "blue"
    },
    {
      number: "06",
      icon: <Plane className="w-6 h-6" />,
      title: "Visa & Pre-departure",
      desc: "Apply for your student visa with your acceptance letter, financial proof, health clearance, and travel insurance. Different embassies have different processing times and documentation requirements — some require in-person biometrics appointments that must be booked weeks in advance. We assign a dedicated visa officer to your case who monitors every stage, flags any issues immediately, and prepares you for the interview with mock sessions.",
      tags: ["Student Visa", "Accommodation", "Culture Prep"],
      color: "orange"
    }
  ];

  const requirements = [
    { icon: <GraduationCap className="w-5 h-5 text-blue-400" />, title: "Academic Qualifications", desc: "HSC / A-Levels or equivalent with required GPA. Some universities set conditional offers based on predicted grades — we help you understand exactly what threshold you need to hit." },
    { icon: <Globe className="w-5 h-5 text-orange-400" />, title: "Language Proficiency", desc: "IELTS 6.0–7.0 or TOEFL iBT 80–100 depending on country and institution. Some universities also accept Duolingo English Test or PTE Academic as alternatives." },
    { icon: <FileText className="w-5 h-5 text-blue-400" />, title: "Statement of Purpose", desc: "A compelling SOP that clearly articulates your academic journey, professional aspirations, and why this specific program at this specific university is the right fit for your goals." },
    { icon: <Users className="w-5 h-5 text-orange-400" />, title: "Recommendation Letters", desc: "2–3 strong LORs from teachers, professors, or employers who can speak directly to your academic ability, work ethic, and potential — not just generic character references." },
    { icon: <CreditCard className="w-5 h-5 text-blue-400" />, title: "Financial Proof", desc: "Bank solvency certificates showing 12–18 months of funds or confirmed scholarship award letters. Some countries require a specific minimum balance threshold denominated in their local currency." },
    { icon: <FileCheck className="w-5 h-5 text-orange-400" />, title: "Entrance Exams", desc: "SAT or ACT for undergraduate programs in the US. GRE for most postgraduate programs. GMAT specifically for MBA and business programs. We advise on which exams are required vs optional for your target institutions." },
  ];

  const whyStudyAbroad = [
    {
      title: "Global Career Boost",
      desc: "International degrees are recognized worldwide and consistently rank among the top credentials sought by multinational employers. Graduates with foreign degrees earn on average 30–40% more than their domestically-educated peers within five years of graduation — and they access job markets that simply don't exist without that international credential.",
      icon: "🌍"
    },
    {
      title: "Cultural Exposure",
      desc: "Immersing yourself in a new culture doesn't just broaden your perspective — it rewires the way you approach problems, collaborate with diverse teams, and navigate unfamiliar situations. These are exactly the skills that define successful global professionals, and they cannot be learned from a textbook or a classroom in Dhaka.",
      icon: "🎭"
    },
    {
      title: "Language Skills",
      desc: "Academic immersion is the single most effective way to achieve true fluency in English. Beyond grammar and vocabulary, you develop the ability to think, debate, negotiate, and present in English under pressure — a skill that translates directly into career advancement and international confidence.",
      icon: "💬"
    },
    {
      title: "Personal Growth",
      desc: "Managing your own finances, cooking, navigating a foreign healthcare system, and building a social network from scratch in a new country develops a depth of resilience and self-reliance that simply cannot be replicated at home. Students who study abroad consistently report it as the most transformative experience of their lives.",
      icon: "🌱"
    },
  ];

  const faqs = [
    {
      q: "How early should I start applying?",
      a: "Ideally 6–9 months before your intended intake. This gives you enough time to sit your language exams, gather and authenticate documents, write a strong SOP through multiple drafts, and still have buffer for unexpected delays. Students who begin the process 3 months before their target intake are constantly firefighting — and their applications show it."
    },
    {
      q: "Which intake is best for Bangladeshi students?",
      a: "Fall (September/October) is the most popular as it aligns with the academic calendars of most European and North American universities and offers the widest choice of programs. Spring (January/February) is a strong alternative for students who missed the Fall deadline or want a faster turnaround, though program availability can be more limited."
    },
    {
      q: "Can I study abroad without IELTS?",
      a: "Yes — increasingly possible. Some universities accept medium of instruction letters, online interviews, or conditional enrollment with built-in English support programs. Countries like Germany and Italy have specific programs taught in English that have their own language assessment processes. We stay current on which institutions offer IELTS waivers and advise accordingly."
    },
    {
      q: "What exams do I need beyond IELTS?",
      a: "SAT or ACT for undergraduate admissions in the US and some Canadian universities. GRE for most postgraduate science, engineering, and social science programs globally. GMAT specifically for MBA and finance programs. Many UK, Australian, and European universities do not require standardized tests beyond language proficiency — our advisors can tell you exactly what your shortlist needs."
    },
    {
      q: "How long does the visa take?",
      a: "Processing times vary significantly: UK visas typically take 3 weeks, Canadian visas 4–8 weeks, Schengen (Italy, Germany, Finland) can range from 4–12 weeks depending on embassy load and time of year. We always advise submitting visa applications as soon as your acceptance letter arrives — waiting until the last moment is the most avoidable mistake in this entire process."
    },
    {
      q: "Will I be able to work while studying?",
      a: "Most popular study destinations allow international students to work 20 hours per week during term and full-time during official university breaks. The UK, Canada, Australia, New Zealand, Germany, and Ireland all permit this. Some countries like Finland and Norway have no hour restrictions at all. Post-study work visas ranging from 1–3 years are also available in most of these countries, making them excellent platforms for launching a global career."
    },
  ];

  const commitmentPoints = [
    { icon: <Shield className="w-5 h-5 text-blue-400" />, title: "Document Audit", desc: "Every document in your application is reviewed by our team before submission — for accuracy, formatting, and embassy-specific compliance." },
    { icon: <Heart className="w-5 h-5 text-orange-400" />, title: "SOP Coaching", desc: "We don't just edit your Statement of Purpose — we work with you across multiple sessions to build a narrative that is authentically yours and strategically compelling." },
    { icon: <TrendingUp className="w-5 h-5 text-blue-400" />, title: "Mock Visa Interviews", desc: "Our visa prep includes realistic mock interview sessions with feedback on your answers, body language, and document organization — because confidence on the day makes all the difference." },
    { icon: <Sparkles className="w-5 h-5 text-orange-400" />, title: "Post-Arrival Support", desc: "Our commitment doesn't end when your plane lands. We check in at 2 weeks, 6 weeks, and 3 months post-arrival to make sure you've settled in and have everything you need." },
  ];

  return (
    <div className="w-full flex flex-col overflow-x-hidden pt-20">

      {/* ══════════ HERO ══════════ */}
      <section className="w-full relative min-h-[62vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img src="/study_abroad1.webp" alt="University Admission" className="w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/20 to-white/75" />
        </div>

        {/* geometric accents */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div className="absolute -top-10 -right-10 w-60 h-60 bg-orange-400/10 rounded-3xl" style={{ rotate: 20 }}
            animate={{ rotate: [20, 28, 20] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute top-8 right-20 w-28 h-28 border-2 border-orange-300/25 rounded-2xl" style={{ rotate: 12 }}
            animate={{ rotate: [12, 20, 12], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 7, repeat: Infinity }} />
          <motion.div className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-400/8 rounded-3xl" style={{ rotate: -18 }}
            animate={{ rotate: [-18, -26, -18] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bottom-10 left-20 w-16 h-16 border-2 border-blue-300/20 rounded-lg" style={{ rotate: -10 }}
            animate={{ rotate: [-10, -18, -10], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 8, repeat: Infinity }} />
          <motion.div className="absolute -bottom-16 -right-16 w-52 h-52 rounded-full border-[12px] border-orange-200/15"
            animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        <motion.div className="z-10 max-w-4xl"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div className="flex justify-center mb-4"
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors bg-white/70 px-3 py-1.5 rounded-full border border-slate-200">
              Services <ChevronRight className="w-3 h-3" /> University Admission
            </Link>
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 popins mb-5 leading-tight">
            University <span className="text-blue-400">Admission</span><br />Process
          </h1>
          <motion.p className="text-base md:text-xl text-slate-700 inter max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            A complete, step-by-step guide for Bangladeshi students — from choosing your dream university to holding that acceptance letter in your hands.
          </motion.p>
          <motion.p className="text-sm md:text-base text-slate-600 inter max-w-xl mx-auto leading-relaxed mt-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
            Thousands of students from Bangladesh successfully secure places at top universities every year. With the right guidance, the right documents, and the right timing — you will be one of them.
          </motion.p>

          {/* quick stats */}
          <motion.div className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            {[
              { val: "6–9 Months", label: "Start Early" },
              { val: "30+ Countries", label: "We Cover" },
              { val: "95%", label: "Visa Success" },
              { val: "1,200+", label: "Students Placed" },
            ].map((s, i) => (
              <div key={i} className="px-5 py-2.5 bg-white/90 border border-slate-200 rounded-2xl shadow-sm text-center backdrop-blur-sm">
                <div className="text-base font-black text-slate-900 popins">{s.val}</div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════ WHY STUDY ABROAD ══════════ */}
      <section className="w-full py-16 md:py-24 bg-slate-50 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 popins mb-3">Why Study Abroad?</h2>
              <div className="w-16 h-1.5 bg-orange-400 rounded-full" />
            </div>
            <p className="text-slate-500 inter text-base md:text-lg max-w-lg leading-relaxed">
              Studying abroad from Bangladesh is one of the most transformative decisions a student can make — academically, professionally, and personally.
            </p>
          </motion.div>

          <motion.p className="text-slate-500 inter text-base leading-relaxed max-w-3xl mb-12"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.2 }}>
            The world has never been more interconnected — and employers have never placed greater value on international experience. An overseas degree signals not just academic achievement but adaptability, resilience, and the ability to thrive outside your comfort zone. For Bangladeshi students specifically, it often represents the single most powerful lever available for dramatically expanding career options, earning potential, and life trajectory.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyStudyAbroad.map((item, i) => (
              <motion.div key={i}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}>
                <div className="text-3xl mb-4" style={{ fontSize: '32px' }}>{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 popins mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                <p className="text-slate-500 inter text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 6-STEP PROCESS ══════════ */}
      <section className="w-full py-16 md:py-24 bg-white px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 popins mb-4">The 6-Step Admission Process</h2>
            <div className="w-24 h-1.5 bg-blue-400 mx-auto rounded-full mb-5" />
            <p className="text-slate-500 inter text-base md:text-lg max-w-2xl mx-auto">
              Everything you need to do — in the right order — to secure your university place abroad. Each step builds on the last, and skipping or rushing any one of them is the most common source of failed applications we see.
            </p>
          </motion.div>

          <motion.p className="text-center text-slate-400 inter text-sm max-w-2xl mx-auto mb-14 leading-relaxed"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.2 }}>
            We've distilled this process from helping over 1,200 students navigate it successfully. The order matters. The timing matters. And the detail you put into each step is directly proportional to the quality of your outcome.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, i) => (
              <motion.div key={i}
                className={`group relative bg-white rounded-3xl p-7 border-2 ${step.color === 'blue' ? 'border-blue-100 hover:border-blue-300' : 'border-orange-100 hover:border-orange-300'} shadow-sm hover:shadow-lg transition-all duration-400 overflow-hidden`}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}>
                <div className={`absolute -top-3 -right-1 text-7xl font-black select-none leading-none ${step.color === 'blue' ? 'text-blue-50' : 'text-orange-50'}`}>{step.number}</div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${step.color === 'blue' ? 'bg-blue-50 text-blue-400' : 'bg-orange-50 text-orange-400'}`}>
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 popins mb-3 relative z-10">{step.title}</h3>
                <p className="text-slate-500 inter text-sm leading-relaxed mb-5 relative z-10">{step.desc}</p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {step.tags.map((tag, ti) => (
                    <span key={ti} className={`px-3 py-1 rounded-full text-[11px] font-bold ${step.color === 'blue' ? 'bg-blue-50 text-blue-500' : 'bg-orange-50 text-orange-500'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ REQUIREMENTS ══════════ */}
      <section className="w-full py-16 md:py-20 bg-slate-50 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 popins mb-3">What You'll Need</h2>
              <div className="w-16 h-1.5 bg-orange-400 rounded-full" />
            </div>
            <p className="text-slate-500 inter text-base md:text-lg max-w-lg">
              Standard requirements across most international universities for Bangladeshi applicants — with the details that actually matter.
            </p>
          </motion.div>

          <motion.p className="text-slate-500 inter text-base leading-relaxed max-w-3xl mb-12"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.15 }}>
            Document preparation is where most self-guided applicants lose significant ground. A missing apostille, a transcript that wasn't officially sealed, or a recommendation letter that arrives a day after the deadline can derail months of work. We maintain institution-specific and country-specific document checklists that are updated every intake cycle — so you always know exactly what's needed, and when.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {requirements.map((req, i) => (
              <motion.div key={i}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md flex gap-4 items-start hover:border-blue-200 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4 }}>
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                  {req.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 popins mb-1">{req.title}</h3>
                  <p className="text-slate-500 inter text-sm leading-relaxed">{req.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* alert tip */}
          <motion.div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-5 flex gap-4 items-start"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-blue-700 inter text-sm leading-relaxed">
              <span className="font-bold">Pro tip:</span> Start preparing your IELTS and gathering documents at least 6–9 months before your target intake. Authentication and notarization alone can take 3–6 weeks in Bangladesh — and that's before you've written a single word of your SOP. Late preparation is the single most common reason for missed deadlines, and it's entirely avoidable with proper planning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════ OUR COMMITMENT ══════════ */}
      <section className="w-full py-16 md:py-24 bg-white px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-100 text-orange-500 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                <Heart className="w-3 h-3" /> How We Help You Through This
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 popins mb-6 leading-tight">
                You Don't Have to Navigate This Alone
              </h2>
              <p className="text-slate-600 inter leading-relaxed mb-5 text-lg">
                The university admission process has more moving parts than most students realize when they start. Entrance exams, country-specific documentation rules, shifting scholarship deadlines, visa processing windows — missing any single piece can delay your plans by an entire year.
              </p>
              <p className="text-slate-600 inter leading-relaxed mb-5">
                That's exactly why we exist. From your very first consultation, you're assigned a dedicated advisor who owns your application from start to finish. They don't hand you off to a junior assistant or give you a generic checklist. They know your profile, your goals, your timeline — and they hold every piece of this process together so you can focus on what you do best: being a strong student.
              </p>
              <p className="text-slate-600 inter leading-relaxed mb-8">
                We've guided students through every conceivable scenario — last-minute exam retakes, scholarship appeals, visa refusals that we helped overturn on second application. Whatever your situation, chances are we've seen something similar before, and we know exactly how to handle it.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Dedicated advisor from first session to visa approval",
                  "Country-specific and university-specific document checklists",
                  "SOP coaching across multiple drafts until it's right",
                  "Mock visa interview prep with real embassy-style questions",
                  "Post-arrival check-ins for the first 3 months abroad",
                ].map((item, i) => (
                  <motion.div key={i} className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ delay: 0.3 + i * 0.08 }}>
                    <CheckCircle className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="text-slate-700 inter text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-5"
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.7, delay: 0.2 }}>
              {commitmentPoints.map((item, i) => (
                <motion.div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
                  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.07)' }} transition={{ duration: 0.3 }}>
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="font-bold text-slate-800 popins mb-2 text-sm">{item.title}</h4>
                  <p className="text-slate-500 text-xs inter leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ TIMELINE ══════════ */}
      <section className="w-full py-16 md:py-20 bg-slate-50 px-4 sm:px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 popins mb-3">Application Timeline</h2>
            <div className="w-24 h-1.5 bg-blue-400 mx-auto rounded-full mb-5" />
            <p className="text-slate-500 inter text-base md:text-lg max-w-xl mx-auto">
              Here's exactly when to do what — so you never miss a critical deadline.
            </p>
          </motion.div>

          <motion.p className="text-center text-slate-400 inter text-sm max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.2 }}>
            This timeline assumes a 9-month runway before your target intake — which we strongly recommend. Students who compress this into 4–5 months can still succeed, but the margin for error becomes razor thin. The earlier you start, the more leverage you have over every part of this process.
          </motion.p>

          <div className="relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 rounded-full" />
            <div className="space-y-5">
              {[
                { month: "Month 1–2", action: "Research countries, universities, and programs. Begin shortlisting based on your academic profile, budget, and career goals. Attend free consultation to map your options.", color: "bg-blue-400" },
                { month: "Month 3", action: "Register for and sit IELTS, TOEFL, or required entrance exams (SAT/GRE/GMAT). Allow time for a re-sit if your first score falls short.", color: "bg-orange-400" },
                { month: "Month 4", action: "Begin writing your Statement of Purpose. Request recommendation letters from teachers and employers. Start authenticating and translating academic documents.", color: "bg-blue-400" },
                { month: "Month 5–6", action: "Submit university applications ahead of deadlines. Track portal statuses and respond promptly to any requests for additional information.", color: "bg-orange-400" },
                { month: "Month 7", action: "Receive conditional or unconditional offer letters. Confirm enrollment by paying deposit or accepting the offer through the university portal.", color: "bg-blue-400" },
                { month: "Month 8–9", action: "Apply for your student visa with full documentation. Arrange accommodation, purchase travel insurance, attend pre-departure briefing, and prepare for departure.", color: "bg-orange-400" },
              ].map((t, i) => (
                <motion.div key={i}
                  className="flex gap-5 items-start relative"
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={vp} transition={{ delay: i * 0.08, duration: 0.5 }}>
                  <div className={`w-4 h-4 rounded-full ${t.color} shrink-0 mt-1 z-10 hidden md:block`} />
                  <div className="flex-1 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 flex flex-col sm:flex-row sm:items-start gap-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-black text-white ${t.color} shrink-0 self-start`}>{t.month}</span>
                    <p className="text-slate-700 inter text-sm font-medium leading-relaxed">{t.action}</p>
                    <CheckCircle className="w-4 h-4 text-slate-200 ml-auto shrink-0 hidden sm:block mt-0.5" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ FAQs ══════════ */}
      <section className="w-full py-16 md:py-20 bg-white px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 popins mb-3">Common Questions</h2>
            <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full mb-5" />
            <p className="text-slate-500 inter text-base max-w-xl mx-auto leading-relaxed">
              These are the questions we hear most often from Bangladeshi students at their first consultation — answered honestly, with the detail they actually deserve.
            </p>
          </motion.div>

          <div className="space-y-4 mt-10">
            {faqs.map((faq, i) => (
              <motion.div key={i}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:bg-white transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -3 }}>
                <div className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-blue-400 text-xs font-black">Q</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-800 popins mb-2 group-hover:text-blue-400 transition-colors">{faq.q}</h3>
                    <p className="text-slate-500 inter text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="w-full py-20 md:py-28 bg-slate-50 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute -top-10 -right-10 w-56 h-56 bg-orange-400/8 rounded-3xl" style={{ rotate: 20 }}
            animate={{ rotate: [20, 28, 20] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400/6 rounded-3xl" style={{ rotate: -16 }}
            animate={{ rotate: [-16, -24, -16] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute top-1/2 right-8 w-20 h-20 border-2 border-orange-300/20 rounded-xl" style={{ rotate: 12 }}
            animate={{ rotate: [12, 20, 12], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 7, repeat: Infinity }} />
        </div>

        <motion.div className="max-w-3xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.8 }}>
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-100 text-orange-500 text-xs font-bold uppercase tracking-widest rounded-full">
              <Star className="w-3 h-3" /> Free Consultation
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 popins mb-5 leading-tight">
            Ready to Start Your<br /><span className="text-blue-400">University Journey?</span>
          </h2>
          <p className="text-slate-600 inter text-base md:text-lg mb-5 max-w-xl mx-auto leading-relaxed">
            Our counselors will guide you through every step — from choosing the right university to getting your visa approved.
          </p>
          <p className="text-slate-500 inter text-sm mb-10 max-w-2xl mx-auto leading-relaxed">
            Your first consultation is completely free and carries zero obligation. In 45 minutes, we'll review your academic profile, identify the strongest university options for your goals, and give you a clear, honest picture of what your international education journey could look like — and what it will take to get there. Thousands of students started exactly where you are right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-base inter flex items-center justify-center gap-3 hover:bg-blue-500 transition-colors duration-300"
                whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }}>
                Book Free Consultation
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