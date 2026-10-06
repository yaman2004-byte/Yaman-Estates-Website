import React, { useState } from 'react';
import { Page, ServicePillarId } from '../types';
import { SERVICE_PILLARS, PROCESS_STEPS } from '../data/brandData';
import {
  ArchitecturalKicker,
  BronzeDivider,
  DecorativeArc,
  PillarIcon
} from '../components/brand/ArchitecturalDecor';
import { YamanEmblem } from '../components/brand/YamanLogo';
import { ArrowUpRight, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
  onInitiateInquiry?: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onInitiateInquiry
}) => {
  const [activeTab, setActiveTab] = useState<ServicePillarId>('real-estate');

  const handleInquire = (serviceTitle: string) => {
    if (onInitiateInquiry) {
      onInitiateInquiry(serviceTitle);
    } else {
      onNavigate('contact');
    }
  };

  return (
    <div className="w-full pt-20 sm:pt-24 bg-[#F4EBDD] text-[#351A0D]">
      {/* ==================================================== */}
      {/* 1. SERVICES PAGE HERO                                */}
      {/* ==================================================== */}
      <section className="py-20 sm:py-28 bg-[#FAF6F0] border-b border-[#E8D7C1] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ArchitecturalKicker>INTEGRATED DISCIPLINES</ArchitecturalKicker>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#351A0D] leading-[1.08] mb-6">
              More Than Property. <br />
              <span className="italic text-[#7A3F15]">A Complete Perspective.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#351A0D]/80 font-light leading-relaxed mb-8">
              Yaman Estates brings together real estate, land, investment, interiors and construction to help clients make better property decisions.
            </p>
          </div>

          {/* Quick jump navigation for the 5 services */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-[#E8D7C1]">
            {SERVICE_PILLARS.map((p) => (
              <a
                key={p.id}
                href={`#service-${p.id}`}
                className="px-4 py-2 bg-[#F4EBDD] hover:bg-[#E8D7C1] border border-[#E8D7C1] rounded-xs text-xs tracking-wider uppercase font-medium text-[#7A3F15] transition-colors"
              >
                {p.number} {p.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 2. FIVE FLAGSHIP SERVICES (DETAILED SECTIONS)        */}
      {/* ==================================================== */}
      <section className="py-16 sm:py-24 space-y-20 sm:space-y-32">
        {SERVICE_PILLARS.map((service, idx) => {
          const isReversed = idx % 2 === 1;

          return (
            <div
              key={service.id}
              id={`service-${service.id}`}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image Block */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-4/3 sm:aspect-16/10 w-full rounded-xs overflow-hidden border border-[#E8D7C1] shadow-xl bg-[#E8D7C1]">
                    <img
                      src={service.image}
                      alt={`Yaman Estates ${service.title} advisory`}
                      className="w-full h-full object-cover hover:scale-102 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241108]/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 font-mono text-[10px] tracking-widest uppercase text-[#F4EBDD] bg-[#241108]/80 px-3 py-1 rounded-xs">
                      Pillar {service.number} · {service.title}
                    </div>
                  </div>
                </div>

                {/* Text Content Block */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-xs bg-[#FAF6F0] border border-[#E8D7C1] flex items-center justify-center text-[#9A571F]">
                      <PillarIcon type={service.id} size={18} />
                    </div>
                    <span className="font-mono text-xs tracking-[0.22em] text-[#9A571F]">
                      SERVICE {service.number}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-[#351A0D] mb-4">
                    {service.title}
                  </h2>

                  <p className="text-base text-[#351A0D]/90 font-normal leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>

                  <p className="text-sm text-[#351A0D]/75 font-light leading-relaxed mb-6">
                    {service.fullDescription}
                  </p>

                  {/* Core Features */}
                  <div className="mb-6 p-6 bg-[#FAF6F0] border border-[#E8D7C1] rounded-xs">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#7A3F15] font-medium mb-3">
                      Advisory Capabilities
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#351A0D]/85 font-light">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-[#9A571F] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Disclaimer for Investment & Safe copy */}
                  {service.disclaimer && (
                    <div className="mb-6 p-4 bg-[#E8D7C1]/30 border-l-2 border-[#9A571F] text-xs text-[#351A0D]/75 leading-relaxed font-light flex items-start gap-2.5">
                      <AlertCircle size={15} className="text-[#9A571F] shrink-0 mt-0.5" />
                      <span>{service.disclaimer}</span>
                    </div>
                  )}

                  {/* Service Specific CTA */}
                  <button
                    onClick={() => handleInquire(service.title)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#351A0D] text-[#F4EBDD] text-xs uppercase tracking-[0.2em] font-medium rounded-xs hover:bg-[#7A3F15] transition-colors"
                  >
                    <span>Inquire About {service.title}</span>
                    <ArrowUpRight size={14} className="text-[#D8B98A]" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* ==================================================== */}
      {/* 3. PROCESS SECTION                                   */}
      {/* ==================================================== */}
      <section className="py-24 sm:py-32 bg-[#FAF6F0] border-y border-[#E8D7C1] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <ArchitecturalKicker>OUR METHODOLOGY</ArchitecturalKicker>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#351A0D] mb-4">
              A Thoughtful, Phased Journey
            </h2>
            <p className="text-sm text-[#351A0D]/75 font-light leading-relaxed">
              Every mandate follows a disciplined cadence designed to provide clarity at each decision milestone.
            </p>
            <BronzeDivider centered />
          </div>

          {/* Desktop Horizontal Timeline & Mobile Vertical Timeline */}
          <div className="relative">
            {/* Horizontal Line on Desktop */}
            <div className="hidden lg:block absolute top-10 left-12 right-12 h-px bg-[#E8D7C1]" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#F4EBDD] p-6 rounded-xs border border-[#E8D7C1] hover:border-[#9A571F]/50 transition-colors flex flex-col justify-between"
                >
                  <div>
                    {/* Step Indicator */}
                    <div className="w-10 h-10 rounded-full bg-[#FAF6F0] border-2 border-[#9A571F] flex items-center justify-center font-mono text-xs font-semibold text-[#7A3F15] mb-5 shadow-2xs">
                      {step.number}
                    </div>

                    <span className="text-[10px] tracking-[0.24em] uppercase font-mono text-[#9A571F] block mb-1">
                      PHASE {step.number}
                    </span>
                    <h3 className="font-serif text-xl text-[#351A0D] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-xs text-[#351A0D]/80 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#E8D7C1]/60 text-[10px] text-[#7A3F15]/70 font-mono">
                    Milestone Gate {idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 4. SERVICES CLOSING CTA                              */}
      {/* ==================================================== */}
      <section className="py-24 sm:py-32 bg-[#241108] text-[#F4EBDD] text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <DecorativeArc size={480} light={true} className="mx-auto" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="p-2.5 sm:p-3 bg-[#F4EBDD] rounded-xs border border-[#D8B98A] shadow-xl inline-flex items-center justify-center">
              <YamanEmblem size={44} theme="dark" />
            </div>
          </div>
          <ArchitecturalKicker light={true}>COLLABORATE WITH US</ArchitecturalKicker>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F4EBDD] mb-6">
            Let's Talk About What You're Building.
          </h2>
          <p className="text-sm sm:text-base text-[#E8D7C1]/80 font-light max-w-xl mx-auto leading-relaxed mb-10">
            Tell us about your spatial aspirations, land acquisition targets, or interior commissions. We look forward to connecting.
          </p>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#D8B98A] text-[#241108] text-xs uppercase tracking-[0.22em] font-medium rounded-xs hover:bg-[#F4EBDD] transition-colors group shadow-lg"
            style={{ letterSpacing: '0.22em' }}
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};
