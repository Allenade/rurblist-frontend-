"use client";

import { useMutation } from "@tanstack/react-query";
import { signup } from "@/app/apis/services/auth-services/auth-services";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSignupStore } from "../../store/auth-strore";
import { useOtpStore } from "../../store/otp-store";

export function useSignup() {
  const router = useRouter();
    const clearSignupData = useSignupStore(
    (s) => s.clearSignupData
  );

  return useMutation({
    mutationFn: signup,

    onSuccess: (data, variables) => {
      toast.success(`${data.message}🎉`);
      useOtpStore.getState().setEmail(variables.email);
      clearSignupData();
      router.push(`/otp-email`);
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
}