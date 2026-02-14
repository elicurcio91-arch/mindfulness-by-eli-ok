
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 px-6 overflow-hidden">
      {/* Background Image Placeholder - To be replaced by generated image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-right"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(249, 247, 242, 0.95) 30%, rgba(249, 247, 242, 0.4)), url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-[1.1]">
            Reducí tu estrés y <br /> calmá tu mente.
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-xl">
            Programa 1:1 de mindfulness ONLINE para reducir estrés, ansiedad y sobrecarga mental. <br />
            <span className="font-medium opacity-80">Un espacio humano, cuidado y sin exigencias.</span>
          </p>

          <div className="flex flex-col items-start gap-4">
            <a
              href="https://calendly.com/elicurcio-91/"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button text-lg w-full md:w-auto"
            >
              Agendar charla gratuita
            </a>
            <div className="flex flex-col gap-1 ml-1">
              <span className="text-sm text-gray-500 font-medium tracking-tight">
                15 minutos por Zoom • Sin compromiso
              </span>
              <span className="text-[12px] text-gray-400 uppercase tracking-widest font-bold">
                100% online • Horarios flexibles
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
