import React from 'react';

const NoiseSection: React.FC = () => {
  const experiences = [
    {
      text: 'Estás físicamente en un lugar, pero tu cabeza ya se fue tres pasos adelante.',
      icon: (
        <svg className="w-5 h-5 text-[#9a9590]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      className: 'md:col-start-1 md:col-end-3 md:translate-y-4',
    },
    {
      text: 'Mirás el celular sin saber muy bien qué estás buscando.',
      icon: (
        <svg className="w-5 h-5 text-[#9a9590]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      className: 'md:col-start-3 md:col-end-5 md:-translate-y-6',
    },
    {
      text: 'Respondés desde la tensión casi sin darte cuenta.',
      icon: (
        <svg className="w-5 h-5 text-[#9a9590]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      className: 'md:col-start-2 md:col-end-4 md:translate-y-8',
    },
    {
      text: 'El cansancio se acumula en los hombros y el día se siente como una maratón constante.',
      icon: (
        <svg className="w-5 h-5 text-[#9a9590]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      className: 'md:col-start-1 md:col-end-5 md:translate-y-2 max-w-xl mx-auto',
    },
  ];

  return (
    <section className="relative bg-[#1a1a1f] text-[#e8e4df] py-24 md:py-32 overflow-hidden px-6 lg:px-24">
      {/* Background Textures & Floating Thought Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        {/* Drifting thoughts representation */}
        <div className="absolute top-[20%] left-[10%] text-[11px] md:text-xs text-[#9a9590]/25 tracking-widest uppercase font-mono thought-drift-1 select-none">
          ¿tengo que mandar ese mail?
        </div>
        <div className="absolute top-[45%] right-[15%] text-[11px] md:text-xs text-[#9a9590]/20 tracking-widest uppercase font-mono thought-drift-2 select-none">
          qué compro para la cena
        </div>
        <div className="absolute bottom-[25%] left-[20%] text-[11px] md:text-xs text-[#9a9590]/25 tracking-widest uppercase font-mono thought-drift-3 select-none">
          mañana tengo que...
        </div>
        <div className="absolute bottom-[35%] right-[8%] text-[11px] md:text-xs text-[#9a9590]/15 tracking-widest uppercase font-mono thought-drift-1 select-none">
          llegar a tiempo
        </div>

        {/* Ambient background glows */}
        <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] bg-[#9a9590]/5 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#9a9590]/3 rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs md:text-sm tracking-[0.2em] text-[#9a9590] uppercase font-semibold block mb-4">
            SECCIÓN 02 — EL RUIDO DIARIO
          </span>
          <h2 className="font-editorial text-3xl md:text-5xl lg:text-6xl text-[#e8e4df] leading-tight mb-6">
            El ruido en el que vivimos
          </h2>
          <p className="text-sm md:text-base text-[#9a9590] max-w-lg mx-auto font-light leading-relaxed">
            No se trata de un gran problema excepcional. Es la acumulación silenciosa de lo cotidiano, esa inercia que nos va empujando casi sin darnos cuenta.
          </p>
        </div>

        {/* Scattered/Asymmetric Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-20">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`glass-dark p-6 md:p-8 rounded-2xl border border-white/[0.04] bg-white/[0.02] flex flex-col justify-between space-y-6 hover:border-white/[0.08] hover:bg-white/[0.04] transition-all duration-500 group ${exp.className}`}
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.03] flex items-center justify-center group-hover:bg-[#4A7C59]/10 group-hover:text-[#4A7C59] transition-all duration-500">
                {exp.icon}
              </div>
              <p className="text-base md:text-lg text-[#e8e4df] font-light leading-relaxed">
                {exp.text}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic Transition Prompter / Scroll Indicator */}
        <div className="flex flex-col items-center justify-center text-center mt-12 md:mt-24 space-y-4">
          <span className="text-[15px] text-[#9a9590] font-light tracking-wide italic">
            ¿Te identificás con alguno de estos momentos?
          </span>
          <div className="flex flex-col items-center space-y-2 pt-4">
            <span className="text-xs text-[#9a9590]/60 tracking-[0.15em] uppercase font-mono">
              Hacer una pausa
            </span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#9a9590]/50 to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoiseSection;
