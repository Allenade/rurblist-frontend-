import React from 'react';

type InputProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div>
      <label className="block text-sm text-[#3E3E3E] mb-1">
        {label}
      </label>

      <input
        {...props}
        className={`w-full px-4 py-3 rounded-xl border text-sm
          focus:outline-none focus:border-brand-500
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
