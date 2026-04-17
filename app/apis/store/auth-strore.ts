import { create } from "zustand";
import { SignupData } from "../models/signup-model";



type SignupStore = {
  data: SignupData | null;
  setSignupData: (data: SignupData) => void;
  setRole: (role: string) => void;
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