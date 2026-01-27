
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
        <h1 className="text-5xl md:text-[80px] font-bold mb-8 tracking-tight leading-[1.1]">
          Encontrá más <br /> calma y bienestar en tu vida
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
            Programa de Mindfulness: <br /> gestión de estrés y ansiedad
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-4 opacity-90">
            Transformá tu estrés y ansiedad en 4 semanas. Aprendé a gestionar eficazmente el estrés, calmá tu mente para dormir profundo, optimizá tu tiempo y recuperá el control de tus emociones. Un programa personalizado para vos.
          </p>

          {/* CTA Button */}
          <a
            href="https://calendly.com/elicurcio-91/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-yellow text-black px-8 py-4 rounded-full font-bold text-base uppercase tracking-wide hover:scale-105 transition-transform shadow-lg shadow-yellow-500/20 cursor-pointer mt-6"
          >
            Agendá tu charla gratuita de 15 minutos
          </a>

          {/* Explanatory Text */}
          <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed mt-4 opacity-80">
            En esta breve conversación personalizada, descubriremos tus desafíos de estrés y ansiedad, responderé tus dudas y te contaré cómo el Programa de Mindfulness: gestión de estrés y ansiedad de 4 semanas puede ser la solución que buscás.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
