'use client';

import { useState } from 'react';
import {
  Slider,
  SliderLabel,
  SliderValue,
  SliderControl,
  SliderTrack,
  SliderIndicator,
  SliderThumb,
} from '@kairo-ui/react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface SliderCopy {
  brightness: string;
  volumeControlled: string;
  priceRange: string;
  disabled: string;
  minPrice: string;
  maxPrice: string;
}

const COPY: Record<Locale, SliderCopy> = {
  en: {
    brightness: 'Brightness',
    volumeControlled: 'Volume (controlled)',
    priceRange: 'Price range',
    disabled: 'Disabled',
    minPrice: 'Minimum price',
    maxPrice: 'Maximum price',
  },
  th: {
    brightness: 'ความสว่าง',
    volumeControlled: 'ระดับเสียง (ควบคุมด้วยสถานะ)',
    priceRange: 'ช่วงราคา',
    disabled: 'ปิดใช้งาน',
    minPrice: 'ราคาต่ำสุด',
    maxPrice: 'ราคาสูงสุด',
  },
};

/**
 * Interactive demo for the Slider docs page: an uncontrolled slider with a
 * label and value readout, a controlled slider driven by local state, a
 * two-thumb range slider, and a disabled slider.
 */
export function SliderDemo() {
  const [volume, setVolume] = useState(40);
  const t = useDemoCopy(COPY);

  return (
    <div className="flex w-full max-w-sm flex-col gap-8">
      <Slider defaultValue={30}>
        <div className="flex items-center justify-between">
          <SliderLabel>{t.brightness}</SliderLabel>
          <SliderValue />
        </div>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb />
          </SliderTrack>
        </SliderControl>
      </Slider>

      {/*
        `onValueChange` hands back `number | readonly number[]` because Slider
        also drives multi-thumb ranges — a single-thumb slider has to narrow it
        before it fits a `useState<number>` setter.
      */}
      <Slider
        value={volume}
        onValueChange={(value) => setVolume(typeof value === 'number' ? value : value[0])}
      >
        <div className="flex items-center justify-between">
          <SliderLabel>{t.volumeControlled}</SliderLabel>
          <SliderValue />
        </div>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb />
          </SliderTrack>
        </SliderControl>
      </Slider>

      <Slider defaultValue={[20, 80]}>
        <div className="flex items-center justify-between">
          <SliderLabel>{t.priceRange}</SliderLabel>
          <SliderValue />
        </div>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb index={0} aria-label={t.minPrice} />
            <SliderThumb index={1} aria-label={t.maxPrice} />
          </SliderTrack>
        </SliderControl>
      </Slider>

      <Slider defaultValue={60} disabled>
        <div className="flex items-center justify-between">
          <SliderLabel>{t.disabled}</SliderLabel>
          <SliderValue />
        </div>
        <SliderControl>
          <SliderTrack>
            <SliderIndicator />
            <SliderThumb />
          </SliderTrack>
        </SliderControl>
      </Slider>
    </div>
  );
}
