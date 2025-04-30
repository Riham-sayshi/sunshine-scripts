"use client";

import React from 'react';
// import { useTranslations } from 'next-intl'; // Removed unused import

export default function Footer() {
  // const t = useTranslations('Footer'); // Removed unused variable
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pastel-lavender/50 text-purple-800 py-4 mt-12">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {currentYear} CutieTranscribe. All rights reserved.</p>
        {/* Optional: Add links to privacy policy, terms of service, etc. */}
        {/* <p className="mt-1">
          <a href="/privacy" className="hover:underline">Privacy Policy</a> | 
          <a href="/terms" className="hover:underline">Terms of Service</a>
        </p> */}
      </div>
    </footer>
  );
}

