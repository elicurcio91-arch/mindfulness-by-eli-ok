
import React from 'react';

const Step: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => (
  <div className="flex flex-col items-center text-center px-4">
    <div className="mb-8 w-32 h-32 rounded-full flex items-center justify-center bg-brand-blue/5 hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
      {description}
    </p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section className="relative z-10 mt-20">
      {/* Background with rounded top */}
      <div className="bg-white rounded-t-[80px] pt-32 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-24">
            Cómo funciona
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <Step 
              title="Meditación Consciente"
              description="Cultivá la Calma Interior. Reducí el estrés y aumentá la concentración con la meditación."
              icon={
                /* Stack of Stones (Zen Cairn) - Pink Tones */
                <svg width="80" height="80" viewBox="0 0 100 100">
                   {/* Stone 1 (Bottom) */}
                   <ellipse cx="50" cy="85" rx="35" ry="12" fill="#FFD6E0" />
                   {/* Stone 2 (Middle) */}
                   <ellipse cx="50" cy="65" rx="28" ry="10" fill="#FF9EAF" />
                   {/* Stone 3 (Top) */}
                   <ellipse cx="52" cy="48" rx="20" ry="8" fill="#D68497" />
                   {/* Stone 4 (Tiny) */}
                   <ellipse cx="50" cy="35" rx="10" ry="5" fill="#C07588" />
                   {/* Decoración: Hojas pequeñas */}
                   <path d="M80,85 Q90,80 90,70" stroke="#6FCF97" strokeWidth="2" fill="none" />
                   <circle cx="90" cy="70" r="3" fill="#6FCF97" />
                </svg>
              }
            />
            <Step 
              title="Dormí Mejor"
              description="Consejos para un Sueño Reparador. Descubrí estrategias para dormir mejor."
              icon={
                /* Night Moon Icon */
                <svg width="80" height="80" viewBox="0 0 100 100">
                   <circle cx="50" cy="50" r="45" fill="#3B3B98" />
                   {/* Moon */}
                   <path d="M50,25 Q65,25 70,40 Q75,55 60,65 Q50,70 40,60 Q35,50 40,35 Q45,25 50,25 Z" fill="#FCD34D" transform="rotate(-20 50 50)" />
                   {/* Clouds */}
                   <path d="M20,60 Q25,50 35,55 Q45,50 55,60 Q60,70 50,75 H30 Q20,75 20,60" fill="#E0E7FF" opacity="0.8" />
                   {/* Stars */}
                   <text x="70" y="30" fill="white" fontSize="10">✦</text>
                   <text x="25" y="40" fill="white" fontSize="8">﹡</text>
                </svg>
              }
            />
            <Step 
              title="Respirá Profundo"
              description="Aprovechá el Poder de la Respiración. Reducí el estrés y promové la relajación."
              icon={
                /* Breathe Sun Icon */
                <svg width="90" height="90" viewBox="0 0 100 100">
                  {/* Sun Core */}
                  <circle cx="50" cy="50" r="25" fill="#FDBA74" />
                  <circle cx="50" cy="50" r="15" fill="#FCD34D" />
                  
                  {/* Wind Lines (Breathing) */}
                  <path d="M10,50 H30" stroke="#A5F3FC" strokeWidth="4" strokeLinecap="round" />
                  <path d="M70,50 H90" stroke="#A5F3FC" strokeWidth="4" strokeLinecap="round" />
                  <path d="M20,30 Q35,20 50,20 Q65,20 80,30" stroke="white" strokeWidth="3" fill="none" strokeDasharray="4 4" opacity="0.6" />
                  <path d="M20,70 Q35,80 50,80 Q65,80 80,70" stroke="white" strokeWidth="3" fill="none" strokeDasharray="4 4" opacity="0.6" />
                  
                  {/* Rays */}
                  <line x1="50" y1="10" x2="50" y2="18" stroke="#FDBA74" strokeWidth="3" strokeLinecap="round" />
                  <line x1="50" y1="82" x2="50" y2="90" stroke="#FDBA74" strokeWidth="3" strokeLinecap="round" />
                  <line x1="10" y1="50" x2="18" y2="50" stroke="#FDBA74" strokeWidth="3" strokeLinecap="round" />
                  <line x1="82" y1="50" x2="90" y2="50" stroke="#FDBA74" strokeWidth="3" strokeLinecap="round" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
