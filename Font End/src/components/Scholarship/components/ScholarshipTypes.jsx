import { motion } from 'framer-motion';

export default function ScholarshipTypes({ activeData, selectedCountry, vp }) {
    const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } } };
    const itemUp = { hidden: { opacity: 0, y: 60, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } } };
    const slideLeft = { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
    const scaleIn = { hidden: { opacity: 0, scale: 0.82 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.75, ease: [0.34, 1.56, 0.64, 1] } } };

    if (!activeData.scholarships || activeData.scholarships.length === 0) {
        return <section className="py-24 text-center"><h2 className="text-2xl font-bold text-slate-400 uppercase tracking-[0.5em]">Coming Soon</h2></section>;
    }

    return (
        <>
            {/* Mobile scholarships */}
            <div className="mob-only py-10 bg-white">
                <motion.div className="px-4 mb-6" variants={slideLeft} initial="hidden" whileInView="visible" viewport={vp}>
                    <span className={`inline-block px-3 py-1 rounded-lg ${activeData.accentColor} text-white text-[9px] font-black uppercase tracking-widest mb-3`}>Opportunities</span>
                    <h2 className="text-3xl font-black text-slate-900 popins uppercase tracking-tighter leading-none">Scholarship<br/>Types</h2>
                </motion.div>
                <div className="mob-card-scroll">
                    {activeData.scholarships.map((item, i) => (
                        <motion.div key={i} className={`mob-card border-l-8 ${item.color} ${item.bg} rounded-r-3xl p-6`}
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                            viewport={vp} transition={{ delay: i * 0.1, duration: 0.5 }}>
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`w-6 h-0.5 ${activeData.accentColor}`} />
                                <span className="text-slate-400 text-[9px] font-black uppercase tracking-widest">{item.badge}</span>
                            </div>
                            <h3 className="text-lg font-black text-slate-900 popins mb-3 uppercase tracking-tighter leading-tight">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.content}</p>
                            <ul className="space-y-2">
                                {item.features.map((f, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-slate-700 text-xs font-bold">
                                        <div className={`w-2 h-2 rounded-full ${activeData.accentColor} shrink-0`} />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
                <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-2">← swipe to explore →</p>
            </div>

            {/* Desktop scholarships */}
            <section className="desk-only py-32 px-6 max-w-7xl mx-auto">
                <motion.div className="mb-24" variants={slideLeft} initial="hidden" whileInView="visible" viewport={vp}>
                    <motion.span className={`inline-block px-4 py-1.5 rounded-lg ${activeData.accentColor} text-white text-[10px] font-black uppercase tracking-widest mb-4 shadow-lg`}
                        variants={scaleIn} initial="hidden" whileInView="visible" viewport={vp}>Opportunities</motion.span>
                    <h2 className="text-7xl font-black text-slate-900 popins mb-6 uppercase tracking-tighter leading-[0.9]">Scholarship<br/>Classifications</h2>
                    <p className="text-slate-500 text-xl leading-relaxed font-medium max-w-3xl">Explore the diverse funding pathways available for international students in {activeData.heroText.bottom}.</p>
                </motion.div>
                <motion.div className="grid grid-cols-1 gap-10" initial="hidden" whileInView="visible" viewport={vp} variants={container}>
                    {activeData.scholarships.map((item, i) => (
                        <motion.div key={i + selectedCountry}
                            className={`group relative border-l-[12px] ${item.color} ${item.bg} p-16 rounded-r-[40px] transition-all duration-700 hover:-translate-y-2 overflow-hidden`}
                            variants={itemUp}
                            whileHover={{ x: 6, boxShadow: '0 25px 50px rgba(0,0,0,0.12)', transition: { duration: 0.25 } }}>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-1000" />
                            <div className="flex flex-col lg:flex-row gap-16 relative z-10">
                                <div className="lg:w-3/5">
                                    <div className="flex items-center gap-4 mb-6">
                                        <motion.div className={`h-1 ${activeData.accentColor}`} initial={{ width: 0 }} whileInView={{ width: 32 }} viewport={vp} transition={{ duration: 0.6, delay: 0.1 * i }} />
                                        <span className="text-slate-400 text-xs font-black uppercase tracking-widest">{item.badge}</span>
                                    </div>
                                    <h3 className="text-4xl font-black text-slate-900 popins mb-6 leading-tight uppercase tracking-tighter">{item.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-xl font-medium">{item.content}</p>
                                </div>
                                <motion.div className="lg:w-2/5" initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={vp} transition={{ duration: 0.55, delay: 0.2 + i * 0.05 }}>
                                    <div className="bg-white/70 backdrop-blur-md rounded-3xl p-10 border border-white/50 shadow-2xl">
                                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.3em] mb-8 pb-4 border-b border-slate-200">Key Provisions</h4>
                                        <ul className="space-y-6">
                                            {item.features.map((feat, idx) => (
                                                <motion.li key={idx} className="flex items-start gap-4 text-slate-700 font-bold text-base leading-tight"
                                                    initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={vp}
                                                    transition={{ delay: 0.1 * idx + 0.3, duration: 0.4 }}
                                                    whileHover={{ x: 10, transition: { duration: 0.2 } }}>
                                                    <div className={`w-3 h-3 rounded-full ${activeData.accentColor} shrink-0 mt-1`} />
                                                    {feat}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </>
    );
}
