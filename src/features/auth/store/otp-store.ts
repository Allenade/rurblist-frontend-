"use client";

import { create } from "zustand";

type OtpState = {
  email: string | null;
  otp: string;
  setEmail: (email: string) => void;
  setOtp: (otp: string) => void;
  clear: () => void;
};

export const useOtpStore = create<OtpState>((set) => ({
  email: null,
  otp: "",
  setEmail: (email) => set({ email }),
  setOtp: (otp) => set({ otp }),
  clear: () => set({ email: null, otp: "" }),
}));