import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap, FileCheck, Banknote, Home,
  Briefcase, PlaneTakeoff, Award, Users, Clock,
  ArrowRight, Send, Globe
} from "lucide-react";

export default function Service() {
  const services = [
    { title: "University Admission Process", desc: "Our experts guide you through the entire university application process, from choosing the right institution to securing your offer letter. We ensure your application stands out.", icon: <GraduationCap className="w-10 h-10 text-blue-400" />, image: "/study_abroad_for_visa_section.webp", accent: "blue", path: "/services/university-admission-process" },
    { title: "Visa Processing", desc: "Navigating visa requirements can be daunting. We provide comprehensive support to ensure your visa application is accurate, complete, and submitted on time.", icon: <FileCheck className="w-10 h-10 text-orange-400" />, image: "/visa_processing.webp", accent: "orange", path: "/services/visa-processing" },
    { title: "Scholarship Arrangement", desc: "We help identify and apply for various scholarships and financial aid opportunities to make your international education more affordable.", icon: <Banknote className="w-10 h-10 text-blue-400" />, image: "/scholarship_arrangement.webp", accent: "blue", path: "/services/scholarship-arrangement" },
    { title: "Accommodation Support", desc: "Finding a safe and comfortable place to live is crucial. We assist you in finding suitable accommodation that fits your budget near your university.", icon: <Home className="w-10 h-10 text-orange-400" />, image: "/accomodation.webp", accent: "orange", path: "/services/accommodation-support" },
    { title: "Post-Study Opportunity", desc: "Your journey doesn't end with graduation. We provide guidance on post-study work visas and career opportunities to help you build a global career.", icon: <Briefcase className="w-10 h-10 text-blue-400" />, image: "/carrier2.webp", accent: "blue", path: "/services/post-study-opportunity" },
    { title: "Pre-departure Help", desc: "Prepare for your new life abroad with our pre-departure briefings covering cultural adjustment, travel arrangements and essential packing lists.", icon: <PlaneTakeoff className="w-10 h-10 text-orange-400" />, image: "/departure_help.webp", accent: "orange", path: "/services/pre-departure-help" }
  ];

  const whyUs = [
    { title: "Expert Guidance", desc: "Our team of experienced consultants provides personalized advice tailored to your academic and career goals.", icon: <Award className="w-8 h-8 text-white" />, stat: "8+ Yrs" },
    { title: "High Success Rate", desc: "We take pride in our track record of successful admissions and visa approvals for thousands of students.", icon: <Users className="w-8 h-8 text-white" />, stat: "95%" },
    { title: "Timely Support", desc: "We understand the importance of deadlines and provide prompt assistance at every stage of your application.", icon: <Clock className="w-8 h-8 text-white" />, stat: "24/7" }
  ];

  const approachSteps = [
    { step: "01", title: "Discovery & Profile Synthesis", desc: "Every journey begins with understanding. Our expert consultants conduct a deep-dive session to evaluate your academic transcripts, extracurricular achievements, and personal ambitions.", side: "left" },
    { step: "02", title: "Curated Institutional Matching", desc: "Success is found where your goals meet the right environment. We move beyond generic rankings to provide a curated list of universities that align with your specific interests and budget.", side: "right" },
    { step: "03", title: "Editorial & Narrative Excellence", desc: "Your application needs to speak. Our specialized editorial team works one-on-one with you to transform standard essays into compelling narratives that resonate with committees.", side: "left" },
    { step: "04", title: "End-to-End Application Management", desc: "Complexity shouldn't be your concern. We handle the entire administrative lifecycle, from reviewing forms to coordinating the secure transfer of transcripts and scores.", side: "right" },
    { step: "05", title: "High-Stakes Visa & Financial Prep", desc: "The final step is the most critical. We provide a dedicated visa officer to guide you through the maze of financial documentation and embassy requirements with mock interviews.", side: "left" },
    { step: "06", title: "Global Transition & Integration", desc: "Our commitment extends beyond your departure date. We host exclusive pre-departure orientations covering essential life skills to ensure your smooth integration abroad.", side: "right" }
  ];

  const vp = { once: false, amount: 0.15 };

  return (
    <>
    <style>{`
      .mob-service-bento {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        padding: 0 16px;
      }
      .mob-service-bento > *:nth-child(1),
      .mob-service-bento > *:nth-child(4) { grid-column: 1 / 3; }

      .mob-why-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        padding: 0 16px;
      }
      .mob-why-grid > *:last-child { grid-column: 1 / 3; }

      .mob-roadmap-scroll {
        display: flex;
        gap: 14px;
        overflow-x: auto;
        padding: 8px 16px 16px;
        scroll-snap-type: x mandatory;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
      }
      .mob-roadmap-scroll::-webkit-scrollbar { display: none; }
      .mob-roadmap-card {
        min-width: 72vw;
        scroll-snap-align: start;
        flex-shrink: 0;
      }

      @media (min-width: 768px) {
        .mob-only { display: none !important; }
      }
      @media (max-width: 767px) {
        .desk-only { display: none !important; }
      }
    `}</style>

    <div className="w-full flex flex-col justify-center items-center overflow-x-hidden pt-20">

      {/* HERO */}
      <section className="w-full relative h-[70vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.5 }}
            src="/hero_bg.jpg" alt="Service Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div className="absolute -top-16 -right-16 w-72 h-72 bg-orange-400/10 rounded-3xl" style={{ rotate: 25 }}
            animate={{ rotate: [25, 45, 25], scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute top-10 right-24 w-36 h-36 bg-orange-300/15 rounded-2xl" style={{ rotate: 15 }}
            animate={{ rotate: [15, -15, 15], x: [0, -30, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute top-1/3 right-8 w-24 h-24 border-2 border-orange-300/30 rounded-xl" style={{ rotate: 20 }}
            animate={{ rotate: [20, 110, 20], opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute -bottom-10 -left-10 w-56 h-56 bg-blue-400/8 rounded-3xl" style={{ rotate: -20 }}
            animate={{ rotate: [-20, -40, -20], scale: [1, 1.15, 1], x: [0, 30, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute top-1/4 left-12 w-20 h-20 border-2 border-blue-300/25 rounded-lg" style={{ rotate: -12 }}
            animate={{ rotate: [-12, -100, -12], opacity: [0.2, 0.7, 0.2], y: [0, 40, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-orange-400/40"
            animate={{ y: [0, -20, 0], scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }} transition={{ duration: 5, repeat: Infinity }} />
          <motion.div className="absolute top-14 left-[48%] w-2 h-2 rounded-full bg-orange-300/30"
            animate={{ y: [0, -15, 0], scale: [1, 1.4, 1], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 5.5, repeat: Infinity, delay: 0.5 }} />
          <motion.div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full border-[16px] border-orange-200/20"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.6, 0.2], rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
          <motion.div className="absolute -top-8 left-1/4 w-28 h-28 rounded-full border-4 border-blue-300/15"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2], rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 1 }} />
          <motion.div className="absolute top-0 w-1 h-48 bg-gradient-to-b from-orange-300/0 via-orange-300/20 to-orange-300/0 rounded-full"
            style={{ left: '15%', rotate: 30, transformOrigin: 'top center' }}
            animate={{ opacity: [0.2, 0.8, 0.2], height: [192, 240, 192] }} transition={{ duration: 7, repeat: Infinity }} />
          <motion.div className="absolute top-0 w-1 h-40 bg-gradient-to-b from-blue-300/0 via-blue-300/20 to-blue-300/0 rounded-full"
            style={{ right: '20%', rotate: -25, transformOrigin: 'top center' }}
            animate={{ opacity: [0.1, 0.7, 0.1], height: [160, 200, 160] }} transition={{ duration: 8, repeat: Infinity, delay: 1.5 }} />
        </div>
        <motion.div className="z-10 max-w-4xl"
          initial="hidden" whileInView="visible" viewport={vp} 
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.15 }
            }
          }}>
          <motion.div className="flex justify-center mb-5"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}>
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 text-blue-500 text-xs font-bold uppercase tracking-widest rounded-full cursor-default">
              <Globe className="w-3 h-3 animate-pulse" /> Trusted by 1,200+ Students
            </motion.span>
          </motion.div>
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 popins mb-6 leading-[1.1]">
            Our{" "}
            <motion.span className="text-blue-400 relative inline-block" 
              animate={{ opacity: [1, 0.7, 1] }} transition={{ duration: 3, repeat: Infinity }}>
              Comprehensive
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-2 left-0 h-1.5 bg-orange-300/30 rounded-full" />
            </motion.span>{" "}Services
          </motion.h1>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="text-lg md:text-xl text-slate-600 inter max-w-2xl mx-auto leading-relaxed mb-8">
            Empowering your global education journey with expert guidance every step of the way. From first consultation to your final destination.
          </motion.p>
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
            }}
            className="flex justify-center mt-10">
            <motion.div className="flex flex-col items-center gap-1" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <div className="w-px h-10 bg-gradient-to-b from-slate-300 to-transparent rounded-full" />
              <div className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY US */}
      <section className="w-full py-20 bg-slate-50 flex flex-col justify-center items-center px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl w-full">
          <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800 popins mb-4">Why We are the Best?</h2>
            <div className="w-24 h-1.5 bg-orange-400 mx-auto rounded-full" />
          </motion.div>

          {/* mobile */}
          <div className="mob-only mob-why-grid">
            {whyUs.map((item, i) => (
              <motion.div key={i}
                className="bg-white rounded-2xl p-5 shadow-md flex flex-col items-center text-center relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={vp} transition={{ delay: i * 0.1, duration: 0.5 }}>
                <div className="absolute top-2 right-3 text-4xl font-black text-slate-50 popins select-none">{item.stat}</div>
                <div className="w-12 h-12 bg-blue-400 rounded-xl flex justify-center items-center mb-3 z-10">{item.icon}</div>
                <h3 className="text-sm font-bold text-slate-800 popins mb-1 z-10">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* desktop — original */}
          <div className="desk-only grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, index) => (
              <motion.div key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={vp} transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}>
                <motion.div className="w-16 h-16 bg-blue-400 rounded-2xl flex justify-center items-center mb-6"
                  whileHover={{ rotate: 6, scale: 1.08 }} transition={{ duration: 0.3 }}>
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-slate-800 popins mb-4">{item.title}</h3>
                <p className="text-slate-600 inter leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="w-full py-24 flex flex-col justify-center items-center px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl w-full">
          <motion.div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}>
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 popins mb-4">What We Provide</h2>
              <p className="text-slate-600 inter text-lg leading-relaxed">We offer a wide range of services designed to simplify your journey to international education. Each service is tailored to meet the unique needs of every student.</p>
            </div>
            <div className="w-full md:w-1/3 h-1 bg-blue-100 rounded-full hidden md:block mb-4" />
          </motion.div>

          {/* mobile bento */}
          <div className="mob-only mob-service-bento">
            {services.map((service, i) => (
              <Link to={service.path} key={i} className={`group block relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm ${i === 0 || i === 3 ? 'flex flex-row h-40' : 'flex flex-col'}`}>
                <motion.div
                  className="w-full h-full flex flex-col md:flex-row"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp} transition={{ delay: i * 0.07, duration: 0.5 }}>
                  {i === 0 || i === 3 ? (
                    <>
                      <div className="w-[45%] h-full relative overflow-hidden shrink-0">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute top-3 left-3 bg-white p-2 rounded-xl shadow">{service.icon}</div>
                      </div>
                      <div className="flex-1 p-4 flex flex-col justify-center">
                        <h3 className={`text-sm font-bold popins mb-1 ${service.accent === 'blue' ? 'text-blue-500' : 'text-orange-500'}`}>{service.title}</h3>
                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{service.desc}</p>
                        <div className={`mt-2 flex items-center gap-1 text-xs font-bold ${service.accent === 'blue' ? 'text-blue-400' : 'text-orange-400'}`}>
                          Learn More <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="h-28 relative overflow-hidden">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute top-2 right-2 bg-white p-1.5 rounded-lg shadow">{service.icon}</div>
                      </div>
                      <div className="p-3 flex flex-col flex-1">
                        <h3 className={`text-xs font-bold popins mb-1 leading-tight ${service.accent === 'blue' ? 'text-blue-500' : 'text-orange-500'}`}>{service.title}</h3>
                        <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-3 flex-1">{service.desc}</p>
                        <div className={`mt-2 flex items-center gap-1 text-[11px] font-bold ${service.accent === 'blue' ? 'text-blue-400' : 'text-orange-400'}`}>
                          Learn More <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* desktop — original */}
          <div className="desk-only grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <Link to={service.path} key={index} className="group block relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                <motion.div
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={vp} transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}>
                  <div className="h-48 overflow-hidden relative">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute top-4 right-4 bg-white p-3 rounded-2xl shadow-lg">{service.icon}</div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-800 popins mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                    <p className="text-slate-600 inter leading-relaxed mb-6">{service.desc}</p>
                    <div className="text-orange-400 font-bold inter flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC ROADMAP */}
      <section className="w-full py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <motion.div className="text-center mb-24"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 popins mb-6">Our Strategic Roadmap</h2>
            <div className="w-24 h-1.5 bg-blue-400 mx-auto rounded-full mb-8" />
            <p className="text-slate-600 inter text-lg max-w-2xl mx-auto leading-relaxed">
              We've developed a comprehensive, 6-step roadmap designed to navigate the complexities of global education with precision and unparalleled support.
            </p>
          </motion.div>

          {/* mobile — horizontal scroll */}
          <div className="mob-only mob-roadmap-scroll -mx-4">
            {approachSteps.map((item, i) => (
              <motion.div key={i} className="mob-roadmap-card bg-white rounded-2xl p-6 shadow-md border border-slate-100 relative overflow-hidden"
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={vp} transition={{ delay: i * 0.08, duration: 0.5 }}>
                <div className="absolute -top-2 -right-2 text-7xl font-black text-slate-50 popins select-none leading-none">{item.step}</div>
                <div className={`w-8 h-1 rounded-full mb-4 ${i % 2 === 0 ? 'bg-blue-400' : 'bg-orange-400'}`} />
                <h3 className="text-base font-bold text-slate-800 popins mb-3 leading-tight relative z-10">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{item.desc}</p>
                <div className={`mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black ${i % 2 === 0 ? 'bg-blue-50 text-blue-500' : 'bg-orange-50 text-orange-500'}`}>
                  Step {item.step}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mob-only text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-3">← swipe to explore →</p>

          {/* desktop — original timeline */}
          <div className="desk-only relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform -translate-x-1/2 rounded-full" />
            <div className="space-y-16 lg:space-y-24">
              {approachSteps.map((item, index) => (
                <div key={index} className={`relative flex flex-col lg:flex-row items-center ${item.side === 'right' ? 'lg:flex-row-reverse' : ''}`}>
                  <motion.div className="w-full lg:w-[45%] z-20"
                    initial={{ opacity: 0, x: item.side === 'left' ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }} viewport={vp} transition={{ duration: 0.6 }}>
                    <motion.div className="bg-white p-8 rounded-3xl shadow-md border border-slate-100 hover:border-blue-200 transition-all duration-300 group"
                      whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.07)' }}>
                      <div className="text-4xl font-black mb-4 text-slate-100 group-hover:text-blue-50 transition-colors popins">{item.step}</div>
                      <h3 className="text-2xl font-bold text-slate-800 popins mb-4">{item.title}</h3>
                      <p className="text-slate-600 inter leading-relaxed">{item.desc}</p>
                    </motion.div>
                  </motion.div>
                  <div className="hidden lg:flex w-[10%] justify-center items-center z-30">
                    <motion.div className="w-10 h-10 rounded-full bg-white border-4 border-blue-400 flex justify-center items-center shadow-lg"
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={vp}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}>
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                    </motion.div>
                  </div>
                  <div className="hidden lg:block w-[45%]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="w-full py-32 bg-white flex flex-col justify-center items-center px-4 overflow-hidden relative">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div className="absolute -bottom-16 -left-16 w-72 h-72 bg-orange-400/8 rounded-3xl" style={{ rotate: -20 }}
            animate={{ rotate: [-20, -28, -20], scale: [1, 1.05, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute top-1/3 -left-8 w-40 h-40 bg-orange-300/10 rounded-2xl" style={{ rotate: -14 }}
            animate={{ rotate: [-14, -22, -14] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bottom-16 right-20 w-28 h-28 border-2 border-orange-300/25 rounded-xl" style={{ rotate: 18 }}
            animate={{ rotate: [18, 26, 18], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute -top-10 -right-10 w-56 h-56 bg-blue-400/6 rounded-3xl" style={{ rotate: 22 }}
            animate={{ rotate: [22, 30, 22], scale: [1, 1.06, 1] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute top-16 left-16 w-20 h-20 border-2 border-blue-200/30 rounded-lg" style={{ rotate: 10 }}
            animate={{ rotate: [10, 18, 10], opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute -top-16 right-1/4 w-56 h-56 rounded-full border-[12px] border-orange-200/15"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute bottom-8 left-1/4 w-24 h-24 rounded-full border-4 border-blue-200/20"
            animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
          <motion.div className="absolute top-0 w-1 h-52 bg-gradient-to-b from-orange-300/0 via-orange-300/15 to-orange-300/0 rounded-full"
            style={{ right: '18%', rotate: 28, transformOrigin: 'top center' }}
            animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 6, repeat: Infinity }} />
          <motion.div className="absolute bottom-0 w-1 h-44 bg-gradient-to-t from-blue-300/0 via-blue-300/15 to-blue-300/0 rounded-full"
            style={{ left: '22%', rotate: -22, transformOrigin: 'bottom center' }}
            animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 7, repeat: Infinity, delay: 2 }} />
        </div>

        <motion.div className="max-w-4xl w-full flex flex-col items-center text-center relative z-10"
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.8 }}>

          <motion.div className="mb-6" initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 border border-orange-100 text-orange-500 text-xs font-bold uppercase tracking-widest rounded-full">
              Free Consultation Available
            </span>
          </motion.div>

          <motion.h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 popins mb-6 tracking-tight leading-tight"
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={vp} transition={{ duration: 0.6, delay: 0.1 }}>
            Feel Free To <br /><span className="text-blue-400">Contact Us</span>
          </motion.h2>

          <motion.p className="text-slate-600 inter text-lg md:text-xl mb-12 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.3 }}>
            Our expert consultants are ready to answer your questions and help you map out your international future.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0.4 }}>
            <Link to="/contact" className="w-full sm:w-auto">
              <motion.button
                className="w-full px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-base inter flex items-center justify-center gap-3 hover:bg-blue-500 transition-colors duration-300"
                whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }}>
                <Send className="w-5 h-5" />
                Get In Touch
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </Link>
            <motion.button
              className="w-full sm:w-auto px-10 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold text-base inter flex items-center justify-center gap-3 hover:border-blue-300 hover:text-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.03, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Globe className="w-5 h-5" />
              Explore Services
            </motion.button>
          </motion.div>

          {/* mobile trust strip */}
          <motion.div className="mob-only grid grid-cols-2 gap-3 w-full mb-10"
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ delay: 0.5 }}>
            {[
              { val: "1,200+", label: "Students Placed", blue: true },
              { val: "95%", label: "Visa Success", blue: false },
              { val: "30+", label: "Countries", blue: true },
              { val: "8+ Yrs", label: "Experience", blue: false },
            ].map((s, i) => (
              <div key={i} className={`rounded-2xl py-4 px-3 text-center border ${s.blue ? 'bg-blue-50 border-blue-100' : 'bg-orange-50 border-orange-100'}`}>
                <div className={`text-xl font-black popins ${s.blue ? 'text-blue-500' : 'text-orange-500'}`}>{s.val}</div>
                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div className="flex gap-6 items-center opacity-40"
            initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} viewport={vp} transition={{ delay: 0.55 }}>
            <div className="h-px w-20 bg-slate-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-orange-400" />
            <div className="h-px w-20 bg-slate-300" />
          </motion.div>
        </motion.div>
      </section>

    </div>
    </>
  );
}