'use client';

import { useState } from 'react';
import { OrangeButton } from '@/components/button/button';

interface Option {
  label: string;
  value: string;
}

interface Props {
  label?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
}

export default function SelectDropdown({ label, options, value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const [tempValue, setTempValue] = useState(value);

  const selectedLabel = options.find((o) => o.value === value)?.label || 'Select';

  return (
    <div className="relative w-full">
      {/* Label */}
      {label && <p className="mb-2 text-sm text-gray-700">{label}</p>}

      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`
          w-full 
          px-4 py-3 
          border rounded-lg 
          flex items-center justify-between
          ${open ? 'border-[#e87722]' : 'border-[#808080]'}
        `}
      >
        <span>{selectedLabel}</span>
        <span className={`transition ${open ? 'rotate-180' : ''}`}>▾</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-2 w-full bg-white border rounded-xl shadow-lg p-4 max-h-80 overflow-y-auto">
          {/* Options */}
          <div className="space-y-3">
            {options.map((option) => (
              <label key={option.value} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  checked={tempValue === option.value}
                  onChange={() => setTempValue(option.value)}
                  className="accent-[#e87722]"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>

          {/* Apply Button */}
          <OrangeButton
            className="mt-4"
            fullWidth
            onClick={() => {
              onChange?.(tempValue || '');
              setOpen(false);
            }}
          >
            Apply
          </OrangeButton>
        </div>
      )}
    </div>
  );
}
