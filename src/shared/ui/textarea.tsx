'use client';

import React from 'react';

type TextareaProps = {
  label?: string;
  error?: string;
  rows?: number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  label,
  error,
  rows = 4,
  className = '',
  ...props
}: TextareaProps) {
  return (
    <div>
      {label && <label className="block text-[16px] text-[#3E3E3E] mb-2">{label}</label>}

      <textarea
        rows={rows}
        {...props}
        className={`
          w-full 
          p-4 
          border 
          rounded-lg 
          resize-none
          align-top
          focus:outline-none 
          focus:ring-2 
          focus:ring-[#e87722] 
          focus:border-transparent
          ${error ? 'border-red-500' : 'border-[#808080]'}
          ${className}
        `}
      />

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
