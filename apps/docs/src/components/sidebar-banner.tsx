import { FullSearchTrigger } from 'fumadocs-ui/layouts/shared/slots/search-trigger';
import { VersionBadge } from '@/components/version-badge';
import type { Locale } from '@/lib/i18n';

/**
 * Top-of-sidebar banner: version chip, then a full-width search box —
 * the same ordering as better-auth's docs. Search lives here instead of the
 * header (see `searchToggle: { enabled: false }` in `lib/layout.shared.tsx`),
 * so `Ctrl K` still opens the same dialog, just triggered from the sidebar.
 */
export function SidebarBanner({ locale }: { locale: Locale }) {
  return (
    <div className="flex flex-col gap-2">
      <VersionBadge locale={locale} />
      <FullSearchTrigger hideIfDisabled className="w-full" />
    </div>
  );
}
