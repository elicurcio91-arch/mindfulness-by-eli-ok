import React from 'react';

const FooterMinimal: React.FC = () => {
  return (
    <footer className="w-full bg-[#FAF9F6] py-12 px-6 border-t border-[#F2EFE9]/60">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright and signature */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-gray-500 font-light">
          <span>© {new Date().getFullYear()} Eli Curcio. Todos los derechos reservados.</span>
          <span className="hidden md:inline text-gray-300">|</span>
          <span className="text-gray-400">Mindfulness & Bienestar</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-gray-500 font-light">
          <a
            href="https://wa.me/541121829771?text=Hola%20Eli,%20quisiera%20consultarte%20por%20el%20acompa%C3%B1amiento%201%3A1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/mindfulnessbyeli"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors duration-300"
          >
            Instagram
          </a>
          <span className="text-gray-300">|</span>
          <span className="text-gray-400 cursor-default">Términos y Condiciones</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterMinimal;
