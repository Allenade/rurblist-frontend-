import OAuthHandler from '@/components/oauth-h/oauth-handler';

export default async function OAuthSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ ticket?: string }>;
}) {
  const params = await searchParams;
  const otp = params?.ticket;

  if (!otp) {
    return <div className="p-6">Invalid authentication link</div>;
  }

  return <OAuthHandler otp={otp} />;
}
