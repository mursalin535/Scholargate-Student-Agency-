import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import axios from 'axios';
import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope, FaCalendarAlt, FaGlobe, FaFileUpload, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function Apply() {
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '', address: '', phone: '', gender: '',
        email: '', dob: '',
        country: location.state?.country || 'italy',
    });
    const [files, setFiles] = useState({ photo: null, passport: null, certificate: null, additional: null });
    const [preview, setPreview] = useState({ photo: null });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files: uploadedFiles } = e.target;
        const file = uploadedFiles[0];
        setFiles(prev => ({ ...prev, [name]: file }));
        if (name === 'photo' && file) {
            const reader = new FileReader();
            reader.onloadend = () => setPreview(prev => ({ ...prev, photo: reader.result }));
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !files.passport || !files.certificate) {
            Swal.fire({ icon: 'error', title: 'Missing Information', text: 'Please fill in all required fields and upload essential documents.', confirmButtonColor: '#3085d6' });
            return;
        }

        const data = new FormData();
        Object.keys(formData).forEach(key => data.append(key, formData[key]));
        if (files.photo) data.append('photo', files.photo);
        if (files.passport) data.append('passport', files.passport);
        if (files.certificate) data.append('certificate', files.certificate);
        if (files.additional) data.append('additional', files.additional);

        Swal.fire({ 
            title: 'Submitting Application...', 
            text: 'Please wait while we process your request.', 
            allowOutsideClick: false, 
            didOpen: () => Swal.showLoading() 
        });

        try {
            const response = await axios.post('http://localhost:8080/api/apply', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (response.status === 200) {
                Swal.fire({ 
                    icon: 'success', 
                    title: 'Application Submitted!', 
                    text: 'Your scholarship application has been successfully sent. Our team will contact you shortly.', 
                    confirmButtonColor: '#10b981' 
                }).then(() => navigate('/'));
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'There was an error submitting your application. Please try again later.',
                confirmButtonColor: '#ef4444'
            });
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 pb-12 overflow-x-hidden font-inter">
            <style>{`
                .form-input {
                    width: 100%; background: white; border: 1px solid #e2e8f0;
                    border-radius: 12px; padding: 12px 16px; outline: none;
                    transition: all 0.3s; color: #334155; font-weight: 500;
                }
                .form-input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.12); }
                .form-label {
                    display: flex; align-items: center; gap: 8px;
                    font-size: 10px; font-weight: 800; color: #64748b;
                    margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.18em;
                }
                .file-upload-card {
                    position: relative; border: 2px dashed #cbd5e1; border-radius: 16px;
                    padding: 24px; display: flex; flex-direction: column;
                    align-items: center; justify-content: center;
                    transition: all 0.3s; cursor: pointer; text-align: center; height: 192px;
                }
                .file-upload-card:hover { border-color: #3b82f6; background: rgba(239,246,255,0.5); }
            `}</style>

            {/* ══ HERO — white bg, blue shapes ══ */}
            <div className="relative w-full min-h-[62vh] flex items-end overflow-hidden pt-24 bg-white">

                {/* subtle blue dot grid */}
                <div className="absolute inset-0 opacity-[0.045]"
                    style={{ backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

                {/* subtle blue line grid */}
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg,rgba(59,130,246,1) 1px,transparent 1px)", backgroundSize: "72px 72px" }} />

                {/* large spinning rings — blue */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-36 -right-36 w-[560px] h-[560px] rounded-full border border-blue-200 pointer-events-none" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full border border-blue-100 pointer-events-none" />
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-44 -left-44 w-[500px] h-[500px] rounded-full border border-blue-200 pointer-events-none" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-28 -left-28 w-[320px] h-[320px] rounded-full border border-blue-100 pointer-events-none" />

                {/* dashed spinning shapes — blue */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-16 left-20 w-24 h-24 rounded-full border-2 border-dashed border-blue-300/50 pointer-events-none" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-24 right-28 w-16 h-16 border-2 border-dashed border-blue-300/50 rounded-md pointer-events-none" />
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/3 right-1/4 w-10 h-10 border-2 border-dashed border-blue-200/60 rounded-full pointer-events-none" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/3 left-1/4 w-12 h-12 border-2 border-dashed border-blue-200/60 rounded-sm pointer-events-none" />

                {/* geometric fill shapes — blue tints */}
                <motion.div
                    animate={{ rotate: [0, 18, 0], scale: [1, 1.12, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[22%] left-[9%] w-9 h-9 bg-blue-100 rounded-xl pointer-events-none" />
                <motion.div
                    animate={{ rotate: [0, -22, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute bottom-[28%] right-[10%] w-7 h-7 bg-blue-100 rounded-full pointer-events-none" />
                <motion.div
                    animate={{ rotate: [0, 30, 0] }}
                    transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute top-[45%] left-[18%] w-5 h-5 bg-blue-200/70 rounded-md pointer-events-none" />
                <motion.div
                    animate={{ rotate: [0, -15, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[15%] right-[10%] w-6 h-6 bg-blue-100 rounded-lg pointer-events-none" />

                {/* floating blobs — blue */}
                <motion.div
                    animate={{ scale: [1, 1.3, 1], x: [0, 40, 0], y: [0, -30, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
                <motion.div
                    animate={{ scale: [1, 1.2, 1], x: [0, -25, 0], y: [0, 35, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                    className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-50 rounded-full blur-3xl pointer-events-none" />

                {/* floating dots — blue */}
                {[
                    { top: "20%", left: "18%", d: 0 },
                    { top: "62%", left: "7%", d: 1 },
                    { top: "28%", right: "14%", d: 0.5 },
                    { bottom: "22%", left: "52%", d: 1.4 },
                    { top: "48%", right: "6%", d: 0.9 },
                    { top: "12%", left: "58%", d: 1.1 },
                    { bottom: "30%", right: "28%", d: 0.3 },
                ].map((p, i) => (
                    <motion.div key={i}
                        animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 3 + i * 0.45, repeat: Infinity, ease: "easeInOut", delay: p.d }}
                        className="absolute w-2 h-2 bg-blue-400 rounded-full pointer-events-none"
                        style={{ top: p.top, left: p.left, right: p.right, bottom: p.bottom }}
                    />
                ))}

                {/* hero text */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 md:pb-24">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                            className="flex items-center gap-3 mb-5"
                        >
                            <div className="h-px w-10 bg-blue-400" />
                            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">Scholarship Program 2026</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.88] mb-5 uppercase tracking-tighter"
                            style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                            Apply For<br />
                            <span className="text-blue-500 italic">Your</span><br />
                            Future.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                            className="text-slate-500 text-base md:text-lg max-w-lg leading-relaxed"
                        >
                            Complete the form below with accurate information to start your academic journey abroad.
                        </motion.p>
                    </motion.div>
                </div>

                {/* bottom fade to slate-50 */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none" />
            </div>

            {/* ══ BODY ══ */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6 relative z-20">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/3 sticky top-32"
                    >
                        <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                            <img src="/Apply_now.webp" alt="Apply Now" className="w-full h-auto object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <h3 className="text-2xl font-black uppercase leading-tight mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Global Education</h3>
                                <p className="text-blue-100 text-sm font-medium">Join thousands of students achieving their dreams in Italy, New Zealand, and Canada.</p>
                            </div>
                        </div>

                        <div className="mt-8 bg-white p-8 rounded-[32px] border border-slate-100 shadow-xl">
                            <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs mb-6 pb-4 border-b border-slate-100" style={{ fontFamily: "'Poppins', sans-serif" }}>Required Documents</h4>
                            <ul className="space-y-4">
                                {[
                                    'Passport Size Photograph (JPEG/PNG)',
                                    'Clear Passport Copy (PDF)',
                                    'Latest Academic Certificate (PDF)',
                                    'Language Proficiency (IELTS/PTE/MOI)',
                                ].map((item, i) => (
                                    <motion.li key={i}
                                        initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                        className="flex items-center gap-3 text-slate-600 text-sm font-bold"
                                    >
                                        <FaCheckCircle className="text-green-500 shrink-0" />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                        className="w-full lg:w-2/3 bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-slate-100"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">

                            <div className="flex items-center gap-3">
                                <div className="w-1 h-7 rounded-full bg-blue-500" />
                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter" style={{ fontFamily: "'Poppins', sans-serif" }}>Personal Information</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="form-label"><FaUser className="text-blue-500" /> Full Name</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="form-input" required />
                                </div>
                                <div>
                                    <label className="form-label"><FaEnvelope className="text-blue-500" /> Email Address</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="form-input" required />
                                </div>
                                <div>
                                    <label className="form-label"><FaPhone className="text-blue-500" /> Phone Number</label>
                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+880 1XXX XXXXXX" className="form-input" required />
                                </div>
                                <div>
                                    <label className="form-label"><FaCalendarAlt className="text-blue-500" /> Date of Birth</label>
                                    <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="form-input" required />
                                </div>
                                <div>
                                    <label className="form-label">Gender</label>
                                    <select name="gender" value={formData.gender} onChange={handleChange} className="form-input" required>
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="form-label"><FaGlobe className="text-blue-500" /> Destination Country</label>
                                    <select name="country" value={formData.country} onChange={handleChange} className="form-input font-bold" required>
                                        <option value="italy">🇮🇹 Italy</option>
                                        <option value="nz">🇳🇿 New Zealand</option>
                                        <option value="canada">🇨🇦 Canada</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="form-label"><FaMapMarkerAlt className="text-blue-500" /> Present Address</label>
                                <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Enter your full address" rows="3" className="form-input resize-none" required />
                            </div>

                            {/* Document Uploads */}
                            <div className="space-y-6 pt-6 border-t border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-7 rounded-full bg-blue-500" />
                                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter" style={{ fontFamily: "'Poppins', sans-serif" }}>Document Uploads</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[
                                        { name: "photo", label: "Passport Size Photo", accept: "image/*", hint: "Click to upload image" },
                                        { name: "passport", label: "Passport Copy (PDF)", accept: "application/pdf", hint: "Click to upload PDF" },
                                        { name: "certificate", label: "Academic Certificate (PDF)", accept: "application/pdf", hint: "Click to upload PDF" },
                                        { name: "additional", label: "Additional Documents (Optional)", accept: ".pdf,.doc,.docx", hint: "Language score, awards, etc." },
                                    ].map((doc, i) => (
                                        <motion.div key={doc.name} className="space-y-2"
                                            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                                        >
                                            <label className="form-label">{doc.label}</label>
                                            <div className="file-upload-card">
                                                <input type="file" name={doc.name} accept={doc.accept} onChange={handleFileChange}
                                                    className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                                                {doc.name === "photo" && preview.photo ? (
                                                    <img src={preview.photo} className="w-24 h-24 rounded-lg object-cover mb-2" alt="Preview" />
                                                ) : files[doc.name] ? (
                                                    <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-3">
                                                        <FaCheckCircle className="text-green-500 text-xl" />
                                                    </div>
                                                ) : (
                                                    <FaFileUpload className="text-4xl text-slate-300 mb-2" />
                                                )}
                                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                                    {files[doc.name] ? files[doc.name].name : doc.hint}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Minimal submit */}
                            <motion.button
                                type="submit"
                                whileHover={{ x: 4 }}
                                whileTap={{ scale: 0.97 }}
                                className="group flex items-center gap-3 text-blue-600 font-black uppercase tracking-widest text-sm border-b-2 border-blue-200 hover:border-blue-500 pb-1 transition-all duration-300"
                            >
                                Submit Application
                                <motion.span
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                                    className="text-blue-400 group-hover:text-blue-600 transition-colors"
                                >
                                    <FaArrowRight className="text-xs" />
                                </motion.span>
                            </motion.button>

                        </form>
                    </motion.div>
                </div>
            </div>

            {/* ambient bg */}
            <div className="fixed top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10 -mr-48 -mt-48 pointer-events-none" />
            <div className="fixed bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10 -ml-48 -mb-48 pointer-events-none" />
        </div>
    );
}