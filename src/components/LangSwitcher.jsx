'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition, useEffect } from 'react';
import { routing } from '@/i18n/routing';

const { locales } = routing;

const flags = {
  fr: '🇫🇷',
  en: '🇬🇧',
  nl: '🇳🇱',
};

export default function LangSwitcher({ direction = 'down' }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const currentLocale = pathname.split('/')[1];

  const handleLocaleChange = (newLocale) => {
    const newPath = pathname.replace(/^\/(fr|en|nl)/, `/${newLocale}`);
    setOpen(false);
    startTransition(() => router.push(newPath));
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 👉 Mobile : 3 langues côte à côte
  if (isMobile) {
    return (
      <div className="flex gap-2 justify-center items-center mt-4 sm:hidden">
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className={`px-3 py-1 text-sm rounded-full border ${
              loc === currentLocale
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700'
            } hover:bg-gray-100 dark:hover:bg-neutral-700 transition`}
          >
            {flags[loc]} {loc.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  // 👉 Desktop : dropdown vers le haut ou le bas
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-24 h-9 flex items-center justify-center gap-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 shadow-sm text-sm font-medium text-gray-800 dark:text-white"
      >
        {flags[currentLocale]} {currentLocale.toUpperCase()}
      </button>

      {open && (
        <div
          className={`absolute z-50 w-24 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 shadow-lg ${
            direction === 'up' ? 'bottom-full mb-1' : 'top-full mt-1'
          }`}
        >
          {locales
            .filter((loc) => loc !== currentLocale)
            .map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 text-center"
              >
                {flags[loc]} {loc.toUpperCase()}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
