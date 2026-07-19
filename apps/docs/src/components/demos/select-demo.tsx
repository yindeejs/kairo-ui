'use client';

import { useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectGroupLabel,
  SelectSeparator,
} from '@kairo-ui/react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface SelectCopy {
  apple: string;
  banana: string;
  grape: string;
  orange: string;
  ariaFruit: string;
  ariaFruitControlled: string;
  placeholder: string;
  citrus: string;
  selectedLabel: string;
  noneLabel: string;
}

const COPY: Record<Locale, SelectCopy> = {
  en: {
    apple: 'Apple',
    banana: 'Banana',
    grape: 'Grape',
    orange: 'Orange',
    ariaFruit: 'Fruit',
    ariaFruitControlled: 'Fruit (controlled)',
    placeholder: 'Select a fruit',
    citrus: 'Citrus',
    selectedLabel: 'Selected',
    noneLabel: 'none',
  },
  th: {
    apple: 'แอปเปิล',
    banana: 'กล้วย',
    grape: 'องุ่น',
    orange: 'ส้ม',
    ariaFruit: 'ผลไม้',
    ariaFruitControlled: 'ผลไม้ (ควบคุมด้วยสถานะ)',
    placeholder: 'เลือกผลไม้',
    citrus: 'ตระกูลส้ม',
    selectedLabel: 'เลือกแล้ว',
    noneLabel: 'ไม่มี',
  },
};

/**
 * Interactive demo for the Select docs page: an uncontrolled select with a
 * grouped option and a separator, plus a controlled select driven by local
 * state.
 */
export function SelectDemo() {
  const t = useDemoCopy(COPY);
  const fruits = [
    { value: 'apple', label: t.apple },
    { value: 'banana', label: t.banana },
    { value: 'grape', label: t.grape },
    { value: 'orange', label: t.orange },
  ];
  const [value, setValue] = useState<string | null>('banana');

  return (
    <div className="flex flex-wrap items-start gap-8">
      <Select items={fruits} defaultValue="apple">
        <SelectTrigger aria-label={t.ariaFruit} className="w-40">
          <SelectValue placeholder={t.placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">{t.apple}</SelectItem>
          <SelectItem value="banana">{t.banana}</SelectItem>
          <SelectSeparator />
          <SelectGroup>
            <SelectGroupLabel>{t.citrus}</SelectGroupLabel>
            <SelectItem value="orange">{t.orange}</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="flex flex-col gap-2">
        <Select items={fruits} value={value} onValueChange={setValue}>
          <SelectTrigger aria-label={t.ariaFruitControlled} className="w-40">
            <SelectValue placeholder={t.placeholder} />
          </SelectTrigger>
          <SelectContent>
            {fruits.map((fruit) => (
              <SelectItem key={fruit.value} value={fruit.value}>
                {fruit.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-sm" style={{ color: 'var(--kairo-muted-foreground)' }}>
          {t.selectedLabel}: {value ?? t.noneLabel}
        </span>
      </div>
    </div>
  );
}
