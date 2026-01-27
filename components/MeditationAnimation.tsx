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
          {/* Back Hair */}
          <path
            d="M340 180 Q320 220 330 350 Q350 400 400 400 Q450 400 470 350 Q480 220 460 180 Z"
            fill="#5D4037"
          />

          {/* Legs (Lotus Pose) */}
          <path d="M250 520 Q200 520 220 480 Q250 430 400 430 Q550 430 580 480 Q600 520 550 520 Z" fill="#8B4513" />
          <path d="M300 520 Q250 520 270 490 Q300 450 400 450 Q500 450 530 490 Q550 520 500 520 Z" fill="#A0522D" />

          {/* Torso (More feminine curves) */}
          <path d="M355 450 Q340 320 400 230 Q460 320 445 450 Z" fill="#6B8E23" />

          {/* Neck */}
          <rect x="392" y="210" width="16" height="25" fill="#F5CBA7" />

          {/* Head */}
          <circle cx="400" cy="180" r="42" fill="#F5CBA7" />

          {/* Front Hair / Face Frame */}
          <path
            d="M358 180 Q358 120 400 120 Q442 120 442 180 Q442 220 445 280 Q430 260 400 260 Q370 260 355 280 Q358 220 358 180 Z"
            fill="#6B4226"
          />

          {/* Windblown Hair Strands */}
          <g className="animate-wind" stroke="#6B4226" strokeWidth="1.5" strokeLinecap="round">
            <path d="M360 140 Q330 130 310 160" />
            <path d="M440 140 Q470 130 490 160" />
            <path d="M450 200 Q480 220 495 280" />
          </g>

          {/* Face Details */}
          <path d="M385 185 Q390 182 395 185" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />
          <path d="M405 185 Q410 182 415 185" stroke="#3E2723" strokeWidth="2" strokeLinecap="round" />
          <path d="M397 202 Q400 205 403 202" stroke="#3E2723" strokeWidth="1.5" strokeLinecap="round" />

          {/* Arms & Hands */}
          {/* Left Arm (to chest) */}
          <path d="M365 280 Q330 320 385 360" stroke="#6B8E23" strokeWidth="22" strokeLinecap="round" />
          <circle cx="395" cy="365" r="10" fill="#F5CBA7" /> {/* Hand on chest */}

          {/* Right Arm (to belly) */}
          <path d="M435 280 Q470 350 415 405" stroke="#6B8E23" strokeWidth="22" strokeLinecap="round" />
          <circle cx="410" cy="405" r="10" fill="#F5CBA7" /> {/* Hand on belly */}
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
