
import React, { useEffect } from 'react';

const ThankYou: React.FC = () => {
    useEffect(() => {
        // Load Calendly widget script
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            const currentScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
            if (currentScript) {
                document.body.removeChild(currentScript);
            }
        };
    }, []);

    return (
        <section className="bg-[#FDFBF7] flex flex-col items-center justify-start py-8 px-6 relative overflow-hidden">
            {/* Subtle decorative background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#A78BFA]/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-[700px] w-full text-center animate-fade-in flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#333333] mb-10 leading-tight">
                    GRACIAS POR COMPLETAR EL FORMULARIO 🤍
                </h1>

                <div className="space-y-8 text-[#555555] text-lg md:text-xl leading-relaxed font-sans subpixel-antialiased">
                    <p>
                        Si llegaste hasta acá, probablemente estés viviendo con la mente acelerada, tensión constante o dificultad para desconectar del trabajo.
                    </p>
                    <p>
                        Este entrenamiento es un proceso <strong>1:1 de 4 semanas</strong> donde trabajamos regulación del sistema nervioso, reducción del ruido mental y herramientas concretas para gestionar ansiedad, enojo y frustración.
                    </p>
                    <p className="text-gray-800 font-medium italic">
                        El siguiente paso es agendar tu charla gratuita de claridad de 15 minutos para entender qué estás necesitando hoy y ver si este acompañamiento es adecuado para vos.
                    </p>
                </div>

                {/* Subtle separator */}
                <div className="w-full max-w-[200px] h-[1px] bg-gray-200 my-12"></div>

                <p className="text-lg md:text-xl text-[#333333] font-semibold mb-10">
                    Elegí tu horario disponible 👇
                </p>

                {/* Calendly Inline Widget */}
                <div
                    id="calendly-inline-app"
                    className="calendly-inline-widget w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100/50"
                    data-url="https://calendly.com/elicurcio-91/15min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=a78bfa"
                    style={{ minWidth: '320px', height: '950px', position: 'relative' }}
                ></div>

                {/* New Section: Other ways to work together */}
                <div className="mt-24 w-full max-w-[700px]">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-4 text-center">
                        OTRAS FORMAS DE TRABAJAR JUNTAS
                    </h2>
                    <p className="text-[#555555] text-base md:text-lg mb-12 text-center max-w-[600px] mx-auto">
                        Si sentís que todavía no es momento para el programa de 4 semanas, también podés empezar con otras modalidades de acompañamiento.
                    </p>

                    <div className="flex flex-col gap-6 w-full">
                        {/* Card 1 */}
                        <div className="rounded-card text-center p-8 bg-white/50 border border-white/20 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-[#333333] mb-3">Sesión individual</h3>
                            <p className="text-[#555555] text-base leading-relaxed">
                                Espacio personalizado para regular tu sistema nervioso y ordenar lo que hoy te está desbordando.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="rounded-card text-center p-8 bg-white/50 border border-white/20 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-[#333333] mb-3">Sesiones grupales</h3>
                            <p className="text-[#555555] text-base leading-relaxed">
                                Prácticas guiadas para entrenar presencia, calma y enfoque en comunidad.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="rounded-card text-center p-8 bg-white/50 border border-white/20 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-[#333333] mb-3">Meditaciones guiadas</h3>
                            <p className="text-[#555555] text-base leading-relaxed">
                                Audios breves para integrar mindfulness en tu rutina diaria.
                            </p>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col items-center gap-4">
                        <p className="text-[#777777] font-medium italic text-center text-lg">
                            Si querés saber cuál es mejor para vos, podés escribirme y lo vemos juntas.
                        </p>
                        <a
                            href="https://wa.me/541121829771?text=Hola%20Eli,%20quiero%20info%20de%20tus%20sesiones"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="secondary-button mt-4 px-8"
                        >
                            Quiero info de sesiones
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThankYou;
