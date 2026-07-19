import { useRouterState } from '@tanstack/react-router';
import { type Locale, localeFromPathname } from '@/lib/i18n';

/**
 * Current locale, read from the router's location rather than `window`.
 *
 * Every demo is embedded in a prerendered MDX page and hydrated on the
 * client — the same component tree renders on the server. `useRouterState`
 * returns the router's location on both sides (it is seeded from the
 * request URL during SSR), so this is safe to call unconditionally at
 * render time. Reading `window.location` instead would render `'en'` on
 * the server (`window` doesn't exist there) and the real locale on the
 * client, which is a hydration mismatch — see `docs-header.tsx` and
 * `search-dialog.tsx`, which already read locale this way.
 */
export function useDemoLocale(): Locale {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return localeFromPathname(pathname);
}

/**
 * Picks the current locale's entry out of a `Record<Locale, T>` copy table.
 * Usage: `const t = useDemoCopy(COPY);` where `COPY` is declared above the
 * component, following the `HOME_COPY` pattern in `lib/home-copy.ts`.
 */
export function useDemoCopy<T>(copy: Record<Locale, T>): T {
  const locale = useDemoLocale();
  return copy[locale];
}
