'use client'

import React from 'react'
import Image from 'next/image'

interface ProfileImageProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
  name?: string
  role?: string
}

const sizeMap = {
  sm: 40,
  md: 56,
  lg: 77
}

export default function ProfileImage({
  src,
  alt,
  size = 'md',
  name,
  role
}: ProfileImageProps) {
  const sizeValue = sizeMap[size]

  return (
    <div className="flex items-center gap-3">
      {/* Image Wrapper */}
      <div
        className="relative rounded-full overflow-hidden"
        style={{ width: sizeValue, height: sizeValue }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={`${sizeValue}px`}
        />
      </div>

      {(name || role) && (
        <div>
          {name && (
            <p className="font-semibold text-gray-900">
              {name}
            </p>
          )}
          {role && (
            <p className="text-xs text-[#e87722]">
              {role}
            </p>
          )}
        </div>
      )}
    </div>
  )
}