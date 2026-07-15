import React from 'react';
import Logo from './Logo';
import { Phone, Mail, Globe, MapPin, Award, ShieldCheck, Coffee, ArrowRight } from 'lucide-react';
import { GENERAL_INFO, COFFEE_VARIETIES } from '../data';
import { useLanguage } from '../contexts/LanguageContext';
// Use direct public URLs for local coffee illustrations added by the user
const coffeeFooterBg = '/PNG File-05.png';
const coffeePlantBeans = '/PNG File-04.png';
const coffeeAccentBeans = '/PNG File-06.png';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Handle variety selection from footer
  const handleVarietyClick = (varietyId: string) => {
    setActiveTab('varieties');
    // Scroll to the top of the window so they see the catalog and details
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Dispatch a custom event so the VarietyCatalog can automatically select/highlight this variety if initialized
    setTimeout(() => {
      const event = new CustomEvent('select-variety-from-footer', { detail: { varietyId } });
      window.dispatchEvent(event);
    }, 100);
  };

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f0f5f1] text-[#1e2e21] border-t border-[#cbd9cd] relative overflow-hidden font-serif">
      {/* Background coffee-related illustration overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.08] mix-blend-multiply pointer-events-none"
        style={{ backgroundImage: `url(${coffeeFooterBg})` }}
      />
      {/* Subtle organic light bleed from bottom corner */}
      <div className="absolute -bottom-48 -right-48 w-128 h-128 bg-[#7a9d80]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-48 -left-48 w-128 h-128 bg-[#cbd9cd]/25 rounded-full blur-3xl pointer-events-none" />

      {/* 1. Main Content Container */}
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10 space-y-16">
        
        {/* Top Section: Redesigned B2B Sourcing Call to Action */}
        <div className="relative border-b border-[#cbd9cd] pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#e2eae4] border border-[#cbd9cd] p-8 sm:p-12 relative overflow-hidden">
            {/* Elegant corner accent brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#7a9d80]/20" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#7a9d80]/20" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#7a9d80]/20" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#7a9d80]/20" />
            
            <div className="lg:col-span-6 space-y-4 text-left">
              <span className="text-[10px] font-sans font-extrabold tracking-[0.3em] text-[#c22d2d] uppercase block">
                {language === 'ar' ? 'شحنات تجارية مباشرة من قلب إثيوبيا' : 'ETHIOPIAN DIRECT COMMERCIAL SHIPMENTS'}
              </span>
              <h3 className="font-serif font-light text-2xl sm:text-4xl text-[#1e2e21] leading-tight">
                {language === 'ar' ? 'احصل على عقود توريد بن أخضر متميزة وموثوقة' : 'Secure Premium Green Coffee Contracts'}
              </h3>
              <p className="text-[#415444] text-xs sm:text-sm leading-relaxed font-light max-w-3xl">
                {language === 'ar' 
                  ? 'قم بتأسيس شراكة توريد مباشرة وسلسة معنا لتصلك شحنات الحاويات المضمونة بمواصفات دقيقة. اطلب عينات الفحص وتعرف على مصفوفة الأسعار والتحاليل الفنية للمحاصيل.'
                  : 'Establish a seamless direct-source trade agreement. Fill out our comprehensive exporter inquiry to request samples, detailed lot analytics, and container-load price quotes.'}
              </p>
            </div>

            {/* Coffee plant and beans illustration column */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end items-center relative py-4 lg:py-0">
              <div className="relative group/ill overflow-hidden rounded-full border border-[#cbd9cd] p-1 bg-white/30 shadow-inner">
                <img 
                  src={coffeePlantBeans} 
                  alt="Coffee Plant and Beans" 
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover filter contrast-[1.05] brightness-[0.9] transition-transform duration-500 group-hover/ill:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 rounded-full bg-[#c22d2d]/10 opacity-0 group-hover/ill:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
            
            <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 justify-end w-full">
              <button
                onClick={() => handleNavClick('contact')}
                className="px-6 py-4 border border-[#cbd9cd] hover:border-[#7a9d80] hover:bg-white/40 text-[#1e2e21] text-[10px] font-sans font-bold tracking-[0.2em] uppercase transition-all duration-200 select-none cursor-pointer text-center"
              >
                {language === 'ar' ? 'اتصال مباشر' : 'Direct Inquiry'}
              </button>
              <button
                onClick={() => handleNavClick('export')}
                className="px-6 py-4 bg-[#c22d2d] hover:bg-[#a12323] text-white text-[10px] font-sans font-extrabold tracking-[0.2em] uppercase transition-all duration-250 shadow-lg shadow-[#c22d2d]/10 select-none cursor-pointer text-center flex items-center justify-center gap-2"
              >
                {language === 'ar' ? 'طلب تسعير حاوية تصدير' : 'Request Export Quote'} <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Swiss-Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 text-left">
          
          {/* Column A: Brand Identity & Accreditations (5 Columns) */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-5">
                            <img src="/logo.png" alt="Sino Steel PLC logo" className="w-65 h-30 mr-3 object-contain" />

              <p className="text-[#415444] text-xs sm:text-sm font-light leading-relaxed max-w-md">
                {language === 'ar' 
                  ? t('foot.about') 
                  : 'Coffee Container is a licensed, premier Ethiopian exporter connecting direct producers with international coffee buyers. Operating with absolute integrity, traceable logistics, and rigorous quality standards at origin.'}
              </p>
            </div>

            {/* Official Accreditations & Trade Credentials */}
            <div className="space-y-4 pt-6 border-t border-[#cbd9cd]">
              <span className="text-[9px] font-sans font-extrabold tracking-[0.25em] text-[#5e7562] uppercase block">
                {language === 'ar' ? 'تراخيص واعتمادات التصدير' : 'Trade Accreditations'}
              </span>
              <div className="grid grid-cols-2 gap-4 text-[10px] text-[#415444] font-mono">
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-[#c22d2d] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1e2e21] block font-semibold">{language === 'ar' ? 'مسجل في ECX' : 'ECX REGISTERED'}</span>
                    <span className="text-[9px]">{language === 'ar' ? 'بورصة السلع الإثيوبية' : 'Ethiopian Commodity Exchange'}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c22d2d] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#1e2e21] block font-semibold">{language === 'ar' ? 'تتبع ١٠٠٪' : '100% TRACEABLE'}</span>
                    <span className="text-[9px]">
                      {language === 'ar' ? 'من محطات المعالجة والمزارع' : 'Direct Farm & Washing Station'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column B: Trade Navigation (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-extrabold text-[10px] uppercase tracking-[0.25em] text-[#c22d2d] border-b border-[#cbd9cd] pb-2">
              {language === 'ar' ? 'أقسام الموقع' : 'Sourcing Hub'}
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-[#415444] font-light">
              <li>
                <button 
                  onClick={() => handleNavClick('home')} 
                  className="hover:text-[#1e2e21] transition-colors duration-150 focus:outline-none cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#c22d2d] transition-all" />
                  {language === 'ar' ? 'الرئيسية' : 'Home Overview'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('story')} 
                  className="hover:text-[#1e2e21] transition-colors duration-150 focus:outline-none cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#c22d2d] transition-all" />
                  {language === 'ar' ? 'قصتنا ورؤيتنا' : 'Two Perspectives Story'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('varieties')} 
                  className="hover:text-[#1e2e21] transition-colors duration-150 focus:outline-none cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#c22d2d] transition-all" />
                  {language === 'ar' ? 'سلالات ومناطق البن' : 'Sourcing Catalog'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('sustainability')} 
                  className="hover:text-[#1e2e21] transition-colors duration-150 focus:outline-none cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#c22d2d] transition-all" />
                  {language === 'ar' ? 'الاستدامة والتوريد' : 'Sourcing Advantage'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('export')} 
                  className="hover:text-[#1e2e21] transition-colors duration-150 focus:outline-none cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#c22d2d] transition-all" />
                  {language === 'ar' ? 'بوابة التصدير B2B' : 'B2B Export Portal'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')} 
                  className="hover:text-[#1e2e21] transition-colors duration-150 focus:outline-none cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#c22d2d] transition-all" />
                  {language === 'ar' ? 'اتصل بنا' : 'Contact Desk'}
                </button>
              </li>
            </ul>
          </div>

          {/* Column C: Specialty Varieties Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-extrabold text-[10px] uppercase tracking-[0.25em] text-[#c22d2d] border-b border-[#cbd9cd] pb-2">
              {language === 'ar' ? 'محاصيل السلالات' : 'Our Varieties'}
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-[#415444] font-light">
              {COFFEE_VARIETIES.map((variety) => {
                let dispName = variety.name;
                if (language === 'ar') {
                  if (variety.id === 'yirgacheffee') dispName = 'يرغاشيفي';
                  else if (variety.id === 'sidamo') dispName = 'سيدامو';
                  else if (variety.id === 'harrar') dispName = 'هرري';
                  else if (variety.id === 'limu') dispName = 'ليمو';
                  else if (variety.id === 'jimma') dispName = 'جيما';
                  else if (variety.id === 'guji') dispName = 'غوجي';
                  else if (variety.id === 'lekempti') dispName = 'ليكيمبتي';
                  else if (variety.id === 'teppi') dispName = 'تيبي';
                  else if (variety.id === 'gesha') dispName = 'غيشا الراقية';
                }
                return (
                  <li key={variety.id}>
                    <button 
                      onClick={() => handleVarietyClick(variety.id)}
                      className="hover:text-[#1e2e21] transition-colors duration-150 focus:outline-none cursor-pointer flex items-center gap-1.5 group text-left w-full"
                    >
                      <Coffee className="w-3 h-3 text-[#5e7562] group-hover:text-[#c22d2d] transition-colors shrink-0" />
                      <span>{dispName}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column D: Headquarters & Logistics (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-extrabold text-[10px] uppercase tracking-[0.25em] text-[#c22d2d] border-b border-[#cbd9cd] pb-2">
              {language === 'ar' ? 'المكتب الإداري المركزي' : 'Corporate Office'}
            </h4>
            <div className="space-y-4 text-xs text-[#415444] font-light">
              
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c22d2d] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-[#1e2e21] block uppercase tracking-wider">
                    {language === 'ar' ? 'المقر الرئيسي' : 'HEADQUARTERS'}
                  </span>
                  <p className="leading-relaxed text-[#415444] text-xs">
                    {language === 'ar' ? 'حي بولي، أديس أبابا، إثيوبيا' : GENERAL_INFO.contact.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#c22d2d] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-[#1e2e21] block uppercase tracking-wider">
                    {language === 'ar' ? 'مكتب التصدير واللوجستيات' : 'TRADING DESK'}
                  </span>
                  <a href={`tel:${GENERAL_INFO.contact.phone.replace(/\s+/g, '')}`} className="hover:text-[#1e2e21] transition-colors block text-xs">
                    {GENERAL_INFO.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#c22d2d] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-[#1e2e21] block uppercase tracking-wider">
                    {language === 'ar' ? 'المراسلات التجارية B2B' : 'B2B INQUIRIES'}
                  </span>
                  <a href={`mailto:${GENERAL_INFO.contact.email}`} className="hover:text-[#1e2e21] transition-colors block text-xs break-all">
                    {GENERAL_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-[#c22d2d] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-[#1e2e21] block uppercase tracking-wider">
                    {language === 'ar' ? 'البوابة الرقمية' : 'DIGITAL GATEWAY'}
                  </span>
                  <a
                    href={`https://${GENERAL_INFO.contact.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#1e2e21] transition-colors block text-xs font-sans"
                  >
                    {GENERAL_INFO.contact.website}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Section: Base Legal Bar */}
        <div className="pt-8 border-t border-[#cbd9cd] flex flex-col md:flex-row justify-between items-center text-[10px] text-[#5e7562] font-mono gap-4">
          <p className="text-center md:text-left font-serif">
            {language === 'ar' 
              ? t('foot.copyright') 
              : `© ${currentYear} COFFEE CONTAINER EXPORT. Licensed exporter by the Coffee & Tea Authority of Ethiopia. All Rights Reserved.`}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <span className="text-[#415444] hover:text-[#1e2e21] transition-colors">
              {language === 'ar' ? 'بن أخضر مستورد مباشرة من المنشأ' : 'Direct origin green beans'}
            </span>
            <span className="text-[#cbd9cd]">•</span>
            <span className="text-[#415444] hover:text-[#1e2e21] transition-colors">
              {language === 'ar' ? 'تسليم موانئ جيبوتي FOB' : 'FOB Djibouti Ports'}
            </span>
            <span className="text-[#cbd9cd]">•</span>
            <span className="text-[#415444] hover:text-[#1e2e21] transition-colors">
              {language === 'ar' ? 'شحنات معتمدة من بورصة السلع ECX' : 'ECX Certified Lots'}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
