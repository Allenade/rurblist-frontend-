"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import Input from "@/components/input"
import { OrangeButton } from "@/components/button/button"
import { useForgotPassword } from "@/app/apis/mutations/use-auth/use-forgot-password"

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const { mutate, isPending } = useForgotPassword();

  const validate = () => {
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }

    const emailRegex =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return false;
    }

    setError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // Handle password reset logic here
    console.log("Password reset requested for:", email)
    mutate({ email });
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-[40px] font-serif Georgia text-[#05400D] mb-3">
            Forgot Password
          </h1>
          <p className="text-[#737373] text-[20px">
            Please enter the email address linked to this account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          <Input
            label="Email address"
            name="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-4"
            error={error ?? undefined}
          >
          </Input>
           <OrangeButton
            type="submit"
            fullWidth
            loading={isPending}
            disabled={isPending}
          >
            {isPending ? "Sending..." : "Continue"}
          </OrangeButton>
        </form>

        <p className="text-center mt-6 text-gray-700">
          Remember your password?{" "}
          <Link
            href="/auth/login"
            className="text-[#e87722] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  )
}