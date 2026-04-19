'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { logoutClient } from '../../services/auth-services/logout-client';
import { logout } from '../../services/auth-services/auth-service-client';

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,

    onSuccess: (data) => {
      // clear react-query cache
      queryClient.clear();

      // notify other tabs
      logoutClient();
      toast.success(data.message);
    },
  });
}
