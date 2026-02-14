
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-32 px-6 overflow-hidden bg-[#F9F7F2]">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-right opacity-40 md:opacity-100"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(249, 247, 242, 1) 35%, rgba(249, 247, 242, 0.2)), url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="max-w-3xl">
          <h1 className="hero-title font-extrabold text-gray-900 mb-10 leading-[1.05] tracking-tight">
            Reducí tu estrés y <br /> calmá tu mente.
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-lg font-medium">
            Programa 1:1 de mindfulness ONLINE para reducir estrés, ansiedad y sobrecarga mental. <br className="hidden md:block" />
            <span className="text-gray-500 font-normal">Un espacio humano, cuidado y sin exigencias.</span>
          </p>

          <div className="flex flex-col items-start gap-4">
            <a
              href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20consultarte%20por%20la%20charla%20gratuita%20de%2015%20minutos."
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button w-full md:w-auto"
            >
              Reservar charla gratuita
            </a>
            <div className="flex flex-col gap-2 ml-1">
              <p className="text-gray-600 font-medium italic text-base">
                Acompañamiento humano y personalizado
              </p>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-400 font-semibold tracking-tight">
                  15 minutos por Zoom • Sin compromiso
                </span>
                <span className="text-[11px] text-emerald-600 uppercase tracking-[0.2em] font-extrabold opacity-80">
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
