'use client';

import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useSignupStore } from '@/features/auth/store/auth-store';
import { useOtpStore } from '@/features/auth/store/otp-store';
import { signup } from '@/features/auth/services/auth-service-client';

export function useSignup() {
  const router = useRouter();
  const clearSignupData = useSignupStore((s) => s.clearSignupData);

  return useMutation({
    mutationFn: signup,

    onSuccess: (data, variables) => {
      toast.success(data.message);
      useOtpStore.getState().setEmail(variables.email);
      clearSignupData();
      router.push('/otp-email');
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });
}
