'use client'

import clsx from 'clsx'

export interface PricingPlan {
  id: string
  title: string
  price: number
  features: string[]
}

interface PricingCardProps {
  plan: PricingPlan
  isActive: boolean
  onSelect: (id: string) => void
}

export default function PricingCard({
  plan,
  isActive,
  onSelect
}: PricingCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(plan.id)}
      className={clsx(
        'w-full rounded-2xl border p-6 text-left transition-all duration-300',
        'flex flex-col justify-between min-h-80',
        isActive
          ? 'bg-[#E87722] text-white border-[#E87722] shadow-lg scale-[1.02]'
          : 'bg-white text-gray-800 border-gray-200 hover:border-[#E87722]'
      )}
    >
      <div>
        <h3 className="text-sm font-semibold tracking-wide uppercase">
          {plan.title}
        </h3>

        <p className="mt-6 text-4xl font-semibold">
          ₦{plan.price.toLocaleString()}
        </p>

        <ul className="mt-6 space-y-3">
          {plan.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm"
            >
              <span
                className={clsx(
                  'mt-1 h-2 w-2 rotate-45',
                  isActive ? 'bg-white' : 'bg-[#E87722]'
                )}
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </button>
  )
}