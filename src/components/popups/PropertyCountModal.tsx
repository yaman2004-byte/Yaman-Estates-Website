import React, { useState, useEffect } from 'react';
import { YamanEmblem } from '../brand/YamanLogo';
import { BRAND_INFO } from '../../data/brandData';
import { X, MapPin, Building2, Phone, ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';

interface PropertyCountModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onExploreProperties?: () => void;
}

export const PropertyCountModal: React.FC<PropertyCountModalProps> = ({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
  onExploreProperties
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  // Auto trigger popup smoothly after 2.2 seconds on first visit
  useEffect(() => {
    if (controlledIsOpen !== undefined) return;
    const hasSeen = sessionStorage.getItem('yaman_property_count_seen');
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setInternalIsOpen(true);
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, [controlledIsOpen]);

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    sessionStorage.setItem('yaman_property_count_seen', 'true');
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#241108]/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF6F0] text-[#351A0D] rounded-xs border-2 border-[#D8B98A] shadow-2xl p-6 sm:p-9 overflow-hidden transition-all transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle architectural background radial aura */}
        <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#CA8C74]/20 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-[#D8B98A]/25 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-[#351A0D]/70 hover:text-[#351A0D] bg-[#F4EBDD] hover:bg-[#E8D7C1] rounded-full border border-[#E8D7C1] transition-colors focus:outline-hidden"
          aria-label="Close notification"
        >
          <X size={18} />
        </button>

        {/* Header Badge */}
        <div className="flex flex-col items-center text-center">
          <div className="p-2.5 bg-[#F4EBDD] rounded-xs border border-[#D8B98A] shadow-md mb-4 inline-flex items-center justify-center">
            <YamanEmblem size={48} theme="dark" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#8A431F]/10 border border-[#8A431F]/30 rounded-xs text-[10px] uppercase tracking-[0.24em] font-mono text-[#8A431F] font-semibold mb-3">
            <Sparkles size={12} className="text-[#8A431F]" />
            <span>Exclusive Regional Portfolio</span>
          </div>

          {/* Main Requested Headline */}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#351A0D] leading-tight mb-3">
            "We have more than <span className="text-[#8A431F] font-normal underline decoration-[#D8B98A] decoration-2 underline-offset-4">2000+ properties</span> all over Chhattisgarh"
          </h2>

          <p className="text-xs sm:text-sm text-[#351A0D]/80 font-light leading-relaxed max-w-md mx-auto mb-6">
            Headquartered in <strong className="font-semibold text-[#8A431F]">Raipur</strong> with our primary concentration across Raipur’s prime avenues (VIP Road, Shankar Nagar, Atal Nagar / Naya Raipur), our vetted network extends across the entire state of Chhattisgarh.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3 py-4 mb-6 border-y border-[#E8D7C1] text-center bg-[#F4EBDD]/60 rounded-xs">
          <div className="p-2">
            <span className="font-serif text-xl sm:text-2xl font-bold text-[#8A431F] block leading-none">
              2,000+
            </span>
            <span className="text-[9px] uppercase tracking-wider font-mono text-[#7A3F15]/80 mt-1 block">
              Properties
            </span>
          </div>
          <div className="p-2 border-x border-[#E8D7C1]">
            <span className="font-serif text-base sm:text-lg font-semibold text-[#351A0D] block leading-none">
              Raipur
            </span>
            <span className="text-[9px] uppercase tracking-wider font-mono text-[#7A3F15]/80 mt-1 block">
              Primary City
            </span>
          </div>
          <div className="p-2">
            <span className="font-serif text-base sm:text-lg font-semibold text-[#351A0D] block leading-none">
              Chhattisgarh
            </span>
            <span className="text-[9px] uppercase tracking-wider font-mono text-[#7A3F15]/80 mt-1 block">
              Wide Coverage
            </span>
          </div>
        </div>

        {/* Direct Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {/* Direct WhatsApp CTA Button */}
          <a
            href={BRAND_INFO.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-[0.16em] font-semibold rounded-xs transition-colors shadow-md group"
          >
            <MessageCircle size={16} className="fill-white" />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Direct Phone Call Button */}
          <a
            href={`tel:${BRAND_INFO.contact.phone}`}
            onClick={handleClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#351A0D] hover:bg-[#8A431F] text-[#F4EBDD] text-xs uppercase tracking-[0.16em] font-medium rounded-xs transition-colors shadow-sm"
          >
            <Phone size={14} className="text-[#D8B98A]" />
            <span>+91 7400990070</span>
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-4 text-center">
          <button
            onClick={() => {
              handleClose();
              if (onExploreProperties) onExploreProperties();
            }}
            className="text-[11px] text-[#8A431F] hover:text-[#351A0D] underline decoration-[#8A431F]/40 underline-offset-4 tracking-wider uppercase font-medium"
          >
            Explore Curated Properties in Raipur
          </button>
        </div>
      </div>
    </div>
  );
};
