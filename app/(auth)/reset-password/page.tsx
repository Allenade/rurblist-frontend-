"use client";

import { OrangeButton } from "@/components/button/button";
import Input from "@/components/input";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useOtpStore } from "@/app/apis/store/otp-store";
import { useResetPassword } from "@/app/apis/mutations/use-auth/use-reset-password";
import { useRouter } from "next/navigation";

export default function ResetPassword() {
  const router = useRouter();

  const email = useOtpStore((s) => s.email);
  const otp = useOtpStore((s) => s.otp);

  const { mutate, isPending } = useResetPassword();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !otp) {
      toast.error("Session expired. Please try again.");
      router.push("/auth/forgotpassword");
      return;
    }

    if (!newPassword || newPassword.length < 6) {
      toast.error(
        "Password must be at least 6 characters"
      );
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    mutate(
      {
        email,
        otp,
        password: newPassword,
      },
    );
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif Georgia text-[#05400D] mb-3">
            Reset Password
          </h1>
          <p className="text-[#808080]">
            Please enter your new password
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="New password"
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) =>
              setNewPassword(e.target.value)
            }
            required
            className="p-4"
          />

          <Input
            label="Confirm password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            required
            className="p-4"
          />

          <div className="pt-4">
            <OrangeButton
              type="submit"
              fullWidth
              loading={isPending}
              disabled={isPending}
            >
              {isPending
                ? "Updating..."
                : "Update Password"}
            </OrangeButton>
          </div>
        </form>
      </div>
    </main>
  );
}