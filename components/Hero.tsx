
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-[80px] pb-[60px] px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-right"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(rgba(253,251,247,0.8), rgba(253,251,247,1))' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
        <div className="animate-fade-in flex flex-col items-center">
          <span className="micro-copy mb-6 inline-block text-primary">Acompañamiento 1:1 Online</span>

          <h1 className="mb-4 max-w-[90%] mx-auto text-[34px] font-bold leading-tight md:text-5xl">
            Regulá tu calma y <br className="hidden md:block" />
            <span className="text-primary/80">tu sistema nervioso.</span>
          </h1>

          <p className="text-[18px] text-gray-500 mb-7 max-w-2xl mx-auto font-medium leading-relaxed">
            Sesión guiada 1:1 para bajar ansiedad y sobrecarga mental
          </p>

          <div className="flex flex-col items-center gap-12 w-full">
            <div className="flex flex-col items-center gap-6 w-full">
              <a
                href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20reservar%20una%20charla%20gratuita."
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button h-[54px] flex items-center justify-center w-full max-w-[320px] rounded-full scale-110"
              >
                Quiero mi charla gratuita
              </a>
              <div className="flex flex-col items-center space-y-2">
                <span className="text-base text-gray-700 font-semibold text-center">
                  En 15 minutos identificamos qué te frena y te llevás claridad hoy.
                </span>
                <span className="text-sm text-gray-500 font-normal italic">
                  Gratis por Zoom • Sin compromiso
                </span>
              </div>
            </div>

            <div className="max-w-md glass p-8 rounded-3xl shadow-sm border border-white/40 mt-4">
              <div className="flex items-center justify-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed text-sm md:text-base mb-2">
                "En 15 minutos sentí una calma que no lograba hace meses. Eli transmite una paz increíble."
              </p>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Testimonio Real</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
