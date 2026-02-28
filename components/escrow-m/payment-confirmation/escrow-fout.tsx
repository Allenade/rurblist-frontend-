'use client'

import { PaymentConfirmationCard } from './payment-confirmation-card'
import { OrangeButton } from '@/components/button/button'

export default function EscrowStepFour({
  onConfirm
}: {
  onConfirm: () => void
}) {
  const breakdown = [
    { label: 'Property Price', amount: 900000 },
    { label: 'Agency Fee', amount: 50000 },
    { label: 'Escrow Fee', amount: 20000 },
    { label: 'Verification Fee', amount: 30000 }
  ]

  const total = breakdown.reduce(
    (sum, item) => sum + item.amount,
    0
  )

  return (
    <div className="w-full px-4 md:px-6 space-y-10">
      <h2 className="text-lg font-semibold">
        Confirmation
      </h2>

      <PaymentConfirmationCard
        total={total}
        breakdown={breakdown}
      />

      <div className="flex justify-center">
        <OrangeButton
          className="w-full sm:w-80 md:w-96 py-3"
          onClick={onConfirm}
        >
          Confirm
        </OrangeButton>
      </div>
    </div>
  )
}