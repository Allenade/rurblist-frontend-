"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useVerifyGoogleOtp } from "@/app/apis/mutations/use-auth/use-verify-google-otp";
import AuthLoadingScreen from "@/components/loader/auth-loading-screen";

export default function OAuthSuccessPage() {
  const searchParams = useSearchParams();
  const { mutate } = useVerifyGoogleOtp();

  useEffect(() => {
    const otp = searchParams.get("otp");
    if (!otp) return;

    mutate(otp);
  }, []);

  return (
    <AuthLoadingScreen
      title="Signing you in..."
      showProgress={false}
      subtitle="Securing your account with Google."
    />
  );
}