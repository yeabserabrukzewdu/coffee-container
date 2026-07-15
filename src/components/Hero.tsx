import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Flame, Globe, Heart, ShieldCheck, Star, Camera, Compass, Send, CheckCircle, MapPin, ChevronLeft, ChevronRight, Play, Pause, Coffee, Trees } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onExplore: () => void;
  onRequestQuote: () => void;
  setActiveTab?: (tab: string) => void;
}

export default function Hero({ onExplore, onRequestQuote, setActiveTab }: HeroProps) {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slideInterval = useRef<ReturnType<typeof setInterval> | null>(null);

  // Unsplash high-resolution images mapping for coffee varieties
  const VARIETY_IMAGES: Record<string, string> = {
    yirgacheffee: '/1.webp',
    gesha: '/2.jpg',
    sidamo: '/3.webp',
    limmu: '/4.webp',
    guji: '/5.webp',
    harrar: '/6.webp',
    teppi: '/7.webp',
    djimmah: '/8.webp',
    nekemte: '/9.webp'
  };

  const { t, varieties, language } = useLanguage();

  const SHOWCASE_VARIETIES = varieties.filter(v => 
    ['yirgacheffee', 'gesha', 'sidamo', 'guji', 'harrar'].includes(v.id)
  );

  useEffect(() => {
    if (isPlaying) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % SHOWCASE_VARIETIES.length);
      }, 5000);
    } else {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
        slideInterval.current = null;
      }
    }

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [isPlaying, SHOWCASE_VARIETIES.length]);

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % SHOWCASE_VARIETIES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + SHOWCASE_VARIETIES.length) % SHOWCASE_VARIETIES.length);
  };

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
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
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        inquiryType: 'Container Pricing',
        message: ''
      });
    }, 1200);
  };

  // Navigation helper
  const navigateTo = (tabName: string) => {
    if (setActiveTab) {
      setActiveTab(tabName);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (tabName === 'varieties') onExplore();
      else if (tabName === 'export') onRequestQuote();
    }
  };

  return (
    <div className="space-y-24 pb-16 overflow-hidden">
      {/* 1. Immersive Full-Screen Editorial Hero Header */}
      <section id="hero-immersive" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image of high-altitude mist forest */}
        <div className="absolute inset-0">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  >
    <source
      src="https://res.cloudinary.com/dlfdjcuat/video/upload/v1783763099/omme_zcenf1.mp4"
      type="video/mp4"
    />
  </video>

  <div className="absolute inset-0 bg-black/50" />
