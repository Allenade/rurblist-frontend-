'use client'

import PricingCard, { PricingPlan } from './pricing-card'
import { OrangeButton } from '@/components/button/button'

interface Props {
  plans: PricingPlan[]
  selectedPlanId: string | null
  onSelectPlan: (id: string) => void
  isLoading: boolean
  onNext: () => void
}

export default function EscrowStepTwo({
  plans,
  selectedPlanId,
  onSelectPlan,
  isLoading,
  onNext,
}: Props) {
  return (
    <div className="w-full px-4 md:px-6">
      <h2 className="text-lg font-semibold mb-8">
        Verification Options
      </h2>

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={`plan-skeleton-${idx}`}
                className="w-full rounded-2xl border border-gray-200 p-6 min-h-80 animate-pulse"
              >
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="mt-6 h-10 w-32 rounded bg-gray-200" />
                <div className="mt-6 space-y-3">
                  <div className="h-3 w-full rounded bg-gray-200" />
                  <div className="h-3 w-5/6 rounded bg-gray-200" />
                  <div className="h-3 w-4/6 rounded bg-gray-200" />
                </div>
              </div>
            ))
          : plans.map((plan) => (
              <PricingCard
                key={plan.id}
                plan={plan}
                isActive={selectedPlanId === plan.id}
                onSelect={onSelectPlan}
              />
            ))}
      </div>

      <div className="flex justify-center mt-12">
        <OrangeButton
          className="w-full md:w-96 py-3"
          disabled={isLoading}
          onClick={onNext}
        >
          Continue
        </OrangeButton>
      </div>
    </div>
  )
}