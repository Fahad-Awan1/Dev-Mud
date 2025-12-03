import React from 'react';

export const DevMudLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="metal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#e4e4e7" />
        <stop offset="50%" stopColor="#52525b" />
        <stop offset="100%" stopColor="#e4e4e7" />
      </linearGradient>
    </defs>
    {/* Stylized M/D shape representing the provided logo */}
    <path 
      d="M20 20 V80 H45 C65 80 65 60 50 50 C65 40 65 20 45 20 H20 Z" 
      stroke="url(#metal-gradient)" 
      strokeWidth="0"
      fill="none" 
      className="hidden" // Hiding the D shape to focus on the M style from the image
    />
    <path
      d="M15 80 V20 H35 L50 50 L65 20 H85 V80"
      stroke="url(#metal-gradient)"
      strokeWidth="6"
      strokeLinecap="square"
      fill="none"
    />
    {/* The Loop Drop Effect from the image */}
    <path
      d="M35 20 L50 55 L65 20" 
      stroke="url(#metal-gradient)"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
     <path
      d="M50 55 Q50 65 50 65" 
      stroke="url(#metal-gradient)"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const LogoMonogram = () => (
  <div className="relative w-10 h-10 flex items-center justify-center">
    <img 
      src="/images/devmud-logo.jpg" 
      alt="Devmud Logo" 
      className="w-full h-full object-contain drop-shadow-lg"
    />
  </div>
);
