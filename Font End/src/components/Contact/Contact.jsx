import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import axios from 'axios';
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaClock,
  FaCalendarAlt,
  FaUser,
  FaEnvelopeOpenText,
  FaPhone,
  FaArrowRight
} from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    shift: 'morning',
    message: '',
    disclaimer: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.disclaimer) {
      Swal.fire({
        icon: 'warning',
        title: 'Disclaimer Required',
        text: 'Please confirm that all information provided is correct.',
        confirmButtonColor: '#3b82f6'
      });
      return;
    }

    Swal.fire({
      title: 'Sending Message...',
      text: 'Please wait while we process your request.',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const response = await axios.post('http://localhost:8080/api/contact', formData);
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'We have received your message and will get back to you soon.',
          confirmButtonColor: '#3b82f6'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          shift: 'morning',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again later.',
        confirmButtonColor: '#3b82f6'
      });
    }
  };

  const openingHours = [
    { day: "Monday", time: "11:00 am – 8:00 pm" },
    { day: "Tuesday", time: "11:00 am – 8:00 pm" },
    { day: "Wednesday", time: "11:00 am – 8:00 pm" },
    { day: "Thursday", time: "11:00 am – 8:00 pm" },
    { day: "Friday", time: "11:00 am – 1:00 pm, 2:00 pm – 8:00 pm" },
    { day: "Saturday", time: "11:00 am – 8:00 pm" },
    { day: "Sunday", time: "Closed", closed: true },
  ];

  const socialLinks = [
    { icon: <FaWhatsapp />, label: "WhatsApp", color: "text-green-500", href: "https://wa.me/8801913895849" },
    { icon: <FaEnvelope />, label: "Email", color: "text-blue-500", href: "mailto:info@legacyscholargate.bd" },
    { icon: <FaPhoneAlt />, label: "Call Us", color: "text-orange-500", href: "tel:09611772246" },
    { icon: <FaFacebookF />, label: "Facebook", color: "text-blue-700", href: "https://www.facebook.com/LegacyScholarGate" },
  ];

  return (
    <div className="w-full min-h-screen bg-white pb-20 overflow-x-hidden">

      {/* ── HERO ── */}
      <div className="relative w-full h-[55vh] md:h-[65vh] flex flex-col justify-center items-center px-4 overflow-hidden">

        {/* Real background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/company.png"
            alt="Legacy ScholarGate"
            className="w-full h-full object-cover object-center opacity-70"
          />
          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-white/70" />
        </div>

        {/* spinning dashed rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute top-6 right-10 w-44 h-44 rounded-full border-[3px] border-dashed border-blue-300/40 z-0"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 left-16 w-28 h-28 rounded-full border-[3px] border-dashed border-orange-300/40 z-0"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 -translate-y-1/2 right-1/3 w-20 h-20 rounded-full border-2 border-dashed border-blue-200/30 z-0"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-8 left-1/3 w-12 h-12 rounded-full border-2 border-dashed border-orange-200/40 z-0"
        />

        {/* solid geometric shapes */}
        <motion.div
          animate={{ rotate: [45, 90, 45], scale: [1, 1.12, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[8%] w-12 h-12 border-4 border-blue-400/25 rounded-lg z-0"
        />
        <motion.div
          animate={{ rotate: [-12, 12, -12], scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-[8%] w-16 h-16 border-4 border-orange-400/25 rounded-full z-0"
        />
        <motion.div
          animate={{ rotate: [0, 60, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/4 left-1/4 w-8 h-8 border-[3px] border-blue-300/30 z-0"
        />
        <motion.div
          animate={{ rotate: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-14 right-1/3 w-10 h-10 border-[3px] border-orange-300/30 rounded-md z-0"
        />
        <motion.div
          animate={{ rotate: [0, -45, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-12 right-1/4 w-6 h-6 bg-blue-400/10 rounded-sm z-0"
        />
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-[15%] w-5 h-5 bg-orange-400/20 rounded-full z-0"
        />

        {/* floating dots */}
        {[
          { top: "20%", left: "20%", delay: 0, color: "bg-blue-400" },
          { top: "60%", left: "75%", delay: 1, color: "bg-orange-400" },
          { top: "35%", right: "15%", delay: 0.5, color: "bg-blue-300" },
          { bottom: "20%", left: "40%", delay: 1.5, color: "bg-blue-500" },
          { top: "70%", left: "12%", delay: 0.8, color: "bg-orange-300" },
          { top: "15%", left: "55%", delay: 1.2, color: "bg-blue-400" },
          { bottom: "35%", right: "30%", delay: 0.3, color: "bg-orange-400" },
        ].map((d, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -14, 0], opacity: [0.45, 1, 0.45] }}
            transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: d.delay }}
            className={`absolute w-2 h-2 rounded-full ${d.color} z-0`}
            style={{ top: d.top, left: d.left, right: d.right, bottom: d.bottom }}
          />
        ))}

        {/* hero text */}
        <motion.div
          className="relative z-10 text-center max-w-4xl pt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 bg-blue-500/10 rounded-full border border-blue-200"
          >
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Get In Touch</span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-8xl font-black text-slate-900 poppins tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Let's <span className="text-blue-500">Connect</span>
          </motion.h1>

          <motion.p
            className="text-slate-600 text-lg md:text-xl inter leading-relaxed max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            Ready to start your journey? Our team is standing by to help you navigate the path to international education.
          </motion.p>
        </motion.div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 -mt-10 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Column */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Opening Hours Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4, boxShadow: "0 24px 48px -12px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-200/50"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="p-3 bg-blue-500 text-white rounded-2xl text-xl shadow-lg shadow-blue-200"
                >
                  <FaClock />
                </motion.div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 poppins">Business Hours</h2>
                  <p className="text-slate-500 text-sm">When you can find us in office</p>
                </div>
              </div>

              <div className="space-y-1">
                {openingHours.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0 group hover:bg-slate-50/60 rounded-xl px-2 transition-colors"
                  >
                    <span className={`font-semibold ${item.closed ? 'text-red-500' : 'text-slate-700'}`}>{item.day}</span>
                    <span className={`text-sm md:text-base px-3 py-1 rounded-lg transition-colors ${item.closed ? 'bg-red-50 text-red-500 font-bold' : 'bg-slate-50 text-slate-600 group-hover:bg-white'}`}>{item.time}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Contact Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6, boxShadow: "0 16px 32px -8px rgb(0 0 0 / 0.12)" }}
                  whileTap={{ scale: 0.96 }}
                  className="flex flex-col items-center gap-4 p-8 bg-white border border-slate-100 rounded-3xl transition-colors duration-300 hover:border-slate-200"
                >
                  <motion.div
                    className={`text-4xl ${link.color}`}
                    whileHover={{ scale: 1.2, rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    {link.icon}
                  </motion.div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{link.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-blue-100/40"
          >
            <motion.h2
              className="text-3xl font-black text-slate-800 poppins mb-2"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              Message Us
            </motion.h2>
            <motion.p
              className="text-slate-500 mb-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22 }}
            >
              We'll get back to you within 24 hours.
            </motion.p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.28 }}
                >
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full pl-12 pr-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-400 transition-all outline-none text-slate-700 font-medium"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.34 }}
                >
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                  <div className="relative">
                    <FaEnvelopeOpenText className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full pl-12 pr-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-400 transition-all outline-none text-slate-700 font-medium"
                      required
                    />
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.40 }}
                >
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                  <div className="relative">
                    <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXX..."
                      className="w-full pl-12 pr-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-400 transition-all outline-none text-slate-700 font-medium"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.46 }}
                >
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Preferred Date</label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-12 pr-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-400 transition-all outline-none text-slate-700 font-medium"
                      required
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.52 }}
              >
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Preferred Shift</label>
                <select 
                  name="shift"
                  value={formData.shift}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-400 transition-all outline-none text-slate-700 font-medium appearance-none cursor-pointer"
                >
                  <option value="morning">Morning (11:00 am - 3:00 pm)</option>
                  <option value="afternoon">Afternoon (3:00 pm - 8:00 pm)</option>
                </select>
              </motion.div>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.58 }}
              >
                <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your study goals..."
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-blue-400 transition-all outline-none text-slate-700 font-medium resize-none"
                  required
                ></textarea>
              </motion.div>

              <motion.div
                className="flex items-start gap-3 px-1"
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.62 }}
              >
                <input
                  type="checkbox"
                  name="disclaimer"
                  id="disclaimer"
                  checked={formData.disclaimer}
                  onChange={handleChange}
                  className="mt-1.5 w-4 h-4 rounded border-slate-300 text-blue-500 focus:ring-blue-400 cursor-pointer"
                  required
                />
                <label htmlFor="disclaimer" className="text-sm text-slate-500 leading-relaxed cursor-pointer select-none">
                  I hereby declare that all the information provided above is true, complete, and accurate to the best of my knowledge.
                </label>
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.64 }}
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -12px rgba(59,130,246,0.45)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-5 rounded-2xl transition-all duration-300 flex justify-center items-center gap-3 text-lg shadow-xl shadow-blue-200"
              >
                Send Message
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaArrowRight className="text-sm" />
                </motion.span>
              </motion.button>

              <motion.p
                className="text-center text-xs text-slate-400 inter"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: 0.72 }}
              >
                By submitting, you agree to our{" "}
                <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a>.
                We never share your data.
              </motion.p>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}