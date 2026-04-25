'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useTransition, useEffect, useRef } from 'react';
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
  const dropdownRef = useRef(null);

  const currentLocale = pathname.split('/')[1];

  const handleLocaleChange = (newLocale) => {
    const newPath = pathname.replace(/^\/(fr|en|nl)/, `/${newLocale}`);
    setOpen(false);
    startTransition(() => router.push(newPath));
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* Fermer avec Escape ou clic extérieur */
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [open]);

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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-24 h-9 flex items-center justify-center gap-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 shadow-sm text-sm font-medium text-gray-800 dark:text-white min-h-[44px]"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Changer de langue"
      >
        {flags[currentLocale]} {currentLocale.toUpperCase()}
      </button>

      {open && (
        <div
          className={`absolute z-50 w-24 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 shadow-lg ${
            direction === 'up' ? 'bottom-full mb-1' : 'top-full mt-1'
          }`}
          role="listbox"
          aria-label="Langues disponibles"
        >
          {locales
            .filter((loc) => loc !== currentLocale)
            .map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className="w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 text-center min-h-[44px]"
                role="option"
                aria-selected={false}
              >
                {flags[loc]} {loc.toUpperCase()}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}
