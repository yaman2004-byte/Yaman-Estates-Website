import React from 'react';

interface YamanLogoProps {
  variant?: 'horizontal' | 'stacked' | 'mark-only' | 'compact';
  theme?: 'dark' | 'light'; // dark = for light ivory canvas; light = for dark overlay/espresso canvas
  className?: string;
  showTagline?: boolean;
  useBadge?: boolean;
}

/**
 * Official Yaman Estates Emblem
 * Faithfully reproduces the official architectural "Y" monogram intertwined
 * with the rising skyline towers, terracotta sun disk, and foundation plinth.
 */
export const YamanEmblem: React.FC<{
  size?: number;
  theme?: 'dark' | 'light';
  useBadge?: boolean;
  className?: string;
}> = ({
  size = 46,
  theme = 'dark',
  useBadge = false,
  className = ''
}) => {
  const isLight = theme === 'light';

  // Authentic Brand Palette directly from official logo asset
  const sunColor = '#CA8C74'; // Soft terracotta/clay sun
  const yColor = isLight ? '#D8B98A' : '#8A431F'; // Rich cognac terracotta bronze (or champagne on dark)
  const towerDark = isLight ? '#2E1307' : '#2B1408';
  const towerWhite = '#FDFBF7';
  const towerSand = '#CBB199';
  const towerTaupe = '#D8C2AD';
  const towerEspresso = '#36190B';
  const gapColor = isLight ? '#241108' : '#F4EBDD';

  const svgContent = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 ${className}`}
      aria-label="Yaman Estates Official Logo Emblem"
    >
      {/* Terracotta Sun Disk in Upper Right */}
      <circle cx="134" cy="62" r="30" fill={sunColor} />

      {/* Tower 1: Background Sand Facet */}
      <polygon points="82,88 94,66 94,142 82,126" fill={towerSand} />

      {/* Tower 2: Tallest Skyscraper (Main Center-Left) */}
      {/* Left shaded wall */}
      <polygon points="94,38 104,46 104,146 94,142" fill={towerTaupe} />
      {/* Front crisp off-white face with dark outline */}
      <polygon
        points="94,38 115,54 115,150 104,146"
        fill={towerWhite}
        stroke={towerDark}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* Inner vertical shadow / depth facet */}
      <polygon
        points="104,46 115,54 115,150 104,146"
        fill={towerEspresso}
        stroke={towerDark}
        strokeWidth="1.6"
      />

      {/* Tower 3: Middle Espresso Tower */}
      {/* Deep dark chocolate/espresso front wall */}
      <polygon
        points="114,68 123,76 123,154 114,150"
        fill={towerDark}
        stroke={towerDark}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Sand transition facet */}
      <polygon points="108,74 114,80 114,150 108,146" fill="#BFA38D" />

      {/* Tower 4: Right Building (Front White Face with Outline) */}
      <polygon
        points="124,92 138,102 138,162 124,162"
        fill={towerWhite}
        stroke={towerDark}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <line x1="124" y1="92" x2="124" y2="162" stroke={towerDark} strokeWidth="2.2" />

      {/* Diagonal negative space / gap separating towers from the Y diagonal blade */}
      <polygon points="80,118 126,163 129,160 83,115" fill={gapColor} />

      {/* The "Y" Architectural Monogram */}
      {/* Top-left bracketed serif header */}
      <path
        d="M 16 60 C 26 59 46 59 70 60 C 60 66 54 74 46 84 C 36 72 26 62 16 60 Z"
        fill={yColor}
      />

      {/* Main sweeping Y body: Left arm, sweeping diagonal blade, vertical stem & base */}
      <path
        d="
          M 16 60
          C 35 60 52 64 64 78
          C 76 92 88 112 126 161
          L 121 163
          L 95 128
          L 95 155
          C 95 160 98 162 106 163
          L 106 165
          L 68 165
          L 68 163
          C 76 162 78 160 78 155
          L 78 124
          C 78 115 73 103 64 93
          C 53 80 39 70 25 63
          C 20 61 17 60 16 60
          Z
        "
        fill={yColor}
      />

      {/* Horizontal Architectural Baseline / Plinth Line */}
      <line
        x1="68"
        y1="165"
        x2="148"
        y2="165"
        stroke={yColor}
        strokeWidth="2.2"
        strokeLinecap="square"
      />
    </svg>
  );

  // If badge mode requested, render inside a luxury warm ivory tile with fine bronze border
  if (useBadge) {
    return (
      <div
        className={`inline-flex items-center justify-center p-1.5 sm:p-2 bg-[#F4EBDD] border border-[#D8B98A]/60 rounded-xs shadow-xs ${className}`}
        style={{ width: size + 16, height: size + 16 }}
      >
        {svgContent}
      </div>
    );
  }

  return svgContent;
};

export const YamanLogo: React.FC<YamanLogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  className = '',
  showTagline = true,
  useBadge = false
}) => {
  const isLight = theme === 'light';
  const textColor = isLight ? 'text-[#F4EBDD]' : 'text-[#351A0D]';
  const subColor = isLight ? 'text-[#D8B98A]' : 'text-[#7A3F15]';

  if (variant === 'mark-only') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <YamanEmblem size={44} theme={theme} useBadge={useBadge} />
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center ${className}`}>
        <YamanEmblem
          size={64}
          theme={theme}
          useBadge={useBadge}
          className="mb-3.5 hover:scale-105 transition-transform duration-300"
        />
        <span
          className={`font-serif tracking-[0.24em] font-medium text-2xl sm:text-3xl uppercase ${textColor}`}
          style={{ letterSpacing: '0.24em' }}
        >
          YAMAN ESTATES
        </span>
        {showTagline && (
          <div className="flex items-center gap-2 mt-1.5">
            <span className={`h-px w-6 ${isLight ? 'bg-[#9A571F]' : 'bg-[#9A571F]/50'}`} />
            <span
              className={`text-[9px] sm:text-[10px] tracking-[0.28em] uppercase font-light ${subColor}`}
              style={{ letterSpacing: '0.28em' }}
            >
              Real Estate · Land · Investment · Interiors · Construction
            </span>
            <span className={`h-px w-6 ${isLight ? 'bg-[#9A571F]' : 'bg-[#9A571F]/50'}`} />
          </div>
        )}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <YamanEmblem size={38} theme={theme} useBadge={useBadge} />
        <div className="flex flex-col text-left">
          <span
            className={`font-serif tracking-[0.2em] font-medium text-lg leading-none uppercase ${textColor}`}
          >
            YAMAN ESTATES
          </span>
          {showTagline && (
            <span
              className={`text-[8px] tracking-[0.18em] uppercase font-normal mt-1 ${subColor}`}
            >
              Luxury Property
            </span>
          )}
        </div>
      </div>
    );
  }

  // Default: Horizontal Navbar lockup
  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <YamanEmblem size={44} theme={theme} useBadge={useBadge} />
      <div className="flex flex-col text-left justify-center">
        <span
          className={`font-serif tracking-[0.22em] font-medium text-lg sm:text-xl leading-none uppercase transition-colors duration-300 ${textColor}`}
          style={{ letterSpacing: '0.22em' }}
        >
          YAMAN ESTATES
        </span>
        {showTagline && (
          <span
            className={`text-[8.5px] sm:text-[9px] tracking-[0.22em] uppercase font-normal mt-1 leading-tight transition-colors duration-300 ${subColor}`}
            style={{ letterSpacing: '0.22em' }}
          >
            Real Estate · Land · Interiors · Construction
          </span>
        )}
      </div>
    </div>
  );
};
