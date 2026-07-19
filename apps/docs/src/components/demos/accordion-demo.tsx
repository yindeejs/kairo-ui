'use client';

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionPanel,
} from '@kairo-ui/react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface Section {
  trigger: string;
  panel: string;
}

interface AccordionCopy {
  shipping: Section;
  returns: Section;
  support: Section;
}

const COPY: Record<Locale, AccordionCopy> = {
  en: {
    shipping: {
      trigger: 'What are the shipping options?',
      panel:
        'Standard shipping arrives in 3-5 business days. Express shipping arrives the next business day.',
    },
    returns: {
      trigger: 'What is the return policy?',
      panel: 'Unused items can be returned within 30 days of delivery for a full refund.',
    },
    support: {
      trigger: 'Priority support (unavailable on this plan)',
      panel: 'Upgrade to a paid plan to unlock priority support.',
    },
  },
  th: {
    shipping: {
      trigger: 'ตัวเลือกการจัดส่งมีอะไรบ้าง',
      panel: 'จัดส่งแบบมาตรฐานถึงภายใน 3-5 วันทำการ ส่วนจัดส่งด่วนถึงในวันทำการถัดไป',
    },
    returns: {
      trigger: 'นโยบายการคืนสินค้าเป็นอย่างไร',
      panel: 'สินค้าที่ยังไม่ได้ใช้งานสามารถคืนได้ภายใน 30 วันหลังจัดส่ง รับเงินคืนเต็มจำนวน',
    },
    support: {
      trigger: 'ซัพพอร์ตแบบเร่งด่วน (ไม่พร้อมใช้งานในแพ็กเกจนี้)',
      panel: 'อัปเกรดเป็นแพ็กเกจเสียเงินเพื่อปลดล็อกซัพพอร์ตแบบเร่งด่วน',
    },
  },
};

/**
 * Interactive demo for the Accordion docs page: three FAQ-style sections
 * (one disabled), open one at a time, with the first expanded by default.
 */
export function AccordionDemo() {
  const t = useDemoCopy(COPY);

  return (
    <Accordion defaultValue={['shipping']} className="w-full max-w-md">
      <AccordionItem value="shipping">
        <AccordionHeader>
          <AccordionTrigger>{t.shipping.trigger}</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>{t.shipping.panel}</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionHeader>
          <AccordionTrigger>{t.returns.trigger}</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>{t.returns.panel}</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="support" disabled>
        <AccordionHeader>
          <AccordionTrigger>{t.support.trigger}</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>{t.support.panel}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
