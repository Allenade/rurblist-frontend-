import { create } from 'zustand';

interface AgentFormState {
  form: {
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    city?: string;
    address?: string;
    nationality?: string;
    nin?: string;
    cacNumber?: string;
    companyName?: string;
    yearsOfExperience?: number;
    description?: string;
    // isAgreement?: boolean;
    selfie?: File;
    ninSlip?: File;
    cacDoc?: File;
  };
  setForm: (data: Partial<AgentFormState['form']>) => void;
  reset: () => void;
}

export const useAgentForm = create<AgentFormState>((set) => ({
  form: {},
  setForm: (data) =>
    set((state) => ({
      form: { ...state.form, ...data },
    })),
  reset: () => set({ form: {} }),
}));
