'use client';

import { useState } from 'react';
import {
  NumberField,
  NumberFieldGroup,
  NumberFieldInput,
  NumberFieldIncrement,
  NumberFieldDecrement,
} from '@kairo-ui/react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface NumberFieldCopy {
  quantityUncontrolled: string;
  quantityControlled: string;
  quantityDisabled: string;
  decrease: string;
  increase: string;
  quantityAria: string;
  valueLabel: string;
}

const COPY: Record<Locale, NumberFieldCopy> = {
  en: {
    quantityUncontrolled: 'Quantity (uncontrolled)',
    quantityControlled: 'Quantity (controlled)',
    quantityDisabled: 'Quantity (disabled)',
    decrease: 'Decrease quantity',
    increase: 'Increase quantity',
    quantityAria: 'Quantity',
    valueLabel: 'Value',
  },
  th: {
    quantityUncontrolled: 'จำนวน (ไม่ควบคุม)',
    quantityControlled: 'จำนวน (ควบคุมด้วยสถานะ)',
    quantityDisabled: 'จำนวน (ปิดใช้งาน)',
    decrease: 'ลดจำนวน',
    increase: 'เพิ่มจำนวน',
    quantityAria: 'จำนวน',
    valueLabel: 'ค่า',
  },
};

/**
 * Interactive demo for the NumberField docs page: an uncontrolled quantity
 * stepper clamped to [0, 10], a controlled stepper driven by local state,
 * and a disabled stepper.
 */
export function NumberFieldDemo() {
  const [quantity, setQuantity] = useState<number | null>(3);
  const t = useDemoCopy(COPY);

  return (
    <div className="flex flex-wrap items-start gap-8">
      <label className="flex flex-col gap-2 text-sm">
        <span className="font-medium">{t.quantityUncontrolled}</span>
        <NumberField defaultValue={1} min={0} max={10} className="w-40">
          <NumberFieldGroup>
            <NumberFieldDecrement aria-label={t.decrease} />
            <NumberFieldInput aria-label={t.quantityAria} />
            <NumberFieldIncrement aria-label={t.increase} />
          </NumberFieldGroup>
        </NumberField>
      </label>

      <div className="flex flex-col gap-2">
        <label className="flex flex-col gap-2 text-sm">
          <span className="font-medium">{t.quantityControlled}</span>
          <NumberField
            value={quantity}
            onValueChange={setQuantity}
            min={0}
            max={10}
            className="w-40"
          >
            <NumberFieldGroup>
              <NumberFieldDecrement aria-label={t.decrease} />
              <NumberFieldInput aria-label={t.quantityAria} />
              <NumberFieldIncrement aria-label={t.increase} />
            </NumberFieldGroup>
          </NumberField>
        </label>
        <span className="text-sm" style={{ color: 'var(--kairo-muted-foreground)' }}>
          {t.valueLabel}: {quantity ?? '—'}
        </span>
      </div>

      <label className="flex flex-col gap-2 text-sm">
        <span className="font-medium">{t.quantityDisabled}</span>
        <NumberField defaultValue={5} disabled className="w-40">
          <NumberFieldGroup>
            <NumberFieldDecrement aria-label={t.decrease} />
            <NumberFieldInput aria-label={t.quantityAria} />
            <NumberFieldIncrement aria-label={t.increase} />
          </NumberFieldGroup>
        </NumberField>
      </label>
    </div>
  );
}
