import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Scholarship() {
    const navigate = useNavigate();
    const [selectedCountry, setSelectedCountry] = useState('italy');
    const [currentImage, setCurrentImage] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const countries = [
        { id: 'italy', name: 'Italy', color: 'bg-green-600' },
        { id: 'nz', name: 'New Zealand', color: 'bg-blue-800' },
        { id: 'canada', name: 'Canada', color: 'bg-red-600' },
    ];

    const contentData = {
        italy: {
            heroImages: ['/study_italy1.webp','/study_italy2.webp','/study_italy3.webp','/study_italy4.webp','/study_italy5.webp','/study_italy6.webp','/study_italy7.webp'],
            heroText: { top: "Want To", mid: "Study In", bottom: "Italy" },
            heroColors: { top: "bg-green-600", mid: "bg-white", bottom: "bg-red-700" },
            accentColor: "bg-red-600", accentHex: "#dc2626", borderColor: "border-green-500",
            scholarships: [
                { title: "Full Scholarships (Borsa di Studio)", badge: "Fully Funded", content: "This type of scholarship offers international students a comprehensive guarantee of paid tuition and accommodation fees by the host institution. It is highly competitive and primarily awarded based on academic merit or financial need (ISEE).", features: ["100% Tuition Waiver", "Free Accommodation", "Monthly Canteen Allowance", "Travel & Medical Coverage"], color: "border-green-600", bg: "bg-green-50/30" },
                { title: "Partial Scholarships", badge: "Merit-Based", content: "Partial scholarships involve the institution catering for a significant portion of your expenses while you handle the remainder. In the Italian system, partial awards frequently cover 75% or even 80% of the total tuition costs.", features: ["50% to 80% Tuition Coverage", "Reduced Enrollment Fees", "Academic Merit Focus", "Self-Managed Living Costs"], color: "border-blue-600", bg: "bg-blue-50/30" },
                { title: "Regional Scholarships (DSU)", badge: "Need-Based", content: "The 'Diritto allo Studio Universitario' (DSU) is a unique Italian regional program designed to ensure that all students, regardless of financial background, have access to higher education.", features: ["Region-Specific Funding", "Financial Need Priority", "Annual Cash Stipend", "Canteen Service Discounts"], color: "border-red-600", bg: "bg-red-50/30" },
                { title: "Self-Funding Study", badge: "Budget-Friendly", content: "Studying without a scholarship is a viable option in Italy. Most Italian public universities do not require high tuition fees — fees are often based on family income and can be as low as €150 to €500 per year.", features: ["Low Public University Fees", "Flexible Admission", "No GPA Maintenance Pressure", "Full Work Rights (20hrs/week)"], color: "border-slate-800", bg: "bg-slate-50" }
            ],
            why: [
                { title: "Academic Heritage", desc: "Home to the Western world's oldest university.", img: "/education_italy1.webp", accent: "bg-green-500" },
                { title: "Living Museum", desc: "Centuries of art and history at your doorstep.", img: "/culture_italy1.webp", accent: "bg-red-500" },
                { title: "Elite Lifestyle", desc: "World-class health and the finest cuisine.", img: "/food_italy1.webp", accent: "bg-blue-500" },
                { title: "EU Gateway", desc: "Unrestricted access to the Schengen zone.", img: "/transport_italy1.webp", accent: "bg-orange-500" }
            ],
            unis: [
                { name: "University of Bologna", tag: "Founded 1088", desc: "The oldest university in the Western world, consistently ranked among the top European institutions.", img: "/bolonga_uni.webp" },
                { name: "Florence University", tag: "Art & Culture Hub", desc: "A world leader in design, architecture, and cultural studies.", img: "/florance_uni.webp" },
                { name: "Università Cattolica", tag: "Largest Private EU", desc: "A powerhouse for business, economics, and law.", img: "/catolica_uni.webp" },
                { name: "Italian Int. Institute", tag: "Global Excellence", desc: "Specialized in high-impact programs tailored for international scholars.", img: "/italian_institute_uni.webp" }
            ],
            reqs: [
                { title: "Undergraduate (Bachelor's)", border: "border-green-600", desc: "12 years of formal education (HSC or Diploma). GPA 3.50+. Max 5yr gap.", tags: ["12 Years Education", "GPA 3.50+", "Max 5yr Gap"] },
                { title: "Postgraduate (Master's)", border: "border-red-600", desc: "Recognized Bachelor's degree. National University (NU) degrees accepted. Max 6yr gap.", tags: ["Recognized Degree", "NU Accepted", "Max 6yr Gap"] },
                { title: "Language Proficiency", border: "border-blue-600", desc: "IELTS 6.0 standard. MOI certificate accepted. Apply 3.5 months before class.", tags: ["IELTS 6.0", "MOI Accepted", "Min 21 Day Process"] },
                { title: "Financial Solvency", border: "border-slate-900", desc: "Minimum BDT 12,00,000 in personal bank account as embassy security guarantee.", tags: ["BDT 12,00,000+", "Personal/Family Acc", "Visa Security"] }
            ],
            cta: { tagline: "Vivi la Cultura Italiana", title: "Become a <span class='text-red-600 italic'>Legendary</span> Scholar.", desc: "Italian scholarship deadlines are strict and happen only once a year. Secure your place in a world of art, history, and academic excellence.", footerColors: ["bg-green-600", "bg-white", "bg-red-600"] }
        },
        nz: {
            heroImages: ['/nz_study1.webp','/nz_study2.webp','/nz_study3.webp','/nz_study4.webp','/nz_study5.webp'],
            heroText: { top: "Your Dream", mid: "Education In", bottom: "NZ" },
            heroColors: { top: "bg-blue-800", mid: "bg-white", bottom: "bg-slate-900" },
            accentColor: "bg-blue-600", accentHex: "#2563eb", borderColor: "border-blue-400",
            scholarships: [
                { title: "Manaaki New Zealand Scholarships", badge: "Fully Funded", content: "The New Zealand Government offers prestigious Manaaki scholarships covering full tuition, living allowances, establishment allowances, and medical insurance.", features: ["Full Tuition Fees", "Living Allowance ($491/week)", "Medical & Travel Insurance", "Research & Thesis Allowances"], color: "border-blue-700", bg: "bg-blue-50/40" },
                { title: "University Excellence Awards", badge: "Merit-Based", content: "Major universities like Auckland and Otago provide International Excellence Scholarships ranging from $10,000 to $20,000 for high-achieving applicants.", features: ["Up to $20,000 Grant", "Automatic Consideration", "Faculty-Specific Awards", "Academic Distinction"], color: "border-slate-800", bg: "bg-slate-50" },
                { title: "Research & PhD Scholarships", badge: "High Impact", content: "PhD students often pay the same fees as domestic students and are eligible for various specialized research grants.", features: ["Domestic Fee Status for PhD", "Government Research Grants", "Project Funding", "Post-Study Work Rights"], color: "border-indigo-600", bg: "bg-indigo-50/30" },
                { title: "Short Term Training Awards", badge: "Skills Focused", content: "Targeted at professionals, these awards provide opportunities for short-term specialized training to gain practical skills.", features: ["Professional Development", "Fully Funded Short Courses", "Practical Skills Focus", "Networking Opportunities"], color: "border-cyan-600", bg: "bg-cyan-50/30" }
            ],
            why: [
                { title: "Academic Rigor", desc: "All NZ universities ranked in top 3% globally.", img: "/nz_education2.webp", accent: "bg-blue-600" },
                { title: "Stunning Nature", desc: "World's most breathtaking landscapes.", img: "/nz_nature2.webp", accent: "bg-green-600" },
                { title: "Safe & Welcoming", desc: "One of the most peaceful nations on Earth.", img: "/nz_culture2.webp", accent: "bg-slate-600" },
                { title: "Work & Life", desc: "Flexible post-study work visas up to 3 years.", img: "/nz_nature3.webp", accent: "bg-orange-600" }
            ],
            unis: [
                { name: "University of Auckland", tag: "World Ranked #68", desc: "NZ's largest and highest-ranked university with world-class research facilities.", img: "/aucland_uni_nz.webp" },
                { name: "University of Otago", tag: "Established 1869", desc: "NZ's first university, renowned for health sciences and research excellence.", img: "/otago_uni_nz.webp" },
                { name: "Massey University", tag: "Forward Thinking", desc: "Leader in agriculture, veterinary science, and creative arts.", img: "/massay_uni_nz.webp" },
                { name: "University of Canterbury", tag: "Engineering Hub", desc: "World-class engineering and science programs in Christchurch.", img: "/canterbury_uni_nz.webp" }
            ],
            reqs: [
                { title: "Academic Entry", border: "border-blue-600", desc: "HSC or equivalent for Bachelor's. B average (GPA 3.0) for Master's.", tags: ["HSC / Diploma", "B Average / GPA 3.0", "Global Recognition"] },
                { title: "Language Mastery", border: "border-slate-800", desc: "IELTS 6.5 average. PTE Academic and TOEFL iBT also accepted.", tags: ["IELTS 6.5 (Avg)", "PTE / TOEFL Accepted", "Direct Entry"] },
                { title: "Post-Study Rights", border: "border-green-600", desc: "Post-Study Work Visa (PSWV) up to 3 years after completing a degree.", tags: ["Up to 3yr PSWV", "Path to Residency", "Full Work Rights"] },
                { title: "Financial Proof", border: "border-blue-900", desc: "Approx $20,000 NZD per year required to cover living expenses.", tags: ["$20,000 NZD/Year", "Tuition + Living", "Bank Statement Required"] }
            ],
            cta: { tagline: "Kia Ora New Zealand", title: "Your <span class='text-blue-600 italic'>Pacific</span> Journey Starts Here.", desc: "New Zealand offers world-class education in a safe, beautiful environment. Start your application now.", footerColors: ["bg-blue-800", "bg-white", "bg-slate-900"] }
        },
        canada: {
            heroImages: ['/study_canada1.webp','/study_canada2.webp','/study_canada3.webp','/study_canada4.webp','/study_canada5.webp'],
            heroText: { top: "Experience", mid: "Study In", bottom: "Canada" },
            heroColors: { top: "bg-red-600", mid: "bg-white", bottom: "bg-red-800" },
            accentColor: "bg-red-600", accentHex: "#dc2626", borderColor: "border-red-400",
            scholarships: [
                { title: "Lester B. Pearson Scholarship", badge: "Fully Funded", content: "Offered by the University of Toronto, Canada's most prestigious award for international students, covering tuition, books, incidental fees, and full residence support.", features: ["Full Tuition Coverage", "Books & Incidental Fees", "4-Year Residence Support", "Exceptional Leadership Focus"], color: "border-red-600", bg: "bg-red-50/30" },
                { title: "UBC International Leader of Tomorrow", badge: "Merit-Based", content: "UBC recognizes international students demonstrating superior academic achievement, leadership, and community involvement.", features: ["Significant Financial Award", "Academic Merit Focus", "Renewable for 3 Years", "Community Impact Requirement"], color: "border-blue-600", bg: "bg-blue-50/30" },
                { title: "Vanier Graduate Scholarships", badge: "Research Hub", content: "Government of Canada program attracting world-class doctoral students who demonstrate leadership and high scholarly achievement.", features: ["$50,000 Annual Grant", "3-Year Duration", "Doctoral Level Focus", "Global Research Prestige"], color: "border-emerald-600", bg: "bg-emerald-50/30" },
                { title: "SDS Entrance Awards", badge: "Fast Track", content: "Many Canadian DLI institutions offer exclusive entrance scholarships for students applying through the Student Direct Stream (SDS).", features: ["Automatic Consideration", "IELTS 7.0+ Priority", "Faster Visa Processing", "Variable Grant Amounts"], color: "border-slate-800", bg: "bg-slate-50" }
            ],
            why: [
                { title: "Global Prestige", desc: "Canadian degrees globally recognized by top employers.", img: "/study_canada3.webp", accent: "bg-red-500" },
                { title: "Inclusive Culture", desc: "Best country for quality of life and safety.", img: "/culture_canda1.webp", accent: "bg-white" },
                { title: "Natural Splendor", desc: "From the Rockies to the Northern Lights.", img: "/nature_canada1.webp", accent: "bg-green-500" },
                { title: "PR Pathway", desc: "Excellent post-study work permits and immigration pathways.", img: "/study_canada4.webp", accent: "bg-orange-500" }
            ],
            unis: [
                { name: "University of Toronto", tag: "#1 Ranked in Canada", desc: "Global leader in higher education in Canada's largest city.", img: "/toronto_uni_canda.webp" },
                { name: "University of British Columbia", tag: "Global Research Hub", desc: "Top 20 public universities worldwide, center for innovation.", img: "/british_colombia_uni_canada.webp" },
                { name: "McMaster University", tag: "Innovation Leader", desc: "World-class medical school and research in science and engineering.", img: "/mcmaster_uni_canada.webp" },
                { name: "University of Alberta", tag: "Excellence in Research", desc: "Top research university in energy, health sciences, and AI.", img: "/alberta_uni_canada.webp" }
            ],
            reqs: [
                { title: "Academic Standards", border: "border-red-600", desc: "75%+ in HSC for Bachelor's. Minimum GPA 3.0/4.0 for Master's. WES evaluation required.", tags: ["75%+ / GPA 3.0", "WES Evaluation", "No Backlogs"] },
                { title: "Language Proficiency", border: "border-blue-600", desc: "IELTS 6.5 with no band below 6.0. Competitive programs may require 7.0.", tags: ["IELTS 6.5 (Avg)", "Duolingo/PTE Accepted", "English MOI Option"] },
                { title: "Financial Capability", border: "border-emerald-600", desc: "GIC of $20,635 CAD mandatory for SDS along with first-year tuition proof.", tags: ["GIC $20,635 CAD", "1st Year Tuition", "Fast-Track Visa"] },
                { title: "Study Permit (SDS)", border: "border-slate-900", desc: "Student Direct Stream offers expedited 20-day visa processing for strong profiles.", tags: ["20-Day Processing", "Biometrics Required", "Post-Study WP"] }
            ],
            cta: { tagline: "True North Strong", title: "Build Your <span class='text-red-600 italic'>Future</span> in Canada.", desc: "Canada's welcoming immigration policies and world-class universities make it the ultimate destination for your academic journey.", footerColors: ["bg-red-600", "bg-white", "bg-red-700"] }
        }
    };

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

            /* Mobile hero — full bleed image with overlaid text blocks */
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

            /* Mobile scholarship cards — horizontal scroll */
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

            /* Mobile why tiles — 2x2 asymmetric grid */
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

            /* Mobile universities — horizontal scroll cards */
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

            /* Mobile reqs — stacked with left border accent */
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

                {/* top-right badge */}
                <motion.div className="absolute top-20 right-4 z-20"
                    initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}>
                    <div className={`${activeData.accentColor} text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full`}>
                        Global Excellence
                    </div>
                </motion.div>

                {/* dot indicators */}
                <div className="absolute top-20 left-4 flex flex-col gap-1.5 z-20">
                    {activeData.heroImages.map((_, i) => (
                        <button key={i} onClick={() => setCurrentImage(i)}
                            className={`w-1 rounded-full transition-all duration-300 ${i === currentImage ? 'h-6 bg-white' : 'h-2 bg-white/40'}`} />
                    ))}
                </div>

                {/* bottom text blocks */}
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
                <div className='hero-right-clip w-[50%] h-full flex flex-col'>
                    {[
                        { text: activeData.heroText.top, bg: activeData.heroColors.top, dir: 300, delay: 0.1, align: 'items-end pb-12', textColor: selectedCountry === 'italy' ? 'text-slate-800' : 'text-white', size: 'text-8xl' },
                        { text: activeData.heroText.mid, bg: 'bg-white', dir: -300, delay: 0.2, align: 'items-center', textColor: 'text-slate-900', size: 'text-8xl' },
                        { text: activeData.heroText.bottom, bg: activeData.heroColors.bottom, dir: 300, delay: 0.3, align: 'items-start pt-12', textColor: 'text-white', size: 'text-9xl italic' },
                    ].map((block, i) => (
                        <motion.div key={i}
                            className={`w-full h-[33.3%] ${block.bg} flex justify-center ${block.align} transition-colors duration-700`}
                            initial={{ x: block.dir, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 40, damping: 18, delay: block.delay }}>
                            <span className={`${block.size} popins font-black leading-none uppercase tracking-tighter ${block.textColor}`}>
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

                {/* Mobile scholarships — horizontal scroll */}
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

                    {/* Mobile — asymmetric 2-col grid */}
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

                    {/* Desktop — 4-col grid */}
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

                    {/* Mobile — horizontal scroll */}
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

                    {/* Mobile — stacked accent-border cards */}
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

            {/* CTA */}
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

        </div>
        </>
    );
}