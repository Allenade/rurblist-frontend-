'use client';

import { useMutation } from '@tanstack/react-query';
import { createAgent } from '../../services/agent-service/agent-service';
import { CreateAgentPayload } from '../../models/agent-model';
import toast from 'react-hot-toast';

export function useCreateAgent() {
  return useMutation({
    mutationFn: (data: CreateAgentPayload) => createAgent(data),
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
}
