'use client';

import { Tabs, TabsList, Tab, TabPanel } from '@kairo-ui/react';
import type { Locale } from '@/lib/i18n';
import { useDemoCopy } from './use-demo-locale';

interface TabsCopy {
  account: string;
  password: string;
  team: string;
  accountPanel: string;
  passwordPanel: string;
  teamPanel: string;
}

const COPY: Record<Locale, TabsCopy> = {
  en: {
    account: 'Account',
    password: 'Password',
    team: 'Team',
    accountPanel: 'Update your account details here.',
    passwordPanel: 'Change your password here.',
    teamPanel: 'Manage your team members here.',
  },
  th: {
    account: 'บัญชี',
    password: 'รหัสผ่าน',
    team: 'ทีม',
    accountPanel: 'อัปเดตรายละเอียดบัญชีของคุณที่นี่',
    passwordPanel: 'เปลี่ยนรหัสผ่านของคุณที่นี่',
    teamPanel: 'จัดการสมาชิกในทีมของคุณที่นี่',
  },
};

/**
 * Interactive demo for the Tabs docs page: three tabs (one disabled) with an
 * animated active-tab indicator and arrow-key navigation between them.
 */
export function TabsDemo() {
  const t = useDemoCopy(COPY);

  return (
    <Tabs defaultValue="account" className="w-full max-w-sm">
      <TabsList>
        <Tab value="account">{t.account}</Tab>
        <Tab value="password">{t.password}</Tab>
        <Tab value="team" disabled>
          {t.team}
        </Tab>
      </TabsList>
      <TabPanel value="account">{t.accountPanel}</TabPanel>
      <TabPanel value="password">{t.passwordPanel}</TabPanel>
      <TabPanel value="team">{t.teamPanel}</TabPanel>
    </Tabs>
  );
}
