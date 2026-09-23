import React, { useEffect, useState } from 'react';
import HeroWaitlist from '../HeroWaitlist';
import TheProblem from '../TheProblem';
import WhatIsIt from '../WhatIsIt';
import HowItWorks from '../HowItWorks';
import WhatWeExplore from '../WhatWeExplore';
import WhoIsThisFor from '../WhoIsThisFor';
import WaitlistForm from '../WaitlistForm';
import AboutInstructor from '../AboutInstructor';
import FinalCta from '../FinalCTA';
import { handleNavClick, ROUTES } from '../site/navigate';

const PersonasPage: React.FC = () => {
  const [hideSticky, setHideSticky] = useState(false);

  useEffect(() => {
    const form = document.getElementById('waitlist-form');
    if (!form) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHideSticky(entry.isIntersecting),
      { threshold: 0.35 }
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-[#F5F3EF] border-b border-[#E8ECE9] px-6 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[#8DA396] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-5 block">
            Para personas
          </span>
          <h1 className="font-editorial text-4xl md:text-6xl text-charcoal leading-tight mb-5">
            Calma y presencia, para vos
          </h1>
          <p className="text-lg md:text-xl text-[#5A5A5A] font-light leading-relaxed max-w-2xl mx-auto">
            Un espacio para bajar el ritmo, entrenar la atención y volver a estar presente.
            El próximo encuentro es el workshop de octubre.
          </p>
        </div>

        <div className="max-w-xl mx-auto mt-10 bg-white border border-[#E8ECE9] rounded-sm p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] text-center">
          <span className="text-[#8DA396] text-xs font-semibold tracking-[0.18em] uppercase">
            Próximo encuentro
          </span>
          <h2 className="font-editorial text-3xl md:text-4xl text-charcoal mt-3 mb-3 leading-tight">
            Cómo salir del piloto automático
          </h2>
          <p className="text-[#5A5A5A] mb-2">
            Estrés y autoexigencia
          </p>
          <p className="text-sm text-[#828282] mb-8">
            Sábado 3 de octubre · 10:00 h Argentina · Online · 90 min
          </p>
          <a
            href={ROUTES.workshop}
            onClick={(event) => handleNavClick(event, ROUTES.workshop)}
            className="btn-primary"
          >
            Ver workshop e inscribirme
          </a>
        </div>
      </section>

      <section className="bg-off-white px-6 py-12 md:py-16 border-b border-[#E8ECE9]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-4 items-start">
            <figure className="md:col-span-3">
              <div className="aspect-[6/5] overflow-hidden rounded-sm bg-[#E8ECE9]">
                <img
                  src="/eli-facilitando-pantalla.jpg"
                  alt="Eli facilitando un encuentro presencial"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </figure>
            <figure className="md:col-span-2">
              <div className="aspect-[3/2] overflow-hidden rounded-sm bg-[#E8ECE9]">
                <img
                  src="/eli-facilitando-grupo.jpg"
                  alt="Eli facilitando un encuentro, sentada con el grupo"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </figure>
          </div>
          <p className="mt-4 text-sm text-[#5A5A5A]">
            Eli facilitando encuentros presenciales.
          </p>
        </div>
      </section>

      <HeroWaitlist />
      <TheProblem />
      <WhatIsIt />
      <HowItWorks />
      <WhatWeExplore />
      <WhoIsThisFor />
      <WaitlistForm />
      <AboutInstructor />
      <FinalCta />

      <div className="h-20 md:hidden" aria-hidden="true" />

      <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-[#E8ECE9] md:hidden z-50 flex justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 ${hideSticky ? 'translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
        <a
          href={ROUTES.workshop}
          onClick={(event) => handleNavClick(event, ROUTES.workshop)}
          className="btn-primary w-full text-center"
        >
          Ver el workshop
        </a>
      </div>
    </>
  );
};

export default PersonasPage;
