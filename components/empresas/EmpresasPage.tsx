import React, { useState } from 'react';

const PROPOSAL_EMAIL = 'elicurcio.91@gmail.com';

const POINTS = [
  'Mejor balance entre laburo y vida personal',
  'Herramientas de regulación emocional',
  'Mejor clima en el equipo',
] as const;

const OFFERS = [
  'Workshop único (60–90 min): estrés, presencia y foco',
  'Piloto (4–6 semanas): práctica breve y hábitos para el día laboral',
  '1:1 para líderes (opcional)',
] as const;

const STEPS = [
  'Brief (objetivo y tamaño del equipo)',
  'Propuesta',
  'Sesión o piloto online',
  'Cierre con feedback simple',
] as const;

function buildMailtoUrl(fields: {
  name: string;
  company: string;
  teamSize: string;
  email: string;
  message: string;
}) {
  const subject = `Propuesta de mindfulness para ${fields.company}`;
  const body = [
    'Hola Eli, quiero pedir una propuesta para mi equipo.',
    '',
    `Nombre: ${fields.name}`,
    `Empresa: ${fields.company}`,
    `Tamaño del equipo: ${fields.teamSize}`,
    `Email: ${fields.email}`,
    '',
    fields.message,
  ].join('\n');

  return `mailto:${PROPOSAL_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const EmpresasPage: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mailtoUrl, setMailtoUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const scrollToForm = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById('pedir-propuesta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const url = buildMailtoUrl({ name, company, teamSize, email, message });
    setMailtoUrl(url);
    setSubmitted(true);
    window.location.href = url;
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#F5F3EF] border-b border-[#E8ECE9] px-6 py-16 md:py-24">
        <div className="absolute top-[-30%] right-[-10%] w-[45%] h-[70%] rounded-full bg-[#E8ECE9] blur-[100px] opacity-80 pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-[#8DA396] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-5 block">
            Para empresas
          </span>
          <h1 className="font-editorial text-4xl md:text-6xl text-charcoal leading-tight mb-6">
            Mindfulness para equipos
          </h1>
          <p className="text-lg md:text-2xl text-[#5A5A5A] font-light leading-relaxed max-w-2xl mx-auto mb-8">
            Menos estrés. Más presencia y foco en el trabajo.
          </p>
          <a href="#pedir-propuesta" onClick={scrollToForm} className="btn-primary">
            Pedir propuesta
          </a>
          <p className="text-sm text-[#828282] mt-6 tracking-wide">
            En español · Online · A medida
          </p>
          <ul className="mt-12 pt-8 border-t border-[#E8ECE9] grid grid-cols-1 sm:grid-cols-3 gap-6 text-left sm:text-center">
            {POINTS.map((point) => (
              <li key={point} className="text-[#5A5A5A] text-sm md:text-base leading-snug">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-off-white px-6 py-20 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-editorial text-3xl md:text-4xl text-charcoal mb-6">
            Para quién
          </h2>
          <div className="w-12 h-[2px] bg-[#8DA396] mb-8" />
          <p className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed">
            Equipos con mucha carga, poca pausa y el foco partido. RRHH, wellbeing y líderes que buscan una acción concreta.
          </p>
        </div>
      </section>

      <section className="bg-cream px-6 py-20 md:py-24 border-y border-[#E8ECE9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-editorial text-3xl md:text-4xl text-charcoal mb-6">
            El problema
          </h2>
          <div className="w-12 h-[2px] bg-[#8DA396] mb-8" />
          <p className="font-editorial text-2xl md:text-3xl text-charcoal leading-snug">
            El ritmo del trabajo no baja solo. El estrés se acumula, la atención se dispersa y, si no hay un corte, el burnout deja de ser un caso aislado.
          </p>
        </div>
      </section>

      <section className="bg-off-white px-6 py-20 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="font-editorial text-3xl md:text-4xl text-charcoal mb-6">
              Qué ofrecemos
            </h2>
            <div className="w-12 h-[2px] bg-[#8DA396]" />
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {OFFERS.map((offer) => (
              <li
                key={offer}
                className="bg-white border border-[#E8ECE9] rounded-sm p-8 shadow-[0_8px_30px_rgba(0,0,0,0.03)] text-[#5A5A5A] text-lg leading-relaxed"
              >
                {offer}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream px-6 py-20 md:py-24 border-y border-[#E8ECE9]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-editorial text-3xl md:text-4xl text-charcoal mb-6">
            Cómo trabajamos
          </h2>
          <div className="w-12 h-[2px] bg-[#8DA396] mb-10" />
          <ol className="space-y-6">
            {STEPS.map((step, index) => (
              <li key={step} className="flex items-start gap-5 pb-6 border-b border-[#E8ECE9] last:border-b-0 last:pb-0">
                <span className="font-editorial text-2xl text-[#8DA396] leading-none min-w-[2.5rem]">
                  0{index + 1}
                </span>
                <p className="text-charcoal text-lg leading-relaxed">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-off-white px-6 py-20 md:py-24">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="aspect-[3/4] bg-[#E8ECE9] rounded-sm overflow-hidden relative">
              <img
                src="/sobre mi.jpg"
                alt="Eli Curcio"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="font-editorial text-3xl md:text-4xl text-charcoal mb-6">
              Quién soy
            </h2>
            <div className="w-12 h-[2px] bg-[#8DA396] mb-8" />
            <p className="text-lg text-[#5A5A5A] leading-relaxed">
              Contadora Pública (UBA). Magíster en gestión ambiental. Instructora de yoga. Profesora de mindfulness. Formación en coaching ontológico en curso.
            </p>
          </div>
        </div>
      </section>

      <section id="pedir-propuesta" className="scroll-mt-24 bg-cream px-6 py-20 md:py-24 border-t border-[#E8ECE9]">
        <div className="max-w-xl mx-auto bg-white p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#E8ECE9] rounded-sm">
          {!submitted ? (
            <>
              <h2 className="font-editorial text-3xl md:text-4xl text-charcoal mb-3">
                Pedir propuesta
              </h2>
              <p className="text-[#5A5A5A] mb-8 leading-relaxed">
                Contame el objetivo y el tamaño del equipo. Te respondo con una propuesta a medida.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="propuesta-nombre" className="block text-sm text-[#5A5A5A] mb-2">
                    Nombre
                  </label>
                  <input
                    id="propuesta-nombre"
                    name="nombre"
                    type="text"
                    autoComplete="name"
                    required
                    className="input-elegant"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="propuesta-empresa" className="block text-sm text-[#5A5A5A] mb-2">
                    Empresa
                  </label>
                  <input
                    id="propuesta-empresa"
                    name="empresa"
                    type="text"
                    autoComplete="organization"
                    required
                    className="input-elegant"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="propuesta-equipo" className="block text-sm text-[#5A5A5A] mb-2">
                    Tamaño del equipo
                  </label>
                  <input
                    id="propuesta-equipo"
                    name="tamano"
                    type="text"
                    required
                    placeholder="Por ejemplo, 20 personas"
                    className="input-elegant"
                    value={teamSize}
                    onChange={(event) => setTeamSize(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="propuesta-email" className="block text-sm text-[#5A5A5A] mb-2">
                    Email
                  </label>
                  <input
                    id="propuesta-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="input-elegant"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="propuesta-mensaje" className="block text-sm text-[#5A5A5A] mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="propuesta-mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    className="input-elegant resize-y"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </div>
                <button type="submit" className="btn-accent w-full mt-2">
                  Pedir propuesta
                </button>
              </form>

              <p className="text-xs text-[#828282] mt-6 leading-relaxed">
                Al enviar se abre un mail con estos datos, para que pueda responderte.
              </p>
            </>
          ) : (
            <div className="py-6 text-center animate-fade-in">
              <div className="text-[#8DA396] text-4xl mb-4">✓</div>
              <h3 className="font-editorial text-2xl text-charcoal mb-3">
                Listo, tu pedido está armado
              </h3>
              <p className="text-[#5A5A5A] mb-8 leading-relaxed">
                Se abrió tu correo con el pedido para Eli. Si no lo ves, abrilo desde acá.
              </p>
              <a href={mailtoUrl} className="btn-primary">
                Abrir el mail
              </a>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default EmpresasPage;
