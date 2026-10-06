import React, { useState, useEffect } from 'react';
import { Page } from '../../types';
import { YamanLogo } from '../brand/YamanLogo';
import { BRAND_INFO } from '../../data/brandData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection to transition header from transparent overlay to ivory background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle ESC key for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // When on home page at top, use dark/light contrast if over hero image
  // However, with warm ivory overlay on hero, a rich espresso logo looks magnificent and clear!
  const isSolid = isScrolled || currentPage !== 'home';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isSolid
          ? 'bg-[#F4EBDD]/95 backdrop-blur-md border-b border-[#E8D7C1] py-3.5 shadow-xs'
          : 'bg-gradient-to-b from-[#241108]/60 via-[#241108]/30 to-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group text-left focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9A571F] rounded-xs p-1 -m-1 transition-transform"
            aria-label="Yaman Estates - Return to Home"
          >
            <YamanLogo
              variant="horizontal"
              theme={isSolid ? 'dark' : 'light'}
              useBadge={!isSolid}
              showTagline={true}
              className="group-hover:opacity-90"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-xs uppercase tracking-[0.2em] font-medium py-1 transition-colors duration-200 focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#9A571F] ${
                    isSolid
                      ? isActive
                        ? 'text-[#9A571F] font-semibold'
                        : 'text-[#351A0D]/80 hover:text-[#351A0D]'
                      : isActive
                      ? 'text-[#D8B98A] font-semibold'
                      : 'text-[#F4EBDD]/90 hover:text-[#F4EBDD]'
                  }`}
                  style={{ letterSpacing: '0.2em' }}
                >
                  {item.label}
                  {/* Subtle underline transition on active & hover */}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-300 ${
                      isActive
                        ? isSolid
                          ? 'w-full bg-[#9A571F]'
                          : 'w-full bg-[#D8B98A]'
                        : 'w-0 bg-[#9A571F]/40 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Far Right: Primary CTA "GET IN TOUCH" */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className={`group inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.2em] font-medium rounded-xs border transition-all duration-300 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9A571F] ${
                isSolid
                  ? 'bg-[#351A0D] text-[#F4EBDD] border-[#351A0D] hover:bg-[#7A3F15] hover:border-[#7A3F15] hover:shadow-xs'
                  : 'bg-[#F4EBDD] text-[#351A0D] border-[#F4EBDD] hover:bg-[#D8B98A] hover:border-[#D8B98A] hover:text-[#241108]'
              }`}
              style={{ letterSpacing: '0.2em' }}
            >
              <span>Get in Touch</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex sm:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xs focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9A571F] transition-colors ${
                isSolid
                  ? 'text-[#351A0D] hover:bg-[#E8D7C1]/50'
                  : 'text-[#F4EBDD] hover:bg-black/20'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#241108]/70 backdrop-blur-sm transition-opacity duration-300 sm:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-[84%] max-w-sm h-full bg-[#F4EBDD] shadow-2xl p-6 sm:p-8 flex flex-col justify-between transition-transform duration-300 ease-out border-l border-[#E8D7C1] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-[#E8D7C1]">
              <YamanLogo variant="compact" theme="dark" showTagline={false} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 text-[#351A0D] hover:text-[#9A571F] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#9A571F]"
                aria-label="Close navigation"
              >
                <X size={22} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="mt-8 flex flex-col gap-5">
              {navItems.map((item, idx) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="flex items-center justify-between text-left py-2 group focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#9A571F]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] tracking-[0.2em] text-[#9A571F] font-mono">
                        0{idx + 1}
                      </span>
                      <span
                        className={`text-lg uppercase tracking-[0.18em] transition-colors ${
                          isActive
                            ? 'font-serif font-semibold text-[#9A571F]'
                            : 'font-serif text-[#351A0D] group-hover:text-[#9A571F]'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9A571F]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Drawer Footer & CTA */}
          <div className="pt-6 border-t border-[#E8D7C1] space-y-4">
            <p className="text-[11px] tracking-[0.2em] text-[#7A3F15] uppercase font-mono">
              Direct Advisory · Raipur, CG
            </p>

            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#351A0D] text-[#F4EBDD] text-xs uppercase tracking-[0.2em] font-medium rounded-xs hover:bg-[#7A3F15] transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={15} />
            </button>

            {/* Quick Contact & Socials */}
            <div className="pt-2 flex items-center justify-around text-xs text-[#7A3F15]">
              <a href={BRAND_INFO.contact.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#351A0D] transition-colors">
                Instagram
              </a>
              <span>·</span>
              <a href={BRAND_INFO.contact.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-[#351A0D] transition-colors">
                Facebook
              </a>
              <span>·</span>
              <a href={BRAND_INFO.contact.social.threads} target="_blank" rel="noopener noreferrer" className="hover:text-[#351A0D] transition-colors">
                Threads
              </a>
            </div>

            <p className="text-[10px] text-[#351A0D]/60 text-center pt-2">
              Raipur · Chhattisgarh · India
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
