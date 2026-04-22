'use client';

import { usePayForProperty } from '@/app/apis/mutations/use-payment/use-payment-property';
import { useGetPlanById } from '@/app/apis/mutations/use-plan/use-get-plan-byId';
import { useGetPropertyById } from '@/app/apis/mutations/use-property/use-get-property-by-id';
import { OrangeButton } from '@/components/button/button';
import PageHeader from '@/components/page-header';
import PaymentMethodSelector from '@/components/payment-ui/payment-method-selector';
import PaymentSummary from '@/components/payment-ui/payment-summary';
import { useState } from 'react';

interface MakePaymentClientProps {
  propertyId: string;
  planId: string;
}

export default function MakePaymentClient({ propertyId, planId }: MakePaymentClientProps) {
  const [method, setMethod] = useState<string>('bank_transfer');
  const { data: propertyData } = useGetPropertyById(propertyId);
  const { data: planData } = useGetPlanById(planId);
  const { mutate, isPending } = usePayForProperty();

  const property = propertyData?.data;
  const plan = planData?.data;
  const propertyPrice = property?.price ?? 0;
  const agencyFee = property?.agentFee ?? 0;
  const escrowFee = Math.round(propertyPrice * 0.01);
  const verificationFee = plan?.amount;
  const hasVerificationFee =
    typeof verificationFee === 'number' && Number.isFinite(verificationFee);

  const methods = [
    {
      id: 'bank_transfer',
      title: 'Bank Transfer',
      description: 'Transfer directly from your bank account',
      icon: '/icons/bank-icon.svg',
    },
    {
      id: 'ussd',
      title: 'USSD',
      description: 'Pay using your mobile phone',
      icon: '/icons/Phone Android.svg.svg',
    },
    {
      id: 'card',
      title: 'Debit/Credit Card',
      description: 'Pay with your card instantly',
      icon: '/icons/credit-card.svg',
    },
    {
      id: 'bank',
      title: 'Digital Wallet',
      description: 'Pay from your digital wallet',
      icon: '/icons/token-branded_binance.svg',
    },
  ];
  const items = [
    { label: 'Property Price', value: propertyPrice },
    { label: 'Agency Fee', value: agencyFee },
    { label: 'Escrow Fee', value: escrowFee },
  ];

  if (hasVerificationFee) {
    items.push({ label: 'Verification Fee', value: verificationFee });
  }

  const handlePayment = () => {
    if (!propertyId) return;

    mutate({
      propertyd: propertyId,
      planId: planId || undefined,
      enscrowFee: escrowFee,
      paymentMethod: method,
    });
  };

  const totalAmount = items.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="min-h-screen bg-white mt-16 ">
      <PageHeader title="Make Payment" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        <PaymentSummary items={items} />

        <div className="space-y-5">
          <h2 className="text-base sm:text-lg font-semibold">Choose Payment Method</h2>

          <PaymentMethodSelector methods={methods} value={method} onChange={setMethod} />
        </div>

        <div className="pt-4 flex justify-center">
          <OrangeButton
            className="w-full sm:w-auto sm:min-w-[320px]"
            onClick={handlePayment}
            loading={isPending}
            disabled={!propertyId}
          >
            Complete Payment - &#8358;{totalAmount.toLocaleString()}
          </OrangeButton>
        </div>
      </div>
    </div>
  );
}
