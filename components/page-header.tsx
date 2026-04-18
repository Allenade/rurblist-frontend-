'use client';

import { useRouter } from 'next/navigation';
import { IconImage } from '@/components/icon-image/icon-image';

interface PageHeaderProps {
  title: string;
  onBack?: () => void;
}

export default function PageHeader({ title, onBack }: PageHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) return onBack();
    router.back();
  };

  return (
    <div className="flex items-center justify-between px-4 py-4  bg-white">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition"
      >
        <IconImage
          src="/icons/chevron-left.svg" // 👈 use your icon
          alt="back"
          width={20}
          height={20}
        />
      </button>

      {/* Title */}
      <h1 className="text-[23px] font-semibold text-[#000000] text-center">{title}</h1>

      {/* Spacer (keeps title centered) */}
      <div className="w-10" />
    </div>
  );
}
