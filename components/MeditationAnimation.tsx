import React from 'react';

const MeditationAnimation: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[16/11] flex items-end justify-center pointer-events-none">
      <style>
        {`
          @keyframes breathe {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
          }
          @keyframes windFlow {
            0% { stroke-dashoffset: 200; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes leafFloat {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(10px, -5px) rotate(15deg); }
            75% { transform: translate(-5px, 5px) rotate(-10deg); }
          }
          .animate-breathe {
            animation: breathe 4s ease-in-out infinite;
            transform-origin: center bottom;
          }
          .animate-wind {
            stroke-dasharray: 100;
            animation: windFlow 8s linear infinite;
          }
          .animate-leaf {
            animation: leafFloat 5s ease-in-out infinite;
          }
        `}
      </style>

      {/* Background Glow */}
      <div className="absolute bottom-10 w-3/4 h-2/3 bg-white/10 blur-[100px] rounded-full"></div>

      <svg
        viewBox="0 0 800 600"
        className="w-full h-full relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow/Base */}
        <ellipse cx="400" cy="540" rx="200" ry="20" fill="black" fillOpacity="0.05" />

        {/* Wind Lines (Background portion) */}
        <g className="animate-wind" stroke="#FFD233" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round">
          <path d="M50 250 Q150 220 250 280 T450 260" />
          <path d="M80 300 Q180 270 280 330 T480 310" />
        </g>

        {/* Character Group */}
        <g className="animate-breathe">
          {/* Back Hair (Voluminous & Wavy) */}
          <path
            d="M320 180 Q280 220 300 300 Q320 420 400 420 Q480 420 500 300 Q520 220 480 180 Z"
            fill="#8E5A3E"
          />

          {/* Legs / Pants (Lotus Pose - Terracotta) */}
          <path d="M250 520 Q200 520 220 480 Q250 430 400 430 Q550 430 580 480 Q600 520 550 520 Z" fill="#8D5B3E" />
          <path d="M300 520 Q250 520 270 490 Q300 450 400 450 Q500 450 530 490 Q550 520 500 520 Z" fill="#7A4B31" />

          {/* Torso (Sage Green - Softer Curves) */}
          <path d="M355 450 Q335 320 400 230 Q465 320 445 450 Z" fill="#88A076" />

          {/* Neck */}
          <rect x="393" y="210" width="14" height="25" fill="#F5CBA7" />

          {/* Head */}
          <circle cx="400" cy="180" r="42" fill="#F5CBA7" />

          {/* Face Details */}
          {/* Serene eyes */}
          <path d="M382 182 Q387 179 392 182" stroke="#4A342E" strokeWidth="2" strokeLinecap="round" />
          <path d="M408 182 Q413 179 418 182" stroke="#4A342E" strokeWidth="2" strokeLinecap="round" />
          {/* Soft smile */}
          <path d="M396 200 Q400 203 404 200" stroke="#4A342E" strokeWidth="1.2" strokeLinecap="round" />
          {/* Subtle Blush */}
          <circle cx="372" cy="192" r="6" fill="#F0B2B2" fillOpacity="0.4" />
          <circle cx="428" cy="192" r="6" fill="#F0B2B2" fillOpacity="0.4" />

          {/* Front Hair / Face Frame (Wavy segments) */}
          <path
            d="M358 180 
                           Q358 110 400 110 
                           Q442 110 442 180 
                           Q442 210 455 260 
                           Q435 245 400 245 
                           Q365 245 345 260 
                           Q358 210 358 180 Z"
            fill="#8E5A3E"
          />

          {/* Wavy Strands (Windblown) */}
          <g className="animate-wind" stroke="#6B4226" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6">
            <path d="M330 150 Q300 140 280 180" />
            <path d="M470 150 Q500 140 520 180" />
            <path d="M480 220 Q510 240 520 300" />
          </g>

          {/* Arms & Hands (Sage Green) */}
          <path d="M365 280 Q330 320 385 360" stroke="#88A076" strokeWidth="20" strokeLinecap="round" />
          <circle cx="395" cy="365" r="9" fill="#F5CBA7" />

          <path d="M435 280 Q470 350 415 405" stroke="#88A076" strokeWidth="20" strokeLinecap="round" />
          <circle cx="410" cy="405" r="9" fill="#F5CBA7" />
        </g>

        {/* Wind Lines (Foreground) */}
        <g stroke="#6FCF97" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" className="animate-wind">
          <path d="M100 220 Q200 190 300 250 T500 230" />
          <path d="M120 280 Q220 250 320 310 T520 290" />
        </g>

        {/* Floating Leaves */}
        <g className="animate-leaf">
          <circle cx="150" cy="210" r="5" fill="#2D9C64" />
          <circle cx="280" cy="240" r="7" fill="#6FCF97" />
          <circle cx="480" cy="220" r="6" fill="#2D9C64" />
          <circle cx="520" cy="300" r="4" fill="#6FCF97" />
          <circle cx="180" cy="290" r="6" fill="#6FCF97" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
};

export default MeditationAnimation;
