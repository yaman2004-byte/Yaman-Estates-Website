import React from 'react';
import { Page, Property } from '../types';
import { BRAND_INFO, SERVICE_PILLARS } from '../data/brandData';
import { SAMPLE_PROPERTIES } from '../data/properties';
import { ASSETS } from '../data/assets';
import {
  BronzeDivider,
  ArchitecturalKicker,
  DecorativeArc,
  PillarIcon
} from '../components/brand/ArchitecturalDecor';
import { YamanEmblem, YamanLogo } from '../components/brand/YamanLogo';
import { InstagramIcon, FacebookIcon, ThreadsIcon } from '../components/brand/SocialIcons';
import { ArrowUpRight, ArrowRight, Eye, ShieldCheck, Compass, Sparkles, MessageCircle, MapPin } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onSelectProperty?: (prop: Property) => void;
  onOpenCountModal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProperty, onOpenCountModal }) => {
  return (
    <div className="w-full">
      {/* ==================================================== */}
      {/* 1. HERO SECTION                                      */}
      {/* ==================================================== */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#241108] text-[#F4EBDD] pt-24 pb-16">
        {/* Full-width premium architectural background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={ASSETS.heroVilla}
            alt="Yaman Estates luxury architectural villa in Raipur"
            className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000 ease-out"
          />
          {/* Subtle cinematic cream/bronze/espresso overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#241108] via-[#241108]/65 to-[#241108]/40" />
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#241108]/80" />
        </div>

        {/* Architectural background subtle line decoration */}
        <div className="absolute top-1/4 right-8 pointer-events-none hidden lg:block opacity-40">
          <DecorativeArc size={260} light={true} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 sm:pt-12">
          {/* Official Yaman Estates Architectural Brand Seal */}
          <div className="flex justify-center mb-6">
            <div className="p-3 sm:p-3.5 bg-[#F4EBDD] rounded-xs border border-[#D8B98A] shadow-2xl hover:scale-105 transition-transform duration-500 inline-flex items-center justify-center">
              <YamanEmblem size={52} theme="dark" />
            </div>
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-4 sm:mb-6">
            <span className="w-6 sm:w-10 h-px bg-[#D8B98A]" />
            <span
              className="text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase text-[#D8B98A] font-light"
              style={{ letterSpacing: '0.3em' }}
            >
              {BRAND_INFO.hero.eyebrow}
            </span>
            <span className="w-6 sm:w-10 h-px bg-[#D8B98A]" />
          </div>

          {/* Large Hero Statement */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F4EBDD] tracking-tight leading-[1.08] max-w-4xl mx-auto mb-6">
            Where Exceptional Spaces <br className="hidden sm:inline" />
            <span className="italic font-light text-[#D8B98A]">Become Lasting Legacies.</span>
          </h1>

          {/* Supporting Statement */}
          <p className="text-sm sm:text-base md:text-lg text-[#E8D7C1]/90 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            {BRAND_INFO.hero.subline}
          </p>

          {/* Attractive Pop-Up Trigger Announcement Badge */}
          <div className="mb-8 flex justify-center">
            <button
              onClick={onOpenCountModal}
              className="group inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 bg-[#241108]/85 hover:bg-[#351A0D] border border-[#D8B98A] rounded-xs text-xs text-[#F4EBDD] shadow-xl backdrop-blur-md transition-all hover:scale-102"
            >
              <Sparkles size={14} className="text-[#D8B98A] shrink-0" />
              <span className="font-light tracking-wide">
                We have more than <strong className="font-semibold text-[#D8B98A]">2,000+ properties</strong> all over Chhattisgarh
              </span>
              <span className="hidden sm:inline text-[#D8B98A]/60">·</span>
              <span className="hidden sm:inline text-[11px] font-mono text-[#D8B98A] uppercase tracking-wider underline underline-offset-4">
                View Portfolio
              </span>
            </button>
          </div>

          {/* Dual CTAs (Minimalist & Balanced) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            {/* Primary Get in Touch CTA */}
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#D8B98A] text-[#241108] text-xs uppercase tracking-[0.22em] font-medium rounded-xs hover:bg-[#F4EBDD] transition-all duration-300 shadow-lg group cursor-pointer"
              style={{ letterSpacing: '0.22em' }}
            >
              <span>{BRAND_INFO.hero.primaryCta}</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>

            {/* Explore Services Secondary Button */}
            <button
              onClick={() => onNavigate('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-transparent text-[#F4EBDD] border border-[#D8B98A]/70 text-xs uppercase tracking-[0.22em] font-medium rounded-xs hover:bg-[#F4EBDD]/10 hover:border-[#F4EBDD] transition-all duration-300 cursor-pointer"
              style={{ letterSpacing: '0.22em' }}
            >
              <span>{BRAND_INFO.hero.secondaryCta}</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Ultra-Modern Luxury Social Media Hub with Authentic Logos */}
          <div className="mt-12 pt-7 border-t border-[#D8B98A]/20 flex flex-col items-center justify-center gap-4 text-xs">
            {/* Contemporary Architectural Social Capsule Bar */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 p-1.5 sm:p-2 bg-[#241108]/75 backdrop-blur-md rounded-2xl sm:rounded-full border border-[#D8B98A]/35 shadow-2xl">
              <span className="px-3 py-1 text-[10px] uppercase tracking-[0.24em] font-mono text-[#D8B98A] flex items-center gap-2 font-medium select-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D8B98A] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D8B98A]" />
                </span>
                CONNECT ON SOCIAL
              </span>

              <div className="flex flex-wrap items-center gap-2">
                {/* Instagram */}
                <a
                  href={BRAND_INFO.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#351A0D]/90 hover:bg-[#4A2613] border border-[#D8B98A]/40 hover:border-[#D8B98A] rounded-full text-xs text-[#F4EBDD] transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
                  title="Follow Yaman Estates on Instagram (@yamanestates)"
                >
                  <span className="w-5 h-5 rounded-full bg-[#D8B98A]/15 group-hover:bg-[#D8B98A]/25 flex items-center justify-center text-[#D8B98A] group-hover:text-white transition-colors">
                    <InstagramIcon size={13} />
                  </span>
                  <span className="text-[11px] font-medium tracking-wide">Instagram</span>
                  <span className="text-[10px] font-mono text-[#D8B98A]/80 hidden md:inline">@yamanestates</span>
                  <ArrowUpRight size={11} className="text-[#D8B98A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Facebook */}
                <a
                  href={BRAND_INFO.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#351A0D]/90 hover:bg-[#4A2613] border border-[#D8B98A]/40 hover:border-[#D8B98A] rounded-full text-xs text-[#F4EBDD] transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
                  title="Follow Yaman Estates on Facebook"
                >
                  <span className="w-5 h-5 rounded-full bg-[#D8B98A]/15 group-hover:bg-[#D8B98A]/25 flex items-center justify-center text-[#D8B98A] group-hover:text-white transition-colors">
                    <FacebookIcon size={13} />
                  </span>
                  <span className="text-[11px] font-medium tracking-wide">Facebook</span>
                  <span className="text-[10px] font-mono text-[#D8B98A]/80 hidden md:inline">/yamanestates</span>
                  <ArrowUpRight size={11} className="text-[#D8B98A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Threads */}
                <a
                  href={BRAND_INFO.contact.social.threads}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#351A0D]/90 hover:bg-[#4A2613] border border-[#D8B98A]/40 hover:border-[#D8B98A] rounded-full text-xs text-[#F4EBDD] transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer"
                  title="Follow Yaman Estates on Threads (@yamanestates)"
                >
                  <span className="w-5 h-5 rounded-full bg-[#D8B98A]/15 group-hover:bg-[#D8B98A]/25 flex items-center justify-center text-[#D8B98A] group-hover:text-white transition-colors">
                    <ThreadsIcon size={13} />
                  </span>
                  <span className="text-[11px] font-medium tracking-wide">Threads</span>
                  <span className="text-[10px] font-mono text-[#D8B98A]/80 hidden md:inline">@yamanestates</span>
                  <ArrowUpRight size={11} className="text-[#D8B98A] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>

            {/* Direct Contact Reference */}
            <div className="flex items-center gap-3 text-[11px] font-mono text-[#E8D7C1]/75">
              <span className="flex items-center gap-1.5">
                <MapPin size={12} className="text-[#D8B98A]" />
                Raipur (Headquarters), Chhattisgarh
              </span>
              <span className="text-[#D8B98A]/40">·</span>
              <a
                href={`tel:${BRAND_INFO.contact.phone}`}
                className="hover:text-[#F4EBDD] transition-colors underline decoration-[#D8B98A]/40 underline-offset-4"
              >
                +91 7400990070
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-[#D8B98A]">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-[#D8B98A] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ==================================================== */}
      {/* 2. BRAND INTRODUCTION                                */}
      {/* ==================================================== */}
      <section className="py-24 sm:py-32 bg-[#F4EBDD] text-[#351A0D] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Brand Statement & Approach */}
            <div className="lg:col-span-7">
              <ArchitecturalKicker>{BRAND_INFO.introduction.label}</ArchitecturalKicker>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#351A0D] leading-[1.12] mb-6">
                Built Around Property. <br />
                <span className="italic text-[#7A3F15]">Guided by Vision.</span>
              </h2>

              <BronzeDivider />

              <div className="space-y-4 text-sm sm:text-base text-[#351A0D]/80 font-light leading-relaxed max-w-xl">
                {BRAND_INFO.introduction.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8D7C1] flex flex-wrap items-center gap-6">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#7A3F15] hover:text-[#351A0D] transition-colors group"
                >
                  <span>Our Story & Philosophy</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[#E8D7C1]" aria-hidden="true">|</span>
                <span className="text-xs text-[#351A0D]/60 font-light">
                  5 Core Pillars · Bespoke Client Practice
                </span>
              </div>
            </div>

            {/* Right Column: Architectural Image & Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/5 w-full rounded-xs overflow-hidden shadow-xl border border-[#E8D7C1] bg-[#E8D7C1]">
                <img
                  src={ASSETS.interiorSalon}
                  alt="Yaman Estates interior architecture salon"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-radial from-transparent to-[#351A0D]/20" />
              </div>

              {/* Architectural Decorative Corner Arc */}
              <div className="absolute -bottom-8 -left-8 -z-10 hidden sm:block opacity-40">
                <DecorativeArc size={160} />
              </div>

              {/* Editorial Caption */}
              <div className="mt-3 flex items-center justify-between text-[11px] text-[#7A3F15]/80 font-mono">
                <span>Figure 01. Spatial Serenity</span>
                <span>Travertine & Natural Plaster</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 3. THE YAMAN ESTATES ECOSYSTEM                       */}
      {/* ==================================================== */}
      <section className="py-24 sm:py-32 bg-[#FAF6F0] text-[#351A0D] border-y border-[#E8D7C1] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <ArchitecturalKicker>THE YAMAN ESTATES ECOSYSTEM</ArchitecturalKicker>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#351A0D] mb-4">
              Five Pillars. One Unified Standard.
            </h2>
            <p className="text-sm sm:text-base text-[#351A0D]/75 font-light leading-relaxed">
              Represented in our brand crest, each discipline operates with equal rigor to safeguard and enhance your property holdings.
            </p>
            <BronzeDivider centered />
          </div>

          {/* 5 Flagship Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICE_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="bg-[#F4EBDD] p-8 sm:p-10 rounded-xs border border-[#E8D7C1] hover:border-[#9A571F]/50 transition-all duration-300 flex flex-col justify-between group shadow-2xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8D7C1]">
                    <span className="font-mono text-xs tracking-[0.24em] text-[#9A571F]">
                      {pillar.number} — {pillar.id.toUpperCase().replace('-', ' ')}
                    </span>
                    <div className="w-10 h-10 rounded-xs bg-[#E8D7C1]/40 border border-[#E8D7C1] flex items-center justify-center text-[#7A3F15] group-hover:text-[#9A571F] group-hover:bg-[#F4EBDD] transition-colors">
                      <PillarIcon type={pillar.id} size={22} />
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#351A0D] mb-3 group-hover:text-[#7A3F15] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#351A0D]/80 font-light leading-relaxed mb-6">
                    {pillar.shortDescription}
                  </p>

                  <ul className="space-y-2 mb-8 text-xs text-[#351A0D]/70 font-light">
                    {pillar.features.slice(0, 3).map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#9A571F] mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E8D7C1]">
                  <button
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#7A3F15] group-hover:text-[#351A0D] transition-colors"
                  >
                    <span>Detailed Scope</span>
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}

            {/* Sixth Card: Integrated Vision Summary */}
            <div className="bg-[#351A0D] text-[#F4EBDD] p-8 sm:p-10 rounded-xs border border-[#351A0D] flex flex-col justify-between shadow-md">
              <div>
                <span className="text-[10px] tracking-[0.26em] uppercase font-mono text-[#D8B98A] block mb-4">
                  Unified Oversight
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F4EBDD] mb-4">
                  Comprehensive Client Mandates
                </h3>
                <p className="text-sm text-[#E8D7C1]/80 font-light leading-relaxed mb-6">
                  Clients frequently engage Yaman Estates across multiple intersecting disciplines — such as land acquisition followed by architectural interior coordination and construction management.
                </p>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#D8B98A] text-[#241108] text-xs uppercase tracking-[0.2em] font-medium rounded-xs hover:bg-[#F4EBDD] transition-colors"
              >
                <span>Initiate Consultation</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 4. WHY YAMAN ESTATES (EDITORIAL TRUST SECTION)        */}
      {/* ==================================================== */}
      <section className="py-24 sm:py-32 bg-[#F4EBDD] text-[#351A0D] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Asymmetric Sticky Visual */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <ArchitecturalKicker>{BRAND_INFO.whyYaman.label}</ArchitecturalKicker>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#351A0D] leading-[1.14] mb-6">
                Property Is More Than an Address.
              </h2>
              <p className="text-sm text-[#351A0D]/80 font-light leading-relaxed mb-8">
                {BRAND_INFO.whyYaman.subheading}
              </p>

              <div className="relative aspect-4/3 w-full rounded-xs overflow-hidden border border-[#E8D7C1] shadow-lg">
                <img
                  src={ASSETS.craftDetail}
                  alt="Architectural precision and natural stonework"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#351A0D]/50 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-[10px] uppercase font-mono tracking-widest text-[#F4EBDD]">
                  Craftsmanship & Material Integrity
                </span>
              </div>
            </div>

            {/* Right: The 5 Core Distinctions */}
            <div className="lg:col-span-7 space-y-8 lg:pl-6">
              {BRAND_INFO.whyYaman.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 bg-[#FAF6F0] border border-[#E8D7C1] rounded-xs hover:border-[#9A571F]/50 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-[#9A571F] font-semibold">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#351A0D]">
                      {pt.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#351A0D]/80 font-light leading-relaxed pl-7">
                    {pt.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 5. PROPERTY-READY ARCHITECTURAL SHOWCASE PREVIEW     */}
      {/* ==================================================== */}
      <section className="py-20 sm:py-28 bg-[#FAF6F0] border-t border-[#E8D7C1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#E8D7C1]">
            <div>
              <ArchitecturalKicker>PORTFOLIO PERSPECTIVES</ArchitecturalKicker>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#351A0D]">
                Architectural Records & Land Parcels
              </h2>
              <p className="text-xs text-[#351A0D]/70 font-light mt-1 max-w-xl">
                Illustrative representations from our private advisory archive. Prepared for future listing integration.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#7A3F15] hover:text-[#351A0D]"
            >
              <span>Explore Advisory Scope</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SAMPLE_PROPERTIES.map((prop) => (
              <div
                key={prop.id}
                className="bg-[#F4EBDD] border border-[#E8D7C1] rounded-xs overflow-hidden group shadow-2xs hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-[#E8D7C1]">
                  <img
                    src={prop.images[0]}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-[#241108]/85 text-[#F4EBDD] text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-xs font-mono">
                    {prop.type}
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#7A3F15] block mb-1">
                    {prop.location}
                  </span>
                  <h3 className="font-serif text-xl text-[#351A0D] mb-2 group-hover:text-[#7A3F15] transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-[#351A0D]/75 font-light leading-relaxed line-clamp-2 mb-4">
                    {prop.description}
                  </p>

                  <div className="pt-4 border-t border-[#E8D7C1] flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-[#351A0D]/70">{prop.area}</span>
                    <button
                      onClick={() => onSelectProperty?.(prop)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#7A3F15] hover:text-[#351A0D] font-medium uppercase tracking-wider"
                    >
                      <Eye size={13} />
                      <span>View Spec</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 6. LOCAL / COMMUNITY SECTION                         */}
      {/* ==================================================== */}
      <section className="py-20 sm:py-28 bg-[#F4EBDD] text-[#351A0D] relative border-t border-[#E8D7C1]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ArchitecturalKicker>LOCAL ROOTS & STATEWIDE NETWORK</ArchitecturalKicker>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#351A0D] mb-6">
            Rooted in <span className="underline decoration-[#9A571F]/50 underline-offset-8">Raipur</span>. <br />
            <span className="italic text-[#7A3F15]">Connected Across Chhattisgarh.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#351A0D]/80 font-light max-w-3xl mx-auto leading-relaxed mb-8">
            Yaman Estates is established and operates primarily in <strong>Raipur, Chhattisgarh, India</strong>. The majority of the properties we represent are concentrated in Raipur’s most prestigious avenues—such as VIP Road, Shankar Nagar, Atal Nagar (Naya Raipur), and Devendra Nagar.
          </p>

          <p className="text-xs sm:text-sm text-[#7A3F15] font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Whenever bespoke requirements arise from our clients—whether for agricultural acreages, commercial highway corridors, or private estate land—our reach extends statewide with access to <strong>more than 2,000+ vetted properties across Chhattisgarh</strong>.
          </p>

          {/* Key Operating Hubs in Raipur */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {['VIP Road', 'Shankar Nagar', 'Naya Raipur (Atal Nagar)', 'Devendra Nagar', 'Saddu', 'Telibandha', 'Statewide Chhattisgarh'].map((area, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 bg-[#FAF6F0] border border-[#E8D7C1] rounded-xs text-[11px] font-mono tracking-wider uppercase text-[#351A0D]/85"
              >
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 7. FINAL HOME CTA                                    */}
      {/* ==================================================== */}
      <section className="py-24 sm:py-32 bg-[#FAF6F0] border-t border-[#E8D7C1] text-[#351A0D] relative overflow-hidden">
        {/* Background Arc Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20">
          <DecorativeArc size={500} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <YamanEmblem size={48} theme="dark" />
          </div>
          <ArchitecturalKicker>START A CONVERSATION</ArchitecturalKicker>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#351A0D] leading-tight mb-6">
            Let's Find the Right Place <br />
            <span className="italic text-[#7A3F15]">for Your Next Chapter.</span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#351A0D]/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Whether you are looking for a property, exploring land opportunities, considering an investment, or planning a new space, start the conversation with Yaman Estates.
          </p>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-9 py-4 bg-[#351A0D] text-[#F4EBDD] text-xs uppercase tracking-[0.24em] font-medium rounded-xs hover:bg-[#7A3F15] transition-all duration-300 shadow-md group"
            style={{ letterSpacing: '0.24em' }}
          >
            <span>Get in Touch</span>
            <ArrowUpRight
              size={15}
              className="text-[#D8B98A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </button>
        </div>
      </section>
    </div>
  );
};
