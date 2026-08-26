import React from 'react';

const ReframeSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-[#FDFBF7] py-24 md:py-36 px-6 lg:px-24">
      {/* Background soft ambient lights to add depth and quality */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Editorial Section Header */}
        <div className="text-center mb-16 md:mb-24 animate-fade-in">
          <span className="text-emerald-400 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase block mb-4">
            EL REENFOQUE
          </span>
          <h2 className="font-editorial text-4xl md:text-6xl text-white font-light tracking-wide leading-tight max-w-3xl mx-auto">
            Mindfulness no es escapar de la vida
          </h2>
          <div className="w-16 h-[1px] bg-emerald-500/50 mx-auto mt-8"></div>
        </div>

        {/* Contrast Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-20 md:mb-32">
          
          {/* Column 1: Misconceptions (Dark Slate Card) */}
          <div className="glass-dark p-8 md:p-10 rounded-[32px] border border-white/10 hover:border-white/20 transition-all duration-500">
            <h3 className="font-heading text-slate-400 text-xs tracking-[0.15em] uppercase mb-8 font-medium">
              Lo que solemos creer
            </h3>
            
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/15 border border-red-500/35 flex items-center justify-center text-red-400 font-light text-sm mt-1">
                  ✕
                </span>
                <div>
                  <p className="text-slate-200 text-[17px] md:text-lg font-light leading-relaxed">
                    No se trata de poner la mente en blanco.
                  </p>
                  <span className="text-slate-400 text-xs block mt-1">
                    Intentar callar los pensamientos a la fuerza solo genera frustración.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/15 border border-red-500/35 flex items-center justify-center text-red-400 font-light text-sm mt-1">
                  ✕
                </span>
                <div>
                  <p className="text-slate-200 text-[17px] md:text-lg font-light leading-relaxed">
                    No se trata de estar en una calma perfecta todo el tiempo.
                  </p>
                  <span className="text-slate-400 text-xs block mt-1">
                    La calma rígida no es real; la vida tiene fluctuaciones naturales.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/15 border border-red-500/35 flex items-center justify-center text-red-400 font-light text-sm mt-1">
                  ✕
                </span>
                <div>
                  <p className="text-slate-200 text-[17px] md:text-lg font-light leading-relaxed">
                    Tampoco de escapar de los días difíciles.
                  </p>
                  <span className="text-slate-400 text-xs block mt-1">
                    No es una burbuja de desconexión para ignorar lo que pasa afuera.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2: The Real Essence (Light Cream Card) */}
          <div className="bg-[#fcf8f2] p-8 md:p-10 rounded-[32px] border border-[#eee6db] shadow-xl hover:shadow-2xl transition-all duration-500 md:translate-y-8">
            <h3 className="font-heading text-emerald-800 text-xs tracking-[0.15em] uppercase mb-8 font-medium">
              El enfoque de Eli
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm mt-1">
                  ✓
                </span>
                <div>
                  <h4 className="text-slate-900 text-xl font-medium mb-2 leading-snug">
                    Habitar el momento presente
                  </h4>
                  <p className="text-slate-700 text-base md:text-lg font-light leading-relaxed">
                    Es aprender a notar lo que te está pasando en el momento y tener la posibilidad de elegir cómo responder.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#eee6db] pt-6 mt-6">
                <p className="text-slate-600 text-sm italic font-light leading-relaxed">
                  "El mindfulness nos entrena para volver a nosotros con amabilidad, sin juzgar la experiencia, sino entendiéndola."
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Central Quote Block - Transitions text to dark to match light background */}
        <div className="text-center max-w-3xl mx-auto pt-12 md:pt-16 pb-6">
          <span className="text-[#6b6560] text-xs font-semibold tracking-[0.25em] uppercase block mb-6">
            LA ESENCIA
          </span>
          <blockquote className="font-editorial text-2xl md:text-4xl text-[#2a2520] italic font-light leading-relaxed px-4 md:px-8">
            "Se trata menos de cambiar de personalidad y más de aprender a frenar un segundo antes de reaccionar."
          </blockquote>
          <div className="w-12 h-[1px] bg-[#6b6560]/30 mx-auto mt-8"></div>
        </div>

      </div>
    </section>
  );
};

export default ReframeSection;
