import React, { useState } from 'react';
import { GENERAL_INFO } from '../data';
import { MapPin, Phone, Mail, Globe, Clock, Send, CheckCircle, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactSectionProps {
  setActiveTab?: (tab: string) => void;
}

export default function ContactSection({ setActiveTab }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    inquiryType: 'Container Pricing',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        inquiryType: 'Container Pricing',
        message: ''
      });
    }, 1200);
  };

  return (
    <div className="bg-[#fdfcfb] text-coffee-950 pb-12 overflow-hidden">
      {/* 1. Immersive Full-Bleed Contact Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('./23.webp')",
          }}
        />
        {/* Dark Vignette overlay matching the brand's premium feeling */}
        <div className="absolute inset-0 bg-linear-to-b from-coffee-950/60 via-coffee-950/45 to-[#fdfcfb]" />
        
        {/* Title Centered */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-4 pt-16">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm font-sans font-extrabold tracking-[0.4em] text-leaf-300 uppercase block"
          >
            GET IN TOUCH
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-wide italic"
          >
            Connect with Origin
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="h-[1px] bg-leaf-400 mx-auto mt-6" 
          />
        </div>
      </section>

      {/* 2. Centered Header & Intro Paragraph */}
      <section className="max-w-4xl mx-auto px-4 text-center py-16 sm:py-20 space-y-8 overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#c22d2d] font-sans text-xs sm:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-extrabold"
        >
          DIRECT COMMUNICATION & COLLABORATION
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-serif font-light text-base sm:text-lg md:text-xl text-coffee-900/90 leading-relaxed max-w-3xl mx-auto"
        >
          We are committed to providing structured, transparent, and direct pathways for international green coffee sourcing. Reach out directly to our leadership teams, schedule origin visits, or inquire about current coffee stocks.
        </motion.p>
      </section>

      {/* 3. Contact Grid & Working Hours */}
      <section className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Panel: Contact info & working hours (5 Columns) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#442c33] text-white p-8 sm:p-10 rounded-sm shadow-xl space-y-8"
            >
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-widest text-red-300 uppercase font-extrabold">
                  OFFICE & LOGISTICS HUB
                </span>
                <h3 className="font-serif font-light text-2xl sm:text-3xl text-white">
                  Corporate Headquarters
                </h3>
                <div className="w-12 h-[1px] bg-red-400 my-4" />
              </div>

              {/* Direct Details */}
              <div className="space-y-6 font-serif font-light text-sm sm:text-base text-coffee-100">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-extrabold text-[11px] text-red-300 uppercase tracking-widest mb-1">HQ Location</h4>
                    <p className="leading-relaxed">{GENERAL_INFO.contact.location}</p>
                    <p className="text-xs text-coffee-300 mt-1 font-mono uppercase">Bole Subcity • Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-extrabold text-[11px] text-red-300 uppercase tracking-widest mb-1">Direct Call</h4>
                    <p className="font-sans font-medium hover:text-white transition-colors">
                      <a href={`tel:${GENERAL_INFO.contact.phone.replace(/\s+/g, '')}`}>
                        {GENERAL_INFO.contact.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-extrabold text-[11px] text-red-300 uppercase tracking-widest mb-1">Electronic Mail</h4>
                    <p className="font-sans hover:text-white transition-colors">
                      <a href={`mailto:${GENERAL_INFO.contact.email}`}>
                        {GENERAL_INFO.contact.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Globe className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-extrabold text-[11px] text-red-300 uppercase tracking-widest mb-1">Official Site</h4>
                    <p className="font-sans hover:text-white transition-colors">
                      <a href={`https://${GENERAL_INFO.contact.website}`} target="_blank" rel="noopener noreferrer">
                        {GENERAL_INFO.contact.website}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Working Hours Box */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white border border-coffee-100 rounded-sm p-8 sm:p-10 space-y-6 shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-coffee-50 text-leaf-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-leaf-700 uppercase font-extrabold block">
                    OPERATIONAL TIME
                  </span>
                  <h3 className="font-serif font-light text-xl text-coffee-950">
                    Sourcing & Working Hours
                  </h3>
                </div>
              </div>

              <div className="h-[1px] bg-coffee-100" />

              <div className="space-y-4 font-serif font-light text-sm text-coffee-800">
                <div className="flex justify-between items-center py-1">
                  <span>Monday – Friday</span>
                  <span className="font-sans text-xs font-semibold text-coffee-950">8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 border-t border-coffee-50">
                  <span>Saturday</span>
                  <span className="font-sans text-xs font-semibold text-coffee-950">8:00 AM – 12:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-1 border-t border-coffee-50 text-coffee-400">
                  <span>Sunday</span>
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold text-red-600">Closed</span>
                </div>

                <div className="p-4 bg-leaf-50/50 border border-leaf-100/30 rounded-sm mt-4 text-xs font-serif text-leaf-800 leading-relaxed italic">
                  * Note: Sourcing schedules correspond to East Africa Time (EAT) / UTC+3. Sample evaluations and cupping tours must be arranged at least 48 hours in advance.
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Panel: Interactive Contact Form (7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white border border-coffee-100 rounded-sm p-8 sm:p-12 shadow-xs text-left"
          >
            <div className="space-y-4 mb-8">
              <h3 className="font-serif font-light text-2xl sm:text-3xl text-coffee-950">
                Direct Inquiry Intake
              </h3>
              <p className="font-serif text-xs sm:text-sm text-coffee-600 font-light leading-relaxed">
                Fill out our secure sourcing intake form below. An origin communications coordinator will process your message and respond within 24 operational hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-leaf-50/40 border border-leaf-100 p-8 rounded-sm space-y-4 text-center my-12">
                <CheckCircle className="w-12 h-12 text-leaf-600 mx-auto" />
                <h4 className="font-serif text-xl font-bold text-leaf-900">
                  Transmission Succeeded
                </h4>
                <p className="font-serif text-sm text-coffee-800 max-w-md mx-auto leading-relaxed">
                  Your inquiry has been logged securely in our origin CRM. We appreciate your interest in structuring a premium coffee container partnership.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-[#c22d2d] hover:bg-[#a12323] text-white font-sans text-xs font-bold tracking-widest uppercase rounded-sm transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-coffee-700">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-coffee-50 border border-coffee-100 focus:border-leaf-500 rounded-sm text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-coffee-700">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-coffee-50 border border-coffee-100 focus:border-leaf-500 rounded-sm text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div className="space-y-2">
                    <label htmlFor="contact-company" className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-coffee-700">
                      Company / Roastery
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Blue Ridge Roasters"
                      className="w-full px-4 py-3 bg-coffee-50 border border-coffee-100 focus:border-leaf-500 rounded-sm text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Destination Country */}
                  <div className="space-y-2">
                    <label htmlFor="contact-country" className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-coffee-700">
                      Destination Country
                    </label>
                    <input
                      type="text"
                      id="contact-country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder="e.g. Germany"
                      className="w-full px-4 py-3 bg-coffee-50 border border-coffee-100 focus:border-leaf-500 rounded-sm text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <label htmlFor="contact-inquiryType" className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-coffee-700">
                    Primary Sourcing Objective
                  </label>
                  <select
                    id="contact-inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-coffee-50 border border-coffee-100 focus:border-leaf-500 rounded-sm text-sm focus:outline-none transition-colors"
                  >
                    <option value="Container Pricing">FCL Container Pricing / Direct Shipment</option>
                    <option value="Green Sample Request">B2B Cupping Sample Request</option>
                    <option value="Custom Sourcing Partnership">Custom Regional Sourcing Partnership</option>
                    <option value="General Business Inquiry">General Business Collaboration</option>
                  </select>
                </div>

                {/* Message / Details */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-coffee-700">
                    Detailed Message / Specifications *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Specify regions (e.g. Yirgacheffe, Guji, Sidamo), requested cupping grades, volumes, and preferred shipment schedules..."
                    className="w-full px-4 py-3 bg-coffee-50 border border-coffee-100 focus:border-leaf-500 rounded-sm text-sm focus:outline-none transition-colors resize-y"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full py-4 bg-[#c22d2d] hover:bg-[#a12323] disabled:bg-coffee-300 text-white font-sans text-xs font-extrabold tracking-widest uppercase rounded-sm shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting Sourcing Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Sourcing Intake</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* 4. Google Map Integration Section */}
      <section className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-coffee-100 rounded-sm p-4 shadow-lg text-left"
        >
          <div className="p-4 sm:p-6 space-y-2 border-b border-coffee-50">
            <span className="text-[10px] font-mono tracking-widest text-[#c22d2d] uppercase font-extrabold block">
              LOCATION AND MAP
            </span>
            <h3 className="font-serif font-light text-xl sm:text-2xl text-coffee-950">
              Addis Ababa Head Office & Sample Room
            </h3>
            <p className="font-serif text-xs text-coffee-500 font-light">
              Visit our central office to explore green samples and cup with our certified Q-graders. Close proximity to Bole International Airport (ADD).
            </p>
          </div>

          {/* Embedded Google Map Frame */}
          <div className="relative w-full h-[400px] overflow-hidden bg-coffee-50/50 rounded-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.11166347355!2d38.746890351052674!3d9.010793392476023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1720562400000!5m2!1sen!2sus" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Coffee Container HQ, Addis Ababa"
              id="google-maps-iframe"
            />
          </div>

          <div className="p-4 bg-coffee-50 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono text-coffee-600 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-leaf-500 animate-ping shrink-0" />
              <span>Location Coordinate: Bole District, Addis Ababa, Ethiopia</span>
            </div>
            <span>• Direct transport arrangements available for foreign buyer groups</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
