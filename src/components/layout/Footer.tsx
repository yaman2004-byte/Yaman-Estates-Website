import React, { useState } from 'react';
import { Page } from '../../types';
import { YamanLogo } from '../brand/YamanLogo';
import { BRAND_INFO } from '../../data/brandData';
import { InstagramIcon, FacebookIcon, ThreadsIcon, WhatsAppIcon } from '../brand/SocialIcons';
import { ArrowUpRight, Mail, Phone, MapPin, X } from 'lucide-react';

interface FooterProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#241108] text-[#F4EBDD] pt-20 pb-12 border-t border-[#351A0D] relative overflow-hidden">
      {/* Subtle architectural background line work */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="arch-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#D8B98A" strokeWidth="0.8" />
              <circle cx="40" cy="40" r="2" fill="#D8B98A" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#arch-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#351A0D]">
          {/* Brand & Pillars Summary */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <YamanLogo variant="horizontal" theme="light" useBadge={true} showTagline={false} className="mb-4" />
              <p
                className="text-xs tracking-[0.24em] uppercase text-[#D8B98A] font-light mt-1 mb-6"
                style={{ letterSpacing: '0.24em' }}
              >
                Real Estate • Land • Investment • Interiors • Construction
              </p>
              <p className="text-sm text-[#E8D7C1]/75 max-w-md font-light leading-relaxed">
                An architectural and property consultancy uniting five disciplines. Guided by long-term perspective, spatial discernment, and enduring legacy.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#351A0D]/80">
              <span className="text-[10px] tracking-[0.26em] uppercase text-[#9A571F] font-mono block mb-2">
                Brand Inquiries
              </span>
              <p className="text-xs text-[#E8D7C1]/80">
                Discreet consultations for private clients, landowners, and institutions.
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-2">
            <h4
              className="text-xs uppercase tracking-[0.22em] text-[#D8B98A] font-medium mb-6"
              style={{ letterSpacing: '0.22em' }}
            >
              Navigation
            </h4>
            <ul className="space-y-3.5 text-xs tracking-[0.16em] uppercase font-light text-[#E8D7C1]/80">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="hover:text-[#F4EBDD] transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#9A571F]"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-[#F4EBDD] transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#9A571F]"
                >
                  About Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-[#F4EBDD] transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#9A571F]"
                >
                  Services & Ecosystem
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-[#F4EBDD] transition-colors focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#9A571F]"
                >
                  Contact & Advisory
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3">
            <h4
              className="text-xs uppercase tracking-[0.22em] text-[#D8B98A] font-medium mb-6"
              style={{ letterSpacing: '0.22em' }}
            >
              Direct Contact
            </h4>
            <div className="space-y-4 text-xs font-light text-[#E8D7C1]/80">
              <div className="flex items-start gap-3">
                <Mail size={15} className="text-[#9A571F] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#D8B98A]/70">
                    Email
                  </span>
                  <a
                    href={`mailto:${BRAND_INFO.contact.email}`}
                    className="hover:text-[#F4EBDD] underline decoration-[#9A571F]/50 underline-offset-4"
                  >
                    {BRAND_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={15} className="text-[#9A571F] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#D8B98A]/70">
                    Direct Phone / WhatsApp
                  </span>
                  <a
                    href={`tel:${BRAND_INFO.contact.phone}`}
                    className="hover:text-[#F4EBDD]"
                  >
                    {BRAND_INFO.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#9A571F] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] uppercase tracking-wider text-[#D8B98A]/70">
                    Main Headquarters & Region
                  </span>
                  <span className="text-[#F4EBDD]/90 block font-medium">
                    {BRAND_INFO.contact.primaryCity} (Primary Operating City)
                  </span>
                  <span className="text-[11px] text-[#E8D7C1]/70 block mt-0.5">
                    {BRAND_INFO.contact.region}, {BRAND_INFO.contact.country}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Presence with Modern Vector Logos */}
          <div className="md:col-span-3">
            <h4
              className="text-xs uppercase tracking-[0.22em] text-[#D8B98A] font-medium mb-6 flex items-center gap-2 font-mono"
              style={{ letterSpacing: '0.22em' }}
            >
              <span className="w-2 h-px bg-[#D8B98A]" />
              Official Socials
            </h4>
            <div className="space-y-3">
              {/* Instagram */}
              <a
                href={BRAND_INFO.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 bg-[#1C0D06]/85 hover:bg-[#351A0D] border border-[#D8B98A]/25 hover:border-[#D8B98A] rounded-xs text-xs text-[#E8D7C1] hover:text-[#F4EBDD] transition-all duration-300 hover:shadow-lg"
                title="Follow Yaman Estates on Instagram (@yamanestates)"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#D8B98A]/10 group-hover:bg-[#D8B98A]/20 flex items-center justify-center text-[#D8B98A] group-hover:text-white transition-colors">
                    <InstagramIcon size={15} />
                  </span>
                  <div>
                    <span className="font-medium tracking-wide block leading-tight">Instagram</span>
                    <span className="text-[10px] font-mono text-[#D8B98A]/70 group-hover:text-[#D8B98A] block">@yamanestates</span>
                  </div>
                </div>
                <ArrowUpRight size={13} className="text-[#D8B98A]/70 group-hover:text-[#D8B98A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Facebook */}
              <a
                href={BRAND_INFO.contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 bg-[#1C0D06]/85 hover:bg-[#351A0D] border border-[#D8B98A]/25 hover:border-[#D8B98A] rounded-xs text-xs text-[#E8D7C1] hover:text-[#F4EBDD] transition-all duration-300 hover:shadow-lg"
                title="Follow Yaman Estates on Facebook"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#D8B98A]/10 group-hover:bg-[#D8B98A]/20 flex items-center justify-center text-[#D8B98A] group-hover:text-white transition-colors">
                    <FacebookIcon size={15} />
                  </span>
                  <div>
                    <span className="font-medium tracking-wide block leading-tight">Facebook</span>
                    <span className="text-[10px] font-mono text-[#D8B98A]/70 group-hover:text-[#D8B98A] block">/yamanestates</span>
                  </div>
                </div>
                <ArrowUpRight size={13} className="text-[#D8B98A]/70 group-hover:text-[#D8B98A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Threads */}
              <a
                href={BRAND_INFO.contact.social.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 bg-[#1C0D06]/85 hover:bg-[#351A0D] border border-[#D8B98A]/25 hover:border-[#D8B98A] rounded-xs text-xs text-[#E8D7C1] hover:text-[#F4EBDD] transition-all duration-300 hover:shadow-lg"
                title="Follow Yaman Estates on Threads (@yamanestates)"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#D8B98A]/10 group-hover:bg-[#D8B98A]/20 flex items-center justify-center text-[#D8B98A] group-hover:text-white transition-colors">
                    <ThreadsIcon size={15} />
                  </span>
                  <div>
                    <span className="font-medium tracking-wide block leading-tight">Threads</span>
                    <span className="text-[10px] font-mono text-[#D8B98A]/70 group-hover:text-[#D8B98A] block">@yamanestates</span>
                  </div>
                </div>
                <ArrowUpRight size={13} className="text-[#D8B98A]/70 group-hover:text-[#D8B98A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E8D7C1]/60 font-light">
          <p>© 2026 Yaman Estates. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-[#F4EBDD] transition-colors underline decoration-[#9A571F]/40 underline-offset-4 focus:outline-hidden"
            >
              Privacy Policy
            </button>
            <span className="text-[#351A0D]" aria-hidden="true">
              ·
            </span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-[#F4EBDD] transition-colors underline decoration-[#9A571F]/40 underline-offset-4 focus:outline-hidden"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      {/* Legal Modal Dialog */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#F4EBDD] text-[#351A0D] max-w-xl w-full p-8 sm:p-10 rounded-xs border border-[#9A571F] shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setLegalModal(null)}
              className="absolute top-6 right-6 p-2 text-[#351A0D]/70 hover:text-[#351A0D] focus:outline-hidden"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <span className="text-[10px] tracking-[0.24em] uppercase text-[#7A3F15] block mb-2 font-mono">
              Yaman Estates Legal
            </span>
            <h3 className="font-serif text-2xl text-[#351A0D] mb-4">
              {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>

            {legalModal === 'privacy' ? (
              <div className="space-y-4 text-xs text-[#351A0D]/85 leading-relaxed font-light">
                <p>
                  At Yaman Estates, client discretion and confidentiality are foundational. We collect information exclusively to fulfill property inquiries, bespoke advisory requests, and private consultations.
                </p>
                <p>
                  We do not sell, rent, or trade your personal information. All contact requests submitted through this website are retained solely for direct communication regarding real estate, land, investment, interior styling, or construction advisory.
                </p>
                <p>
                  For data inquiries or removal requests, please direct communications to {BRAND_INFO.contact.email}.
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-xs text-[#351A0D]/85 leading-relaxed font-light">
                <p>
                  Information published on this website regarding real estate, land parcels, investment concepts, interiors, and construction is provided for informational and editorial reference.
                </p>
                <p>
                  Nothing on this website constitutes a formal offer to sell securities or guarantees specific financial returns. Real estate investments carry natural market fluctuations; prospective clients must execute independent title, legal, and financial verification prior to entering binding commitments.
                </p>
                <p>
                  Architectural renderings, imagery, and specifications represent illustrative concepts and remain intellectual property of Yaman Estates.
                </p>
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-[#E8D7C1] flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-6 py-2 text-xs uppercase tracking-[0.2em] bg-[#351A0D] text-[#F4EBDD] rounded-xs hover:bg-[#7A3F15] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
