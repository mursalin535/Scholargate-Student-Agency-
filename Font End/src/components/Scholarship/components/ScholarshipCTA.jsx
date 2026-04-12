import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function ScholarshipCTA({ activeData, selectedCountry, vp }) {
    const navigate = useNavigate();
    const slideUp = { hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
    const scaleIn = { hidden: { opacity: 0, scale: 0.82 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.75, ease: [0.34, 1.56, 0.64, 1] } } };

    return (
        <section className="py-20 md:py-48 px-4 md:px-6 relative overflow-hidden bg-white">
            <div className="max-w-6xl mx-auto text-center relative z-10">
                <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={vp}>
                    <motion.span className={`inline-block px-5 md:px-6 py-2 ${activeData.accentColor} text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] mb-8 md:mb-10 shadow-2xl`}
                        initial={{ opacity: 0, y: -24 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.6 }}>
                        {activeData.cta.tagline}
                    </motion.span>
                    <motion.h2 className="text-4xl md:text-9xl font-black text-slate-900 popins mb-8 md:mb-10 leading-[0.9] uppercase tracking-tighter"
                        dangerouslySetInnerHTML={{ __html: activeData.cta.title }}
                        variants={slideUp} initial="hidden" whileInView="visible" viewport={vp} />
                    <motion.p className="text-slate-500 text-base md:text-2xl mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed font-medium"
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.7, delay: 0.2 }}>
                        {activeData.cta.desc}
                    </motion.p>
                    <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6"
                        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.7, delay: 0.35 }}>
                        <motion.button
                            onClick={() => navigate('/apply', { state: { country: selectedCountry } })}
                            whileHover={{ scale: 1.07, y: -7, transition: { duration: 0.25 } }} whileTap={{ scale: 0.95 }}
                            className={`w-full sm:w-auto ${activeData.accentColor} text-white px-10 md:px-12 py-5 md:py-6 rounded-[24px] font-black uppercase tracking-widest text-base md:text-lg shadow-2xl`}>
                            Get Started Now →
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.07, backgroundColor: "#f8fafc", y: -7, transition: { duration: 0.25 } }} whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto bg-transparent border-4 border-slate-900 text-slate-900 px-10 md:px-12 py-5 md:py-6 rounded-[24px] font-black uppercase tracking-widest text-base md:text-lg">
                            Free Counseling
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-3 md:h-4 flex">
                {activeData.cta.footerColors.map((clr, i) => (
                    <motion.div key={i} className={`flex-1 ${clr}`}
                        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={vp}
                        transition={{ duration: 0.8, delay: i * 0.15 }} />
                ))}
            </div>
        </section>
    );
}
