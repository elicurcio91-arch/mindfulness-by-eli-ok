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
                    {/* Legs (Lotus Pose) */}
                    <path d="M250 520 Q200 520 220 480 Q250 430 400 430 Q550 430 580 480 Q600 520 550 520 Z" fill="#8B4513" />
                    <path d="M300 520 Q250 520 270 490 Q300 450 400 450 Q500 450 530 490 Q550 520 500 520 Z" fill="#A0522D" />

                    {/* Torso */}
                    <path d="M350 450 Q320 300 400 230 Q480 300 450 450 Z" fill="#6B8E23" />

                    {/* Neck */}
                    <rect x="390" y="210" width="20" height="30" fill="#F5CBA7" />

                    {/* Head */}
                    <circle cx="400" cy="180" r="45" fill="#F5CBA7" />

                    {/* Hair */}
                    <path d="M350 180 Q350 100 400 100 Q450 100 450 180 Q460 250 400 250 Q340 250 350 180 Z" fill="#5D4037" />

                    {/* Face Details */}
                    <path d="M380 185 Q385 180 390 185" stroke="#3E2723" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M410 185 Q415 180 420 185" stroke="#3E2723" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M395 200 Q400 205 405 200" stroke="#3E2723" strokeWidth="1" strokeLinecap="round" />

                    {/* Arms & Hands */}
                    {/* Left Arm (to chest) */}
                    <path d="M360 280 Q320 320 380 360" stroke="#6B8E23" strokeWidth="25" strokeLinecap="round" />
                    <circle cx="395" cy="365" r="12" fill="#F5CBA7" /> {/* Hand on chest */}

                    {/* Right Arm (to belly) */}
                    <path d="M440 280 Q480 350 420 400" stroke="#6B8E23" strokeWidth="25" strokeLinecap="round" />
                    <circle cx="410" cy="405" r="12" fill="#F5CBA7" /> {/* Hand on belly */}
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
