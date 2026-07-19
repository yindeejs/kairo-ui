'use client';

import {
  Button,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogClose,
} from '@kairo-ui/react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface AlertDialogCopy {
  trigger: string;
  title: string;
  description: string;
  cancel: string;
  delete: string;
}

const COPY: Record<Locale, AlertDialogCopy> = {
  en: {
    trigger: 'Delete account',
    title: 'Delete account?',
    description:
      'This will permanently delete your account and all of its data. This action cannot be undone.',
    cancel: 'Cancel',
    delete: 'Delete',
  },
  th: {
    trigger: 'ลบบัญชี',
    title: 'ลบบัญชีใช่ไหม',
    description: 'การดำเนินการนี้จะลบบัญชีของคุณและข้อมูลทั้งหมดอย่างถาวร ไม่สามารถย้อนกลับได้',
    cancel: 'ยกเลิก',
    delete: 'ลบ',
  },
};

/**
 * Interactive demo for the AlertDialog docs page: a trigger button opens an
 * alert dialog that demands an explicit Cancel/Delete decision — clicking
 * the backdrop does nothing.
 */
export function AlertDialogDemo() {
  const t = useDemoCopy(COPY);

  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline">{t.trigger}</Button>} />
      <AlertDialogContent>
        <AlertDialogTitle>{t.title}</AlertDialogTitle>
        <AlertDialogDescription>{t.description}</AlertDialogDescription>
        <div className="mt-6 flex justify-end gap-3">
          <AlertDialogClose render={<Button variant="ghost">{t.cancel}</Button>} />
          <AlertDialogClose render={<Button>{t.delete}</Button>} />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
