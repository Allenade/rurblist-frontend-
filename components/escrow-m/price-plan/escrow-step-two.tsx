'use client'

import { useState } from 'react'
import PricingCard, { PricingPlan } from './pricing-card'
import { OrangeButton } from '@/components/button/button'

interface Props {
  onNext: () => void
}

const plans: PricingPlan[] = [
  {
    id: 'basic',
    title: 'Basic',
    price: 0,
    features: ['Title Document', 'Ownership Validation']
  },
  {
    id: 'advanced',
    title: 'Advanced',
    price: 10000,
    features: [
      'Adds encumbrance',
      'Land registry fraud scan',
      'Litigation check'
    ]
  },
  {
    id: 'premium',
    title: 'Premium',
    price: 10000,
    features: [
      'Adds encumbrance',
      'Land registry fraud scan',
      'Litigation check'
    ]
  }
]

export default function EscrowStepTwo({ onNext }: Props) {
  const [selectedPlan, setSelectedPlan] = useState<string>('basic') // ✅ default selected

  return (
    <div className="w-full px-4 md:px-6">
      <h2 className="text-lg font-semibold mb-8">
        Verification Options
      </h2>

      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            isActive={selectedPlan === plan.id}
            onSelect={setSelectedPlan}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <OrangeButton
          className="w-full md:w-96 py-3"
          onClick={onNext}
        >
          Continue
        </OrangeButton>
      </div>
    </div>
  )
}