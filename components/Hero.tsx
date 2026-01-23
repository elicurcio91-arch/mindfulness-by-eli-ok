
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-0 px-6 text-center relative overflow-hidden">
      {/* Background Clouds (Decorative) */}
      <div className="absolute top-32 left-10 w-24 h-8 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-10 bg-white/10 rounded-full blur-xl"></div>

      {/* Contenido Principal (Texto y CTA) - Z-Index Alto para estar por encima */}
      <div className="max-w-4xl mx-auto relative z-30 mb-8 md:mb-12">
        <h1 className="text-5xl md:text-[80px] font-bold mb-8 tracking-tight leading-[1.1]">
          Encontrá más <br/> alegría en la vida
        </h1>
        
        <a 
          href="https://calendly.com/elicurcio-91/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-brand-yellow text-black px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide hover:scale-105 transition-transform shadow-lg shadow-yellow-500/20 cursor-pointer"
        >
          Probalo gratis
        </a>
      </div>

      {/* Ilustración: Naive Nature MindTune */}
      <div className="relative z-10 w-full max-w-2xl mx-auto aspect-[16/11] flex items-end justify-center -mt-16 md:-mt-28 pointer-events-none">
         
        {/* Fondo Glow */}
        <div className="absolute bottom-0 w-full h-2/3 bg-white/10 blur-3xl rounded-full"></div>

        <div className="relative w-[360px] md:w-[480px] h-full flex items-end justify-center">
            
            {/* El Gran Arco Corporal - Rosa Suave y Orgánico */}
            <div className="relative w-full h-[300px] md:h-[380px]">
                
                {/* 1. La Estructura Principal (Cuerpo/Montaña) */}
                <div className="absolute bottom-0 inset-x-0 h-full bg-[#FF9EAF] rounded-t-[140px] md:rounded-t-[180px] flex justify-center items-end overflow-visible shadow-xl">
                   
                   {/* Cabeza (Head) encima del arco */}
                   <div className="absolute -top-12 w-28 h-32 bg-[#FF9EAF] rounded-[50px] z-20 flex flex-col items-center justify-center border-b-2 border-black/5">
                        {/* Pelo Rosa Oscuro */}
                        <div className="absolute -top-4 w-24 h-12 bg-[#D68497] rounded-full"></div>
                        {/* Cara Simple */}
                        <div className="flex gap-4 mt-2">
                            <div className="w-2 h-3 bg-[#884D5D] rounded-full opacity-60"></div>
                            <div className="w-2 h-3 bg-[#884D5D] rounded-full opacity-60"></div>
                        </div>
                   </div>

                   {/* El Portal Interior (Azul Oscuro/Místico) */}
                   <div className="relative z-10 w-32 md:w-44 h-44 md:h-56 bg-[#3B3B98] rounded-t-[80px] overflow-hidden flex items-end justify-center mb-0">
                       {/* Cielo interior */}
                       <div className="absolute inset-0 bg-gradient-to-b from-[#3B3B98] to-[#5B63D6]"></div>
                       {/* Luna/Sol interior */}
                       <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-8 bg-brand-yellow rounded-full blur-[2px]"></div>
                       
                       {/* Pequeño Personaje Entrando */}
                       <div className="relative z-20 mb-4 w-6 h-12 flex flex-col items-center animate-bounce duration-[3000ms]">
                           <div className="w-3 h-3 bg-white rounded-full mb-0.5"></div>
                           <div className="w-4 h-6 bg-white rounded-t-lg rounded-b-md"></div>
                           <div className="flex gap-1">
                               <div className="w-1 h-3 bg-white rounded-full"></div>
                               <div className="w-1 h-3 bg-white rounded-full"></div>
                           </div>
                       </div>
                   </div>

                   {/* 2. Vegetación Naive (Enredaderas Grandes) */}
                   {/* Enredadera Izquierda */}
                   <svg className="absolute bottom-0 left-0 w-1/2 h-full z-30 overflow-visible pointer-events-none">
                       {/* Tallo grueso y ondulado */}
                       <path d="M40 380 Q20 300 60 250 T80 150 Q90 100 60 50" fill="none" stroke="#6FCF97" strokeWidth="12" strokeLinecap="round" />
                       {/* Hojas Grandes Naive */}
                       <circle cx="60" cy="250" r="15" fill="#2D9C64" />
                       <circle cx="80" cy="150" r="12" fill="#6FCF97" stroke="#2D9C64" strokeWidth="3"/>
                       <path d="M80 150 L100 130" stroke="#6FCF97" strokeWidth="6" />
                       <circle cx="100" cy="130" r="10" fill="#2D9C64" />
                   </svg>

                   {/* Enredadera Derecha */}
                   <svg className="absolute bottom-0 right-0 w-1/2 h-full z-30 overflow-visible pointer-events-none">
                       <path d="M140 380 Q160 300 120 250 T100 150 Q90 80 120 40" fill="none" stroke="#6FCF97" strokeWidth="12" strokeLinecap="round" />
                       {/* Hojas/Flores */}
                       <circle cx="120" cy="250" r="14" fill="#2D9C64" />
                       {/* Flor Amarilla */}
                       <g transform="translate(120, 40)">
                           <circle r="15" fill="#FCD34D" />
                           <circle r="5" fill="#fff" />
                       </g>
                   </svg>

                   {/* Brotes en la cabeza */}
                   <div className="absolute top-[-50px] z-10 flex gap-2">
                       <div className="w-2 h-10 bg-[#6FCF97] rounded-full rotate-[-15deg] relative">
                           <div className="absolute -top-2 -left-2 w-4 h-4 bg-brand-yellow rounded-full"></div>
                       </div>
                       <div className="w-2 h-12 bg-[#6FCF97] rounded-full rotate-[10deg] relative -mt-2">
                           <div className="absolute -top-3 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                               <div className="w-2 h-2 bg-brand-yellow rounded-full"></div>
                           </div>
                       </div>
                   </div>

                </div>

                {/* Arbustos Base (Decoración Naive) */}
                <div className="absolute bottom-0 -left-12 w-32 h-20 bg-[#F59E0B] rounded-full z-0 opacity-90"></div>
                <div className="absolute bottom-0 -right-8 w-28 h-24 bg-[#3B3B98] rounded-full z-0"></div>
                
                {/* Piedras/Detalles suelo */}
                <div className="absolute bottom-4 left-10 w-4 h-2 bg-white/20 rounded-full z-20"></div>
                <div className="absolute bottom-6 right-20 w-6 h-3 bg-white/20 rounded-full z-20"></div>

            </div>
        </div>
      </div>

      <div className="mt-8 md:mt-16 text-center relative z-30 pb-20">
        <div className="inline-flex flex-col items-center gap-4">
          <div className="text-brand-yellow text-3xl animate-pulse">✦</div>
          <h2 className="text-3xl font-bold max-w-lg mx-auto leading-tight">
            Mindfulness para el cuerpo, <br/> mente y espíritu
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
