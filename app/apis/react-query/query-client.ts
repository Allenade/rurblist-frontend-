// app/apis/react-query/query-client.ts
import { QueryCache, QueryClient, MutationCache } from '@tanstack/react-query';
import { logoutClient } from '../services/auth-services/logout-client';

function handleAuthError(error: unknown) {
  const message = error instanceof Error ? error.message : '';

  if (
    message.includes('Session expired') ||
    message.includes('SESSION_EXPIRED') ||
    message.includes('Invalid or expired token') ||
    message.includes('Invalid or expired refresh token') ||
    message.includes('Refresh token does not match') ||
    message.includes('401')
  ) {
    logoutClient();
  }
}

export function makeQueryClient() {
  return new QueryClient({
    queryCache: new QueryCache({
      onError: handleAuthError,
    }),
    mutationCache: new MutationCache({
      onError: handleAuthError,
    }),
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60,
        gcTime: 1000 * 60 * 10,
        retry: 2,
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: 1,
      },
    },
  });
}
