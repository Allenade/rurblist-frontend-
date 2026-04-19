'use client';

import { useGetPaymentDeails } from '@/app/apis/mutations/use-payment/use-get-payment';
import PaymentReceipt from '@/components/payment-ui/payment-receipt';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import TourSuccessModal from '../popUp/tour-popup';
import { useGetCurrentUser } from '@/app/apis/mutations/use-user/use-get-current-user';

export default function PaymentSuccessClient({ reference }: { reference: string }) {
  const router = useRouter();
  const { data: userData, isLoading: isFetching } = useGetCurrentUser();

  const { data, isLoading, isError } = useGetPaymentDeails(reference);

  const info = data?.data;
  const user = userData?.statusCode === 401 ? null : (userData?.data ?? null);
  const [open, setOpen] = useState(false);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);
  const formatTransactionId = (paidAt: string, transactionId: string) => {
    const year = new Date(paidAt).getFullYear();
    return `TNX-${year}-${transactionId}`;
  };

  if (isLoading) {
    return <div className="p-6">Verifying payment...</div>;
  }

  if (isError || !data) {
    return <div className="p-6 text-red-500">Failed to verify payment</div>;
  }

  const payment = {
    transactionId: formatTransactionId(
      info?.paidAt ?? '',
      info?.transactionId ?? '', // or data.id if you have it
    ),
    paymentMethod: info?.paymentMethod || 'Payment',
    amount: info?.amount ?? 0,
    date: formatDate(info?.paidAt ?? ''),
  };

  return (
    <>
      {' '}
      <PaymentReceipt
        transactionId={payment.transactionId}
        paymentMethod={payment.paymentMethod}
        date={payment.date}
        name={info?.paymentFor ?? ''}
        amount={`₦${payment.amount.toLocaleString()}`}
        onComplete={() => setOpen(true)}
        onDownload={() => console.log('Download receipt')}
      />
      <TourSuccessModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onBackToProfile={() => {
          user?.user.roles.includes('Home_Seeker')
            ? router.push('/house-seeker/profile')
            : router.push('/agent/private');
        }}
      />
    </>
  );
}
