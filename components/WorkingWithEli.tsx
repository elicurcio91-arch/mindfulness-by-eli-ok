import React from 'react';

const WorkingWithEli: React.FC = () => {
  return (
    <section className="bg-[#FDFBF7] py-20 md:py-28 text-[#2a2520] overflow-hidden" id="como-es-practicar">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 max-w-2xl">
          <span className="text-sm font-semibold tracking-wider text-[#4A7C59] uppercase block mb-3">
            El enfoque
          </span>
          <h2 className="text-4xl md:text-5xl font-editorial leading-tight text-[#2a2520]">
            Cómo es practicar con Eli
          </h2>
          <p className="mt-6 text-lg text-[#6b6560] leading-relaxed">
            Hacer mindfulness no se trata de aislarte del mundo ni de alcanzar un estado de iluminación perfecta. Se trata de aprender a vivir en el mundo que ya tenés, pero con más aire.
          </p>
        </div>

        {/* Asymmetrical Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: The Container & Bio/Cert placeholders (Spans 5 cols on large screens) */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#2a2520]">
                Un espacio humano y con los pies en la tierra
              </h3>
              
              <p className="text-[#6b6560] leading-relaxed">
                El espacio que creamos juntas es, ante todo, un lugar seguro. No venís acá a sumar otra tarea a tu lista de pendientes ni a sentir la presión de "hacerlo bien". 
              </p>
              
              <p className="text-[#6b6560] leading-relaxed">
                Venís tal como estás hoy: con tu dispersión, tu cansancio, tus preocupaciones o tu día a día a mil por hora. No hay místicas raras ni posturas forzadas. Hay presencia real, escucha atenta y herramientas claras.
              </p>
            </div>

            {/* Certification / Bio Placeholder Box */}
            <div className="bg-[#F5F2ED] rounded-3xl p-8 border border-black/[0.04] space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#4A7C59]"></span>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#6b6560]">
                  Formación y Respaldo Profesional
                </span>
              </div>
              <p className="text-sm text-[#6b6560] leading-relaxed">
                Eli es Instructora de Mindfulness certificada (MBSR) con especializaciones en regulación emocional, neurociencias aplicadas y compasión.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="text-xs bg-[#4A7C59]/10 text-[#4A7C59] px-3 py-1 rounded-full font-medium">
                  Certificación Internacional
                </span>
                <span className="text-xs bg-[#4A7C59]/10 text-[#4A7C59] px-3 py-1 rounded-full font-medium">
                  Enfoque Científico
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: The 3 Pillars with asymmetrical, staggered vertical positions (Spans 7 cols on large screens) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-4 lg:pt-0">
            
            {/* Pillar 1 */}
            <div className="bg-[#F5F2ED] rounded-3xl p-8 md:p-10 border border-black/[0.03] space-y-4 transition-all duration-300 hover:shadow-md md:-translate-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#4A7C59] shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#2a2520]">Simple y cercano</h4>
              <p className="text-[#6b6560] leading-relaxed text-sm md:text-base">
                Nada de exigencias extras ni posturas rígidas. Adaptamos la práctica a vos y no al revés. La vida ya es lo suficientemente compleja como para sumarle más presiones.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#F5F2ED] rounded-3xl p-8 md:p-10 border border-black/[0.03] space-y-4 transition-all duration-300 hover:shadow-md md:translate-y-8">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#4A7C59] shadow-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[#2a2520]">Práctico</h4>
              <p className="text-[#6b6560] leading-relaxed text-sm md:text-base">
                Herramientas pensadas para el día a día real, entre el trabajo, los chicos o lo que sea que llene tu día. Ejercicios que podés hacer en 3 minutos mientras esperás que hierva el agua o antes de una reunión.
              </p>
            </div>

            {/* Pillar 3 - Spanning full width on md screen or staying nicely on grid */}
            <div className="bg-[#F5F2ED] rounded-3xl p-8 md:p-10 border border-black/[0.03] space-y-4 transition-all duration-300 hover:shadow-md md:col-span-2 md:mt-6 lg:mt-12">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#4A7C59] shadow-sm flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-[#2a2520]">Respetuoso</h4>
                  <p className="text-[#6b6560] leading-relaxed text-sm md:text-base">
                    Cada persona tiene su propio ritmo y sus momentos. No hay ritmos obligatorios ni niveles que alcanzar. Es tu propio camino de exploración, con Eli acompañando de cerca.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkingWithEli;
