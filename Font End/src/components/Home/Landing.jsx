
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Landing() {

 const topics = [
    {
      img1:'/study_abroad1.webp',
      img2:'/study_abroad2.webp',
      img3:'/study_abroad3.webp',
      heading:"Study Abroad Opportunities",
      des:"Explore world-class education programs across the globe. Gain international experience, expand your knowledge, and achieve your academic dreams with expert guidance and support."
    },
    {
      img1:'/carrier1.webp',
      img2:'/carrier2.webp',
      img3:'/carrier3.webp',
      heading:'Accelerate Your Career Growth',
      des:'Build your professional future with mentorship, networking, and skill-building. Unlock opportunities in global industries and advance with confidence through tailored career guidance.'
    },
    {
      img1:'/dream1.webp',
      img2:'/dream2.webp',
      img3:'/dream3.webp',
      heading:'Fulfill Your Ambitions',
      des:'Turn your aspirations into reality. Receive comprehensive support, structured guidance, and actionable resources to make your goals achievable and your dreams tangible.'
    }
  ];

  const [currentTopic, setCurrentTopic] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTopic((prev) => (prev + 1) % topics.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);


    return(
        <>

         <div className='w-full bg-white h-[70vh] mt-[5vh] flex flex-col md:flex-row justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 relative overflow-hidden'>

      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src='/hero_bg.jpg'
        alt='Hero Background'
        className="absolute inset-0 z-0 rounded-r-full  w-full h-full object-cover border-t-6 border-blue-400"
      />

      {/* Left: Heading & Description */}
      <div className="w-full md:w-[40%] h-full flex flex-col justify-center items-center rounded-4xl px-4 md:px-0 z-10 relative">
        <div className="w-full h-[50%] flex justify-bottom items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1 
              key={currentTopic}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 poppins text-center"
            >
              {topics[currentTopic].heading}
            </motion.h1>
          </AnimatePresence>
        </div>

        <div className="w-full h-[30%] flex justify-center items-start overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p 
              key={currentTopic}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className="text-lg sm:text-lg md:text-xl lg:text-2xl font-medium text-slate-700 text-center leading-relaxed"
            >
              {topics[currentTopic].des}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Right: Images */}
      <div className="w-full md:w-[60%] h-full flex flex-col justify-center items-center z-10 relative rounded-4xl gap-4 md:gap-6">

        <div className="w-full h-[50%] flex flex-row justify-center items-center gap-4 sm:gap-6 md:gap-10 z-10">
          <div className="w-[20%] h-[75%] bg-white hexagon overflow-hidden drop-shadow-[0_20px_25px_rgba(0,0,0,0.4)]">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentTopic}
                initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 1.1, opacity: 0, rotate: 10 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                src={topics[currentTopic].img1} 
                alt='Topic Image 1' 
                className='w-full h-full object-cover rounded-lg'
              />
            </AnimatePresence>
          </div>

          <div className="w-[25%] h-[95%] bg-white hexagon overflow-hidden drop-shadow-[0_20px_25px_rgba(0,0,0,0.4)]">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentTopic}
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 1.1, opacity: 0, y: -20 }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
                src={topics[currentTopic].img2} 
                alt='Topic Image 2' 
                className='w-full h-full object-cover rounded-lg'
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="w-full h-[50%] flex justify-center items-start z-10">
          <div className="w-[28%] h-full bg-white hexagon overflow-hidden drop-shadow-[0_20px_25px_rgba(0,0,0,0.4)]">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentTopic}
                initial={{ scale: 0.8, opacity: 0, x: 20 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                exit={{ scale: 1.1, opacity: 0, x: -20 }}
                transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
                src={topics[currentTopic].img3} 
                alt='Topic Image 3' 
                className='w-full h-full object-cover rounded-lg'
              />
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
        
        </>
    )
}

export default Landing;