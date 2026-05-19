'use client'

import { IconImage } from '@/components/icon-image/icon-image'
import { cn } from '@/lib/utils'

interface PaymentBreakdownItem {
  label: string
  amount: number
}

interface PaymentConfirmationCardProps {
  total: number
  breakdown: PaymentBreakdownItem[]
  className?: string
}

export function PaymentConfirmationCard({
  total,
  breakdown,
  className
}: PaymentConfirmationCardProps) {
  return (
    <div
      className={cn(
        'w-full rounded-2xl border border-gray-200 bg-white',
        'px-6 py-8 md:px-10 md:py-10',
        className
      )}
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center gap-2 text-gray-600">
          <IconImage
            src="/icons/escrow-fee.svg"
            alt="total payment"
            width={20}
            height={20}
          />
          <span className="text-lg font-medium">
            Total Payment
          </span>
        </div>

        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          ₦{total.toLocaleString()}
        </h2>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-gray-200" />

      {/* Breakdown */}
      <div className="space-y-4">
        {breakdown.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center text-sm sm:text-base"
          >
            <span className="text-gray-600">
              {item.label}
            </span>
            <span className="font-semibold text-gray-900">
              ₦{item.amount.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}