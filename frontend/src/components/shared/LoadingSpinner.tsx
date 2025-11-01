"use client";

import { Loader2 } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * Loading spinner component with configurable sizes
 * @param size - Spinner size (sm, md, lg)
 * @param className - Additional CSS classes
 */
export function LoadingSpinner({ size = "md", className }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className="flex items-center justify-center">
      <Loader2
        className={cn("text-primary animate-spin", sizeClasses[size], className)}
      />
    </div>
  );
}

/**
 * Full-page loading overlay
 */
export function LoadingOverlay() {
  return (
    <div className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <LoadingSpinner size="lg" />
    </div>
  );
}
