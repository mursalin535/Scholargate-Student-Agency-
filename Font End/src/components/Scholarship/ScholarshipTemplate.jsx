import { useState, useEffect } from 'react';
import './Scholarship.css';

// Sub-components
import ScholarshipHero from './components/ScholarshipHero';
import ScholarshipTypes from './components/ScholarshipTypes';
import WhySection from './components/WhySection';
import UniversityGrid from './components/UniversityGrid';
import RequirementsSection from './components/RequirementsSection';
import ScholarshipCTA from './components/ScholarshipCTA';

export default function ScholarshipTemplate({ contentData, countries, defaultCountry = 'italy' }) {
    const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
    const [currentImage, setCurrentImage] = useState(0);

    const activeData = contentData[selectedCountry];
    const vp = { once: false, amount: 0.12 };

    // Auto-advance hero images
    useEffect(() => {
        setCurrentImage(0);
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % activeData.heroImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [activeData.heroImages.length, selectedCountry]);

    return (
        <div className="w-full bg-white inter overflow-x-hidden relative" key={selectedCountry}>

            {/* NAV / COUNTRY SELECTOR */}
            <div className="fixed top-16 md:top-24 left-1/2 -translate-x-1/2 z-[100] w-max px-2">
                <div className="bg-white/85 nav-blur border border-slate-200 p-1 md:p-1.5 rounded-xl md:rounded-2xl shadow-2xl flex gap-0.5 md:gap-1">
                    {countries.map((country) => (
                        <button 
                            key={country.id} 
                            onClick={() => setSelectedCountry(country.id)}
                            className={`px-3 md:px-5 py-1.5 md:py-2 rounded-lg md:rounded-xl text-xs md:text-sm font-black transition-all duration-500 uppercase tracking-wide md:tracking-widest ${selectedCountry === country.id ? `${country.color} text-white shadow-lg scale-105` : 'text-slate-500 hover:bg-slate-100'}`}
                        >
                            {country.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* HERO SECTION */}
            <ScholarshipHero 
                activeData={activeData} 
                currentImage={currentImage} 
                setCurrentImage={setCurrentImage} 
                selectedCountry={selectedCountry} 
            />

            {/* SCHOLARSHIP TYPES */}
            <ScholarshipTypes 
                activeData={activeData} 
                selectedCountry={selectedCountry} 
                vp={vp} 
            />

            {/* WHY STUDY HERE SECTION */}
            <WhySection 
                activeData={activeData} 
                selectedCountry={selectedCountry} 
                vp={vp} 
            />

            {/* UNIVERSITIES GRID */}
            <UniversityGrid 
                activeData={activeData} 
                selectedCountry={selectedCountry} 
                vp={vp} 
            />

            {/* REQUIREMENTS SECTION */}
            <RequirementsSection 
                activeData={activeData} 
                selectedCountry={selectedCountry} 
                vp={vp} 
            />

            {/* CALL TO ACTION */}
            <ScholarshipCTA 
                activeData={activeData} 
                selectedCountry={selectedCountry} 
                vp={vp} 
            />

        </div>
    );
}
