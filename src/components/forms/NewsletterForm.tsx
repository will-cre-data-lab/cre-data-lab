"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterFormData } from "@/lib/validations";
import { Button } from "@/components/ui/Button";

const NewsletterForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thanks for subscribing!",
        });
        reset();
      } else if (response.status === 409) {
        setSubmitStatus({
          type: "error",
          message: "You're already subscribed.",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-3">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-2">
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 text-sm"
          disabled={isSubmitting}
        />
        <Button
          type="submit"
          size="sm"
          isLoading={isSubmitting}
          disabled={isSubmitting}
          className="whitespace-nowrap"
        >
          Subscribe
        </Button>
      </form>

      {errors.email && (
        <p className="text-red-400 text-xs">{errors.email.message}</p>
      )}

      {submitStatus.type && (
        <p
          className={`text-xs ${
            submitStatus.type === "success" ? "text-green-400" : "text-red-400"
          }`}
        >
          {submitStatus.message}
        </p>
      )}
    </div>
  );
};

export { NewsletterForm };