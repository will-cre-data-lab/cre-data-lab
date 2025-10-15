"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";

const ContactForm: React.FC = () => {
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
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
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
          message: "Thanks for your message! We'll get back to you within 24-48 hours.",
        });
        reset();
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          {...register("name")}
          label="Name"
          placeholder="Your full name"
          error={errors.name?.message}
          disabled={isSubmitting}
        />

        <Input
          {...register("email")}
          type="email"
          label="Email"
          placeholder="your@email.com"
          error={errors.email?.message}
          disabled={isSubmitting}
        />
      </div>

      <Input
        {...register("subject")}
        label="Subject (Optional)"
        placeholder="What's this about?"
        error={errors.subject?.message}
        disabled={isSubmitting}
      />

      <Textarea
        {...register("message")}
        label="Message"
        placeholder="Tell us how we can help you..."
        rows={5}
        autoResize
        error={errors.message?.message}
        disabled={isSubmitting}
      />

      <Button
        type="submit"
        isLoading={isSubmitting}
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Sending Message..." : "Send Message"}
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

export { ContactForm };