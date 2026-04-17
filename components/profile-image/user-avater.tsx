"use client";

import Image from "next/image";

type Props = {
  name?: string;
  image?: string;
};

const colors = [
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-purple-400",
  "bg-orange-400",
  "bg-pink-400",
];

function getInitials(name?: string) {
  if (!name) return "U";

  const parts = name.split(" ");

  if (parts.length === 1) return parts[0][0];

  return (parts[0][0] + parts[1][0]).toUpperCase();
}

export default function UserAvatar({ name, image }: Props) {
  const color = colors[name?.length! % colors.length];

  if (image) {
    return (
      <Image
        src={image}
        alt="profile"
        width={45}
        height={45}
        className="rounded-full object-cover"
      />
    );
  }

  return (
    <div
      className={`w-12 h-12 rounded-full ${color} flex items-center justify-center text-white font-semibold cursor-pointer`}
    >
      {getInitials(name)}
    </div>
  );
}