'use client';

import Image from "next/image";
import classes from "./page.module.css"
import Link from "next/link";
import Input from "@/components/input";
import { useState } from "react";

type FormState = {

  email: string;
  password: string;
};

type Errors = Partial<FormState>;

export default function Login() {
  const [form, setForm] = useState<FormState>({
   
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  function validate(): Errors {
    const newErrors: Errors = {};

    if (!form.email.includes('@')) newErrors.email = 'Valid email is required';
    if (form.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    return newErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', form);
      // submit to API here
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
  <div className="min-h-screen flex flex-col md:flex-row">
  {/* LEFT IMAGE SECTION */}
  <div className="hidden md:flex w-1/2 bg-brand-50 items-center justify-start pl-16">
    <Image
      src="/Hand_holding_house.png"
      alt="Keys"
      width={520}
      height={520}
      priority
      className="object-contain"
    />
  </div>

  {/* RIGHT FORM SECTION */}
  <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-20">
    {/* <div className="flex min-h-screen md:min-h-0 items-center"> */}
        <div className="w-full max-w-md  bg-white px-8 py-10 rounded-2xl">
            <h1 className="text-4xl font-normal text-[#555555] text-center md:text-left">
                Welcome back!
            </h1>
    
            <p className="text-[#8A8A8A] mt-2 mb-8 text-center md:text-left">
                Welcome, Please enter your details.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
      
            {/* Google */}
            <button
              type="button"
              className="w-full border border-[#A6A6A6] py-3 rounded-xl hover:bg-gray-50 transition"
            >
              Login with google
            </button>
              {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-[#EC6C101C]" />
              <span className="text-sm text-[#808080]">or</span>
              <div className="flex-1 h-px bg-[#EC6C101C]" />
            </div>

            {/* Email */}
            <Input
              label="Email address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            {/* Password */}
            <Input
              label="Password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              error={errors.password}
            />
            {/* Remember me + Forgot password */}
            <div className="flex items-center justify-between">
            {/* Remember me */}
            <label className="flex items-center gap-1 cursor-pointer">
                <input
                    type="checkbox"
                    className="h-4 w-4 rounded-xl border border-[#36CB4C] 
                  accent-brand-500 focus:ring-brand-500"
                />
                <span className="text-[16px] text-[#555555]">
                    Remember me
                </span>
            </label>

            {/* Forgot password */}
            <Link
                href="/auth/forgot-password"
                className="text-[16px] text-[#555555] hover:text-brand-500 transition"
            >
                Forgot Password?
            </Link>
        </div>
        <button 
        type="submit"
            className="w-full bg-brand-500 hover:bg-[#d85f0e] text-white py-3 rounded-xl font-medium transition"
            >
            Login
        </button>
        {/* Login */}
        <p className="text-sm text-[#3E3E3E]">
            Don’t have an account?{' '}
            <span className="text-brand-500 cursor-pointer font-medium">
                <Link href="/auth/signup">Sign up for free</Link>
            </span>
        </p>
    </form>
    </div> 
 </div>
  </div>
// </div>

  );
}
