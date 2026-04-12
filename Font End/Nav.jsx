import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome, FaInfoCircle, FaGraduationCap,
  FaCogs, FaUsers, FaPhone, FaBars, FaPaperPlane
} from "react-icons/fa";

export default function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  function Navigate(e) {
    e.preventDefault();
    navigate("/");
  }

  const navItems = [
    { name: "Home",        icon: <FaHome />,        path: "/" },
    { name: "About",       icon: <FaInfoCircle />,  path: "/about" },
    { name: "Scholarships",icon: <FaGraduationCap />,path: "/scholarships" },
    { name: "Services",    icon: <FaCogs />,         path: "/services" },
    { name: "Apply",       icon: <FaPaperPlane />,   path: "/apply" },
    { name: "Contact Us",  icon: <FaPhone />,        path: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  const active = navItems.find(item =>
    item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path)
  ) || navItems[0];

  const handleNavigate = (item) => { navigate(item.path); setOpen(false); };

  const isPathActive = (itemPath) =>
    itemPath === "/" ? location.pathname === "/" : location.pathname.startsWith(itemPath);

  return (
    <>
      <style>{`
        .nav-logo {
          /* Fixed size at every breakpoint — never percentage-based */
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          /* Keep the circle even if parent clips */
          overflow: hidden;
          display: block;
        }
        @media (min-width: 640px)  { .nav-logo { width: 54px; height: 54px; } }
        @media (min-width: 768px)  { .nav-logo { width: 62px; height: 62px; } }

        .nav-left {
          /* Padding left must be big enough so the circle logo never gets
             swallowed by the parent's rounded-r-full clipping edge */
          padding-left: 10px;
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <div className="w-full h-[12vh] sm:h-[14vh] md:h-[15vh] flex items-center gap-2 sm:gap-4 md:gap-5 px-0 sm:px-0 md:px-6 z-50 fixed">

        {/* LEFT pill */}
        <div className="nav-left w-[52%] sm:w-[40%] md:w-[30%] h-full rounded-r-full border-r-2 sm:border-r-4 border-b-2 sm:border-b-4 border-blue-400 flex flex-row justify-start items-center gap-3 sm:gap-5 md:gap-8 pr-4 sm:pr-6">

          {/* Logo — fixed pixel size, never distorts */}
      <motion.img
  src="/student_agency_logo.webp"
  alt="Logo"
  className="nav-logo"
  animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
  whileHover={{ scale: 1.2, rotate: 360 }}
  onClick={(e) => Navigate(e)}
  style={{ cursor: "pointer" }}  // ✅ fix
/>
          {/* Hamburger + active page label */}
          <span
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 sm:gap-2 text-sm sm:text-lg md:text-xl text-slate-800 font-bold cursor-pointer transition-all duration-300 hover:scale-110 hover:text-blue-900 whitespace-nowrap"
          >
            <FaBars />
            {active.icon}
            <span className="hidden sm:inline">{active.name}</span>
          </span>
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
            WebkitMask: "radial-gradient(80px at left center, transparent 98%, black 100%)",
            mask:        "radial-gradient(80px at left center, transparent 98%, black 100%)",
          }}
        >
          {navItems.map((item, i) => (
            <span
              key={i}
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

      {/* ── MOBILE MENU (slides up from bottom) ── */}
      <div
        className={`md:hidden fixed bottom-0 left-0 w-full bg-blue-300 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"}`}
        style={{ maxHeight: "60vh", overflowY: "auto" }}
      >
        <div className="flex flex-col gap-2 py-6 px-4">
          {navItems.map((item, i) => (
            <span
              key={i}
              onClick={() => handleNavigate(item)}
              className={`flex items-center gap-3 text-lg font-bold cursor-pointer transition-all duration-300 py-3 px-4 rounded-xl
                ${isPathActive(item.path)
                  ? "text-blue-900 bg-blue-100 scale-[1.03]"
                  : "text-slate-800"}
                hover:bg-blue-100 hover:scale-[1.03]`}
            >
              {item.icon}
              {item.name}
            </span>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/30 z-40"
          style={{ top: "12vh" }}
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}