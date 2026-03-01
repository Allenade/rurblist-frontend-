'use client'

import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"
import { IconImage } from "@/components/icon-image/icon-image"

interface OrangeButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
  variant?: "orange" | "gray" | "white"
  iconSrc?: string
  iconAlt?: string
  iconPosition?: "left" | "right"
  iconSize?: number
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
      children,
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
        "bg-white text-black hover:bg-gray-100 border border-gray-200"
    }

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2",
          "px-6 py-3 rounded-lg font-medium",
          "transition-colors duration-200",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantClasses[variant],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {iconSrc && iconPosition === "left" && (
          <IconImage
            src={iconSrc}
            alt={iconAlt}
            width={iconSize}
            height={iconSize}
          />
        )}

        <span className="whitespace-nowrap">
          {children}
        </span>

        {iconSrc && iconPosition === "right" && (
          <IconImage
            src={iconSrc}
            alt={iconAlt}
            width={iconSize}
            height={iconSize}
          />
        )}
      </button>
    )
  }
)

OrangeButton.displayName = "OrangeButton"

export { OrangeButton }