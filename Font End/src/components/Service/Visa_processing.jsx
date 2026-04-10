import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FileCheck, Globe, Clock, CheckCircle,
  ChevronRight, Star, AlertCircle, Shield,
  FileText, Landmark, Plane, Users, ArrowRight,
  Send, BookOpen, Heart, TrendingUp, Award
} from "lucide-react";

export default function VisaProcessing() {
  const vp = { once: false, amount: 0.12 };

  const visaSteps = [
    {
      number: "01",
      title: "Document Collection",
      desc: "We begin by auditing every document you'll need — passport, offer letter, academic transcripts, financial proofs, insurance, and anything country-specific. Our detailed checklists are built per destination so nothing is ever missed, and we flag authentication or translation requirements well in advance.",
      icon: <FileText className="w-6 h-6" />,
      tags: ["Passport", "Offer Letter", "Transcripts"],
      color: "orange"
    },
    {
      number: "02",
      title: "Financial Verification",
      desc: "Embassies scrutinize financial documentation with an extremely fine lens. We help you structure your bank statements, sponsorship letters, and scholarship confirmations to meet the specific solvency thresholds required by each country's immigration authority — not just in amount, but in format and presentation.",
      icon: <Landmark className="w-6 h-6" />,
      tags: ["Bank Solvency", "Sponsorship", "Scholarships"],
      color: "blue"
    },
    {
      number: "03",
      title: "Application Submission",
      desc: "Precise, timely filing of your visa application through the correct diplomatic channels. We review every field before submission, cross-check supporting documents against the checklist, and retain timestamped records of all submissions. Errors at this stage are where most self-guided applications fall apart — we make sure yours doesn't.",
      icon: <FileCheck className="w-6 h-6" />,
      tags: ["Embassy Portal", "Deadlines", "Review"],
      color: "orange"
    },
    {
      number: "04",
      title: "Interview Coaching",
      desc: "Our dedicated visa coaches run personalized preparation sessions covering the full range of questions embassy officers ask — your study plan, financial situation, ties to Bangladesh, and post-graduation intentions. We correct common mistakes in delivery, help you structure clear and confident answers, and ensure you walk into that interview room fully prepared.",
      icon: <Users className="w-6 h-6" />,
      tags: ["Mock Sessions", "Q&A Prep", "Confidence"],
      color: "blue"
    },
    {
      number: "05",
      title: "Mock Visa Interview",
      desc: "Beyond coaching, we run full simulation mock interviews in an environment that closely mirrors the actual embassy setting. A trained interviewer asks you real embassy-style questions under realistic conditions, then provides structured feedback on your answers, composure, and documentation handling. Students who complete mock interviews consistently outperform those who don't.",
      icon: <Globe className="w-6 h-6" />,
      tags: ["Real Environment", "Structured Feedback", "Simulation"],
      color: "orange"
    },
    {
      number: "06",
      title: "Visa Grant & Travel Prep",
      desc: "Once your visa is approved, we don't simply hand it over and wish you luck. We conduct a comprehensive pre-departure briefing covering your entry requirements, airport procedures, accommodation confirmation, currency and banking setup, SIM card guidance, and an introduction to our alumni network already living in your destination city.",
      icon: <Plane className="w-6 h-6" />,
      tags: ["Visa Collection", "Pre-Departure", "Alumni Network"],
      color: "blue"
    }
  ];

  const whyVisaFails = [
    {
      icon: <AlertCircle className="w-5 h-5 text-orange-400" />,
      title: "Incomplete Documentation",
      desc: "Missing a single authenticated document is enough to trigger an outright rejection. We audit every document before submission against country-specific and embassy-specific checklists updated every intake cycle."
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-blue-400" />,
      title: "Weak Financial Proof",
      desc: "Embassy officers need to see not just that funds exist, but that they are accessible, stable, and sufficient. Poorly structured bank statements — even when the balance is adequate — are a leading cause of refusal."
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-orange-400" />,
      title: "Poor Interview Performance",
      desc: "Inconsistent answers, nervousness, or inability to clearly articulate your study plan raises red flags. Our mock interview program eliminates this risk by building genuine confidence through repeated practice."
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-blue-400" />,
      title: "Weak Ties to Home Country",
      desc: "Consular officers must be satisfied you intend to return after your studies. We help you identify and present the right evidence of strong home ties — family, property, career plans — in a way that genuinely reassures them."
    },
  ];

  const ourSupport = [
    { icon: <BookOpen className="w-5 h-5 text-blue-400" />, title: "In-depth Briefing", desc: "Before any preparation begins, we walk you through the complete embassy process — the setup of the interview board, the typical flow of questions, what officers are specifically looking for, and the common patterns behind approvals and rejections. Knowledge removes fear." },
    { icon: <Users className="w-5 h-5 text-orange-400" />, title: "Dedicated Visa Teacher", desc: "We employ specialist visa preparation teachers who work with you one-on-one across multiple sessions. These aren't generic workshops — they're personalized coaching sessions calibrated to your specific destination country, program, and profile." },
    { icon: <Shield className="w-5 h-5 text-blue-400" />, title: "Mock Test Environment", desc: "We replicate the actual embassy interview environment as closely as possible — the format, the pressure, the types of questions, and the documentation presentation sequence. Students who've been through our mock tests consistently report that the real interview felt familiar and manageable." },
    { icon: <Heart className="w-5 h-5 text-orange-400" />, title: "Emotional & Practical Support", desc: "Visa anxiety is real and completely understandable. Our team is available to answer questions, calm concerns, and provide clarity at every stage. You will never feel like you're facing this process alone — because you aren't." },
  ];

  const faqs = [
    {
      q: "How long does student visa processing take?",
      a: "Processing times vary significantly by destination: UK student visas typically take 3 weeks, Canadian student permits 4–8 weeks, US F-1 visas 3–5 weeks post-interview, and Schengen countries (Germany, Italy, Finland) can range from 4–12 weeks depending on embassy load. We always advise submitting your visa application the moment your offer letter arrives — waiting is the most avoidable risk in the entire process."
    },
    {
      q: "What documents do I need for a student visa?",
      a: "Core documents include your valid passport, university offer/acceptance letter, proof of sufficient funds (bank statements, scholarship confirmation), academic transcripts, language proficiency scores, health insurance, and passport photographs. Many countries additionally require a Statement of Purpose, accommodation proof, and travel history documentation. Our country-specific checklists cover every requirement in detail."
    },
    {
      q: "What happens if my visa is rejected?",
      a: "A refusal is not the end of the road. We analyze the refusal reasons with you, address the specific concerns raised by the embassy, and build a stronger second application. Many of our students who were initially refused have gone on to successfully obtain their visas on re-application. The key is understanding exactly why the refusal happened — and fixing it systematically."
    },
    {
      q: "Do I need to attend a visa interview?",
      a: "For US, Canadian, and some other visa categories, an in-person embassy interview is mandatory. For UK, Australian, and many European student visas, interviews are less common but can still be requested at the embassy's discretion. Either way, we prepare you thoroughly for the possibility — and our mock interview program applies regardless."
    },
    {
      q: "Can I work while studying on a student visa?",
      a: "Yes — most major study destinations permit international students to work part-time during term time. The UK, Canada, Australia, and New Zealand all allow up to 20 hours per week. Germany and Finland have particularly flexible arrangements. Post-study work visas are also available in most of these countries, giving you 1–3 years to build career experience after graduation."
    },
    {
      q: "How do I prove strong ties to Bangladesh for my visa?",
      a: "Embassy officers want to be satisfied that you genuinely intend to return home after completing your studies. Strong ties evidence can include family dependents in Bangladesh, property ownership, a clear post-graduation career plan with documented employment prospects back home, and ongoing financial or business interests. We help every student we work with identify and present the most compelling evidence for their individual situation."
    },
  ];

  const stats = [
    { val: "95%", label: "Visa Approval Rate", icon: <Shield className="w-5 h-5" />, blue: true },
    { val: "1,200+", label: "Students Supported", icon: <Users className="w-5 h-5" />, blue: false },
    { val: "30+", label: "Destination Countries", icon: <Globe className="w-5 h-5" />, blue: true },
    { val: "8+ Yrs", label: "Visa Expertise", icon: <Award className="w-5 h-5" />, blue: false },
  ];

  return (
    <div className="w-full flex flex-col overflow-x-hidden pt-20">

      {/* ══════════ HERO ══════════ */}
      <section className="w-full relative min-h-[62vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img src="/visa_processing.webp" alt="Visa Processing" className="w-full h-full object-cover opacity-45" />
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

        <motion.div className="z-10 max-w-4xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div className="flex justify-center mb-4" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-orange-400 transition-colors bg-white/70 px-3 py-1.5 rounded-full border border-slate-200">
              Services <ChevronRight className="w-3 h-3" /> Visa Processing
            </Link>
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 popins mb-5 leading-tight">
            Seamless <span className="text-orange-400">Visa</span><br />Processing
          </h1>
          <motion.p className="text-base md:text-xl text-slate-700 inter max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Expert visa guidance from document collection to embassy interview — ensuring your application is accurate, complete, and submitted with the highest possible chance of success.
          </motion.p>
          <motion.p className="text-sm md:text-base text-slate-600 inter max-w-xl mx-auto leading-relaxed mt-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
            A visa refusal doesn't just delay your plans — it can affect future applications and carry emotional costs that are entirely avoidable. Our 95% approval rate exists because we leave nothing to chance.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            {[
              { val: "95%", label: "Approval Rate" },
              { val: "30+", label: "Countries" },
              { val: "8+ Yrs", label: "Experience" },
              { val: "1,200+", label: "Students Helped" },
            ].map((s, i) => (
              <div key={i} className="px-5 py-2.5 bg-white/90 border border-slate-200 rounded-2xl shadow-sm text-center backdrop-blur-sm">
                <div className="text-base font-black text-slate-900 popins">{s.val}</div>
                <div className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════ STATS STRIP ══════════ */}
      <section className="w-full py-10 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div key={i}
                className={`flex flex-col items-center text-center p-6 rounded-2xl border ${s.blue ? 'bg-blue-50 border-blue-100' : 'bg-orange-50 border-orange-100'}`}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: i * 0.1 }}>
                <div className={`mb-2 ${s.blue ? 'text-blue-400' : 'text-orange-400'}`}>{s.icon}</div>
                <div className={`text-3xl font-black popins ${s.blue ? 'text-blue-500' : 'text-orange-500'}`}>{s.val}</div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 6-STEP VISA PROCESS ══════════ */}
      <section className="w-full py-16 md:py-24 bg-slate-50 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 popins mb-4">Our 6-Step Visa Process</h2>
            <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full mb-5" />
            <p className="text-slate-500 inter text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Every step is handled by a specialist, not a generalist. From your very first document audit to your pre-departure briefing, our process is designed to leave zero gaps.
            </p>
          </motion.div>

          <motion.p className="text-center text-slate-400 inter text-sm max-w-2xl mx-auto mb-14 leading-relaxed"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.2 }}>
            Visa refusals almost always trace back to one of three root causes: incomplete documentation, insufficient financial proof, or a poor interview performance. Our six-step process addresses all three systematically — which is why our approval rate sits consistently above 95%.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visaSteps.map((step, i) => (
              <motion.div key={i}
                className={`group relative bg-white rounded-3xl p-7 border-2 ${step.color === 'orange' ? 'border-orange-100 hover:border-orange-300' : 'border-blue-100 hover:border-blue-300'} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden`}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}>
                <div className={`absolute -top-3 -right-1 text-7xl font-black select-none leading-none ${step.color === 'orange' ? 'text-orange-50' : 'text-blue-50'}`}>{step.number}</div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${step.color === 'orange' ? 'bg-orange-50 text-orange-400' : 'bg-blue-50 text-blue-400'}`}>
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 popins mb-3 relative z-10">{step.title}</h3>
                <p className="text-slate-500 inter text-sm leading-relaxed mb-5 relative z-10">{step.desc}</p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {step.tags.map((tag, ti) => (
                    <span key={ti} className={`px-3 py-1 rounded-full text-[11px] font-bold ${step.color === 'orange' ? 'bg-orange-50 text-orange-500' : 'bg-blue-50 text-blue-500'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ WHY VISAS FAIL ══════════ */}
      <section className="w-full py-16 md:py-24 bg-white px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 popins mb-3">Why Visa Applications Fail</h2>
              <div className="w-16 h-1.5 bg-orange-400 rounded-full" />
            </div>
            <p className="text-slate-500 inter text-base md:text-lg max-w-lg leading-relaxed">
              Understanding the most common failure points is the first step to making sure they never happen to you.
            </p>
          </motion.div>

          <motion.p className="text-slate-500 inter text-base leading-relaxed max-w-3xl mb-12"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.15 }}>
            After reviewing hundreds of visa refusals over the years, we've identified a consistent pattern: most rejections are entirely preventable. They don't happen because students lack qualifications or genuine intent — they happen because of process errors, documentation gaps, or insufficient preparation for the human element of the interview. Our entire support model is built to close these gaps before they ever become a problem.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whyVisaFails.map((item, i) => (
              <motion.div key={i}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:bg-white transition-all duration-300 flex gap-4 items-start"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}>
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 popins mb-2">{item.title}</h3>
                  <p className="text-slate-500 inter text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-8 bg-orange-50 border border-orange-200 rounded-2xl p-5 flex gap-4 items-start"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <AlertCircle className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
            <p className="text-orange-700 inter text-sm leading-relaxed">
              <span className="font-bold">Important:</span> A visa refusal is recorded and can affect future applications to the same and other countries. This is why getting the application right the first time is always the better — and cheaper — strategy. Our team exists precisely to make that happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════ HOW WE SUPPORT YOU ══════════ */}
      <section className="w-full py-16 md:py-24 bg-slate-50 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-500 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                <Heart className="w-3 h-3" /> Our Visa Support System
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 popins mb-6 leading-tight">
                Teaching, Briefing & Mock Tests — Not Just Paperwork
              </h2>
              <p className="text-slate-600 inter leading-relaxed mb-5 text-lg">
                Most visa agencies stop at document collection and submission. We go much further. The embassy interview is a human interaction — and human interactions require real preparation, not just a stack of correctly formatted papers.
              </p>
              <p className="text-slate-600 inter leading-relaxed mb-5">
                Our visa support system is built on three pillars that we've refined over years of working with Bangladeshi students: in-depth briefing on the embassy process, personalized one-on-one teaching with specialist visa coaches, and full mock test simulations in a realistic interview environment.
              </p>
              <p className="text-slate-600 inter leading-relaxed mb-8">
                The result is a student who doesn't just show up with the right documents — they show up with genuine confidence, clear and consistent answers, and the composure that embassy officers respond to positively. That combination is exactly why our approval rate consistently sits above 95%.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Dedicated visa officer assigned to every case",
                  "Country-specific document checklist updated every intake",
                  "Multiple mock interview sessions before the real appointment",
                  "Financial documentation structuring guidance",
                  "Post-refusal appeal and re-application support",
                ].map((item, i) => (
                  <motion.div key={i} className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ delay: 0.3 + i * 0.08 }}>
                    <CheckCircle className="w-5 h-5 text-orange-400 shrink-0" />
                    <span className="text-slate-700 inter text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="grid grid-cols-2 gap-5"
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.7, delay: 0.2 }}>
              {ourSupport.map((item, i) => (
                <motion.div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
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

      {/* ══════════ PROCESSING TIMES ══════════ */}
      <section className="w-full py-16 md:py-20 bg-white px-4 sm:px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 popins mb-3">Visa Processing Times</h2>
            <div className="w-24 h-1.5 bg-blue-400 mx-auto rounded-full mb-5" />
            <p className="text-slate-500 inter text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              How long you should expect to wait — by destination country.
            </p>
          </motion.div>

          <motion.p className="text-center text-slate-400 inter text-sm max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.2 }}>
            These are typical processing windows under normal embassy conditions. Times can extend during peak intake periods — typically June through September. We always advise submitting your visa application as soon as your offer letter is confirmed, regardless of how far your intake date seems.
          </motion.p>

          <div className="space-y-4">
            {[
              { country: "🇬🇧 United Kingdom", time: "3 weeks", note: "Priority service available (5 days) for additional fee", color: "bg-blue-400" },
              { country: "🇨🇦 Canada", time: "4–8 weeks", note: "SDS stream can reduce to 20 days for eligible applicants", color: "bg-orange-400" },
              { country: "🇺🇸 United States", time: "3–5 weeks", note: "Interview required; appointment wait times vary by consulate", color: "bg-blue-400" },
              { country: "🇦🇺 Australia", time: "4–6 weeks", note: "GTE (Genuine Temporary Entrant) statement is critical", color: "bg-orange-400" },
              { country: "🇩🇪 Germany", time: "6–10 weeks", note: "Blocked account (Sperrkonto) required; book appointment early", color: "bg-blue-400" },
              { country: "🇳🇿 New Zealand", time: "4–8 weeks", note: "Post-approval processing adds 1–2 weeks for visa sticker", color: "bg-orange-400" },
            ].map((t, i) => (
              <motion.div key={i}
                className="flex gap-5 items-center relative"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={vp} transition={{ delay: i * 0.08, duration: 0.5 }}>
                <div className="flex-1 bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-orange-200 hover:bg-white transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-3">
                  <span className="text-slate-800 inter font-bold text-sm min-w-[180px]">{t.country}</span>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-black text-white ${t.color} shrink-0`}>{t.time}</span>
                  <p className="text-slate-500 inter text-xs">{t.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ FAQs ══════════ */}
      <section className="w-full py-16 md:py-20 bg-slate-50 px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 popins mb-3">Common Questions</h2>
            <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full mb-5" />
            <p className="text-slate-500 inter text-base max-w-xl mx-auto leading-relaxed">
              The questions we hear most often from students at their first visa consultation — answered with the detail and honesty they deserve.
            </p>
          </motion.div>

          <div className="space-y-4 mt-10">
            {faqs.map((faq, i) => (
              <motion.div key={i}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -3 }}>
                <div className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-orange-400 text-xs font-black">Q</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-800 popins mb-2 group-hover:text-orange-400 transition-colors">{faq.q}</h3>
                    <p className="text-slate-500 inter text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="w-full py-20 md:py-28 bg-white px-4 relative overflow-hidden">
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
              <Star className="w-3 h-3" /> Free Visa Consultation
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 popins mb-5 leading-tight">
            Let's Get Your<br /><span className="text-orange-400">Visa Approved</span>
          </h2>
          <p className="text-slate-600 inter text-base md:text-lg mb-5 max-w-xl mx-auto leading-relaxed">
            Our visa team is ready to review your profile, identify any risks, and build the strongest possible application for your target country.
          </p>
          <p className="text-slate-500 inter text-sm mb-10 max-w-2xl mx-auto leading-relaxed">
            Your free consultation includes a full profile review, a frank assessment of your visa prospects, a breakdown of the documents you'll need, and a clear timeline for the entire process. There is no obligation and no cost. Just honest, expert guidance from people who have navigated this process hundreds of times. Book your session today and take the first step toward that approval stamp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-base inter flex items-center justify-center gap-3 hover:bg-orange-500 transition-colors duration-300"
                whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }}>
                <Send className="w-5 h-5" />
                Book Free Consultation
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                className="px-10 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold text-base inter flex items-center justify-center gap-3 hover:border-orange-300 hover:text-orange-500 transition-all duration-300"
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