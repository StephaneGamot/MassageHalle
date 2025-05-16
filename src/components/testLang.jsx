'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { routing } from '@/i18n/routing';

const { locales } = routing;

const flags = {
  fr: '🇫🇷',
  en: '🇬🇧',
  nl: '🇳🇱',
};

export default function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);

  const currentLocale = pathname.split('/')[1];

  const handleLocaleChange = (newLocale) => {
    const newPath = pathname.replace(/^\/(fr|en|nl)/, `/${newLocale}`);
    setOpen(false);
    startTransition(() => router.push(newPath));
  };

  return (
    <div
      className={`transition-all duration-300 overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 shadow-sm w-24 ${
        open ? 'h-28' : 'h-9'
      }`}
    >
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full h-9 flex items-center justify-center gap-2 text-sm font-medium text-gray-800 dark:text-white"
      >
        {flags[currentLocale]} {currentLocale.toUpperCase()}
      </button>

      <div
        className={`flex flex-col items-center justify-center transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {locales
          .filter((loc) => loc !== currentLocale)
          .map((loc) => (
            <button
              key={loc}
              onClick={() => handleLocaleChange(loc)}
              className="text-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700 text-sm text-gray-700 dark:text-gray-200"
            >
              {flags[loc]} {loc.toUpperCase()}
            </button>
          ))}
      </div>
    </div>
  );
}