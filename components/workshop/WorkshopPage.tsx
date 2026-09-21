import React, { useEffect, useState } from 'react';

const MERCADO_PAGO_URL = "https://mpago.la/2AfhLjk";
const PROOF_URL = "https://wa.me/541121829771?text=Hola%20Eli%2C%20te%20envio%20el%20comprobante%20del%20workshop%20del%203%2F10.%20Nombre%3A%20%0AMail%3A%20";
const DOUBTS_URL = "https://wa.me/541121829771?text=Hola%20Eli%2C%20tengo%20una%20duda%20sobre%20el%20workshop%20del%203%2F10.";
const ALIAS = "mindfulnessbyeli";

const PaymentCtaBlock: React.FC = () => {
  const [copiedAlias, setCopiedAlias] = useState(false);

  const handleCopyAlias = () => {
    navigator.clipboard.writeText(ALIAS);
    setCopiedAlias(true);
    setTimeout(() => setCopiedAlias(false), 2000);
  };

  return (
    <div className="w-full max-w-xl space-y-4 text-left my-2">
      
      {/* 1. OPCIÓN PRINCIPAL / VALOR REAL: TRANSFERENCIA $30.000 */}
      <div className="bg-white border-2 border-[#8DA396] rounded-2xl p-4 sm:p-5 shadow-sm space-y-3 relative overflow-hidden">
        <div className="bg-[#8DA396]/15 text-[#2D2D2D] text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block">
          Opción principal (Precio oficial: $30.000)
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
          <div>
            <h3 className="font-editorial text-2xl text-charcoal font-semibold">
              Transferir $30.000
            </h3>
            <p className="text-xs sm:text-sm text-[#5A5A5A] mt-0.5">
              Alias: <code className="bg-[#F5F3EF] px-2.5 py-1 rounded-md font-mono text-charcoal font-bold text-sm select-all">{ALIAS}</code>
            </p>
          </div>

          <button
            type="button"
            onClick={handleCopyAlias}
            className="btn-primary self-start sm:self-center text-xs font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-colors flex items-center gap-1.5"
          >
            {copiedAlias ? (
              <span className="text-emerald-300 font-bold">¡Alias copiado!</span>
            ) : (
              <span>Copiar alias</span>
            )}
          </button>
        </div>

        {/* Botón de Comprobante para confirmar la vacante */}
        <div className="pt-2 border-t border-[#E8ECE9]">
          <a
            href={PROOF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-cta-btn w-full text-center py-3.5 px-5 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <span>Ya pagué — enviar comprobante</span>
          </a>
        </div>
      </div>

      {/* 2. OPCIÓN SECUNDARIA: MERCADO PAGO $35.000 (Tarjeta / Cuotas) */}
      <div className="border border-[#E8ECE9] bg-[#FAF9F6] rounded-xl p-3.5 sm:p-4 space-y-2">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span className="text-xs sm:text-sm font-medium text-[#5A5A5A]">
            ¿Preferís pagar con tarjeta o en cuotas?
          </span>
          <a
            href={MERCADO_PAGO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-semibold text-charcoal border border-charcoal/30 bg-white hover:bg-charcoal hover:text-white transition-all px-4 py-2 rounded-lg text-center w-full sm:w-auto"
          >
            Preferís tarjeta: Mercado Pago — $35.000
          </a>
        </div>
        <p className="text-[11px] sm:text-xs text-[#828282] leading-tight italic">
          El workshop sale $30.000; con MP el total es $35.000 por el costo del medio de pago.
        </p>
      </div>

      {/* 3. AVISO OBLIGATORIO UNIFICADO (Aplica a AMBOS medios de pago) */}
      <div className="bg-[#FAF9F5] border border-[#E8ECE9] rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-[#5A5A5A] leading-relaxed">
        <p className="font-semibold text-charcoal mb-0.5">
          ⚠️ Importante para confirmar tu lugar:
        </p>
        <p>
          Después de pagar, mandame el comprobante por WhatsApp al 11 2182-9771 con tu nombre y mail. Sin comprobante no te reservo el cupo.
        </p>
      </div>

      {/* 4. LINK DE DUDAS (Terciario, solo texto) */}
      <div className="text-center sm:text-right pt-1">
        <a
          href={DOUBTS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#5A5A5A] hover:text-charcoal underline underline-offset-4 transition-colors"
        >
          ¿Dudas antes de pagar? Escribime
        </a>
      </div>

    </div>
  );
};

const WorkshopPage: React.FC = () => {
  const [isInlineCtaVisible, setIsInlineCtaVisible] = useState(false);

  useEffect(() => {
    document.title = "Estrés y autoexigencia: Cómo salir del piloto automático | Workshop Online con Eli";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const inlineCtas = document.querySelectorAll('.inline-cta-btn');
    if (inlineCtas.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isAnyVisible = entries.some((entry) => entry.isIntersecting);
        setIsInlineCtaVisible(isAnyVisible);
      },
      { threshold: 0.1 }
    );

    inlineCtas.forEach((el) => observer.observe(el));
    return () => {
      inlineCtas.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleNavigateHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('popstate'));
  };

  const handleScrollToPayment = (e: React.MouseEvent) => {
    e.preventDefault();
    const paymentEl = document.getElementById('datos-pago');
    if (paymentEl) {
      paymentEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans antialiased text-[#2D2D2D] bg-[#FAFAFA] min-h-screen selection:bg-[#8DA396]/20">
      
      {/* Header / Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E8ECE9]">
        <div className="max-w-6xl mx-auto px-6 py-2.5 sm:py-4 flex items-center justify-between">
          <a 
            href="/" 
            onClick={handleNavigateHome}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Ir a inicio"
          >
            <img src="/logo.png" alt="Mindfulness by Eli" className="h-7 sm:h-8 w-auto transition-transform group-hover:scale-105" />
            <span className="font-editorial text-lg text-charcoal tracking-wide hidden sm:inline">
              Mindfulness by Eli
            </span>
          </a>

          <a
            href="#datos-pago"
            onClick={handleScrollToPayment}
            className="hidden sm:inline-flex items-center text-xs font-semibold uppercase tracking-widest text-charcoal hover:text-[#8DA396] transition-colors"
          >
            TRANSFERIR $30.000 (ALIAS: MINDFULNESSBYELI) →
          </a>
        </div>
      </header>

      <main className="pb-40 md:pb-0">
        
        {/* 1. HERO SECTION */}
        <section className="relative bg-[#F5F3EF] border-b border-[#E8ECE9] pt-3 pb-8 md:pt-6 md:pb-12 lg:pt-8 lg:pb-14 px-6 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            
            {/* Mobile Part 1 / Desktop Top Left (Cols 1-7, Row 1): Kicker, Title & Description */}
            <div className="lg:col-span-7 lg:col-start-1 lg:row-start-1 flex flex-col items-start z-10 w-full">
              <span className="text-[#8DA396] font-semibold text-xs sm:text-sm uppercase tracking-widest block mb-1">
                Estrés y autoexigencia
              </span>

              <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-[1.18] mb-3 sm:mb-4">
                Cómo salir del piloto automático
              </h1>

              <div className="space-y-3 text-[#5A5A5A] text-base sm:text-lg leading-relaxed max-w-2xl">
                <p>
                  Una experiencia práctica para mujeres que sienten que están todo el día resolviendo, pensando en lo que sigue y a las que incluso descansar les cuesta.
                </p>
                <p>
                  Un encuentro para entender qué está pasando y empezar a relacionarte de otra manera con el estrés y la autoexigencia.
                </p>
              </div>
            </div>

            {/* Mobile Part 2 / Desktop Right (Cols 8-12, Rows 1-2): Hero Image */}
            <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 relative w-full flex justify-center items-center my-2 lg:my-0 z-10">
              <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <img
                  src="/hero%20principal%20workshop.png"
                  alt="Eli facilitando una experiencia de mindfulness"
                  className="w-full h-full object-cover object-top sm:object-[center_20%] lg:object-center"
                />
              </div>
            </div>

            {/* Mobile Part 3 / Desktop Bottom Left (Cols 1-7, Row 2): Metadata Box & Payment CTA */}
            <div className="lg:col-span-7 lg:col-start-1 lg:row-start-2 flex flex-col items-start z-10 w-full">
              {/* Event Metadata */}
              <div className="w-full bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-[#E8ECE9] shadow-sm mb-4 space-y-2 max-w-2xl">
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
                  <span>Online · En vivo · 90 min · Queda grabado</span>
                  <div className="flex items-center gap-2 font-semibold text-charcoal">
                    <span className="bg-[#8DA396]/20 px-2.5 py-0.5 rounded text-charcoal border border-[#8DA396]/40">Transferencia: $30.000</span>
                    <span className="bg-[#E8ECE9]/70 px-2.5 py-0.5 rounded text-[#5A5A5A]">MP: $35.000</span>
                  </div>
                </div>
              </div>

              {/* Payment CTA Block */}
              <PaymentCtaBlock />
            </div>

          </div>
        </section>

        {/* 2. SECCIÓN "¿TE PASA QUE...?" */}
        <section className="py-10 md:py-14 px-6 bg-[#FAFAFA]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-charcoal text-center mb-8">
              ¿Te pasa que...?
            </h2>

            <div className="divide-y divide-[#E8ECE9] mb-8">
              {[
                "Terminás algo y tu cabeza ya está pensando en lo siguiente.",
                "Tenés un rato libre, pero enseguida aparece algo que podrías hacer.",
                "Te cuesta descansar sin sentir que deberías estar aprovechando el tiempo.",
                "Aunque las cosas salgan bien, pensás en lo que podrías haber hecho mejor.",
                "Estás con otras personas, pero una parte de tu cabeza sigue ocupada con pendientes."
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="py-3.5 sm:py-4 flex items-start gap-4"
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

            {/* Closing text */}
            <div className="text-center pt-5 border-t-2 border-[#8DA396]/30 max-w-xl mx-auto space-y-1.5">
              <p className="text-lg sm:text-xl font-editorial text-charcoal">
                No necesariamente tenés que hacer menos.
              </p>
              <p className="text-base sm:text-lg text-[#5A5A5A] font-light">
                También podés empezar por entender qué sucede en vos mientras hacés todo eso.
              </p>
            </div>
          </div>
        </section>

        {/* 3. SECCIÓN "¿CÓMO ES EL ENCUENTRO?" */}
        <section className="py-10 md:py-12 px-6 bg-[#F5F3EF] border-y border-[#E8ECE9]">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-charcoal">
              ¿Cómo es el encuentro?
            </h2>

            <p className="font-editorial text-xl sm:text-2xl text-charcoal leading-snug">
              Es un workshop práctico y participativo de 90 minutos.
            </p>

            <p className="text-[#5A5A5A] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Vamos a combinar explicación, ejercicios y prácticas breves de mindfulness para que puedas reconocer cómo funciona tu piloto automático y empezar a observarlo en situaciones concretas de tu vida.
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-[#828282] font-medium">
              <span>No es una clase teórica.</span>
              <span className="hidden sm:inline text-[#D1D1D1]">|</span>
              <span>No necesitás saber meditar.</span>
            </div>
          </div>
        </section>

        {/* 4. SECCIÓN "¿QUÉ VAMOS A TRABAJAR?" */}
        <section className="py-10 md:py-14 px-6 bg-[#FAFAFA]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-charcoal mb-3">
                ¿Qué vamos a trabajar?
              </h2>
              <p className="text-base sm:text-lg text-[#5A5A5A] leading-relaxed">
                Durante el workshop vamos a observar cómo funciona el piloto automático y qué relación tiene con el estrés y la autoexigencia.
              </p>
            </div>

            {/* Numbered list */}
            <div className="space-y-5 mb-8">
              {[
                "Cómo reconocer patrones de pensamiento y reacción.",
                "Qué pasa cuando actuamos automáticamente frente a lo que aparece en nuestra cabeza.",
                "Cómo el estrés puede mantenerse incluso cuando no estamos haciendo nada.",
                "Prácticas sencillas de mindfulness para llevar a situaciones cotidianas.",
                "Cómo generar un espacio entre lo que aparece y la respuesta que elegimos."
              ].map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 pb-4 border-b border-[#E8ECE9]"
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

            <div className="text-center text-sm text-[#5A5A5A] font-medium py-1">
              No necesitás experiencia previa en mindfulness ni meditación.
            </div>
          </div>
        </section>

        {/* 5. SECCIÓN "¿QUÉ TE LLEVÁS?" */}
        <section className="py-10 md:py-14 px-6 bg-[#F5F3EF] border-t border-[#E8ECE9]">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-charcoal text-center mb-10">
              ¿Qué te llevás?
            </h2>

            <div className="space-y-7">
              {/* Point 1 */}
              <div className="pl-5 border-l-2 border-[#8DA396] space-y-1">
                <span className="text-charcoal font-semibold text-lg sm:text-xl block">
                  Vas a poder reconocer
                </span>
                <p className="text-[#5A5A5A] text-base sm:text-lg leading-relaxed">
                  qué situaciones y pensamientos suelen activar tu piloto automático.
                </p>
              </div>

              {/* Point 2 */}
              <div className="pl-5 border-l-2 border-[#8DA396] space-y-1">
                <span className="text-charcoal font-semibold text-lg sm:text-xl block">
                  Vas a aprender a observar
                </span>
                <p className="text-[#5A5A5A] text-base sm:text-lg leading-relaxed">
                  lo que aparece antes de reaccionar automáticamente.
                </p>
              </div>

              {/* Point 3 */}
              <div className="pl-5 border-l-2 border-[#8DA396] space-y-1">
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

        {/* SECCIÓN TESTIMONIOS: "Lo que dicen quienes ya participaron" */}
        <section className="py-10 md:py-14 px-6 bg-[#FAFAFA] border-t border-[#E8ECE9]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10 space-y-2">
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-charcoal">
                Lo que dicen quienes ya participaron
              </h2>
              <p className="text-[#5A5A5A] text-base sm:text-lg leading-relaxed">
                Testimonios reales de personas que ya participaron en experiencias de mindfulness conmigo.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {/* Testimonio Workshop 1 */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8ECE9] shadow-sm flex flex-col justify-between items-center text-center">
                <div className="w-full mb-4 overflow-hidden rounded-xl bg-[#1e1e1e] flex items-center justify-center">
                  <img
                    src="/testimonioworkshop1.png"
                    alt="Testimonio real de participante"
                    className="w-full h-auto object-contain max-h-[500px] rounded-xl"
                  />
                </div>
                <blockquote className="text-charcoal font-medium text-base sm:text-lg leading-snug px-2">
                  “Me llevé herramientas que vengo aplicando muy bien.”
                </blockquote>
              </div>

              {/* Testimonio Workshop 2 */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8ECE9] shadow-sm flex flex-col justify-between items-center text-center">
                <div className="w-full mb-4 overflow-hidden rounded-xl bg-[#1e1e1e] flex items-center justify-center">
                  <img
                    src="/testimonioworkshop2.png"
                    alt="Testimonio real de participante"
                    className="w-full h-auto object-contain max-h-[500px] rounded-xl"
                  />
                </div>
                <blockquote className="text-charcoal font-medium text-base sm:text-lg leading-snug px-2">
                  “Las prácticas que hicimos las vengo haciendo a diario.”
                </blockquote>
              </div>

              {/* Testimonio Workshop 3 */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8ECE9] shadow-sm flex flex-col justify-between items-center text-center">
                <div className="w-full mb-4 overflow-hidden rounded-xl bg-[#1e1e1e] flex items-center justify-center">
                  <img
                    src="/testimonioworkshop3.png"
                    alt="Testimonio real de participante"
                    className="w-full h-auto object-contain max-h-[500px] rounded-xl"
                  />
                </div>
                <blockquote className="text-charcoal font-medium text-base sm:text-lg leading-snug px-2">
                  “Me sirvió para salir del piloto automático y poder escucharme.”
                </blockquote>
              </div>

              {/* Testimonio Workshop 4 */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8ECE9] shadow-sm flex flex-col justify-between items-center text-center">
                <div className="w-full mb-4 overflow-hidden rounded-xl bg-[#1e1e1e] flex items-center justify-center">
                  <img
                    src="/testimonioworkshop4.png"
                    alt="Testimonio real de participante"
                    className="w-full h-auto object-contain max-h-[500px] rounded-xl"
                  />
                </div>
                <blockquote className="text-charcoal font-medium text-base sm:text-lg leading-snug px-2">
                  “Pude meditar y hacer las prácticas antes y me re sirvió.”
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* 6. SECCIÓN "SOBRE ELI" */}
        <section className="py-10 md:py-14 px-6 bg-[#FAFAFA] border-t border-[#E8ECE9]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white max-w-md mx-auto lg:max-w-none aspect-[4/5]">
                <img
                  src="/quien%20soy%20workshop.png"
                  alt="Eli facilitando una actividad grupal"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Bio Text */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-charcoal">
                Sobre Eli
              </h2>

              <div className="space-y-3.5 text-[#5A5A5A] text-base sm:text-lg leading-relaxed">
                <p className="font-medium text-charcoal">
                  Soy instructora de mindfulness, profesora de yoga y coach ontológica.
                </p>
                <p>
                  Hace años acompaño a personas a través de prácticas de mindfulness y meditación.
                </p>
                <p>
                  Mi enfoque es práctico: llevar estas herramientas a la vida real.
                </p>
                <p className="pt-3 text-charcoal font-normal text-base sm:text-lg leading-relaxed border-t border-[#E8ECE9]">
                  Porque el objetivo no es vivir sin estrés ni dejar de tener responsabilidades. Es poder relacionarnos de otra manera con todo lo que pasa mientras vivimos nuestra vida.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 7. SECCIÓN DE INFORMACIÓN DEL WORKSHOP - Compact structured card */}
        <section className="py-10 md:py-14 px-6 bg-[#F5F3EF] border-t border-[#E8ECE9]">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E8ECE9] shadow-sm text-center">
              
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-charcoal mb-6">
                Información del workshop
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8 max-w-lg mx-auto">
                <div className="bg-[#F5F3EF]/60 p-3.5 rounded-xl border border-[#E8ECE9]/60">
                  <span className="text-xs uppercase tracking-wider text-[#828282] block mb-1">Fecha</span>
                  <span className="text-charcoal font-medium text-base">Sábado 3 de octubre</span>
                </div>

                <div className="bg-[#F5F3EF]/60 p-3.5 rounded-xl border border-[#E8ECE9]/60">
                  <span className="text-xs uppercase tracking-wider text-[#828282] block mb-1">Horarios</span>
                  <span className="text-charcoal font-medium text-sm sm:text-base leading-tight block">
                    10:00 h Argentina<br />
                    8:00 h Colombia<br />
                    7:00 h Ciudad de México
                  </span>
                </div>

                <div className="bg-[#F5F3EF]/60 p-3.5 rounded-xl border border-[#E8ECE9]/60">
                  <span className="text-xs uppercase tracking-wider text-[#828282] block mb-1">Modalidad</span>
                  <span className="text-charcoal font-medium text-base">Online · En vivo</span>
                  <span className="text-[#5A5A5A] text-xs block mt-0.5">Duración: 90 min · Queda grabado</span>
                </div>

                <div className="bg-[#F5F3EF]/60 p-3.5 rounded-xl border border-[#E8ECE9]/60">
                  <span className="text-xs uppercase tracking-wider text-[#828282] block mb-1">Precios y Cupos</span>
                  <span className="text-charcoal font-semibold text-xs sm:text-sm block">Transferencia: ARS 30.000</span>
                  <span className="text-[#5A5A5A] text-xs block mt-0.5">Mercado Pago: ARS 35.000 (Tarjetas/cuotas)</span>
                  <span className="text-[#8DA396] font-semibold text-xs block mt-1">Cupos: 15 personas</span>
                </div>
              </div>

              {/* Payment CTA Block */}
              <div className="flex justify-center">
                <PaymentCtaBlock />
              </div>

            </div>
          </div>
        </section>

        {/* 8. CIERRE */}
        <section className="py-12 md:py-16 px-6 bg-[#FAFAFA] text-center border-t border-[#E8ECE9]">
          <div className="max-w-2xl mx-auto space-y-6 flex flex-col items-center">
            <p className="font-editorial text-2xl sm:text-3xl md:text-4xl text-charcoal leading-snug">
              No necesitás esperar a estar desbordada para empezar a prestar atención a cómo estás viviendo.
            </p>

            <PaymentCtaBlock />
          </div>
        </section>

      </main>

      {/* Footer Minimal */}
      <footer className="w-full bg-[#FAF9F6] py-8 px-6 border-t border-[#E8ECE9]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#828282]">
          <div>
            © {new Date().getFullYear()} Eli Curcio. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <a 
              href={PROOF_URL} 
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

      {/* Sticky Mobile CTA - Inverted Hierarchy for Mobile */}
      <div 
        className={`fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-[#E8ECE9] md:hidden z-50 flex flex-col gap-1.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-all duration-300 ${
          isInlineCtaVisible ? 'translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="flex items-center justify-between bg-[#F5F3EF] px-3 py-1 rounded-lg border border-[#E8ECE9]">
          <span className="text-xs text-charcoal font-bold">
            Transferencia $30.000
          </span>
          <span className="text-[11px] text-[#5A5A5A]">
            Alias: <code className="font-mono font-bold text-charcoal">{ALIAS}</code>
          </span>
        </div>

        <a 
          href={PROOF_URL}
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary w-full text-center py-2.5 text-xs sm:text-sm font-semibold tracking-wide"
        >
          Ya pagué — enviar comprobante
        </a>

        <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-[#5A5A5A] px-1">
          <span>¿Tarjeta? <a href={MERCADO_PAGO_URL} target="_blank" rel="noopener noreferrer" className="underline font-medium text-charcoal">MP $35.000</a></span>
          <span>Comprobante al 11 2182-9771</span>
        </div>
      </div>

    </div>
  );
};

export default WorkshopPage;
