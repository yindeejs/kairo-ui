'use client';

import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
  PopoverClose,
  PopoverArrow,
} from '@kairo-ui/react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface PopoverCopy {
  trigger: string;
  title: string;
  description: string;
  done: string;
}

const COPY: Record<Locale, PopoverCopy> = {
  en: {
    trigger: 'Share',
    title: 'Share this document',
    description: 'Anyone with the link will be able to view this.',
    done: 'Done',
  },
  th: {
    trigger: 'แชร์',
    title: 'แชร์เอกสารนี้',
    description: 'ทุกคนที่มีลิงก์นี้จะสามารถดูเอกสารนี้ได้',
    done: 'เสร็จสิ้น',
  },
};

/**
 * Interactive demo for the Popover docs page: a trigger button opens an
 * anchored popup with an arrow, a title, a description, and a close button.
 */
export function PopoverDemo() {
  const t = useDemoCopy(COPY);

  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline">{t.trigger}</Button>} />
      <PopoverContent>
        <PopoverArrow />
        <PopoverTitle>{t.title}</PopoverTitle>
        <PopoverDescription>{t.description}</PopoverDescription>
        <div className="mt-4 flex justify-end">
          <PopoverClose render={<Button variant="ghost">{t.done}</Button>} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
