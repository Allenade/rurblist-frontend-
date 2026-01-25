import { ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface OrangeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
}

const OrangeButton = forwardRef<HTMLButtonElement, OrangeButtonProps>(
  ({ className, fullWidth = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "py-4 px-6 bg-[#e87722] hover:bg-[#d66a1a] text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
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
