import {motion} from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function Opportunity(){
    const navigate = useNavigate();
    return(
        <>
        <style>{`
            .opp-bg {
                position: relative;
                overflow: hidden;
                background: linear-gradient(135deg, #F8FBFF 0%, #FAFCFD 40%, #FFFBF7 100%);
            }
            .opp-bg::before {
                content: '';
                position: absolute;
                top: -120px;
                left: -120px;
                width: 420px;
                height: 420px;
                border-radius: 50%;
                background: rgba(147,197,253,0.10);
                filter: blur(80px);
                pointer-events: none;
                z-index: 0;
            }
            .opp-bg::after {
                content: '';
                position: absolute;
                bottom: -100px;
                right: -100px;
                width: 460px;
                height: 460px;
                border-radius: 50%;
                background: rgba(253,186,116,0.09);
                filter: blur(80px);
                pointer-events: none;
                z-index: 0;
            }
            .opp-mid {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 360px;
                height: 360px;
                border-radius: 50%;
                background: rgba(167,139,250,0.05);
                filter: blur(150px);
                pointer-events: none;
                z-index: 0;
            }
            .opp-card {
                position: relative;
                z-index: 1;
                background: rgba(255,255,255,0.88);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
            }
            .opp-card::before {
                content: '';
                position: absolute;
                inset: 0;
                border-radius: inherit;
                background: linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.0) 100%);
                pointer-events: none;
                z-index: 0;
            }
            .card-italy {
                border: none !important;
                box-shadow:
                    0 0 0 1.5px rgba(30,58,138,0.25),
                    0 0 0 4px rgba(96,165,250,0.12),
                    0 8px 32px 0 rgba(30,58,138,0.13),
                    inset 0 1px 0 rgba(255,255,255,0.9) !important;
            }
            .card-italy:hover {
                box-shadow:
                    0 0 0 1.5px rgba(30,58,138,0.4),
                    0 0 0 5px rgba(96,165,250,0.18),
                    0 20px 48px 0 rgba(30,58,138,0.20),
                    inset 0 1px 0 rgba(255,255,255,0.9) !important;
            }
            .card-nz {
                border: none !important;
                box-shadow:
                    0 0 0 1.5px rgba(185,28,28,0.30),
                    0 0 0 4px rgba(252,165,165,0.13),
                    0 8px 32px 0 rgba(185,28,28,0.12),
                    inset 0 1px 0 rgba(255,255,255,0.9) !important;
            }
            .card-nz:hover {
                box-shadow:
                    0 0 0 1.5px rgba(185,28,28,0.50),
                    0 0 0 5px rgba(252,165,165,0.20),
                    0 20px 48px 0 rgba(185,28,28,0.20),
                    inset 0 1px 0 rgba(255,255,255,0.9) !important;
            }
            .card-grab {
                border: none !important;
                box-shadow:
                    0 0 0 1.5px rgba(251,146,60,0.35),
                    0 0 0 4px rgba(253,186,116,0.12),
                    0 -4px 24px 0 rgba(251,146,60,0.14),
                    inset 0 1px 0 rgba(255,255,255,0.9) !important;
            }
            .card-grab:hover {
                box-shadow:
                    0 0 0 1.5px rgba(251,146,60,0.55),
                    0 0 0 6px rgba(253,186,116,0.20),
                    0 -8px 40px 0 rgba(251,146,60,0.22),
                    inset 0 1px 0 rgba(255,255,255,0.9) !important;
            }
            .card-canada {
                border: none !important;
                box-shadow:
                    0 0 0 1.5px rgba(59,130,246,0.28),
                    0 0 0 4px rgba(147,197,253,0.12),
                    0 8px 32px 0 rgba(96,165,250,0.12),
                    inset 0 1px 0 rgba(255,255,255,0.9) !important;
            }
            .card-canada:hover {
                box-shadow:
                    0 0 0 1.5px rgba(59,130,246,0.45),
                    0 0 0 5px rgba(147,197,253,0.20),
                    0 20px 48px 0 rgba(96,165,250,0.22),
                    inset 0 1px 0 rgba(255,255,255,0.9) !important;
            }
        `}</style>

        <motion.div
            className="opp-bg sm:w-full lg:w-[90%] xl:w-[90%] h-[100vh] flex flex-row justify-center items-center gap-3 rounded-4xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80, damping: 20 }}
            viewport={{ once: false, amount: 0.5 }}
        >
            <div className="opp-mid" />

            {/* Left — Italy */}
            <motion.div className="sm:w-[32%] h-full flex justify-center items-end" style={{zIndex:1}}>
                <motion.div
                    className="opp-card card-italy w-full h-[40%] rounded-4xl flex flex-col justify-center items-center gap-3 p-4"
                    whileHover={{ y: -10, transition: { duration: 0.25 } }}
                >
                    <motion.img src="/italy.webp" className="sm:w-full lg:w-[70%] xl:w-[70%] h-[40%] rounded-2xl object-cover" style={{zIndex:1,position:'relative'}} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}/>
                    <motion.span className="sm:text-md lg:text-xl xl:text-xl inter text-slate-700 font-medium text-center" style={{zIndex:1,position:'relative'}}>Wanna Study In Italy?</motion.span>
                    <motion.button 
                        onClick={() => navigate('/apply', { state: { country: 'italy' } })}
                        className="bg-orange-500 text-white popins-light rounded-2xl px-5 py-2 font-medium" style={{zIndex:1,position:'relative'}} whileHover={{ backgroundColor: '#ea580c', scale: 1.06, transition: { duration: 0.2 } }} whileTap={{ scale: 0.96 }}>Apply Now</motion.button>
                </motion.div>
            </motion.div>

            {/* Center */}
            <motion.div className="w-[35%] h-full flex flex-col justify-start items-center gap-10" style={{zIndex:1}}>
                <motion.div
                    className="opp-card card-nz w-full h-[40%] flex flex-col justify-center items-center gap-4 rounded-2xl p-4"
                    whileHover={{ y: -10, transition: { duration: 0.25 } }}
                >
                    <motion.img src="/nz.webp" className="sm:w-full lg:w-[70%] xl:w-[70%] h-[40%] rounded-2xl object-cover" style={{zIndex:1,position:'relative'}} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}/>
                    <motion.span className="sm:text-md lg:text-xl xl:text-xl inter text-slate-700 font-medium text-center" style={{zIndex:1,position:'relative'}}>Opportunities In New Zealand?</motion.span>
                    <motion.button 
                        onClick={() => navigate('/apply', { state: { country: 'nz' } })}
                        className="bg-orange-500 text-white popins-light rounded-2xl px-5 py-2 font-medium" style={{zIndex:1,position:'relative'}} whileHover={{ backgroundColor: '#ea580c', scale: 1.06, transition: { duration: 0.2 } }} whileTap={{ scale: 0.96 }}>Apply Now</motion.button>
                </motion.div>

                <motion.div
                    className="opp-card card-grab w-full h-[25%] rounded-4xl flex flex-col justify-center items-center"
                    whileHover={{ transition: { duration: 0.25 } }}
                >
                    <motion.span className="text-2xl lg:text-3xl font-bold popins text-slate-600" style={{zIndex:1,position:'relative'}}>Grab One!!</motion.span>
                    <motion.span className="text-2xl lg:text-3xl font-bold popins text-slate-800" style={{zIndex:1,position:'relative'}}>Opportunity</motion.span>
                </motion.div>
            </motion.div>

            {/* Right — Canada */}
            <motion.div className="w-[32%] h-full flex justify-center items-end" style={{zIndex:1}}>
                <motion.div
                    className="opp-card card-canada w-full h-[40%] rounded-2xl flex flex-col justify-center items-center gap-3 p-4"
                    whileHover={{ y: -10, transition: { duration: 0.25 } }}
                >
                    <motion.img src="/canada.webp" className="sm:w-full lg:w-[70%] xl:w-[70%] h-[40%] rounded-2xl object-cover" style={{zIndex:1,position:'relative'}} whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}/>
                    <motion.span className="sm:text-md lg:text-xl xl:text-xl inter text-slate-700 font-medium text-center" style={{zIndex:1,position:'relative'}}>Scholarships In Canada?</motion.span>
                    <motion.button 
                        onClick={() => navigate('/apply', { state: { country: 'canada' } })}
                        className="bg-orange-500 text-white popins-light rounded-2xl px-5 py-2 font-medium" style={{zIndex:1,position:'relative'}} whileHover={{ backgroundColor: '#ea580c', scale: 1.06, transition: { duration: 0.2 } }} whileTap={{ scale: 0.96 }}>Apply Now</motion.button>
                </motion.div>
            </motion.div>

        </motion.div>
        </>
    )
}