"use client"

import { OrangeButton } from "@/components/button/button"
import Input from "@/components/input"
import React from "react"

import { useState } from "react"


export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle password reset logic here
    console.log("Password reset submitted")
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif Georgia text-[#05400D] mb-3">
            Reset Password
          </h1>
          <p className="text-[#808080]">Please enter your new password</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
            <Input
              label="New password"
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <Input
              label="Confirm password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
                

          <div className="pt-4">
            <OrangeButton type="submit" fullWidth>
              Update Password
            </OrangeButton>
          </div>
        </form>
      </div>
    </main>
  )
}
