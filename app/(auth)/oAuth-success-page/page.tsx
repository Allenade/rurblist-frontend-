import OAuthHandler from '@/components/oauth-h/OAuthHandler';

export default async function OAuthSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ otp?: string }>;
}) {
  const params = await searchParams;
  const otp = params?.otp;

  if (!otp) {
    return <div className="p-6">Invalid authentication link</div>;
  }

  return <OAuthHandler otp={otp} />;
}
