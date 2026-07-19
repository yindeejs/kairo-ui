'use client';

import { useState } from 'react';
import { Toggle, ToggleGroup } from '@kairo-ui/react';
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline, Star } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface ToggleGroupDemoCopy {
  toggle: {
    defaultAria: string;
    bold: string;
    controlledAria: string;
    on: string;
    off: string;
    disabledAria: string;
    disabled: string;
  };
  single: {
    groupAria: string;
    left: string;
    center: string;
    right: string;
  };
  multiple: {
    groupAria: string;
    bold: string;
    italic: string;
    underline: string;
  };
  icon: {
    favorite: string;
  };
}

const COPY: Record<Locale, ToggleGroupDemoCopy> = {
  en: {
    toggle: {
      defaultAria: 'Default (uncontrolled)',
      bold: 'Bold',
      controlledAria: 'Controlled',
      on: 'On',
      off: 'Off',
      disabledAria: 'Disabled',
      disabled: 'Disabled',
    },
    single: {
      groupAria: 'Text alignment',
      left: 'Align left',
      center: 'Align center',
      right: 'Align right',
    },
    multiple: {
      groupAria: 'Text formatting',
      bold: 'Bold',
      italic: 'Italic',
      underline: 'Underline',
    },
    icon: {
      favorite: 'Save to favorites',
    },
  },
  th: {
    toggle: {
      defaultAria: 'ค่าเริ่มต้น (ไม่ควบคุม)',
      bold: 'ตัวหนา',
      controlledAria: 'ควบคุมด้วยสถานะ',
      on: 'เปิด',
      off: 'ปิด',
      disabledAria: 'ปิดใช้งาน',
      disabled: 'ปิดใช้งาน',
    },
    single: {
      groupAria: 'การจัดตำแหน่งข้อความ',
      left: 'จัดชิดซ้าย',
      center: 'จัดกึ่งกลาง',
      right: 'จัดชิดขวา',
    },
    multiple: {
      groupAria: 'การจัดรูปแบบข้อความ',
      bold: 'ตัวหนา',
      italic: 'ตัวเอียง',
      underline: 'ขีดเส้นใต้',
    },
    icon: {
      favorite: 'บันทึกลงรายการโปรด',
    },
  },
};

/**
 * Interactive demo for the Toggle docs page: an uncontrolled toggle, a
 * controlled toggle driven by local state, and a disabled toggle.
 */
export function ToggleDemo() {
  const [pressed, setPressed] = useState(true);
  const t = useDemoCopy(COPY).toggle;

  return (
    <div className="flex flex-wrap items-center gap-4">
      <Toggle defaultPressed aria-label={t.defaultAria}>
        {t.bold}
      </Toggle>
      <Toggle pressed={pressed} onPressedChange={setPressed} aria-label={t.controlledAria}>
        {pressed ? t.on : t.off}
      </Toggle>
      <Toggle disabled defaultPressed aria-label={t.disabledAria}>
        {t.disabled}
      </Toggle>
    </div>
  );
}

/**
 * Interactive demo for the Toggle docs page: a single-select `ToggleGroup`
 * (text alignment) where pressing one item unpresses the others.
 */
export function ToggleGroupSingleDemo() {
  const t = useDemoCopy(COPY).single;

  return (
    <ToggleGroup defaultValue={['center']} aria-label={t.groupAria}>
      <Toggle value="left" aria-label={t.left}>
        <AlignLeft aria-hidden className="h-4 w-4" />
      </Toggle>
      <Toggle value="center" aria-label={t.center}>
        <AlignCenter aria-hidden className="h-4 w-4" />
      </Toggle>
      <Toggle value="right" aria-label={t.right}>
        <AlignRight aria-hidden className="h-4 w-4" />
      </Toggle>
    </ToggleGroup>
  );
}

/**
 * Interactive demo for the Toggle docs page: a multi-select `ToggleGroup`
 * (text formatting) where several items can stay pressed at once.
 */
export function ToggleGroupMultipleDemo() {
  const t = useDemoCopy(COPY).multiple;

  return (
    <ToggleGroup multiple defaultValue={['bold']} aria-label={t.groupAria}>
      <Toggle value="bold" aria-label={t.bold}>
        <Bold aria-hidden className="h-4 w-4" />
      </Toggle>
      <Toggle value="italic" aria-label={t.italic}>
        <Italic aria-hidden className="h-4 w-4" />
      </Toggle>
      <Toggle value="underline" aria-label={t.underline}>
        <Underline aria-hidden className="h-4 w-4" />
      </Toggle>
    </ToggleGroup>
  );
}

/**
 * Interactive demo for the Toggle docs page: a standalone icon-only toggle.
 * `Toggle` renders no visible text of its own, so an icon-only instance
 * always needs an `aria-label` to stay accessible.
 */
export function ToggleIconDemo() {
  const t = useDemoCopy(COPY).icon;

  return (
    <Toggle aria-label={t.favorite}>
      <Star aria-hidden className="h-4 w-4" />
    </Toggle>
  );
}
