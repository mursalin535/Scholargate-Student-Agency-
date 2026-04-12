import { motion } from 'framer-motion';

export default function UniversityGrid({ activeData, selectedCountry, vp }) {
    const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } } };
    const itemUp = { hidden: { opacity: 0, y: 60, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } } };
    const slideLeft = { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };

    if (!activeData.unis || activeData.unis.length === 0) return null;

    return (
        <section className="py-16 md:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.div className="flex flex-col md:flex-row items-end justify-between mb-10 md:mb-24 gap-6"
                    variants={slideLeft} initial="hidden" whileInView="visible" viewport={vp}>
                    <div>
                        <h2 className="text-3xl md:text-8xl font-black text-slate-900 popins mb-4 uppercase tracking-tighter leading-none">
                            Premier<br/><span className="italic text-slate-400">Institutions</span>
                        </h2>
                        <p className="text-slate-500 text-sm md:text-xl max-w-2xl font-medium">Shape your future at world-class centers of academic excellence.</p>
                    </div>
                    <motion.div className={`hidden md:block w-40 h-3 ${activeData.accentColor} rounded-full`}
                        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={vp} transition={{ duration: 1.1 }} />
                </motion.div>

                {/* Mobile */}
                <div className="mob-only mob-uni-scroll -mx-4">
                    {activeData.unis.map((uni, i) => (
                        <motion.div key={i} className="mob-uni-card bg-slate-50 rounded-3xl overflow-hidden border border-slate-100"
                            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
                            viewport={vp} transition={{ delay: i * 0.08, duration: 0.5 }}>
                            <div className="h-44 overflow-hidden relative">
                                <img src={uni.img} alt={uni.name} className="w-full h-full object-cover" />
                                <div className={`absolute bottom-0 left-0 right-0 h-1 ${activeData.accentColor}`} />
                            </div>
                            <div className="p-5">
                                <span className="text-slate-400 text-[9px] font-black uppercase tracking-[0.3em] block mb-2">{uni.tag}</span>
                                <h3 className="text-base font-black text-slate-900 popins mb-2 uppercase tracking-tighter leading-tight">{uni.name}</h3>
                                <p className="text-slate-500 text-xs leading-relaxed">{uni.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <p className="mob-only text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-3">← swipe to explore →</p>

                {/* Desktop */}
                <motion.div className="desk-only grid grid-cols-2 gap-12"
                    initial="hidden" whileInView="visible" viewport={vp} variants={container}>
                    {activeData.unis.map((uni, i) => (
                        <motion.div key={i + selectedCountry}
                            className="bg-slate-50 rounded-[40px] overflow-hidden flex flex-col lg:flex-row group border border-slate-100"
                            variants={itemUp} whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(0,0,0,0.10)', transition: { duration: 0.3 } }}>
                            <div className="w-full lg:w-[45%] h-64 lg:h-auto overflow-hidden">
                                <img src={uni.img} alt={uni.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                            </div>
                            <div className="p-12 lg:w-[55%] flex flex-col justify-center relative bg-white">
                                <motion.div className={`absolute top-0 left-0 w-1 ${activeData.accentColor}`} initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={vp} transition={{ duration: 0.7, delay: 0.1 * i }} />
                                <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">{uni.tag}</span>
                                <h3 className="text-3xl font-black text-slate-900 popins mb-6 leading-tight uppercase tracking-tighter group-hover:text-blue-700 transition-colors">{uni.name}</h3>
                                <p className="text-slate-500 text-base leading-relaxed font-medium">{uni.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
