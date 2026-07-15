import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Youtube, Facebook, Instagram, PhoneCall, Globe } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Monitor scroll position to make navbar background solid/blurred on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Standard menu tabs mapping
  const menuItems = [
    { id: 'story', label: t('nav.story') },
    { id: 'varieties', label: t('nav.varieties') },
    { id: 'sustainability', label: t('nav.sustainability') },
  ];

  // Check if we are on the home page and at the top of the scroll
  const isTransparent = activeTab === 'home' && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isTransparent
          ? 'bg-transparent border-white/10'
          : 'bg-white/95 backdrop-blur-md border-coffee-100/60 shadow-sm'
      }`}
    >
      {/* Top Utility Line (Steel Trade Info, Socials & Language Switcher) - Always visible and highly polished */}
      <div className="bg-[#0b0c10] border-b border-white/10">
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 h-9 flex justify-between items-center">
          {/* Multilingual Selector (placed on the far left) */}
          <div className="flex items-center gap-2 select-none relative z-50 pointer-events-auto" id="lang-switcher">
            <Globe className="w-3.5 h-3.5 text-white/40" />
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  console.log('Language switched to EN');
                  setLanguage('en');
                }}
                className={`text-[11px] font-sans font-extrabold tracking-wider transition-all duration-200 focus:outline-none cursor-pointer px-2 py-1 relative z-50 pointer-events-auto hover:text-white ${
                  language === 'en'
                    ? 'text-[#ff5533] underline underline-offset-4 decoration-2 font-black'
                    : 'text-white/60'
                }`}
              >
                EN
              </button>
              <span className="text-white/20 text-[11px]">|</span>
              <button
                type="button"
                onClick={() => {
                  console.log('Language switched to AR');
                  setLanguage('ar');
                }}
                className={`text-[11px] font-sans font-extrabold tracking-wider transition-all duration-200 focus:outline-none cursor-pointer px-2 py-1 relative z-50 pointer-events-auto hover:text-white ${
                  language === 'ar'
                    ? 'text-[#ff5533] underline underline-offset-4 decoration-2 font-black'
                    : 'text-white/60'
                }`}
              >
                العربية
              </button>
            </div>
          </div>

          {/* Right Side: Grouped Banner Text and Social Icons */}
          <div className="flex items-center gap-4 relative z-40">
            {/* Premium Coffee Sourcing & Exporting Company Banner - Moved to right side and made smaller */}
            <div className="hidden lg:flex items-center text-[9px] font-sans font-bold select-none whitespace-nowrap">
              {language === 'ar' ? (
                <div className="flex items-center gap-1.5 text-right">
                  <span className="text-[#ff5533] tracking-[0.15em] uppercase">شركة مصادر وتصدير القهوة</span>
                  <span className="text-[#00cc99] mx-1 font-black">•</span>
                  <span className="text-[#00cc99] tracking-[0.1em] uppercase">أديس أبابا، إثيوبيا</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-left">
                  <span className="text-[#ff5533] tracking-[0.15em] uppercase">COFFEE SOURCING & EXPORTING COMPANY</span>
                  <span className="text-[#00cc99] mx-1 font-black">•</span>
                  <span className="text-[#00cc99] tracking-[0.1em] uppercase">ADDIS ABABA, ETHIOPIA</span>
                </div>
              )}
            </div>

            {/* Subtle separator line only visible when the banner text is displayed */}
            <div className="hidden lg:block h-3.5 w-px bg-white/10" />

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="w-full max-w-full sm:max-w-[95%] mx-auto pl-0 sm:pl-6 pr-4 sm:pr-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
         <div className="flex items-center">
            <button
              onClick={() => {
                setActiveTab('home');
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="focus:outline-none flex items-center text-left"
              id="nav-logo"
            >
               <img 
                 src="/logo.png" 
                 alt="Sino Steel PLC logo" 
                 className="w-65 h-30 mr-3 object-contain ml-[-20px] sm:ml-0" 
               />
            
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center h-full">
            <div className={`flex space-x-8 ${language === 'ar' ? 'space-x-reverse ml-8' : 'mr-8'}`}>
              {menuItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-item-${item.id}`}
                    onClick={() => {
                      setActiveTab(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`text-xs font-sans font-semibold tracking-[0.2em] transition-all duration-300 uppercase focus:outline-none cursor-pointer ${
                      isActive
                        ? isTransparent
                          ? 'text-white border-b-2 border-leaf-400 pb-1 -mb-[2px]'
                          : 'text-coffee-950 border-b-2 border-leaf-600 pb-1 -mb-[2px]'
                        : isTransparent
                        ? 'text-white/70 hover:text-white pb-1'
                        : 'text-coffee-700 hover:text-coffee-950 pb-1'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Premium CTA Button styled like Gesha's "SHOP SAMPLES" red banner */}
            <button
              id="nav-cta"
              onClick={() => {
                setActiveTab('export');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="h-16 px-8 bg-[#c22d2d] hover:bg-[#a12323] text-white text-xs font-sans font-bold tracking-[0.22em] transition-colors uppercase focus:outline-none flex items-center gap-2 select-none cursor-pointer"
            >
              {t('nav.portal')}
            </button>

            {/* Contact Us button placed on the right of the export quote button */}
            <button
              id="nav-contact-cta"
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`h-16 px-8 border-l transition-all duration-300 text-xs font-sans font-bold tracking-[0.22em] uppercase focus:outline-none flex items-center gap-2 select-none cursor-pointer ${
                isTransparent
                  ? 'text-white/80 hover:text-white hover:bg-white/5 border-white/10'
                  : activeTab === 'contact'
                  ? 'bg-coffee-50 text-coffee-950 font-extrabold border-coffee-100/60'
                  : 'text-coffee-700 hover:text-coffee-950 hover:bg-coffee-50/50 border-coffee-100/60'
              }`}
            >
              {t('nav.contact')}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex items-center md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-sm transition-all duration-300 focus:outline-none ${
                isTransparent
                  ? 'text-white/80 hover:text-white hover:bg-white/10'
                  : 'text-coffee-800 hover:text-coffee-950 hover:bg-coffee-50'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-coffee-100/80 transition-all duration-300 shadow-lg">
          <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3 text-left">
            <button
              onClick={() => {
                setActiveTab('home');
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full text-left px-4 py-3 text-sm font-sans tracking-[0.15em] uppercase font-semibold transition-colors ${
                activeTab === 'home'
                  ? 'text-leaf-700 font-bold bg-coffee-50/50'
                  : 'text-coffee-700 hover:text-coffee-950'
              }`}
            >
              {language === 'ar' ? 'الرئيسية' : 'Home'}
            </button>

            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-4 py-3 text-sm font-sans tracking-[0.15em] uppercase font-semibold transition-colors ${
                    isActive
                      ? 'text-leaf-700 font-bold bg-coffee-50/50'
                      : 'text-coffee-700 hover:text-coffee-950'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <button
              id="mobile-nav-item-contact"
              onClick={() => {
                setActiveTab('contact');
                setIsOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full text-left px-4 py-3 text-sm font-sans tracking-[0.15em] uppercase font-semibold transition-colors ${
                activeTab === 'contact'
                  ? 'text-leaf-700 font-bold bg-coffee-50/50'
                  : 'text-coffee-700 hover:text-coffee-950'
              }`}
            >
              {t('nav.contact')}
            </button>

            <div className="pt-4 px-4">
              <button
                id="mobile-nav-cta"
                onClick={() => {
                  setActiveTab('export');
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-4 bg-[#c22d2d] text-white font-sans text-xs font-bold tracking-[0.2em] rounded-none text-center uppercase shadow-md flex items-center justify-center gap-2 hover:bg-[#a12323] transition-colors focus:outline-none"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                {t('nav.portal')}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
