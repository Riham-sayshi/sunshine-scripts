"use client"; // Add this directive for client-side hooks

import { useLocale } from 'next-intl'; // Removed unused useTranslations
import { usePathname, useRouter } from 'next/navigation';
// import Link from 'next/link'; // Removed unused Link import

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  
  // Function to switch language
  const switchLanguage = (newLocale) => {
    // Get the path without the locale prefix
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    // Navigate to the same path but with the new locale
    router.push(`/${newLocale}${pathWithoutLocale || '/'}`); // Ensure root path works
  };

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <button 
        onClick={() => switchLanguage('en')}
        className={`px-2 py-1 rounded-soft text-sm transition-colors ${locale === 'en' ? 'bg-pastel-lavender text-purple-800 font-bold' : 'hover:bg-pastel-lavender/30'}`}
      >
        English
      </button>
      <span>|</span>
      <button 
        onClick={() => switchLanguage('ar')}
        className={`px-2 py-1 rounded-soft text-sm transition-colors ${locale === 'ar' ? 'bg-pastel-lavender text-purple-800 font-bold' : 'hover:bg-pastel-lavender/30'}`}
      >
        العربية
      </button>
    </div>
  );
}
