import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import Header from '@/components/layout/Header'; // Adjust path if needed
import Footer from '@/components/layout/Footer'; // Adjust path if needed
import '../globals.css'; // Import global styles

export default function LocaleLayout({
  children,
  params
}) {
  const locale = useLocale();
  const messages = useMessages();

  // Validate that the incoming `locale` parameter is valid
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
