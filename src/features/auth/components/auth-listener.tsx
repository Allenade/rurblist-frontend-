'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { listenForAuthChanges } from '@/shared/utils/auth-channel';

export default function AuthListener() {
  const router = useRouter();

  useEffect(() => {
    listenForAuthChanges(() => {
      router.push('/login');
    });
  }, [router]);

  return null;
}
