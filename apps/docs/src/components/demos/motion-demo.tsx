'use client';

import { useState } from 'react';
import { Button } from '@kairo-ui/react';
import { AnimatedNumber, Reveal } from '@kairo-ui/motion-react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface MotionCopy {
  addButton: string;
  revealText: string;
}

const COPY: Record<Locale, MotionCopy> = {
  en: {
    addButton: 'Add 137',
    revealText: 'I animate in the first time I scroll into view.',
  },
  th: {
    addButton: 'เพิ่ม 137',
    revealText: 'ฉันจะเคลื่อนไหวเข้ามาในครั้งแรกที่เลื่อนเข้ามาในมุมมอง',
  },
};

/**
 * Interactive demo for the Motion docs page: a button that bumps a number
 * spring-animated by `<AnimatedNumber>`, and a `<Reveal>` that animates its
 * children in the first time they scroll into view.
 */
export function MotionDemo() {
  const [value, setValue] = useState(1280);
  const t = useDemoCopy(COPY);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-4">
        <AnimatedNumber value={value} className="text-3xl font-semibold tabular-nums" />
        <Button variant="outline" onClick={() => setValue((current) => current + 137)}>
          {t.addButton}
        </Button>
      </div>

      <Reveal
        variant="slideUp"
        className="rounded-md border p-4 text-sm"
        style={{ borderColor: 'var(--kairo-border)' }}
      >
        {t.revealText}
      </Reveal>
    </div>
  );
}
