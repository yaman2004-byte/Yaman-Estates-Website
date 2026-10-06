import React from 'react';
import { Property } from '../../types';
import { X, MapPin, Maximize2, Bed, Bath, Sparkles, ArrowRight } from 'lucide-react';

interface PropertyPreviewModalProps {
  property: Property | null;
  onClose: () => void;
  onInquire: (propertyTitle: string) => void;
}

export const PropertyPreviewModal: React.FC<PropertyPreviewModalProps> = ({
  property,
  onClose,
  onInquire
}) => {
  if (!property) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#241108]/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-[#F4EBDD] text-[#351A0D] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xs border border-[#9A571F]/40 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#F4EBDD]/90 backdrop-blur-xs text-[#351A0D] hover:text-[#9A571F] rounded-full border border-[#E8D7C1] transition-colors"
          aria-label="Close property details"
        >
          <X size={20} />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-16/9 w-full bg-[#E8D7C1] overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#241108]/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[#F4EBDD]">
            <div>
              <span className="text-[10px] tracking-[0.24em] uppercase font-mono text-[#D8B98A] block mb-1">
                {property.status} · {property.type}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white">
                {property.title}
              </h3>
            </div>
            {property.price && (
              <span className="font-serif text-xl sm:text-2xl text-[#D8B98A]">
                {property.price}
              </span>
            )}
          </div>
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E8D7C1]">
            <div className="flex items-center gap-2 text-xs text-[#7A3F15] tracking-wider uppercase font-medium">
              <MapPin size={15} className="text-[#9A571F]" />
              <span>{property.location}</span>
            </div>

            {/* Spec metadata without static pills */}
            <div className="flex items-center gap-4 text-xs text-[#351A0D]/70 font-mono">
              {property.bedrooms && (
                <div className="flex items-center gap-1.5">
                  <Bed size={14} className="text-[#9A571F]" />
                  <span>{property.bedrooms} Beds</span>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center gap-1.5">
                  <Bath size={14} className="text-[#9A571F]" />
                  <span>{property.bathrooms} Baths</span>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <Maximize2 size={14} className="text-[#9A571F]" />
                <span>{property.area}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#7A3F15] font-medium mb-3">
              Architectural Overview
            </h4>
            <p className="text-sm text-[#351A0D]/85 leading-relaxed font-light">
              {property.description}
            </p>
          </div>

          {property.architecturalStyle && (
            <div className="bg-[#E8D7C1]/30 p-4 rounded-xs border border-[#E8D7C1] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Sparkles size={16} className="text-[#9A571F]" />
                <span className="text-xs uppercase tracking-wider text-[#351A0D] font-medium">
                  Design Language:
                </span>
              </div>
              <span className="text-xs font-serif italic text-[#7A3F15]">
                {property.architecturalStyle}
              </span>
            </div>
          )}

          {/* Additional Gallery if available */}
          {property.images.length > 1 && (
            <div>
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#7A3F15] font-medium mb-3">
                Spatial Perspectives
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {property.images.slice(1).map((img, i) => (
                  <div key={i} className="aspect-4/3 rounded-xs overflow-hidden border border-[#E8D7C1]">
                    <img
                      src={img}
                      alt={`${property.title} view ${i + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Footer */}
          <div className="pt-6 border-t border-[#E8D7C1] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] text-[#351A0D]/60 font-light">
              Raipur, Chhattisgarh · Yaman Estates Property Architecture
            </span>
            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
              <a
                href={`https://wa.me/917400990070?text=${encodeURIComponent(
                  `Hello Yaman Estates, I am interested in property details for "${property.title}" in ${property.location}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-[0.16em] font-semibold rounded-xs transition-colors shadow-sm"
              >
                <span>WhatsApp Spec</span>
              </a>
              <button
                onClick={() => {
                  onClose();
                  onInquire(property.title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#351A0D] text-[#F4EBDD] text-xs uppercase tracking-[0.2em] font-medium rounded-xs hover:bg-[#7A3F15] transition-colors"
              >
                <span>Direct Inquire</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
