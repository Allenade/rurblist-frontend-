'use client'

import { PaymentSummarySection } from './payment-summary-section'
import { OrangeButton } from '@/components/button/button'
import { EscrowAgreementCard } from './escrow-agreement-card'

export default function EscrowStepThree({
  onNext
}: {
  onNext: () => void
}) {
  const paymentItems = [
    {
      title: 'Property Price',
      amount: 10000,
      icon: '/icons/property-price.svg'
    },
    {
      title: 'Agency Fee',
      amount: 10000,
      icon: '/icons/agency-fee.svg'
    },
    {
      title: 'Escrow Fee',
      amount: 10000,
      icon: '/icons/escrow-fee.svg'
    },
    {
      title: 'Verification Fee',
      amount: 10000,
      icon: '/icons/verification-fee.svg'
    }
  ]

  const termsItems = [
     {
      title: 'Fund Security:',
      content:
        "Buyer’s payment is held securely by Rubrlist Escrow until property verification is completed."
    },
    {
      title: 'Verification Process:',
      content:
        'Rubrlist conducts checks on ownership documents, land registry records, and property status based on the selected verification plan.'
    },
    {
      title: 'Release of Funds:',
      content: [
        'Funds will only be released to the seller after:',
        'Successful verification of documents and property, and',
        'Buyer’s confirmation of satisfaction (or automatic release after the review window expires).'
      ]
    },
    {
      title: 'Refund Policy:',
      content:
        'If verification fails or the property is deemed fraudulent, the buyer’s funds are refunded in full (minus applicable service charges).'
    },
    {
      title: 'Service Fees:',
      content: [
        'Escrow Fee: 2% of property value.',
        'Verification Fee: Based on chosen package (Basic / Advanced / Premium).',
        'Agency Fee: 3–5% of property value (if applicable).'
      ]
    },
    {
      title: 'Dispute Resolution:',
      content:
        'Any disputes arising will be managed by Rubrlist’s mediation team. Funds remain secured until resolution.'
    }
  ]

  return (
    <div className="w-full px-4 md:px-0 space-y-10">
      {/* Payment Summary */}
      <PaymentSummarySection items={paymentItems} />

      {/* Terms */}
      <EscrowAgreementCard
        title="Rubrlist Escrow Agreement"
        sections={termsItems}
        onDownload={() => {
          console.log('Download agreement')
        }}
      />

      {/* CTA */}
      <div className="flex justify-center mt-6">
        <OrangeButton
          className="w-full md:w-96 py-3"
          onClick={onNext}
        >
          Proceed to payment
        </OrangeButton>
      </div>
    </div>
  )
}