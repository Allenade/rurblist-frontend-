"use client";

import { useMutation } from "@tanstack/react-query";
import { verifyGoogleOtp } from "../../services/auth-services/auth-services";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function useVerifyGoogleOtp() {
  const router = useRouter();

  return useMutation({
    mutationFn: verifyGoogleOtp,

    onSuccess: (res) => {

      toast.success("Login successful 🎉");

      router.push("/");
    },

    onError: (error: Error) => {
      toast.error(error.message);
      router.push("/login");
    },
  });
}