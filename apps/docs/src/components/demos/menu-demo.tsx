'use client';

import { useState } from 'react';
import {
  Button,
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuGroup,
  MenuGroupLabel,
  MenuSeparator,
  MenuSub,
  MenuSubmenuTrigger,
} from '@kairo-ui/react';
import { FilePlus2, Pencil, Trash2, Mail, Link2 } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface MenuCopy {
  file: string;
  newFile: string;
  rename: string;
  delete: string;
  wordWrap: string;
  theme: string;
  light: string;
  dark: string;
  system: string;
  share: string;
  email: string;
  copyLink: string;
  openMenu: string;
  closeMenu: string;
  profile: string;
  settings: string;
  signOut: string;
  openLabel: string;
  trueWord: string;
  falseWord: string;
}

const COPY: Record<Locale, MenuCopy> = {
  en: {
    file: 'File',
    newFile: 'New file',
    rename: 'Rename',
    delete: 'Delete',
    wordWrap: 'Word wrap',
    theme: 'Theme',
    light: 'Light',
    dark: 'Dark',
    system: 'System',
    share: 'Share',
    email: 'Email',
    copyLink: 'Copy link',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    profile: 'Profile',
    settings: 'Settings',
    signOut: 'Sign out',
    openLabel: 'Open',
    trueWord: 'true',
    falseWord: 'false',
  },
  th: {
    file: 'ไฟล์',
    newFile: 'สร้างไฟล์ใหม่',
    rename: 'เปลี่ยนชื่อ',
    delete: 'ลบ',
    wordWrap: 'ตัดคำอัตโนมัติ',
    theme: 'ธีม',
    light: 'สว่าง',
    dark: 'มืด',
    system: 'ตามระบบ',
    share: 'แชร์',
    email: 'อีเมล',
    copyLink: 'คัดลอกลิงก์',
    openMenu: 'เปิดเมนู',
    closeMenu: 'ปิดเมนู',
    profile: 'โปรไฟล์',
    settings: 'ตั้งค่า',
    signOut: 'ออกจากระบบ',
    openLabel: 'เปิดอยู่',
    trueWord: 'ใช่',
    falseWord: 'ไม่ใช่',
  },
};

/**
 * Interactive demo for the Menu docs page: a "File" menu with icon items, a
 * disabled item, a checkbox item, a labelled radio group and a submenu, plus
 * a second menu whose open state is driven by local state.
 */
export function MenuDemo() {
  const [wordWrap, setWordWrap] = useState(true);
  const [theme, setTheme] = useState('system');
  const [open, setOpen] = useState(false);
  const t = useDemoCopy(COPY);

  return (
    <div className="flex flex-wrap items-start gap-8">
      <Menu>
        <MenuTrigger render={<Button variant="outline">{t.file}</Button>} />
        <MenuContent>
          <MenuItem>
            <span className="flex items-center gap-2">
              <FilePlus2 aria-hidden className="h-4 w-4" />
              {t.newFile}
            </span>
          </MenuItem>
          <MenuItem>
            <span className="flex items-center gap-2">
              <Pencil aria-hidden className="h-4 w-4" />
              {t.rename}
            </span>
          </MenuItem>
          <MenuItem disabled>
            <span className="flex items-center gap-2">
              <Trash2 aria-hidden className="h-4 w-4" />
              {t.delete}
            </span>
          </MenuItem>
          <MenuSeparator />
          <MenuCheckboxItem checked={wordWrap} onCheckedChange={setWordWrap}>
            {t.wordWrap}
          </MenuCheckboxItem>
          <MenuGroup>
            <MenuGroupLabel>{t.theme}</MenuGroupLabel>
            <MenuRadioGroup value={theme} onValueChange={setTheme}>
              <MenuRadioItem value="light">{t.light}</MenuRadioItem>
              <MenuRadioItem value="dark">{t.dark}</MenuRadioItem>
              <MenuRadioItem value="system">{t.system}</MenuRadioItem>
            </MenuRadioGroup>
          </MenuGroup>
          <MenuSeparator />
          <MenuSub>
            <MenuSubmenuTrigger>{t.share}</MenuSubmenuTrigger>
            <MenuContent>
              <MenuItem>
                <span className="flex items-center gap-2">
                  <Mail aria-hidden className="h-4 w-4" />
                  {t.email}
                </span>
              </MenuItem>
              <MenuItem>
                <span className="flex items-center gap-2">
                  <Link2 aria-hidden className="h-4 w-4" />
                  {t.copyLink}
                </span>
              </MenuItem>
            </MenuContent>
          </MenuSub>
        </MenuContent>
      </Menu>

      <div className="flex flex-col gap-2">
        <Menu open={open} onOpenChange={setOpen}>
          <MenuTrigger
            render={<Button variant="outline">{open ? t.closeMenu : t.openMenu}</Button>}
          />
          <MenuContent>
            <MenuItem>{t.profile}</MenuItem>
            <MenuItem>{t.settings}</MenuItem>
            <MenuItem>{t.signOut}</MenuItem>
          </MenuContent>
        </Menu>
        <span className="text-sm" style={{ color: 'var(--kairo-muted-foreground)' }}>
          {t.openLabel}: {open ? t.trueWord : t.falseWord}
        </span>
      </div>
    </div>
  );
}
