'use client';

import { Button, Tooltip, TooltipProvider } from '@kairo-ui/react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface TooltipCopy {
  topLabel: string;
  bottomLabel: string;
  rightLabel: string;
  savedContent: string;
  deleteContent: string;
  newTabContent: string;
}

const COPY: Record<Locale, TooltipCopy> = {
  en: {
    topLabel: 'Top (default)',
    bottomLabel: 'Bottom',
    rightLabel: 'Right',
    savedContent: 'Saved to your library',
    deleteContent: 'Deletes this item permanently',
    newTabContent: 'Opens in a new tab',
  },
  th: {
    topLabel: 'บน (ค่าเริ่มต้น)',
    bottomLabel: 'ล่าง',
    rightLabel: 'ขวา',
    savedContent: 'บันทึกลงคลังของคุณแล้ว',
    deleteContent: 'ลบรายการนี้อย่างถาวร',
    newTabContent: 'เปิดในแท็บใหม่',
  },
};

/**
 * Interactive demo for the Tooltip docs page: a few tooltips positioned on
 * different sides, all sharing a single `TooltipProvider` so hovering from
 * one trigger to the next opens the next tooltip instantly.
 */
export function TooltipDemo() {
  const t = useDemoCopy(COPY);

  return (
    <TooltipProvider>
      <div className="flex flex-wrap items-center gap-6">
        <Tooltip content={t.savedContent}>
          <Button variant="outline">{t.topLabel}</Button>
        </Tooltip>

        <Tooltip content={t.deleteContent} side="bottom">
          <Button variant="outline">{t.bottomLabel}</Button>
        </Tooltip>

        <Tooltip content={t.newTabContent} side="right">
          <Button variant="outline">{t.rightLabel}</Button>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
