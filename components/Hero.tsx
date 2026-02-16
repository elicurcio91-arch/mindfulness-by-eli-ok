
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
        <div className="max-w-3xl">
          <h1 className="text-[54px] md:text-[80px] font-bold text-gray-900 mb-8 leading-[1.05] tracking-tight">
            Reducí tu estrés y <br /> calmá tu mente.
          </h1>

          <p className="text-base md:text-lg text-gray-700 mb-12 leading-relaxed max-w-lg font-medium">
            Sesión guiada 1:1 para bajar ansiedad y sobrecarga mental.
          </p>

          <div className="flex flex-col items-center md:items-start gap-12">
            <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
              <a
                href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20reservar%20una%20charla%20gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button w-full md:w-auto px-10 py-5"
              >
                Reservar charla gratuita
              </a>
              <div className="flex flex-col items-center md:items-start space-y-1">
                <span className="text-sm text-gray-600 font-bold">
                  En 15 minutos entendemos qué te pasa y qué hacer.
                </span>
                <span className="text-xs text-gray-500 font-medium italic">
                  Gratis por Zoom • Sin compromiso
                </span>
              </div>
            </div>

            <div className="max-w-md bg-white/40 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-sm relative">
              <p className="text-gray-700 italic leading-relaxed text-sm md:text-base">
                "Hoy tuve mi primer charla con Eli y mi día cambió. En 15 minutos logré una calma que no sentía hace mucho."
              </p>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" /></svg>
                </div>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Testimonio real</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
