import React from 'react';
import Logo from './Logo';
import { Phone, Mail, Globe, MapPin, Award, ShieldCheck, Coffee, ArrowRight } from 'lucide-react';
import { GENERAL_INFO, COFFEE_VARIETIES } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
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
    <footer className="bg-[#0b0806] text-white border-t border-coffee-950 relative overflow-hidden">
      {/* Subtle organic light bleed from bottom corner */}
      <div className="absolute -bottom-48 -right-48 w-128 h-128 bg-coffee-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-48 -left-48 w-128 h-128 bg-leaf-950/5 rounded-full blur-3xl pointer-events-none" />

      {/* 1. Main Content Container */}
      <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10 space-y-16">
        
        {/* Top Section: Redesigned B2B Sourcing Call to Action (Page 15 of PDF) */}
        <div className="relative border-b border-white/5 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#110d0a] border border-white/5 p-8 sm:p-12 relative overflow-hidden">
            {/* Elegant corner accent brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10" />
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="text-[10px] font-sans font-extrabold tracking-[0.3em] text-[#c22d2d] uppercase block">
                {GENERAL_INFO.contact.ctaSubtitle || 'ETHIOPIAN DIRECT COMMERCIAL SHIPMENTS'}
              </span>
              <h3 className="font-serif font-light text-2xl sm:text-4xl text-white leading-tight">
                {GENERAL_INFO.contact.ctaHeader || 'Secure Premium Green Coffee Contracts'}
              </h3>
              <p className="text-coffee-300 text-xs sm:text-sm leading-relaxed font-light max-w-3xl">
                {GENERAL_INFO.contact.ctaMessage || 'Establish a seamless direct-source trade agreement. Fill out our comprehensive exporter inquiry to request samples, detailed lot analytics, and container-load price quotes.'}
              </p>
            </div>
            
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 justify-end w-full">
              <button
                onClick={() => handleNavClick('contact')}
                className="px-6 py-4 border border-white/10 hover:border-white/20 hover:bg-white/5 text-white text-[10px] font-sans font-bold tracking-[0.2em] uppercase transition-all duration-200 select-none cursor-pointer text-center"
              >
                Direct Inquiry
              </button>
              <button
                onClick={() => handleNavClick('export')}
                className="px-6 py-4 bg-[#c22d2d] hover:bg-[#a12323] text-white text-[10px] font-sans font-extrabold tracking-[0.2em] uppercase transition-all duration-250 shadow-lg shadow-[#c22d2d]/10 select-none cursor-pointer text-center flex items-center justify-center gap-2"
              >
                Request Export Quote <ArrowRight className="w-3.5 h-3.5" />
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
              <p className="text-coffee-300 text-xs sm:text-sm font-light leading-relaxed max-w-md">
                Coffee Container is a licensed, premier Ethiopian exporter connecting direct producers with international coffee buyers. Operating with absolute integrity, traceable logistics, and rigorous quality standards at origin.
              </p>
            </div>

            {/* Official Accreditations & Trade Credentials */}
            <div className="space-y-4 pt-6 border-t border-white/5">
              <span className="text-[9px] font-sans font-extrabold tracking-[0.25em] text-coffee-500 uppercase block">
                Trade Accreditations
              </span>
              <div className="grid grid-cols-2 gap-4 text-[10px] text-coffee-400 font-mono">
                <div className="flex items-start gap-2">
                  <Award className="w-4 h-4 text-[#c22d2d] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white block font-semibold">ECX REGISTERED</span>
                    <span className="text-[9px]">Ethiopian Commodity Exchange</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#c22d2d] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white block font-semibold">100% TRACEABLE</span>
                    <span className="text-[9px]">Direct Farm & Washing Station</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column B: Trade Navigation (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-extrabold text-[10px] uppercase tracking-[0.25em] text-[#c22d2d] border-b border-white/5 pb-2">
              Sourcing Hub
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-coffee-300 font-light">
              <li>
                <button 
                  onClick={() => handleNavClick('home')} 
                  className="hover:text-white transition-colors duration-150 focus:outline-none cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#c22d2d] transition-all" />
                  Home Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('story')} 
                  className="hover:text-white transition-colors duration-150 focus:outline-none cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#c22d2d] transition-all" />
                  Two Perspectives Story
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('varieties')} 
                  className="hover:text-white transition-colors duration-150 focus:outline-none cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#c22d2d] transition-all" />
                  Sourcing Catalog
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('sustainability')} 
                  className="hover:text-white transition-colors duration-150 focus:outline-none cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#c22d2d] transition-all" />
                  Sourcing Advantage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('export')} 
                  className="hover:text-white transition-colors duration-150 focus:outline-none cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#c22d2d] transition-all" />
                  B2B Export Portal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')} 
                  className="hover:text-white transition-colors duration-150 focus:outline-none cursor-pointer flex items-center gap-1.5 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#c22d2d] transition-all" />
                  Contact Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Column C: Specialty Varieties Links (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-extrabold text-[10px] uppercase tracking-[0.25em] text-[#c22d2d] border-b border-white/5 pb-2">
              Our Varieties
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-coffee-300 font-light">
              {COFFEE_VARIETIES.map((variety) => (
                <li key={variety.id}>
                  <button 
                    onClick={() => handleVarietyClick(variety.id)}
                    className="hover:text-white transition-colors duration-150 focus:outline-none cursor-pointer flex items-center gap-1.5 group text-left w-full"
                  >
                    <Coffee className="w-3 h-3 text-coffee-600 group-hover:text-[#c22d2d] transition-colors shrink-0" />
                    <span>{variety.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column D: Headquarters & Logistics (3 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-extrabold text-[10px] uppercase tracking-[0.25em] text-[#c22d2d] border-b border-white/5 pb-2">
              Corporate Office
            </h4>
            <div className="space-y-4 text-xs text-coffee-300 font-light">
              
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c22d2d] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-white block uppercase tracking-wider">HEADQUARTERS</span>
                  <p className="leading-relaxed text-coffee-300 text-xs">{GENERAL_INFO.contact.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#c22d2d] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-white block uppercase tracking-wider">TRADING DESK</span>
                  <a href={`tel:${GENERAL_INFO.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors block text-xs">
                    {GENERAL_INFO.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#c22d2d] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-white block uppercase tracking-wider">B2B INQUIRIES</span>
                  <a href={`mailto:${GENERAL_INFO.contact.email}`} className="hover:text-white transition-colors block text-xs break-all">
                    {GENERAL_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-[#c22d2d] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-white block uppercase tracking-wider">DIGITAL GATEWAY</span>
                  <a
                    href={`https://${GENERAL_INFO.contact.website}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors block text-xs"
                  >
                    {GENERAL_INFO.contact.website}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Section: Base Legal Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-coffee-500 font-mono gap-4">
          <p className="text-center md:text-left">
            © {currentYear} COFFEE CONTAINER EXPORT. Licensed exporter by the Coffee & Tea Authority of Ethiopia. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <span className="text-coffee-400 hover:text-white transition-colors">Direct origin green beans</span>
            <span className="text-coffee-600">•</span>
            <span className="text-coffee-400 hover:text-white transition-colors">FOB Djibouti Ports</span>
            <span className="text-coffee-600">•</span>
            <span className="text-coffee-400 hover:text-white transition-colors">ECX Certified Lots</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

