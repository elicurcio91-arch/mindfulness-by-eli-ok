import React from 'react';

const MeditationAnimation: React.FC = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-square md:aspect-[16/11] flex items-center justify-center">
      <style>
        {`
          @keyframes floating {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes softPulse {
            0%, 100% { opacity: 0.15; transform: scale(1); }
            50% { opacity: 0.25; transform: scale(1.1); }
          }
          .animate-floating {
            animation: floating 6s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: softPulse 8s ease-in-out infinite;
          }
        `}
      </style>

      {/* Background Glow - matches the brand-yellow/white theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-yellow/20 blur-[120px] rounded-full animate-pulse-slow"></div>

      <div className="relative w-full h-full flex items-center justify-center animate-floating">
        <img
          src="/hero-illustration.jpg"
          alt="Ilustración de Mindfulness"
          className="w-full h-full object-contain rounded-[40px] shadow-2xl shadow-black/10 transition-all duration-700"
        />
      </div>
    </div>
  );
};

export default MeditationAnimation;
