import { PaymentSuccessClient } from '@/features/payments/components';

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ trxref?: string; reference?: string }>;
}) {
  const params = await searchParams;
  const reference = params?.reference || params?.trxref;

  if (!reference) {
    return <div className="p-6">Invalid payment reference</div>;
  }

  return <PaymentSuccessClient reference={reference} />;
}
