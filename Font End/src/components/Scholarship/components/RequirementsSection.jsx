import { motion } from 'framer-motion';

export default function RequirementsSection({ activeData, selectedCountry, vp }) {
    const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } } };
    const itemUp = { hidden: { opacity: 0, y: 60, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } } };
    const slideRight = { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };

    if (!activeData.reqs || activeData.reqs.length === 0) return null;

    return (
        <section className="py-16 md:py-32 px-4 md:px-6 bg-slate-900 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div className="mb-10 md:mb-24" variants={slideRight} initial="hidden" whileInView="visible" viewport={vp}>
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <motion.div className={`req-clip w-full md:w-[45%] h-auto md:h-24 ${activeData.accentColor} flex justify-center items-center py-5 md:py-0 shadow-2xl`}
                            whileHover={{ scale: 1.02 }}>
                            <span className="font-black text-2xl md:text-5xl popins text-white px-8 md:px-10 uppercase tracking-tighter">Requirements</span>
                        </motion.div>
                        <motion.div className="flex-1 h-px bg-white/20 hidden md:block"
                            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={vp} transition={{ duration: 1.2, delay: 0.3 }} />
                    </div>
                </motion.div>

                {/* Mobile */}
                <div className="mob-only">
                    {activeData.reqs.map((item, i) => (
                        <motion.div key={i} className={`mob-req-card ${item.border}`}
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={vp} transition={{ delay: i * 0.1, duration: 0.5 }}>
                            <h3 className="text-base font-black text-white popins mb-2 uppercase tracking-tighter">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag, idx) => (
                                    <span key={idx} className="px-3 py-1.5 bg-white/10 text-white text-[9px] font-black rounded-lg uppercase tracking-widest">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop */}
                <motion.div className="desk-only grid grid-cols-2 gap-10"
                    initial="hidden" whileInView="visible" viewport={vp} variants={container}>
                    {activeData.reqs.map((item, i) => (
                        <motion.div key={i + selectedCountry}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 p-14 rounded-[40px] hover:bg-white/10 transition-all duration-700 group"
                            variants={itemUp} whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.3 } }}>
                            <h3 className="text-3xl font-black text-white popins mb-6 uppercase tracking-tighter leading-none">{item.title}</h3>
                            <p className="text-slate-400 leading-relaxed mb-10 text-lg font-medium">{item.desc}</p>
                            <div className="flex flex-wrap gap-3">
                                {item.tags.map((tag, idx) => (
                                    <motion.span key={idx}
                                        className="px-5 py-2.5 bg-white/10 text-white text-[10px] font-black rounded-xl uppercase tracking-widest group-hover:bg-white/20 transition-colors"
                                        initial={{ opacity: 0, scale: 0.75 }} whileInView={{ opacity: 1, scale: 1 }} viewport={vp}
                                        transition={{ delay: 0.08 * idx + 0.15 * i, duration: 0.35 }}
                                        whileHover={{ scale: 1.12, transition: { duration: 0.2 } }}>
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
