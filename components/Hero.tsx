
import React from 'react';
import MeditationAnimation from './MeditationAnimation';

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-0 px-6 text-center relative overflow-hidden">
      {/* Background Clouds (Decorative) */}
      <div className="absolute top-32 left-10 w-24 h-8 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-10 bg-white/10 rounded-full blur-xl"></div>

      {/* Contenido Principal (Texto) - Z-Index Alto para estar por encima */}
      <div className="max-w-4xl mx-auto relative z-30 mb-8 md:mb-12">
        <h1 className="text-4xl md:text-[80px] font-bold mb-8 tracking-tight leading-[1.1]">
          Acompañamiento personalizado para <br /> gestionar el estrés y la ansiedad.
        </h1>
      </div>

      {/* Ilustración: Animación de Meditación */}
      <div className="relative z-0 w-full max-w-2xl mx-auto mt-4 md:mt-8">
        <MeditationAnimation />
      </div>

      <div className="mt-8 md:mt-16 text-center relative z-30 pb-20">
        <div className="inline-flex flex-col items-center gap-4">
          <div className="text-brand-yellow text-3xl animate-pulse">✦</div>
          <h2 className="text-3xl font-bold max-w-lg mx-auto leading-tight">
            Encontrá más calma y bienestar en tu vida
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-4 opacity-90">
            Transformá tu estrés y ansiedad en 4 semanas.
          </p>

          {/* CTA Button */}
          <a
            href="https://calendly.com/elicurcio-91/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:scale-105 transition-transform shadow-lg shadow-yellow-500/20 cursor-pointer mt-6"
          >
            <span className="block text-lg">AGENDÁ TU CHARLA</span>
            <span className="block text-[10px] lowercase font-normal opacity-80 mt-1">gratuitita de 15 minutos</span>
          </a>

          {/* Explanatory Text */}
          <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-4 opacity-80">
            En esta charla gratuita de 15 minutos hablamos de lo que hoy te está generando estrés, vemos qué necesitás y te cuento cómo puedo acompañarte durante 4 semanas para que recuperes calma y claridad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
