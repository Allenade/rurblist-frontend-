'use server';
import MakePaymentClient from '@/components/payment-ui/make-payment-client';

export default async function MakePaymentPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ planId?: string }>;
}) {
  const routeParams = await params;
  const queryParams = await searchParams;

  return <MakePaymentClient propertyId={routeParams.id} planId={queryParams?.planId ?? ''} />;
}
