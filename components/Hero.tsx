
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
          style={{ background: 'linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.75))' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-[1.05] tracking-tight">
            Reducí tu estrés y <br /> calmá tu mente.
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-lg font-medium">
            Programa 1:1 de mindfulness ONLINE para reducir estrés, ansiedad y sobrecarga mental. <br className="hidden md:block" />
            <span className="text-gray-500 font-normal">Un espacio humano, cuidado y sin exigencias.</span>
          </p>

          <div className="flex flex-col items-start gap-1">

            <div className="flex flex-col md:flex-row items-center gap-4">
              <a
                href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20conversar%20con%20vos%20ahora."
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button w-full md:w-auto"
              >
                Hablar conmigo ahora
              </a>
              <a
                href="#proceso"
                className="w-full md:w-auto px-6 py-3.5 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold text-center hover:bg-slate-50 transition-all"
              >
                Cómo funciona
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-1 ml-1">
              <div className="flex flex-col gap-2">
                <span className="text-sm text-gray-700 font-bold tracking-tight">
                  15 minutos por Zoom • Sin compromiso real
                </span>
                <span className="text-[10px] text-emerald-600 uppercase tracking-[0.2em] font-extrabold opacity-90">
                  100% online • Horarios flexibles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
