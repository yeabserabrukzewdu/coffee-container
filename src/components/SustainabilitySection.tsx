import React, { useState } from 'react';
import { GENERAL_INFO, MARKET_SEGMENTS } from '../data';
import { ShieldCheck, Heart, Trees, Flame, Coffee, Globe, Award, TrendingUp, Briefcase, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SustainabilitySectionProps {
  setActiveTab?: (tab: string) => void;
}

export default function SustainabilitySection({ setActiveTab }: SustainabilitySectionProps) {
  const [activeSubTab, setActiveSubTab] = useState<'impact' | 'markets' | 'advantage' | 'future'>('impact');

  const handleNavigate = (tab: string) => {
    if (setActiveTab) {
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#fdfcfb] text-coffee-950 pb-12 overflow-hidden">
      {/* 1. Immersive Full-Bleed Sustainability Hero Banner */}
      <section className="relative h-[65vh] min-h-[450px] w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('./3.webp')",
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
            ETHICS & VISION
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-wide italic"
          >
            Sourcing & Sincerity
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
      <section className="max-w-4xl mx-auto px-4 text-center py-16 sm:py-24 space-y-8 overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-[#c22d2d] font-sans text-xs sm:text-sm tracking-[0.4em] sm:tracking-[0.5em] uppercase font-extrabold"
        >
          Sourcing, Quality & Global Partnerships
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-serif font-light text-base sm:text-lg md:text-xl text-coffee-900/90 leading-relaxed max-w-3xl mx-auto"
        >
          At Coffee Container, sourcing is rooted in people, purpose, and origin. We work closely with farmers, 
          cooperatives, and suppliers across Ethiopia's key coffee regions, building long-term relationships based 
          on trust, fairness, and shared growth. Our journey ensures absolute container-level consistency and Q-grader verified traceability.
        </motion.p>
      </section>

      {/* 3. Breathtaking Landscape Banner */}
      <section className="relative w-full h-[65vh] min-h-[400px] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('./23.webp')",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Caption placed at the bottom */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-32 pb-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.p 
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-serif font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed max-w-4xl mx-auto"
            >
              Empowering women-led cooperatives and protecting lush, high-altitude shade coffee forests.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 4. Sub-navigation Controls Section */}
      <section className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
        <div className="text-center space-y-3 mb-10">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-sans font-extrabold tracking-[0.25em] text-[#c22d2d] uppercase block"
          >
            EXPLORE THE CORE COLUMNS
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif font-light text-3xl sm:text-4xl text-coffee-950"
          >
            Ethics, Sourcing & Strategy
          </motion.h3>
        </div>

        <div className="flex flex-wrap justify-center border-b border-coffee-100 gap-1 sm:gap-2">
          {(['impact', 'markets', 'advantage', 'future'] as const).map((tab) => {
            const label = tab === 'impact' ? 'Sustainability & Sourcing' :
                          tab === 'markets' ? 'Target Markets' :
                          tab === 'advantage' ? 'Competitive Advantage' : '3-5 Year Vision';
            const Icon = tab === 'impact' ? Trees :
                         tab === 'markets' ? Globe :
                         tab === 'advantage' ? Award : TrendingUp;
            return (
              <button
                key={tab}
                onClick={() => setActiveSubTab(tab)}
                className={`px-5 py-3 rounded-t-sm text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-2 focus:outline-none cursor-pointer ${
                  activeSubTab === tab
                    ? 'border-b-2 border-[#c22d2d] text-[#c22d2d] font-bold'
                    : 'text-coffee-600 hover:text-coffee-950'
                }`}
                id={`tab-sustainability-${tab}`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            );
          })}
        </div>
      </section>

      {/* 5. Dynamic Content Panel */}
      <section className="max-w-[95%] mx-auto px-6 py-12 sm:py-20">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: Sustainability & Sourcing */}
          {activeSubTab === 'impact' && (
            <motion.div 
              key="impact-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-20"
            >
              {/* Row: Intro Text & Cards */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
                <div className="md:col-span-7 text-left space-y-6">
                  <span className="text-xs font-sans font-extrabold tracking-[0.25em] text-[#c22d2d] uppercase">
                    Ethics & Purpose
                  </span>
                  <h3 className="font-serif font-light text-4xl sm:text-5xl text-coffee-950 leading-tight">
                    Responsible Sourcing at Origin
                  </h3>
                  <p className="font-serif text-coffee-800 text-sm sm:text-base leading-relaxed font-light">
                    At Coffee Container, sourcing is rooted in people, purpose, and origin. We work closely with 
                    farmers, cooperatives, and suppliers across Ethiopia's key coffee regions, building long-term 
                    relationships based on trust, fairness, and shared growth.
                  </p>
                  <p className="font-serif text-coffee-800 text-sm sm:text-base leading-relaxed font-light">
                    Our co-founder Omme places a profound emphasis on supporting women-led farms and cooperatives within 
                    Ethiopia’s coffee sector—providing leadership access, training, fair opportunities, and improved 
                    resources to secure long-term financial independence and family prosperity.
                  </p>
                </div>

                <div className="md:col-span-5 space-y-6 pt-4">
                  {[
                    { id: 'women', title: 'Empowering Women', text: 'Supporting women-led farms with education, resources, and fair opportunities within Ethiopia’s coffee sector.', Icon: Heart, iconColor: 'text-[#c22d2d]' },
                    { id: 'steward', title: 'Landscape Stewardship', text: 'Responsible sourcing practices that protect Ethiopia’s natural coffee forests, soil health, and biodiversity.', Icon: Trees, iconColor: 'text-leaf-700' },
                    { id: 'integrity', title: 'Origin Integrity', text: 'Ensuring every single-origin lot we procure reflects the genuine sensory identity of its specific microclimate.', Icon: ShieldCheck, iconColor: 'text-coffee-700' }
                  ].map((card, idx) => {
                    const CardIcon = card.Icon;
                    return (
                      <motion.div 
                        key={card.id}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-white border border-coffee-100 rounded-sm p-6 space-y-4 shadow-sm text-left"
                      >
                        <div className="flex gap-4 items-start">
                          <div className={`w-10 h-10 rounded-sm bg-[#faf5f5] ${card.iconColor} flex items-center justify-center shrink-0`}>
                            <CardIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-sans font-extrabold text-xs tracking-wider text-coffee-950 uppercase">{card.title}</h4>
                            <p className="text-xs text-coffee-700 leading-relaxed font-light mt-1">
                              {card.text}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Quality Assurance Section formatted with Burgundy Backdrop */}
              <div className="grid grid-cols-1 md:grid-cols-12 overflow-hidden shadow-2xl rounded-sm">
                <motion.div 
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="md:col-span-5 relative min-h-[350px]"
                >
                  <img 
                    src="./7.webp" 
                    alt="Grayscale hand sorting of coffee beans"
                    className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
                  />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="md:col-span-7 bg-[#3a2027] p-10 sm:p-16 flex flex-col justify-center text-left text-white space-y-6"
                >
                  <span className="text-xs font-mono text-leaf-300 uppercase tracking-[0.25em] font-extrabold">
                    QUALITY ASSURANCE
                  </span>
                  <h3 className="font-serif font-light text-2xl sm:text-3xl text-white leading-tight">
                    {GENERAL_INFO.qualityAssurance.title}
                  </h3>
                  <p className="font-serif font-light text-xs sm:text-sm text-white/95 leading-relaxed">
                    {GENERAL_INFO.qualityAssurance.heartOfTradition}
                  </p>
                  <div className="h-[1px] bg-white/20 w-24 my-2" />
                  <p className="font-serif font-light text-xs sm:text-sm text-white/90 leading-relaxed">
                    {GENERAL_INFO.qualityAssurance.consistencyAndTrust}
                  </p>
                  <div className="inline-flex self-start items-center gap-1.5 text-xs text-leaf-300 font-semibold bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>100% Traceable container shipments</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: Target Market Segments */}
          {activeSubTab === 'markets' && (
            <motion.div 
              key="markets-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12 text-left"
            >
              <div className="max-w-3xl space-y-4">
                <span className="text-xs font-sans font-extrabold tracking-[0.25em] text-[#c22d2d] uppercase">
                  Global Supply Strategy
                </span>
                <h3 className="font-serif font-light text-4xl sm:text-5xl text-coffee-950">
                  Global Partners Who Value Quality
                </h3>
                <p className="font-serif text-coffee-800 text-sm sm:text-base leading-relaxed font-light">
                  We export premium-grade Ethiopian coffee in bulk containers, tailoring logistics and processing methods 
                  to meet specific international business requirements.
                </p>
              </div>

              {/* Bento Grid layout for market segments */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {MARKET_SEGMENTS.map((segment, idx) => {
                  return (
                    <motion.div
                      key={segment.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      whileHover={{ y: -6, boxShadow: "0 15px 30px -5px rgba(0,0,0,0.06)" }}
                      className="bg-white border border-coffee-100 hover:border-leaf-300 rounded-sm p-8 sm:p-10 space-y-6 flex flex-col justify-between shadow-xs transition-colors duration-300 group cursor-pointer"
                    >
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-mono tracking-widest text-[#c22d2d] uppercase font-bold">
                            SEGMENT {String(idx + 1).padStart(2, '0')}
                          </span>
                          <div className="w-8 h-8 rounded-sm bg-[#faf5f5] text-coffee-800 flex items-center justify-center">
                            {segment.id === 'roasters' && <Flame className="w-4 h-4 text-[#c22d2d]" />}
                            {segment.id === 'cafes' && <Coffee className="w-4 h-4 text-leaf-600" />}
                            {segment.id === 'wholesalers' && <Globe className="w-4 h-4 text-coffee-700" />}
                            {segment.id === 'private-label' && <Briefcase className="w-4 h-4 text-coffee-800" />}
                          </div>
                        </div>
                        <h4 className="font-serif font-light text-2xl text-coffee-950 leading-snug">
                          {segment.title}
                        </h4>
                        <p className="font-serif text-xs sm:text-sm text-coffee-700 leading-relaxed font-light">
                          {segment.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-coffee-100 text-[10px] font-mono font-semibold text-leaf-600 uppercase tracking-wider flex items-center justify-between">
                        <span>
                          {segment.id === 'roasters' && '• ROASTER-READY LOTS'}
                          {segment.id === 'cafes' && '• SINGLE-ORIGIN TRACEABILITY'}
                          {segment.id === 'wholesalers' && '• SCALE SOURCING'}
                          {segment.id === 'private-label' && '• BRAND CUSTOMIZATION'}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* TAB 3: Competitive Advantage */}
          {activeSubTab === 'advantage' && (
            <motion.div 
              key="advantage-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left text column */}
                <div className="md:col-span-6 text-left space-y-8">
                  <span className="text-xs font-sans font-extrabold tracking-[0.25em] text-[#c22d2d] uppercase block">
                    The Coffee Container Difference
                  </span>
                  <h3 className="font-serif font-light text-4xl sm:text-5xl text-coffee-950 leading-tight">
                    Our Competitive Edge
                  </h3>
                  
                  <div className="font-serif text-coffee-800 text-sm sm:text-base leading-relaxed space-y-8 font-light">
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="border-l-2 border-red-500 pl-4"
                    >
                      <h4 className="font-sans font-extrabold text-xs tracking-[0.2em] text-[#c22d2d] uppercase mb-2">
                        Generational Heritage Meets Modern Trade
                      </h4>
                      <p>
                        Rooted in deep knowledge of Ethiopian coffee traditions passed down through family generations, 
                        combined with a sophisticated modern understanding of international trade logistics. We speak both 
                        the language of origin farms and the language of international container shipment systems. This 
                        balance is what sets us apart from standard export operations.
                      </p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className="border-l-2 border-red-500 pl-4"
                    >
                      <h4 className="font-sans font-extrabold text-xs tracking-[0.2em] text-[#c22d2d] uppercase mb-2">
                        Structured Reliability & Consistency
                      </h4>
                      <p>
                        Every container reflects integrity, responsibility, and attention to detail. We manage the 
                        fragmented elements of local sourcing, organizing them into predictable, certified, and fully 
                        documented shipping container systems. We build long-term relationships based on direct 
                        communication, reliable delivery, and absolute quality consistency.
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Right Column: Photo & Strategy info box */}
                <div className="md:col-span-6 space-y-8">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden aspect-4/3 shadow-2xl bg-coffee-100 rounded-sm"
                  >
                    <img 
                      src="./24.webp" 
                      alt="Traditional coffee tasting/cupping"
                      className="w-full h-full object-cover filter grayscale contrast-125"
                    />
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white border border-coffee-100 rounded-sm p-6 sm:p-8 space-y-6 text-left shadow-sm"
                  >
                    <span className="text-xs font-sans font-extrabold tracking-[0.2em] text-[#c22d2d] uppercase block border-b border-coffee-100 pb-2">
                      Brand Strategy
                    </span>
                    <div className="space-y-4">
                      <h4 className="font-serif text-xl font-normal text-coffee-950">
                        Sourcing Connection
                      </h4>
                      <p className="font-serif text-xs sm:text-sm text-coffee-800 leading-relaxed font-light">
                        Our brand represents a journey that begins in Ethiopia's coffee-growing regions and extends 
                        to global markets through every container we export. It honors the people behind the coffee 
                        while serving as a trusted origin partner.
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <h5 className="text-[10px] uppercase tracking-wider text-coffee-500 font-extrabold">Key Sourcing Columns:</h5>
                      <div className="text-xs space-y-2.5 font-light text-coffee-700 font-serif">
                        <p className="border-l-2 border-leaf-400 pl-3">
                          <strong className="font-semibold text-coffee-950 block font-sans">Digital Traceability:</strong> Showcasing the real journey of every container back to specific farmer networks.
                        </p>
                        <p className="border-l-2 border-leaf-400 pl-3">
                          <strong className="font-semibold text-coffee-950 block font-sans">Origin-focused Sourcing:</strong> Highlighting direct buyer engagements that pay premiums to growers at origin.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: 3-5 Year Vision */}
          {activeSubTab === 'future' && (
            <motion.div 
              key="future-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-16"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Element: Grayscale vertical photo */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="md:col-span-3 hidden md:block"
                >
                  <div className="aspect-[3/4] overflow-hidden shadow-md bg-coffee-100 rounded-sm">
                    <img 
                      src="./25.webp" 
                      alt="Majestic mountains of coffee origin"
                      className="w-full h-full object-cover filter grayscale contrast-[1.25] brightness-90"
                    />
                  </div>
                </motion.div>

                {/* Center Element: Editorial story content */}
                <div className="md:col-span-6 text-center space-y-6 px-2">
                  <span className="text-xs font-sans font-extrabold tracking-[0.25em] text-[#c22d2d] uppercase">
                    Strategic Outlook
                  </span>
                  <h3 className="font-serif font-light text-3xl sm:text-4xl text-coffee-950 leading-tight">
                    {GENERAL_INFO.growthPlans.title}
                  </h3>
                  
                  <div className="font-serif text-coffee-800 text-sm leading-relaxed font-light space-y-6 max-w-lg mx-auto text-center">
                    <p>
                      <strong>{GENERAL_INFO.growthPlans.vision3to5Years.title}:</strong> {GENERAL_INFO.growthPlans.vision3to5Years.text}
                    </p>
                    <p>
                      <strong>{GENERAL_INFO.growthPlans.communityImpact.title}:</strong> {GENERAL_INFO.growthPlans.communityImpact.text}
                    </p>
                    <p>
                      <strong>{GENERAL_INFO.growthPlans.futureCafes.title}:</strong> {GENERAL_INFO.growthPlans.futureCafes.text}
                    </p>
                  </div>
                </div>

                {/* Right Element: Grayscale vertical photo */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="md:col-span-3 hidden md:block"
                >
                  <div className="aspect-[3/4] overflow-hidden shadow-md bg-coffee-100 rounded-sm">
                    <img 
                      src="./26.webp" 
                      alt="New coffee sprouts"
                      className="w-full h-full object-cover filter grayscale contrast-[1.15]"
                    />
                  </div>
                </motion.div>
                
                {/* Mobile visible fallback for vertical photos */}
                <div className="grid grid-cols-2 gap-4 md:hidden">
                  <div className="aspect-square overflow-hidden shadow-md rounded-sm">
                    <img 
                      src="./25.webp" 
                      className="w-full h-full object-cover filter grayscale"
                      alt="Mountains"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden shadow-md rounded-sm">
                    <img 
                      src="./26.webp" 
                      className="w-full h-full object-cover filter grayscale"
                      alt="Sprouts"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </section>

      {/* 6. Giant Centered Editorial Quote Block */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center space-y-8 overflow-hidden">
        <motion.span 
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="block text-5xl text-[#c22d2d] leading-none select-none font-serif"
        >
          “
        </motion.span>
        
        <motion.blockquote 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif italic font-light text-xl sm:text-2xl md:text-3xl text-[#a84444] leading-relaxed tracking-wide max-w-3xl mx-auto"
        >
          {GENERAL_INFO.growthPlans.summary}
        </motion.blockquote>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-1.5 pt-4"
        >
          <p className="text-xs sm:text-sm font-sans tracking-[0.25em] font-extrabold text-coffee-950 uppercase">
            Sustainability & Integrity
          </p>
          <p className="text-[10px] sm:text-xs font-sans tracking-[0.2em] text-coffee-500 font-semibold uppercase">
            COFFEE CONTAINER
          </p>
        </motion.div>
      </section>

      {/* 7. Double Beautiful Navigation Cards */}
      <section className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-coffee-100 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Our Story */}
          <motion.button 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8 }}
            onClick={() => handleNavigate('story')}
            className="group relative h-[320px] w-full overflow-hidden text-left focus:outline-none shadow-lg rounded-sm cursor-pointer"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('./1.webp')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-95" />
            
            <div className="absolute inset-x-8 bottom-8 text-white space-y-2 flex flex-col items-start">
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-white/70 uppercase">
                HERITAGE & ALIGNMENT
              </span>
              <h4 className="font-serif font-light text-3xl text-white group-hover:text-leaf-300 transition-colors">
                Our Story
              </h4>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-sans font-bold tracking-[0.2em] text-white uppercase mt-2 border-b border-white/30 pb-0.5 group-hover:border-leaf-300 group-hover:text-leaf-300 transition-all">
                EXPLORE NOW <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </motion.button>

          {/* Card 2: Explore Our Varieties */}
          <motion.button 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            whileHover={{ y: -8 }}
            onClick={() => handleNavigate('varieties')}
            className="group relative h-[320px] w-full overflow-hidden text-left focus:outline-none shadow-lg rounded-sm cursor-pointer"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('./21.webp')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#361515]/90 via-black/35 to-transparent transition-opacity group-hover:opacity-95" />
            
            <div className="absolute inset-x-8 bottom-8 text-white space-y-2 flex flex-col items-start">
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-white/70 uppercase">
                TASTE & FLAVOR
              </span>
              <h4 className="font-serif font-light text-3xl text-white group-hover:text-red-300 transition-colors">
                Our Varieties
              </h4>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-sans font-bold tracking-[0.2em] text-white uppercase mt-2 border-b border-white/30 pb-0.5 group-hover:border-red-300 group-hover:text-red-300 transition-all">
                EXPLORE NOW <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </motion.button>
        </div>
      </section>
    </div>
  );
}
