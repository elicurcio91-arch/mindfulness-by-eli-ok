
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
          style={{ background: 'linear-gradient(rgba(255,255,255,.75), rgba(255,255,255,.9))' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-[1.05] tracking-tight">
            Reducí tu estrés y <br /> calmá tu mente.
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-lg font-medium">
            Sesión guiada 1:1 para bajar ansiedad y sobrecarga mental.
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto">
              <a
                href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20reservar%20una%20charla%20gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button w-full md:w-auto"
              >
                Reservar charla gratuita
              </a>
              <span className="text-sm text-gray-600 font-medium">
                15 minutos por Zoom • Sin compromiso
              </span>
            </div>

            <a
              href="#proceso"
              className="w-full md:w-auto px-6 py-3.5 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold text-center hover:bg-slate-50 transition-all opacity-70 shadow-none"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
