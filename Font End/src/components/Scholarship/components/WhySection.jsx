import { motion } from 'framer-motion';

export default function WhySection({ activeData, selectedCountry, vp }) {
    const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } } };
    const itemUp = { hidden: { opacity: 0, y: 60, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } } };
    const slideUp = { hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

    if (!activeData.why || activeData.why.length === 0) return null;

    return (
        <section className="py-16 md:py-32 bg-slate-50 px-4 md:px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div className="flex flex-col items-center mb-10 md:mb-24 text-center"
                    variants={slideUp} initial="hidden" whileInView="visible" viewport={vp}>
                    <h2 className="text-3xl md:text-8xl font-black text-slate-900 popins mb-4 md:mb-6 uppercase tracking-tighter leading-none">
                        Why It <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Stands Out</span>
                    </h2>
                    <motion.div className={`w-20 md:w-24 h-1.5 md:h-2 ${activeData.accentColor} rounded-full mb-4 md:mb-8`}
                        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={vp} transition={{ duration: 0.9, delay: 0.3 }} />
                    <p className="text-slate-500 text-sm md:text-xl font-medium max-w-2xl">Beyond the classroom, it's about the unique environment and global perspective you gain.</p>
                </motion.div>

                {/* Mobile */}
                <div className="mob-only mob-why-grid mb-4">
                    {activeData.why.map((item, i) => (
                        <motion.div key={i} className="relative overflow-hidden rounded-2xl cursor-pointer group"
                            style={{ height: i === 0 ? '100%' : 'auto' }}
                            initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }}
                            viewport={vp} transition={{ delay: i * 0.1, duration: 0.5 }}>
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" style={{ minHeight: i === 0 ? '340px' : '140px' }} />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent opacity-85" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <div className={`w-6 h-1 ${item.accent} mb-2 rounded-full`} />
                                <h3 className={`font-black text-white popins uppercase tracking-tighter leading-none ${i === 0 ? 'text-xl' : 'text-sm'}`}>{item.title}</h3>
                                {i === 0 && <p className="text-slate-300 text-xs mt-1 leading-relaxed">{item.desc}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop */}
                <motion.div className="desk-only grid grid-cols-4 gap-6"
                    initial="hidden" whileInView="visible" viewport={vp} variants={container}>
                    {activeData.why.map((item, i) => (
                        <motion.div key={i + selectedCountry}
                            className="relative h-[550px] overflow-hidden group rounded-[32px] cursor-pointer"
                            variants={itemUp} whileHover={{ y: -16, scale: 1.03, transition: { duration: 0.35 } }}>
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col justify-end h-full">
                                <motion.div className={`h-1.5 ${item.accent} mb-6 rounded-full`} initial={{ width: 0 }} whileInView={{ width: 48 }} viewport={vp} transition={{ duration: 0.6, delay: 0.15 * i }} />
                                <h3 className="text-3xl font-black text-white popins mb-4 leading-none uppercase tracking-tighter">{item.title}</h3>
                                <p className="text-slate-300 text-base font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 translate-y-4 group-hover:translate-y-0">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
