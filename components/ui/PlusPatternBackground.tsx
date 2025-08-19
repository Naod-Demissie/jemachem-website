import React from 'react';

interface PlusPatternBackgroundProps {
  className?: string;
}

const PlusPatternBackground: React.FC<PlusPatternBackgroundProps> = ({ className = "" }) => {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" className="w-full h-full">
        <defs>
          {/* Smaller + with wider spacing */}
          <pattern id="plus-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <text x="0" y="10" fontSize="8" fontFamily="Arial, sans-serif" fill="#999" opacity="0.3">+</text>
          </pattern>

          {/* Radial gradient fade (top → bottom) */}
          <radialGradient id="fade-gradient" cx="50%" cy="0%" r="120%" fx="50%" fy="0%">
            <stop offset="0%" stopColor="white" stopOpacity="1"/>
            <stop offset="100%" stopColor="white" stopOpacity="0"/>
          </radialGradient>

          <mask id="fade-mask">
            <rect width="100%" height="100%" fill="url(#fade-gradient)" />
          </mask>
        </defs>

        {/* Apply pattern with fade */}
        <rect width="100%" height="100%" fill="url(#plus-pattern)" mask="url(#fade-mask)" />
      </svg>
    </div>
  );
};

export default PlusPatternBackground; 