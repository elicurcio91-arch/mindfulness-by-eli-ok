
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
        <div className="max-w-xs animate-fade-in">
          <h3 className="text-xl font-bold mb-4 font-outfit">Eli Curcio</h3>
          <p className="text-gray-500 font-medium leading-relaxed mb-8">
            Acompañandote a regular tu respuesta al estrés y recuperar tu bienestar emocional a través de mindfulness.
          </p>
          <a
            href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20consultarte%20por%20el%20acompa%C3%B1amiento%201%3A1"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-button"
          >
            Hablar por WhatsApp
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-16 md:gap-32 w-full md:w-auto">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Seguime</span>
            <a
              href="https://www.instagram.com/mindfulnessbyeli"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-gray-600 hover:text-primary transition-colors font-semibold"
              aria-label="Instagram"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Contacto</span>
            <span className="text-gray-600 font-semibold font-outfit">eli@mindfulnessbyeli.com</span>
            <span className="text-gray-500 text-sm">Buenos Aires, Argentina</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 uppercase tracking-widest font-bold">
        <div className="flex items-center gap-8">
          <span>© 2026 Eli Curcio</span>
          <span className="opacity-50">•</span>
          <span>Acompañamiento 1:1 Online</span>
        </div>
        <div className="flex gap-8">
          <span className="hover:text-primary cursor-pointer transition-colors">Términos</span>
          <span className="hover:text-primary cursor-pointer transition-colors">Privacidad</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
