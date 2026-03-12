
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
        <section className="bg-[#FDFBF7] flex flex-col items-center justify-start py-12 px-5 md:px-6 relative overflow-hidden">
            {/* Subtle decorative background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[#A78BFA]/5 rounded-full blur-[120px] -z-10"></div>

            <div className="max-w-[700px] w-full text-center animate-fade-in flex flex-col items-center">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#333333] mb-8 leading-snug tracking-tight uppercase">
                    Gracias por completar el formulario 🤍
                </h1>

                {/* Personal intro before video */}
                <div className="w-full text-left space-y-6 mt-4 text-[#555555] text-base md:text-lg leading-[1.8] font-sans subpixel-antialiased">
                    <p>
                        Yo también fui esa persona. Llegaba a casa agotada y la cabeza no paraba.
                    </p>
                    <p>
                        Hasta que entendí que no era falta de voluntad, era mi sistema nervioso que nunca aprendió a bajar.
                    </p>
                    <p className="font-semibold text-[#333333] border-l-2 border-[#A78BFA]/40 pl-4 py-1 bg-[#A78BFA]/5 rounded-r-lg">
                        Eso es lo que trabajo hoy con mis consultantes. Mirá este video antes de reservar tu lugar.
                    </p>
                </div>

                {/* YouTube Video Embed - autoplay muted, native controls visible */}
                <div className="w-full mt-14" style={{ maxWidth: '700px' }}>
                    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0 }}>
                        <iframe
                            src="https://www.youtube.com/embed/I-q8GGv5hRQ?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1"
                            title="Video explicativo"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                borderRadius: '12px',
                            }}
                        />
                    </div>
                </div>

                <p className="text-[#444444] font-medium italic text-base md:text-lg leading-[1.75] mt-8 text-left">
                    El siguiente paso es agendar tu charla gratuita de claridad de 15 minutos para entender qué estás necesitando hoy y ver si este acompañamiento es adecuado para vos.
                </p>

                {/* Agus testimonial */}
                <div className="w-full mt-12 bg-white border border-[#A78BFA]/10 rounded-[32px] p-8 md:p-12 text-left shadow-[0_4px_20px_rgba(167,139,250,0.08)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017L11.017 11.5L13.017 11.5C13.5693 11.5 14.017 11.0523 14.017 10.5V9C14.017 7.34315 15.3601 6 17.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 17.2091 20.2261 19 18.017 19H17.017C16.4647 19 16.017 19.4477 16.017 20V21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H4C3.44772 8 3 8.44772 3 9V12C3 12.5523 2.55228 13 2 13H0L0 11.5L2 11.5C2.55228 11.5 3 11.0523 3 10.5V9C3 7.34315 4.34315 6 6 6H8C9.65685 6 11 7.34315 11 9V15C11 17.2091 9.20914 19 7 19H6C5.44772 19 5 19.4477 5 20V21H3Z"/></svg>
                    </div>
                    <p className="text-[#333333] text-[17px] md:text-lg leading-[1.85] italic relative z-10">
                        Agus llegó a su primera charla sin esperar demasiado. A las 21hs me escribió: <span className="not-italic font-bold text-[#7C3AED] text-[18px] md:text-xl block mt-4 border-t border-[#A78BFA]/10 pt-4">"Mi día cambió… esa meditación guiada no solo me hizo bien, también me hizo emocionar desde un lugar que nunca había experimentado. Creo que me voy a conocer a mí misma desde otro lugar"</span>
                    </p>
                </div>

                {/* Guarantee */}
                <div className="w-full mt-8 bg-white border border-[#A78BFA]/15 rounded-[32px] p-8 md:p-12 text-center shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
                    <div className="w-16 h-16 bg-[#F5F0FF] rounded-full flex items-center justify-center mx-auto mb-6">
                        <span className="text-3xl">🛡️</span>
                    </div>
                    <h3 className="text-[#333333] font-bold text-xl md:text-2xl mb-4">
                        Garantía total
                    </h3>
                    <p className="text-[#666666] text-base md:text-lg leading-[1.8] max-w-[500px] mx-auto">
                        Si después de la primera sesión sentís que no es para vos, te devuelvo el 100%. Sin preguntas.
                    </p>
                </div>

                {/* Subtle separator */}
                <div className="w-full max-w-[140px] h-[1.5px] bg-[#A78BFA]/20 my-16"></div>

                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl text-[#333333] font-bold mb-4 tracking-tight leading-tight">
                        Elegí tu horario disponible 👇
                    </h2>
                    <p className="text-base md:text-lg text-[#666666] max-w-[500px] mx-auto leading-relaxed">
                        La charla es totalmente gratuita y dura 15 minutos. Sin compromiso.
                    </p>
                </div>

                {/* Calendly Inline Widget with Responsive Height */}
                <div
                    id="calendly-inline-app"
                    className="calendly-inline-widget w-full rounded-2xl overflow-hidden shadow-sm border border-gray-100/50"
                    data-url="https://calendly.com/elicurcio-91/15min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=a78bfa"
                    style={{ minWidth: '320px', position: 'relative' }}
                >
                    <style>{`
                        #calendly-inline-app {
                            height: 600px !important;
                        }
                        @media (min-width: 768px) {
                            #calendly-inline-app {
                                height: 800px !important;
                            }
                        }
                    `}</style>
                </div>

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
