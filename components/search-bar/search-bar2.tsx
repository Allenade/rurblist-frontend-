'use client'

import React from 'react'
import { IconImage } from '../icon-image/icon-image'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  className?: string
}

export default function SearchBar({
  placeholder = 'Search...',
  value = '',
  onChange,
  onSearch,
  className
}: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(value)
    }
  }

  return (
    <div
      className={cn(
        'relative h-12 w-117',
        className
      )}
    >
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="
          h-full w-full
          rounded-xl
          border border-gray-300
          bg-white
          pl-12 pr-4
          text-sm text-gray-800
          placeholder:text-gray-500
          focus:outline-none
          focus:border-[#E87722]
          transition-colors
        "
      />

      <IconImage
        src="/icons/search.svg"
        alt="search"
        width={20}
        height={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
      />
    </div>
  )
}