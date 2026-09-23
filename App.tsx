import React, { useEffect, useState } from 'react';
import WorkshopPage from './components/workshop/WorkshopPage';
import HomeChooser from './components/home/HomeChooser';
import PersonasPage from './components/personas/PersonasPage';
import EmpresasPage from './components/empresas/EmpresasPage';
import SiteNav from './components/site/SiteNav';
import SiteFooter from './components/site/SiteFooter';
import { normalizePath, ROUTES } from './components/site/navigate';

const PAGE_META: Record<string, { title: string; description: string }> = {
  [ROUTES.home]: {
    title: 'Mindfulness by Eli',
    description: 'Calma y presencia, para vos o para tu equipo. Workshops de mindfulness para personas y para equipos.',
  },
  [ROUTES.personas]: {
    title: 'Para personas | Mindfulness by Eli',
    description: 'Workshop online de octubre sobre estrés y autoexigencia, y el recorrido de 30 Días de Calma.',
  },
  [ROUTES.empresas]: {
    title: 'Mindfulness para equipos | Mindfulness by Eli',
    description: 'Menos estrés, más presencia y foco en el trabajo. Mindfulness online para equipos. Pedí una propuesta a medida.',
  },
};

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const normalizedPath = normalizePath(currentPath);

  useEffect(() => {
    if (normalizedPath !== ROUTES.workshop && !window.location.hash) {
      window.scrollTo(0, 0);
    }

    if (normalizedPath === ROUTES.workshop) return;

    const meta = PAGE_META[normalizedPath] ?? PAGE_META[ROUTES.home];
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', meta.description);
    }
  }, [normalizedPath]);

  if (normalizedPath === ROUTES.workshop) {
    return <WorkshopPage />;
  }

  let page = <HomeChooser />;
  if (normalizedPath === ROUTES.personas) {
    page = <PersonasPage />;
  } else if (normalizedPath === ROUTES.empresas) {
    page = <EmpresasPage />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-[#2D2D2D] bg-[#FAFAFA] selection:bg-[#8DA396]/20">
      <SiteNav currentPath={normalizedPath} />
      <main className="flex-1 flex flex-col">
        {page}
      </main>
      <SiteFooter />
    </div>
  );
};

export default App;
