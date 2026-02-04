
import React from 'react';

const Tag: React.FC<{ text: string; color: string }> = ({ text, color }) => (
   <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white mb-4`} style={{ backgroundColor: color }}>
      {text}
   </span>
);

const Features: React.FC = () => {
   return (
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-24">
         <h2 className="text-4xl font-bold text-center text-white mb-20">Pilares del Proceso</h2>

         {/* Feature 1: Autoconciencia */}
         <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="flex-1 text-left">
               <Tag text="Calma" color="#FF9EAF" />
               <h3 className="text-4xl font-bold mb-6">REDUCÍ EL ESTRÉS Y LA ANSIEDAD</h3>
               <p className="text-white/80 leading-relaxed text-lg">
                  <strong>Acompañamiento personalizado para regular tu sistema nervioso y bajar la sobrecarga mental.</strong>
                  Vas a aprender técnicas prácticas para calmar la mente, disminuir la tensión y gestionar mejor la presión diaria.
               </p>
            </div>
            <div className="flex-1 flex justify-center">
               {/* Illustration 1: Ring on Grid Hill */}
               <div className="relative w-64 h-56 md:w-80 md:h-64">
                  <svg viewBox="0 0 300 240" className="w-full h-full drop-shadow-2xl">
                     {/* Arbusto Verde Derecha Fondo */}
                     <path d="M220,200 Q260,180 290,210 L290,240 L200,240 Z" fill="#2D9C64" />

                     {/* Colina Violeta con Cuadrícula (Grid) */}
                     <path d="M50,240 Q150,140 250,240 Z" fill="#4C4CB3" />
                     {/* Líneas de cuadrícula */}
                     <g stroke="rgba(0,0,0,0.2)" strokeWidth="1" fill="none">
                        <path d="M100,240 Q150,160 200,240" />
                        <path d="M130,240 Q150,200 170,240" />
                        <path d="M150,180 L150,240" />
                        <path d="M80,220 Q150,180 220,220" />
                        <path d="M60,235 Q150,195 240,235" />
                     </g>

                     {/* El Anillo Dorado (Self-Esteem Ring) */}
                     <circle cx="150" cy="110" r="40" stroke="#FFD233" strokeWidth="18" fill="none" />
                     {/* Brillo en el anillo */}
                     <path d="M150,60 L150,80 M185,110 L165,110" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

                     {/* Flor Izquierda */}
                     <g transform="translate(40, 190) rotate(-10)">
                        <circle cx="0" cy="0" r="8" fill="#FCD34D" />
                        <g stroke="white" strokeWidth="8" strokeLinecap="round">
                           <line x1="0" y1="-12" x2="0" y2="12" />
                           <line x1="-12" y1="0" x2="12" y2="0" />
                           <line x1="-9" y1="-9" x2="9" y2="9" />
                           <line x1="9" y1="-9" x2="-9" y2="9" />
                        </g>
                        <circle cx="0" cy="0" r="4" fill="#FCD34D" />
                        <path d="M0,10 Q-5,40 0,60" stroke="#6FCF97" strokeWidth="3" fill="none" />
                     </g>

                     {/* Estrellas/Sparkles */}
                     <text x="30" y="80" fill="#FF9EAF" fontSize="20">✦</text>
                     <text x="260" y="60" fill="#FF9EAF" fontSize="16">✦</text>
                  </svg>
               </div>
            </div>
         </div>

         {/* Feature 2: Compromiso */}
         <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="flex-1 text-left">
               <Tag text="bienestar físico" color="#FDBA74" />
               <h3 className="text-4xl font-bold mb-6">DORMÍ MEJOR Y RECUPERÁ ENERGÍA</h3>
               <p className="text-white/80 leading-relaxed text-lg">
                  <strong>Prácticas guiadas adaptadas a tu rutina para soltar el estrés del día y mejorar la calidad del sueño.</strong>
                  Dormir mejor te permite rendir más, tomar mejores decisiones y empezar el día con mayor claridad. Resultado: más energía real, mejor humor y más resiliencia.
               </p>
            </div>
            <div className="flex-1 flex justify-center">
               {/* Illustration 2: Eye in Pink Mountain */}
               <div className="relative w-64 h-56 md:w-80 md:h-64">
                  <svg viewBox="0 0 300 240" className="w-full h-full drop-shadow-2xl">
                     {/* Arbusto Verde Derecha */}
                     <path d="M220,240 C220,200 280,200 280,240 Z" fill="#2F4F4F" />
                     <circle cx="270" cy="210" r="3" fill="#6FCF97" />
                     <circle cx="230" cy="230" r="2" fill="#6FCF97" />

                     {/* Montaña Rosa (La mente/cabeza) */}
                     <path d="M50,240 Q150,50 250,240 Z" fill="#FF9EAF" />
                     {/* Textura en montaña */}
                     <circle cx="80" cy="200" r="1" fill="#D68497" />
                     <circle cx="200" cy="180" r="1.5" fill="#D68497" />
                     <circle cx="150" cy="100" r="1" fill="#D68497" />

                     {/* El Ojo (Conciencia) */}
                     <g transform="translate(150, 160)">
                        <path d="M-50,0 Q0,-40 50,0 Q0,40 -50,0 Z" fill="white" />
                        <circle cx="0" cy="0" r="18" fill="#3B3B98" />
                        <circle cx="0" cy="0" r="8" fill="#000" />
                        <circle cx="5" cy="-5" r="3" fill="white" />
                     </g>

                     {/* Cristal Flotante (Mindfulness) */}
                     <g transform="translate(150, 80)">
                        <path d="M0,-20 L15,0 L0,20 L-15,0 Z" fill="#FDBA74" stroke="white" strokeWidth="2" />
                        <path d="M0,-20 L0,20 M-15,0 L15,0" stroke="white" strokeWidth="1" opacity="0.5" />
                        <circle cx="0" cy="-35" r="2" fill="white" className="animate-ping" />
                     </g>

                     {/* Decoración izquierda */}
                     <path d="M20,240 Q40,220 60,240" fill="#3B3B98" />
                     <text x="10" y="150" fill="white" fontSize="24">﹡</text>
                     <text x="260" y="100" fill="white" fontSize="18">✦</text>
                  </svg>
               </div>
            </div>
         </div>

         {/* Feature 3: Calma */}
         <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <div className="flex-1 text-left">
               <Tag text="bienestar mental" color="#FF9EAF" />
               <h3 className="text-4xl font-bold mb-6">MÁS CLARIDAD MENTAL Y CONCENTRACIÓN</h3>
               <p className="text-white/80 leading-relaxed text-lg">
                  <strong>Acompañamiento 1 a 1 para reducir el ruido mental, mejorar el foco y trabajar con mayor eficiencia.</strong>
                  Ideal si sentís la cabeza saturada, dificultad para concentrarte o fatiga mental constante.
               </p>
            </div>
            <div className="flex-1 flex justify-center">
               {/* Illustration 3: Flower Landscape */}
               <div className="relative w-64 h-56 md:w-80 md:h-64">
                  <svg viewBox="0 0 300 240" className="w-full h-full drop-shadow-2xl">
                     {/* Colina Violeta Fondo */}
                     <path d="M100,240 Q200,180 300,220 L300,240 Z" fill="#5B63D6" />

                     {/* Colina Verde Frente */}
                     <path d="M0,240 Q80,180 160,240 Z" fill="#556B2F" />

                     {/* La Gran Flor (Calma) */}
                     <g transform="translate(180, 140)">
                        {/* Tallo */}
                        <path d="M0,100 Q10,50 0,0" stroke="#3B3B98" strokeWidth="4" fill="none" />
                        <path d="M0,80 Q-20,60 -25,50" stroke="#3B3B98" strokeWidth="3" fill="none" /> {/* Hoja */}

                        {/* Pétalos */}
                        <g fill="white">
                           <circle cx="0" cy="-25" r="12" />
                           <circle cx="20" cy="-15" r="12" />
                           <circle cx="25" cy="10" r="12" />
                           <circle cx="15" cy="25" r="12" />
                           <circle cx="-15" cy="25" r="12" />
                           <circle cx="-25" cy="10" r="12" />
                           <circle cx="-20" cy="-15" r="12" />
                        </g>
                        {/* Centro */}
                        <circle cx="0" cy="0" r="10" fill="#FDBA74" />
                     </g>

                     {/* Espigas/Trigo derecha */}
                     <g transform="translate(250, 240)" stroke="#FDBA74" strokeWidth="2">
                        <path d="M0,0 L10,-30" />
                        <circle cx="10" cy="-32" r="2" fill="#FDBA74" stroke="none" />
                        <path d="M5,0 L-5,-20" />
                        <circle cx="-5" cy="-22" r="2" fill="#FDBA74" stroke="none" />
                     </g>

                     {/* Estrellas */}
                     <text x="50" y="100" fill="#FF9EAF" fontSize="24">✦</text>
                     <text x="240" y="50" fill="white" fontSize="16">✦</text>
                     <text x="120" y="60" fill="white" fontSize="12">✦</text>
                  </svg>
               </div>
            </div>
         </div>

         <div className="text-center pt-8">
            <a
               href="https://calendly.com/elicurcio-91/"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-block bg-brand-yellow text-black px-12 py-4 rounded-full font-bold uppercase tracking-wide hover:scale-105 transition-transform shadow-lg shadow-yellow-500/20 cursor-pointer"
            >
               <span className="block text-xl">QUIERO MI CHARLA</span>
               <span className="block text-[10px] lowercase font-normal opacity-80 mt-1">gratuita de 15 minutos</span>
            </a>
         </div>
      </section>
   );
};

export default Features;
