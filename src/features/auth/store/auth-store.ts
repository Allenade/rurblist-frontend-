import { create } from 'zustand';
import type { Role } from '@/shared/config/routes';
import type { SignupData } from '../models';

type SignupStore = {
  data: SignupData | null;
  setSignupData: (data: SignupData) => void;
  setRole: (role: Role) => void;
  clearSignupData: () => void;
};

export const useSignupStore = create<SignupStore>((set) => ({
  data: null,

  setSignupData: (data) =>
    set({
      data,
    }),

  setRole: (role) =>
    set((state) => ({
      data: state.data
        ? {
            ...state.data,
            role,
          }
        : null,
    })),

  clearSignupData: () =>
    set({
      data: null,
    }),
}));
