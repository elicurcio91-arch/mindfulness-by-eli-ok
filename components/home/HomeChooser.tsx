import React from 'react';
import { handleNavClick, ROUTES } from '../site/navigate';

const paths = [
  {
    href: ROUTES.personas,
    eyebrow: 'Individual',
    title: 'Para personas',
    description: 'El workshop de octubre y un recorrido para practicar con más calma.',
  },
  {
    href: ROUTES.empresas,
    eyebrow: 'Equipos',
    title: 'Para empresas',
    description: 'Workshops online para bajar el estrés y la autoexigencia en el trabajo.',
  },
] as const;

const HomeChooser: React.FC = () => {
  return (
    <section className="relative overflow-hidden flex-1 flex items-center px-6 py-16 md:py-24">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#F5F3EF] blur-[100px] opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center animate-fade-in">
        <img src="/logo.png" alt="" className="h-12 w-12 mx-auto mb-8" />

        <h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight mb-6">
          Mindfulness by Eli
        </h1>

        <p className="text-xl md:text-2xl text-[#5A5A5A] font-light leading-relaxed max-w-2xl mx-auto mb-12">
          Calma y presencia, para vos o para tu equipo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left">
          {paths.map((path) => (
            <a
              key={path.href}
              href={path.href}
              onClick={(event) => handleNavClick(event, path.href)}
              className="group bg-white border border-[#E8ECE9] rounded-sm p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:border-[#8DA396] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8DA396]"
            >
              <span className="text-[#8DA396] text-xs font-semibold tracking-[0.18em] uppercase">
                {path.eyebrow}
              </span>
              <h2 className="font-editorial text-3xl md:text-4xl text-charcoal mt-3 mb-4">
                {path.title}
              </h2>
              <p className="text-[#5A5A5A] leading-relaxed mb-8">
                {path.description}
              </p>
              <span className="text-sm font-medium tracking-[0.08em] uppercase text-charcoal group-hover:text-[#8DA396] transition-colors">
                {path.title} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeChooser;
