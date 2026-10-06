import React from 'react';
import { BRAND_INFO } from '../data/brandData';
import { ContactForm } from '../components/forms/ContactForm';
import {
  ArchitecturalKicker,
  BronzeDivider,
  DecorativeArc
} from '../components/brand/ArchitecturalDecor';
import { YamanEmblem } from '../components/brand/YamanLogo';
import { InstagramIcon, FacebookIcon, ThreadsIcon, WhatsAppIcon } from '../components/brand/SocialIcons';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  initialInterest?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialInterest }) => {
  return (
    <div className="w-full pt-20 sm:pt-24 bg-[#F4EBDD] text-[#351A0D]">
      {/* ==================================================== */}
      {/* 1. CONTACT HERO                                      */}
      {/* ==================================================== */}
      <section className="py-16 sm:py-24 bg-[#FAF6F0] border-b border-[#E8D7C1] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ArchitecturalKicker>DIRECT CONSULTATION & INQUIRIES</ArchitecturalKicker>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#351A0D] leading-[1.08] mb-6">
              Let's Start a Conversation.
            </h1>
            <p className="text-base sm:text-lg text-[#351A0D]/80 font-light leading-relaxed">
              Tell us what you're looking for and how we can help. Every brief is received directly by senior advisory partners with absolute discretion.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 2. SPLIT LAYOUT: DETAILS + CONTACT FORM             */}
      {/* ==================================================== */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Brand Statement & Contact Info */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <YamanEmblem size={38} theme="dark" />
                  <div>
                    <h3 className="font-serif text-xl tracking-[0.16em] uppercase text-[#351A0D]">
                      Yaman Estates
                    </h3>
                    <span className="text-[9px] tracking-[0.24em] uppercase font-mono text-[#7A3F15]">
                      Private Property Advisory
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#351A0D]/80 font-light leading-relaxed mb-6">
                  Whether acquiring off-market residential property, evaluating acreage for legacy estates, or commissioning bespoke construction oversight, we structure our advisory around your timeline.
                </p>

                <div className="flex items-center gap-2 text-xs text-[#7A3F15] font-light">
                  <ShieldCheck size={16} className="text-[#9A571F]" />
                  <span>Strict confidentiality and NDA protocols upheld.</span>
                </div>
              </div>

              <BronzeDivider />

              {/* Direct Details */}
              <div className="space-y-6 bg-[#FAF6F0] p-6 sm:p-8 rounded-xs border border-[#E8D7C1]">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#7A3F15] font-medium mb-4">
                  Direct Communications & Advisory
                </h4>

                <div className="space-y-5 text-sm text-[#351A0D]/85">
                  <div className="flex items-start gap-3.5">
                    <Mail size={16} className="text-[#9A571F] shrink-0 mt-1" />
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#7A3F15]/80 font-mono">
                        Electronic Mail
                      </span>
                      <a
                        href={`mailto:${BRAND_INFO.contact.email}`}
                        className="hover:text-[#9A571F] font-mono text-xs underline decoration-[#9A571F]/40 underline-offset-4"
                      >
                        {BRAND_INFO.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone size={16} className="text-[#9A571F] shrink-0 mt-1" />
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#7A3F15]/80 font-mono">
                        Direct Phone / Call
                      </span>
                      <a
                        href={`tel:${BRAND_INFO.contact.phone}`}
                        className="hover:text-[#9A571F] font-mono text-xs font-semibold"
                      >
                        {BRAND_INFO.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Direct WhatsApp Callout in Contact Box */}
                  <div className="p-3.5 bg-gradient-to-r from-[#128C7E]/10 via-[#25D366]/15 to-[#1EBE5D]/10 border border-[#25D366]/40 rounded-xs flex items-center justify-between shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <WhatsAppIcon size={17} />
                      </div>
                      <div>
                        <span className="block text-[9px] uppercase tracking-wider text-[#128C7E] font-mono font-bold">
                          Instant Response · Raipur
                        </span>
                        <span className="text-xs text-[#241108] font-semibold">
                          Chat directly on WhatsApp
                        </span>
                      </div>
                    </div>
                    <a
                      href={BRAND_INFO.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[11px] uppercase tracking-wider font-semibold rounded-xs transition-colors shadow-xs inline-flex items-center gap-1.5"
                    >
                      <span>Open Chat</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MapPin size={16} className="text-[#9A571F] shrink-0 mt-1" />
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#7A3F15]/80 font-mono">
                        Main City & Statewide Territory
                      </span>
                      <span className="text-xs text-[#351A0D] font-medium block">
                        {BRAND_INFO.contact.primaryCity} (Main Operating City)
                      </span>
                      <span className="text-xs text-[#351A0D]/75 block">
                        {BRAND_INFO.contact.officeAddress}
                      </span>
                      <span className="text-[11px] text-[#7A3F15] font-light block mt-0.5">
                        Extensive coverage across all of {BRAND_INFO.contact.region} for custom mandates
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Clock size={16} className="text-[#9A571F] shrink-0 mt-1" />
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-[#7A3F15]/80 font-mono">
                        Advisory Availability
                      </span>
                      <span className="text-xs text-[#351A0D]/80">
                        Monday – Saturday, 09:30 – 19:30 IST (Client visits by appointment)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels: Instagram, Facebook, Threads */}
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7A3F15] block mb-3 font-medium">
                  Official Social Media Channels
                </span>
                <div className="flex flex-wrap items-center gap-3 text-xs tracking-wider uppercase text-[#351A0D]">
                  <a
                    href={BRAND_INFO.contact.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-3 py-1.5 bg-[#FAF6F0] hover:bg-[#351A0D] hover:text-[#F4EBDD] border border-[#E8D7C1] hover:border-[#351A0D] rounded-xs inline-flex items-center gap-2 transition-all duration-200 shadow-xs"
                    title="Follow Yaman Estates on Instagram"
                  >
                    <InstagramIcon size={14} className="text-[#9A571F] group-hover:text-white transition-colors" />
                    <span className="font-medium lowercase first-letter:uppercase text-[11px]">Instagram</span>
                    <ArrowUpRight size={12} className="text-[#9A571F] group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href={BRAND_INFO.contact.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-3 py-1.5 bg-[#FAF6F0] hover:bg-[#351A0D] hover:text-[#F4EBDD] border border-[#E8D7C1] hover:border-[#351A0D] rounded-xs inline-flex items-center gap-2 transition-all duration-200 shadow-xs"
                    title="Follow Yaman Estates on Facebook"
                  >
                    <FacebookIcon size={14} className="text-[#9A571F] group-hover:text-white transition-colors" />
                    <span className="font-medium lowercase first-letter:uppercase text-[11px]">Facebook</span>
                    <ArrowUpRight size={12} className="text-[#9A571F] group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href={BRAND_INFO.contact.social.threads}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-3 py-1.5 bg-[#FAF6F0] hover:bg-[#351A0D] hover:text-[#F4EBDD] border border-[#E8D7C1] hover:border-[#351A0D] rounded-xs inline-flex items-center gap-2 transition-all duration-200 shadow-xs"
                    title="Follow Yaman Estates on Threads"
                  >
                    <ThreadsIcon size={14} className="text-[#9A571F] group-hover:text-white transition-colors" />
                    <span className="font-medium lowercase first-letter:uppercase text-[11px]">Threads</span>
                    <ArrowUpRight size={12} className="text-[#9A571F] group-hover:text-white transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Refined Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm initialInterest={initialInterest} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
