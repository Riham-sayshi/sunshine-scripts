import React from 'react';
import { useTranslations } from 'next-intl';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function RegisterPage() {
  const t = useTranslations('Navigation'); // Assuming login/register strings are here
  // Placeholder state and handlers for form
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    // TODO: Implement actual registration logic here
    console.log('Register attempt:', { name, email, password });
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    // Simulate success/failure
    // setError('Registration failed. Please try again.');
  };

  return (
    <div className="flex justify-center items-center py-12">
      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-purple-800 mb-6">{t('register')}</h2>
        <form onSubmit={handleRegister}>
          <Input
            label="Full Name"
            name="name"
            type="text"
            placeholder="Cutie Batootie"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <Button type="submit" variant="peach" className="w-full">
            {t('register')}
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-purple-600 hover:text-purple-800">
            {t('login')}
          </Link>
        </p>
      </Card>
    </div>
  );
}
