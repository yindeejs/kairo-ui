'use client';

import { Collapsible, CollapsibleTrigger, CollapsiblePanel } from '@kairo-ui/react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface Section {
  trigger: string;
  panel: string;
}

interface CollapsibleCopy {
  free: Section;
  cancelAnytime: Section;
  enterprise: Section;
}

const COPY: Record<Locale, CollapsibleCopy> = {
  en: {
    free: {
      trigger: 'What’s included in the free plan?',
      panel:
        'Unlimited projects, up to 3 collaborators, and community support. Upgrade any time to unlock more seats and priority support.',
    },
    cancelAnytime: {
      trigger: 'Can I cancel at any time?',
      panel:
        'Yes — cancel from your account settings and you’ll keep access until the end of the current billing period.',
    },
    enterprise: {
      trigger: 'Enterprise plan (coming soon)',
      panel: 'Not yet available.',
    },
  },
  th: {
    free: {
      trigger: 'แพ็กเกจฟรีมีอะไรให้บ้าง',
      panel:
        'โปรเจกต์ไม่จำกัด ผู้ร่วมงานได้สูงสุด 3 คน และซัพพอร์ตจากคอมมูนิตี้ อัปเกรดได้ทุกเมื่อเพื่อปลดล็อกที่นั่งเพิ่มและซัพพอร์ตแบบเร่งด่วน',
    },
    cancelAnytime: {
      trigger: 'ยกเลิกได้ทุกเมื่อไหม',
      panel: 'ได้ — ยกเลิกได้จากหน้าตั้งค่าบัญชี และคุณจะยังใช้งานได้จนถึงสิ้นสุดรอบบิลปัจจุบัน',
    },
    enterprise: {
      trigger: 'แพ็กเกจ Enterprise (เร็วๆ นี้)',
      panel: 'ยังไม่พร้อมให้บริการ',
    },
  },
};

/**
 * Interactive demo for the Collapsible docs page: a default (closed)
 * disclosure, one initially open via `defaultOpen`, and a disabled one —
 * stacked to show the height animation alongside the static states.
 */
export function CollapsibleDemo() {
  const t = useDemoCopy(COPY);

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Collapsible>
        <CollapsibleTrigger>{t.free.trigger}</CollapsibleTrigger>
        <CollapsiblePanel>
          <p className="px-3 pb-3 text-sm">{t.free.panel}</p>
        </CollapsiblePanel>
      </Collapsible>
      <Collapsible defaultOpen>
        <CollapsibleTrigger>{t.cancelAnytime.trigger}</CollapsibleTrigger>
        <CollapsiblePanel>
          <p className="px-3 pb-3 text-sm">{t.cancelAnytime.panel}</p>
        </CollapsiblePanel>
      </Collapsible>
      <Collapsible disabled>
        <CollapsibleTrigger>{t.enterprise.trigger}</CollapsibleTrigger>
        <CollapsiblePanel>
          <p className="px-3 pb-3 text-sm">{t.enterprise.panel}</p>
        </CollapsiblePanel>
      </Collapsible>
    </div>
  );
}
