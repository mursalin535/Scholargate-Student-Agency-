import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

const countries = [
  { id: 'italy',     label: 'Wanna Study In Italy?',    src: '/italy.webp',       cls: 'card-italy',  angle: -135, flag: '🇮🇹' },
  { id: 'nz',        label: 'Opportunities In NZ?',      src: '/nz.webp',          cls: 'card-nz',     angle: -45,  flag: '🇳🇿' },
  { id: 'australia', label: 'Study In Australia?',       src: '/aus_culture.webp', cls: 'card-aus',    angle:  135, flag: '🇦🇺' },
  { id: 'canada',    label: 'Scholarships In Canada?',   src: '/canada.webp',      cls: 'card-canada', angle:   45, flag: '🇨🇦' },
]

export default function Opportunity() {
  const navigate = useNavigate()
  const wrapRef = useRef(null)
  const [dims, setDims] = useState({ W: 900, H: 560 })

  useEffect(() => {
    const update = () => {
      if (wrapRef.current) {
        setDims({ W: wrapRef.current.offsetWidth, H: wrapRef.current.offsetHeight })
      }
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const { W, H } = dims
  const cx = W / 2, cy = H / 2
  const orbitR = Math.min(W, H) * 0.38
  const ring1R = Math.min(W, H) * 0.22
  const ring2R = Math.min(W, H) * 0.38

  return (
    <>
      <style>{`
        .opp-orbital {
          position: relative;
          width: 100%;
          height: 560px;
          background: linear-gradient(135deg, #F0F6FF 0%, #FDF8F2 100%);
          border-radius: 28px;
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .opp-orbital { height: 480px; }
        }
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          border: 1.5px dashed rgba(180,180,220,0.4);
          pointer-events: none;
        }
        .card-italy  { box-shadow: 0 0 0 1.5px rgba(30,58,138,0.22),  0 8px 28px rgba(30,58,138,0.12); }
        .card-nz     { box-shadow: 0 0 0 1.5px rgba(185,28,28,0.25),  0 8px 28px rgba(185,28,28,0.12); }
        .card-aus    { box-shadow: 0 0 0 1.5px rgba(245,158,11,0.28), 0 8px 28px rgba(245,158,11,0.12); }
        .card-canada { box-shadow: 0 0 0 1.5px rgba(59,130,246,0.25), 0 8px 28px rgba(96,165,250,0.12); }
        .orbit-dot {
          position: absolute;
          width: 9px; height: 9px;
          border-radius: 50%;
          background: rgba(249,115,22,0.55);
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .orbit-line {
          position: absolute;
          height: 1.5px;
          background: linear-gradient(90deg, rgba(249,115,22,0.5), rgba(200,200,230,0.15));
          transform-origin: left center;
          pointer-events: none;
        }
      `}</style>

      <div className="opp-orbital" ref={wrapRef}>

        {/* Orbit rings */}
        <div className="orbit-ring" style={{
          width: ring1R*2, height: ring1R*2,
          left: cx - ring1R, top: cy - ring1R
        }} />
        <div className="orbit-ring" style={{
          width: ring2R*2, height: ring2R*2,
          left: cx - ring2R, top: cy - ring2R
        }} />

        {/* Center — Grab Opportunity sun */}
        <motion.div
          style={{
            position: 'absolute',
            width: 190, height: 190,
            left: cx - 95, top: cy - 95,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FF8C42 0%, #F97316 60%, #EA580C 100%)',
            boxShadow: '0 0 60px rgba(249,115,22,0.45), 0 0 120px rgba(249,115,22,0.2)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            zIndex: 10, cursor: 'default'
          }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.08 }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.8)', letterSpacing: 2, textTransform: 'uppercase' }}>Grab</span>
          <span style={{ fontSize: 30, fontWeight: 900, color: '#fff', lineHeight: 1.1 }}>ONE!</span>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.85)', letterSpacing: 1.5, textTransform: 'uppercase' }}>Opportunity</span>
        </motion.div>

        {/* Country cards at orbit positions */}
        {countries.map(({ id, label, src, cls, angle, flag }, i) => {
          const rad = (angle * Math.PI) / 180
          const px = cx + orbitR * Math.cos(rad)
          const py = cy + orbitR * Math.sin(rad)
          const CARD_W = 140

          // connector line from center edge to dot
          const edgeR = 95
          const ex = cx + edgeR * Math.cos(rad)
          const ey = cy + edgeR * Math.sin(rad)
          const lineLen = orbitR - edgeR - 4
          const lineAngleDeg = angle

          return (
            <div key={id}>
              {/* Connector line */}
              <div className="orbit-line" style={{
                left: ex, top: ey,
                width: lineLen,
                transform: `rotate(${lineAngleDeg}deg)`,
                zIndex: 3
              }} />

              {/* Dot at card position */}
              <div className="orbit-dot" style={{ left: px, top: py, zIndex: 4 }} />

              {/* Card */}
              <motion.div
                className={`${cls}`}
                style={{
                  position: 'absolute',
                  width: CARD_W,
                  left: px - CARD_W/2,
                  top: py - 80,
                  background: 'rgba(255,255,255,0.93)',
                  borderRadius: 18,
                  padding: '12px 10px',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', gap: 8,
                  zIndex: 5,
                  backdropFilter: 'blur(8px)',
                }}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.12, type: 'spring', stiffness: 120, damping: 14 }}
                whileHover={{ scale: 1.08, y: -6, transition: { duration: 0.2 } }}
              >
                <img
                  src={src}
                  alt={label}
                  style={{ width: '100%', height: 68, borderRadius: 10, objectFit: 'cover' }}
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div style={{
                  display: 'none', width: '100%', height: 68,
                  borderRadius: 10, alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, background: 'rgba(243,244,246,0.8)'
                }}>{flag}</div>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#374151', textAlign: 'center', lineHeight: 1.3 }}>
                  {label}
                </span>
                <motion.button
                  onClick={() => navigate('/apply', { state: { country: id } })}
                  style={{
                    background: '#F97316', color: '#fff', border: 'none',
                    borderRadius: 10, padding: '5px 0', fontSize: 11,
                    fontWeight: 600, cursor: 'pointer', width: '100%'
                  }}
                  whileHover={{ background: '#EA580C', scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Apply Now
                </motion.button>
              </motion.div>
            </div>
          )
        })}

      </div>
    </>
  )
}