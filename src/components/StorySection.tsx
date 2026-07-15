import React from 'react';
import { Quote, ArrowRight, Compass, Sprout, ArrowRightLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

interface StorySectionProps {
  setActiveTab?: (tab: string) => void;
}

export default function StorySection({ setActiveTab }: StorySectionProps) {
  const { t, language } = useLanguage();

  const handleNavigate = (tab: string) => {
    if (setActiveTab) {
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#fdfcfb] text-coffee-950 pb-12 overflow-hidden">
      {/* 1. Immersive Full-Bleed Story Hero Banner */}
      <section className="relative h-[65vh] min-h-[450px] w-full overflow-hidden flex items-center justify-center">
        {/* Background photo of mountain mist forest */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('/1.webp')",
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
            {t('story.journey')}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display font-light text-4xl sm:text-6xl md:text-7xl text-white tracking-wide italic"
          >
            {t('story.title')}
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
          {t('story.header')}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-serif font-light text-base sm:text-lg md:text-xl text-coffee-900/90 leading-relaxed max-w-3xl mx-auto whitespace-pre-line"
        >
          {t('story.intro')}
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
            backgroundImage: "url('/13.webp')",
          }}
        />
        {/* Elegant dark overlay */}
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
              {t('story.landscape')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="max-w-[95%] mx-auto px-6 py-20 sm:py-28 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 text-left space-y-8"
          >
            <h3 className="font-serif font-light text-4xl sm:text-5xl lg:text-6xl text-coffee-950 leading-tight">
              {t('story.whoWeAre')}
            </h3>
            
            <div className="font-serif text-coffee-800 text-sm sm:text-base leading-relaxed space-y-8 font-light">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-2 border-l-2 border-[#c22d2d] pl-4"
              >
                <h4 className="font-sans font-extrabold text-xs tracking-[0.25em] text-[#c22d2d] uppercase">
                  {language === 'ar' ? 'فريق التوريد والزراعة والتنمية المحلية' : 'Origin Sourcing, Agronomy & Local Partnership'}
                </h4>
                <p>
                  {language === 'ar' 
                    ? 'يضم فريق التوريد المحلي لدينا نخبة من الخبراء الزراعيين الذين يتمتعون بخبرات عميقة متوارثة عبر الأجيال في ثقافة زراعة القهوة الإثيوبية. نعمل مباشرة على الأرض في مناطق الإنتاج الرئيسية بالتعاون مع المزارعين المحليين والتعاونيات النسائية، لإدارة الجودة وضمان زراعة مستدامة وتعويض عادل ومستدام للمنتجين.'
                    : "Our dedicated origin team brings together deep agricultural expertise and generations of experience rooted in Ethiopia's coffee cultivation history. Operating directly on the ground across primary coffee regions, we work side-by-side with local smallholder farmers and women-led cooperatives. We manage quality at the farm level, ensure sustainable agroforestry, and guarantee that producers are compensated fairly and transparently."
                  }
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-2 border-l-2 border-[#c22d2d] pl-4"
              >
                <h4 className="font-sans font-extrabold text-xs tracking-[0.25em] text-[#c22d2d] uppercase">
                  {language === 'ar' ? 'إدارة الأسواق العالمية، واللوجستيات، والامتثال اللوجستي' : 'Global Markets, Logistics & Compliance Operations'}
                </h4>
                <p>
                  {language === 'ar'
                    ? 'يتولى قسم العمليات والتجارة الدولية لدينا إدارة سلسلة التوريد اللوجستية المعقدة من أديس أبابا إلى مختلف الوجهات العالمية. بفضل خبرتنا الواسعة في الشحن البحري، والامتثال الجمركي، وحركة الحاويات، نعمل على حل الفجوات التقليدية في لوجستيات المنشأ لضمان وصول شحنات آمنة وموثوقة لعملائنا في الوقت المحدد وبأعلى معايير التتبع.'
                    : 'Our international trade and operations division manages the complex pipeline from Addis Ababa to global destinations. With extensive experience in maritime shipping, customs compliance, and supply chain design, we resolve the historical gaps in origin logistics. We handle all documentation, container sealing, and quality inspections so that international roasters and wholesalers receive reliable, predictable, and traceable shipments on time.'
                  }
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Grayscale Photo */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-6 self-center"
          >
            <div className="relative overflow-hidden aspect-4/3 shadow-2xl bg-coffee-100 rounded-sm">
              <img 
                src="/14.webp" 
                alt="The Coffee Container Sourcing & Logistics Team"
                className="w-full h-full object-cover filter grayscale contrast-[1.10] brightness-[0.98]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. The Core Journey: Our Vision, The Farmer Sourcing, The Buyer Gap & Our Solution */}
      
      {/* Block 1: Our Vision */}
      <section className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl rounded-sm">
          {/* Left Side: Land Rover Defender */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[400px] md:min-h-[500px]"
          >
            <img 
              src="/15.webp" 
              alt="Land Rover Defender conquering the wild terrain of West Omo"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
          
          {/* Right Side: Our Vision */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#442c33] p-10 sm:p-16 lg:p-20 flex flex-col justify-center text-left text-white space-y-6"
          >
            <span className="text-xs font-mono text-red-300 uppercase tracking-[0.25em] font-extrabold">
              {language === 'ar' ? 'الرسالة والتوجه' : 'MISSION & DIRECTION'}
            </span>
            <h3 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              {t('story.missionTitle')}
            </h3>
            
            <p className="font-serif font-light text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              {t('story.visionText')}
            </p>
            <div className="pt-4 border-t border-white/10 text-[10px] font-mono font-semibold text-leaf-300 uppercase tracking-wider">
              {language === 'ar' ? '• الازدهار المشترك والنزاهة' : '• SHARED PROSPERITY & INTEGRITY'}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Block 2: The Farmer Sourcing */}
      <section className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl rounded-sm">
          {/* Left Side: The Farmer Sourcing Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#442c33] p-10 sm:p-16 lg:p-20 flex flex-col justify-center text-left text-white space-y-6 md:order-1"
          >
            <span className="text-xs font-mono text-red-300 uppercase tracking-[0.25em] font-extrabold">
              {language === 'ar' ? 'مناظر المنشأ الطبيعية' : 'ORIGIN LANDSCAPES'}
            </span>
            <h3 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              {language === 'ar' ? 'مصادر صغار المزارعين' : 'The Farmer Sourcing'}
            </h3>
            
            <p className="font-serif font-light text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              {language === 'ar'
                ? 'على أحد الجوانب يقف المزارعون - يعملون بمعرفة عميقة متوارثة عبر الأجيال، ويزرعون القهوة بعناية في تضاريس غنية ومرتفعة، ولكنهم تاريخياً يحصلون على رؤية محدودة وفرص وصول متقلبة إلى الأسواق.'
                : 'On one side are the farmers—working with deep knowledge passed down through generations, carefully cultivating coffee in rich, high-altitude landscapes, but historically receiving limited visibility and volatile market access.'
              }
            </p>
            <div className="pt-4 border-t border-white/10 text-[10px] font-mono font-semibold text-red-300 uppercase tracking-wider">
              {language === 'ar' ? '• تراث زراعي عريق' : '• CULTIVATED HERITAGE'}
            </div>
          </motion.div>

          {/* Right Side: Image of coffee farmers/cultivation */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[400px] md:min-h-[500px] md:order-2"
          >
            <img 
              src="/17.webp" 
              alt="Meticulous cultivation of coffee cherries at high-altitude origin"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Block 3: The Buyer Gap */}
      <section className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl rounded-sm">
          {/* Left Side: Image of global buyers */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[400px] md:min-h-[500px]"
          >
            <img 
              src="/2.webp" 
              alt="Specialty green coffee sample evaluation and cupping session"
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
            />
          </motion.div>

          {/* Right Side: The Buyer Gap Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#442c33] p-10 sm:p-16 lg:p-20 flex flex-col justify-center text-left text-white space-y-6"
          >
            <span className="text-xs font-mono text-red-300 uppercase tracking-[0.25em] font-extrabold">
              {language === 'ar' ? 'انقطاع سلسلة التوريد' : 'SUPPLY CHAIN DISCONNECT'}
            </span>
            <h3 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              {language === 'ar' ? 'فجوة المشترين' : 'The Buyer Gap'}
            </h3>
            
            <p className="font-serif font-light text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              {language === 'ar'
                ? 'على الجانب الآخر يقف المشترون الدوليون - يبحثون عن الموثوقية، واتساق الجودة، والاتصال المباشر بالمنشأ، لكنهم يواجهون غالباً شبكات إمداد غير متسقة، ولوجستيات هشة، وهياكل تجارية محلية معقدة.'
                : 'On the other side are international buyers—seeking reliability, quality consistency, and direct connection to origin, but often facing inconsistent supply networks, fragile logistics, and complex local trade structures.'
              }
            </p>
            <div className="pt-4 border-t border-white/10 text-[10px] font-mono font-semibold text-coffee-300 uppercase tracking-wider">
              {language === 'ar' ? '• العقبات اللوجستية' : '• LOGISTICAL FRICTION'}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Block 4: Our Solution */}
      <section className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden shadow-2xl rounded-sm">
          {/* Left Side: Our Solution Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#442c33] p-10 sm:p-16 lg:p-20 flex flex-col justify-center text-left text-white space-y-6 md:order-1"
          >
            <span className="text-xs font-mono text-red-300 uppercase tracking-[0.25em] font-extrabold">
              {language === 'ar' ? 'نظام الحاويات' : 'THE CONTAINER SYSTEM'}
            </span>
            <h3 className="font-serif font-light text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              {language === 'ar' ? 'حلنا المتكامل' : 'Our Solution'}
            </h3>
            
            <p className="font-serif font-light text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
              {language === 'ar'
                ? 'نحن نجمع بين هذين العالمين من خلال نموذج التصدير القائم على الحاويات. من خلال إعادة تصميم تدفق التجارة، نقوم بتنظيم ومعالجة والتحقق من وشحن قهوة ذات أصل واحد مباشرة، مما يضمن إمكانية التتبع والعدالة والاتساق المطلق.'
                : 'We bring these two worlds together through our container-based export model. By redesigning the flow of trade, we organize, process, verify, and ship single-origin coffees directly, guaranteeing traceability, fairness, and absolute consistency.'
              }
            </p>
            <div className="pt-4 border-t border-white/10 text-[10px] font-mono font-semibold text-leaf-300 uppercase tracking-wider">
              {language === 'ar' ? '• تتبع هيكلي موثق' : '• STRUCTURED TRACEABILITY'}
            </div>
          </motion.div>

          {/* Right Side: Image of green coffee shipment bags */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[400px] md:min-h-[500px] md:order-2"
          >
            <img 
              src="/16.webp" 
              alt="Meticulously loaded green coffee sacks inside the shipping container"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 6. Cultivating the Land */}
      <section className="max-w-[95%] mx-auto px-6 py-20 sm:py-28 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Element: Grayscale vertical photo of coffee sprouts */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-3 hidden md:block"
          >
            <div className="aspect-[3/4] overflow-hidden shadow-md bg-coffee-100 rounded-sm">
              <img 
                src="/19.webp" 
                alt="Coffee Container young coffee leaves"
                className="w-full h-full object-cover filter grayscale contrast-[1.2] brightness-[0.9]"
              />
            </div>
          </motion.div>

          {/* Center Element: Cultivating editorial story content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-6 text-center space-y-6 px-2"
          >
            <h3 className="font-serif font-light text-3xl sm:text-4xl text-coffee-950">
              {t('story.cultivatingTitle')}
            </h3>
            <p className="font-serif font-light text-sm text-coffee-800 leading-relaxed max-w-lg mx-auto">
              {t('story.cultivatingText')}
            </p>
          </motion.div>

          {/* Right Element: Grayscale vertical photo of coffee beans hand sorting */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-3 hidden md:block"
          >
            <div className="aspect-[3/4] overflow-hidden shadow-md bg-coffee-100 rounded-sm">
              <img 
                src="/20.webp" 
                alt="Washing and hand sorting coffee beans"
                className="w-full h-full object-cover filter grayscale contrast-[1.15]"
              />
            </div>
          </motion.div>
          
          {/* Mobile visible fallback for vertical photos */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            <div className="aspect-square overflow-hidden shadow-md rounded-sm">
              <img 
                src="/19.webp" 
                alt="Coffee Container young coffee leaves"
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
            <div className="aspect-square overflow-hidden shadow-md rounded-sm">
              <img 
                src="/20.webp" 
                alt="Washing and hand sorting coffee beans"
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Giant Centered Editorial Quote Block */}
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
          {t('story.quote')}
        </motion.blockquote>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-1.5 pt-4"
        >
          <p className="text-xs sm:text-sm font-sans tracking-[0.25em] font-extrabold text-coffee-950 uppercase">
            {language === 'ar' ? 'فريق كوفي كونتينر' : 'The Coffee Container Team'}
          </p>
          <p className="text-[10px] sm:text-xs font-sans tracking-[0.2em] text-coffee-500 font-semibold uppercase">
            COFFEE CONTAINER
          </p>
        </motion.div>
      </section>

      {/* 8. Double Beautiful Navigation Cards */}
      <section className="max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Explore Sourcing */}
          <motion.button 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8 }}
            onClick={() => handleNavigate('sustainability')}
            className="group relative h-[320px] w-full overflow-hidden text-left focus:outline-none shadow-lg rounded-sm cursor-pointer"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: "url('/10.webp')" }}
            />
            {/* Elegant gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-95" />
            
            {/* Card Content */}
            <div className="absolute inset-x-8 bottom-8 text-white space-y-2 flex flex-col items-start">
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-white/70 uppercase">
                {t('nav.sustainability')}
              </span>
              <h4 className="font-serif font-light text-3xl text-white group-hover:text-leaf-300 transition-colors">
                {t('story.exploreSourcing')}
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
              style={{ backgroundImage: "url('/8.webp')" }}
            />
            {/* Reddish/Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#361515]/90 via-black/35 to-transparent transition-opacity group-hover:opacity-95" />
            
            {/* Card Content */}
            <div className="absolute inset-x-8 bottom-8 text-white space-y-2 flex flex-col items-start">
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] text-white/70 uppercase">
                {t('var.taste')}
              </span>
              <h4 className="font-serif font-light text-3xl text-white group-hover:text-red-300 transition-colors">
                {t('story.ourVarieties')}
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
