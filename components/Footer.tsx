
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <a
            href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20consultarte%20por%20el%20acompa%C3%B1amiento%201%3A1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-gray-900 font-extrabold text-xl hover:text-green-600 transition-colors py-4 px-8 rounded-full border-2 border-gray-100 shadow-sm hover:shadow-md"
          >
            <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.19-.573c.961.54 1.905.866 3.103.866h.002c3.182 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm3.435 8.169c-.144.404-.73.738-1.012.781-.282.044-.633.069-1.077-.074-.298-.096-.682-.234-1.16-.438-2.035-.865-3.344-2.942-3.444-3.076-.1-.134-.741-.986-.741-1.882 0-.895.467-1.334.633-1.517.167-.183.366-.229.489-.229.123 0 .245.001.353.006.111.006.262-.042.411.319.149.361.509 1.242.553 1.332.044.091.074.197.014.316-.06.12-.089.195-.18.298-.09.103-.19.23-.27.309-.09.079-.184.165-.079.345.105.18.468.772.999 1.242.686.608 1.263.797 1.444.887.18.09.288.075.394-.047.106-.122.454-.528.576-.709.122-.181.245-.152.411-.091.167.061 1.054.498 1.238.59.183.09.306.134.351.211.045.077.045.445-.1.849z" />
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.981-3.584c-.614-1.062-.937-2.277-.936-3.522.003-3.832 3.121-6.949 6.953-6.949 1.856 0 3.599.723 4.91 2.036 1.31 1.313 2.031 3.056 2.031 4.913-.003 3.833-3.121 6.951-6.954 6.951z" />
              </svg>
            </div>
            <span>Hablar por WhatsApp</span>
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <a
            href="https://www.instagram.com/mindfulnessbyeli"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-gray-400 hover:text-pink-600 transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <span className="text-gray-400 font-extrabold uppercase tracking-[0.2em] text-[10px]">Sesiones 100% online</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-300 uppercase tracking-widest font-black">
        <span>© 2026 Eli Curcio</span>
        <div className="flex gap-8">
          <span>Términos</span>
          <span>Privacidad</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
