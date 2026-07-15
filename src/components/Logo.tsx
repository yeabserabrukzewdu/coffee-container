import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'dark' | 'light' | 'serif-light' | 'serif-dark';
}

export default function Logo({ className = '', variant = 'full' }: LogoProps) {
  if (variant === 'serif-light' || variant === 'serif-dark') {
    const isLight = variant === 'serif-light';
    return (
      <div className={`flex flex-col text-left select-none ${className}`}>
        <span className={`font-display font-light text-lg sm:text-xl tracking-[0.3em] leading-none uppercase ${isLight ? 'text-white' : 'text-coffee-950'}`}>
          COFFEE
        </span>
        <span className={`font-display font-medium text-lg sm:text-xl tracking-[0.2em] mt-1.5 leading-none uppercase ${isLight ? 'text-white/90' : 'text-coffee-900'}`}>
          CONTAINER
        </span>
        <span className={`font-sans font-extrabold text-[8px] tracking-[0.25em] mt-2 leading-none uppercase ${isLight ? 'text-leaf-300' : 'text-leaf-600'}`}>
          COFFEE ESTATE & SOURCING
        </span>
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 100 100"
        className={`inline-block ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Isometric / 3D Structured Shipping Container representation */}
        {/* Top Lid / Roof */}
        <path
          d="M50 15L82 32L50 49L18 32L50 15Z"
          className="fill-coffee-800"
        />
        {/* Left Corrugated Wall */}
        <path
          d="M18 32V68L50 85V49L18 32Z"
          className="fill-coffee-950"
        />
        {/* Right Corrugated Wall */}
        <path
          d="M50 49V85L82 68V32L50 49Z"
          className="fill-coffee-900"
        />

        {/* Left side corrugation highlight ridges */}
        <path d="M26 39.5V69.5" className="stroke-coffee-900" strokeWidth="1.5" />
        <path d="M34 44V74" className="stroke-coffee-900" strokeWidth="1.5" />
        <path d="M42 48.5V78.5" className="stroke-coffee-900" strokeWidth="1.5" />

        {/* Right side corrugation highlight ridges */}
        <path d="M58 52.5V82.5" className="stroke-coffee-800" strokeWidth="1.5" />
        <path d="M66 48V78" className="stroke-coffee-800" strokeWidth="1.5" />
        <path d="M74 43.5V73.5" className="stroke-coffee-800" strokeWidth="1.5" />

        {/* Coffee Bean emblem sitting on the front right wall or emerging from center top */}
        {/* Let's make it look like an elegant gold/green coffee bean floating on the top of the container or on the right face */}
        <g transform="translate(50, 49) scale(0.35)">
          {/* Coffee bean backdrop */}
          <path
            d="M0 -30C15 -30 25 -15 25 0C25 15 15 30 0 30C-15 30 -25 15 -25 0C-25 -15 -15 -30 0 -30Z"
            className="fill-leaf-500"
          />
          {/* S-curve cleft */}
          <path
            d="M0 -30C-5 -10 5 10 0 30"
            className="stroke-coffee-950"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>

        {/* Elegant double steam curves rising from the top container */}
        <path
          d="M38 18C36 10 42 6 48 2"
          className="stroke-leaf-400"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M52 20C50 12 56 8 62 4"
          className="stroke-leaf-500"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Logo Icon */}
      <div className="relative w-12 h-12 flex-shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Isometric Shipping Container */}
          <path
            d="M50 15L82 32L50 49L18 32L50 15Z"
            className="fill-coffee-800"
          />
          <path
            d="M18 32V68L50 85V49L18 32Z"
            className="fill-coffee-950"
          />
          <path
            d="M50 49V85L82 68V32L50 49Z"
            className="fill-coffee-900"
          />

          {/* Left Wall Ridges */}
          <path d="M26 39.5V69.5" className="stroke-coffee-900" strokeWidth="1.5" />
          <path d="M34 44V74" className="stroke-coffee-900" strokeWidth="1.5" />
          <path d="M42 48.5V78.5" className="stroke-coffee-900" strokeWidth="1.5" />

          {/* Right Wall Ridges */}
          <path d="M58 52.5V82.5" className="stroke-coffee-800" strokeWidth="1.5" />
          <path d="M66 48V78" className="stroke-coffee-800" strokeWidth="1.5" />
          <path d="M74 43.5V73.5" className="stroke-coffee-800" strokeWidth="1.5" />

          {/* Emerging Coffee Bean Emblem */}
          <g transform="translate(50, 49) scale(0.35)">
            <path
              d="M0 -30C15 -30 25 -15 25 0C25 15 15 30 0 30C-15 30 -25 15 -25 0C-25 -15 -15 -30 0 -30Z"
              className="fill-leaf-500"
            />
            <path
              d="M0 -30C-5 -10 5 10 0 30"
              className="stroke-coffee-950"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>

          {/* Scent steam rising */}
          <path
            d="M38 18C36 10 42 6 48 2"
            className="stroke-leaf-400"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M52 20C50 12 56 8 62 4"
            className="stroke-leaf-500"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Typography with brand hierarchy */}
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="font-display font-black text-2xl tracking-tight text-coffee-950">
            COFFEE
          </span>
          <span className="font-display font-light text-2xl tracking-tight text-leaf-600 ml-1.5">
            CONTAINER
          </span>
        </div>
        <span className="font-sans font-extrabold text-[9px] tracking-[0.22em] text-coffee-800/80 -mt-0.5 leading-none uppercase">
          BIG DEAL WITH SIMPLE WAYS
        </span>
      </div>
    </div>
  );
}
