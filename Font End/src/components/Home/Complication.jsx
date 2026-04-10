import { motion } from 'framer-motion'

const leftPoints = [
  { title: "Forex & remittance limits", desc: "Bangladesh Bank caps yearly outward remittance, making tuition transfers unreliable and slow." },
  { title: "High application fees", desc: "Spending $50–$200 per university in BDT is significant, with no refund if rejected." },
  { title: "Living cost gap", desc: "Monthly expenses abroad can exceed a middle-class family's entire monthly income." },
  { title: "Limited scholarships", desc: "Fully-funded seats for Bangladeshi students remain extremely competitive and few." },
  { title: "No credit history", desc: "Most students can't obtain international loans without a foreign co-signer." },
]

const rightPoints = [
  { title: "Visa rejection risk", desc: "Denial rates are high; even strong applicants face refusals with no clear reason given." },
  { title: "Document complexity", desc: "Notarization, police clearance, bank solvency letters and translations take weeks." },
  { title: "IELTS/TOEFL burden", desc: "Test fees plus coaching can cost BDT 30,000–60,000 with no guarantee of a passing score." },
  { title: "Degree equivalency", desc: "HSC results aren't always recognized; ECTS conversion adds confusion and delays." },
]

function BulletList({ points, direction }) {
  return (
    <ul className="complication-bullet-list">
      {points.map((p, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: direction === 'left' ? -16 : 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          viewport={{ once: true }}
          className="complication-bullet-item"
        >
          <span className="complication-dot" />
          <p className="complication-bullet-text">
            <span className="complication-bullet-title">{p.title} — </span>
            {p.desc}
          </p>
        </motion.li>
      ))}
    </ul>
  )
}

export default function Complication() {
  return (
    <>
      <style>{`
        .complication-section {
          width: 100%;
          min-height: 88vh;
          display: flex;
          flex-direction: row;
          background: white;
          overflow: hidden;
        }

        /* LEFT PANEL */
        .complication-left {
          width: 35%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .complication-left-arc {
          position: absolute;
          inset: 0;
          border-right: 3px solid #1e3a8a;
          border-radius: 0 9999px 9999px 0;
          pointer-events: none;
        }
        .complication-left-content {
          width: 72%;
          padding: clamp(24px,4vh,64px) clamp(8px,1.5vw,24px) clamp(24px,4vh,64px) 0;
        }

        /* CENTER */
        .complication-center {
          width: 30%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          flex-shrink: 0;
          gap: clamp(2px, 0.3vh, 6px);
        }
        .complication-heading {
          font-weight: 800;
          color: #334155;
          text-align: center;
          line-height: 1.15;
          font-size: clamp(26px, 3.6vw, 56px);
        }
        .complication-highlight {
          background: #93c5fd;
          color: #1e3a8a;
          border-radius: 24px;
          padding: 0 10px;
        }
        .complication-q {
          font-weight: 800;
          color: #fdba74;
          line-height: 1;
          user-select: none;
          font-size: clamp(80px, 22vw, 320px);
          margin-top: clamp(4px, 1vh, 16px);
        }

        /* RIGHT PANEL */
        .complication-right {
          width: 35%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .complication-right-arc {
          position: absolute;
          inset: 0;
          border-left: 3px solid #1e40af;
          border-radius: 9999px 0 0 9999px;
          pointer-events: none;
        }
        .complication-right-content {
          width: 72%;
          padding: clamp(24px,4vh,64px) 0 clamp(24px,4vh,64px) clamp(8px,1.5vw,24px);
        }

        /* CATEGORY LABEL */
        .complication-category {
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: clamp(13px, 1.4vw, 24px);
          margin-bottom: clamp(4px, 0.5vh, 8px);
        }
        .complication-category-left  { color: #fdba74; }
        .complication-category-right { color: #60a5fa; }

        .complication-subtitle {
          font-weight: 600;
          color: #1e3a8a;
          border-bottom: 1px solid #bfdbfe;
          font-size: clamp(12px, 1.2vw, 20px);
          padding-bottom: clamp(8px, 1vh, 14px);
          margin-bottom: clamp(12px, 2vh, 24px);
        }

        /* BULLETS */
        .complication-bullet-list {
          display: flex;
          flex-direction: column;
          gap: clamp(10px, 1.4vh, 20px);
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .complication-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: clamp(8px, 0.8vw, 14px);
        }
        .complication-dot {
          width: clamp(5px, 0.45vw, 8px);
          height: clamp(5px, 0.45vw, 8px);
          min-width: clamp(5px, 0.45vw, 8px);
          margin-top: clamp(5px, 0.5vw, 8px);
          border-radius: 50%;
          background: #3b82f6;
          flex-shrink: 0;
        }
        .complication-bullet-text {
          font-size: clamp(11px, 1.05vw, 16px);
          line-height: 1.65;
          color: #475569;
        }
        .complication-bullet-title {
          font-weight: 600;
          color: #1e3a8a;
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .complication-section {
            flex-direction: column;
            min-height: unset;
          }

          /* hide arcs on mobile — they look broken in column layout */
          .complication-left-arc,
          .complication-right-arc {
            display: none;
          }

          .complication-left,
          .complication-right {
            width: 100%;
            justify-content: flex-start;
            padding: 32px 24px;
          }
          .complication-left  { border-bottom: 2px solid #bfdbfe; }
          .complication-right { border-top: 2px solid #bfdbfe; }

          .complication-left-content,
          .complication-right-content {
            width: 100%;
            padding: 0;
          }

          .complication-center {
            width: 100%;
            padding: 40px 24px 24px;
          }

          .complication-heading {
            font-size: clamp(32px, 9vw, 52px);
          }

          .complication-q {
            font-size: clamp(80px, 28vw, 140px);
            margin-top: 8px;
          }

          .complication-category {
            font-size: 12px;
          }
          .complication-subtitle {
            font-size: 15px;
          }
          .complication-bullet-text {
            font-size: 13px;
          }
          .complication-dot {
            width: 6px;
            height: 6px;
            min-width: 6px;
            margin-top: 6px;
          }
          .complication-bullet-item {
            gap: 10px;
          }
          .complication-bullet-list {
            gap: 14px;
          }
        }
      `}</style>

      <motion.section
        className="complication-section"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >

        {/* Left panel */}
        <div className="complication-left">
          <div className="complication-left-arc" />
          <motion.div
            className="complication-left-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="complication-category complication-category-left popins">
              Financial barriers
            </p>
            <p className="complication-subtitle">The cost problem</p>
            <BulletList points={leftPoints} direction="left" />
          </motion.div>
        </div>

        {/* Center */}
        <div className="complication-center">
          <motion.h1
            className="complication-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why{' '}
            <span className="complication-highlight">Studying</span>
          </motion.h1>

          <motion.h1
            className="complication-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Abroad Is
          </motion.h1>

          <motion.h1
            className="complication-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Complicated
          </motion.h1>

          <motion.span
            className="complication-q"
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 80, delay: 0.3 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            ?
          </motion.span>
        </div>

        {/* Right panel */}
        <div className="complication-right">
          <div className="complication-right-arc" />
          <motion.div
            className="complication-right-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="complication-category complication-category-right popins">
              Process barriers
            </p>
            <p className="complication-subtitle">The paperwork maze</p>
            <BulletList points={rightPoints} direction="right" />
          </motion.div>
        </div>

      </motion.section>



    </>
  )
}