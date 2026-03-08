"use client";

import { useMutation } from "@tanstack/react-query";
import { login } from "@/app/apis/services/auth-services/auth-services";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: login,

    onSuccess: (data) => {
      toast.success(data.message);

       router.push("/");
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}