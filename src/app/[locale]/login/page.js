"use client";

import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function LoginPage() {
  const t = useTranslations('Auth');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    // Placeholder for actual login logic
    console.log('Logging in with:', email, password);
    // Simulate login success/failure
    if (email === "user@example.com" && password === "password") {
      // Redirect to dashboard (implement actual routing later)
      alert('Login successful! Redirecting...');
      // router.push('/dashboard'); 
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Card className="bg-white shadow-xl">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-purple-800">
            {t('loginTitle')}
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-soft shadow-sm -space-y-px">
              <div>
                <Input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder={t('emailPlaceholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-t-soft"
                />
              </div>
              <div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder={t('passwordPlaceholder')}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-b-soft"
                />
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link href="/register" className="font-medium text-purple-600 hover:text-purple-500">
                  {t('noAccount')} {t('registerLink')}
                </Link>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full" variant="peach">
                {t('loginButton')}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

