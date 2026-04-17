'use client';

import { useGetTourById } from '@/app/apis/mutations/use-tour/use-get-tourby-id';
import { OrangeButton } from '@/components/button/button';
import PageHeader from '@/components/page-header';
import PaymentMethodSelector from '@/components/payment-ui/payment-method-selector';
import PaymentSummary from '@/components/payment-ui/payment-summary';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function MakePaymentTourPage() {
  const propertyPrice = 5000000;
  const params = useParams();
  const id = params.id as string;
  const [method, setMethod] = useState<string>('bank');
  const { data, isLoading } = useGetTourById(id);

  const methods = [
    {
      id: 'bank',
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
      id: 'wallet',
      title: 'Digital Wallet',
      description: 'Pay from your digital wallet',
      icon: '/icons/token-branded_binance.svg',
    },
  ];
  const items = [
    { label: 'Property Price', value: propertyPrice },
    { label: 'Agency Fee (4%)', value: propertyPrice * 0.04 },
    { label: 'Escrow Fee (2%)', value: propertyPrice * 0.02 },
    { label: 'Verification Fee', value: 200000 },
  ];

  const totalAmount = items.reduce((sum, item) => sum + item.value, 0);
  return (
    <div className="min-h-screen bg-white mt-16 ">
      {/* Header */}
      <PageHeader title="Make Payment" />

      {/* Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Payment Summary */}
        <PaymentSummary items={items} />

        {/* Payment Methods */}
        <div className="space-y-5">
          <h2 className="text-base sm:text-lg font-semibold">Choose Payment Method</h2>

          <PaymentMethodSelector methods={methods} value={method} onChange={setMethod} />
        </div>

        {/* Button */}
        <div className="pt-4 flex justify-center">
          <OrangeButton className="w-full sm:w-auto sm:min-w-[320px]">
            Complete Payment - ₦{totalAmount.toLocaleString()}
          </OrangeButton>
        </div>
      </div>
    </div>
  );
}
