'use client';

import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useOtpStore } from '../../store/otp-store';
import { forgotPassword } from '../../services/auth-services/auth-service-client';

export function useForgotPassword() {
  const router = useRouter();
  return useMutation({
    mutationFn: forgotPassword,

    onSuccess: (res, variables) => {
      useOtpStore.getState().setEmail(variables.email);
      toast.success(res.message);
      router.push('/forgot-password-otp');
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
