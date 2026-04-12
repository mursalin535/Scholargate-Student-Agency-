import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaChevronRight,
  FaClock,
} from 'react-icons/fa';
import { 
  GraduationCap, 
  BookOpen, 
  Globe, 
  Pencil, 
  Award,
  Book
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Scholarships', path: '/scholarships' },
    { name: 'Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const services = [
    { name: 'University Admission', path: '/services/university-admission-process' },
    { name: 'Visa Processing', path: '/services/visa-processing' },
    { name: 'Scholarship Arrangement', path: '/services/scholarship-arrangement' },
    { name: 'Accommodation Support', path: '/services/accommodation-support' },
    { name: 'Pre-departure Help', path: '/services/pre-departure-help' },
  ];

  return (
    <footer className="w-full bg-slate-50 relative pt-24 pb-12 overflow-hidden border-t-2 border-slate-100">
      
      {/* ── THEMATIC BACKGROUND ELEMENTS (Alive & Educational) ── */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* ASYMMETRIC CORNER SHAPES */}
        {/* Left: Blue Organic Blob */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-32 -left-32 w-[40rem] h-[40rem] bg-blue-400/10 rounded-full blur-3xl"
        />

        {/* Right: Orange Hexagon (Geometric) */}
        <motion.div
          animate={{ 
            rotate: [0, -10, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-[35rem] h-[35rem] bg-orange-400/5 opacity-40"
          style={{ 
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' 
          }}
        />

        {/* STUDY ABROAD THEMED FLOATING ICONS (Subtle Background Pattern) */}
        <div className="absolute inset-0 opacity-[0.04] lg:opacity-[0.07]">
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-[10%] left-[20%]"
          >
            <GraduationCap size={160} className="text-blue-500" />
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 12, repeat: Infinity }}
            className="absolute top-[45%] right-[15%]"
          >
            <BookOpen size={140} className="text-orange-500" />
          </motion.div>
          
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute top-[15%] right-[35%]"
          >
            <Globe size={120} className="text-blue-400" />
          </motion.div>
          
          <motion.div 
            animate={{ x: [0, 20, 0], rotate: [45, 60, 45] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-[20%] left-[40%]"
          >
            <Pencil size={100} className="text-orange-400" />
          </motion.div>

          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 9, repeat: Infinity }}
            className="absolute top-[60%] left-[5%]"
          >
            <Award size={130} className="text-blue-600" />
          </motion.div>
        </div>

        {/* Spinning Dashed Rings (Core Brand Identity) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-[35rem] h-[35rem] rounded-full border-[3px] border-dashed border-blue-200/30"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-32 w-[30rem] h-[30rem] rounded-full border-[3px] border-dashed border-orange-200/30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* ── MAIN CONTENT GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="relative">
                <motion.img 
                  animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  src="/student_agency_logo.webp" 
                  alt="Logo" 
                  className="w-16 h-16 rounded-full object-cover shadow-2xl z-10 relative border-2 border-white"
                />
                <div className="absolute inset-0 bg-blue-400/40 rounded-full scale-150 blur-md animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-slate-800 poppins tracking-tight">
                  ✒️Legacy <span className="text-blue-500">ScholarGate</span>
                </span>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Global Education</span>
              </div>
            </Link>
            
            <p className="text-slate-600 inter leading-relaxed text-[15px] max-w-sm">
              Navigating the path to international excellence with expert guidance and a student-first approach.
            </p>
            
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, href: "https://www.facebook.com/LegacyScholarGate", color: "text-blue-600" },
                { icon: <FaWhatsapp />, href: "https://wa.me/8801913895849", color: "text-green-600" },
                { icon: <FaEnvelope />, href: "mailto:info@legacyscholargate.bd", color: "text-blue-500" },
                { icon: <FaPhoneAlt />, href: "tel:09611772246", color: "text-orange-500" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.1, backgroundColor: '#fff' }}
                  className={`w-12 h-12 flex justify-center items-center bg-white/80 backdrop-blur-sm ${social.color} rounded-2xl shadow-sm border border-slate-100 transition-all duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:pl-8">
            <h3 className="text-lg font-bold text-slate-800 poppins mb-8 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
              Navigation
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-slate-500 inter text-[15px] hover:text-blue-500 font-medium transition-colors flex items-center gap-2 group"
                  >
                    <FaChevronRight className="text-[10px] text-slate-300 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 poppins mb-8 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-orange-500 rounded-full" />
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path}
                    className="text-slate-500 inter text-[15px] hover:text-orange-500 font-medium transition-colors flex items-center gap-2 group"
                  >
                    <FaChevronRight className="text-[10px] text-slate-300 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-8">
            <h3 className="text-lg font-bold text-slate-800 poppins mb-8 flex items-center gap-3">
              <span className="w-1.5 h-6 bg-slate-800 rounded-full" />
              Connect
            </h3>
            <div className="space-y-6">
              {[
                { icon: <FaPhoneAlt />, label: "Call Now", val: "09611 772246", color: "blue", href: "tel:09611772246" },
                { icon: <FaWhatsapp />, label: "WhatsApp", val: "+880 1913 895849", color: "green", href: "https://wa.me/8801913895849" },
                { icon: <FaClock />, label: "Hours", val: "11 AM – 8 PM", color: "slate" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className={`w-12 h-12 flex justify-center items-center bg-white text-${item.color === 'blue' ? 'blue-500' : item.color === 'green' ? 'green-500' : 'slate-500'} rounded-2xl border-b-4 border-r-2 border-${item.color === 'blue' ? 'blue-400' : item.color === 'green' ? 'green-400' : 'slate-400'}/30 shadow-sm transition-transform group-hover:scale-110`}>
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="text-slate-700 inter font-bold text-[14px] group-hover:text-blue-500 transition-colors">{item.val}</a>
                    ) : (
                      <span className="text-slate-700 inter font-bold text-[14px]">{item.val}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="pt-10 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-xs inter font-medium text-center">
            © {currentYear} <span className="text-slate-700 font-bold">Student Agency</span>. Leading Overseas Education Consultant.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Use'].map((item, i) => (
              <Link 
                key={i} 
                to={`/${item.toLowerCase().replace(/ /g, '-')}`} 
                className="text-slate-400 text-xs font-bold hover:text-blue-500 transition-colors underline-offset-4 hover:underline"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
