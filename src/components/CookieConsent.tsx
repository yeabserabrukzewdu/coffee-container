import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Info, X, ChevronRight, Check } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem('coffee_container_cookie_consent');
    if (!consent) {
      // Show the banner with a minor delay for a luxury feel
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentSettings = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('coffee_container_cookie_consent', JSON.stringify(consentSettings));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consentSettings = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('coffee_container_cookie_consent', JSON.stringify(consentSettings));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const consentSettings = {
      ...preferences,
      necessary: true, // Always true
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('coffee_container_cookie_consent', JSON.stringify(consentSettings));
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[10000] bg-[#0d0907] border border-coffee-900 shadow-2xl p-6 text-left rounded-sm"
        >
          {/* Decorative mini corner accent */}
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#c22d2d]/30" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#c22d2d]/30" />

          {!showPreferences ? (
            <div className="space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 bg-[#c22d2d]/10 border border-[#c22d2d]/20 text-[#c22d2d] rounded-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-sans font-extrabold text-[10px] uppercase tracking-[0.2em] text-white">
                  Privacy & Cookie Consent
                </h4>
              </div>

              <p className="text-coffee-300 text-xs leading-relaxed font-light">
                We use cookies to optimize your global trading experience, analyze portal traffic, and assist with our custom B2B direct-export workflows. By clicking "Accept All", you agree to the storing of cookies on your device.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 pt-2">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleRejectAll}
                    className="py-2.5 px-3 border border-white/10 hover:border-white/20 hover:bg-white/5 text-white text-[10px] font-sans font-bold tracking-widest uppercase transition-colors focus:outline-none cursor-pointer text-center"
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="py-2.5 px-3 bg-[#c22d2d] hover:bg-[#a12323] text-white text-[10px] font-sans font-extrabold tracking-widest uppercase transition-colors focus:outline-none cursor-pointer text-center"
                  >
                    Accept All
                  </button>
                </div>

                <button
                  onClick={() => setShowPreferences(true)}
                  className="inline-flex items-center justify-center gap-1.5 text-[9px] font-mono text-coffee-400 hover:text-white uppercase tracking-widest transition-colors py-1.5 cursor-pointer"
                >
                  Configure Preferences <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-coffee-400" />
                  <h4 className="font-sans font-extrabold text-[10px] uppercase tracking-[0.2em] text-white">
                    Manage Preferences
                  </h4>
                </div>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-coffee-400 hover:text-white transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Preferences List */}
              <div className="space-y-3.5 pt-1">
                {/* 1. Essential */}
                <div className="flex items-start justify-between gap-4 p-2.5 bg-white/2 border border-white/5 rounded-xs">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-white block uppercase tracking-wider">
                      Essential Cookies
                    </span>
                    <p className="text-[10px] text-coffee-400 font-light leading-relaxed">
                      Required for B2B portal login sessions and secure quote request flow. Cannot be disabled.
                    </p>
                  </div>
                  <div className="w-4 h-4 bg-white/10 border border-white/10 flex items-center justify-center text-[#c22d2d] shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                </div>

                {/* 2. Performance / Analytics */}
                <div 
                  onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                  className="flex items-start justify-between gap-4 p-2.5 hover:bg-white/2 border border-white/5 rounded-xs transition-colors cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-white block uppercase tracking-wider">
                      Analytics & Logistics
                    </span>
                    <p className="text-[10px] text-coffee-400 font-light leading-relaxed">
                      Helps us analyze export pipeline performance and container routing metrics.
                    </p>
                  </div>
                  <button
                    type="button"
                    className={`w-4 h-4 border flex items-center justify-center shrink-0 mt-0.5 ${
                      preferences.analytics 
                        ? 'bg-[#c22d2d] border-[#c22d2d] text-white' 
                        : 'border-white/20 bg-transparent'
                    }`}
                  >
                    {preferences.analytics && <Check className="w-3 h-3" />}
                  </button>
                </div>

                {/* 3. Marketing */}
                <div 
                  onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                  className="flex items-start justify-between gap-4 p-2.5 hover:bg-white/2 border border-white/5 rounded-xs transition-colors cursor-pointer"
                >
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-white block uppercase tracking-wider">
                      Regional Marketing
                    </span>
                    <p className="text-[10px] text-coffee-400 font-light leading-relaxed">
                      Used to show relevant direct origin events, cupping schedules, and coffee trade shows.
                    </p>
                  </div>
                  <button
                    type="button"
                    className={`w-4 h-4 border flex items-center justify-center shrink-0 mt-0.5 ${
                      preferences.marketing 
                        ? 'bg-[#c22d2d] border-[#c22d2d] text-white' 
                        : 'border-white/20 bg-transparent'
                    }`}
                  >
                    {preferences.marketing && <Check className="w-3 h-3" />}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="w-1/3 py-2 border border-white/10 hover:border-white/20 hover:bg-white/5 text-white text-[9px] font-mono tracking-widest uppercase transition-colors focus:outline-none cursor-pointer text-center"
                >
                  Back
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="w-2/3 py-2 bg-[#c22d2d] hover:bg-[#a12323] text-white text-[9px] font-sans font-extrabold tracking-widest uppercase transition-colors focus:outline-none cursor-pointer text-center"
                >
                  Save Choices
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
