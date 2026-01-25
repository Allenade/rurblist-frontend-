'use client';

import Image from "next/image";
import Link from "next/link";
import Input from "@/components/input";
import { useState } from "react";
import { OrangeButton } from "@/components/button/button";

type FormState = {
  name: string;
  whatsapp: string;
  email: string;
  password: string;
};

type Errors = Partial<FormState>;

export default function Signup() {
  const [form, setForm] = useState<FormState>({
    name: '',
    whatsapp: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  function validate(): Errors {
    const newErrors: Errors = {};

    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp number is required';
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
      src="/hand_image.png"
      alt="Keys"
      width={520}
      height={520}
      priority
      className="object-contain"
    />
  </div>

  {/* RIGHT FORM SECTION */}
  <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-20">
  <div className="w-full max-w-md  bg-white px-8 py-10 rounded-2xl">
    <h1 className="text-4xl font-normal text-[#555555]">Create an account</h1>
    <p className="text-[#8A8A8A] mt-2 mb-8">Let’s get you started.</p>

    <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
          <Input
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              error={errors.name}
          />

        {/* WhatsApp */}
          <Input
              label="WhatsApp number"
              name="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              error={errors.whatsapp}
          />
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

      
        <OrangeButton type="submit" fullWidth>
             Create an account
          </OrangeButton>
 {/* Login */}
            <p className="text-sm text-[#3E3E3E]">
              I have an account?{' '}
              <span className="text-brand-500 cursor-pointer font-medium">
              <Link href={"/auth/login"}>Login </Link>
              </span>
            </p>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-[#EC6C101C]" />
              <span className="text-sm text-[#808080]">or</span>
              <div className="flex-1 h-px bg-[#EC6C101C]" />
            </div>

            {/* Google */}
            <button
              type="button"
              className="w-full border border-[#A6A6A6] py-3 rounded-xl hover:bg-gray-50 transition"
            >
              Continue with google
            </button>
    </form>
  </div>
  </div>
</div>

  );
}
