import React, { useState } from 'react';
import { GENERAL_INFO, MARKET_SEGMENTS } from '../data';
import { ShieldCheck, Heart, Trees, Flame, Coffee, Globe, Award, TrendingUp, Briefcase, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

interface SustainabilitySectionProps {
  setActiveTab?: (tab: string) => void;
}

export default function SustainabilitySection({ setActiveTab }: SustainabilitySectionProps) {
  const { t, language } = useLanguage();
  const [activeSubTab, setActiveSubTab] = useState<'impact' | 'markets' | 'advantage' | 'future'>('impact');
  const [activeStep, setActiveStep] = useState<number>(1);

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
            backgroundImage: "url('/22.webp')",
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
            {t('sust.ethics')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-wide italic"
          >
            {language === 'ar' ? 'الأصالة وأمانة التوريد' : 'Sourcing & Sincerity'}
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
          {t('sust.header')}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-serif font-light text-base sm:text-lg md:text-xl text-coffee-900/90 leading-relaxed max-w-3xl mx-auto whitespace-pre-line"
        >
          {t('sust.intro')}
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
            backgroundImage: "url('/21.webp')",
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
              {t('sust.landscape')}
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
            {t('sust.columns')}
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif font-light text-3xl sm:text-4xl text-coffee-950"
          >
            {t('sust.ethicsTitle')}
          </motion.h3>
        </div>

        <div className="flex flex-wrap justify-center border-b border-coffee-100 gap-1 sm:gap-2">
          {(['impact', 'markets', 'advantage', 'future'] as const).map((tab) => {
            const label = tab === 'impact' ? t('sust.tab1') :
                          tab === 'markets' ? t('sust.tab2') :
                          tab === 'advantage' ? t('sust.tab3') : t('sust.tab4');
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
                    {t('sust.ethicsPurpose')}
                  </span>
                  <h3 className="font-serif font-light text-4xl sm:text-5xl text-coffee-950 leading-tight">
                    {t('sust.responsibleSourcing')}
                  </h3>
                  <p className="font-serif text-coffee-800 text-sm sm:text-base leading-relaxed font-light whitespace-pre-line">
                    {t('sust.responsibleText')}
                  </p>
                </div>

                <div className="md:col-span-5 space-y-6 pt-4">
                  {[
                    { id: 'women', title: t('sust.empoweringWomen'), text: t('sust.empoweringText'), Icon: Heart, iconColor: 'text-[#c22d2d]' },
                    { id: 'steward', title: t('sust.stewardship'), text: t('sust.stewardshipText'), Icon: Trees, iconColor: 'text-leaf-700' },
                    { id: 'integrity', title: t('sust.originIntegrity'), text: t('sust.originText'), Icon: ShieldCheck, iconColor: 'text-coffee-700' }
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

              {/* Detailed Vivid Sourcing & Processing Timeline (Seed to Container) */}
              <div className="bg-[#faf8f6] border border-coffee-100 rounded-sm p-6 sm:p-10 space-y-8 text-left">
                <div className="space-y-2 border-b border-coffee-100 pb-6">
                  <span className="text-[10px] font-mono tracking-widest text-[#c22d2d] uppercase font-black">
                    {language === 'ar' ? 'رحلة الإنتاج والفرز المتكاملة' : 'THE ORIGIN TO CONTAINER FLOW'}
                  </span>
                  <h3 className="font-serif font-light text-3xl sm:text-4xl text-coffee-950">
                    {language === 'ar' ? 'سلسلة التوريد ومعالجة البن بالتفصيل' : 'Vivid Sourcing & Processing Steps'}
                  </h3>
                  <p className="text-xs sm:text-sm text-coffee-700 font-light max-w-2xl leading-relaxed">
                    {language === 'ar' 
                      ? 'ندير كل خطوة بدقة متناهية بالتعاون مع المزارعين المحليين لضمان بقاء نكهة القهوة الإثيوبية النقية والفاخرة سليمة حتى تعبئتها في الحاوية.' 
                      : 'We manage every micro-step in close alignment with our agricultural partners, ensuring the pristine preservation of genuine Ethiopian flavor profiles from initial harvest to final export container.'}
                  </p>
                </div>

                {/* Horizontal Stepper Buttons */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                  {[
                    { step: 1, title: language === 'ar' ? '١. التوريد من المزارعين' : '1. Local Sourcing', icon: '🧑‍🌾' },
                    { step: 2, title: language === 'ar' ? '٢. قطف الكرزات' : '2. Precision Pick', icon: '🍒' },
                    { step: 3, title: language === 'ar' ? '٣. غسيل ومعالجة' : '3. Organic Wash', icon: '💧' },
                    { step: 4, title: language === 'ar' ? '٤. تجفيف بطيء' : '4. Sun Drying', icon: '☀️' }
                  ].map((s) => (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => setActiveStep(s.step)}
                      className={`flex items-center gap-2 px-4 py-3 border rounded-xs text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer focus:outline-none ${
                        activeStep === s.step
                          ? 'bg-[#c22d2d] border-[#c22d2d] text-white shadow-xs'
                          : 'bg-white border-coffee-100 text-coffee-800 hover:border-coffee-300 hover:bg-coffee-50/50'
                      }`}
                    >
                      <span>{s.icon}</span>
                      <span className="truncate">{s.title}</span>
                    </button>
                  ))}
                </div>

                {/* Active Step Panel */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-center">
                  {/* Step Image */}
                  <div className="lg:col-span-5 relative">
                    <div className="aspect-square sm:aspect-16/10 lg:aspect-square w-full overflow-hidden rounded-xs border border-coffee-100 shadow-sm">
                      <img
                        src={
                          activeStep === 1 ? '/11.webp' :
                          activeStep === 2 ? '/8.webp' :
                          activeStep === 3 ? '/9.webp' : '/10.webp'
                        }
                        alt="Step visual"
                        className="w-full h-full object-cover filter grayscale-15"
                      />
                    </div>
                    <div className="absolute bottom-4 left-4 bg-coffee-950/90 text-white text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-sm shadow-xs uppercase font-bold">
                      {language === 'ar' ? `المرحلة 0${activeStep}` : `STAGE 0${activeStep}`}
                    </div>
                  </div>

                  {/* Step Description */}
                  <div className="lg:col-span-7 space-y-5">
                    {activeStep === 1 && (
                      <div className="space-y-4">
                        <span className="text-[10px] font-mono tracking-wider text-leaf-700 bg-leaf-50 px-2.5 py-1 rounded-sm uppercase font-bold">
                          {language === 'ar' ? 'التعاون وتمكين المجتمع' : 'COOPERATIVE COMMUNITY ENGAGEMENT'}
                        </span>
                        <h4 className="font-serif font-light text-2xl text-coffee-950">
                          {language === 'ar' ? 'التوريد المباشر من مزارع العائلات الصغيرة' : 'Direct Trade Sourcing from Smallholder Farmers'}
                        </h4>
                        <p className="text-xs sm:text-sm text-coffee-800 font-light leading-relaxed">
                          {language === 'ar'
                            ? 'نعمل بشكل وثيق مع أكثر من ٥,٠٠٠ مزارع مستقل وجمعيات تعاونية في المرتفعات الإثيوبية الخصبة (مثل ييرغاشيفي، سيدامو، وغوجي). نلتزم بأسعار التجارة العادلة متجاوزين الوسطاء لتقديم حوافز مالية مجزية مباشرة للأسر المنتجة.'
                            : 'We work hand-in-hand with over 5,000 smallholder growers and organized village cooperatives across legendary high-altitude terroirs. By paying premium fair trade pricing directly to growers, we bypass complex agent structures, securing mutual loyalty and sustainable farming.'}
                        </p>
                        <div className="space-y-2 pt-2 border-t border-coffee-100">
                          <h5 className="text-[11px] font-mono uppercase text-coffee-950 tracking-wider font-extrabold">
                            {language === 'ar' ? 'نقاط الفحص والتحقق للتوريد:' : 'Traceability & Trust Checkpoints:'}
                          </h5>
                          <ul className="text-xs text-coffee-700 font-light space-y-1.5 list-disc pl-4 font-serif">
                            <li>
                              {language === 'ar' 
                                ? 'تسجيل جغرافي كامل لكل مزارع شريك يضمن دقة وتتبع المنشأ.'
                                : 'Geotagged monitoring of partner farms guarantees absolute regional authenticity.'}
                            </li>
                            <li>
                              {language === 'ar'
                                ? 'دفع مكافآت وعلاوات نقدية إضافية عند تزويدنا بدفعات عالية الجودة (أعلى من ٨٥ نقطة).'
                                : 'Quality premium bonuses paid directly, stimulating continuous community farm investment.'}
                            </li>
                            <li>
                              {language === 'ar'
                                ? 'توجيه زراعي مستمر لتحسين إنتاجية الشجيرات بالطرق العضوية المستدامة.'
                                : 'Agronomic education on composting and water conservation distributed throughout harvest seasons.'}
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div className="space-y-4">
                        <span className="text-[10px] font-mono tracking-wider text-[#c22d2d] bg-red-50 px-2.5 py-1 rounded-sm uppercase font-bold">
                          {language === 'ar' ? 'الانتقاء والفرز الفائق' : 'ULTRA-COMPREHENSIVE SELECTIVE HARVEST'}
                        </span>
                        <h4 className="font-serif font-light text-2xl text-coffee-950">
                          {language === 'ar' ? 'قطف يدوي للكرزات الحمراء المكتملة' : 'Precision Picking of Fully-Ripe Red Cherries'}
                        </h4>
                        <p className="text-xs sm:text-sm text-coffee-800 font-light leading-relaxed">
                          {language === 'ar'
                            ? 'لا توجد آلة تضاهي دقة عين الإنسان. يقطف جامعو البن لدينا يدوياً كرزات البن التي بلغت ذروة النضج السكري فقط. نترك الحبات الخضراء والزائدة النضج على الأغصان للحفاظ على كوب قهوة ناعم وخالٍ من العيوب وحموضة شديدة النقاء.'
                            : 'No machine can match human precision. Our trained pickers pass through the wild forests multiple times, hand-selecting only fully-saturated, crimson-red cherries. Under-ripe green cherries are left on the branches to ripen further, eliminating sourness and bitter defects.'}
                        </p>
                        <div className="space-y-2 pt-2 border-t border-coffee-100">
                          <h5 className="text-[11px] font-mono uppercase text-coffee-950 tracking-wider font-extrabold">
                            {language === 'ar' ? 'معايير جودة الفرز والانتقاء:' : 'Cherry Selection Standards:'}
                          </h5>
                          <ul className="text-xs text-coffee-700 font-light space-y-1.5 list-disc pl-4 font-serif">
                            <li>
                              {language === 'ar'
                                ? 'فحص عشوائي للرطوبة وتركيز السكريات باستخدام أجهزة قياس الانكسار الرقمية.'
                                : 'Brix density testing (refractometers) performed at collection stations to verify peak sugars.'}
                            </li>
                            <li>
                              {language === 'ar'
                                ? 'فرز يدوي ثانٍ على طاولات الفرز لاستبعاد أي حبات مكسورة أو متضررة.'
                                : 'Secondary hand-sorting table review where damaged or insect-bitten fruits are separated.'}
                            </li>
                            <li>
                              {language === 'ar'
                                ? 'معدل صفر عيوب لضمان تجانس مذاق الكوب النهائي عند التحميص.'
                                : 'Zero-defect criteria for specialty micro-lots, creating balanced clean acidity in every roast.'}
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {activeStep === 3 && (
                      <div className="space-y-4">
                        <span className="text-[10px] font-mono tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-sm uppercase font-bold">
                          {language === 'ar' ? 'المعالجة الرطبة الصديقة للبيئة' : 'PURE SPRING WATER WET PROCESSING'}
                        </span>
                        <h4 className="font-serif font-light text-2xl text-coffee-950">
                          {language === 'ar' ? 'غسيل بمياه الينابيع والتخمير الطبيعي' : 'Organic Fermentation & Natural Spring Washing'}
                        </h4>
                        <p className="text-xs sm:text-sm text-coffee-800 font-light leading-relaxed">
                          {language === 'ar'
                            ? 'يتم إزالة القشرة الخارجية بلطف خلال ساعات معدودة من الحصاد، تليها عملية تخمير طبيعية مدتها ٢٤ إلى ٣٦ ساعة لإبراز الإيحاءات العطرية والياسمينية النادرة. نستخدم مياه ينابيع جبلية متدفقة، حيث نعتمد على قنوات تصفية تفصل الحبوب الثقيلة عن الخفيفة.'
                            : 'Within hours of harvesting, cherries enter eco-friendly pulpers. The parchment is fermented naturally in clear-water tanks for 24 to 36 hours, breaking down mucilage and enhancing complex jasmine aromatics. We wash them in long mountain channels, letting gravity float away lesser-density seeds.'}
                        </p>
                        <div className="space-y-2 pt-2 border-t border-coffee-100">
                          <h5 className="text-[11px] font-mono uppercase text-coffee-950 tracking-wider font-extrabold">
                            {language === 'ar' ? 'خطوات المعالجة والغسيل النقية:' : 'Processing & Fermentation Controls:'}
                          </h5>
                          <ul className="text-xs text-coffee-700 font-light space-y-1.5 list-disc pl-4 font-serif">
                            <li>
                              {language === 'ar'
                                ? 'تدوير كامل للمياه المستخدمة لتقليل البصمة المائية والحفاظ على البيئة المحلية.'
                                : 'Closed-loop water recycling reduces total ecological footprint at washing centers.'}
                            </li>
                            <li>
                              {language === 'ar'
                                ? 'فحص ومراقبة دقيقة لدرجات الحموضة (pH) أثناء التخمير لمنع الإفراط في التفاعل.'
                                : 'Continuous pH monitoring in fermentation tanks to safeguard clean, bright profiles.'}
                            </li>
                            <li>
                              {language === 'ar'
                                ? 'الفرز بكثافة المياه يضمن الحصول على أنقى حبات البن الصلبة والكاملة.'
                                : 'Density grading channels guarantee only heavy, complex, well-formed seeds make the grade.'}
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {activeStep === 4 && (
                      <div className="space-y-4">
                        <span className="text-[10px] font-mono tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-sm uppercase font-bold">
                          {language === 'ar' ? 'التجفيف الطبيعي المتقن' : 'SLOW COMPREHENSIVE SUN-DRYING'}
                        </span>
                        <h4 className="font-serif font-light text-2xl text-coffee-950">
                          {language === 'ar' ? 'تجفيف بطيء على أسرة الخيزران المرتفعة' : 'Slow Dehydration on Raised African Bamboo Beds'}
                        </h4>
                        <p className="text-xs sm:text-sm text-coffee-800 font-light leading-relaxed">
                          {language === 'ar'
                            ? 'نفرش البن بعناية فائقة على أسرة أفريقية مرتفعة مصنوعة من الخيزران لضمان التهوية الممتازة. يستمر التجفيف تحت شمس المرتفعات اللطيفة والرياح الباردة لـ ١٢ إلى ٢٠ يوماً، مع تقليب دوري مستمر باليد لضمان تجفيف متماثل وثبات مثالي.'
                            : 'The wet parchment is distributed in thin layers on elevated African bamboo tables, allowing cooling mountain breezes to flow from above and below. Drying is carried out slowly over 12 to 20 days. Under steady gentle sun, our handlers continuously rotate the parchment.'}
                        </p>
                        <div className="space-y-2 pt-2 border-t border-coffee-100">
                          <h5 className="text-[11px] font-mono uppercase text-coffee-950 tracking-wider font-extrabold">
                            {language === 'ar' ? 'معايير ومراقبة التجفيف:' : 'Drying Table Checkpoints:'}
                          </h5>
                          <ul className="text-xs text-coffee-700 font-light space-y-1.5 list-disc pl-4 font-serif">
                            <li>
                              {language === 'ar'
                                ? 'تغطية البن بالكامل في أوقات الشمس الحارقة والليل لحماية الحبوب من الصدمات الحرارية والرطوبة.'
                                : 'Shaded canopies deployed during peak midday heat and night to prevent moisture re-absorption.'}
                            </li>
                            <li>
                              {language === 'ar'
                                ? 'تقليب الحبوب بمعدل ٤ إلى ٦ مرات يومياً لضمان تجانس مثالي لرطوبة الدفعة.'
                                : 'Continuous hand-raking 4 to 6 times daily ensures even color and sugar stabilization.'}
                            </li>
                            <li>
                              {language === 'ar'
                                ? 'فحص ومعايرة الرطوبة بانتظام حتى تصل للنسبة الدولية المحددة لتصدير الحاويات.'
                                : 'Target moisture lock at exactly 11.0% (measured via calibrated soil/grain moisture meters).'}
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
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
                    src="/18.webp" 
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
                    {t('sust.qualityAssurance')}
                  </span>
                  <h3 className="font-serif font-light text-2xl sm:text-3xl text-white leading-tight">
                    {language === 'ar' ? 'جودة استثنائية وعلاقات مبنية على الثقة' : GENERAL_INFO.qualityAssurance.title}
                  </h3>
                  <p className="font-serif font-light text-xs sm:text-sm text-white/95 leading-relaxed">
                    {language === 'ar' 
                      ? 'يبدأ التزامنا بالجودة في المزارع ومحطات المعالجة الموثوقة لدينا عبر أقاليم إثيوبيا. من خلال تواصلنا المباشر ومستشارينا اللوجستيين، نقوم بالتوريد والتحقق من دفعات البن المختص لضمان ثبات طعمها ومطابقتها للشروط الفنية.'
                      : GENERAL_INFO.qualityAssurance.heartOfTradition}
                  </p>
                  <div className="h-[1px] bg-white/20 w-24 my-2" />
                  <p className="font-serif font-light text-xs sm:text-sm text-white/90 leading-relaxed">
                    {language === 'ar' 
                      ? 'من خلال إدارة وفحص كل مرحلة، نساعد المحامص والموزعين العالميين على تنمية أعمالهم واكتساب رضا عملائهم بثقة ويقين تامين في سلسلة التوريد.'
                      : GENERAL_INFO.qualityAssurance.consistencyAndTrust}
                  </p>
                  <div className="inline-flex self-start items-center gap-1.5 text-xs text-leaf-300 font-semibold bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{t('sust.traceableContainers')}</span>
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
                  {t('sust.globalStrategy')}
                </span>
                <h3 className="font-serif font-light text-4xl sm:text-5xl text-coffee-950">
                  {t('sust.globalPartners')}
                </h3>
                <p className="font-serif text-coffee-800 text-sm sm:text-base leading-relaxed font-light">
                  {t('sust.globalText')}
                </p>
              </div>

              {/* Bento Grid layout for market segments */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {MARKET_SEGMENTS.map((segment, idx) => {
                  let translatedTitle = segment.title;
                  let translatedDesc = segment.description;

                  if (language === 'ar') {
                    if (segment.id === 'roasters') {
                      translatedTitle = 'محامص البن العالمية المختصة';
                      translatedDesc = 'نتعاون مع محامص القهوة المختصة الباحثة عن حبوب بن إثيوبية عالية الجودة تجسد العراقة والغنى العطري للبلد. نقوم بالتوريد بعناية لضمان الثبات التام.';
                    } else if (segment.id === 'cafes') {
                      translatedTitle = 'المقاهي ومحلات القهوة المتميزة حول العالم';
                      translatedDesc = 'نشحن للمقاهي التقدمية الراغبة في تقديم نكهات إثيوبية حقيقية لزبائنها، لإقامة صلة وصل مباشرة بين كوب القهوة وتراث المنشأ الأصيل.';
                    } else if (segment.id === 'wholesalers') {
                      translatedTitle = 'الموزعون والشركات المستوردة بالجملة';
                      translatedDesc = 'نورد حاويات البن بكميات كبيرة للموزعين الدوليين مع التركيز البالغ على موثوقية سلاسل الشحن واللوجستيات والالتزام الصارم بالمواعيد.';
                    } else if (segment.id === 'private-label') {
                      translatedTitle = 'شركاء العلامات التجارية الخاصة';
                      translatedDesc = 'نساعد العلامات التجارية الكبرى على تصميم وتعبئة خطوط القهوة الخاصة بها من أجود محاصيل البن الإثيوبي وبشكل مخصص وبكميات مرنة.';
                    }
                  }

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
                            {t('sust.segment')} {String(idx + 1).padStart(2, '0')}
                          </span>
                          <div className="w-8 h-8 rounded-sm bg-[#faf5f5] text-coffee-800 flex items-center justify-center">
                            {segment.id === 'roasters' && <Flame className="w-4 h-4 text-[#c22d2d]" />}
                            {segment.id === 'cafes' && <Coffee className="w-4 h-4 text-leaf-600" />}
                            {segment.id === 'wholesalers' && <Globe className="w-4 h-4 text-coffee-700" />}
                            {segment.id === 'private-label' && <Briefcase className="w-4 h-4 text-coffee-800" />}
                          </div>
                        </div>
                        <h4 className="font-serif font-light text-2xl text-coffee-950 leading-snug">
                          {translatedTitle}
                        </h4>
                        <p className="font-serif text-xs sm:text-sm text-coffee-700 leading-relaxed font-light">
                          {translatedDesc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-coffee-100 text-[10px] font-mono font-semibold text-leaf-600 uppercase tracking-wider flex items-center justify-between">
                        <span>
                          {segment.id === 'roasters' && t('sust.roastersNote')}
                          {segment.id === 'cafes' && t('sust.cafesNote')}
                          {segment.id === 'wholesalers' && t('sust.wholesalersNote')}
                          {segment.id === 'private-label' && t('sust.privateNote')}
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
                    {t('sust.compDifference')}
                  </span>
                  <h3 className="font-serif font-light text-4xl sm:text-5xl text-coffee-950 leading-tight">
                    {t('sust.compEdge')}
                  </h3>
                  
                  <div className="font-serif text-coffee-800 text-sm sm:text-base leading-relaxed space-y-8 font-light">
                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="border-l-2 border-red-500 pl-4"
                    >
                      <h4 className="font-sans font-extrabold text-xs tracking-[0.2em] text-[#c22d2d] uppercase mb-2">
                        {language === 'ar' ? 'تراث ممتد لأجيال يلتقي بالتجارة العصرية' : 'Generational Heritage Meets Modern Trade'}
                      </h4>
                      <p>
                        {t('sust.compEdgeText1')}
                      </p>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 }}
                      className="border-l-2 border-red-500 pl-4"
                    >
                      <h4 className="font-sans font-extrabold text-xs tracking-[0.2em] text-[#c22d2d] uppercase mb-2">
                        {language === 'ar' ? 'الموثوقية والاتساق الهيكلي' : 'Structured Reliability & Consistency'}
                      </h4>
                      <p>
                        {t('sust.compEdgeText2')}
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
                      src="/15.webp" 
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
                      {t('sust.brandStrategy')}
                    </span>
                    <div className="space-y-4">
                      <h4 className="font-serif text-xl font-normal text-coffee-950">
                        {language === 'ar' ? 'روابط التوريد المتينة' : 'Sourcing Connection'}
                      </h4>
                      <p className="font-serif text-xs sm:text-sm text-coffee-800 leading-relaxed font-light">
                        {t('sust.sourcingConnectionText')}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <h5 className="text-[10px] uppercase tracking-wider text-coffee-500 font-extrabold">{t('sust.keyColumns')}</h5>
                      <div className="text-xs space-y-2.5 font-light text-coffee-700 font-serif">
                        <p className="border-l-2 border-leaf-400 pl-3">
                          <strong className="font-semibold text-coffee-950 block font-sans">{t('sust.traceabilityTitle')}</strong> {t('sust.traceabilityDesc')}
                        </p>
                        <p className="border-l-2 border-leaf-400 pl-3">
                          <strong className="font-semibold text-coffee-950 block font-sans">{t('sust.originFocusTitle')}</strong> {t('sust.originFocusDesc')}
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
                      src="/13.webp" 
                      alt="Majestic mountains of coffee origin"
                      className="w-full h-full object-cover filter grayscale contrast-[1.25] brightness-90"
                    />
                  </div>
                </motion.div>

                {/* Center Element: Editorial story content */}
                <div className="md:col-span-6 text-center space-y-6 px-2">
                  <span className="text-xs font-sans font-extrabold tracking-[0.25em] text-[#c22d2d] uppercase">
                    {t('sust.strategicOutlook')}
                  </span>
                  <h3 className="font-serif font-light text-3xl sm:text-4xl text-coffee-950 leading-tight">
                    {language === 'ar' ? 'خطط النمو والتأثير المستقبلي' : GENERAL_INFO.growthPlans.title}
                  </h3>
                  
                  <div className="font-serif text-coffee-800 text-sm leading-relaxed font-light space-y-6 max-w-lg mx-auto text-center">
                    <p>
                      <strong className="font-sans text-xs uppercase tracking-wider text-[#c22d2d] block mb-1">{language === 'ar' ? 'رؤية التصدير اللوجستية للسنوات ٣-٥ القادمة' : GENERAL_INFO.growthPlans.vision3to5Years.title}</strong> 
                      {language === 'ar' 
                        ? 'مضاعفة قدراتنا التصديرية لتصل إلى شحن أكثر من ١٠٠ حاوية متكاملة سنوياً، مع دمج أنظمة تتبع رقمية ذكية تتيح للعملاء فحص وتتبع رحلة كل كيس من حبوب البن.' 
                        : GENERAL_INFO.growthPlans.vision3to5Years.text}
                    </p>
                    <p>
                      <strong className="font-sans text-xs uppercase tracking-wider text-[#c22d2d] block mb-1">{language === 'ar' ? 'الأثر المجتمعي والتوريد العادل' : GENERAL_INFO.growthPlans.communityImpact.title}</strong> 
                      {language === 'ar' 
                        ? 'توسيع شبكتنا لتشمل أكثر من ٥,٠٠٠ مزارع صغير من التعاونيات المحلية في الأقاليم، مع ضمان توزيع عوائد مجزية وبناء آبار مياه ومشاريع طاقة مستدامة للأسر.' 
                        : GENERAL_INFO.growthPlans.communityImpact.text}
                    </p>
                    <p>
                      <strong className="font-sans text-xs uppercase tracking-wider text-[#c22d2d] block mb-1">{language === 'ar' ? 'مختبرات تذوق دولية ومكاتب تمثيل' : GENERAL_INFO.growthPlans.futureCafes.title}</strong> 
                      {language === 'ar' 
                        ? 'إنشاء مكاتب تمثيل وغرف تذوق متقدمة في أوروبا وآسيا لتسهيل تقديم العينات وتوثيق الشراكات التجارية، مما يقلل الوقت اللوجستي ويزيد الثقة.' 
                        : GENERAL_INFO.growthPlans.futureCafes.text}
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
                      src="/17.webp" 
                      alt="New coffee sprouts"
                      className="w-full h-full object-cover filter grayscale contrast-[1.15]"
                    />
                  </div>
                </motion.div>
                
                {/* Mobile visible fallback for vertical photos */}
                <div className="grid grid-cols-2 gap-4 md:hidden">
                  <div className="aspect-square overflow-hidden shadow-md rounded-sm">
                    <img 
                      src="/13.webp" 
                      className="w-full h-full object-cover filter grayscale"
                      alt="Mountains"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden shadow-md rounded-sm">
                    <img 
                      src="/17.webp" 
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
          className="font-serif italic font-light text-xl sm:text-2xl md:text-3xl text-[#a84444] leading-relaxed tracking-wide max-w-3xl mx-auto whitespace-pre-line"
        >
          {language === 'ar' 
            ? 'خطوتنا القادمة تركز بالكامل على ميكنة التتبع وجعل معاملات الشحن تجربة ذكية شفافة، لتمكين المحامص حول العالم من مشاركة قصص مزارعينا بكل فخر وحب.' 
            : GENERAL_INFO.growthPlans.summary}
        </motion.blockquote>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-1.5 pt-4"
        >
          <p className="text-xs sm:text-sm font-sans tracking-[0.25em] font-extrabold text-coffee-950 uppercase">
            {language === 'ar' ? 'الاستدامة والشفافية التامة' : 'Sustainability & Integrity'}
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
              style={{ backgroundImage: "url('/11.webp')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-95" />
            
            <div className="absolute inset-x-8 bottom-8 text-white space-y-2 flex flex-col items-start">
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-white/70 uppercase">
                {language === 'ar' ? 'التراث والترابط السلس' : 'HERITAGE & ALIGNMENT'}
              </span>
              <h4 className="font-serif font-light text-3xl text-white group-hover:text-leaf-300 transition-colors">
                {t('nav.story')}
              </h4>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-sans font-bold tracking-[0.2em] text-white uppercase mt-2 border-b border-white/30 pb-0.5 group-hover:border-leaf-300 group-hover:text-leaf-300 transition-all">
                {language === 'ar' ? 'اكتشف الآن' : 'EXPLORE NOW'} <ArrowRight className="w-3 h-3" />
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
              style={{ backgroundImage: "url('/1.webp')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#361515]/90 via-black/35 to-transparent transition-opacity group-hover:opacity-95" />
            
            <div className="absolute inset-x-8 bottom-8 text-white space-y-2 flex flex-col items-start">
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-white/70 uppercase">
                {language === 'ar' ? 'المذاق والأرض المتميزة' : 'TASTE & FLAVOR'}
              </span>
              <h4 className="font-serif font-light text-3xl text-white group-hover:text-red-300 transition-colors">
                {t('nav.varieties')}
              </h4>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-sans font-bold tracking-[0.2em] text-white uppercase mt-2 border-b border-white/30 pb-0.5 group-hover:border-red-300 group-hover:text-red-300 transition-all">
                {language === 'ar' ? 'اكتشف الآن' : 'EXPLORE NOW'} <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </motion.button>
        </div>
      </section>
    </div>
  );
}
