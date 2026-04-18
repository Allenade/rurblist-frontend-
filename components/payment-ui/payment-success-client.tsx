'use client';

import { useGetPaymentDeails } from '@/app/apis/mutations/use-payment/use-get-payment';
import PaymentReceipt from '@/components/payment-ui/payment-receipt';
import { useRouter } from 'next/navigation';

export default function PaymentSuccessClient({ reference }: { reference: string }) {
  const router = useRouter();

  const { data, isLoading, isError } = useGetPaymentDeails(reference);
  const info = data?.data;
  if (isLoading) {
    return <div className="p-6">Verifying payment...</div>;
  }

  if (isError || !data) {
    return <div className="p-6 text-red-500">Failed to verify payment</div>;
  }

  const payment = {
    transactionId: info?.transactionId ?? '',
    paymentMethod: info?.paymentMethod || 'Payment',
    amount: info?.amount ?? 0,
    date: info?.paidAt ? new Date(info.paidAt).toLocaleDateString() : 'Unknown date',
  };

  return (
    <PaymentReceipt
      transactionId={payment.transactionId}
      paymentMethod={payment.paymentMethod}
      date={payment.date}
      amount={`₦${payment.amount.toLocaleString()}`}
      onComplete={() => router.push('/')}
      onDownload={() => console.log('Download receipt')}
    />
  );
}
