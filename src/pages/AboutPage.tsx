import React from 'react';
import { Page } from '../types';
import { BRAND_INFO } from '../data/brandData';
import { ASSETS } from '../data/assets';
import {
  ArchitecturalKicker,
  BronzeDivider,
  DecorativeArc
} from '../components/brand/ArchitecturalDecor';
import { YamanEmblem } from '../components/brand/YamanLogo';
import { ArrowUpRight, ArrowRight, UserCheck, Shield, Sparkles } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-20 sm:pt-24 bg-[#F4EBDD] text-[#351A0D]">
      {/* ==================================================== */}
      {/* 1. ABOUT PAGE HERO                                   */}
      {/* ==================================================== */}
      <section className="relative py-20 sm:py-28 overflow-hidden border-b border-[#E8D7C1] bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <ArchitecturalKicker>ABOUT YAMAN ESTATES</ArchitecturalKicker>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#351A0D] leading-[1.08] mb-6">
              Built on Trust. <br />
              <span className="italic text-[#7A3F15]">Driven by Vision.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#351A0D]/80 font-light leading-relaxed mb-8">
              Yaman Estates is a specialized property studio founded on the premise that exceptional real estate and land decisions demand architectural discernment, deep local sensitivity, and a view toward what endures across generations.
            </p>
          </div>
        </div>

        {/* Large Architectural Hero Image */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="relative aspect-16/9 sm:aspect-21/9 w-full rounded-xs overflow-hidden border border-[#E8D7C1] shadow-xl bg-[#E8D7C1]">
            <img
              src={ASSETS.terraceDusk}
              alt="Yaman Estates architectural grounds"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#241108]/60 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 text-xs font-mono text-[#F4EBDD]/90">
              Figure 02. Architectural Grounds & Spatial Horizon
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 2. OUR STORY NARRATIVE                               */}
      {/* ==================================================== */}
      <section className="py-24 sm:py-32 bg-[#F4EBDD]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            {/* Left Column: Crest & Sticky Motif */}
            <div className="md:col-span-4 md:sticky md:top-28">
              <div className="p-8 bg-[#FAF6F0] border border-[#E8D7C1] rounded-xs text-center flex flex-col items-center">
                <YamanEmblem size={56} theme="dark" className="mb-4" />
                <span className="font-serif text-xl uppercase tracking-[0.18em] text-[#351A0D] block mb-1">
                  Yaman Estates
                </span>
                <span className="text-[10px] tracking-[0.22em] uppercase font-mono text-[#7A3F15] block mb-4">
                  Private Practice
                </span>
                <p className="text-xs text-[#351A0D]/70 font-light leading-relaxed">
                  Real Estate · Land · Investment · Interiors · Construction
                </p>
              </div>

              {/* Regional Advisory Credentials Badge */}
              <div className="mt-4 p-4 bg-[#E8D7C1]/40 border border-[#9A571F]/20 rounded-xs text-[11px] text-[#7A3F15] font-mono leading-relaxed text-center">
                <span className="block font-semibold uppercase tracking-wider mb-1">Raipur Headquartered</span>
                <span>Operating primarily across Raipur with 2,000+ verified properties statewide in Chhattisgarh.</span>
              </div>
            </div>

            {/* Right Column: Story Narrative */}
            <div className="md:col-span-8 space-y-6 text-[#351A0D]/85 leading-relaxed font-light">
              <ArchitecturalKicker>OUR STORY</ArchitecturalKicker>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#351A0D]">
                Why Yaman Estates Exists
              </h2>

              <BronzeDivider />

              <p className="text-base sm:text-lg text-[#351A0D] font-normal leading-relaxed">
                Too often, property transactions are treated with hurried detachment. Numbers replace human aspirations; floor plates replace natural light; and quick closures overshadow generational permanence.
              </p>

              <p>
                Yaman Estates was founded in <strong>{BRAND_INFO.contact.primaryCity}, {BRAND_INFO.contact.region}</strong> by <strong>{BRAND_INFO.contact.founderName}</strong> to offer an antidote: an intimate, design-conscious advisory that views land and architecture as cultural and familial cornerstones.
              </p>

              <p>
                With deep immersion in spatial design, land topography, and private acquisitions across Raipur's key residential corridors—such as VIP Road, Shankar Nagar, Atal Nagar (Naya Raipur), and Devendra Nagar—our practice bridges the gap between architectural aspiration and practical execution.
              </p>

              <div className="my-8 p-6 bg-[#FAF6F0] border-l-2 border-[#9A571F] text-sm text-[#351A0D]/90 italic font-serif">
                "We have more than 2,000+ properties all over Chhattisgarh, with our primary heartbeat anchored right here in Raipur. Whether selecting a residential villa, acquiring development acreage, or coordinating custom construction, every client receives unhurried, senior-level counsel."
              </div>

              <p>
                Whether advising a family searching for a private residence, an investor evaluating unbuilt land parcels, or a landowner commissioning tailored interiors and construction management, we measure our success not by volume, but by the quiet satisfaction of projects that endure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 3. OUR PHILOSOPHY                                    */}
      {/* ==================================================== */}
      <section className="py-24 sm:py-32 bg-[#241108] text-[#F4EBDD] relative overflow-hidden">
        {/* Subtle decorative arc in background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-20">
          <DecorativeArc size={400} light={true} />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <ArchitecturalKicker light={true}>OUR PHILOSOPHY</ArchitecturalKicker>
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#F4EBDD] leading-snug font-normal italic my-6">
              "{BRAND_INFO.philosophy.quote}"
            </blockquote>
            <div className="h-px w-24 bg-[#D8B98A]/50 mx-auto" />
          </div>

          {/* 4 Pillars Grid: People, Place, Perspective, Precision */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BRAND_INFO.philosophy.pillars.map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#351A0D]/60 border border-[#D8B98A]/20 rounded-xs hover:border-[#D8B98A]/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs tracking-[0.24em] text-[#D8B98A] block mb-2">
                    0{idx + 1} · {item.word}
                  </span>
                  <h3 className="font-serif text-xl text-[#F4EBDD] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#E8D7C1]/75 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 4. TEAM SECTION                                      */}
      {/* ==================================================== */}
      <section className="py-24 sm:py-32 bg-[#FAF6F0] border-b border-[#E8D7C1]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <ArchitecturalKicker>THE LEADERSHIP & ADVISORY</ArchitecturalKicker>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#351A0D] mb-4">
              Meet the People Behind Yaman Estates
            </h2>
            <p className="text-sm text-[#351A0D]/75 font-light leading-relaxed">
              A private group of advisors, spatial strategists, and construction stewards committed to your vision in Raipur and across Chhattisgarh.
            </p>
            <BronzeDivider centered />
          </div>

          {/* Team Structure */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BRAND_INFO.teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-[#F4EBDD] border border-[#E8D7C1] p-8 rounded-xs hover:border-[#9A571F]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Portrait Representation */}
                  <div className="relative aspect-4/5 w-full bg-[#E8D7C1]/60 rounded-xs mb-6 overflow-hidden flex items-center justify-center border border-[#E8D7C1]">
                    <div className="text-center p-4">
                      <div className="w-12 h-12 rounded-full border border-[#9A571F] flex items-center justify-center mx-auto mb-2 text-[#7A3F15]">
                        <UserCheck size={20} />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#7A3F15]">
                        Yaman Estates Advisory
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9A571F] block mb-1">
                    {member.role}
                  </span>
                  <h3 className="font-serif text-2xl text-[#351A0D] mb-3">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#351A0D]/80 font-light leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8D7C1] flex items-center justify-between text-[10px] font-mono text-[#7A3F15]/80">
                  <span>Raipur, CG</span>
                  <span>Direct Consultation</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================== */}
      {/* 5. ABOUT PAGE CLOSING CTA                            */}
      {/* ==================================================== */}
      <section className="py-24 sm:py-32 bg-[#F4EBDD] text-[#351A0D] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <YamanEmblem size={48} theme="dark" />
          </div>
          <ArchitecturalKicker>NEXT STEPS</ArchitecturalKicker>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#351A0D] mb-6">
            Have a Property Vision?
          </h2>
          <p className="text-sm sm:text-base text-[#351A0D]/80 font-light max-w-xl mx-auto leading-relaxed mb-10">
            We welcome conversations regarding land potential, prospective residential acquisitions, interior projects, or construction coordination.
          </p>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#351A0D] text-[#F4EBDD] text-xs uppercase tracking-[0.22em] font-medium rounded-xs hover:bg-[#7A3F15] transition-colors group shadow-md"
            style={{ letterSpacing: '0.22em' }}
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={15} className="text-[#D8B98A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};
