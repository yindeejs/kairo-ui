'use client';

import { useState } from 'react';
import { RadioGroup, Radio } from '@kairo-ui/react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface RadioGroupCopy {
  planUncontrolledAria: string;
  planControlledAria: string;
  planOneDisabledAria: string;
  planDisabledGroupAria: string;
  free: string;
  pro: string;
  team: string;
  proUnavailable: string;
  selectedLabel: string;
}

const COPY: Record<Locale, RadioGroupCopy> = {
  en: {
    planUncontrolledAria: 'Plan (uncontrolled)',
    planControlledAria: 'Plan (controlled)',
    planOneDisabledAria: 'Plan (one option disabled)',
    planDisabledGroupAria: 'Plan (disabled group)',
    free: 'Free',
    pro: 'Pro',
    team: 'Team',
    proUnavailable: 'Pro (unavailable)',
    selectedLabel: 'Selected',
  },
  th: {
    planUncontrolledAria: 'แพ็กเกจ (ไม่ควบคุม)',
    planControlledAria: 'แพ็กเกจ (ควบคุมด้วยสถานะ)',
    planOneDisabledAria: 'แพ็กเกจ (ตัวเลือกหนึ่งปิดใช้งาน)',
    planDisabledGroupAria: 'แพ็กเกจ (กลุ่มปิดใช้งาน)',
    free: 'ฟรี',
    pro: 'โปร',
    team: 'ทีม',
    proUnavailable: 'โปร (ไม่พร้อมใช้งาน)',
    selectedLabel: 'เลือกแล้ว',
  },
};

/**
 * Interactive demo for the RadioGroup docs page: an uncontrolled group with a
 * default value, a controlled group driven by local state, a group with one
 * disabled option, and a fully disabled group.
 */
export function RadioGroupDemo() {
  const [plan, setPlan] = useState('pro');
  const t = useDemoCopy(COPY);

  return (
    <div className="flex flex-wrap items-start gap-8">
      <RadioGroup aria-label={t.planUncontrolledAria} defaultValue="free">
        <label className="flex items-center gap-2">
          <Radio value="free" /> {t.free}
        </label>
        <label className="flex items-center gap-2">
          <Radio value="pro" /> {t.pro}
        </label>
        <label className="flex items-center gap-2">
          <Radio value="team" /> {t.team}
        </label>
      </RadioGroup>

      <div className="flex flex-col gap-2">
        <RadioGroup aria-label={t.planControlledAria} value={plan} onValueChange={setPlan}>
          <label className="flex items-center gap-2">
            <Radio value="free" /> {t.free}
          </label>
          <label className="flex items-center gap-2">
            <Radio value="pro" /> {t.pro}
          </label>
          <label className="flex items-center gap-2">
            <Radio value="team" /> {t.team}
          </label>
        </RadioGroup>
        <span className="text-sm" style={{ color: 'var(--kairo-muted-foreground)' }}>
          {t.selectedLabel}: {plan}
        </span>
      </div>

      <RadioGroup aria-label={t.planOneDisabledAria} defaultValue="free">
        <label className="flex items-center gap-2">
          <Radio value="free" /> {t.free}
        </label>
        <label className="flex items-center gap-2">
          <Radio value="pro" disabled /> {t.proUnavailable}
        </label>
        <label className="flex items-center gap-2">
          <Radio value="team" /> {t.team}
        </label>
      </RadioGroup>

      <RadioGroup aria-label={t.planDisabledGroupAria} defaultValue="pro" disabled>
        <label className="flex items-center gap-2">
          <Radio value="free" /> {t.free}
        </label>
        <label className="flex items-center gap-2">
          <Radio value="pro" /> {t.pro}
        </label>
        <label className="flex items-center gap-2">
          <Radio value="team" /> {t.team}
        </label>
      </RadioGroup>
    </div>
  );
}
