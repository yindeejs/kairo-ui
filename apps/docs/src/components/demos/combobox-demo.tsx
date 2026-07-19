'use client';

import { useState } from 'react';
import {
  Combobox,
  ComboboxControl,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxClear,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxSeparator,
} from '@kairo-ui/react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

type FruitValue = 'apple' | 'banana' | 'cherry' | 'grape' | 'orange';

interface Fruit {
  value: FruitValue;
  label: string;
}

interface ComboboxCopy {
  apple: string;
  banana: string;
  cherry: string;
  grape: string;
  orange: string;
  ariaFruit: string;
  ariaFruitControlled: string;
  ariaFruitGrouped: string;
  searchPlaceholder: string;
  pickPlaceholder: string;
  citrus: string;
  selectedLabel: string;
  noneLabel: string;
}

const COPY: Record<Locale, ComboboxCopy> = {
  en: {
    apple: 'Apple',
    banana: 'Banana',
    cherry: 'Cherry',
    grape: 'Grape',
    orange: 'Orange',
    ariaFruit: 'Fruit',
    ariaFruitControlled: 'Fruit (controlled)',
    ariaFruitGrouped: 'Fruit (grouped)',
    searchPlaceholder: 'Search fruit…',
    pickPlaceholder: 'Pick a fruit',
    citrus: 'Citrus',
    selectedLabel: 'Selected',
    noneLabel: 'none',
  },
  th: {
    apple: 'แอปเปิล',
    banana: 'กล้วย',
    cherry: 'เชอร์รี',
    grape: 'องุ่น',
    orange: 'ส้ม',
    ariaFruit: 'ผลไม้',
    ariaFruitControlled: 'ผลไม้ (ควบคุมด้วยสถานะ)',
    ariaFruitGrouped: 'ผลไม้ (จัดกลุ่ม)',
    searchPlaceholder: 'ค้นหาผลไม้…',
    pickPlaceholder: 'เลือกผลไม้',
    citrus: 'ตระกูลส้ม',
    selectedLabel: 'เลือกแล้ว',
    noneLabel: 'ไม่มี',
  },
};

/**
 * Interactive demo for the Combobox docs page: an uncontrolled filterable
 * combobox with a default value, a controlled one driven by local state, and
 * a static (unfiltered) combobox showing a group label and a separator.
 */
export function ComboboxDemo() {
  const t = useDemoCopy(COPY);
  const fruits: Fruit[] = [
    { value: 'apple', label: t.apple },
    { value: 'banana', label: t.banana },
    { value: 'cherry', label: t.cherry },
    { value: 'grape', label: t.grape },
    { value: 'orange', label: t.orange },
  ];
  const [fruit, setFruit] = useState<Fruit | null>(fruits[1]);

  return (
    <div className="flex flex-wrap items-start gap-8">
      <Combobox items={fruits} defaultValue={fruits[0]}>
        <ComboboxControl className="w-56">
          <ComboboxInput aria-label={t.ariaFruit} placeholder={t.searchPlaceholder} />
          <ComboboxClear />
          <ComboboxTrigger />
        </ComboboxControl>
        <ComboboxContent>
          <ComboboxEmpty />
          <ComboboxList>
            {(item: Fruit) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>

      <div className="flex flex-col gap-2">
        <Combobox items={fruits} value={fruit} onValueChange={setFruit}>
          <ComboboxControl className="w-56">
            <ComboboxInput aria-label={t.ariaFruitControlled} placeholder={t.searchPlaceholder} />
            <ComboboxClear />
            <ComboboxTrigger />
          </ComboboxControl>
          <ComboboxContent>
            <ComboboxEmpty />
            <ComboboxList>
              {(item: Fruit) => (
                <ComboboxItem key={item.value} value={item}>
                  {item.label}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <span className="text-sm" style={{ color: 'var(--kairo-muted-foreground)' }}>
          {t.selectedLabel}: {fruit?.label ?? t.noneLabel}
        </span>
      </div>

      <Combobox>
        <ComboboxControl className="w-56">
          <ComboboxInput aria-label={t.ariaFruitGrouped} placeholder={t.pickPlaceholder} />
        </ComboboxControl>
        <ComboboxContent>
          <ComboboxList>
            <ComboboxItem value="apple">{t.apple}</ComboboxItem>
            <ComboboxItem value="banana">{t.banana}</ComboboxItem>
            <ComboboxSeparator />
            <ComboboxGroup>
              <ComboboxGroupLabel>{t.citrus}</ComboboxGroupLabel>
              <ComboboxItem value="orange">{t.orange}</ComboboxItem>
            </ComboboxGroup>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
