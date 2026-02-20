import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface OrangeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
  variant?: 'orange' | 'gray' | 'white'
}

const OrangeButton = forwardRef<HTMLButtonElement, OrangeButtonProps>(
  (
    {
      className,
      fullWidth = false,
      variant = 'orange',
      children,
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      orange: "bg-[#e87722] hover:bg-[#d66a1a] text-white",
      gray: "bg-[#727272] hover:bg-gray-600 text-white",
      white: "bg-white text-black hover:bg-gray-100"
    }

    return (
      <button
        ref={ref}
        className={cn(
          "py-4 px-6 font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
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