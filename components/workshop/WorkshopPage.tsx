import React, { useEffect } from 'react';

const WHATSAPP_NUMBER = "541121829771";
const WHATSAPP_MESSAGE = "Hola Eli, vi el workshop “Estrés y autoexigencia: cómo salir del piloto automático” y quiero reservar mi lugar. ¿Me pasás la información para inscribirme?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const WorkshopPage: React.FC = () => {
  useEffect(() => {
    document.title = "Estrés y autoexigencia: Cómo salir del piloto automático | Workshop Online con Eli";
    window.scrollTo(0, 0);
  }, []);

  const handleNavigateHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('popstate'));
  };

  return (
    <div className="font-sans antialiased text-[#2D2D2D] bg-[#FAFAFA] min-h-screen selection:bg-[#8DA396]/20">
      
      {/* Header / Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E8ECE9]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a 
            href="/" 
            onClick={handleNavigateHome}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Ir a inicio"
          >
            <img src="/logo.png" alt="Mindfulness by Eli" className="h-8 w-auto transition-transform group-hover:scale-105" />
            <span className="font-editorial text-lg text-charcoal tracking-wide hidden sm:inline">
              Mindfulness by Eli
            </span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center text-xs font-semibold uppercase tracking-widest text-[#5A5A5A] hover:text-[#8DA396] transition-colors"
          >
            Reservar lugar →
          </a>
        </div>
      </header>

      <main className="pb-16 md:pb-0">
        
        {/* 1. HERO SECTION - Reduced vertical spacing, exact photo & composition */}
        <section className="relative bg-[#F5F3EF] border-b border-[#E8ECE9] pt-6 pb-10 md:pt-10 md:pb-14 lg:pt-12 lg:pb-16 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col items-start z-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E8ECE9] text-[#5A5A5A] text-xs font-semibold tracking-wider uppercase mb-4">
                Workshop Online · En vivo
              </div>

              <span className="text-[#8DA396] font-semibold text-xs sm:text-sm uppercase tracking-widest block mb-1">
                Estrés y autoexigencia
              </span>

              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.15] mb-5">
                Cómo salir del piloto automático
              </h1>

              <div className="space-y-3 text-[#5A5A5A] text-base sm:text-lg leading-relaxed mb-6 max-w-2xl">
                <p>
                  Una experiencia práctica para mujeres que sienten que están todo el día resolviendo, pensando en lo que sigue y a las que incluso descansar les cuesta.
                </p>
                <p>
                  Un encuentro para entender qué está pasando y empezar a relacionarte de otra manera con el estrés y la autoexigencia.
                </p>
              </div>

              {/* Event Metadata */}
              <div className="w-full bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#E8ECE9] shadow-sm mb-6 space-y-2">
                <div className="flex flex-wrap items-center gap-y-1 text-sm sm:text-base text-charcoal font-medium">
                  <div className="flex items-center gap-2 mr-6">
                    <span className="w-2 h-2 rounded-full bg-[#8DA396]"></span>
                    <span>Sábado 3 de octubre</span>
                  </div>
                  <div className="text-[#5A5A5A]">
                    10:00 h Argentina · 8:00 h Colombia · 7:00 h Ciudad de México
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E8ECE9]/60 flex flex-wrap items-center justify-between text-xs sm:text-sm text-[#5A5A5A] gap-2">
                  <span>Online · En vivo · 90 minutos</span>
                  <span className="font-semibold text-charcoal bg-[#E8ECE9]/70 px-2.5 py-0.5 rounded">ARS 30.000</span>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto text-center shadow-md hover:shadow-lg"
              >
                QUIERO RESERVAR MI LUGAR
              </a>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 relative w-full flex justify-center items-center">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <img
                  src="/hero principal workshop.png"
                  alt="Eli facilitando una experiencia de mindfulness"
                  className="w-full h-full object-cover object-top sm:object-[center_20%] lg:object-center"
                />
              </div>
            </div>

          </div>
        </section>

        {/* 2. SECCIÓN "¿TE PASA QUE...?" - Editorial list, no boxed cards */}
        <section className="py-14 md:py-20 px-6 bg-[#FAFAFA]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-editorial text-3xl sm:text-4xl text-charcoal text-center mb-10">
              ¿Te pasa que...?
            </h2>

            <div className="divide-y divide-[#E8ECE9] mb-10">
              {[
                "Terminás algo y tu cabeza ya está pensando en lo siguiente.",
                "Tenés un rato libre, pero enseguida aparece algo que podrías hacer.",
                "Te cuesta descansar sin sentir que deberías estar aprovechando el tiempo.",
                "Aunque las cosas salgan bien, pensás en lo que podrías haber hecho mejor.",
                "Estás con otras personas, pero una parte de tu cabeza sigue ocupada con pendientes."
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="py-4 sm:py-5 flex items-start gap-4"
                >
                  <span className="text-[#8DA396] font-editorial text-xl font-medium leading-none select-none mt-0.5">
                    —
                  </span>
                  <p className="text-[#5A5A5A] text-base sm:text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Closing text - Editorial & light */}
            <div className="text-center pt-6 border-t-2 border-[#8DA396]/30 max-w-xl mx-auto space-y-2">
              <p className="text-lg sm:text-xl font-editorial text-charcoal">
                No necesariamente tenés que hacer menos.
              </p>
              <p className="text-base sm:text-lg text-[#5A5A5A] font-light">
                Quizás necesitás entender qué sucede en vos mientras hacés todo eso.
              </p>
            </div>
          </div>
        </section>

        {/* NUEVA SECCIÓN: "¿CÓMO ES EL ENCUENTRO?" - Simple & light editorial */}
        <section className="py-12 md:py-16 px-6 bg-[#F5F3EF] border-y border-[#E8ECE9]">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-editorial text-3xl sm:text-4xl text-charcoal">
              ¿Cómo es el encuentro?
            </h2>

            <p className="font-editorial text-xl sm:text-2xl text-charcoal leading-snug">
              Es un workshop práctico y participativo de 90 minutos.
            </p>

            <p className="text-[#5A5A5A] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Vamos a combinar explicación, ejercicios y prácticas breves de mindfulness para que puedas reconocer cómo funciona tu piloto automático y empezar a observarlo en situaciones concretas de tu vida.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-[#828282] font-medium">
              <span>No es una clase teórica.</span>
              <span className="hidden sm:inline text-[#D1D1D1]">|</span>
              <span>Tampoco necesitás saber meditar.</span>
            </div>
          </div>
        </section>

        {/* 3. SECCIÓN "¿QUÉ VAMOS A TRABAJAR?" - Clean editorial layout */}
        <section className="py-14 md:py-20 px-6 bg-[#FAFAFA]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-editorial text-3xl sm:text-4xl text-charcoal mb-4">
                ¿Qué vamos a trabajar?
              </h2>
              <p className="text-base sm:text-lg text-[#5A5A5A] leading-relaxed">
                Durante el workshop vamos a observar cómo funciona el piloto automático y qué relación tiene con el estrés y la autoexigencia.
              </p>
            </div>

            {/* Editorial numbered list */}
            <div className="space-y-6 mb-10">
              {[
                "Cómo reconocer patrones de pensamiento y reacción.",
                "Qué pasa cuando actuamos automáticamente frente a lo que aparece en nuestra cabeza.",
                "Cómo el estrés puede mantenerse incluso cuando no estamos haciendo nada.",
                "Prácticas sencillas de mindfulness para llevar a situaciones cotidianas.",
                "Cómo generar un espacio entre lo que aparece y la respuesta que elegimos."
              ].map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 pb-5 border-b border-[#E8ECE9]"
                >
                  <span className="font-editorial text-2xl text-[#8DA396] font-normal leading-none select-none min-w-[32px]">
                    0{index + 1}
                  </span>
                  <p className="text-charcoal text-base sm:text-lg font-medium leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            {/* Clarification Note - Light text */}
            <div className="text-center text-sm text-[#5A5A5A] font-medium py-2">
              No necesitás experiencia previa en mindfulness ni meditación.
            </div>
          </div>
        </section>

        {/* 4. SECCIÓN "¿QUÉ TE LLEVÁS?" - Specific takeaways, lightweight blocks */}
        <section className="py-14 md:py-20 px-6 bg-[#F5F3EF] border-t border-[#E8ECE9]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-editorial text-3xl sm:text-4xl text-charcoal text-center mb-12">
              ¿Qué te llevás?
            </h2>

            <div className="space-y-8">
              {/* Point 1 */}
              <div className="pl-6 border-l-2 border-[#8DA396] space-y-1">
                <span className="text-charcoal font-semibold text-lg sm:text-xl block">
                  Vas a poder reconocer
                </span>
                <p className="text-[#5A5A5A] text-base sm:text-lg leading-relaxed">
                  qué situaciones y pensamientos suelen activar tu piloto automático.
                </p>
              </div>

              {/* Point 2 */}
              <div className="pl-6 border-l-2 border-[#8DA396] space-y-1">
                <span className="text-charcoal font-semibold text-lg sm:text-xl block">
                  Vas a aprender a observar
                </span>
                <p className="text-[#5A5A5A] text-base sm:text-lg leading-relaxed">
                  lo que aparece antes de reaccionar automáticamente.
                </p>
              </div>

              {/* Point 3 */}
              <div className="pl-6 border-l-2 border-[#8DA396] space-y-1">
                <span className="text-charcoal font-semibold text-lg sm:text-xl block">
                  Vas a practicar
                </span>
                <p className="text-[#5A5A5A] text-base sm:text-lg leading-relaxed">
                  herramientas de mindfulness que podés llevar a situaciones reales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. SECCIÓN "SOBRE ELI" - Group photo, editorial layout */}
        <section className="py-14 md:py-20 px-6 bg-[#FAFAFA] border-t border-[#E8ECE9]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white max-w-md mx-auto lg:max-w-none aspect-[4/5]">
                <img
                  src="/quien soy workshop.png"
                  alt="Eli facilitando una actividad grupal"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Bio Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
              <h2 className="font-editorial text-3xl sm:text-4xl text-charcoal">
                Sobre Eli
              </h2>

              <div className="space-y-4 text-[#5A5A5A] text-base sm:text-lg leading-relaxed">
                <p className="text-xl font-editorial text-charcoal">
                  Soy Eli.
                </p>
                <p className="font-medium text-charcoal">
                  Soy instructora de mindfulness, profesora de yoga y coach ontológica.
                </p>
                <p>
                  Hace años acompaño a personas a través de prácticas de mindfulness y meditación.
                </p>
                <p>
                  Mi enfoque es práctico: llevar estas herramientas a la vida real.
                </p>
                <p className="pt-2 text-charcoal font-normal text-base sm:text-lg leading-relaxed border-t border-[#E8ECE9]">
                  Porque el objetivo no es vivir sin estrés ni dejar de tener responsabilidades. Es poder relacionarnos de otra manera con todo lo que pasa mientras vivimos nuestra vida.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 6. SECCIÓN DE INFORMACIÓN - Structured Card */}
        <section className="py-14 md:py-20 px-6 bg-[#F5F3EF] border-t border-[#E8ECE9]">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-12 border border-[#E8ECE9] shadow-sm text-center">
              
              <span className="text-[#8DA396] font-semibold text-xs sm:text-sm uppercase tracking-widest block mb-2">
                Resumen práctico
              </span>

              <h2 className="font-editorial text-3xl sm:text-4xl text-charcoal mb-8">
                Información del workshop
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left mb-10 max-w-xl mx-auto">
                <div className="bg-[#F5F3EF]/60 p-4 rounded-xl border border-[#E8ECE9]/60">
                  <span className="text-xs uppercase tracking-wider text-[#828282] block mb-1">Fecha</span>
                  <span className="text-charcoal font-medium text-base">Sábado 3 de octubre</span>
                </div>

                <div className="bg-[#F5F3EF]/60 p-4 rounded-xl border border-[#E8ECE9]/60">
                  <span className="text-xs uppercase tracking-wider text-[#828282] block mb-1">Horarios</span>
                  <span className="text-charcoal font-medium text-sm sm:text-base leading-tight block">
                    10:00 h Argentina<br />
                    8:00 h Colombia<br />
                    7:00 h Ciudad de México
                  </span>
                </div>

                <div className="bg-[#F5F3EF]/60 p-4 rounded-xl border border-[#E8ECE9]/60">
                  <span className="text-xs uppercase tracking-wider text-[#828282] block mb-1">Modalidad</span>
                  <span className="text-charcoal font-medium text-base">Online · En vivo</span>
                  <span className="text-[#5A5A5A] text-xs block mt-1">Duración: 90 minutos</span>
                </div>

                <div className="bg-[#F5F3EF]/60 p-4 rounded-xl border border-[#E8ECE9]/60">
                  <span className="text-xs uppercase tracking-wider text-[#828282] block mb-1">Cupos y Valor</span>
                  <span className="text-charcoal font-semibold text-base block">ARS 30.000</span>
                  <span className="text-[#5A5A5A] text-xs block mt-1">Cupos: 15 personas</span>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent w-full sm:w-auto px-10 py-4 text-base shadow-md"
              >
                QUIERO RESERVAR MI LUGAR
              </a>

            </div>
          </div>
        </section>

        {/* 7. CIERRE */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA] text-center border-t border-[#E8ECE9]">
          <div className="max-w-2xl mx-auto space-y-8">
            <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-charcoal leading-snug">
              No necesitás esperar a estar desbordada para empezar a prestar atención a cómo estás viviendo.
            </p>

            <div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-10 py-4 text-base shadow-md hover:shadow-lg"
              >
                QUIERO PARTICIPAR
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Minimal */}
      <footer className="w-full bg-[#FAF9F6] py-10 px-6 border-t border-[#E8ECE9]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#828282]">
          <div>
            © {new Date().getFullYear()} Eli Curcio. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-charcoal transition-colors"
            >
              WhatsApp
            </a>
            <a 
              href="https://www.instagram.com/mindfulnessbyeli" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-charcoal transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-[#E8ECE9] md:hidden z-50 flex justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <a 
          href={WHATSAPP_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary w-full text-center py-3 text-sm tracking-wider"
        >
          QUIERO RESERVAR MI LUGAR
        </a>
      </div>

    </div>
  );
};

export default WorkshopPage;
