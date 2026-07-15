import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StorySection from './components/StorySection';
import VarietyCatalog from './components/VarietyCatalog';
import SustainabilitySection from './components/SustainabilitySection';
import ExportPortal from './components/ExportPortal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

function AppContent() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedVarietyId, setSelectedVarietyId] = useState<string>('yirgacheffee');
  const { language } = useLanguage();

  const handleSelectVarietyForQuote = (varietyId: string) => {
    setSelectedVarietyId(varietyId);
    setActiveTab('export');
  };

  return (
    <div className="min-h-screen bg-coffee-50/20 flex flex-col selection:bg-leaf-100 selection:text-leaf-900">
      {/* Global Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Corporate Canvas */}
      <main className={`flex-grow w-full ${['home', 'story', 'varieties', 'sustainability', 'contact'].includes(activeTab) ? 'pt-0 pb-16' : 'max-w-[95%] mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-16'}`}>
        {activeTab === 'home' && (
          <Hero
            onExplore={() => setActiveTab('varieties')}
            onRequestQuote={() => setActiveTab('export')}
            setActiveTab={setActiveTab}
          />
        )}

        {activeTab === 'story' && <StorySection setActiveTab={setActiveTab} />}

        {activeTab === 'varieties' && (
          <VarietyCatalog onSelectVarietyForQuote={handleSelectVarietyForQuote} setActiveTab={setActiveTab} />
        )}

        {activeTab === 'sustainability' && <SustainabilitySection setActiveTab={setActiveTab} />}

        {activeTab === 'contact' && <ContactSection setActiveTab={setActiveTab} />}

        {activeTab === 'export' && (
          <ExportPortal
            initialVarietyId={selectedVarietyId}
            onInquirySubmitted={() => {
              // Optionally trigger notifications or events here
            }}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Professional Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
