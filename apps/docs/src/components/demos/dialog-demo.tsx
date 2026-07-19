'use client';

import {
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@kairo-ui/react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface DialogCopy {
  trigger: string;
  title: string;
  description: string;
  cancel: string;
  save: string;
}

const COPY: Record<Locale, DialogCopy> = {
  en: {
    trigger: 'Edit profile',
    title: 'Edit profile',
    description: "Make changes to your profile here. Click save when you're done.",
    cancel: 'Cancel',
    save: 'Save changes',
  },
  th: {
    trigger: 'แก้ไขโปรไฟล์',
    title: 'แก้ไขโปรไฟล์',
    description: 'แก้ไขข้อมูลโปรไฟล์ของคุณที่นี่ แล้วกดบันทึกเมื่อเสร็จ',
    cancel: 'ยกเลิก',
    save: 'บันทึกการเปลี่ยนแปลง',
  },
};

/**
 * Interactive demo for the Dialog docs page: a trigger button opens a modal
 * with a title, description, and a close button.
 */
export function DialogDemo() {
  const t = useDemoCopy(COPY);

  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">{t.trigger}</Button>} />
      <DialogContent>
        <DialogTitle>{t.title}</DialogTitle>
        <DialogDescription>{t.description}</DialogDescription>
        <div className="mt-6 flex justify-end gap-3">
          <DialogClose render={<Button variant="ghost">{t.cancel}</Button>} />
          <DialogClose render={<Button>{t.save}</Button>} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
