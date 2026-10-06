import React, { useState, useEffect } from 'react';
import { Page, Property } from './types';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { PropertyPreviewModal } from './components/properties/PropertyPreviewModal';
import { PropertyCountModal } from './components/popups/PropertyCountModal';
import { BRAND_INFO } from './data/brandData';
import { WhatsAppIcon } from './components/brand/SocialIcons';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [contactInitialInterest, setContactInitialInterest] = useState<string>('');
  const [isCountModalOpen, setIsCountModalOpen] = useState<boolean>(false);

  // Dynamically sync document title and meta description per page
  useEffect(() => {
    switch (currentPage) {
      case 'home':
        document.title = 'Yaman Estates | Luxury Real Estate & Land in Raipur, Chhattisgarh';
        break;
      case 'about':
        document.title = 'About Yaman Estates | Our Story in Raipur & Chhattisgarh';
        break;
      case 'services':
        document.title = 'Services | Real Estate, Land & Construction in Raipur & Chhattisgarh';
        break;
      case 'contact':
        document.title = 'Contact Yaman Estates | Raipur, Chhattisgarh | +91 7400990070';
        break;
    }
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceInquiry = (serviceTitle: string) => {
    let interest = 'General Enquiry';
    if (serviceTitle.toLowerCase().includes('real estate')) interest = 'Buying Property';
    else if (serviceTitle.toLowerCase().includes('land')) interest = 'Land';
    else if (serviceTitle.toLowerCase().includes('investment')) interest = 'Investment';
    else if (serviceTitle.toLowerCase().includes('interior')) interest = 'Interiors';
    else if (serviceTitle.toLowerCase().includes('construction')) interest = 'Construction';

    setContactInitialInterest(interest);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePropertyInquiry = (propertyTitle: string) => {
    setContactInitialInterest('Buying Property');
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4EBDD] text-[#351A0D] font-sans selection:bg-[#9A571F] selection:text-[#F4EBDD] relative">
      {/* Global Luxury Navigation Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Canvas */}
      <main className="flex-1 w-full" id="main-content">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProperty={(prop) => setSelectedProperty(prop)}
            onOpenCountModal={() => setIsCountModalOpen(true)}
          />
        )}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onInitiateInquiry={handleServiceInquiry}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage initialInterest={contactInitialInterest} />
        )}
      </main>

      {/* Global Luxury Footer */}
      <Footer currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Property Spec & Architectural Preview Modal */}
      <PropertyPreviewModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onInquire={handlePropertyInquiry}
      />

      {/* Attractive Regional 2,000+ Properties Announcement Pop-Up */}
      <PropertyCountModal
        isOpen={isCountModalOpen}
        onClose={() => setIsCountModalOpen(false)}
        onExploreProperties={() => handleNavigate('services')}
      />

      {/* Floating Global WhatsApp Direct Button + Portfolio Trigger */}
      <aside aria-label="Direct Consultation Actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <button
          onClick={() => setIsCountModalOpen(true)}
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FAF6F0] hover:bg-[#F4EBDD] text-[#8A431F] text-[11px] font-mono tracking-wider uppercase rounded-full border border-[#D8B98A] shadow-lg transition-transform hover:scale-105 cursor-pointer"
        >
          <Sparkles size={12} className="text-[#8A431F]" />
          <span>2,000+ Properties in CG</span>
        </button>

        {/* Beautified WhatsApp Nav Button with Constant Green Radar & Floating Animation */}
        <div className="relative group animate-whatsapp-float">
          {/* Constant ambient sonar wave 1 */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-60 animate-whatsapp-sonar pointer-events-none" />
          {/* Constant ambient sonar wave 2 (offset) */}
          <span
            className="absolute -inset-2.5 rounded-full bg-[#25D366] opacity-30 animate-whatsapp-sonar pointer-events-none"
            style={{ animationDelay: '1.2s' }}
          />

          <a
            href={BRAND_INFO.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center gap-2.5 px-4 sm:px-5 py-3.5 bg-gradient-to-r from-[#128C7E] via-[#25D366] to-[#1EBE5D] text-white rounded-full shadow-[0_12px_32px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/40 hover:border-white animate-whatsapp-beacon focus:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366] cursor-pointer overflow-hidden"
            aria-label="Direct WhatsApp Consultation with Yaman Estates"
            title="Chat directly on WhatsApp with Yaman Estates (+91 7400990070)"
          >
            {/* Specular glass reflection on top half */}
            <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent rounded-t-full pointer-events-none" />

            {/* Live Online Pulse Dot */}
            <span className="relative flex h-2.5 w-2.5 shrink-0 z-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white shadow-xs" />
            </span>

            {/* Official WhatsApp Logo Icon */}
            <span className="relative z-10 flex items-center justify-center p-1 bg-white/15 rounded-full">
              <WhatsAppIcon size={20} className="text-white fill-white shrink-0 drop-shadow-sm" />
            </span>
            
            <div className="relative z-10 flex flex-col text-left">
              <span className="text-[12px] font-bold tracking-wider uppercase font-mono leading-none drop-shadow-xs">
                WhatsApp
              </span>
              <span className="text-[9px] text-white/95 font-mono tracking-tight leading-none mt-1 hidden sm:inline drop-shadow-xs">
                +91 7400990070
              </span>
            </div>
          </a>
        </div>
      </aside>
    </div>
  );
}
