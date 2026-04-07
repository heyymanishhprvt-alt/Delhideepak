
import React from 'react';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-12" }) => {
  return (
    <div className={`relative flex items-center select-none ${className}`}>
      {/* High-Fidelity SVG Logo: Butterfly + Typography */}
      <svg 
        viewBox="0 0 450 150" 
        className="h-full w-auto drop-shadow-[0_2px_8px_rgba(201,164,76,0.2)]"
        aria-label="Dipak Studios Logo"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#C9A44C', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#F7F5EF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#C9A44C', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="shine">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* The Iconic Butterfly/Dragonfly Icon */}
        <g transform="translate(10, 10) scale(0.8)" fill="url(#goldGradient)">
          {/* Top Wings */}
          <path d="M45,45 Q10,0 60,10 Q80,15 90,45 Q100,15 120,10 Q170,0 135,45 Z" />
          {/* Bottom Wings */}
          <path d="M50,55 Q20,80 70,85 Q85,87 90,65 Q95,87 110,85 Q160,80 130,55 Z" />
          {/* Body */}
          <circle cx="90" cy="45" r="8" />
          <path d="M86,55 Q90,65 94,55 L90,110 Z" />
          {/* Antennae */}
          <path d="M85,40 Q80,20 70,15" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
          <path d="M95,40 Q100,20 110,15" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
          <circle cx="70" cy="15" r="2" />
          <circle cx="110" cy="15" r="2" />
          {/* The dotted tail dots (as seen in logo) */}
          <circle cx="90" cy="70" r="2" />
          <circle cx="90" cy="80" r="2" />
          <circle cx="90" cy="90" r="2" />
          <circle cx="90" cy="100" r="2" />
        </g>

        {/* Brand Typography */}
        <g transform="translate(110, 105)">
          <text 
            x="0" 
            y="0" 
            fontFamily="Montserrat, sans-serif" 
            fontSize="90" 
            fontWeight="900" 
            letterSpacing="-2"
            fill="url(#goldGradient)"
            style={{ filter: 'url(#shine)' }}
          >
            Dipak
          </text>
          <text 
            x="20" 
            y="32" 
            fontFamily="Montserrat, sans-serif" 
            fontSize="28" 
            fontWeight="400" 
            letterSpacing="24"
            fill="url(#goldGradient)"
            opacity="0.9"
          >
            STUDIOS
          </text>
        </g>
      </svg>
    </div>
  );
};
