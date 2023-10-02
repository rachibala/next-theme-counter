import { IS_DARK_COOKIE_KEY } from '@/constants/common';
import { CookieManager } from '@/utils/CookieManager';
import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  const setInitialTheme = () => {
    const current = CookieManager.get(IS_DARK_COOKIE_KEY);
    const isInitialDark = current ? current === 'true' : false;
    setIsDark(isInitialDark);
  };

  useEffect(() => {
    setInitialTheme();
  }, []);

  useEffect(() => {
    if (isDark === null) return;

    if (isDark) {
      document?.documentElement?.classList?.add('dark');
    } else {
      document?.documentElement?.classList?.remove('dark');
    }

    CookieManager.set(IS_DARK_COOKIE_KEY, String(isDark));
  }, [isDark]);

  return { isDark, toggleDarkMode };
};

export default useDarkMode;
