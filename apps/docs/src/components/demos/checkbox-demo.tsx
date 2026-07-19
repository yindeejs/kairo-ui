'use client';

import { useState } from 'react';
import { Checkbox } from '@kairo-ui/react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface CheckboxCopy {
  defaultAria: string;
  default: string;
  controlledAria: string;
  controlled: string;
  checkedWord: string;
  uncheckedWord: string;
  indeterminateAria: string;
  indeterminate: string;
  disabledAria: string;
  disabled: string;
}

const COPY: Record<Locale, CheckboxCopy> = {
  en: {
    defaultAria: 'Default (uncontrolled)',
    default: 'Default',
    controlledAria: 'Controlled',
    controlled: 'Controlled',
    checkedWord: 'checked',
    uncheckedWord: 'unchecked',
    indeterminateAria: 'Indeterminate',
    indeterminate: 'Indeterminate',
    disabledAria: 'Disabled',
    disabled: 'Disabled',
  },
  th: {
    defaultAria: 'ค่าเริ่มต้น (ไม่ควบคุม)',
    default: 'ค่าเริ่มต้น',
    controlledAria: 'ควบคุมด้วยสถานะ',
    controlled: 'ควบคุมด้วยสถานะ',
    checkedWord: 'เลือกอยู่',
    uncheckedWord: 'ไม่ได้เลือก',
    indeterminateAria: 'ไม่ระบุสถานะ',
    indeterminate: 'ไม่ระบุสถานะ',
    disabledAria: 'ปิดใช้งาน',
    disabled: 'ปิดใช้งาน',
  },
};

/**
 * Interactive demo for the Checkbox docs page: an uncontrolled checkbox, a
 * controlled checkbox driven by local state, an indeterminate checkbox, and
 * a disabled checkbox.
 */
export function CheckboxDemo() {
  const [checked, setChecked] = useState(true);
  const t = useDemoCopy(COPY);

  return (
    <div className="flex flex-wrap items-center gap-6">
      <label className="flex items-center gap-2">
        <Checkbox defaultChecked aria-label={t.defaultAria} />
        <span className="text-sm">{t.default}</span>
      </label>

      <label className="flex items-center gap-2">
        <Checkbox checked={checked} onCheckedChange={setChecked} aria-label={t.controlledAria} />
        <span className="text-sm">
          {t.controlled} ({checked ? t.checkedWord : t.uncheckedWord})
        </span>
      </label>

      <label className="flex items-center gap-2">
        <Checkbox indeterminate aria-label={t.indeterminateAria} />
        <span className="text-sm">{t.indeterminate}</span>
      </label>

      <label className="flex items-center gap-2">
        <Checkbox disabled defaultChecked aria-label={t.disabledAria} />
        <span className="text-sm">{t.disabled}</span>
      </label>
    </div>
  );
}
