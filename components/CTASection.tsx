
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="relative bg-brand-blue pt-40 pb-48 overflow-hidden">

      {/* Nubes decorativas superiores */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>

      {/* Cloud Divider Bottom - Transición limpia hacia el footer */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto block">
          <path fill="#5B63D6" fillOpacity="0.5" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path fill="#5B63D6" fillOpacity="1" d="M0,256L60,245.3C120,235,240,213,360,218.7C480,224,600,256,720,266.7C840,277,960,267,1080,240C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-[100px] font-bold mb-8 tracking-tight leading-[0.9]">
          Descubrí el <br /> mindfulness
        </h2>

        <p className="text-xl md:text-2xl font-medium mb-10 opacity-90 max-w-2xl mx-auto">
          ¿Todavía tenés dudas? <br />
          Estoy acá para ayudarte. Podés escribirme y te respondo personalmente.
        </p>

        <a
          href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20que%20me%20cuentes%20m%C3%A1s%20sobre%20el%20Programa%20de%20Mindfulness:%0Agesti%C3%B3n%20de%20estr%C3%A9s%20y%20ansiedad.%20"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-yellow text-black px-12 py-5 rounded-full font-bold text-lg uppercase tracking-wide hover:scale-105 transition-transform shadow-lg cursor-pointer"
        >
          hablemos por whatsapp
        </a>
      </div>
    </section>
  );
};

export default CTASection;
