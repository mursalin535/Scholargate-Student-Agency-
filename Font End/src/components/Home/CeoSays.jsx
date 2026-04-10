import {motion} from 'framer-motion'

export default function CeoSays(){
    return(
        <>
        <style>{`
            .ceo-section {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                min-height: 80vh;
            }
            .ceo-left {
                width: 50%;
                min-height: 80vh;
                flex-shrink: 0;
            }
            .ceo-left-2 {
                width: 98%;
                min-height: 80vh;
            }
            .ceo-left-3 {
                width: 98%;
                min-height: 80vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 20px;
                position: relative;
                z-index: 10;
            }
            .ceo-img {
                width: clamp(120px, 30%, 50%);
                aspect-ratio: 1 / 1;
                border-radius: 50%;
                border: 8px solid white;
                object-fit: cover;
                position: relative;
                z-index: 10;
            }
            .ceo-title {
                font-size: clamp(13px, 1.8vw, 36px);
                font-family: 'Poppins', sans-serif;
                font-weight: 300;
                color: #334155;
                text-align: center;
                position: relative;
                z-index: 10;
            }
            .ceo-org {
                font-size: clamp(11px, 1.4vw, 24px);
                font-family: 'Inter', sans-serif;
                color: #1e293b;
                text-align: center;
                position: relative;
                z-index: 10;
            }
            .ceo-right {
                width: 50%;
                min-height: 80vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
            }
            .ceo-heading-block {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0 8px;
            }
            .ceo-heading-top {
                width: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            .ceo-heading-bottom {
                width: 100%;
                display: flex;
                justify-content: flex-end;
                align-items: flex-end;
            }
            .ceo-message-text {
                font-size: clamp(28px, 7vw, 15vh);
                font-family: 'Poppins', sans-serif;
                color: #94a3b8;
                white-space: nowrap;
            }
            .ceo-from-text {
                font-size: clamp(28px, 7vw, 15vh);
                font-family: 'Poppins', sans-serif;
                color: #334155;
                white-space: nowrap;
            }
            .ceo-badge {
                background: #3b82f6;
                border-radius: 1.5rem;
                color: white;
                font-family: 'Inter', sans-serif;
                font-weight: 700;
                padding: 0 clamp(6px, 0.8vw, 14px);
            }
            .ceo-quote-block {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0 clamp(12px, 2vw, 28px);
            }
            .ceo-quote {
                font-size: clamp(11px, 1.1vw, 20px);
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                color: #475569;
                line-height: 1.75;
            }
            .ceo-quote-mark {
                font-size: clamp(20px, 2.5vw, 40px);
                line-height: 1;
            }

            @media (max-width: 900px) {
                .ceo-section {
                    flex-direction: column;
                    min-height: unset;
                }
                .ceo-left {
                    width: 100%;
                    min-height: unset;
                    clip-path: none !important;
                    border-radius: 0 0 2rem 2rem;
                    padding-bottom: 32px;
                }
                .ceo-left-2 {
                    width: 100%;
                    min-height: unset;
                    clip-path: none !important;
                    border-radius: 0 0 2rem 2rem;
                }
                .ceo-left-3 {
                    width: 100%;
                    min-height: unset;
                    clip-path: none !important;
                    border-radius: 0 0 2rem 2rem;
                    padding: 40px 20px 40px;
                    gap: 16px;
                }
                .ceo-img {
                    width: clamp(100px, 35vw, 200px);
                    border-width: 5px;
                }
                .ceo-title { font-size: clamp(14px, 3.5vw, 24px); }
                .ceo-org   { font-size: clamp(12px, 2.8vw, 20px); }
                .ceo-right {
                    width: 100%;
                    min-height: unset;
                    padding: 32px 20px 40px;
                }
                .ceo-message-text { font-size: clamp(36px, 11vw, 80px); }
                .ceo-from-text   { font-size: clamp(36px, 11vw, 80px); }
                .ceo-quote { font-size: clamp(13px, 2.2vw, 18px); }
                .ceo-quote-mark { font-size: clamp(22px, 5vw, 36px); }
            }

            @media (max-width: 480px) {
                .ceo-message-text { font-size: 11vw; }
                .ceo-from-text   { font-size: 11vw; }
                .ceo-img { width: 40vw; }
                .ceo-title { font-size: 4vw; }
                .ceo-org   { font-size: 3.5vw; }
                .ceo-quote { font-size: 3.5vw; line-height: 1.7; }
                .ceo-quote-mark { font-size: 8vw; }
                .ceo-right { padding: 24px 16px 32px; }
                .ceo-left-3 { padding: 32px 16px 32px; }
            }
        `}</style>

        <motion.div
            className="ceo-section"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
        >
            {/* Left */}
            <motion.div
                className="ceo-left bg-blue-400 lg:rounded-r-4xl xl:rounded-4xl sm:rounded-b-2xl md:rounded-b-2xl"
                style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)" }}
            >
                <motion.div
                    className="ceo-left-2 bg-orange-200 lg:rounded-r-4xl xl:rounded-4xl sm:rounded-b-2xl md:rounded-b-2xl"
                    style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)" }}
                >
                    <motion.div
                        className="ceo-left-3 bg-orange-50/95"
                        style={{ clipPath: "polygon(0 0, 100% 0, 88% 100%, 0% 100%)" }}
                    >
                        <motion.div className="w-full h-full absolute inset-0 z-0 flex justify-center items-center">
                            <motion.div className="w-[100%] h-[30%] bg-amber-300 rounded-4xl rotate-35" />
                        </motion.div>
                        <img src="/ceo.webp" className="ceo-img" alt="CEO" />
                        <h1 className="ceo-title">Chief Executive Officer (CEO)</h1>
                        <span className="ceo-org popins bg-white rounded-4xl border-2 border-blue-200">Legacy Scholar Gate</span>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Right */}
            <motion.div className="ceo-right">
                <motion.div
                    className="ceo-heading-block"
                    initial={{ y: 150 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    <div className="ceo-heading-top">
                        <span className="ceo-message-text">Message</span>
                    </div>
                    <div className="ceo-heading-bottom">
                        <span className="ceo-from-text">
                            From <span className="ceo-badge">CEO</span>
                        </span>
                    </div>
                </motion.div>

                <motion.div
                    className="ceo-quote-block"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 1, duration: 0.7 }}
                >
                    <span className="ceo-quote">
                        <span className="ceo-quote-mark">"</span>
                        {' '}At our core, we believe every student deserves access to global opportunities, regardless of their background. Our mission is to guide, support, and empower ambitious minds to pursue education beyond borders through scholarships and trusted mentorship. We are committed to transparency, integrity, and student success at every step of the journey. Watching our students grow into global leaders is what drives us forward. Together, we are not just building careers — we are shaping futures and transforming lives through education. Your dreams are valid, and we are here to help you achieve them.{' '}
                        <span className="ceo-quote-mark">"</span>
                    </span>
                </motion.div>
            </motion.div>

        </motion.div>
        </>
    )
}