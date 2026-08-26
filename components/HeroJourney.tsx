import React from 'react';

const HeroJourney: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#1a1a1f] text-[#e8e4df] flex flex-col justify-between overflow-hidden section-noise select-none">
      {/* Background Subtle Noise Overlay (Uses inline SVG to guarantee rendering without dependencies) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Soft color glows representing mental strain / heat */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-red-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-slate-900/50 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Thoughts representing a busy mind */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <span className="absolute text-sm md:text-base text-[#9a9590]/40 thought-drift-1 top-[18%] left-[6%] max-w-[200px] md:max-w-xs text-left italic">
          "Tengo que terminar esto antes de las 6..."
        </span>
        
        <span className="absolute text-sm md:text-base text-[#9a9590]/35 thought-drift-2 top-[28%] right-[8%] max-w-[220px] md:max-w-xs text-right italic">
          "¿Por qué siempre estoy corriendo?"
        </span>
        
        <span className="absolute text-sm md:text-base text-[#9a9590]/30 thought-drift-3 bottom-[32%] left-[8%] max-w-[240px] md:max-w-xs text-left italic">
          "Tengo el cuerpo acá pero mi cabeza ya se fue..."
        </span>
        
        <span className="absolute text-sm md:text-base text-[#9a9590]/35 thought-drift-1 bottom-[20%] right-[10%] max-w-[220px] md:max-w-xs text-right italic">
          "Mañana va a ser un día larguísimo..."
        </span>

        <span className="absolute text-xs md:text-sm text-[#9a9590]/25 thought-drift-3 top-[48%] left-[72%] max-w-[180px] md:max-w-xs text-left italic">
          "¿Qué era lo que tenía que comprar?"
        </span>
      </div>

      {/* Header/Logo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 md:py-8 flex items-center justify-between">
        <img 
          src="/logo.png" 
          alt="Mindfulness by Eli" 
          className="h-10 md:h-12 w-auto object-contain opacity-95 transition-opacity hover:opacity-100" 
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 my-auto w-full max-w-4xl mx-auto px-6 py-12 md:py-16 flex flex-col items-center text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#9a9590] mb-4 block animate-fade-in">
          Paso 1: Volvé a vos
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-editorial text-balance leading-none mb-6 animate-fade-in-up text-[#e8e4df]">
          Volvé a vos.
        </h1>
        
        <p className="text-lg md:text-xl text-[#9a9590] max-w-2xl mx-auto leading-relaxed mb-10 text-balance animate-fade-in-up delay-200">
          Un espacio para pausar el ruido mental y volver a habitar el presente.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md sm:max-w-none mx-auto animate-fade-in-up delay-300">
          <a
            href="#pausa"
            className="btn-primary w-full sm:w-auto text-center"
          >
            Probá una pausa de 60 segundos
          </a>
          <a
            href="#practica"
            className="btn-outline-light w-full sm:w-auto text-center"
          >
            Ver cómo es la práctica
          </a>
        </div>
      </div>

      {/* Indicator showing flow down */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex flex-col items-center justify-center animate-fade-in-slow delay-500">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#9a9590]/50 mb-2">Deslizá para iniciar la transición</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#9a9590]/40 to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroJourney;
