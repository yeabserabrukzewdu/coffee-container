import React, { useState } from 'react';
import { GENERAL_INFO } from '../data';
import { MapPin, Phone, Mail, Globe, Clock, Send, CheckCircle, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactSectionProps {
  setActiveTab?: (tab: string) => void;
}

export default function ContactSection({ setActiveTab }: ContactSectionProps) {
  const { t, language } = useLanguage();
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
            backgroundImage: "url('/40.webp')",
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
            {t('cont.getInTouch')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-wide italic"
          >
            {t('cont.connect')}
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
          {t('cont.directComm')}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-serif font-light text-base sm:text-lg md:text-xl text-coffee-900/90 leading-relaxed max-w-3xl mx-auto"
        >
          {t('cont.directP')}
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
              <div className="space-y-2 font-serif">
                <span className="text-[10px] font-mono tracking-widest text-red-300 uppercase font-extrabold">
                  {t('cont.officeHub')}
                </span>
                <h3 className="font-serif font-light text-2xl sm:text-3xl text-white">
                  {t('cont.corpHeadquarters')}
                </h3>
                <div className="w-12 h-[1px] bg-red-400 my-4" />
              </div>

              {/* Direct Details */}
              <div className="space-y-6 font-serif font-light text-sm sm:text-base text-coffee-100">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-extrabold text-[11px] text-red-300 uppercase tracking-widest mb-1">{t('cont.hqLocation')}</h4>
                    <p className="leading-relaxed">
                      {language === 'ar' ? 'منطقة بولي، أديس أبابا، إثيوبيا' : GENERAL_INFO.contact.location}
                    </p>
                    <p className="text-xs text-coffee-300 mt-1 font-mono uppercase">
                      {language === 'ar' ? 'منطقة بولي الفرعية • أديس أبابا، إثيوبيا' : 'Bole Subcity • Addis Ababa, Ethiopia'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-red-300 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans font-extrabold text-[11px] text-red-300 uppercase tracking-widest mb-1">{t('cont.directCall')}</h4>
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
                    <h4 className="font-sans font-extrabold text-[11px] text-red-300 uppercase tracking-widest mb-1">{t('cont.electronicMail')}</h4>
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
                    <h4 className="font-sans font-extrabold text-[11px] text-red-300 uppercase tracking-widest mb-1">{t('cont.officialSite')}</h4>
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
                    {t('cont.operationalTime')}
                  </span>
                  <h3 className="font-serif font-light text-xl text-coffee-950">
                    {t('cont.workingHours')}
                  </h3>
                </div>
              </div>

              <div className="h-[1px] bg-coffee-100" />

              <div className="space-y-4 font-serif font-light text-sm text-coffee-800">
                <div className="flex justify-between items-center py-1">
                  <span>{t('cont.monFri')}</span>
                  <span className="font-sans text-xs font-semibold text-coffee-950">{language === 'ar' ? '٨:٠٠ ص – ٥:٠٠ م' : '8:00 AM – 5:00 PM'}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-t border-coffee-50">
                  <span>{t('cont.sat')}</span>
                  <span className="font-sans text-xs font-semibold text-coffee-950">{language === 'ar' ? '٨:٠٠ ص – ١٢:٣٠ م' : '8:00 AM – 12:30 PM'}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-t border-coffee-50 text-coffee-400">
                  <span>{t('cont.sun')}</span>
                  <span className="font-sans text-xs uppercase tracking-wider font-semibold text-red-600">{t('cont.closed')}</span>
                </div>

                <div className="p-4 bg-leaf-50/50 border border-leaf-100/30 rounded-sm mt-4 text-xs font-serif text-leaf-800 leading-relaxed italic">
                  {t('cont.eatNote')}
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
                {t('cont.intake')}
              </h3>
              <p className="font-serif text-xs sm:text-sm text-coffee-600 font-light leading-relaxed">
                {t('cont.intakeSub')}
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-leaf-50/40 border border-leaf-100 p-8 rounded-sm space-y-4 text-center my-12">
                <CheckCircle className="w-12 h-12 text-leaf-600 mx-auto" />
                <h4 className="font-serif text-xl font-bold text-leaf-900">
                  {t('hero.quoteSuccess')}
                </h4>
                <p className="font-serif text-sm text-coffee-800 max-w-md mx-auto leading-relaxed">
                  {language === 'ar' 
                    ? 'تم تسجيل طلب التوريد واستفساركم بنجاح في سجلات أديس أبابا. سنقوم بالتواصل معكم ومراجعة التفاصيل قريباً.'
                    : 'Your inquiry has been logged securely in our origin CRM. We appreciate your interest in structuring a premium coffee container partnership.'}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-[#c22d2d] hover:bg-[#a12323] text-white font-sans text-xs font-bold tracking-widest uppercase rounded-sm transition-colors cursor-pointer"
                  >
                    {language === 'ar' ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-coffee-700">
                      {t('cont.fullName')}
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={language === 'ar' ? 'مثال: محمد أحمد' : 'e.g. John Doe'}
                      className="w-full px-4 py-3 bg-coffee-50 border border-coffee-100 focus:border-leaf-500 rounded-sm text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-coffee-700">
                      {t('cont.corpEmail')}
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-coffee-50 border border-coffee-100 focus:border-leaf-500 rounded-sm text-sm focus:outline-none transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company Name */}
                  <div className="space-y-2">
                    <label htmlFor="contact-company" className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-coffee-700">
                      {t('cont.compRoastery')}
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder={language === 'ar' ? 'مثال: محمصة الأطلس المختصة' : 'e.g. Blue Ridge Roasters'}
                      className="w-full px-4 py-3 bg-coffee-50 border border-coffee-100 focus:border-leaf-500 rounded-sm text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Destination Country */}
                  <div className="space-y-2">
                    <label htmlFor="contact-country" className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-coffee-700">
                      {t('cont.destCountry')}
                    </label>
                    <input
                      type="text"
                      id="contact-country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      placeholder={language === 'ar' ? 'مثال: المملكة العربية السعودية' : 'e.g. Germany'}
                      className="w-full px-4 py-3 bg-coffee-50 border border-coffee-100 focus:border-leaf-500 rounded-sm text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div className="space-y-2">
                  <label htmlFor="contact-inquiryType" className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-coffee-700">
                    {t('cont.primaryObj')}
                  </label>
                  <select
                    id="contact-inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-coffee-50 border border-coffee-100 focus:border-leaf-500 rounded-sm text-sm focus:outline-none transition-colors"
                  >
                    <option value="Container Pricing">{t('cont.fclPricing')}</option>
                    <option value="Green Sample Request">{t('cont.greenSample')}</option>
                    <option value="Custom Sourcing Partnership">{t('cont.customSourcing')}</option>
                    <option value="General Business Inquiry">{t('cont.generalCollab')}</option>
                  </select>
                </div>

                {/* Message / Details */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block text-[11px] font-sans font-extrabold uppercase tracking-widest text-coffee-700">
                    {t('cont.detailedMsg')}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('cont.detailedPlaceholder')}
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
                      <span>{t('cont.transmitting')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t('cont.submitIntake')}</span>
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
          <div className="p-4 sm:p-6 space-y-2 border-b border-coffee-50 font-serif">
            <span className="text-[10px] font-mono tracking-widest text-[#c22d2d] uppercase font-extrabold block">
              {t('cont.locationMap')}
            </span>
            <h3 className="font-serif font-light text-xl sm:text-2xl text-coffee-950">
              {t('cont.sampleRoom')}
            </h3>
            <p className="font-serif text-xs text-coffee-500 font-light">
              {t('cont.sampleRoomSub')}
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

          <div className="p-4 bg-coffee-50 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono text-coffee-600 gap-4 font-serif">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-leaf-500 animate-ping shrink-0" />
              <span>{language === 'ar' ? 'إحداثيات الموقع: حي بولي، أديس أبابا، إثيوبيا' : t('cont.locationCoord')}</span>
            </div>
            <span>{t('cont.transportArrangements')}</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
