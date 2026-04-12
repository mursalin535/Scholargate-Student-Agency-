import { motion } from 'framer-motion';
import { FaWhatsapp, FaPaperPlane, FaPhoneAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function FloatingActions() {
    const navigate = useNavigate();

    const actions = [
        {
            icon: <FaWhatsapp />,
            label: "WhatsApp",
            color: "bg-green-500",
            hoverColor: "hover:bg-green-600",
            onClick: () => window.open("https://wa.me/8801913895849", "_blank"),
            shadow: "shadow-green-200"
        },
        {
            icon: <FaPaperPlane />,
            label: "Apply Now",
            color: "bg-blue-600",
            hoverColor: "hover:bg-blue-700",
            onClick: () => navigate("/apply"),
            shadow: "shadow-blue-200"
        },
        {
            icon: <FaPhoneAlt />,
            label: "Contact",
            color: "bg-amber-500",
            hoverColor: "hover:bg-amber-600",
            onClick: () => navigate("/contact"),
            shadow: "shadow-amber-200"
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-row gap-3 items-center">
            {actions.map((action, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="group relative"
                >
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                        {action.label}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                    </div>

                    <motion.button
                        onClick={action.onClick}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`${action.color} ${action.hoverColor} text-white w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-xl md:text-2xl shadow-xl ${action.shadow} transition-colors duration-300 border-2 border-white/20 backdrop-blur-sm`}
                    >
                        {action.icon}
                    </motion.button>
                </motion.div>
            ))}
        </div>
    );
}
