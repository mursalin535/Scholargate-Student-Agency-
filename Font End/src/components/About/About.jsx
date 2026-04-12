import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaQuoteLeft, FaHistory, FaCheckCircle, FaFingerprint, FaShieldAlt, FaArrowRight, FaLightbulb, FaGlobeAmericas, FaAward } from "react-icons/fa";

const About = () => {
  // Global motion configuration for repeating animations
  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: false, amount: 0.2 },
  };

  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: false, amount: 0.2 },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: false, amount: 0.2 },
  };

  const scaleUp = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: false, amount: 0.2 },
  };

  return (
    <div className="w-full bg-[#FFFFFF] selection:bg-blue-100 overflow-hidden">
      {/* ─── HERO: CRAFTING GLOBAL LEGACIES ─── */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-16">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/40 -skew-x-12 transform translate-x-1/4 -z-10" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              {...slideInLeft}
              className="w-full md:w-1/2 flex flex-col items-start text-left"
            >
                <span className="bg-blue-600 text-white px-6 py-1 rounded-full font-bold popins text-[10px] tracking-[0.3em] uppercase mb-8">
                    Institutional Profile
                </span>
                <h1 className="text-6xl md:text-8xl font-black popins text-slate-900 leading-[1.05] mb-8 tracking-tighter">
                    Crafting <br />
                    <span className="italic text-blue-600">Global</span> <br />
                    Legacies.
                </h1>
                <p className="text-xl text-slate-600 inter-light leading-relaxed mb-10 border-l-4 border-orange-400 pl-6">
                    LEGACY SCHOLARGATE isn't just a consultancy. We are architects of international academic journeys, built on radical transparency and institutional excellence.  
                </p>
             
            </motion.div>

            <motion.div 
              {...slideInRight}
              className="w-full md:w-1/2 relative h-[500px] md:h-[700px]"
            >
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                    className="absolute inset-0 bg-slate-100 hexagon-v overflow-hidden shadow-2xl border-8 border-white"
                >
                    <img src="/about4.webp" className="w-full h-full object-cover" alt="Student" />
                </motion.div>
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: false }}
                  className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-400 hexagon-v z-20 flex flex-col items-center justify-center text-white p-6 text-center shadow-2xl"
                >
                    <p className="popins font-black text-3xl leading-none">100%</p>
                    <p className="popins font-bold text-[10px] tracking-widest uppercase">Success Rate</p>
                </motion.div>
                <div className="absolute top-10 -right-5 w-32 h-32 bg-blue-600 hexagon-v z-10 opacity-20 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── THE GENESIS: EXPANDED NARRATIVE ─── */}
      <section className="max-w-6xl mx-auto px-6 py-32 border-t border-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div {...slideInLeft} className="lg:col-span-5 flex flex-col gap-8">
                <div className="flex items-center gap-4 text-orange-500">
                    <FaHistory size={24} />
                    <span className="font-bold popins tracking-widest text-xs uppercase">Institutional Genesis</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black popins text-slate-900 leading-tight">
                    Bridging the <br /> Information <br /> Gap.
                </h2>
                <div className="w-24 h-2 bg-blue-600 rounded-full" />
                <p className="text-xl text-slate-400 inter font-light">
                    An editorial overview of our evolution from a student advocacy group into a premier consultancy for Australia, Canada, Italy, and New Zealand.
                </p>
            </motion.div>
            
            <motion.div {...slideInRight} className="lg:col-span-7 flex flex-col gap-8 text-lg text-slate-600 inter leading-relaxed">
                <p className="first-letter:text-6xl first-letter:font-black first-letter:text-slate-900 first-letter:mr-4 first-letter:float-left first-letter:popins">
                    LEGACY SCHOLARGATE was conceived as a corrective measure to a fragmented industry. We recognized that the "study-abroad" market was saturated with agents, but lacked genuine advocates. Ambitious students were frequently lost in a labyrinth of hidden fees, fragmented data, and non-specialized advice.
                </p>
                <p>
                    Our foundation was built to rectify this. We didn't want to be an agency that promised the world; we wanted to be the agency that mastered specific territories. By focusing exclusively on Australia, Canada, Italy, and New Zealand, we have been able to build direct, high-level relationships with institutional directorates, ensuring our students receive priority insights and transparent pathways that other generalist consultancies often overlook.
                </p>
                <p>
                    We operate with the precision of a research institute. Every student profile undergoes a rigorous "forensic" audit where we analyze not just academic history, but future career alignment and financial sustainability. This methodology has allowed us to maintain a record of near-perfect visa success and institutional placements over the last decade.
                </p>
                <p>
                    Our commitment extends beyond the application phase. We understand that moving to a new country is a monumental life event. Therefore, we have integrated a comprehensive pre-departure and post-arrival support network into our core services. We ensure that our students are not just accepted into universities, but are fully prepared for the cultural and professional landscapes they will inhabit.
                </p>
            </motion.div>
        </div>
      </section>

      {/* ─── IMMERSIVE MISSION ─── */}
      <section className="w-full flex flex-col md:flex-row min-h-[60vh] bg-slate-900 overflow-hidden group">
        <motion.div 
          {...slideInLeft}
          className="w-full md:w-1/2 relative overflow-hidden"
        >
            <img src="/mission.webp" className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" alt="Mission" />
            <div className="absolute inset-0 bg-blue-900/30" />
        </motion.div>
        <motion.div 
            {...slideInRight}
            className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center gap-8 relative"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 hexagon-v -mr-32 -mt-32" />
            <span className="text-orange-400 font-black popins tracking-[0.4em] uppercase text-xs">Our Mandate</span>
            <h3 className="text-4xl md:text-6xl font-black popins text-white">The Mission.</h3>
            <p className="text-xl text-slate-300 inter-light leading-relaxed">
                To dismantle the structural barriers to international education through radical transparency and ethical advocacy. We strive to provide a standard of support that ensures every student we represent is placed in an environment where their talent is nurtured and their future is secured. 
            </p>
            <div className="flex items-center gap-4 text-blue-400 font-bold popins hover:gap-6 transition-all cursor-pointer">
                OUR STRATEGIC PILLARS <FaArrowRight />
            </div>
        </motion.div>
      </section>

      {/* ─── IMMERSIVE VISION ─── */}
      <section className="w-full flex flex-col md:flex-row-reverse min-h-[60vh] bg-white overflow-hidden group">
        <motion.div 
          {...slideInRight}
          className="w-full md:w-1/2 relative overflow-hidden"
        >
            <img src="/vision.webp" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-all duration-1000" alt="Vision" />
            <div className="absolute inset-0 bg-slate-900/10" />
        </motion.div>
        <motion.div 
            {...slideInLeft}
            className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center gap-8 relative"
        >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-400/10 hexagon-v -ml-32 -mb-32" />
            <span className="text-blue-600 font-black popins tracking-[0.4em] uppercase text-xs">The Horizon</span>
            <h3 className="text-4xl md:text-6xl font-black popins text-slate-900">The Vision.</h3>
            <p className="text-xl text-slate-500 inter-light leading-relaxed">
                We envision a global academic ecosystem where talent is the only visa required. LEGACY SCHOLARGATE aims to set the global benchmark for student advocacy, fostering a world where international education is standardized, transparent, and accessible to every deserving mind.
            </p>
            <div className="space-y-4">
                {["10,000+ Global Success Stories by 2030", "Institutional Partner Excellence", "Standardized Student Welfare Protocols"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <FaCheckCircle className="text-orange-500" />
                        <span className="text-slate-800 font-bold popins text-sm tracking-tight">{item}</span>
                    </div>
                ))}
            </div>
        </motion.div>
      </section>

      {/* ─── LEADERSHIP & PHILOSOPHY ─── */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center">
        <motion.div {...fadeIn}>
            <div className="relative inline-block mb-12">
                <div className="w-40 h-40 md:w-56 md:h-56 bg-slate-100 hexagon-v overflow-hidden shadow-2xl border-4 border-white">
                    <img src="/ceo.webp" alt="Leadership" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl">
                    <FaQuoteLeft size={16} />
                </div>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-black popins text-slate-900 leading-[1.2] mb-10 tracking-tight">
                "We are not just facilitating study abroad; we are engineering global perspectives and securing academic legacies."
            </h3>
            <div className="flex flex-col items-center">
                <p className="text-blue-600 font-black popins tracking-[0.3em] uppercase text-xs mb-2">Directorate of Strategy</p>
                <p className="text-slate-400 inter font-bold tracking-tighter">LEGACY SCHOLARGATE</p>
            </div>
        </motion.div>
      </section>

      {/* ─── FOUNDATION STORY ─── */}
      <section className="bg-slate-50 py-32 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div {...slideInLeft} className="order-2 lg:order-1">
                    <div className="flex items-center gap-4 text-blue-600 mb-8">
                        <FaLightbulb size={24} />
                        <span className="font-black popins tracking-widest text-xs uppercase">The Foundation Story</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black popins text-slate-900 mb-8 leading-tight">Beyond the <br /> Paperwork.</h3>
                    <div className="space-y-6 text-lg text-slate-600 inter leading-relaxed">
                        <p>
                            LEGACY SCHOLARGATE was born out of a shared frustration with the traditional "agency" model. In the early days, our founders operated as a small, informal advocacy group for students who had been misled by predatory consultancies. We realized that the industry was optimized for university commissions rather than student success. 
                        </p>
                        <p>
                            The "Foundation" in our name is intentional. It represents our commitment to building a solid base for every student's future. Our first successful placement wasn't just a visa stamp; it was a realization that with the right data and honest guidance, a student from a modest background could excel at a top-tier Canadian research university. 
                        </p>
                        <p>
                            This success set the blueprint for our expansion. We decided to stop being generalists and start being specialists. We spent years on the ground in Australia, New Zealand, Canada, and Italy, vetting universities, understanding local job markets, and building the networks that our students now rely on. We didn't just want to send students away; we wanted to ensure they had a home and a future when they arrived.
                        </p>
                    </div>
                </motion.div>
                <motion.div {...slideInRight} className="order-1 lg:order-2">
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]">
                        <img src="/about1.webp" className="w-full h-full object-cover" alt="Foundation Days" />
                        <div className="absolute inset-0 bg-blue-900/10" />
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* ─── STRATEGIC EVOLUTION ─── */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
                <motion.span {...fadeIn} className="text-orange-500 font-black popins tracking-[0.4em] uppercase text-xs mb-4 block">Strategic Evolution</motion.span>
                <motion.h2 {...fadeIn} className="text-4xl md:text-6xl font-black popins text-slate-900 leading-none">A Decade of <br /> Growth.</motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { id: "01", title: "The Discovery Phase", desc: "Our first three years were dedicated to intensive market research and institutional vetting. We identified that Australia, Canada, Italy, and New Zealand offered the most robust legal protections and academic ROI for international students." },
                  { id: "02", title: "Network Integration", desc: "We transitioned from being external advisors to integrated partners. By building direct pipelines with university registrar offices, we eliminated the 'middleman' noise, ensuring our students' applications were prioritized." },
                  { id: "03", title: "Advocacy Standardization", desc: "In the last five years, we have standardized our 'Forensic Audit' methodology. Every application is now cross-verified by three separate departments to ensure zero errors and maximum visa success probability." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    {...fadeIn} 
                    transition={{ delay: idx * 0.2 }}
                    className="flex flex-col gap-6"
                  >
                      <div className="text-6xl font-black text-slate-100 popins">{item.id}</div>
                      <h4 className="text-2xl font-black popins text-slate-900">{item.title}</h4>
                      <p className="text-slate-500 inter leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* ─── STRATEGIC ROADMAP ─── */}
      <section className="bg-white py-32 relative overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-slate-900 rounded-full animate-spin-slow" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                <motion.div {...slideInLeft} className="lg:col-span-7">
                    <div className="flex items-center gap-4 text-blue-600 mb-8">
                        <FaGlobeAmericas size={24} />
                        <span className="font-black popins tracking-widest text-xs uppercase">Future Horizon</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black popins text-slate-900 mb-8 leading-tight">Our Strategic <br /> Roadmap.</h3>
                    <div className="space-y-6 text-xl text-slate-600 inter-light leading-relaxed">
                        <p>
                            As we look toward 2030, our roadmap is defined by the integration of technology and human empathy. We are currently developing a proprietary "Student Welfare AI" that will provide real-time immigration updates and academic risk assessments for our alumni across the globe.
                        </p>
                        <p>
                            Furthermore, we are expanding our physical presence. We are slated to open our "Student Success Hubs" in Toronto, Rome, Sydney, and Auckland by 2027. These will not be offices, but community spaces where our students can gather for networking, career mentorship, and legal support long after they have arrived.
                        </p>
                        <p>
                            Our goal is to create a lifelong ecosystem. We don't just want you to graduate; we want you to lead. We are building the infrastructure that will support the next generation of global innovators, ensuring that LEGACY SCHOLARGATE remains the most trusted name in international education.
                        </p>
                    </div>
                </motion.div>
                
                <motion.div {...slideInRight} className="lg:col-span-5 relative">
                    <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[600px] border-8 border-white group">
                        <img src="/countries.webp" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Global Reach" />
                        <div className="absolute inset-0 bg-blue-900/20" />
                        
                        <div className="absolute inset-0 p-8 flex flex-col justify-end gap-4">
                            <motion.div 
                              {...fadeIn}
                              transition={{ delay: 0.3 }}
                              className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 border border-white shadow-xl transform translate-x-10 group-hover:translate-x-0 transition-transform duration-500"
                            >
                                <FaAward className="text-orange-500 text-3xl mb-4" />
                                <p className="text-slate-900 font-black popins text-sm uppercase tracking-tighter">Award Winning Strategy</p>
                            </motion.div>
                            <motion.div 
                              {...fadeIn}
                              transition={{ delay: 0.5 }}
                              className="bg-blue-600/90 backdrop-blur-xl rounded-3xl p-6 border border-blue-400 shadow-xl transform -translate-x-10 group-hover:translate-x-0 transition-transform duration-500"
                            >
                                <FaCheckCircle className="text-white text-3xl mb-4" />
                                <p className="text-white font-black popins text-sm uppercase tracking-tighter">Institutional Priority</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* ─── CORE PILLARS & CONCLUSION ─── */}
      <section className="w-full py-24 bg-white border-t border-slate-50 pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { icon: <FaFingerprint />, title: "Forensics", desc: "Deep-dive academic profiling to identify your unique institutional match." },
                    { icon: <FaShieldAlt />, title: "Advocacy", desc: "Rigorous visa representation to ensure your rights are protected." },
                    { icon: <FaGraduationCap />, title: "Excellence", desc: "Maintaining the highest standards of documentation and ethics." },
                    { icon: <FaCheckCircle />, title: "Fulfillment", desc: "End-to-end support until your global dream is realized." }
                ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5 }} 
                      {...fadeIn}
                      transition={{ delay: i * 0.1 }}
                      className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col gap-6 group hover:bg-white hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl text-slate-800 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                            {item.icon}
                        </div>
                        <h4 className="text-xl font-black popins text-slate-900 uppercase tracking-tighter">{item.title}</h4>
                        <p className="text-slate-500 inter text-sm leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div {...scaleUp} className="mt-32 text-center max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-5xl font-black popins text-slate-900 mb-8">Ready to Write Your <br /> Global Story?</h3>
                <p className="text-lg text-slate-500 inter mb-10">
                    If you seek a transparent, professional, and strategic approach to your international education, our advisors are prepared to assist you in every step of the journey.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <button className="px-12 py-4 bg-blue-600 text-white rounded-xl font-black popins tracking-widest text-xs uppercase hover:bg-slate-900 transition-all shadow-xl shadow-blue-100">
                        Initiate Consultation
                    </button>
                    <button className="px-12 py-4 bg-white text-slate-900 border-2 border-slate-100 rounded-xl font-black popins tracking-widest text-xs uppercase hover:border-orange-400 transition-all">
                        Contact Advisor
                    </button>
                </div>
            </motion.div>
        </div>
      </section>

      <style>{`
        .popins { font-family: "Poppins", sans-serif; }
        .inter { font-family: "Inter", sans-serif; }
        .inter-light { font-family: "Inter", sans-serif; font-weight: 300; }
        .hexagon-v {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 100s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
