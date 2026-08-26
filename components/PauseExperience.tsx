import React, { useState, useEffect, useRef } from 'react';

const PROMPTS = [
  'Notá dónde tu cuerpo está apoyado.',
  'Dejá que llegue una respiración, sin cambiarla.',
  'Sentí los hombros, la mandíbula, las manos.',
  'No hay nada que tengas que arreglar ahora.',
  'Solo notá qué está pasando.'
];

const PauseExperience: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [audioMode, setAudioMode] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Cycle prompts based on the elapsed time (every 12 seconds)
  useEffect(() => {
    if (isActive && !isPaused) {
      const elapsed = 60 - timeLeft;
      const index = Math.min(Math.floor(elapsed / 12), PROMPTS.length - 1);
      setCurrentPromptIndex(index);
    }
  }, [timeLeft, isActive, isPaused]);

  // Timer logic
  useEffect(() => {
    if (isActive && !isPaused && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            if (timerRef.current) clearInterval(timerRef.current);
            setIsActive(false);
            setIsCompleted(true);
            setIsPlayingAudio(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, isPaused, timeLeft]);

  const handleStart = () => {
    setTimeLeft(60);
    setIsActive(true);
    setIsPaused(false);
    setIsCompleted(false);
    setCurrentPromptIndex(0);
    if (audioMode) {
      setIsPlayingAudio(true);
    }
  };

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
    if (audioMode) {
      setIsPlayingAudio(!isPaused ? false : true);
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    setTimeLeft(60);
    setIsCompleted(false);
    setIsPlayingAudio(false);
  };

  const handleAudioModeToggle = () => {
    const nextMode = !audioMode;
    setAudioMode(nextMode);
    if (isActive && !isPaused) {
      setIsPlayingAudio(nextMode);
    }
  };

  // SVG circular progress details
  const radius = 90;
  const stroke = 4;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (timeLeft / 60) * circumference;

  return (
    <section id="pausa" className="section-presence py-20 px-6 md:py-28 relative overflow-hidden transition-colors duration-500">
      {/* Decorative subtle background shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#f3efe8] filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-[#ebe4da] filter blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        {/* Header Block: only visible if not started and not completed */}
        {!isActive && !isCompleted && (
          <div className="mb-12 animate-fade-in">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#4A7C59] block mb-3">
              Un minuto de presencia
            </span>
            <h2 className="text-3xl md:text-5xl font-editorial text-[#2a2520] mb-6 leading-tight">
              Probá una pausa de 60 segundos
            </h2>
            <p className="text-base md:text-lg text-[#6b6560] max-w-xl mx-auto leading-relaxed">
              Un instante para frenar el ritmo mental, aterrizar en el cuerpo y reconectar con el aquí y ahora. Elegí cómo preferís guiarte e iniciá la experiencia.
            </p>
          </div>
        )}

        {/* Active Timer and Breathing Container */}
        {(isActive || isCompleted) && (
          <div className="flex flex-col items-center justify-center min-h-[360px] md:min-h-[400px]">
            
            {/* The Main Animated Circle */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center mb-8">
              
              {/* Outer Breathing Circles - Active when running */}
              {isActive && !isPaused && (
                <>
                  <div className="absolute w-56 h-56 md:w-64 md:h-64 rounded-full bg-[#4A7C59]/10 breathing-circle" />
                  <div className="absolute w-44 h-44 md:w-52 md:h-52 rounded-full bg-[#4A7C59]/5 breathing-circle-inner" />
                </>
              )}

              {/* Circular Progress Indicator */}
              <svg className="absolute top-0 left-0 w-full h-full -rotate-90 pointer-events-none">
                <circle
                  className="text-[#F5F2ED]"
                  strokeWidth={stroke}
                  stroke="currentColor"
                  fill="transparent"
                  r={normalizedRadius}
                  cx="50%"
                  cy="50%"
                />
                {isActive && (
                  <circle
                    className="text-[#4A7C59] transition-all duration-1000 ease-linear"
                    strokeWidth={stroke}
                    strokeDasharray={circumference + ' ' + circumference}
                    style={{ strokeDashoffset }}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={normalizedRadius}
                    cx="50%"
                    cy="50%"
                  />
                )}
              </svg>

              {/* Inside the Circle Content */}
              <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
                {isCompleted ? (
                  <span className="text-[#4A7C59] font-medium tracking-wider text-sm uppercase">
                    Completado
                  </span>
                ) : (
                  <>
                    <span className="text-4xl md:text-5xl font-light text-[#2a2520] tracking-tighter tabular-nums mb-1">
                      {timeLeft}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-[#6b6560]">
                      segundos
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Prompts Display */}
            {isActive && (
              <div className="h-20 flex items-center justify-center px-4 max-w-lg mx-auto">
                <p 
                  key={currentPromptIndex} 
                  className="text-lg md:text-xl font-editorial italic text-[#2a2520] leading-relaxed transition-opacity duration-700 animate-fade-in"
                >
                  "{PROMPTS[currentPromptIndex]}"
                </p>
              </div>
            )}

            {/* Completed state message */}
            {isCompleted && (
              <div className="max-w-xl mx-auto px-4 animate-fade-in-slow">
                <p className="text-xl md:text-2xl font-editorial italic text-[#2a2520] mb-4">
                  "¿Cómo se siente tu cuerpo ahora?"
                </p>
                <p className="text-sm md:text-base text-[#6b6560] leading-relaxed mb-8">
                  Un solo minuto de pausa consciente tiene el poder de restaurar tu sistema nervioso y devolverte la presencia para el resto del día.
                </p>
              </div>
            )}

            {/* Playback status for voice toggle preview */}
            {isPlayingAudio && !isPaused && (
              <div className="flex items-center gap-2 mb-6 px-4 py-1.5 bg-[#4A7C59]/10 rounded-full text-xs text-[#4A7C59] animate-pulse">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
                <span>Reproduciendo audio guía (Voz de Eli - Demo)</span>
              </div>
            )}

            {/* Action buttons during or after experience */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
              {isActive && (
                <>
                  <button
                    onClick={handleTogglePause}
                    className="px-6 py-2.5 rounded-full border border-[#2a2520]/25 text-[#2a2520] hover:bg-[#2a2520]/5 transition-colors font-medium text-sm flex items-center gap-2"
                  >
                    {isPaused ? (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Reanudar
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Pausar
                      </>
                    )}
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full border border-[#2a2520]/15 text-[#6b6560] hover:bg-[#2a2520]/5 transition-colors text-sm font-medium"
                  >
                    Salir
                  </button>
                </>
              )}

              {isCompleted && (
                <>
                  <button
                    onClick={handleStart}
                    className="px-6 py-3 bg-[#4A7C59] text-white rounded-full hover:bg-[#3A6347] transition-all shadow-md font-medium text-sm"
                  >
                    Volver a respirar
                  </button>
                  <a
                    href="https://wa.me/541121829771?text=Hola%20Eli,%20hice%20la%20pausa%20de%2060%20segundos%20y%20me%20gustaría%20saber%20más%20sobre%20los%20programas."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-[#2a2520] border border-[#2a2520]/20 rounded-full hover:bg-[#F5F2ED] transition-all font-medium text-sm flex items-center gap-2"
                  >
                    Conversar con Eli
                    <svg className="w-4 h-4 text-[#4A7C59]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </>
              )}
            </div>

          </div>
        )}

        {/* Start / Set Up Controls: only visible before starting */}
        {!isActive && !isCompleted && (
          <div className="flex flex-col items-center justify-center space-y-6 animate-fade-in delay-200">
            {/* Audio Toggle Option */}
            <div className="flex items-center gap-3 bg-[#F5F2ED] px-5 py-3 rounded-full border border-[#2a2520]/5 max-w-sm">
              <button
                type="button"
                onClick={handleAudioModeToggle}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  audioMode ? 'bg-[#4A7C59]' : 'bg-[#d8d3cb]'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    audioMode ? 'translate-x-4' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className="text-xs md:text-sm text-[#2a2520] text-left font-medium select-none">
                Escuchar con la voz de Eli (Demo)
              </span>
            </div>

            {/* Start Button */}
            <button
              onClick={handleStart}
              className="px-8 py-4 bg-[#4A7C59] text-white font-heading font-medium tracking-wide rounded-full text-base shadow-lg shadow-[#4A7C59]/25 hover:bg-[#3A6347] hover:-translate-y-0.5 transition-all duration-300"
            >
              Empezar la pausa
            </button>

            <span className="text-[11px] text-[#6b6560] tracking-wider uppercase">
              No necesitás activar el sonido para completarlo
            </span>
          </div>
        )}

      </div>
    </section>
  );
};

export default PauseExperience;
