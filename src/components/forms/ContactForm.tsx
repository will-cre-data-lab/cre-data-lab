'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '@/lib/validations';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import { CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setError(null);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }

      setIsSuccess(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {isSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800">
          <CheckCircle className="w-5 h-5" />
          <p>Thank you! We've received your message and will get back to you soon.</p>
        </div>
      )}

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          {error}
        </div>
      )}

      <Input
        {...register('name')}
        label="Name"
        placeholder="Your name"
        error={errors.name?.message}
      />

      <Input
        {...register('email')}
        type="email"
        label="Email"
        placeholder="your.email@example.com"
        error={errors.email?.message}
      />

      <Input
        {...register('subject')}
        label="Subject"
        placeholder="How can we help?"
        error={errors.subject?.message}
      />

      <Textarea
        {...register('message')}
        label="Message"
        rows={6}
        placeholder="Tell us more about your inquiry..."
        error={errors.message?.message}
      />

      <Button type="submit" size="lg" className="w-full" isLoading={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}
