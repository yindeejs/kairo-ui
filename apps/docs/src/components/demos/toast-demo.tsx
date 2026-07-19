'use client';

import { Button, ToastProvider, useToast } from '@kairo-ui/react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface ToastCopy {
  button: string;
  title: string;
  description: string;
}

const COPY: Record<Locale, ToastCopy> = {
  en: {
    button: 'Show toast',
    title: 'Saved',
    description: 'Your changes have been saved.',
  },
  th: {
    button: 'แสดง toast',
    title: 'บันทึกแล้ว',
    description: 'บันทึกการเปลี่ยนแปลงของคุณเรียบร้อยแล้ว',
  },
};

function ShowToastButton() {
  const toast = useToast();
  const t = useDemoCopy(COPY);

  return (
    <Button
      variant="outline"
      onClick={() =>
        toast.add({
          title: t.title,
          description: t.description,
        })
      }
    >
      {t.button}
    </Button>
  );
}

/**
 * Interactive demo for the Toast docs page: a `ToastProvider` wraps a button
 * that queues a toast via `useToast().add(...)` on click.
 */
export function ToastDemo() {
  return (
    <ToastProvider>
      <ShowToastButton />
    </ToastProvider>
  );
}
