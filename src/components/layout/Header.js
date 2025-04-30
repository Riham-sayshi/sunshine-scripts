"use client"; // Add this directive for client-side hooks

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { useState } from 'react'; // Import useState for mobile menu

export default function Header() {
  const t = useTranslations('Navigation');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-pastel-lavender p-4 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-xl font-bold text-purple-800">
          <Link href="/">CutieTranscribe</Link> 
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-purple-600">{t('home')}</Link>
          {/* Add other nav links later (Dashboard, Pricing) */}
          <Link href="/login" className="hover:text-purple-600">{t('login')}</Link>
          <Link href="/register" className="bg-pastel-peach text-purple-800 px-4 py-2 rounded-soft hover:bg-opacity-80 transition-colors">{t('register')}</Link>
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <LanguageSwitcher /> {/* Show language switcher on mobile too */} 
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-4 p-2 rounded-md text-purple-800 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            aria-label="Toggle menu"
          >
            {/* Simple Hamburger Icon */}
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-pastel-lavender/90 rounded-soft shadow-lg p-4 space-y-2">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-purple-800 hover:bg-purple-100">{t('home')}</Link>
          {/* Add other nav links later */}
          <Link href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-purple-800 hover:bg-purple-100">{t('login')}</Link>
          <Link href="/register" className="block px-3 py-2 rounded-md text-base font-medium text-purple-800 hover:bg-purple-100">{t('register')}</Link>
        </div>
      )}
    </header>
  );
}

