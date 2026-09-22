import React from 'react';
import { handleNavClick, normalizePath, ROUTES } from './navigate';

const LINKS = [
  { href: ROUTES.home, label: 'Inicio' },
  { href: ROUTES.personas, label: 'Personas' },
  { href: ROUTES.empresas, label: 'Empresas' },
] as const;

interface SiteNavProps {
  currentPath: string;
}

const SiteNav: React.FC<SiteNavProps> = ({ currentPath }) => {
  const activePath = normalizePath(currentPath);

  return (
    <header className="sticky top-0 z-40 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#E8ECE9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3">
        <a
          href={ROUTES.home}
          onClick={(event) => handleNavClick(event, ROUTES.home)}
          className="flex items-center gap-3 shrink-0 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8DA396] rounded-sm"
          aria-label="Mindfulness by Eli, ir a inicio"
        >
          <img
            src="/logo.png"
            alt=""
            className="h-7 sm:h-8 w-auto transition-transform group-hover:scale-105"
          />
          <span className="font-editorial text-lg text-charcoal tracking-wide hidden sm:inline">
            Mindfulness by Eli
          </span>
        </a>

        <nav aria-label="Secciones del sitio" className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((link) => {
            const isActive = activePath === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                onClick={(event) => handleNavClick(event, link.href)}
                className={`px-2.5 sm:px-3 py-2 text-[13px] sm:text-sm tracking-wide rounded-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8DA396] ${
                  isActive
                    ? 'text-charcoal font-medium'
                    : 'text-[#5A5A5A] hover:text-charcoal'
                }`}
              >
                <span className={isActive ? 'border-b border-[#8DA396] pb-0.5' : undefined}>
                  {link.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default SiteNav;
