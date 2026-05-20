import { EscrowForm } from '@/features/properties/components';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <EscrowForm id={id} />;
}
