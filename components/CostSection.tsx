import React from 'react';

const CostSection: React.FC = () => {
  const costs = [
    {
      number: "01",
      title: "Perderte de los momentos simples",
      description: "Estar ahí físicamente, pero con la cabeza en otra parte. Te perdés de saborear un café caliente, de una charla con atención plena o de registrar la calidez del sol en la cara."
    },
    {
      number: "02",
      title: "Reaccionar antes de darte cuenta",
      description: "Responder a la defensiva o con apuro. Irritarte por cosas pequeñas y sentir que vas en piloto automático, sin la pausa necesaria para elegir cómo querés actuar."
    },
    {
      number: "03",
      title: "Un cansancio de fondo constante",
      description: "Esa sensación de agotamiento mental que no se retira aunque duermas bien. Un desgaste sutil acumulado por sostener demasiados pensamientos a la vez."
    },
    {
      number: "04",
      title: "Vivir con la tensión como algo normal",
      description: "Hombros levantados, mandíbula apretada, respiración entrecortada. Acostumbrarte a habitar la incomodidad física en el cuerpo sin registrarla hasta que duele."
    }
  ];

  return (
    <section className="section-transition relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Visual noise opening up slightly - soft subtle radial light effects */}
      <div className="absolute top-1/4 left-[10%] w-96 h-96 bg-white/[0.02] rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[450px] h-[450px] bg-white/[0.03] rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header - Breathe more spacing */}
        <div className="text-center mb-20 md:mb-24 space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#9a9590] font-medium block">
            El costo del piloto automático
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-wide leading-tight max-w-2xl mx-auto font-editorial">
            Lo que cuesta seguir en automático
          </h2>
          <p className="text-base md:text-lg text-[#b8b3ad] max-w-xl mx-auto font-light leading-relaxed pt-2">
            Vivir de prisa o desconectados no es una elección consciente, es la respuesta de nuestro sistema al ritmo actual. Sin embargo, habitar la vida de esta manera tiene un costo silencioso.
          </p>
        </div>

        {/* Content list with generous breathing room */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-20">
          {costs.map((cost, index) => (
            <div key={index} className="flex flex-col space-y-4 group">
              <div className="flex items-center space-x-4">
                <span className="text-xs font-mono tracking-widest text-[#4A7C59] border-b border-[#4A7C59]/40 pb-0.5">
                  {cost.number}
                </span>
                <h3 className="text-xl font-medium text-white/95 tracking-wide">
                  {cost.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-[#b8b3ad] font-light leading-relaxed pl-0 md:pl-8">
                {cost.description}
              </p>
            </div>
          ))}
        </div>

        {/* Compassionate message bottom */}
        <div className="mt-24 md:mt-32 text-center max-w-2xl mx-auto border-t border-white/5 pt-12">
          <p className="text-[#b8b3ad] italic font-light text-base md:text-lg leading-relaxed">
            &ldquo;Reconocer dónde estamos hoy es el primer paso para volver a habitarnos con amabilidad.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
};

export default CostSection;
