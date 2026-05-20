'use client';

import { useEffect } from 'react';
import { useVerifyGoogleOtp } from '../hooks';
import { AuthLoadingScreen } from '@/shared/ui';
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
