
import React from 'react';

const Step: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
}> = ({ title, description, icon }) => (
  <div className="flex flex-col items-center text-center px-4">
    <div className="mb-8 w-32 h-32 rounded-full flex items-center justify-center bg-brand-blue/5 hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-dark mb-3">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed max-w-[250px]">
      {description}
    </p>
  </div>
);

const HowItWorks: React.FC = () => {
  return (
    <section className="relative z-10 mt-20">
      {/* Background with rounded top */}
      <div className="bg-white rounded-t-[80px] pt-32 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-dark mb-16">
            Cómo funciona
          </h2>

          <div className="max-w-5xl mx-auto space-y-16">
            {/* Para Quién Section */}
            <div className="bg-brand-pink/20 p-8 rounded-3xl border border-brand-pink/30 text-left">
              <h4 className="text-2xl font-bold text-dark mb-4 text-center">
                <span className="highlight" style={{
                  background: 'linear-gradient(120deg, #FFD233 0%, #FFC700 100%)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 85%',
                  backgroundPosition: '0 80%',
                  padding: '2px 14px',
                  display: 'inline-block',
                  fontWeight: 800,
                  borderRadius: '8px',
                  transform: 'rotate(-1deg)'
                }}>¿A quién está dirigido?</span>
              </h4>
              <p className="text-gray-700 mb-6 font-medium text-center">
                <span className="highlight-pink" style={{
                  background: 'linear-gradient(120deg, #FF9EAF 0%, #FFB3C6 100%)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 85%',
                  backgroundPosition: '0 80%',
                  padding: '2px 14px',
                  display: 'inline-block',
                  fontWeight: 700,
                  borderRadius: '8px'
                }}>Este proceso está diseñado específicamente para personas que:</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-gray-600 text-sm">
                <p>• Se sienten abrumadas por el estrés diario y las presiones laborales.</p>
                <p>• Experimentan ansiedad que interfiere con su concentración y toma de decisiones.</p>
                <p>• Tienen dificultades para conciliar el sueño o tener un descanso reparador.</p>
                <p>• Desean aprender a gestionar sus emociones de manera efectiva para no sentirse desbordados.</p>
                <p>• Buscan herramientas prácticas para optimizar su tiempo y ser más eficientes.</p>
                <p>• Están listas para invertir en su bienestar mental y emocional para mejorar su calidad de vida.</p>
              </div>
            </div>

            {/* Transformación Section */}
            <div className="bg-brand-yellow/10 p-10 rounded-3xl border border-brand-yellow/20 text-left">
              <h4 className="text-2xl font-bold text-dark mb-6 text-center">
                <span className="highlight" style={{
                  background: 'linear-gradient(120deg, #FFD233 0%, #FFC700 100%)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 85%',
                  backgroundPosition: '0 80%',
                  padding: '2px 14px',
                  display: 'inline-block',
                  fontWeight: 800,
                  borderRadius: '8px',
                  transform: 'rotate(1deg)'
                }}>¿Qué Transformación Vas a Experimentar en 4 Semanas?</span>
              </h4>
              <p className="text-gray-700 mb-6 font-medium text-center">
                <span className="highlight-orange" style={{
                  background: 'linear-gradient(120deg, #FDBA74 0%, #FCD34D 100%)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 85%',
                  backgroundPosition: '0 80%',
                  padding: '2px 14px',
                  display: 'inline-block',
                  fontWeight: 700,
                  borderRadius: '8px'
                }}>Al finalizar este proceso personalizado, podrás:</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-gray-600 text-sm">
                <p>• <strong>Gestionar eficazmente el estrés:</strong> Reconocer las señales de alerta y aplicar técnicas para reducir su impacto.</p>
                <p>• <strong>Calmar tu mente:</strong> Aprender a aquietar el ruido mental para experimentar mayor claridad y paz.</p>
                <p>• <strong>Dormir en calma:</strong> Desarrollar hábitos y herramientas para un sueño profundo y reparador.</p>
                <p>• <strong>Manejar tus emociones:</strong> Identificar, comprender y gestionar tus estados emocionales sin que te controlen.</p>
                <p>• <strong>Optimizar tu tiempo y ser más eficiente:</strong> Aplicar la atención plena para mejorar tu concentración y productividad.</p>
                <p>• Reconocer y diferenciar el estrés "bueno" (motivador) del "malo" (debilitante).</p>
                <p>• Sentirte más en control de tu vida y menos a merced de las circunstancias.</p>
              </div>
            </div>

            {/* Qué Incluye Section */}
            <div className="bg-brand-blue/5 p-8 rounded-3xl border border-brand-blue/10 text-left">
              <h4 className="text-2xl font-bold text-dark mb-6 text-center">
                <span className="highlight" style={{
                  background: 'linear-gradient(120deg, #FFD233 0%, #FFC700 100%)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 85%',
                  backgroundPosition: '0 80%',
                  padding: '2px 14px',
                  display: 'inline-block',
                  fontWeight: 800,
                  borderRadius: '8px'
                }}>¿Qué incluye?</span>
              </h4>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    Trabajo con prácticas de mindfulness simples y aplicables al día a día, enfocadas en ayudarte a regular el estrés, calmar la mente y gestionar emociones difíciles. Cada semana se adapta a vos, combinando herramientas prácticas con mi acompañamiento personalizado. Luego de la charla inicial de 15 minutos, diseñamos el plan de 4 semanas basado en tus tiempos, tu compromiso, disponibilidad, emociones y experiencia. El proceso es 100% personalizado.
                  </p>
                  <p className="text-dark font-bold mb-4 text-sm">En las 4 semanas vas a contar con:</p>
                </div>
                <div className="flex-1">
                  <ul className="space-y-3 text-dark font-medium text-sm">
                    <li className="flex items-center gap-3"><span className="text-brand-blue text-xl">➜</span> 4 sesiones 1:1 por Zoom (50 min)</li>
                    <li className="flex items-center gap-3"><span className="text-brand-blue text-xl">➜</span> Audios guiados diarios (8–12 min)</li>
                    <li className="flex items-center gap-3"><span className="text-brand-blue text-xl">➜</span> 2 check-ins por WhatsApp por semana</li>
                    <li className="flex items-center gap-3"><span className="text-brand-blue text-xl">➜</span> Material breve (lecturas/ejercicios) según tu caso</li>
                    <li className="flex items-center gap-3"><span className="text-brand-blue text-xl">➜</span> Acompañamiento cercano durante todo el mes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16 flex flex-col items-center">
            <a
              href="https://calendly.com/elicurcio-91/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-yellow text-black px-12 py-4 rounded-full font-bold uppercase tracking-wide hover:scale-105 transition-transform shadow-lg shadow-yellow-500/20 cursor-pointer"
            >
              <span className="block text-xl leading-tight">QUIERO EMPEZAR AHORA</span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
