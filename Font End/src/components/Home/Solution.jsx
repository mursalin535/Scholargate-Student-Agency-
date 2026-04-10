import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
}

const item = {
  hidden: (dir) => ({
    opacity: 0,
    x: dir === 'left' ? -80 : dir === 'right' ? 80 : 0,
    y: dir === 'bottom' ? 80 : 0,
  }),
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function Solution() {
  return (
    <>
      {/* Top Section */}
      <motion.div
        className="w-full min-h-[50vh] bg-white flex flex-col justify-center items-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
      >

        {/* Line 1 */}
        <motion.div
          className="w-[80%] h-[33%] flex justify-center items-center"
          variants={item}
          custom="right"
        >
          <span className="text-[clamp(40px,14vw,140px)] font-bold popins text-slate-700">
            We'r Here
          </span>
        </motion.div>

        {/* Line 2 */}
        <motion.div
          className="w-[80%] h-[33%] flex justify-center items-center"
          variants={item}
          custom="left"
        >
          <span className="text-[clamp(36px,13vw,130px)] font-bold popins text-slate-800">
            For
          </span>
        </motion.div>

        {/* Line 3 */}
        <motion.div
          className="w-[80%] h-[33%] flex justify-center items-center"
          variants={item}
          custom="bottom"
        >
          <span className="text-[clamp(50px,18vw,180px)] font-bold popins text-black">
            YOU
          </span>
        </motion.div>

      </motion.div>

      {/* Bottom Section (Improved Text UI) */}
        <motion.div
      className="w-full min-h-[50vh] flex flex-col justify-center items-center px-6 md:px-20 py-14"
      style={{ gap: 'clamp(20px, 3vh, 40px)' }}

      initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay:0.3 }}
        viewport={{ once: false, amount: 0.4 }}
    >

      {/* Card 1 — Financial */}
      <motion.div
        className="w-full max-w-4xl flex flex-col sm:flex-row gap-6 md:gap-8 items-center rounded-2xl p-7 md:p-10"
        style={{ background: '#EFF6FF', border: '1px solid #BFDBFE' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false }}
      >
        {/* Image */}
        <div className="w-full sm:w-[220px] md:w-[260px] shrink-0">
          <img
            src="/financial_sprt.webp"
            alt="Financial support"
            className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-xl"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col flex-1">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase rounded-full px-3 py-1 mb-3 w-fit"
            style={{ background: '#DBEAFE', color: '#1D4ED8' }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
            Financial support
          </span>

          {/* Accent line */}
          <div className="w-10 h-[3px] rounded-full bg-blue-500 mb-4" />

          <p className="text-[clamp(14px,1.3vw,18px)] leading-[1.85] text-slate-600 font-normal tracking-[0.01em]">
            <span
              className="font-black text-blue-500 mr-1"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px,4vw,56px)', lineHeight: 1, verticalAlign: 'middle' }}
            >
              W
            </span>
            e help students overcome financial barriers with a clear, structured
            approach. Our team shortlists budget-friendly universities, secures
            application fee waivers, and maximizes scholarship opportunities. We
            guide you through legal remittance channels, payment planning, and
            cost-saving strategies like shared accommodation — making studying
            abroad financially{' '}
            <strong className="font-semibold" style={{ color: '#1D4ED8' }}>
              realistic and manageable
            </strong>
            .
          </p>
        </div>
      </motion.div>

      {/* Card 2 — Process */}
      <motion.div
        className="w-full max-w-4xl flex flex-col sm:flex-row-reverse gap-6 md:gap-8 items-center rounded-2xl p-7 md:p-10"
        style={{ background: '#FFF7ED', border: '1px solid #FED7AA' }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: false }}
      >
        {/* Image — flipped side on desktop */}
        <div className="w-full sm:w-[220px] md:w-[260px] shrink-0">
          <img
            src="/simplify.webp"
            alt="Simplify the process"
            className="w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover rounded-xl"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col flex-1">
          {/* Badge */}
          <span
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase rounded-full px-3 py-1 mb-3 w-fit"
            style={{ background: '#FFEDD5', color: '#C2410C' }}
          >
            <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
            Process guidance
          </span>

          {/* Accent line */}
          <div className="w-10 h-[3px] rounded-full bg-orange-400 mb-4" />

          <p className="text-[clamp(14px,1.3vw,18px)] leading-[1.85] text-slate-600 font-normal tracking-[0.01em]">
            <span
              className="font-black text-orange-400 mr-1"
              style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px,4vw,56px)', lineHeight: 1, verticalAlign: 'middle' }}
            >
              W
            </span>
            e simplify the entire process with step-by-step support. Our experts
            handle documentation, ensure accuracy, and prepare strong SOPs to
            reduce visa risks. We guide you on test alternatives, university
            selection, and equivalency issues — so you avoid confusion, delays,
            and rejections while moving forward with{' '}
            <strong className="font-semibold" style={{ color: '#C2410C' }}>
              confidence
            </strong>
            .
          </p>
        </div>
      </motion.div>

    </motion.div>
    </>
  )
}