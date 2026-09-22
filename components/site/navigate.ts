import type { MouseEvent } from 'react';

export const ROUTES = {
  home: '/',
  personas: '/personas',
  empresas: '/empresas',
  workshop: '/workshop',
} as const;

export function normalizePath(path: string): string {
  const withoutQuery = path.split('?')[0].split('#')[0];
  const stripped = withoutQuery.toLowerCase().replace(/\/$/, '');
  return stripped || '/';
}

/** Client-side navigation that still works if JavaScript does not intercept the click. */
export function handleNavClick(event: MouseEvent<HTMLAnchorElement>, path: string) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  event.preventDefault();

  const current = normalizePath(window.location.pathname);
  const next = normalizePath(path);

  if (current === next) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
