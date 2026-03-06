"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { OrangeButton } from "@/components/button/button";
import { useOtpStore } from "@/app/apis/store/otp-store";

export default function OtpSent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const email = useOtpStore((s) => s.email);

  function handleProceed() {
    console.log(email)
    if (!email) return;

    router.push(`/auth/otp-verification`);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-[40px] font-serif text-[#05400D] mb-3">
          OTP Sent!
        </h1>

        <p className="text-[#808080] mb-4">
          An OTP has been sent to:
        </p>

        <p className="font-semibold text-[#262626] mb-10">
          {email}
        </p>

        <div className="flex justify-center mb-16">
          <Image
            src="/email_sent.png"
            alt="Email sent"
            width={257}
            height={226}
            priority
          />
        </div>

        <OrangeButton fullWidth onClick={handleProceed}>
          Proceed
        </OrangeButton>
      </div>
    </main>
  );
}