import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Youtube, Facebook, Instagram, PhoneCall } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { id: 'story', label: 'Our Story' },
    { id: 'varieties', label: 'The Varieties' },
    { id: 'sustainability', label: 'Sustainability' },
  ];

  // Check if we are on the home page and at the top of the scroll
  const isTransparent = activeTab === 'home' && !isScrolled;

  const handleContactClick = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isTransparent
          ? 'bg-transparent border-white/10'
          : 'bg-white/95 backdrop-blur-md border-coffee-100/60 shadow-sm'
      }`}
    >
      {/* Top Utility Line (Socials) - Hidden on mobile */}
      <div
        className={`hidden md:block border-b transition-colors duration-300 ${
          isTransparent
            ? 'border-white/10 bg-transparent'
            : 'border-coffee-100/60 bg-coffee-50/50'
        }`}
      >
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 h-8 flex justify-end items-center gap-5">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              isTransparent ? 'text-white/60 hover:text-white' : 'text-coffee-600 hover:text-[#c22d2d]'
            }`}
          >
            <Youtube className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              isTransparent ? 'text-white/60 hover:text-white' : 'text-coffee-600 hover:text-[#c22d2d]'
            }`}
          >
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors ${
              isTransparent ? 'text-white/60 hover:text-white' : 'text-coffee-600 hover:text-[#c22d2d]'
            }`}
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main Navigation Row */}
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
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
               <img src="/logo.png" alt="Sino Steel PLC logo" className="w-65 h-30 mr-3 object-contain" />
            
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center h-full">
            <div className="flex space-x-8 mr-8">
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
                    className={`text-xs font-sans font-semibold tracking-[0.2em] transition-all duration-300 uppercase focus:outline-none ${
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
              className="h-16 px-8 bg-[#c22d2d] hover:bg-[#a12323] text-white text-xs font-sans font-bold tracking-[0.22em] transition-colors uppercase focus:outline-none flex items-center gap-2 select-none"
            >
              Request Export Quote
            </button>

            {/* Contact Us button placed on the right of the export quote button */}
            <button
              id="nav-contact-cta"
              onClick={() => {
                setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`h-16 px-8 border-l transition-all duration-300 text-xs font-sans font-bold tracking-[0.22em] uppercase focus:outline-none flex items-center gap-2 select-none ${
                isTransparent
                  ? 'text-white/80 hover:text-white hover:bg-white/5 border-white/10'
                  : activeTab === 'contact'
                  ? 'bg-coffee-50 text-coffee-950 font-extrabold border-coffee-100/60'
                  : 'text-coffee-700 hover:text-coffee-950 hover:bg-coffee-50/50 border-coffee-100/60'
              }`}
            >
              Contact
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
              Home
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
              Contact
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
                Request Export Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
