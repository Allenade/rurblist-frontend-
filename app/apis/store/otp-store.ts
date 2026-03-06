import { create } from "zustand";

type OtpState = {
  email: string | null;
  setEmail: (email: string) => void;
  clearEmail: () => void;
};

export const useOtpStore = create<OtpState>((set) => ({
  email: null,

  setEmail: (email) =>
    set({
      email,
    }),

  clearEmail: () =>
    set({
      email: null,
    }),
}));