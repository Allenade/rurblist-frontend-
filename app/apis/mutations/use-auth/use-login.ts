'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { login } from '../../services/auth-services/auth-services';
// import { login } from "../../services/auth-services/login-service";

export function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,

    onSuccess: async (data) => {
      toast.success(data.message);
      await queryClient.invalidateQueries({
        queryKey: ['current-user'],
      });
      router.push('/');
    },

    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
