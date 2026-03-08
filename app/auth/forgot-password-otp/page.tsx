"use client";

import { useState, useRef, useEffect } from "react";
import { OrangeButton } from "@/components/button/button";
import toast from "react-hot-toast";
import { useOtpStore } from "@/app/apis/store/otp-store";
import { useForgotPassword } from "@/app/apis/mutations/use-auth/use-forgot-password";
import { useRouter } from "next/navigation";

export default function ForgotPasswordOtpPage() {
  const router = useRouter();

  const email = useOtpStore((s) => s.email);
  const setOtp = useOtpStore((s) => s.setOtp);

  const { mutate: resend, isPending: resendLoading } =
    useForgotPassword();

  const [otp, setOtpState] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [timer, setTimer] = useState(60);

  const inputsRef = useRef<Array<HTMLInputElement | null>>(
    []
  );

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  if (!email) return null;

  function handleChange(value: string, index: number) {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtpState(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const code = otp.join("");

    if (code.length !== 6) {
      toast.error("Enter full OTP");
      return;
    }

    // Store OTP globally
    setOtp(code);

    // Navigate to reset password page
    router.push("/auth/reset-password");
  }

  function handleResend() {
    resend({ email:email! });
    setTimer(60);
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        <h1 className="text-[40px] font-serif text-[#05400D] mb-6 text-center">
          Verify OTP
        </h1>

        <p className="text-center mb-8">
          Code sent to <strong>{email}</strong>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-between gap-3 mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputsRef.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) =>
                  handleChange(e.target.value, index)
                }
                className="
                  w-12 h-14 text-center text-xl rounded-lg
                  border border-gray-300
                  transition-all duration-200
                  focus:outline-none
                  focus:ring-2 focus:ring-[#e87722]
                  focus:scale-105
                "
              />
            ))}
          </div>

          <OrangeButton fullWidth type="submit">
            Proceed
          </OrangeButton>
        </form>

        <div className="text-center mt-6">
          {timer > 0 ? (
            <p className="text-gray-500">
              Resend OTP in {timer}s
            </p>
          ) : (
            <button
              onClick={handleResend}
              disabled={resendLoading}
              className="text-[#e87722] font-semibold hover:underline"
            >
              {resendLoading
                ? "Sending..."
                : "Resend OTP"}
            </button>
          )}
        </div>
      </div>
    </main>
  );
}