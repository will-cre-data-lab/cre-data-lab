'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newsletterSchema, NewsletterFormData } from '@/lib/validations';
import Button from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';

export default function NewsletterForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      setError(null);
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to subscribe');
      }

      setIsSuccess(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to subscribe');
    }
  };

  if (isSuccess) {
    return (
      <div className="flex items-center gap-2 text-green-400">
        <CheckCircle className="w-5 h-5" />
        <p className="text-sm">Successfully subscribed!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <input
          {...register('email')}
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-800 text-white placeholder:text-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
        />
        {errors.email && (
          <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>
        )}
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      <Button
        type="submit"
        size="sm"
        className="w-full"
        isLoading={isSubmitting}
      >
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
}
