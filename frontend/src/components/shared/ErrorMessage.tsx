"use client";

import { AlertCircle, XCircle } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

interface ErrorMessageProps {
  title?: string;
  message: string;
  variant?: "error" | "warning";
  className?: string;
  onDismiss?: () => void;
}

/**
 * Error message component for displaying error states
 * @param title - Error title
 * @param message - Error message text
 * @param variant - Error severity (error or warning)
 * @param onDismiss - Optional dismiss callback
 */
export function ErrorMessage({
  title = "Error",
  message,
  variant = "error",
  className,
  onDismiss,
}: ErrorMessageProps) {
  const Icon = variant === "error" ? AlertCircle : AlertCircle;
  const bgColor = variant === "error" ? "bg-destructive/10" : "bg-yellow-50";
  const textColor = variant === "error" ? "text-destructive" : "text-yellow-800";
  const borderColor = variant === "error" ? "border-destructive/20" : "border-yellow-200";

  return (
    <div
      className={cn("relative rounded-lg border p-4", bgColor, borderColor, className)}
    >
      <div className="flex gap-3">
        <Icon className={cn("h-5 w-5 flex-shrink-0", textColor)} />
        <div className="flex-1">
          <h3 className={cn("font-semibold", textColor)}>{title}</h3>
          <p className={cn("mt-1 text-sm", textColor)}>{message}</p>
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className={cn(
              "flex-shrink-0 rounded-sm opacity-70 hover:opacity-100",
              textColor
            )}
          >
            <XCircle className="h-4 w-4" />
            <span className="sr-only">Dismiss</span>
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Inline error text for form fields
 */
export function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <p className="text-destructive mt-1 flex items-center gap-1 text-sm">
      <AlertCircle className="h-3 w-3" />
      {message}
    </p>
  );
}
