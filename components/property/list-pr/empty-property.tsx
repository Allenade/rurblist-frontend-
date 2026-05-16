'use client';

import { useRouter } from 'next/navigation';
import { OrangeButton } from '@/components/button/button';
import Image from 'next/image';

export default function EmptyPropertyState() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6 mt-15">
      <div
        className="
        w-full
        max-w-xl
        bg-white
        rounded-2xl
        shadow-sm
        border
        border-gray-100
        p-10
        text-center
        transition-all
        duration-300
      "
      >
        {/* Illustration */}
        <div className="flex justify-center mb-8">
          <div className="relative w-28 h-28">
            <div className="absolute inset-0 bg-orange-100 rounded-full blur-2xl opacity-60" />
            <Image
              src="/icons/empty-property.svg" // replace with your image
              alt="No properties"
              fill
              className="object-contain relative"
            />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">No Properties Yet</h2>

        {/* Description */}
        <p className="text-gray-500 mb-8 leading-relaxed max-w-md mx-auto">
          You haven’t uploaded any property listings yet. Start by adding your first property and
          showcase it to potential buyers.
        </p>

        {/* Button */}
        <OrangeButton onClick={() => router.push('/agent/add-property')} className="px-8 py-3">
          Upload Property
        </OrangeButton>
      </div>
    </div>
  );
}
