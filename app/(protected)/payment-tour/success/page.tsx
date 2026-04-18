import PaymentSuccessClient from '@/components/payment-ui/payment-success-client';

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ trxref?: string; reference?: string }>;
}) {
  const params = await searchParams;
  const reference =
    params?.reference || params?.trxref || '5852f266ad80946293f125ca2bafdd1eace608d8';

  if (!reference) {
    return <div className="p-6">Invalid payment reference</div>;
  }

  return <PaymentSuccessClient reference={reference} />;
}
