export const countries = [
    { id: 'italy', name: 'Italy', color: 'bg-green-600' },
    { id: 'nz', name: 'New Zealand', color: 'bg-blue-800' },
    { id: 'canada', name: 'Canada', color: 'bg-red-600' },
    { id: 'australia', name: 'Australia', color: 'bg-amber-500' },
];

export const contentData = {
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
    },
    australia: {
        heroImages: ['/study_aus1.webp','/study_aus2.webp','/study_aus3.webp','/study_aus4.webp'],
        heroText: { top: "Your Future", mid: "Study In", bottom: "Australia" },
        heroColors: { top: "bg-amber-400", mid: "bg-white", bottom: "bg-blue-900" },
        accentColor: "bg-amber-500", accentHex: "#f59e0b", borderColor: "border-amber-400",
        scholarships: [
            { title: "Australia Awards Scholarships", badge: "Fully Funded", content: "Long-term awards administered by the Department of Foreign Affairs and Trade. They provide opportunities for people from developing countries to undertake full-time undergraduate or postgraduate study.", features: ["Full Tuition Fees", "Return Air Travel", "Establishment Allowance", "Contribution to Living Expenses (CLE)"], color: "border-amber-500", bg: "bg-amber-50/30" },
            { title: "Destination Australia Program", badge: "Regional Focus", content: "Over 1000 scholarships each year to support both domestic and international students to study in regional Australia.", features: ["$15,000 per year", "Regional Campus Focus", "Up to 4 Years Support", "Diverse Study Fields"], color: "border-blue-600", bg: "bg-blue-50/30" },
            { title: "Research Training Program (RTP)", badge: "High Impact", content: "Provides block grants to higher education providers to support domestic and international students undertaking Research Doctorate and Research Masters degrees.", features: ["Tuition Fee Offset", "Living Stipend", "Research Allowances", "PhD & Masters Focus"], color: "border-emerald-600", bg: "bg-emerald-50/30" },
            { title: "University-Specific Awards", badge: "Merit-Based", content: "Many Australian universities offer their own merit-based scholarships for high-achieving international students.", features: ["25% to 50% Tuition Waiver", "Automatic Assessment", "Undergrad & Postgrad", "Academic Distinction"], color: "border-slate-800", bg: "bg-slate-50" }
        ],
        why: [
            { title: "Global Recognition", desc: "Australian degrees are highly valued by employers worldwide.", img: "/aus_culture.webp", accent: "bg-amber-500" },
            { title: "Vibrant Lifestyle", desc: "Consistently ranked among the world's most livable cities.", img: "/aus_culture2.webp", accent: "bg-blue-500" },
            { title: "Nature's Wonder", desc: "From the Great Barrier Reef to the vast Outback.", img: "/aus_nature.webp", accent: "bg-green-500" },
            { title: "Post-Study Work", desc: "Generous work rights for international graduates.", img: "/study_aus2.webp", accent: "bg-orange-500" }
        ],
        unis: [
            { name: "Australian National University", tag: "World Ranked #30", desc: "Australia's leading university for research and academic excellence.", img: "/aus_uni_national.webp" },
            { name: "University of Melbourne", tag: "Global Leader", desc: "Ranked #1 in Australia, known for its high-impact research and teaching.", img: "/aus_uni_melborn.webp" },
            { name: "University of Sydney", tag: "First University", desc: "A world-class university consistently ranked in the top 50 globally.", img: "/aus_uni_sydey.webp" },
            { name: "UNSW Sydney", tag: "Innovation Hub", desc: "Leader in engineering, business, and technology programs.", img: "/aus_uni_UNSW.webp" }
        ],
        reqs: [
            { title: "Academic Entry", border: "border-amber-500", desc: "Satisfactory completion of secondary school or bachelor's degree. GPA 3.0+ preferred.", tags: ["HSC / Diploma", "GPA 3.0+", "Relevant Background"] },
            { title: "English Language", border: "border-blue-600", desc: "IELTS 6.5 overall (min 6.0 in each band). PTE and TOEFL also widely accepted.", tags: ["IELTS 6.5", "PTE 58+", "TOEFL 79+"] },
            { title: "GTE Requirement", border: "border-emerald-600", desc: "Genuine Temporary Entrant (GTE) statement to prove intent to study and return.", tags: ["GTE Statement", "Financial Proof", "Personal Statement"] },
            { title: "Financial Capacity", border: "border-slate-900", desc: "Proof of funds to cover tuition and living costs (approx $24,505 AUD per year).", tags: ["$24,505 AUD/Year", "Tuition Proof", "Health Cover (OSHC)"] }
        ],
        cta: { tagline: "Advance Australia Fair", title: "Your <span class='text-amber-500 italic'>Australian</span> Dream Awaits.", desc: "Australia offers world-class education, a high quality of life, and incredible post-study opportunities. Start your journey today.", footerColors: ["bg-blue-900", "bg-white", "bg-amber-400"] }
    }
};
