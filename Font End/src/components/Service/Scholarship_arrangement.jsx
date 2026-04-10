import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Banknote, Award, GraduationCap, Star, ChevronRight,
  FileText, Globe, Users, CheckCircle, ArrowRight,
  Send, TrendingUp, Shield, BookOpen, Sparkles,
  Heart, AlertCircle, Search, PenTool, Mic
} from "lucide-react";

export default function ScholarshipArrangement() {
  const vp = { once: false, amount: 0.12 };

  const scholarshipTypes = [
    {
      number: "01",
      title: "Merit-Based",
      desc: "Awarded on the strength of your academic record, standardized test scores, artistic achievements, or athletic performance. Many full-tuition merit scholarships are open to Bangladeshi students at top universities — but they require a strategically positioned application. We help you identify which merit criteria you're strongest in and lead your application with those strengths.",
      icon: <Award className="w-6 h-6" />,
      tags: ["Academic Record", "Test Scores", "Achievements"],
      color: "blue"
    },
    {
      number: "02",
      title: "Need-Based",
      desc: "Designed for students from financially constrained backgrounds, determined through family income, assets, and dependents. Many need-based scholarships are significantly under-applied for because students assume they won't qualify — we honestly assess your eligibility and build a compelling financial case that maximizes your award potential.",
      icon: <Banknote className="w-6 h-6" />,
      tags: ["Financial Need", "Family Income", "Asset Assessment"],
      color: "orange"
    },
    {
      number: "03",
      title: "Student-Specific",
      desc: "Targeted at students meeting particular demographic or background criteria — nationality, field, gender, community, or professional goals. There are dozens of Bangladesh-specific scholarship programs offered by governments and foundations that most students never discover. Our database covers programs the major public portals don't even list.",
      icon: <Users className="w-6 h-6" />,
      tags: ["Nationality", "Bangladesh-Specific", "Background"],
      color: "blue"
    },
    {
      number: "04",
      title: "Career-Specific",
      desc: "Awarded to students pursuing high-demand fields — engineering, nursing, education, public health, data science. Governments and industry bodies actively fund these to build global talent pipelines. If your target field qualifies, career-specific awards can be among the most accessible and generous scholarships available to you.",
      icon: <TrendingUp className="w-6 h-6" />,
      tags: ["Engineering", "Healthcare", "Tech Fields"],
      color: "orange"
    },
    {
      number: "05",
      title: "University Scholarships",
      desc: "Offered directly by your target institution to highly qualified international applicants, ranging from partial fee waivers to full scholarships with stipends. Many are automatically considered during admissions — but some require a separate application that most students miss entirely. We track these for every institution on your shortlist so nothing slips through.",
      icon: <GraduationCap className="w-6 h-6" />,
      tags: ["Fee Waivers", "Full Scholarships", "Stipends"],
      color: "blue"
    },
    {
      number: "06",
      title: "Government Programs",
      desc: "National and bilateral programs funded by destination governments — Chevening (UK), Australia Awards, Chinese Government Scholarships, Commonwealth Scholarships, Erasmus Mundus (EU). These carry exceptional prestige, cover full costs, and are actively accessible to Bangladeshi students. We guide you through every stage of these structured application processes.",
      icon: <Globe className="w-6 h-6" />,
      tags: ["Chevening", "Fulbright", "Australia Awards"],
      color: "orange"
    },
  ];

  const howWeHelp = [
    {
      icon: <Search className="w-5 h-5 text-blue-400" />,
      title: "Scholarship Search & Matching",
      desc: "We run a targeted search across universities, government programs, private foundations, and bilateral aid organizations — matched specifically to your academic profile, destination country, field of study, and financial situation. You receive a prioritized shortlist of scholarships you can realistically win, not a generic database dump."
    },
    {
      icon: <PenTool className="w-5 h-5 text-orange-400" />,
      title: "Application & Essay Coaching",
      desc: "Scholarship essays are where most applications are won or lost. Our specialist coaches work with you across multiple drafts to transform your personal statement into a compelling case for why you specifically deserve this award. We help you identify the experiences and goals that resonate most powerfully with each committee."
    },
    {
      icon: <FileText className="w-5 h-5 text-blue-400" />,
      title: "Document Preparation",
      desc: "From recommendation letter briefings to transcript authentication and financial documentation structuring, we manage the entire document workflow. Scholarship applications are rejected for documentation errors at a surprisingly high rate — our review process eliminates this risk before a single file is submitted."
    },
    {
      icon: <Mic className="w-5 h-5 text-orange-400" />,
      title: "Interview Preparation",
      desc: "Prestigious scholarships like Chevening, Commonwealth, and Fulbright include structured interview rounds with experienced panels. We run mock sessions that mirror the real format — covering academic motivations, leadership, and post-graduation plans — until your answers are clear, confident, and genuinely compelling."
    },
  ];

  const featuredScholarships = [
    { name: "Chevening", country: "🇬🇧 United Kingdom", type: "Full Scholarship", level: "Postgraduate", note: "UK Foreign Office leadership program — one of the most prestigious globally." },
    { name: "Commonwealth", country: "🇬🇧 United Kingdom", type: "Full Scholarship", level: "Master's & PhD", note: "Funded by UK FCDO; open to Bangladeshi students across all disciplines." },
    { name: "Australia Awards", country: "🇦🇺 Australia", type: "Full Scholarship", level: "Postgraduate", note: "Australian Government; covers tuition, return airfare & living stipend." },
    { name: "Chinese Govt", country: "🇨🇳 China", type: "Full Scholarship", level: "UG, Master's, PhD", note: "Covers tuition, accommodation & monthly stipend at top universities." },
    { name: "Erasmus Mundus", country: "🇪🇺 European Union", type: "Full Scholarship", level: "Master's", note: "Study across 2–3 EU countries with all costs plus monthly allowance." },
    { name: "Fulbright", country: "🇺🇸 United States", type: "Full Scholarship", level: "Postgraduate", note: "US government-funded; among the most respected academic awards worldwide." },
    { name: "DAAD", country: "🇩🇪 Germany", type: "Partial–Full", level: "All levels", note: "German Academic Exchange Service — wide range across all disciplines." },
    { name: "ADB-JSP", country: "🌏 Asia-Pacific", type: "Full Scholarship", level: "Master's", note: "Asian Development Bank; development-related postgraduate programs." },
  ];

  const faqs = [
    {
      q: "How early should I start looking for scholarships?",
      a: "Ideally 9–12 months before your target intake. The most prestigious scholarships — Chevening, Australia Awards, Fulbright — open applications 10–12 months before the intake they fund. Starting late means missing these entirely, which is why we always advise beginning your scholarship search at the same time you start your university research."
    },
    {
      q: "Can I apply for multiple scholarships at the same time?",
      a: "Absolutely — and we strongly encourage it. We recommend applying to at least 5–8 scholarships simultaneously, across a mix of reach, match, and likely awards. Most scholarships don't prohibit concurrent applications, and the effort investment in tailoring each application properly is what we help you manage."
    },
    {
      q: "What makes a scholarship essay stand out?",
      a: "Specificity and authenticity. Committees read hundreds of generic essays about 'making a difference' — what they remember are applications that connect a very particular life experience to a very clear professional goal, then explain convincingly why this specific scholarship and program is the right vehicle for that goal. We help you find and articulate that connection."
    },
    {
      q: "Do I need top grades to win a scholarship?",
      a: "For merit-based awards, strong academic performance is important — but rarely the only factor. Leadership, community contribution, research experience, and a compelling personal narrative often matter as much as GPA. Need-based and career-specific scholarships assess entirely different criteria. We evaluate your full profile to identify the types of scholarships where your strengths are strongest."
    },
    {
      q: "What happens if I don't win a scholarship in the first round?",
      a: "Many scholarship committees provide feedback on unsuccessful applications, which is enormously valuable for a second attempt. We analyze any feedback with you, identify what needs to be strengthened, and help you reapply in the next cycle with a materially improved application. Several of our students have won scholarships on their second or third application."
    },
    {
      q: "Are there scholarships specifically for Bangladeshi students?",
      a: "Yes — more than most students realize. The Bangladesh Education Ministry facilitates several bilateral scholarship agreements. The Commonwealth Scholarship Commission specifically allocates places for Bangladeshi applicants. The Chinese Government Scholarship has a dedicated Bangladesh quota. And many universities in the UK, Australia, and Canada have institution-specific bursaries for students from South Asia. We track all of these."
    },
  ];

  const stats = [
    { val: "50+", label: "Scholarship Programs", icon: <Award className="w-5 h-5" />, blue: true },
    { val: "30+", label: "Destination Countries", icon: <Globe className="w-5 h-5" />, blue: false },
    { val: "Full & Partial", label: "Award Types", icon: <Banknote className="w-5 h-5" />, blue: true },
    { val: "Free", label: "First Consultation", icon: <Star className="w-5 h-5" />, blue: false },
  ];

  const tips = [
    { title: "Start at Least 9 Months Early", desc: "The most valuable scholarships have early deadlines and multi-stage processes. Students who start 9–12 months before their intake have a dramatically higher success rate." },
    { title: "Apply to Multiple Awards", desc: "Never rely on a single application. We recommend 5–8 simultaneously — a mix of reach, match, and likely awards." },
    { title: "Tailor Every Essay", desc: "Generic essays are immediately recognizable and consistently rejected. Each committee has specific values — your essay must speak directly to those." },
    { title: "Brief Your Recommenders", desc: "A weak reference letter can undermine an otherwise excellent application. We brief your recommenders on what committees look for." },
  ];

  return (
    <div className="w-full flex flex-col overflow-x-hidden pt-20">

      {/* ══════════ HERO ══════════ */}
      <section className="w-full relative min-h-[62vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img src="/scholarship_arrangement.webp" alt="Scholarship Arrangement" className="w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/20 to-white/75" />
        </div>

        {/* geometric accents */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div className="absolute -top-10 -right-10 w-60 h-60 bg-blue-400/10 rounded-3xl" style={{ rotate: 20 }}
            animate={{ rotate: [20, 28, 20] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute top-8 right-20 w-28 h-28 border-2 border-blue-300/25 rounded-2xl" style={{ rotate: 12 }}
            animate={{ rotate: [12, 20, 12], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 7, repeat: Infinity }} />
          <motion.div className="absolute -bottom-8 -left-8 w-48 h-48 bg-orange-400/8 rounded-3xl" style={{ rotate: -18 }}
            animate={{ rotate: [-18, -26, -18] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bottom-10 left-20 w-16 h-16 border-2 border-orange-300/20 rounded-lg" style={{ rotate: -10 }}
            animate={{ rotate: [-10, -18, -10], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 8, repeat: Infinity }} />
          <motion.div className="absolute -bottom-16 -right-16 w-52 h-52 rounded-full border-[12px] border-blue-200/15"
            animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        <motion.div className="z-10 max-w-4xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div className="flex justify-center mb-4" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-blue-400 transition-colors bg-white/70 px-3 py-1.5 rounded-full border border-slate-200">
              Services <ChevronRight className="w-3 h-3" /> Scholarship Arrangement
            </Link>
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 popins mb-5 leading-tight">
            Fund Your <span className="text-blue-400">Dream</span><br />Education
          </h1>
          <motion.p className="text-base md:text-xl text-slate-700 inter max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Financial constraints should never stand between a brilliant student and a world-class education. We identify, target, and help you win funding from universities, governments, and global foundations.
          </motion.p>
          <motion.p className="text-sm md:text-base text-slate-600 inter max-w-xl mx-auto leading-relaxed mt-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
            We've helped Bangladeshi students secure partial and full scholarships across 30+ countries. The opportunities exist — most students simply don't know where to find them, or how to apply successfully when they do.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            {[
              { val: "50+", label: "Scholarship Types" },
              { val: "30+", label: "Countries" },
              { val: "1,200+", label: "Students Helped" },
              { val: "Free", label: "Consultation" },
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
                <div className={`text-2xl font-black popins ${s.blue ? 'text-blue-500' : 'text-orange-500'}`}>{s.val}</div>
                <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ 6 SCHOLARSHIP TYPES ══════════ */}
      <section className="w-full py-16 md:py-24 bg-slate-50 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 popins mb-4">Types of Scholarships</h2>
            <div className="w-24 h-1.5 bg-blue-400 mx-auto rounded-full mb-5" />
            <p className="text-slate-500 inter text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              The scholarship landscape is far broader than most students realize. Beyond well-known merit awards, there are dozens of targeted programs — including several specifically designed for Bangladeshi students studying abroad.
            </p>
          </motion.div>

          <motion.p className="text-center text-slate-400 inter text-sm max-w-2xl mx-auto mb-14 leading-relaxed"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.2 }}>
            We've built our scholarship database over 8+ years of active placement work — it includes programs that most public scholarship portals don't list, bilateral government agreements, and institution-specific awards that require insider knowledge to even know exist.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {scholarshipTypes.map((item, i) => (
              <motion.div key={i}
                className={`group relative bg-white rounded-3xl p-7 border-2 ${item.color === 'blue' ? 'border-blue-100 hover:border-blue-300' : 'border-orange-100 hover:border-orange-300'} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden`}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -6 }}>
                {/* watermark number */}
                <div className={`absolute -top-3 -right-1 text-7xl font-black select-none leading-none ${item.color === 'blue' ? 'text-blue-50' : 'text-orange-50'}`}>{item.number}</div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${item.color === 'blue' ? 'bg-blue-50 text-blue-400' : 'bg-orange-50 text-orange-400'}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 popins mb-3 relative z-10">{item.title}</h3>
                <p className="text-slate-500 inter text-sm leading-relaxed mb-5 relative z-10">{item.desc}</p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {item.tags.map((tag, ti) => (
                    <span key={ti} className={`px-3 py-1 rounded-full text-[11px] font-bold ${item.color === 'blue' ? 'bg-blue-50 text-blue-500' : 'bg-orange-50 text-orange-500'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HOW WE HELP — two-column section ══════════ */}
      <section className="w-full py-16 md:py-24 bg-white px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-500 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                <Sparkles className="w-3 h-3" /> How We Support You
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 popins mb-6 leading-tight">
                We Manage the Entire Process — Not Just the Search
              </h2>
              <p className="text-slate-600 inter leading-relaxed mb-5 text-lg">
                Most students who try to navigate scholarships alone spend weeks building a shortlist, then submit generic applications that never stand a chance. The difference between students who secure funding and those who don't rarely comes down to qualifications — it comes down to process, presentation, and knowing which opportunities to target in the first place.
              </p>
              <p className="text-slate-600 inter leading-relaxed mb-5">
                Our scholarship support service covers every stage of the process. From the initial database search tailored to your specific profile, to essay coaching across multiple drafts, to full document preparation and mock interview sessions for competitive award programs — we are involved at every point where applications are won or lost.
              </p>
              <p className="text-slate-600 inter leading-relaxed mb-8">
                We've developed this process over 8+ years of active placement work. The result is a consistent track record of students securing awards they didn't know they were eligible for — because someone who knew the landscape showed them where to look and how to apply.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Dedicated scholarship advisor from first session",
                  "Prioritized shortlist based on your real eligibility",
                  "Essay coaching across multiple drafts",
                  "Document audit before every submission",
                  "Mock interview prep for competitive programs",
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
              {howWeHelp.map((item, i) => (
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

      {/* ══════════ FEATURED SCHOLARSHIPS ══════════ */}
      <section className="w-full py-16 md:py-20 bg-slate-50 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 popins mb-3">Featured Scholarships for Bangladeshi Students</h2>
              <div className="w-16 h-1.5 bg-orange-400 rounded-full" />
            </div>
            <p className="text-slate-500 inter text-base md:text-lg max-w-lg leading-relaxed">
              Prestigious, fully-funded programs actively accessible to Bangladeshi applicants right now.
            </p>
          </motion.div>

          <motion.p className="text-slate-500 inter text-base leading-relaxed max-w-3xl mb-12"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.15 }}>
            These are among the most competitive and rewarding scholarship programs in the world — and all of them have awarded places to Bangladeshi students in recent years. Many cover full costs including tuition, accommodation, flights, and a monthly living stipend. The key is knowing the process, starting early, and building an application that speaks directly to what each committee values.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredScholarships.map((s, i) => (
              <motion.div key={i}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -4 }}>
                <div className="text-3xl mb-3">{s.country.split(' ')[0]}</div>
                <h3 className="text-base font-black text-slate-800 popins mb-1 group-hover:text-blue-400 transition-colors">{s.name}</h3>
                <div className="text-xs text-slate-400 inter mb-3">{s.country.substring(3)}</div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full border border-blue-100">{s.type}</span>
                  <span className="px-2 py-0.5 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-full border border-slate-100">{s.level}</span>
                </div>
                <p className="text-slate-500 inter text-xs leading-relaxed">{s.note}</p>
              </motion.div>
            ))}
          </div>

          <motion.div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-5 flex gap-4 items-start"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <p className="text-blue-700 inter text-sm leading-relaxed">
              <span className="font-bold">Did you know:</span> This list represents only a fraction of available scholarships. Our database includes hundreds of institution-specific, foundation-funded, and bilateral programs that don't appear on public portals — many with significantly less competition because fewer students know about them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ══════════ APPLICATION TIPS ══════════ */}
      <section className="w-full py-16 md:py-20 bg-white px-4 sm:px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 popins mb-3">Tips for a Winning Application</h2>
            <div className="w-24 h-1.5 bg-blue-400 mx-auto rounded-full mb-5" />
            <p className="text-slate-500 inter text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              After reviewing hundreds of successful and unsuccessful scholarship applications, we've identified what consistently separates funded students from rejected ones.
            </p>
          </motion.div>

          <motion.p className="text-center text-slate-400 inter text-sm max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.2 }}>
            These aren't generic tips — they're the specific practices that move the needle. Academic excellence alone is rarely the deciding factor. Committees select people they believe will go on to do meaningful things, and your application needs to communicate that story.
          </motion.p>

          <div className="space-y-4">
            {tips.map((tip, i) => (
              <motion.div key={i}
                className="flex gap-5 items-start relative"
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={vp} transition={{ delay: i * 0.08, duration: 0.5 }}>
                <div className={`w-4 h-4 rounded-full shrink-0 mt-1 z-10 hidden md:block ${i % 2 === 0 ? 'bg-blue-400' : 'bg-orange-400'}`} />
                <div className="flex-1 bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-blue-200 hover:bg-white transition-all duration-300 flex flex-col sm:flex-row sm:items-start gap-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-black text-white shrink-0 self-start ${i % 2 === 0 ? 'bg-blue-400' : 'bg-orange-400'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-slate-700 inter text-sm font-bold mb-1">{tip.title}</p>
                    <p className="text-slate-500 inter text-sm leading-relaxed">{tip.desc}</p>
                  </div>
                  <CheckCircle className="w-4 h-4 text-slate-200 ml-auto shrink-0 hidden sm:block mt-0.5" />
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
              The questions we hear most often from students at their first scholarship consultation — answered with the detail they deserve.
            </p>
          </motion.div>

          <div className="space-y-4 mt-10">
            {faqs.map((faq, i) => (
              <motion.div key={i}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-200 transition-all duration-300 group"
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
      <section className="w-full py-20 md:py-28 bg-white px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute -top-10 -right-10 w-56 h-56 bg-blue-400/8 rounded-3xl" style={{ rotate: 20 }}
            animate={{ rotate: [20, 28, 20] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-400/6 rounded-3xl" style={{ rotate: -16 }}
            animate={{ rotate: [-16, -24, -16] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute top-1/2 right-8 w-20 h-20 border-2 border-blue-300/20 rounded-xl" style={{ rotate: 12 }}
            animate={{ rotate: [12, 20, 12], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 7, repeat: Infinity }} />
          <motion.div className="absolute bottom-8 left-1/4 w-14 h-14 border-2 border-orange-300/20 rounded-lg" style={{ rotate: -8 }}
            animate={{ rotate: [-8, -16, -8], opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 8, repeat: Infinity }} />
        </div>

        <motion.div className="max-w-3xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.8 }}>
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-500 text-xs font-bold uppercase tracking-widest rounded-full">
              <Star className="w-3 h-3" /> Free Scholarship Consultation
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 popins mb-5 leading-tight">
            Let's Find Your<br /><span className="text-blue-400">Scholarship</span>
          </h2>
          <p className="text-slate-600 inter text-base md:text-lg mb-5 max-w-xl mx-auto leading-relaxed">
            Your first consultation is free. We'll assess your profile, identify your strongest opportunities, and build a prioritized application plan.
          </p>
          <p className="text-slate-500 inter text-sm mb-10 max-w-2xl mx-auto leading-relaxed">
            Most students who come to us are surprised by how many scholarships they're eligible for — awards they had no idea existed. In 45 minutes, we'll show you exactly what your funding landscape looks like and what it takes to secure it. No obligation. No cost. Just honest, expert guidance from people who have navigated this process hundreds of times.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-base inter flex items-center justify-center gap-3 hover:bg-blue-500 transition-colors duration-300"
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

