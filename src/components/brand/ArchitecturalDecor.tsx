import React from 'react';
import { ServicePillarId } from '../../types';

export const BronzeDivider: React.FC<{ className?: string; centered?: boolean }> = ({
  className = '',
  centered = false
}) => {
  return (
    <div
      className={`flex items-center gap-3 my-6 ${centered ? 'justify-center' : 'justify-start'} ${className}`}
      aria-hidden="true"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-[#9A571F]/40 to-[#9A571F]/80 w-12 sm:w-20" />
      <div className="w-1.5 h-1.5 rotate-45 border border-[#9A571F] bg-[#D8B98A]/30" />
      <div className="h-px bg-gradient-to-r from-[#9A571F]/80 via-[#9A571F]/40 to-transparent w-12 sm:w-20" />
    </div>
  );
};

export const ArchitecturalKicker: React.FC<{ children: React.ReactNode; light?: boolean; className?: string }> = ({
  children,
  light = false,
  className = ''
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 mb-3.5 ${className}`}>
      <span
        className={`w-5 h-px ${light ? 'bg-[#D8B98A]' : 'bg-[#9A571F]'}`}
        aria-hidden="true"
      />
      <span
        className={`text-[10px] sm:text-[11px] font-medium tracking-[0.26em] uppercase ${
          light ? 'text-[#D8B98A]' : 'text-[#7A3F15]'
        }`}
        style={{ letterSpacing: '0.26em' }}
      >
        {children}
      </span>
      <span
        className={`w-2 h-px ${light ? 'bg-[#D8B98A]/60' : 'bg-[#9A571F]/60'}`}
        aria-hidden="true"
      />
    </div>
  );
};

export const DecorativeArc: React.FC<{ className?: string; size?: number; light?: boolean }> = ({
  className = '',
  size = 180,
  light = false
}) => {
  const strokeColor = light ? '#D8B98A' : '#9A571F';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <circle
        cx="50"
        cy="50"
        r="48"
        stroke={strokeColor}
        strokeWidth="0.75"
        strokeOpacity="0.35"
        strokeDasharray="4 6"
      />
      <path
        d="M2 50 A48 48 0 0 1 50 2"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeOpacity="0.7"
      />
      <circle cx="50" cy="2" r="2" fill={strokeColor} opacity="0.8" />
    </svg>
  );
};

export const PillarIcon: React.FC<{
  type: ServicePillarId | string;
  size?: number;
  className?: string;
  light?: boolean;
}> = ({ type, size = 32, className = '', light = false }) => {
  const stroke = light ? '#D8B98A' : '#9A571F';
  const fillAccent = light ? '#4C4A2A' : '#351A0D';

  switch (type) {
    case 'real-estate':
      // Architectural portico & villa façade
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M4 26H28" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M7 26V14" stroke={stroke} strokeWidth="1.2" />
          <path d="M13 26V14" stroke={stroke} strokeWidth="1.2" />
          <path d="M19 26V14" stroke={stroke} strokeWidth="1.2" />
          <path d="M25 26V14" stroke={stroke} strokeWidth="1.2" />
          <path d="M3 14L16 6L29 14" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="16" cy="11" r="1.5" fill={stroke} />
        </svg>
      );
    case 'land':
      // Terraced terrain, horizon & botanical tree contour
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M3 25C9 23 15 26 21 24C25 22.5 28 23 29 23.5" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M3 20C8 18 13 21 19 19C24 17.5 27 18 29 18.5" stroke={stroke} strokeWidth="1" strokeOpacity="0.6" strokeLinecap="round" />
          {/* Olive tree silhouette */}
          <line x1="12" y1="23" x2="12" y2="15" stroke={stroke} strokeWidth="1.2" />
          <path d="M12 15C9 14 9 9 12 8C15 9 15 14 12 15Z" fill={fillAccent} stroke={stroke} strokeWidth="1" />
          {/* Sun on horizon */}
          <circle cx="23" cy="9" r="2.5" stroke={stroke} strokeWidth="1" />
        </svg>
      );
    case 'investment':
      // Ascending geometric obelisk / capital pillars
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <line x1="4" y1="26" x2="28" y2="26" stroke={stroke} strokeWidth="1.5" />
          <rect x="7" y="18" width="4" height="8" stroke={stroke} strokeWidth="1.2" />
          <rect x="14" y="12" width="4" height="14" stroke={stroke} strokeWidth="1.2" />
          <rect x="21" y="7" width="4" height="19" stroke={stroke} strokeWidth="1.2" />
          <path d="M6 14L14 8L23 4" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" strokeDasharray="1.5 2" />
          <circle cx="23" cy="4" r="1.5" fill={stroke} />
        </svg>
      );
    case 'interiors':
      // Spatial arch, lighting sphere & refined chair form
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M6 26V13C6 8.5 10 5 16 5C22 5 26 8.5 26 13V26" stroke={stroke} strokeWidth="1.5" />
          <line x1="4" y1="26" x2="28" y2="26" stroke={stroke} strokeWidth="1.5" />
          <line x1="16" y1="5" x2="16" y2="12" stroke={stroke} strokeWidth="1" />
          <circle cx="16" cy="14" r="2" fill={stroke} />
          {/* Minimalist lounge chair silhouette */}
          <path d="M10 23H22" stroke={stroke} strokeWidth="1.2" />
          <path d="M12 20V23" stroke={stroke} strokeWidth="1" />
          <path d="M20 20V23" stroke={stroke} strokeWidth="1" />
        </svg>
      );
    case 'construction':
      // Architectural drafting compass & structural beam
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <circle cx="16" cy="8" r="2.5" stroke={stroke} strokeWidth="1.2" />
          <line x1="15" y1="10" x2="8" y2="26" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <line x1="17" y1="10" x2="24" y2="26" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 20Q16 18 22 20" stroke={stroke} strokeWidth="1" />
          <line x1="4" y1="26" x2="28" y2="26" stroke={stroke} strokeWidth="1.2" strokeDasharray="2 2" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
          <circle cx="16" cy="16" r="12" stroke={stroke} strokeWidth="1.5" />
          <path d="M16 6V26M6 16H26" stroke={stroke} strokeWidth="1" strokeOpacity="0.5" />
        </svg>
      );
  }
};
