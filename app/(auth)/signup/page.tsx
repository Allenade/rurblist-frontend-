'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Input from '@/components/input';
import { OrangeButton } from '@/components/button/button';
import { IconImage } from '@/components/icon-image/icon-image';
import { useRouter } from 'next/navigation';
import { useSignupStore } from '@/app/apis/store/auth-strore';

export default function RegisterPage() {
  const router = useRouter();
  const setSignupData = useSignupStore((s) => s.setSignupData);
  const [fullName, setName] = useState('');
  const [phoneNumber, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState<{
    fullName?: string;
    phoneNumber?: string;
    email?: string;
    password?: string;
  }>({});

  /* ================= VALIDATION ================= */

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Name is required';
    }

    if (!phoneNumber.trim()) {
      newErrors.phoneNumber = 'WhatsApp number is required';
    } else if (!/^\+?\d{7,15}$/.test(phoneNumber)) {
      newErrors.phoneNumber = 'Enter a valid phone number';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    console.log({
      fullName,
      phoneNumber,
      email,
      password,
    });
    const formData = {
      fullName,
      phoneNumber,
      password,
      email,
    };
    // store temporarily
    setSignupData(formData);

    // go to next step
    router.push('/onboarding');
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row ">
      {/* LEFT IMAGE */}
      <div className="hidden lg:block lg:w-1/2 relative bg-[#E9CDB8] overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-end pb-20">
          <Image
            src="/image/hand-img.svg"
            alt="Keys"
            width={900}
            height={700}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex-1 flex items-center justify-center px-6 sm:px-10 py-12 bg-white mt-10">
        <div className="w-full max-w-120">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">Create an account</h1>
          <p className="text-gray-500 mt-2 mb-10">Let’s get you started.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Name"
              className="p-4"
              value={fullName}
              onChange={(e) => setName(e.target.value)}
              error={errors.fullName}
            />

            <Input
              label="WhatsApp number"
              className="p-4"
              value={phoneNumber}
              onChange={(e) => setWhatsapp(e.target.value)}
              error={errors.phoneNumber}
            />

            <Input
              label="Email address"
              className="p-4"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />

            {/* PASSWORD FIELD WITH TOGGLE */}
            <div className="relative">
              <Input
                label="Password"
                className="p-4"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-11.5"
              >
                <IconImage
                  src={showPassword ? '/icons/eye-slash.svg' : '/icons/eye-open.svg'}
                  alt="toggle password"
                  width={20}
                  height={20}
                />
              </button>
            </div>

            <OrangeButton type="submit" fullWidth>
              Create an account
            </OrangeButton>
          </form>

          <p className="text-sm text-gray-600 mt-6 text-center">
            I have an account?{' '}
            <Link href="/login" className="text-[#e87722] font-medium">
              Login
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center my-10">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="px-4 text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <button
            type="button"
            className="
              w-full
              border
              border-gray-300
              rounded-lg
              py-3
              text-gray-700
              hover:bg-gray-50
              transition
            "
            onClick={() => {
              window.location.href = `https://rurblist-backend.onrender.com/api/auth/google`;
            }}
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
}
