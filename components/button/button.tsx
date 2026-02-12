import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface OrangeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
  variant?: 'orange' | 'gray'
}

const OrangeButton = forwardRef<HTMLButtonElement, OrangeButtonProps>(
  ({ className, fullWidth = false, variant = 'orange', children, ...props }, ref) => {
    const variantClasses = {
      orange: "bg-[#e87722] hover:bg-[#d66a1a]",
      gray: "bg-[#727272] hover:bg-gray-600"
    }

    return (
      <button
        ref={ref}
        className={cn(
          "py-4 px-6 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          variantClasses[variant],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

OrangeButton.displayName = "OrangeButton"

export { OrangeButton }
