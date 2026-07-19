'use client';

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuGroup,
  ContextMenuGroupLabel,
  ContextMenuSeparator,
} from '@kairo-ui/react';
import { Copy, Clipboard, Pencil, Trash2 } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface ContextMenuCopy {
  triggerArea: string;
  copy: string;
  paste: string;
  delete: string;
  more: string;
  rename: string;
}

const COPY: Record<Locale, ContextMenuCopy> = {
  en: {
    triggerArea: 'Right-click (or long-press on touch) this area to open the menu',
    copy: 'Copy',
    paste: 'Paste',
    delete: 'Delete',
    more: 'More',
    rename: 'Rename',
  },
  th: {
    triggerArea: 'คลิกขวา (หรือกดค้างบนหน้าจอสัมผัส) บริเวณนี้เพื่อเปิดเมนู',
    copy: 'คัดลอก',
    paste: 'วาง',
    delete: 'ลบ',
    more: 'เพิ่มเติม',
    rename: 'เปลี่ยนชื่อ',
  },
};

/**
 * Interactive demo for the ContextMenu docs page: a clearly labelled target
 * area that opens a menu (right click, or long-press on touch) with
 * icon + keyboard-shortcut items, a disabled item, and a labelled group
 * separated from the rest.
 */
export function ContextMenuDemo() {
  const t = useDemoCopy(COPY);

  return (
    <ContextMenu>
      <ContextMenuTrigger
        className="flex h-32 w-full max-w-sm items-center justify-center rounded-md border border-dashed p-4 text-center text-sm"
        style={{ borderColor: 'var(--kairo-border)', color: 'var(--kairo-muted-foreground)' }}
      >
        {t.triggerArea}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <span className="flex items-center gap-2">
            <Copy aria-hidden className="h-4 w-4" />
            {t.copy}
          </span>
          <span className="text-xs" style={{ color: 'var(--kairo-muted-foreground)' }}>
            Ctrl+C
          </span>
        </ContextMenuItem>
        <ContextMenuItem>
          <span className="flex items-center gap-2">
            <Clipboard aria-hidden className="h-4 w-4" />
            {t.paste}
          </span>
          <span className="text-xs" style={{ color: 'var(--kairo-muted-foreground)' }}>
            Ctrl+V
          </span>
        </ContextMenuItem>
        <ContextMenuItem disabled>
          <span className="flex items-center gap-2">
            <Trash2 aria-hidden className="h-4 w-4" />
            {t.delete}
          </span>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuGroupLabel>{t.more}</ContextMenuGroupLabel>
          <ContextMenuItem>
            <span className="flex items-center gap-2">
              <Pencil aria-hidden className="h-4 w-4" />
              {t.rename}
            </span>
          </ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}
