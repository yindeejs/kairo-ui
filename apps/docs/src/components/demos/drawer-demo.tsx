'use client';

import {
  Button,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from '@kairo-ui/react';
import type { DrawerSide } from '@kairo-ui/react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

const sides: DrawerSide[] = ['top', 'right', 'bottom', 'left'];

interface DrawerCopy {
  sideLabel: Record<DrawerSide, string>;
  description: (label: string) => string;
  close: string;
}

const COPY: Record<Locale, DrawerCopy> = {
  en: {
    sideLabel: { top: 'top', right: 'right', bottom: 'bottom', left: 'left' },
    description: (label) => `This panel is pinned to the ${label} edge and slides in from there.`,
    close: 'Close',
  },
  th: {
    sideLabel: { top: 'บน', right: 'ขวา', bottom: 'ล่าง', left: 'ซ้าย' },
    description: (label) => `แผงนี้ถูกปักไว้ที่ขอบด้าน${label} และเลื่อนเข้ามาจากด้านนั้น`,
    close: 'ปิด',
  },
};

/**
 * Interactive demo for the Drawer docs page: one trigger per side, each
 * opening a drawer pinned to (and sliding in from) that edge of the preview.
 */
export function DrawerDemo() {
  const t = useDemoCopy(COPY);

  return (
    <div className="flex flex-wrap gap-3">
      {sides.map((side) => (
        <Drawer key={side} side={side}>
          <DrawerTrigger
            render={<Button variant="outline">{capitalize(t.sideLabel[side])}</Button>}
          />
          <DrawerContent>
            <DrawerTitle>{capitalize(t.sideLabel[side])} drawer</DrawerTitle>
            <DrawerDescription>{t.description(t.sideLabel[side])}</DrawerDescription>
            <div className="mt-6 flex justify-end">
              <DrawerClose render={<Button variant="ghost">{t.close}</Button>} />
            </div>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
