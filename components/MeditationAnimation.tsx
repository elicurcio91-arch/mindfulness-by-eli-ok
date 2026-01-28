import React from 'react';

const MeditationAnimation: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center pointer-events-none">
      <style>
        {`
          @keyframes breathe-core {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.15); opacity: 1; }
          }
          @keyframes breathe-halo-1 {
            0%, 100% { transform: scale(1.1); opacity: 0.3; }
            50% { transform: scale(1.6); opacity: 0.15; }
          }
          @keyframes breathe-halo-2 {
            0%, 100% { transform: scale(1.2); opacity: 0.2; }
            50% { transform: scale(2.1); opacity: 0.05; }
          }
          @keyframes rotate-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes float-particle {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
            25% { opacity: 0.6; }
            50% { transform: translateY(-40px) translateX(20px); opacity: 0.3; }
            75% { opacity: 0.6; }
            100% { transform: translateY(-80px) translateX(-10px); opacity: 0; }
          }

          .animate-breathe-core { animation: breathe-core 8s ease-in-out infinite; }
          .animate-breathe-halo-1 { animation: breathe-halo-1 8s ease-in-out infinite; }
          .animate-breathe-halo-2 { animation: breathe-halo-2 8s ease-in-out infinite; }
          .animate-rotate-slow { animation: rotate-slow 20s linear infinite; }
          .particle { animation: float-particle 10s ease-in-out infinite; }
        `}
      </style>

      {/* Main Animation Container */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full relative z-10 overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Definition for Gradients */}
        <defs>
          <radialGradient id="zenGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#FFF9E5" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#FDE68A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#88A076" stopOpacity="0" />
          </radialGradient>

          <filter id="zenGlow">
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Halo 2 */}
        <circle
          cx="200" cy="200" r="80"
          fill="url(#zenGradient)"
          className="animate-breathe-halo-2"
        />

        {/* Outer Halo 1 */}
        <circle
          cx="200" cy="200" r="90"
          stroke="#FFF9E5"
          strokeWidth="0.5"
          strokeDasharray="4 8"
          className="animate-breathe-halo-1 opacity-20"
        />

        {/* Abstract Rotating Element (Lotus-like geometry) */}
        <g className="animate-rotate-slow origin-center">
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <ellipse
              key={deg}
              cx="200" cy="200" rx="100" ry="30"
              stroke="#FFF"
              strokeWidth="0.2"
              className="opacity-10"
              transform={`rotate(${deg}, 200, 200)`}
            />
          ))}
        </g>

        {/* Core Pulsing Orb */}
        <circle
          cx="200" cy="200" r="60"
          fill="url(#zenGradient)"
          className="animate-breathe-core"
          filter="url(#zenGlow)"
        />

        {/* Subtle Inner Glow */}
        <circle
          cx="200" cy="200" r="30"
          fill="#FFF"
          className="animate-breathe-core opacity-10"
        />

        {/* Floating Peace Particles */}
        <g className="particles">
          <circle cx="150" cy="250" r="2" fill="#FFF" className="particle" style={{ animationDelay: '0s' }} />
          <circle cx="250" cy="150" r="1.5" fill="#FFF" className="particle" style={{ animationDelay: '2s' }} />
          <circle cx="180" cy="180" r="1" fill="#FFF" className="particle" style={{ animationDelay: '5s' }} />
          <circle cx="220" cy="220" r="2.5" fill="#FFF" className="particle" style={{ animationDelay: '7s' }} />
        </g>
      </svg>

      {/* Visual background text shadow to anchor it */}
      <div className="absolute inset-0 bg-brand-yellow/5 blur-[100px] rounded-full scale-110"></div>
    </div>
  );
};

export default MeditationAnimation;
