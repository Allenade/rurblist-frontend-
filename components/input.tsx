import React from 'react';

type InputProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div>
      <label className="block text-[16px] text-[#3E3E3E] mb-2">
        {label}
      </label>

      <input
        {...props}
        className={`w-full px-4 py-3 border border-[#808080] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e87722] focus:border-transparent
          ${error ? 'border-red-500' : 'border-[#808080]'}`}
      />

      {error && (
        <p className="text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
