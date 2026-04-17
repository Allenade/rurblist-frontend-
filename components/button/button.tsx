"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { IconImage } from "@/components/icon-image/icon-image";

interface OrangeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  variant?: "orange" | "gray" | "white";
  iconSrc?: string;
  iconAlt?: string;
  iconPosition?: "left" | "right";
  iconSize?: number;
  loading?: boolean; // ✅ NEW
}

const OrangeButton = forwardRef<HTMLButtonElement, OrangeButtonProps>(
  (
    {
      className,
      fullWidth = false,
      variant = "orange",
      iconSrc,
      iconAlt = "icon",
      iconPosition = "left",
      iconSize = 18,
      loading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      orange:
        "bg-[#e87722] hover:bg-[#d66a1a] text-white",
      gray:
        "bg-[#727272] hover:bg-gray-600 text-white",
      white:
        "bg-white text-black hover:bg-gray-100 border border-gray-200",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center gap-2",
          "px-6 py-3 rounded-lg font-medium",
          "transition-all duration-200",
          "disabled:opacity-70 disabled:cursor-not-allowed",
          variantClasses[variant],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {/* 🔄 Loading Spinner */}
        {loading && (
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        )}

        {!loading && iconSrc && iconPosition === "left" && (
          <IconImage
            src={iconSrc}
            alt={iconAlt}
            width={iconSize}
            height={iconSize}
          />
        )}

        <span className="whitespace-nowrap">
          {loading ? "Please wait..." : children}
        </span>

        {!loading && iconSrc && iconPosition === "right" && (
          <IconImage
            src={iconSrc}
            alt={iconAlt}
            width={iconSize}
            height={iconSize}
          />
        )}
      </button>
    );
  }
);

OrangeButton.displayName = "OrangeButton";

export { OrangeButton };