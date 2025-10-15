"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistSchema, type WaitlistFormData } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface WaitlistFormProps {
  productType: "course" | "tool";
  productSlug: string;
  source?: string;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({
  productType,
  productSlug,
  source,
}) => {
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
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      productType,
      productSlug,
      source,
    },
  });

  const onSubmit = async (data: WaitlistFormData) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/waitlist", {
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
          message: "Thanks for joining the waitlist! We'll notify you when it's ready.",
        });
        reset({ email: "", productType, productSlug, source });
      } else if (response.status === 409) {
        setSubmitStatus({
          type: "error",
          message: "You're already on the waitlist for this product.",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        {...register("email")}
        type="email"
        placeholder="Enter your email address"
        error={errors.email?.message}
        disabled={isSubmitting}
      />

      <Button
        type="submit"
        isLoading={isSubmitting}
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Joining Waitlist..." : "Join Waitlist"}
      </Button>

      {submitStatus.type && (
        <div
          className={`text-sm ${
            submitStatus.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {submitStatus.message}
        </div>
      )}
    </form>
  );
};

export { WaitlistForm };