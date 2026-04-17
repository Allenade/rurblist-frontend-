"use client";

import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../../services/auth-services/auth-services";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useOtpStore } from "../../store/otp-store";

export function useResetPassword() {
  const clearOtpStore = useOtpStore((s) => s.clear);
  const router = useRouter();

  return useMutation({
    mutationFn: resetPassword,

    onSuccess: (res) => {
      toast.success(res.message);
      clearOtpStore()
      router.push("/login");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}