import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Homepage');

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-pastel-lavender mb-4 font-sans rtl:font-arabic">{t('title')}</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 font-sans rtl:font-arabic">{t('subtitle')}</p>
      <div className="space-x-4 rtl:space-x-reverse">
        <button className="bg-pastel-peach text-purple-800 px-6 py-3 rounded-soft hover:bg-opacity-80 transition-colors font-bold text-lg shadow-md">
          {t('cta_start')}
        </button>
        <button className="bg-pastel-skyBlue text-blue-800 px-6 py-3 rounded-soft hover:bg-opacity-80 transition-colors font-bold text-lg shadow-md">
          {t('cta_upload')}
        </button>
      </div>
      {/* Placeholder for Kawaii illustrations */}
      <div className="mt-12">
        <p className="text-2xl">🌸✨ Cute illustrations coming soon! ✨🌸</p>
      </div>
    </div>
  );
}
