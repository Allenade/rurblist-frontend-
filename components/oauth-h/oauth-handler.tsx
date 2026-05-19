'use client';

import { useEffect } from 'react';
import { useVerifyGoogleOtp } from '@/features/auth/hooks/use-verify-google-otp';
import AuthLoadingScreen from '@/components/loader/auth-loading-screen';
import { useRouter } from 'next/navigation';

export default function OAuthHandler({ otp }: { otp: string }) {
  const { mutate } = useVerifyGoogleOtp();
  const router = useRouter();

  useEffect(() => {
    mutate(otp);
  }, [otp, mutate, router]);

  return (
    <AuthLoadingScreen
      title="Signing you in..."
      showProgress={false}
      subtitle="Securing your account with Google."
    />
  );
}