</div>
        {/* Editorial dark Vignette & Radial Overlays */}
       
        {/* Content Centered */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center space-y-8 pt-20">
          <motion.span 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm font-sans font-extrabold tracking-[0.4em] text-leaf-300 uppercase block"
          >
            COFFEE CONTAINER
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-wide italic"
          >
            {t('hero.title')} <br />
            <span className="font-normal not-italic font-display block mt-3 text-3xl sm:text-5xl md:text-6xl lg:text-7xl">{t('hero.subtitle')}</span>
          </motion.h1>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-[1px] bg-leaf-400 mx-auto my-8" 
          />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-coffee-100/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans font-light tracking-wide leading-relaxed"
          >
            {t('hero.description')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pt-6 flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateTo('varieties')}
              className="px-8 py-3.5 bg-leaf-600 hover:bg-leaf-500 text-white font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-none transition-colors duration-300 focus:outline-none cursor-pointer"
            >
              {t('hero.explore')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateTo('export')}
              className="px-8 py-3.5 bg-[#c22d2d] hover:bg-[#a12323] text-white font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-none transition-colors duration-300 focus:outline-none cursor-pointer"
            >
              {t('hero.quote')}
            </motion.button>
          </motion.div>
        </div>

        {/* Bouncing Down Arrow */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce cursor-pointer z-10" 
          onClick={() => {
            document.getElementById('our-story-section')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </section>

      {/* 2. "Our Story" Offset Grid Layout Section */}
      <section id="our-story-section" className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-4 scroll-mt-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Offset Double-Photo layout */}
          <div className="lg:col-span-6 relative flex flex-col sm:flex-row gap-6 items-end">
            <motion.div 
              initial={{ opacity: 0, x: -60, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="w-full sm:w-2/3 aspect-[3/4] overflow-hidden rounded-xs border border-coffee-200/50 shadow-lg relative"
            >
              <div className="absolute inset-0 bg-coffee-950/10 z-10" />
              <img 
                src="./1.webp" 
                alt="Ethiopian Forest path" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.04, rotate: 1 }}
              className="w-full sm:w-1/2 aspect-square overflow-hidden rounded-xs border border-coffee-200/50 shadow-xl relative sm:-mb-8 sm:-ml-12 z-20"
            >
              <div className="absolute inset-0 bg-coffee-950/10 z-10" />
              <img 
                src="./2.jpg" 
                alt="Coffee cherry sun drying" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Right: Copy details */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-left space-y-6"
          >
            <span className="text-leaf-600 font-sans font-semibold text-xs tracking-widest uppercase block">
              {t('nav.story')}
            </span>
            <h2 className="font-display font-light text-3xl sm:text-5xl text-coffee-950 leading-tight">
              {t('hero.storyTitle')}
            </h2>
            <p className="text-coffee-800 text-sm sm:text-base leading-relaxed font-light whitespace-pre-line">
              {t('hero.storyText1')}
              <br /><br />
              {t('hero.storyText2')}
            </p>
            <motion.button
              whileHover={{ x: 6 }}
              onClick={() => navigateTo('story')}
              className="group inline-flex items-center gap-2 text-xs font-sans font-semibold text-leaf-700 tracking-widest uppercase hover:text-leaf-800 transition-colors pt-2 cursor-pointer"
            >
              {t('hero.readMore')} <span className="group-hover:translate-x-1 transition-transform">&gt;</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 3. "Forest of Dreams" Section */}
      <section className="bg-white border-y border-coffee-100 py-16 overflow-hidden">
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Aerial drone landscape photo */}
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="lg:col-span-6 order-last lg:order-first"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xs border border-coffee-100 shadow-md relative">
              <img 
                  src="./3.webp" 
                  alt="Aerial forest canopy of Ethiopia" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Elegant outline text block */}
            <motion.div 
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 text-left space-y-6 relative"
            >
              {/* Botanical sketch overlay backdrop */}
              <div className="absolute right-0 top-0 w-48 h-48 opacity-[0.04] pointer-events-none select-none">
                <svg viewBox="0 0 100 100" fill="currentColor" className="text-leaf-800">
                  <path d="M50,10 C45,25 35,35 20,40 C35,45 45,55 50,70 C55,55 65,45 80,40 C65,35 55,25 50,10 Z" />
                  <path d="M30,70 C35,75 35,85 30,90 C25,85 25,75 30,70 Z" />
                </svg>
              </div>

              <h2 className="font-display font-light text-4xl sm:text-5xl text-coffee-950">
                {t('hero.forestTitle')}
              </h2>
              <p className="text-coffee-800 text-sm sm:text-base leading-relaxed font-light whitespace-pre-line">
                {t('hero.forestText')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. "Protectors of Origin" Overlapping Polaroid Section */}
      <section className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 bg-[#fdfcfb] border-y border-coffee-100/30">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-5"
        >
          <span className="text-[10px] font-sans font-extrabold tracking-[0.3em] text-[#c22d2d] uppercase block">
            {t('hero.peoplesTitle')}
          </span>
          <h2 className="font-display font-light text-2xl sm:text-4.5xl text-coffee-950 leading-relaxed italic max-w-3xl mx-auto">
            {t('hero.peoplesQuote')}
          </h2>
          <div className="w-16 h-[1px] bg-coffee-200 mx-auto" />
        </motion.div>

        {/* Polaroid layout overlapping - Larger and highly polished */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-12 pt-6 max-w-6xl mx-auto">
          {/* Polaroid 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03, rotate: 0, y: -12, zIndex: 30 }}
            className="group bg-white p-5 pb-10 border border-coffee-100/80 shadow-xl rounded-xs w-full max-w-[340px] lg:max-w-[350px] shrink-0 cursor-pointer"
          >
            <div className="aspect-square overflow-hidden bg-coffee-50 border border-coffee-100/50 relative">
              <img 
                 src="./4.webp" 
                alt="Hands holding freshly picked coffee cherries" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="mt-5 space-y-1 text-center">
              <p className="font-serif text-coffee-900 font-medium italic text-sm">{t('hero.polaroid1')}</p>
              <p className="text-[10px] font-sans font-bold text-[#c22d2d] uppercase tracking-wider">{t('hero.polaroid1Sub')}</p>
            </div>
          </motion.div>

          {/* Polaroid 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            whileHover={{ scale: 1.03, rotate: 0, y: -20, zIndex: 30 }}
            className="group bg-white p-5 pb-10 border border-coffee-100/80 shadow-2xl rounded-xs w-full max-w-[340px] lg:max-w-[350px] shrink-0 lg:-mt-10 z-10 cursor-pointer"
          >
            <div className="aspect-square overflow-hidden bg-coffee-50 border border-coffee-100/50 relative">
              <img 
               src="./5.webp" 
                alt="Hands sorting coffee beans" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="mt-5 space-y-1 text-center">
              <p className="font-serif text-coffee-900 font-medium italic text-sm">{t('hero.polaroid2')}</p>
              <p className="text-[10px] font-sans font-bold text-[#c22d2d] uppercase tracking-wider">{t('hero.polaroid2Sub')}</p>
            </div>
          </motion.div>

          {/* Polaroid 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.03, rotate: 0, y: -12, zIndex: 30 }}
            className="group bg-white p-5 pb-10 border border-coffee-100/80 shadow-xl rounded-xs w-full max-w-[340px] lg:max-w-[350px] shrink-0 cursor-pointer"
          >
            <div className="aspect-square overflow-hidden bg-coffee-50 border border-coffee-100/50 relative">
              <img 
                src="/6.webp" 
                alt="Pristine raw green coffee beans" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="mt-5 space-y-1 text-center">
              <p className="font-serif text-coffee-900 font-medium italic text-sm">{t('hero.polaroid3')}</p>
              <p className="text-[10px] font-sans font-bold text-[#c22d2d] uppercase tracking-wider">{t('hero.polaroid3Sub')}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. "Taste & Flavor" Centered Box with Fruit/Coffee Border Frame & Immersive Slideshow */}
      <section className="w-full bg-[#fdfcfb] border-y border-coffee-100/60 py-16 sm:py-24 relative overflow-hidden">
        {/* Background ambient light effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-leaf-100/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-coffee-100/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-leaf-600 font-sans font-extrabold text-xs tracking-[0.3em] uppercase block">
              {t('var.taste')}
            </span>
            <h2 className="font-display font-light text-3xl sm:text-5xl text-coffee-950 leading-tight">
              {t('var.title')}
            </h2>
            <p className="text-coffee-800 text-sm sm:text-base leading-relaxed font-light">
              {t('hero.tasteSub')}
            </p>
          </div>

          {/* Interactive Slideshow Showcase */}
          <div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto pt-4"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {/* Left Column: Variety Technical Details Card (5 Columns) */}
            <div className="lg:col-span-5 bg-white border border-coffee-100/70 p-8 sm:p-10 flex flex-col justify-between shadow-xs rounded-sm relative min-h-[480px]">
              {/* Corner decorative bracket lines */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-coffee-200" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-coffee-200" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-coffee-200" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-coffee-200" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 flex-grow"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-coffee-500 uppercase tracking-widest block">
                      {t('hero.featuredVariety')} ({currentSlide + 1} / {SHOWCASE_VARIETIES.length})
                    </span>
                    <h3 className="font-serif font-light text-3xl sm:text-4xl text-coffee-950 italic">
                      {SHOWCASE_VARIETIES[currentSlide].name}
                    </h3>
                    <p className="text-xs font-sans font-bold text-[#c22d2d] uppercase tracking-wider">
                      {SHOWCASE_VARIETIES[currentSlide].characteristic}
                    </p>
                  </div>

                  <p className="text-coffee-800 text-xs sm:text-sm leading-relaxed font-light">
                    {SHOWCASE_VARIETIES[currentSlide].description}
                  </p>

                  {/* Flavor Metrics Grid */}
                  <div className="grid grid-cols-1 gap-3 pt-4 border-t border-coffee-100">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-sans font-bold uppercase text-coffee-500 tracking-wider">{t('var.aroma') || 'Aroma'}</span>
                      <span className="font-serif text-coffee-900 font-light italic">{SHOWCASE_VARIETIES[currentSlide].aroma}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-sans font-bold uppercase text-coffee-500 tracking-wider">{t('var.acidity') || 'Acidity'}</span>
                      <span className="font-serif text-coffee-900 font-light italic">{SHOWCASE_VARIETIES[currentSlide].acidity}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-sans font-bold uppercase text-coffee-500 tracking-wider">{t('var.body') || 'Body'}</span>
                      <span className="font-serif text-coffee-900 font-light italic">{SHOWCASE_VARIETIES[currentSlide].body}</span>
                    </div>
                  </div>

                  {/* Flavor Notes Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {SHOWCASE_VARIETIES[currentSlide].notes.map((note, index) => (
                      <span 
                        key={index} 
                        className="bg-coffee-50 border border-coffee-100 text-coffee-800 font-mono text-[9px] font-semibold uppercase px-2.5 py-1 tracking-wider"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Nav CTA */}
              <div className="pt-8 mt-auto flex items-center justify-between border-t border-coffee-100">
                <motion.button
                  whileHover={{ x: 4 }}
                  onClick={() => navigateTo('varieties')}
                  className="group inline-flex items-center gap-1.5 text-xs font-sans font-bold text-leaf-700 tracking-widest uppercase hover:text-[#c22d2d] transition-colors cursor-pointer"
                >
                  {t('hero.fullCatalog')} <span className="group-hover:translate-x-1 transition-transform">&gt;</span>
                </motion.button>

                <button
                  onClick={() => navigateTo('export')}
                  className="bg-[#c22d2d] hover:bg-[#a02222] text-white text-[10px] font-sans font-extrabold tracking-widest uppercase px-4 py-2 transition-colors duration-250 select-none cursor-pointer"
                >
                  {t('hero.quoteRequest')}
                </button>
              </div>
            </div>

            {/* Right Column: Beautiful Image Slideshow (7 Columns) */}
            <div className="lg:col-span-7 relative h-[400px] lg:h-auto min-h-[350px] overflow-hidden bg-coffee-900 group/image">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${VARIETY_IMAGES[SHOWCASE_VARIETIES[currentSlide].id] || VARIETY_IMAGES.yirgacheffee}')` }}
                />
              </AnimatePresence>
              
              {/* Premium dark vignette and glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 z-10 bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-1.5 flex items-center gap-2">
                <Coffee className="w-3.5 h-3.5 text-red-200" />
                <span className="text-[10px] font-sans font-extrabold tracking-widest text-white uppercase">SPECIALTY GRADED</span>
              </div>

              {/* Overlay Location Indicator */}
              <div className="absolute bottom-6 left-6 z-10 text-left space-y-1">
                <span className="text-[9px] font-mono text-white/70 uppercase tracking-widest block">ETHIOPIAN TERROIR</span>
                <h4 className="text-white font-serif font-light text-2xl italic">
                  {SHOWCASE_VARIETIES[currentSlide].name} Highland Reserves
                </h4>
              </div>

              {/* Slideshow Interface & Playback Controls Overlay (Bottom Right) */}
              <div className="absolute bottom-6 right-6 z-10 flex items-center gap-3">
                {/* Play / Pause button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(!isPlaying);
                  }}
                  className="p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white transition-all cursor-pointer focus:outline-none"
                  title={isPlaying ? "Pause Autoplay" : "Play Autoplay"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                </button>

                {/* Left Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevSlide();
                  }}
                  className="p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white transition-all cursor-pointer focus:outline-none"
                  aria-label="Previous Variety"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextSlide();
                  }}
                  className="p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-white transition-all cursor-pointer focus:outline-none"
                  aria-label="Next Variety"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Quick Slide Bullet Navigation (Top Right) */}
              <div className="absolute top-6 right-6 z-10 flex items-center gap-2 bg-black/30 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/5">
                {SHOWCASE_VARIETIES.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentSlide(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                      currentSlide === index ? 'bg-[#c22d2d] scale-125' : 'bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. "Sourcing Center: Processed with Care" Section with stages row */}
      <section className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-left space-y-6"
          >
            <span className="text-leaf-600 font-sans font-semibold text-xs tracking-widest uppercase block">
              {t('hero.sourcing')}
            </span>
            <h2 className="font-display font-light text-3xl sm:text-5xl text-coffee-950 leading-tight">
              {t('hero.processed')}
            </h2>
            <p className="text-coffee-800 text-sm sm:text-base leading-relaxed font-light">
              {t('hero.processedText')}
            </p>
            <motion.button
              whileHover={{ x: 6 }}
              onClick={() => navigateTo('varieties')}
              className="group inline-flex items-center gap-2 text-xs font-sans font-semibold text-leaf-700 tracking-widest uppercase hover:text-leaf-800 transition-colors pt-2 cursor-pointer"
            >
              {t('hero.exploreBtn')} <span className="group-hover:translate-x-1 transition-transform">&gt;</span>
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-7"
          >
            <div className="aspect-[16/9] w-full overflow-hidden rounded-xs border border-coffee-100 shadow-md">
              <img 
                src="/7.webp" 
                alt="Women processing coffee beans" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* 3 stages row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="space-y-3 text-left group cursor-pointer"
          >
            <div className="aspect-square w-full overflow-hidden rounded-xs border border-coffee-100 shadow-xs group-hover:border-leaf-400 group-hover:shadow-md transition-all duration-300">
              <img 
                src="./8.webp"
                alt="Fresh cherries" 
                className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <h4 className="font-display font-semibold text-coffee-950 text-base group-hover:text-leaf-700 transition-colors">{t('hero.stage1Title')}</h4>
            <p className="text-xs text-coffee-700 leading-relaxed font-light">{t('hero.stage1Text')}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="space-y-3 text-left group cursor-pointer"
          >
            <div className="aspect-square w-full overflow-hidden rounded-xs border border-coffee-100 shadow-xs group-hover:border-leaf-400 group-hover:shadow-md transition-all duration-300">
              <img 
                src="./9.webp" 
                alt="Green beans" 
                className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <h4 className="font-display font-semibold text-coffee-950 text-base group-hover:text-leaf-700 transition-colors">{t('hero.stage2Title')}</h4>
            <p className="text-xs text-coffee-700 leading-relaxed font-light">{t('hero.stage2Text')}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="space-y-3 text-left group cursor-pointer"
          >
            <div className="aspect-square w-full overflow-hidden rounded-xs border border-coffee-100 shadow-xs group-hover:border-leaf-400 group-hover:shadow-md transition-all duration-300">
              <img 
                src="./10.webp" 
                alt="Sun dry pods" 
                className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <h4 className="font-display font-semibold text-coffee-950 text-base group-hover:text-leaf-700 transition-colors">{t('hero.stage3Title')}</h4>
            <p className="text-xs text-coffee-700 leading-relaxed font-light">{t('hero.stage3Text')}</p>
          </motion.div>
        </div>
      </section>

      {/* 7. "Plantation & Sourcing Facts" Dark Overlaid Banner */}
      <section className="w-full bg-coffee-950 text-white py-16 relative overflow-hidden">
        {/* Background dark forest overlay */}
        <motion.div 
          initial={{ scale: 1.15, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.15 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: "url('/21.webp')" }}
        />
        <div className="absolute inset-0 bg-linear-to-r from-coffee-950/90 via-transparent to-coffee-950/90" />

        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          {/* Centered header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-2"
          >
            <span className="text-xs font-mono text-leaf-400 font-semibold tracking-widest uppercase">{language === 'ar' ? 'استكشاف المنشأ' : 'EXPLORING ORIGIN'}</span>
            <h2 className="font-display font-light text-3xl sm:text-5xl">{t('hero.sourcingFacts')}</h2>
          </motion.div>

          {/* Stats columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-y border-white/10 py-8 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="space-y-1 cursor-pointer"
            >
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-leaf-400">471</div>
              <div className="text-xs uppercase tracking-widest text-coffee-200">{t('hero.hectares')}</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="space-y-1 cursor-pointer"
            >
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-leaf-400">341</div>
              <div className="text-xs uppercase tracking-widest text-coffee-200">{t('hero.cooperatives')}</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="space-y-1 cursor-pointer"
            >
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-leaf-400">730,000</div>
              <div className="text-xs uppercase tracking-widest text-coffee-200">{t('hero.trees')}</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="space-y-1 cursor-pointer"
            >
              <div className="font-display font-extrabold text-3xl sm:text-4xl text-leaf-400">27%</div>
              <div className="text-xs uppercase tracking-widest text-coffee-200">{t('hero.preservation')}</div>
            </motion.div>
          </div>

          {/* Sustainability committed subsection below stats */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-10 overflow-hidden">
            {/* Left: 2 large overlapping premium polaroids */}
            <div className="lg:col-span-6 flex justify-center items-center relative h-[400px] sm:h-[460px] select-none w-full max-w-[550px] mx-auto">
              {/* Background elegant accent glow/ring */}
              <div className="absolute inset-0 bg-radial from-leaf-900/10 to-transparent rounded-full blur-3xl w-72 h-72 m-auto pointer-events-none" />

              {/* Polaroid 1: The Forest Canopy */}
              <motion.div 
                initial={{ opacity: 0, x: -60, rotate: -12 }}
                whileInView={{ opacity: 1, x: -30, y: -20, rotate: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                whileHover={{ scale: 1.04, rotate: -1, y: -30, zIndex: 40 }}
                className="bg-white p-4 pb-8 border border-white/25 shadow-2xl rounded-sm w-[210px] sm:w-[250px] shrink-0 absolute left-4 sm:left-8 z-10 cursor-pointer"
                onClick={() => navigateTo('sustainability')}
              >
                <div className="aspect-[4/3] overflow-hidden bg-coffee-950/20 relative">
                  <img 
                    src="./11.webp"  
                    alt="Wild Forest Canopy" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="mt-4 space-y-1 text-center">
                  <p className="font-serif text-coffee-950 font-semibold italic text-sm">{t('sust.stewardship')}</p>
                  <p className="text-[9px] font-sans font-bold text-[#c22d2d] uppercase tracking-widest">{t('sust.organicShade')}</p>
                </div>
              </motion.div>

              {/* Polaroid 2: Hand Sourcing */}
              <motion.div 
                initial={{ opacity: 0, x: 60, rotate: 12 }}
                whileInView={{ opacity: 1, x: 30, y: 20, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.04, rotate: 0, y: 10, zIndex: 40 }}
                className="bg-white p-4 pb-8 border border-white/25 shadow-2xl rounded-sm w-[210px] sm:w-[250px] shrink-0 absolute right-4 sm:right-8 z-20 cursor-pointer"
                onClick={() => navigateTo('sustainability')}
              >
                <div className="aspect-[4/3] overflow-hidden bg-coffee-950/20 relative">
                  <img 
                    src="./12.webp"
                    alt="Ethical Hand Picked Cherries" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/5 hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="mt-4 space-y-1 text-center">
                  <p className="font-serif text-coffee-950 font-semibold italic text-sm">{language === 'ar' ? 'تعاونيات مُمكّنة' : 'Empowered Cooperatives'}</p>
                  <p className="text-[9px] font-sans font-bold text-leaf-700 uppercase tracking-widest">{language === 'ar' ? 'مصادر قابلة للتتبع 100٪' : '100% Traceable Sourcing'}</p>
                </div>
              </motion.div>
            </div>

            {/* Right: Text description */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 text-left space-y-8 lg:pl-6"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-sans font-extrabold tracking-[0.3em] text-leaf-400 uppercase block">
                  {t('sust.ethics')}
                </span>
                <h3 className="font-display font-light text-2xl sm:text-4xl text-coffee-50 leading-tight">
                  {language === 'ar' ? 'رعاية جذور تراثنا في القهوة' : 'Nurturing the Roots of Our Coffee Heritage'}
                </h3>
                <p className="text-coffee-200 text-sm sm:text-base leading-relaxed font-light">
                  {t('sust.intro')}
                </p>
              </div>

              {/* 3 Micro-pillars linking to the Sustainability page with elegant hover highlights */}
              <div className="grid grid-cols-1 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-leaf-500/20 hover:bg-white/10 transition-all duration-300 group cursor-pointer" onClick={() => navigateTo('sustainability')}>
                  <div className="p-2 rounded-md bg-leaf-950/50 border border-leaf-500/30 text-leaf-400 group-hover:bg-leaf-500 group-hover:text-coffee-950 transition-colors shrink-0">
                    <Trees className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-xs text-white uppercase tracking-wider">{t('sust.stewardship')}</h4>
                    <p className="text-xs text-coffee-300 font-light mt-0.5">{t('sust.stewardshipText')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-leaf-500/20 hover:bg-white/10 transition-all duration-300 group cursor-pointer" onClick={() => navigateTo('sustainability')}>
                  <div className="p-2 rounded-md bg-leaf-950/50 border border-leaf-500/30 text-leaf-400 group-hover:bg-leaf-500 group-hover:text-coffee-950 transition-colors shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-xs text-white uppercase tracking-wider">{language === 'ar' ? 'الازدهار المشترك' : 'Shared Prosperity'}</h4>
                    <p className="text-xs text-coffee-300 font-light mt-0.5">{language === 'ar' ? 'إعادة استثمار عوائد نقدية شفافة مباشرة في صناديق مجتمعات صغار المزارعين.' : 'Reinvesting transparent cash premiums directly into smallholder community funds.'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-leaf-500/20 hover:bg-white/10 transition-all duration-300 group cursor-pointer" onClick={() => navigateTo('sustainability')}>
                  <div className="p-2 rounded-md bg-leaf-950/50 border border-leaf-500/30 text-leaf-400 group-hover:bg-leaf-500 group-hover:text-coffee-950 transition-colors shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-xs text-white uppercase tracking-wider">{language === 'ar' ? 'صدق مطلق' : 'Absolute Sincerity'}</h4>
                    <p className="text-xs text-coffee-300 font-light mt-0.5">{language === 'ar' ? 'ضمان الجودة من Q-grader للتحقق من منشأ الحاويات وعمليات التدقيق الأخلاقية.' : 'Q-grader quality assurance verifying container-level origin and ethical audits.'}</p>
                  </div>
                </div>
              </div>

              {/* Bold premium CTA highlight */}
              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigateTo('sustainability')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-leaf-500 text-coffee-950 text-xs font-sans font-bold tracking-widest uppercase hover:bg-leaf-400 active:bg-leaf-600 transition-colors shadow-lg shadow-leaf-500/10 hover:shadow-leaf-500/20 cursor-pointer rounded-xs"
                >
                  {language === 'ar' ? 'اكتشف رؤيتنا ومبادراتنا الأخلاقية' : 'DISCOVER OUR ETHICAL VISION & INITIATIVES'}
                  <span className="text-base leading-none">→</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. "Origin Moments" Photo Journal Grid (Instagram mockup) */}
      <section className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-2"
        >
          <span className="text-xs font-mono text-leaf-600 font-semibold tracking-widest uppercase">{language === 'ar' ? 'معرضنا' : 'OUR GALLERY'}</span>
          <h2 className="font-display font-light text-3xl sm:text-5xl text-coffee-950">{language === 'ar' ? 'لحظات من منشأ مصادرنا' : 'Origin Sourcing Moments'}</h2>
          <p className="font-serif text-xs text-coffee-600 italic">@coffee_container</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="aspect-square overflow-hidden bg-coffee-100 rounded-xs border border-coffee-200/40 relative group shadow-xs cursor-pointer"
          >
            <img src="/11.webp" alt="moment 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-coffee-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"><Camera className="w-5 h-5" /></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="aspect-square overflow-hidden bg-coffee-100 rounded-xs border border-coffee-200/40 relative group shadow-xs cursor-pointer"
          >
            <img src="/12.webp" alt="moment 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-coffee-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"><Camera className="w-5 h-5" /></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="aspect-square overflow-hidden bg-coffee-100 rounded-xs border border-coffee-200/40 relative group shadow-xs cursor-pointer"
          >
            <img src="/13.webp" alt="moment 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-coffee-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"><Camera className="w-5 h-5" /></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="aspect-square overflow-hidden bg-coffee-100 rounded-xs border border-coffee-200/40 relative group shadow-xs cursor-pointer"
          >
            <img src="/14.webp" alt="moment 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-coffee-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"><Camera className="w-5 h-5" /></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="aspect-square overflow-hidden bg-coffee-100 rounded-xs border border-coffee-200/40 relative group shadow-xs cursor-pointer"
          >
            <img src="/15.webp" alt="moment 5" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-coffee-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"><Camera className="w-5 h-5" /></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="aspect-square overflow-hidden bg-coffee-100 rounded-xs border border-coffee-200/40 relative group shadow-xs cursor-pointer"
          >
            <img src="/16.webp" alt="moment 6" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-coffee-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white"><Camera className="w-5 h-5" /></div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center gap-4 pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigateTo('varieties')}
            className="px-5 py-2.5 bg-coffee-900 hover:bg-coffee-950 text-white font-medium text-xs uppercase tracking-widest rounded-sm transition-colors focus:outline-none cursor-pointer"
          >
            Load More Sourcing Stories
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigateTo('export')}
            className="px-5 py-2.5 bg-leaf-600 hover:bg-leaf-700 text-white font-medium text-xs uppercase tracking-widest rounded-sm transition-colors focus:outline-none cursor-pointer"
          >
            Partner with Us
          </motion.button>
        </motion.div>
      </section>

      {/* 9. Compact Bottom Contact Us Section (Form & Map) */}
      <section className="bg-white border-t border-coffee-100/50 py-16 sm:py-24">
        <div className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-3"
          >
            <span className="text-xs font-sans font-extrabold tracking-[0.3em] text-[#c22d2d] uppercase block">
              {t('cont.getInTouch')}
            </span>
            <h2 className="font-display font-light text-3xl sm:text-5xl text-coffee-950">
              {t('cont.intake')}
            </h2>
            <div className="h-[1px] bg-red-300 w-16 mx-auto my-3" />
            <p className="font-serif text-sm sm:text-base text-coffee-600 max-w-2xl mx-auto font-light leading-relaxed">
              {t('cont.intakeSub')}
            </p>
          </motion.div>

          {/* Grid: Form on the Left, Map on the Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Form Column (7 Cols) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-[#faf8f6] border border-coffee-100 rounded-sm p-6 sm:p-10 flex flex-col justify-between text-left h-full"
            >
              <div>
                <h3 className="font-serif font-light text-xl sm:text-2xl text-coffee-950 mb-6 pb-2 border-b border-coffee-100/50">
                  {t('cont.intake')}
                </h3>

                {isSubmitted ? (
                  <div className="bg-leaf-50/40 border border-leaf-100 p-8 rounded-sm text-center space-y-4 my-6">
                    <CheckCircle className="w-10 h-10 text-leaf-600 mx-auto" />
                    <h4 className="font-serif text-lg font-bold text-leaf-900">
                      {t('hero.quoteSuccess')}
                    </h4>
                    <p className="font-serif text-xs sm:text-sm text-coffee-800 max-w-md mx-auto leading-relaxed">
                      {t('hero.quoteSuccessText')}
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-5 py-2 bg-[#c22d2d] hover:bg-[#a12323] text-white font-sans text-xs font-bold tracking-wider uppercase rounded-sm transition-colors cursor-pointer"
                      >
                        {language === 'ar' ? 'رسالة جديدة' : 'New Message'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="home-contact-name" className="block text-[10px] font-sans font-bold uppercase tracking-wider text-coffee-800">
                          {t('cont.fullName')}
                        </label>
                        <input
                          type="text"
                          id="home-contact-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-2.5 bg-white border border-coffee-200/80 focus:border-leaf-500 rounded-sm text-sm focus:outline-none transition-colors text-coffee-950 placeholder-coffee-400"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="home-contact-email" className="block text-[10px] font-sans font-bold uppercase tracking-wider text-coffee-800">
                          {t('cont.corpEmail')}
                        </label>
                        <input
                          type="email"
                          id="home-contact-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 bg-white border border-coffee-200/80 focus:border-leaf-500 rounded-sm text-sm focus:outline-none transition-colors text-coffee-950 placeholder-coffee-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Company */}
                      <div className="space-y-1.5">
                        <label htmlFor="home-contact-company" className="block text-[10px] font-sans font-bold uppercase tracking-wider text-coffee-800">
                          {t('cont.compRoastery')}
                        </label>
                        <input
                          type="text"
                          id="home-contact-company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="e.g. Specialty Roasters"
                          className="w-full px-4 py-2.5 bg-white border border-coffee-200/80 focus:border-leaf-500 rounded-sm text-sm focus:outline-none transition-colors text-coffee-950 placeholder-coffee-400"
                        />
                      </div>

                      {/* Inquiry Type */}
                      <div className="space-y-1.5">
                        <label htmlFor="home-contact-inquiryType" className="block text-[10px] font-sans font-bold uppercase tracking-wider text-coffee-800">
                          {t('cont.primaryObj')}
                        </label>
                        <select
                          id="home-contact-inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-white border border-coffee-200/80 focus:border-leaf-500 rounded-sm text-sm focus:outline-none transition-colors text-coffee-950"
                        >
                          <option value="Container Pricing">{t('cont.fclPricing')}</option>
                          <option value="Green Sample Request">{t('cont.greenSample')}</option>
                          <option value="Custom Sourcing Partnership">{t('cont.customSourcing')}</option>
                          <option value="General Business Inquiry">{t('cont.generalCollab')}</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="home-contact-message" className="block text-[10px] font-sans font-bold uppercase tracking-wider text-coffee-800">
                        {t('cont.detailedMsg')}
                      </label>
                      <textarea
                        id="home-contact-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t('cont.detailedPlaceholder')}
                        className="w-full px-4 py-2.5 bg-white border border-coffee-200/80 focus:border-leaf-500 rounded-sm text-sm focus:outline-none transition-colors resize-none text-coffee-950 placeholder-coffee-400"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full py-3 bg-[#c22d2d] hover:bg-[#a12323] disabled:bg-coffee-300 text-white font-sans text-xs font-extrabold tracking-widest uppercase rounded-sm shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer mt-4"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>{t('cont.transmitting')}</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>{t('cont.submitIntake')}</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Map Column (5 Cols) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 bg-[#faf8f6] border border-coffee-100 rounded-sm p-4 flex flex-col justify-between h-full"
            >
              <div className="flex-grow flex flex-col min-h-[300px]">
                <div className="p-2 space-y-1.5 text-left shrink-0">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-extrabold tracking-wider text-[#c22d2d] uppercase">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{t('cont.locationMap')}</span>
                  </div>
                  <h4 className="font-serif font-light text-base text-coffee-950">
                    {t('cont.sampleRoom')}
                  </h4>
                  <p className="text-[11px] text-coffee-600 leading-relaxed font-light">
                    {t('cont.sampleRoomSub')}
                  </p>
                </div>

                <div className="relative flex-grow rounded-sm overflow-hidden border border-coffee-100/50 mt-3 min-h-[200px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.11166347355!2d38.746890351052674!3d9.010793392476023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1720562400000!5m2!1sen!2sus" 
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Coffee Container HQ, Addis Ababa"
                    id="google-maps-home-iframe"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
