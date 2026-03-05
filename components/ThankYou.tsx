
import React, { useEffect, useState } from 'react';

const ThankYou: React.FC = () => {
    const [muted, setMuted] = useState(true);
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
                        En este breve video te explico cómo puedo ayudarte a regular el estres y gestionar mejor las emociones.
                    </p>
                </div>

                {/* YouTube Video Embed - autoplay, muted, custom unmute button */}
                <div className="w-full mt-8" style={{ maxWidth: '700px' }}>
                    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0 }}>
                        <iframe
                            key={muted ? 'muted' : 'unmuted'}
                            src={`https://www.youtube.com/embed/ZQmaiV3prVo?autoplay=1&mute=${muted ? 1 : 0}&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=ZQmaiV3prVo&disablekb=1&fs=0`}
                            title="Video explicativo"
                            allow="autoplay; encrypted-media"
                            allowFullScreen={false}
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
                        {/* Custom mute/unmute button */}
                        <button
                            onClick={() => setMuted(!muted)}
                            title={muted ? 'Activar sonido' : 'Silenciar'}
                            style={{
                                position: 'absolute',
                                bottom: '14px',
                                right: '14px',
                                zIndex: 10,
                                background: 'rgba(0,0,0,0.55)',
                                border: 'none',
                                borderRadius: '50%',
                                width: '42px',
                                height: '42px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backdropFilter: 'blur(4px)',
                                transition: 'background 0.2s',
                            }}
                            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.8)')}
                            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.55)')}
                        >
                            {muted ? (
                                // Muted icon (speaker with X)
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97V10.18l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 19l2 2L21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
                                </svg>
                            ) : (
                                // Unmuted icon (speaker with waves)
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="white">
                                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <p className="text-gray-800 font-medium italic text-lg md:text-xl mt-6">
                    El siguiente paso es agendar tu charla gratuita de claridad de 15 minutos para entender qué estás necesitando hoy y ver si este acompañamiento es adecuado para vos.
                </p>

                {/* Subtle separator */}
                <div className="w-full max-w-[200px] h-[1px] bg-gray-200 my-12"></div>

                <p className="text-lg md:text-xl text-[#333333] font-semibold mb-10">
                    Elegí tu horario disponible 👇
                </p>

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
