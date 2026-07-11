import React, { useState, useMemo, useEffect } from 'react';
import { COFFEE_VARIETIES } from '../data';
import { Search, SlidersHorizontal, ArrowRight, ShieldAlert, Beaker, ShieldCheck, LayoutGrid, List, Columns2, Award, Coffee } from 'lucide-react';
import { CoffeeVariety } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface VarietyCatalogProps {
  onSelectVarietyForQuote: (varietyId: string) => void;
  setActiveTab?: (tab: string) => void;
}

export default function VarietyCatalog({ onSelectVarietyForQuote, setActiveTab }: VarietyCatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedVariety, setSelectedVariety] = useState<CoffeeVariety | null>(COFFEE_VARIETIES[0]);
  const [layoutMode, setLayoutMode] = useState<'split' | 'bento' | 'tableau'>('split');

  // Respond to select-variety event dispatched from footer variety links
  useEffect(() => {
    const handleFooterSelect = (event: Event) => {
      const customEvent = event as CustomEvent<{ varietyId: string }>;
      const varietyId = customEvent.detail?.varietyId;
      if (varietyId) {
        const found = COFFEE_VARIETIES.find(v => v.id === varietyId);
        if (found) {
          setSelectedVariety(found);
          // Scroll to the variety catalog grid section so they can see the selection
          const targetSection = document.getElementById('variety-interactive-section');
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    window.addEventListener('select-variety-from-footer', handleFooterSelect);
    return () => {
      window.removeEventListener('select-variety-from-footer', handleFooterSelect);
    };
  }, []);

  // Extract all unique notes/tags across all varieties
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    COFFEE_VARIETIES.forEach((variety) => {
      variety.notes.forEach((note) => tagsSet.add(note));
    });
    return Array.from(tagsSet);
  }, []);

  const filteredVarieties = useMemo(() => {
    return COFFEE_VARIETIES.filter((v) => {
      const matchesSearch =
        v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.characteristic.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTag = !selectedTag || v.notes.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);

  const handleNavigate = (tab: string) => {
    if (setActiveTab) {
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#fdfcfb] text-coffee-950 pb-12 overflow-hidden">
      {/* 1. Immersive Full-Bleed Variety Hero Banner */}
      <section className="relative h-[65vh] min-h-[450px] w-full overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('./21.webp')",
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
            className="text-xs sm:text-sm font-sans font-extrabold tracking-[0.4em] text-[#e06666] uppercase block"
          >
            TASTE & TERROIR
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-wide italic"
          >
            The Regional Varieties
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="h-[1px] bg-red-400 mx-auto mt-6" 
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
          Sourcing Catalog: Regional Varieties
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-serif font-light text-base sm:text-lg md:text-xl text-coffee-900/90 leading-relaxed max-w-3xl mx-auto"
        >
          Each bean reflects the unique soil, elevation, microclimate, and meticulous craftsmanship of 
          Ethiopia’s celebrated coffee-growing regions. Explore our 9 world-renowned single-origin varieties, 
          cupped and sorted for absolute consistency.
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
            backgroundImage: "url('./9.webp')",
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
              Sun-dried on traditional African raised beds to lock in natural sweetness.
            </motion.p>
          </div>
        </div>
      </section>

      {/* 4. Interactive Variety Grid and Filters Section */}
      <section id="variety-interactive-section" className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-20 overflow-hidden scroll-mt-24">
        
        {/* Layout Mode Selector & Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-coffee-100 pb-8 mb-8 gap-4">
          <div className="text-left">
            <h3 className="font-serif font-light text-2xl sm:text-3xl text-coffee-950">
              Our Sourcing Portfolio
            </h3>
            <p className="text-xs text-coffee-500 font-light mt-1">
              Showing {filteredVarieties.length} of {COFFEE_VARIETIES.length} single-origin varieties
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-1.5 bg-coffee-50 p-1 rounded-md border border-coffee-100">
            <button
              onClick={() => {
                setLayoutMode('split');
                if (filteredVarieties.length > 0 && !selectedVariety) {
                  setSelectedVariety(filteredVarieties[0]);
                }
              }}
              className={`px-3 py-2 rounded-sm text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                layoutMode === 'split'
                  ? 'bg-white text-coffee-950 shadow-sm'
                  : 'text-coffee-600 hover:text-coffee-900'
              }`}
            >
              <Columns2 className="w-3.5 h-3.5" />
              Interactive Deck
            </button>
            <button
              onClick={() => setLayoutMode('bento')}
              className={`px-3 py-2 rounded-sm text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                layoutMode === 'bento'
                  ? 'bg-white text-[#c22d2d] shadow-sm font-extrabold'
                  : 'text-coffee-600 hover:text-coffee-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Bento Board
            </button>
            <button
              onClick={() => setLayoutMode('tableau')}
              className={`px-3 py-2 rounded-sm text-xs font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer ${
                layoutMode === 'tableau'
                  ? 'bg-white text-leaf-700 shadow-sm font-extrabold'
                  : 'text-coffee-600 hover:text-coffee-900'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              Tableau Lookup
            </button>
          </div>
        </div>

        {/* Search & Filter Panel */}
        <div className="space-y-6 mb-12">
          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4 text-left">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-coffee-400" />
              <input
                type="text"
                placeholder="Search varieties (e.g. Yirgacheffe, floral, dark chocolate)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-coffee-200 focus:border-leaf-400 rounded-sm text-sm placeholder-coffee-400 focus:outline-none transition-colors"
                id="variety-search"
              />
            </div>
            {/* Tag quick clear */}
            {selectedTag && (
              <button
                onClick={() => setSelectedTag(null)}
                className="px-4 py-3 bg-leaf-50 text-leaf-800 border border-leaf-100 rounded-sm text-xs font-semibold hover:bg-leaf-100 transition-colors shrink-0 cursor-pointer"
              >
                Clear Tag Filter: {selectedTag}
              </button>
            )}
          </div>

          {/* Quick tags list */}
          <div className="flex flex-wrap gap-2 items-center text-left">
            <span className="text-xs text-coffee-500 font-medium mr-2 flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3" /> Filter by Sensory Note:
            </span>
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                !selectedTag
                  ? 'bg-coffee-800 text-white font-semibold'
                  : 'bg-white text-coffee-700 border border-coffee-100 hover:bg-coffee-50'
              }`}
            >
              All Notes
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-leaf-600 text-white font-semibold shadow-xs'
                    : 'bg-white text-coffee-700 border border-coffee-100 hover:bg-coffee-50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* View Mode Content Switcher */}
        <AnimatePresence mode="wait">
          {filteredVarieties.length === 0 ? (
            <motion.div 
              key="empty-state"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white border border-coffee-100 rounded-sm p-12 text-center text-coffee-500 space-y-2"
            >
              <ShieldAlert className="w-10 h-10 text-coffee-400 mx-auto" />
              <p className="font-medium text-coffee-800">No varieties match your filter criteria.</p>
              <p className="text-xs font-light">Try typing another search term or clearing the active filters.</p>
            </motion.div>
          ) : layoutMode === 'split' ? (
            /* =========================================================================
               1. INTERACTIVE SPLIT DECK LAYOUT
               ========================================================================= */
            <motion.div 
              key="split-layout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
            >
              
              {/* Left Column: Variety Grid */}
              <div className="lg:col-span-8 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredVarieties.map((variety, idx) => {
                    const isSelected = selectedVariety?.id === variety.id;
                    return (
                      <motion.button
                        key={variety.id}
                        id={`variety-card-${variety.id}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.3) }}
                        whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)" }}
                        onClick={() => setSelectedVariety(variety)}
                        className={`w-full text-left bg-white border rounded-sm p-6 flex flex-col justify-between h-56 transition-colors relative overflow-hidden group focus:outline-none cursor-pointer ${
                          isSelected
                            ? 'border-leaf-500 bg-leaf-50/10 ring-2 ring-leaf-500/20'
                            : 'border-coffee-100 hover:border-coffee-300'
                        }`}
                      >
                        {/* Corner Tag effect */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-coffee-100/40 to-transparent -z-10 group-hover:from-leaf-100/30 transition-colors" />

                        <div className="space-y-3">
                          <div className="flex justify-between items-start">
                            <h3 className="font-serif font-light text-2xl text-coffee-950">
                              {variety.name}
                            </h3>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-leaf-700 bg-leaf-50 border border-leaf-100/50 px-2 py-0.5 rounded-full font-semibold">
                              {variety.characteristic}
                            </span>
                          </div>
                          <p className="font-serif text-xs text-coffee-800 leading-relaxed font-light line-clamp-3">
                            {variety.description}
                          </p>
                        </div>

                        <div className="flex justify-between items-center pt-3 border-t border-coffee-100">
                          <div className="flex gap-1.5">
                            {variety.notes.slice(0, 3).map((note) => (
                              <span
                                key={note}
                                className="text-[10px] bg-coffee-100/60 text-coffee-800 px-2.5 py-0.5 rounded-md font-sans font-semibold uppercase tracking-wider"
                              >
                                {note}
                              </span>
                            ))}
                          </div>
                          <span className="text-xs font-semibold text-leaf-600 group-hover:text-leaf-800 flex items-center gap-1 shrink-0 uppercase tracking-wider text-[10px]">
                            View Profile
                            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Dynamic Sensory Profile Card */}
              <div className="lg:col-span-4 lg:sticky lg:top-24">
                {selectedVariety ? (
                  <motion.div 
                    key={selectedVariety.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    className="bg-[#442c33] text-white rounded-sm p-8 space-y-8 text-left shadow-xl relative overflow-hidden"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-sans font-bold tracking-widest text-[#e06666] uppercase">
                          Origin Profile
                        </span>
                        <Beaker className="w-5 h-5 text-red-300 animate-pulse" />
                      </div>
                      <h3 className="font-serif font-light text-3xl tracking-tight">
                        {selectedVariety.name}
                      </h3>
                      <p className="font-serif text-xs text-coffee-100 leading-relaxed font-light">
                        {selectedVariety.description}
                      </p>
                    </div>

                    {/* Dynamic Sensory Attributes */}
                    <div className="space-y-4 bg-black/20 p-6 rounded-sm border border-white/5">
                      <h4 className="font-sans font-extrabold text-xs uppercase tracking-wider text-red-300">
                        Sensory Blueprint
                      </h4>

                      <div className="space-y-3 pt-2 font-serif">
                        <div>
                          <div className="flex justify-between text-xs mb-1 text-coffee-100 font-sans font-bold uppercase tracking-wider text-[9px]">
                            <span>Aroma Strength</span>
                            <span className="text-red-300 font-extrabold">Premium</span>
                          </div>
                          <p className="text-xs text-coffee-200 italic">{selectedVariety.aroma}</p>
                        </div>

                        <div className="h-[1px] bg-white/5" />

                        <div>
                          <div className="flex justify-between text-xs mb-1 text-coffee-100 font-sans font-bold uppercase tracking-wider text-[9px]">
                            <span>Acidity / Brightness</span>
                            <span className="text-red-300 font-extrabold">High Character</span>
                          </div>
                          <p className="text-xs text-coffee-200 italic">{selectedVariety.acidity}</p>
                        </div>

                        <div className="h-[1px] bg-white/5" />

                        <div>
                          <div className="flex justify-between text-xs mb-1 text-coffee-100 font-sans font-bold uppercase tracking-wider text-[9px]">
                            <span>Body & Texture</span>
                            <span className="text-red-300 font-extrabold">Exceptional</span>
                          </div>
                          <p className="text-xs text-coffee-200 italic">{selectedVariety.body}</p>
                        </div>
                      </div>
                    </div>

                    {/* Tag Highlights */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-sans font-extrabold uppercase tracking-wider text-coffee-300">
                        Primary Cupping Notes
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedVariety.notes.map((note) => (
                          <span
                            key={note}
                            className="text-[10px] font-sans font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/15 border border-white/10 px-3 py-1.5 rounded-sm transition-colors"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* B2B Request samples Action */}
                    <div className="pt-4 space-y-3">
                      <motion.button
                        id={`cta-request-sample-${selectedVariety.id}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelectVarietyForQuote(selectedVariety.id)}
                        className="w-full py-4 px-6 bg-[#c22d2d] hover:bg-[#a12323] active:bg-[#851d1d] text-white font-sans text-xs font-extrabold tracking-wider uppercase rounded-sm text-center shadow-md transition-all flex items-center justify-center gap-2 group focus:outline-none cursor-pointer"
                      >
                        Request B2B Sample
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </motion.button>
                      <p className="text-[9px] text-coffee-300 text-center font-mono uppercase tracking-wide">
                        Available for Roasters & Distributors Worldwide
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-coffee-100 border border-coffee-200 rounded-sm p-8 text-center text-coffee-500 h-96 flex items-center justify-center">
                    <p className="text-sm font-serif font-light">Select a variety to inspect its full sensory cup profile.</p>
                  </div>
                )}
              </div>
            </motion.div>
          ) : layoutMode === 'bento' ? (
            /* =========================================================================
               2. BENTO TERROIR BOARD LAYOUT
               ========================================================================= */
            <motion.div 
              key="bento-layout"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
            >
              {filteredVarieties.map((variety, idx) => {
                const isHero = variety.id === 'gesha' || variety.id === 'yirgacheffee';
                const name = variety.name.toLowerCase();
                
                // Map intensity percentages dynamically
                let aromaPct = 75;
                let acidityPct = 75;
                let bodyPct = 75;
                if (name.includes('gesha')) { aromaPct = 98; acidityPct = 96; bodyPct = 80; }
                else if (name.includes('yirgacheffe')) { aromaPct = 95; acidityPct = 92; bodyPct = 60; }
                else if (name.includes('harrar')) { aromaPct = 92; acidityPct = 75; bodyPct = 96; }
                else if (name.includes('sidamo')) { aromaPct = 86; acidityPct = 72; bodyPct = 88; }
                else if (name.includes('guji')) { aromaPct = 90; acidityPct = 88; bodyPct = 78; }
                else if (name.includes('djimmah')) { aromaPct = 68; acidityPct = 40; bodyPct = 98; }
                else if (name.includes('teppi')) { aromaPct = 74; acidityPct = 52; bodyPct = 82; }
                else if (name.includes('limmu')) { aromaPct = 85; acidityPct = 80; bodyPct = 72; }
                else if (name.includes('lekempti')) { aromaPct = 80; acidityPct = 64; bodyPct = 80; }

                return (
                  <motion.div
                    key={variety.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: Math.min(idx * 0.05, 0.3) }}
                    whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.06)" }}
                    className={`border rounded-sm p-8 flex flex-col justify-between transition-colors relative overflow-hidden group ${
                      isHero 
                        ? 'bg-[#442c33] text-white border-red-500/20 md:col-span-2 shadow-lg' 
                        : 'bg-white text-coffee-950 border-coffee-100 hover:border-coffee-300'
                    }`}
                  >
                    {/* Decorative background visual */}
                    <div className={`absolute top-0 right-0 w-36 h-36 bg-linear-to-bl -z-10 transition-all ${
                      isHero 
                        ? 'from-red-500/10 to-transparent group-hover:from-red-500/15' 
                        : 'from-coffee-100/40 to-transparent group-hover:from-leaf-100/20'
                    }`} />

                    {/* Header / Meta */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          {isHero && <Award className="w-4 h-4 text-red-300" />}
                          <span className={`text-[10px] font-mono uppercase tracking-[0.2em] font-extrabold ${
                            isHero ? 'text-red-300' : 'text-leaf-700 bg-leaf-50 px-2.5 py-0.5 rounded-sm'
                          }`}>
                            {isHero ? 'PRESTIGIOUS ORIGIN' : 'REGIONAL CLASSIC'}
                          </span>
                        </div>
                        <span className={`text-[10px] font-semibold uppercase tracking-wider ${
                          isHero ? 'text-white/70' : 'text-coffee-500'
                        }`}>
                          {variety.characteristic}
                        </span>
                      </div>

                      <div className="flex flex-col gap-1">
                        <h3 className="font-display font-light text-3xl sm:text-4xl tracking-tight">
                          {variety.name}
                        </h3>
                        <div className={`w-8 h-[2px] my-1 ${isHero ? 'bg-red-400' : 'bg-leaf-500'}`} />
                      </div>

                      <p className={`font-serif text-sm leading-relaxed font-light ${
                        isHero ? 'text-white/95' : 'text-coffee-800'
                      }`}>
                        {variety.description}
                      </p>
                    </div>

                    {/* Terroir Sensory Bars */}
                    <div className={`my-8 p-5 rounded-sm border ${
                      isHero 
                        ? 'bg-black/20 border-white/5 text-white' 
                        : 'bg-coffee-50/50 border-coffee-100/50 text-coffee-900'
                    }`}>
                      <div className="space-y-4 font-sans text-xs">
                        <div>
                          <div className="flex justify-between mb-1 font-bold uppercase tracking-wider text-[9px] opacity-80">
                            <span>Aroma Profile</span>
                            <span className={isHero ? 'text-red-300' : 'text-leaf-700'}>{variety.aroma}</span>
                          </div>
                          <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${aromaPct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className={`h-full ${isHero ? 'bg-red-400' : 'bg-leaf-600'}`} 
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1 font-bold uppercase tracking-wider text-[9px] opacity-80">
                            <span>Acidity Level</span>
                            <span className={isHero ? 'text-red-300' : 'text-leaf-700'}>{variety.acidity}</span>
                          </div>
                          <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${acidityPct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                              className={`h-full ${isHero ? 'bg-red-400' : 'bg-leaf-600'}`} 
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-1 font-bold uppercase tracking-wider text-[9px] opacity-80">
                            <span>Body & Texture</span>
                            <span className={isHero ? 'text-red-300' : 'text-leaf-700'}>{variety.body}</span>
                          </div>
                          <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${bodyPct}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                              className={`h-full ${isHero ? 'bg-red-400' : 'bg-leaf-600'}`} 
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Cupping Notes and Call-To-Action */}
                    <div className="space-y-6 pt-4 border-t border-coffee-100/20">
                      <div className="flex flex-wrap gap-1.5">
                        {variety.notes.map((note) => (
                          <span
                            key={note}
                            className={`text-[9px] font-sans font-semibold uppercase tracking-wider px-2.5 py-1 rounded-sm border ${
                              isHero 
                                ? 'bg-white/10 border-white/10 text-white hover:bg-white/15' 
                                : 'bg-coffee-100/60 border-coffee-100/40 text-coffee-800'
                            }`}
                          >
                            {note}
                          </span>
                        ))}
                      </div>

                      <motion.button
                        id={`cta-bento-sample-${variety.id}`}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => onSelectVarietyForQuote(variety.id)}
                        className={`w-full py-3.5 px-6 font-sans text-xs font-extrabold tracking-wider uppercase rounded-sm text-center shadow-xs transition-all flex items-center justify-center gap-2 group cursor-pointer ${
                          isHero 
                            ? 'bg-[#c22d2d] hover:bg-[#a12323] active:bg-[#851d1d] text-white' 
                            : 'bg-coffee-950 hover:bg-coffee-900 text-white'
                        }`}
                      >
                        Request B2B Sample
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          ) : (
            /* =========================================================================
               3. TABLEAU COMMERCIAL LOOKUP LAYOUT
               ========================================================================= */
            <motion.div 
              key="tableau-layout"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-coffee-100 rounded-sm overflow-hidden shadow-lg"
            >
              {/* Header row for large screens */}
              <div className="hidden lg:grid lg:grid-cols-12 gap-4 px-8 py-5 bg-coffee-50 border-b border-coffee-100 font-sans font-bold text-xs uppercase tracking-wider text-coffee-600 text-left">
                <div className="col-span-3">Variety & Terroir</div>
                <div className="col-span-2">Aroma Profile</div>
                <div className="col-span-2">Acidity character</div>
                <div className="col-span-2">Body & Mouthfeel</div>
                <div className="col-span-3 text-right">Sourcing Connection</div>
              </div>

              {/* List Rows */}
              <div className="divide-y divide-coffee-100 text-left">
                {filteredVarieties.map((variety, idx) => (
                  <motion.div 
                    key={variety.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: Math.min(idx * 0.03, 0.2) }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center px-6 sm:px-8 py-8 lg:py-6 transition-colors hover:bg-coffee-50/35"
                  >
                    {/* Name and description column */}
                    <div className="lg:col-span-3 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#c22d2d] rounded-full shrink-0" />
                        <h4 className="font-serif font-semibold text-xl text-coffee-950">
                          {variety.name}
                        </h4>
                      </div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-leaf-700">
                        • {variety.characteristic}
                      </p>
                      <p className="font-serif text-xs text-coffee-700 font-light leading-relaxed max-w-sm lg:max-w-none pr-4">
                        {variety.description}
                      </p>
                    </div>

                    {/* Aroma column */}
                    <div className="lg:col-span-2 space-y-1">
                      <span className="block lg:hidden text-[9px] font-sans font-bold uppercase tracking-wider text-coffee-400 mt-2">
                        Aroma
                      </span>
                      <p className="font-serif text-xs text-coffee-900 font-light">
                        {variety.aroma}
                      </p>
                    </div>

                    {/* Acidity column */}
                    <div className="lg:col-span-2 space-y-1">
                      <span className="block lg:hidden text-[9px] font-sans font-bold uppercase tracking-wider text-coffee-400 mt-2">
                        Acidity
                      </span>
                      <p className="font-serif text-xs text-coffee-900 font-light">
                        {variety.acidity}
                      </p>
                    </div>

                    {/* Body column */}
                    <div className="lg:col-span-2 space-y-1">
                      <span className="block lg:hidden text-[9px] font-sans font-bold uppercase tracking-wider text-coffee-400 mt-2">
                        Body & Texture
                      </span>
                      <p className="font-serif text-xs text-coffee-900 font-light">
                        {variety.body}
                      </p>
                    </div>

                    {/* Action / Tags column */}
                    <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col justify-end items-start sm:items-center lg:items-end gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-coffee-100">
                      <div className="flex flex-wrap lg:justify-end gap-1">
                        {variety.notes.slice(0, 3).map((note) => (
                          <span
                            key={note}
                            className="text-[9px] bg-coffee-100 text-coffee-800 px-2 py-0.5 rounded-sm font-sans font-semibold uppercase tracking-wider"
                          >
                            {note}
                          </span>
                        ))}
                      </div>

                      <motion.button
                        id={`cta-tableau-sample-${variety.id}`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => onSelectVarietyForQuote(variety.id)}
                        className="w-full sm:w-auto py-2.5 px-5 bg-[#c22d2d] hover:bg-[#a12323] active:bg-[#851d1d] text-white font-sans text-xs font-bold tracking-wider uppercase rounded-sm shadow-xs transition-colors text-center flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>Request Sample</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 5. Meticulous Sourcing Excellence block */}
      <section className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-8 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl rounded-sm text-left">
          {/* Left Side: Grayscale photo of cupping session */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[400px] md:min-h-[500px]"
          >
            <img 
              src="./7.webp" 
              alt="Meticulous coffee tasting and cupping evaluation"
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
            />
          </motion.div>
          
          {/* Right Side: Coffee Sourcing Guarantee */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#442c33] p-10 sm:p-16 lg:p-20 flex flex-col justify-center text-left text-white space-y-6"
          >
            <span className="text-xs font-mono text-red-300 uppercase tracking-[0.25em] font-extrabold">
              Q-GRADER GUARANTEE
            </span>
            <h3 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Quality Sourced Direct From Origin
            </h3>
            
            <p className="font-serif font-light text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              At Coffee Container, quality is a continuous commitment that follows every stage of the supply chain—from 
              farm selection to sample analysis and custom testing. Each batch is meticulously evaluated by certified Q-graders 
              to ensure it meets strict international export standards and preserves genuine origin identity.
            </p>
            <div className="inline-flex self-start items-center gap-1.5 text-xs text-red-300 font-semibold bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>SCA Score 85+ Specialty Grade Lots</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Double Beautiful Navigation Cards */}
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
            {/* Elegant gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-95" />
            
            {/* Card Content */}
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

          {/* Card 2: Sustainability */}
          <motion.button 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            whileHover={{ y: -8 }}
            onClick={() => handleNavigate('sustainability')}
            className="group relative h-[320px] w-full overflow-hidden text-left focus:outline-none shadow-lg rounded-sm cursor-pointer"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('./3.webp')" }}
            />
            {/* Elegant gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-95" />
            
            {/* Card Content */}
            <div className="absolute inset-x-8 bottom-8 text-white space-y-2 flex flex-col items-start">
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-white/70 uppercase">
                ETHICS & VISION
              </span>
              <h4 className="font-serif font-light text-3xl text-white group-hover:text-leaf-300 transition-colors">
                Sustainability
              </h4>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-sans font-bold tracking-[0.2em] text-white uppercase mt-2 border-b border-white/30 pb-0.5 group-hover:border-leaf-300 group-hover:text-leaf-300 transition-all">
                EXPLORE NOW <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </motion.button>
        </div>
      </section>
    </div>
  );
}
