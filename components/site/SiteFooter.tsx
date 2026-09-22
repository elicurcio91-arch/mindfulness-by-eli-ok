import React from 'react';
import { handleNavClick, ROUTES } from './navigate';

const WHATSAPP_URL = 'https://wa.me/541121829771?text=Hola%20Eli%2C%20quisiera%20hacerte%20una%20consulta.';
const INSTAGRAM_URL = 'https://www.instagram.com/mindfulnessbyeli';

const SiteFooter: React.FC = () => {
  return (
    <footer className="w-full bg-[#FAF9F6] py-10 px-6 border-t border-[#E8ECE9]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-[#828282]">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Eli Curcio. Todos los derechos reservados.
        </div>

        <nav aria-label="Secciones" className="flex items-center gap-5">
          <a
            href={ROUTES.home}
            onClick={(event) => handleNavClick(event, ROUTES.home)}
            className="hover:text-charcoal transition-colors"
          >
            Inicio
          </a>
          <a
            href={ROUTES.personas}
            onClick={(event) => handleNavClick(event, ROUTES.personas)}
            className="hover:text-charcoal transition-colors"
          >
            Personas
          </a>
          <a
            href={ROUTES.empresas}
            onClick={(event) => handleNavClick(event, ROUTES.empresas)}
            className="hover:text-charcoal transition-colors"
          >
            Empresas
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-charcoal transition-colors"
          >
            WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-charcoal transition-colors"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
