'use client';

import React from 'react';
import { Switch } from '@nextui-org/react';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';
import { useTheme } from 'next-themes';

export default function ThemeModeToggle() {
  const { theme, setTheme } = useTheme();

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={toggleTheme}
      size='sm'
      color='warning'
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    />
  );
}
