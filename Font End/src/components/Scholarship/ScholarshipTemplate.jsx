import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ScholarshipTemplate({ contentData, countries, defaultCountry = 'italy' }) {
    const navigate = useNavigate();
    const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
    const [currentImage, setCurrentImage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const activeData = contentData[selectedCountry];
    const vp = { once: false, amount: 0.12 };

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    useEffect(() => {
        setCurrentImage(0);
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % activeData.heroImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [activeData.heroImages.length, selectedCountry]);

    const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } } };
    const itemUp = { hidden: { opacity: 0, y: 60, scale: 0.96 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } } };
    const slideLeft = { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
    const slideRight = { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
    const slideUp = { hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
    const scaleIn = { hidden: { opacity: 0, scale: 0.82 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.75, ease: [0.34, 1.56, 0.64, 1] } } };
    const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.8 } } };

    return (
        <>
        <style>{`
            .hero-left-clip  { clip-path: polygon(0 0, 100% 0, 92% 100%, 0 100%); }
            .hero-right-clip { clip-path: polygon(8% 0, 100% 0, 100% 100%, 0 100%); }
            .req-clip { clip-path: polygon(0 0, 100% 0, 88% 100%, 0% 100%); }
            .nav-blur { backdrop-filter: blur(12px); }

            .mobile-hero {
                position: relative;
                width: 100%;
                height: 100svh;
                overflow: hidden;
            }
            .mobile-hero-img {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            .mobile-hero-overlay {
                position: absolute;
                inset: 0;
                background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%);
            }
            .mobile-hero-content {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 0 0 2rem 0;
                display: flex;
                flex-direction: column;
            }
            .mobile-text-block {
                padding: 10px 20px;
                display: flex;
                align-items: center;
            }
            .mobile-text-top    { background: rgba(0,0,0,0.0); justify-content: flex-start; }
            .mobile-text-mid    { background: rgba(255,255,255,0.10); backdrop-filter: blur(6px); justify-content: flex-start; }
            .mobile-text-bottom { justify-content: flex-end; }

            .mob-card-scroll {
                display: flex;
                gap: 16px;
                overflow-x: auto;
                padding: 8px 16px 16px;
                scroll-snap-type: x mandatory;
                -webkit-overflow-scrolling: touch;
                scrollbar-width: none;
            }
            .mob-card-scroll::-webkit-scrollbar { display: none; }
            .mob-card {
                min-width: 80vw;
                max-width: 80vw;
                scroll-snap-align: start;
                flex-shrink: 0;
            }

            .mob-why-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 200px 140px;
                gap: 10px;
            }
            .mob-why-grid > *:first-child {
                grid-row: 1 / 3;
                height: 100%;
            }

            .mob-uni-scroll {
                display: flex;
                gap: 14px;
                overflow-x: auto;
                padding: 8px 16px 16px;
                scroll-snap-type: x mandatory;
                -webkit-overflow-scrolling: touch;
                scrollbar-width: none;
            }
            .mob-uni-scroll::-webkit-scrollbar { display: none; }
            .mob-uni-card {
                min-width: 72vw;
                scroll-snap-align: start;
                flex-shrink: 0;
            }

            .mob-req-card {
                border-left: 5px solid;
                border-radius: 0 16px 16px 0;
                padding: 18px 16px;
                margin-bottom: 12px;
                background: rgba(255,255,255,0.06);
            }

            @media (min-width: 768px) {
                .mobile-hero { display: none; }
                .desktop-hero { display: flex; }
                .mob-only { display: none !important; }
                .desk-only { display: block; }
            }
            @media (max-width: 767px) {
                .desktop-hero { display: none !important; }
                .mobile-hero { display: block; }
                .desk-only { display: none !important; }
                .mob-only { display: block; }
                .req-clip { clip-path: none; border-radius: 1rem; width: 100% !important; }
            }
        `}</style>

        <div className="w-full bg-white inter overflow-x-hidden relative" key={selectedCountry}>

            {/* NAV */}
            <div className="fixed top-16 md:top-24 left-1/2 -translate-x-1/2 z-[100] w-max px-2">
                <div className="bg-white/85 nav-blur border border-slate-200 p-1 md:p-1.5 rounded-xl md:rounded-2xl shadow-2xl flex gap-0.5 md:gap-1">
                    {countries.map((country) => (
                        <button key={country.id} onClick={() => setSelectedCountry(country.id)}
                            className={`px-3 md:px-5 py-1.5 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-black transition-all duration-500 uppercase tracking-wide md:tracking-widest ${selectedCountry === country.id ? `${country.color} text-white shadow-lg scale-105` : 'text-slate-500 hover:bg-slate-100'}`}>
                            {country.name}
                        </button>
                    ))}
                </div>
            </div>

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
                {/* Left image panel */}
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

                {/* ── RIGHT TEXT PANEL (FIXED) ── */}
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

            {/* ══════════════════════════════════════
                SCHOLARSHIPS
            ══════════════════════════════════════ */}
            {activeData.scholarships && activeData.scholarships.length > 0 ? (<>

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
            </>) : (
                <section className="py-24 text-center"><h2 className="text-2xl font-bold text-slate-400 uppercase tracking-[0.5em]">Coming Soon</h2></section>
            )}

            {/* ══════════════════════════════════════
                WHY
            ══════════════════════════════════════ */}
            {activeData.why.length > 0 && (
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
            )}

            {/* ══════════════════════════════════════
                UNIVERSITIES
            ══════════════════════════════════════ */}
            {activeData.unis.length > 0 && (
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
            )}

            {/* ══════════════════════════════════════
                REQUIREMENTS
            ══════════════════════════════════════ */}
            {activeData.reqs.length > 0 && (
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
            )}

            {/* ══════════════════════════════════════
                CTA
            ══════════════════════════════════════ */}
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

        </div>
        </>
    );
}
