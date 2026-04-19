'use client';

import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useOtpStore } from '../../store/otp-store';
import { resendOtp } from '../../services/auth-services/auth-service-client';

export function useResendOtp() {
  const email = useOtpStore((s) => s.email);

  return useMutation({
    mutationFn: () => resendOtp(email!),

    onSuccess: (res) => {
      toast.success(res.message);
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
