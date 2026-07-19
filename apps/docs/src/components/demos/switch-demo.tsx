'use client';

import { useState } from 'react';
import { Switch } from '@kairo-ui/react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface SwitchCopy {
  defaultAria: string;
  default: string;
  controlledAria: string;
  controlled: string;
  onWord: string;
  offWord: string;
  disabledAria: string;
  disabled: string;
}

const COPY: Record<Locale, SwitchCopy> = {
  en: {
    defaultAria: 'Default (uncontrolled)',
    default: 'Default',
    controlledAria: 'Controlled',
    controlled: 'Controlled',
    onWord: 'on',
    offWord: 'off',
    disabledAria: 'Disabled',
    disabled: 'Disabled',
  },
  th: {
    defaultAria: 'ค่าเริ่มต้น (ไม่ควบคุม)',
    default: 'ค่าเริ่มต้น',
    controlledAria: 'ควบคุมด้วยสถานะ',
    controlled: 'ควบคุมด้วยสถานะ',
    onWord: 'เปิด',
    offWord: 'ปิด',
    disabledAria: 'ปิดใช้งาน',
    disabled: 'ปิดใช้งาน',
  },
};

/**
 * Interactive demo for the Switch docs page: an uncontrolled switch, a
 * controlled switch driven by local state, and a disabled switch.
 */
export function SwitchDemo() {
  const [checked, setChecked] = useState(true);
  const t = useDemoCopy(COPY);

  return (
    <div className="flex flex-wrap items-center gap-6">
      <label className="flex items-center gap-2">
        <Switch defaultChecked aria-label={t.defaultAria} />
        <span className="text-sm">{t.default}</span>
      </label>

      <label className="flex items-center gap-2">
        <Switch checked={checked} onCheckedChange={setChecked} aria-label={t.controlledAria} />
        <span className="text-sm">
          {t.controlled} ({checked ? t.onWord : t.offWord})
        </span>
      </label>

      <label className="flex items-center gap-2">
        <Switch disabled defaultChecked aria-label={t.disabledAria} />
        <span className="text-sm">{t.disabled}</span>
      </label>
    </div>
  );
}
