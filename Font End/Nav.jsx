import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaGraduationCap,
  FaCogs,
  FaUsers,
  FaPhone,
  FaBars
} from "react-icons/fa";

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "About", icon: <FaInfoCircle />, path: "/about" },
    { name: "Scholarships", icon: <FaGraduationCap />, path: "/scholarships" },
    { name: "Services", icon: <FaCogs />, path: "/services" },
  
    { name: "Contact Us", icon: <FaPhone />, path: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  // current active item from route
  const active = navItems.find(item => {
    if (item.path === "/") return location.pathname === "/";
    return location.pathname.startsWith(item.path) || (item.path === "/contact" && location.pathname === "/apply");
  }) || navItems[0];

  const handleNavigate = (item) => {
    navigate(item.path);
    setOpen(false);
  };

  const isPathActive = (itemPath) => {
    if (itemPath === "/") return location.pathname === "/";
    return location.pathname.startsWith(itemPath) || (itemPath === "/contact" && location.pathname === "/apply");
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full h-[12vh] sm:h-[14vh] md:h-[15vh] flex items-center gap-2 sm:gap-4 md:gap-5 px-3 sm:px-4 md:px-6 z-50 fixed">

        {/* LEFT */}
        <div className="w-[40%] sm:w-[35%] md:w-[30%] h-full rounded-r-full border-r-2 sm:border-r-3 md:border-r-4 border-b-2 sm:border-b-3 md:border-b-4 border-blue-400 flex flex-row justify-center items-center px-2 sm:px-3 md:px-4 gap-3 sm:gap-6 md:gap-10">
          
          <motion.img
            src="/student_agency_logo.webp"
            alt="Logo"
            className="w-[20%] sm:w-[22%] md:w-[25%] h-full rounded-full object-cover"
            initial={{ scale: 1 }}
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            whileHover={{ scale: 1.2, rotate: 360 }}
          />

          <div className="w-[80%] sm:w-[78%] md:w-[70%] h-full flex items-center justify-center">
            <span
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 sm:gap-2 md:gap-3 text-sm sm:text-lg md:text-2xl text-slate-800 font-bold cursor-pointer transition-all duration-300 hover:scale-110 hover:text-blue-900"
            >
              <FaBars />
              {active.icon}
              <span className="hidden sm:inline">{active.name}</span>
            </span>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div
          className={`hidden md:flex w-[65%] h-[70%] bg-blue-300 px-6 md:px-10 gap-4 md:gap-8
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex-row justify-center items-center rounded-r-4xl
          ${open 
            ? "opacity-100 translate-x-0 scale-100" 
            : "opacity-0 -translate-x-10 scale-95 pointer-events-none"}
          `}
          style={{
            WebkitMask:
              "radial-gradient(80px at left center, transparent 98%, black 100%)",
            mask:
              "radial-gradient(80px at left center, transparent 98%, black 100%)",
          }}
        >
          {navItems.map((item, index) => (
            <span
              key={index}
              onClick={() => handleNavigate(item)}
              className={`text-sm md:text-lg font-bold cursor-pointer transition-all duration-300 whitespace-nowrap
                ${isPathActive(item.path) ? "text-blue-900 scale-110" : "text-white"}
                hover:scale-110 hover:text-blue-900`}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed bottom-0 left-0 w-full bg-blue-300 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${open 
          ? "translate-y-0 opacity-100" 
          : "translate-y-full opacity-0 pointer-events-none"}
        `}
        style={{
          maxHeight: "60vh",
          overflowY: "auto",
        }}
      >
        <div className="flex flex-col gap-4 py-6 px-4">
          {navItems.map((item, index) => (
            <div key={index}>
              <span
                onClick={() => handleNavigate(item)}
                className={`flex items-center gap-3 text-lg font-bold cursor-pointer transition-all duration-300 py-3 px-4 rounded-lg
                  ${isPathActive(item.path) ? "text-blue-900 bg-blue-100 scale-105" : "text-slate-800"}
                  hover:bg-blue-100 hover:scale-105`}
              >
                {item.icon}
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="md:hidden fixed left-0 right-0 bottom-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
          style={{ top: "12vh" }}
        />
      )}
    </>
  );
}