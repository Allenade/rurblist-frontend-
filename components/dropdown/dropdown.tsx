'use client'

import React, { useState } from 'react'
import { IconImage } from '@/components/icon-image/icon-image'

type DropdownProps = {
  label: string
  placeholder?: string
  options: Array<{ value: string; label: string }>
  value?: string
  onChange?: (value: string) => void
  error?: string
}

export default function Dropdown({
  label,
  placeholder = 'Select an option',
  options,
  value,
  onChange,
  error,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <label className="block text-[16px] text-[#3E3E3E] mb-2">
        {label}
      </label>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-4 py-3 border border-[#808080] rounded-lg text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-[#e87722] focus:border-transparent
            ${error ? 'border-red-500' : 'border-[#808080]'}`}
        >
          <span className={value ? 'text-gray-900' : 'text-gray-500'}>
            {value
              ? options.find((opt) => opt.value === value)?.label
              : placeholder}
          </span>
          <IconImage
            src="/chevron-down.png"
            alt="dropdown"
            width={24}
            height={24}
            className={`transition-transform ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white border border-[#808080] rounded-lg shadow-lg">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange?.(option.value)
                  setIsOpen(false)
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg transition-colors"
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}
