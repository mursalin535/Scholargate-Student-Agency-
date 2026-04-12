import { motion, AnimatePresence } from 'framer-motion';

export default function ScholarshipHero({ activeData, currentImage, setCurrentImage, selectedCountry }) {
    const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } };

    return (
        <>
            {/* ── MOBILE HERO ── */}
            <AnimatePresence mode="wait">
                <div className="mobile-hero" key={selectedCountry + "mob-hero"}>
                    <AnimatePresence mode="wait">
                        <motion.img key={currentImage + selectedCountry + "m"}
                            src={activeData.heroImages[currentImage]}
                            alt="Study Abroad"
                            className="mobile-hero-img"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.3 }}
                        />
                    </AnimatePresence>
                    <div className="mobile-hero-overlay" />

                    <motion.div className="absolute top-20 right-4 z-20"
                        initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}>
                        <div className={`${activeData.accentColor} text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full`}>
                            Global Excellence
                        </div>
                    </motion.div>

                    <div className="absolute top-20 left-4 flex flex-col gap-1.5 z-20">
                        {activeData.heroImages.map((_, i) => (
                            <button key={i} onClick={() => setCurrentImage(i)}
                                className={`w-1 rounded-full transition-all duration-300 ${i === currentImage ? 'h-6 bg-white' : 'h-2 bg-white/40'}`} />
                        ))}
                    </div>

                    <div className="mobile-hero-content">
                        <motion.div className="mobile-text-block mobile-text-top"
                            initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 50, damping: 18, delay: 0.1 }}>
                            <span className="text-5xl font-black popins text-white/90 uppercase tracking-tighter leading-none drop-shadow-lg">
                                {activeData.heroText.top}
                            </span>
                        </motion.div>
                        <motion.div className="mobile-text-block mobile-text-mid"
                            initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 50, damping: 18, delay: 0.2 }}>
                            <span className="text-5xl font-black popins text-white uppercase tracking-tighter leading-none">
                                {activeData.heroText.mid}
                            </span>
                        </motion.div>
                        <motion.div className="mobile-text-block mobile-text-bottom"
                            initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 50, damping: 18, delay: 0.3 }}>
                            <span className={`text-7xl font-black popins italic uppercase tracking-tighter leading-none`}
                                style={{ color: activeData.accentHex, textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
                                {activeData.heroText.bottom}
                            </span>
                        </motion.div>
                    </div>
                </div>
            </AnimatePresence>

            {/* ── DESKTOP HERO ── */}
            <AnimatePresence mode="wait">
                <motion.div key={selectedCountry + "hero"}
                    className='desktop-hero w-full h-[100vh] flex-row justify-center items-center overflow-hidden'
                    initial="hidden" animate="visible"
                    exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.35 } }}
                    variants={fadeIn}
                >
                    <div className={`hero-left-clip w-[50%] h-full relative overflow-hidden border-r-4 ${activeData.borderColor} transition-colors duration-700`}>
                        <AnimatePresence mode="wait">
                            <motion.img key={currentImage + selectedCountry + "d"}
                                src={activeData.heroImages[currentImage]} alt="Study Abroad"
                                className="absolute inset-0 w-full h-full object-cover"
                                initial={{ opacity: 0, scale: 1.15, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                            />
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute bottom-10 left-16 flex flex-col gap-2 z-20">
                            <motion.div className={`h-1.5 ${activeData.accentColor}`}
                                initial={{ width: 0 }} animate={{ width: 100 }}
                                transition={{ duration: 1, delay: 0.4 }} />
                            <motion.span className="text-white font-black uppercase tracking-[0.3em] text-xs opacity-90"
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}>
                                Global Excellence
                            </motion.span>
                        </div>
                    </div>

                    <div className='hero-right-clip w-[50%] h-full flex flex-col overflow-hidden'>
                        {[
                            {
                                text: activeData.heroText.top,
                                bg: activeData.heroColors.top,
                                dir: 300, delay: 0.1,
                                align: 'items-end',
                                padding: 'pb-6 pr-10',
                                textColor: selectedCountry === 'italy' ? 'text-slate-800' : 'text-white',
                            },
                            {
                                text: activeData.heroText.mid,
                                bg: 'bg-white',
                                dir: -300, delay: 0.2,
                                align: 'items-center',
                                padding: 'px-10',
                                textColor: 'text-slate-900',
                            },
                            {
                                text: activeData.heroText.bottom,
                                bg: activeData.heroColors.bottom,
                                dir: 300, delay: 0.3,
                                align: 'items-start',
                                padding: 'pt-6 pl-14',
                                textColor: 'text-white italic',
                            },
                        ].map((block, i) => (
                            <motion.div key={i}
                                className={`w-full h-[33.3%] ${block.bg} flex justify-center ${block.align} ${block.padding} overflow-hidden transition-colors duration-700`}
                                initial={{ x: block.dir, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 40, damping: 18, delay: block.delay }}>
                                <span
                                    className={`popins font-black leading-none uppercase tracking-tighter ${block.textColor}`}
                                    style={{
                                        fontSize: 'clamp(2rem, 5.5vw, 6.5rem)',
                                        whiteSpace: 'nowrap',
                                        display: 'block',
                                        maxWidth: '100%',
                                        overflow: 'hidden',
                                    }}>
                                    {block.text}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    );
}
