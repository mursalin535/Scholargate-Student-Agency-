import { motion } from "framer-motion";

export default function Provide() {
  return (
    <>
      <motion.div
        className="w-full min-h-[70vh] flex flex-col justify-center items-start gap-3 px-4 sm:px-6 md:px-12"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, staggerChildren: 0.5 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* Header */}
        <motion.div className="w-full flex flex-col sm:flex-row justify-start items-center gap-3 sm:gap-0">
          <motion.div
            className="w-full sm:w-[35%] h-[10vh] bg-blue-400 rounded-r-xl flex justify-center items-center"
            style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
          >
            <span className="font-bold text-2xl sm:text-3xl md:text-4xl popins text-white">
              What We Provide?
            </span>
          </motion.div>
          <motion.div className="w-full sm:w-[55%] h-[1vh] bg-blue-100 rounded-4xl" />
        </motion.div>

        {/* Company Name Section */}
        <motion.div className="w-full h-auto flex flex-col justify-center items-center gap-5">
          <motion.div className="w-full h-[15vh] flex justify-center items-end">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 popins text-center sm:text-left">
              LEGACY SCHOLARGATE
            </h1>
          </motion.div>

          <motion.div className="w-[40%] h-[1vh] bg-orange-300 rounded-3xl" />
          <motion.div className="w-[30%] h-[1vh] bg-orange-300 rounded-3xl" />
        </motion.div>

        {/* Description */}
        <motion.div className="w-full flex justify-center items-center py-4">
          <span className="text-sm sm:text-lg md:text-xl font-medium inter text-slate-600 leading-relaxed max-w-[100%] sm:max-w-[80%] md:max-w-[70%] text-center">
            LEGACY SCHOLARGATE is dedicated to supporting students who aspire to study abroad with
            scholarships. Many students face challenges navigating applications, requirements, and opportunities.
            Our organization simplifies this journey by providing guidance, resources, and expert support, making
            the path smoother and more accessible so students can confidently achieve their academic goals and
            turn their dreams into reality...
          </span>
        </motion.div>

        {/* Button */}
        <motion.div className="w-full flex justify-center items-center py-4">
          <motion.button
            className="bg-orange-400 rounded-full px-6 py-3 font-semibold text-white poppins
            transition-all duration-300 ease-out hover:bg-blue-400 hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,0,0,0.25)] active:scale-95"
          >
            Read More →
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
}