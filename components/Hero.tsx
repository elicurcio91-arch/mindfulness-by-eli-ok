
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-24 pb-24 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-right"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(rgba(255,255,255,.85), rgba(255,255,255,1))' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[44px] md:text-[80px] font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Reducí tu estrés y <br className="hidden md:block" /> calmá tu mente.
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Sesión guiada 1:1 para bajar ansiedad y sobrecarga mental.
          </p>

          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-4 w-full">
              <a
                href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20reservar%20una%20charla%20gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button px-10 py-5"
              >
                Quiero mi charla gratuita
              </a>
              <div className="flex flex-col items-center space-y-1">
                <span className="text-sm text-gray-700 font-bold">
                  En 15 minutos entendemos qué te pasa y te llevás claridad para sentirte mejor hoy.
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  Gratis por Zoom • Sin compromiso
                </span>
              </div>
            </div>

            <div className="max-w-md bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/80 shadow-sm relative">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">✔ Testimonio real</span>
              <p className="text-gray-700 italic leading-relaxed text-sm md:text-base">
                Hoy tuve mi primera charla con Eli y en 15 minutos sentí una calma que no lograba hace meses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
