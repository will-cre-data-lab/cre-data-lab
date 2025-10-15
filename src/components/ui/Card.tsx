import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  hoverable?: boolean;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, hoverable = false, className }) => {
  return (
    <div
      className={cn(
        "rounded-lg border border-gray-200 bg-white p-6 shadow-sm",
        hoverable && "transition-transform hover:scale-[1.02] hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export { Card };