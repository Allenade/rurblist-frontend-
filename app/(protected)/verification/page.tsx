import { VerificationTrackerClient } from '@/features/verification/components';

export default async function VerificationTrackerPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const params = await searchParams;

  return <VerificationTrackerClient verificationId={params?.id ?? ''} />;
}
