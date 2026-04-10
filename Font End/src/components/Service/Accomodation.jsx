import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home, MapPin, Shield, CheckCircle, ChevronRight, Bed, Coffee, Wifi,
  ArrowRight, Send, Star, Users, Globe, Award, Sparkles, Heart,
  AlertCircle, Landmark, Wallet, Eye, Key, LifeBuoy
} from "lucide-react";

export default function Accomodation() {
  const vp = { once: false, amount: 0.12 };

  const services = [
    {
      number: "01",
      title: "University Accommodation Liaison",
      desc: "We directly coordinate with your target university's housing department to explore on-campus options. From dormitories to university-managed residences, we ensure you have priority access to safe and convenient living spaces that keep you close to your classes and the student community.",
      icon: <Landmark className="w-6 h-6" />,
      tags: ["On-Campus", "Dorms", "University Managed"],
      color: "orange"
    },
    {
      number: "02",
      title: "Private Rental Assistance",
      desc: "For universities without on-campus housing, we step in to find verified private rentals. We guide you through the process of securing safe, affordable apartments and help you navigate complex lease agreements and local housing laws so you never feel overwhelmed by legal jargon.",
      icon: <Key className="w-6 h-6" />,
      tags: ["Apartments", "Lease Review", "Legal Guidance"],
      color: "blue"
    },
    {
      number: "03",
      title: "Homestay Arrangements",
      desc: "Experience true cultural immersion by living with a carefully vetted local family. This option provides a warm, family environment, home-cooked meals, and a faster way to improve your language skills while settling into your new country with the support of local hosts.",
      icon: <Coffee className="w-6 h-6" />,
      tags: ["Local Families", "Culture Immersion", "Safe Environment"],
      color: "orange"
    },
    {
      number: "04",
      title: "Temporary Housing Solutions",
      desc: "Arriving in a new country shouldn't mean staying in an expensive hotel indefinitely. We arrange short-term rentals or university guest houses for your first few weeks, giving you a base while we finalize your permanent accommodation or until your dorm is ready for check-in.",
      icon: <Bed className="w-6 h-6" />,
      tags: ["Short-term", "Arrival Support", "Bridge Housing"],
      color: "blue"
    },
    {
      number: "05",
      title: "Budget & Financial Guidance",
      desc: "Living costs vary wildly between cities. We provide detailed financial breakdowns for your destination, helping you budget for rent, utilities, and groceries. Our goal is to find you a comfortable home that fits your financial plan without compromising on safety or quality.",
      icon: <Wallet className="w-6 h-6" />,
      tags: ["Cost Analysis", "Budget Planning", "Utilities"],
      color: "orange"
    },
    {
      number: "06",
      title: "Pre-Departure Housing Briefings",
      desc: "Before you even pack your bags, we conduct detailed briefings on what to expect. We cover everything from how to use local appliances to neighborhood safety tips and waste management rules, ensuring you settle in without any 'culture shock' in your new home.",
      icon: <Eye className="w-6 h-6" />,
      tags: ["Orientation", "Neighborhood Tips", "Daily Life"],
      color: "blue"
    },
  ];

  const whySunrise = [
    {
      icon: <Heart className="w-5 h-5 text-orange-400" />,
      title: "Sincere & Cordial Service",
      desc: "We treat every student like family. Our team is dedicated to your well-being, ensuring you feel supported and heard throughout your housing search."
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-400" />,
      title: "Verified Safe Zones",
      desc: "We only recommend accommodation in neighborhoods verified for safety and student friendliness. Your security is our absolute priority."
    },
    {
      icon: <Award className="w-5 h-5 text-orange-400" />,
      title: "Standard Excellence",
      desc: "As the leading firm in Bangladesh, we maintain high service standards that other firms struggle to match. Reliability is our core promise."
    },
    {
      icon: <LifeBuoy className="w-5 h-5 text-blue-400" />,
      title: "Ongoing Support",
      desc: "Our job doesn't end when you move in. We remain available to assist with any housing-related issues throughout your entire stay abroad."
    },
  ];

  const differentiators = [
    {
      title: "Full Scholarship Integration",
      desc: "We specifically work with universities that offer full scholarships, ensuring that even your housing costs are minimized or fully covered whenever possible.",
      icon: <Sparkles className="w-5 h-5 text-orange-400" />
    },
    {
      title: "Virtual 360° Tours",
      desc: "Can't visit in person? We provide virtual tours of selected properties so you can see your new home before you even book your flight.",
      icon: <Eye className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Alumni Network Insights",
      desc: "Get real advice from Sunrise alumni already living in your target city. They know the best neighborhoods and the hidden gems for student life.",
      icon: <Users className="w-5 h-5 text-orange-400" />
    }
  ];

  const faqs = [
    {
      q: "When should I start looking for accommodation?",
      a: "As soon as you receive your university offer letter. In popular student cities (like London, Toronto, or Rome), housing markets move extremely fast. Starting 3–4 months before your intake ensures you get the best locations at the most affordable rates."
    },
    {
      q: "What is the average cost of student housing abroad?",
      a: "Costs vary significantly: $400–$800/month for shared housing in smaller cities, and $1,000–$1,800/month in major hubs like London or New York. We provide a city-specific cost breakdown during your consultation to help you plan accurately."
    },
    {
      q: "Are utilities (electricity, water, internet) usually included?",
      a: "In university dorms and homestays, utilities are almost always included. In private rentals, they are often extra. We help you review every contract to ensure you know exactly what is included in your rent and what isn't."
    },
    {
      q: "Is it better to live on-campus or off-campus?",
      a: "On-campus is great for first-year students to make friends and be close to classes. Off-campus often offers more independence and can sometimes be more budget-friendly if you share with other students. We weigh both options based on your personal preferences."
    },
    {
      q: "How does Sunrise ensure the safety of homestays?",
      a: "All our homestay families undergo a rigorous vetting process, including background checks and home inspections. We also collect regular feedback from students to ensure our host families maintain the highest standards of care and safety."
    },
  ];

  const stats = [
    { val: "100%", label: "Safe Housing Guarantee", icon: <Shield className="w-5 h-5" />, blue: true },
    { val: "500+", label: "Verified Properties", icon: <Home className="w-5 h-5" />, blue: false },
    { val: "24/7", label: "Ongoing Support", icon: <LifeBuoy className="w-5 h-5" />, blue: true },
    { val: "Free", label: "Initial Briefing", icon: <Star className="w-5 h-5" />, blue: false },
  ];

  return (
    <div className="w-full flex flex-col overflow-x-hidden pt-20">

      {/* ══════════ HERO ══════════ */}
      <section className="w-full relative min-h-[62vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img src="/accomodation.webp" alt="Accommodation" className="w-full h-full object-cover opacity-45" />
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
        </div>

        <motion.div className="z-10 max-w-4xl" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div className="flex justify-center mb-4" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest hover:text-orange-400 transition-colors bg-white/70 px-3 py-1.5 rounded-full border border-slate-200">
              Services <ChevronRight className="w-3 h-3" /> Accommodation
            </Link>
          </motion.div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 popins mb-5 leading-tight">
            Your <span className="text-orange-400">Secure Home</span><br />Away From Home
          </h1>
          <motion.p className="text-base md:text-xl text-slate-700 inter max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            Settling into a new country starts with the right roof over your head. We ensure your transition is seamless with safe, comfortable, and affordable housing solutions across the globe.
          </motion.p>
          <motion.p className="text-sm md:text-base text-slate-600 inter max-w-xl mx-auto leading-relaxed mt-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
            Don't let housing stress hamper your studies. Sunrise Education Consultants manages everything from university dorms to private rentals, so you can focus on what truly matters: your education.
          </motion.p>

          <motion.div className="flex flex-wrap justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            {stats.map((s, i) => (
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

      {/* ══════════ OUR SERVICES ══════════ */}
      <section className="w-full py-16 md:py-24 bg-slate-50 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 popins mb-4">Hassle-Free Housing Solutions</h2>
            <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full mb-5" />
            <p className="text-slate-500 inter text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Every university operates differently. Some provide on-campus housing, while others require private renting. We bridge the gap for you.
            </p>
          </motion.div>

          <motion.p className="text-center text-slate-400 inter text-sm max-w-2xl mx-auto mb-14 leading-relaxed"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.2 }}>
            Whether it's your first time abroad or you're looking for a better living environment, our comprehensive support covers every possible housing option to ensure your safety and academic success.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((step, i) => (
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

      {/* ══════════ WHY SUNRISE ══════════ */}
      <section className="w-full py-16 md:py-24 bg-white px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 popins mb-3">Why Choose Sunrise?</h2>
              <div className="w-16 h-1.5 bg-orange-400 rounded-full" />
            </div>
            <p className="text-slate-500 inter text-base md:text-lg max-w-lg leading-relaxed">
              Leading the way in Bangladesh with sincere, cordial, and standard services for every student.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySunrise.map((item, i) => (
              <motion.div key={i}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-orange-200 hover:bg-white transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}>
                <div className="mb-4 bg-white w-10 h-10 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-orange-50 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-800 popins mb-2 group-hover:text-orange-400 transition-colors">{item.title}</h3>
                <p className="text-slate-500 inter text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ DIFFERENTIATORS ══════════ */}
      <section className="w-full py-16 md:py-24 bg-slate-50 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-500 text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                <Sparkles className="w-3 h-3" /> Our Innovation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 popins mb-6 leading-tight">
                Beyond Standard Placement — We Ensure Your Comfort
              </h2>
              <p className="text-slate-600 inter leading-relaxed mb-5 text-lg">
                Most agencies stop once you have your visa. At Sunrise Education Consultants, we know that your journey is just beginning. A comfortable living environment is the foundation of academic success.
              </p>
              <p className="text-slate-600 inter leading-relaxed mb-5">
                Our differentiators lie in our deep connections with full-scholarship universities and our ability to provide real-time, verified housing data. We don't just send you to a city; we send you to a home.
              </p>
              <div className="flex flex-col gap-4 mt-8">
                {differentiators.map((diff, i) => (
                  <motion.div key={i} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm"
                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ delay: 0.2 + i * 0.1 }}>
                    <div className="shrink-0">{diff.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-800 popins text-sm mb-1">{diff.title}</h4>
                      <p className="text-slate-500 inter text-xs leading-relaxed">{diff.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div className="relative" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={vp} transition={{ duration: 0.7 }}>
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img src="/accomodation.webp" alt="Modern Housing" className="w-full h-full object-cover" />
              </div>
              {/* Overlay cards */}
              <motion.div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-[240px]"
                animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-green-100 text-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">Verified Property</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">Safety, proximity, and amenities checked by our local coordinators.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════ FAQs ══════════ */}
      <section className="w-full py-16 md:py-20 bg-white px-4 sm:px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div className="text-center mb-6"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 popins mb-3">Housing FAQs</h2>
            <div className="w-24 h-1.5 bg-blue-400 mx-auto rounded-full mb-5" />
            <p className="text-slate-500 inter text-base max-w-xl mx-auto leading-relaxed">
              Clearing your doubts about international student housing and our support services.
            </p>
          </motion.div>

          <div className="space-y-4 mt-10">
            {faqs.map((faq, i) => (
              <motion.div key={i}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-orange-200 transition-all duration-300 group"
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
      <section className="w-full py-20 md:py-28 bg-slate-50 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute -top-10 -right-10 w-56 h-56 bg-orange-400/8 rounded-3xl" style={{ rotate: 20 }}
            animate={{ rotate: [20, 28, 20] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-400/6 rounded-3xl" style={{ rotate: -16 }}
            animate={{ rotate: [-16, -24, -16] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        <motion.div className="max-w-3xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.8 }}>
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-100 text-orange-500 text-xs font-bold uppercase tracking-widest rounded-full">
              <Star className="w-3 h-3" /> Start Your Journey
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 popins mb-5 leading-tight">
            Find Your Perfect<br /><span className="text-orange-400">Student Home</span>
          </h2>
          <p className="text-slate-600 inter text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Ready to secure your accommodation abroad? Let our experts guide you to a safe, comfortable, and budget-friendly home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-base inter flex items-center justify-center gap-3 hover:bg-orange-500 transition-colors duration-300"
                whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }}>
                <Send className="w-5 h-5" />
                Get Housing Advice
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </Link>
            <Link to="/services">
              <motion.button
                className="px-10 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold text-base inter flex items-center justify-center gap-3 hover:border-orange-300 hover:text-orange-500 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }}>
                <Globe className="w-5 h-5" /> Other Services
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}