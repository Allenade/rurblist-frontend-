"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { IconImage } from "../icon-image/icon-image";

interface BackNavbarProps {
  logoSrc?: string;
  logoAlt?: string;
}

export default function BackNavbar({
  logoSrc = "/logo.png",
  logoAlt = "Logo",
}: BackNavbarProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="relative flex items-center justify-center h-16 sm:h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute left-4 sm:left-6 flex items-center gap-2 text-gray-700 hover:text-black transition font-medium"
        >
          <span className="text-lg"><IconImage src={"/icons/chevron-left.svg"} alt={""}/></span>
          <span className="hidden sm:inline">Back</span>
        </button>

        {/* Center Logo */}
        <div className="flex items-center justify-center">
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={50}
            height={64}
            priority
            className="object-contain w-10 sm:w-11 md:w-11"
          />
        </div>
      </div>
    </nav>
  );
}