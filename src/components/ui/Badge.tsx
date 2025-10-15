import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  variant?: "new" | "comingSoon" | "featured" | "popular";
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ variant = "new", children, className }) => {
  const variants = {
    new: "bg-green-100 text-green-800 border-green-200",
    comingSoon: "bg-yellow-100 text-yellow-800 border-yellow-200",
    featured: "bg-brand-100 text-brand-800 border-brand-200",
    popular: "bg-purple-100 text-purple-800 border-purple-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export { Badge };