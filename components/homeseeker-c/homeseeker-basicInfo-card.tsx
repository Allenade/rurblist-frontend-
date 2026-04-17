'use client';

import Image from 'next/image';

interface HomeSeekerBasicInfoCardProps {
  name: string;
  email: string;
  phone: string;
  image: string;
  address?: string;
}

export default function HomeSeekerBasicInfoCard({
  name,
  email,
  phone,
  image,
  address,
}: HomeSeekerBasicInfoCardProps) {
  return (
    <div className="border rounded-xl p-6 flex items-center gap-6 bg-white">
      <div className="relative w-24 h-24 rounded-lg overflow-hidden">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
        <p className="text-gray-500">{email}</p>
        <p className="text-gray-500">{phone}</p>
        <p className="text-gray-500">{address}</p>
      </div>
    </div>
  );
}
