"use client";

import Image from "next/image";
import { ReactNode } from "react";

type AuthLoadingScreenProps = {
  title?: string;
  subtitle?: string;
  showProgress?: boolean;
  children?: ReactNode;
};

export default function AuthLoadingScreen({
  title = "Processing...",
  subtitle = "Please wait while we complete authentication.",
  showProgress = true,
  children,
}: AuthLoadingScreenProps) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-white via-orange-50 to-white px-6">
      <div className="w-full max-w-md text-center animate-fadeIn">
        
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#e87722]/20 blur-xl animate-pulse" />
            <Image
              src="/Rublist_logo.png"
              alt="logo"
              width={70}
              height={70}
              className="relative animate-bounceSlow"
              priority
            />
          </div>
        </div>

        {/* Spinner */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-14 h-14 border-4 border-[#e87722]/30 border-t-[#e87722] rounded-full animate-spin" />
            <div className="absolute inset-0 rounded-full bg-[#e87722]/10 blur-md" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-[#05400D] mb-2 animate-slideUp">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 animate-fadeIn delay-200">
          {subtitle}
        </p>

        {/* Optional extra content */}
        {children && <div className="mt-6">{children}</div>}

        {/* Progress Bar */}
        {showProgress && (
          <div className="mt-8 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#e87722] animate-progress" />
          </div>
        )}
      </div>

      {/* Global Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease forwards;
        }

        .animate-progress {
          animation: progress 2.5s ease-in-out infinite;
        }

        .animate-bounceSlow {
          animation: bounceSlow 2s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}