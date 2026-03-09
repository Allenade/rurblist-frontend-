"use client";

import { useMutation } from "@tanstack/react-query";
import { verifyOtp } from "@/app/apis/services/auth-services/auth-services";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useOtpStore } from "../../store/otp-store";


export function useVerifyOtp() {
  const router = useRouter();
  const clearEmail = useOtpStore((s) => s.clear);
  const email = useOtpStore((s) => s.email);

  return useMutation({
    mutationFn: (otp: string) =>
      verifyOtp({
        email: email!,
        otp,
      }),

    onSuccess: (res) => {
      toast.success(res.message);
      clearEmail();
      router.push("/login");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}