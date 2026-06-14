
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-start pt-[100px] pb-[60px] px-6 lg:px-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-[position:center_15%] md:bg-[position:70%_15%]"
        style={{
          backgroundImage: 'url("/hero-bg.png")'
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-left text-white md:ml-12 lg:ml-24">
        <div className="animate-fade-in flex flex-col items-start">
          
          <img src="/logo.png" alt="Mindfulness by Eli" className="w-24 h-auto mb-8" />

          <h1 className="mb-4 text-[28px] font-bold tracking-wider uppercase leading-tight md:text-5xl text-white drop-shadow-md">
            Mindfulness para la vida real
          </h1>

          <p className="text-[18px] md:text-[22px] text-white/95 mb-10 max-w-xl font-medium leading-relaxed drop-shadow-md">
            Para mujeres que quieren salir del piloto automático y empezar a vivir de verdad.
          </p>

          <a
            href="#services"
            className="primary-button h-[54px] flex items-center justify-center w-full max-w-[320px] rounded-full shadow-xl border border-white/20 text-lg hover:scale-105 transition-transform origin-left"
          >
            Quiero comenzar
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
