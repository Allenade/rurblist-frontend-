'use client';

import { useState } from 'react';
import { IconImage } from '@/components/icon-image/icon-image';
import { cn } from '@/lib/utils';

export type PaymentMethod = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

interface PaymentMethodSelectorProps {
  methods: PaymentMethod[];
  value?: string;
  onChange?: (id: string) => void;
}

export default function PaymentMethodSelector({
  methods,
  value,
  onChange,
}: PaymentMethodSelectorProps) {
  const [selected, setSelected] = useState<string | undefined>(value);

  const handleSelect = (id: string) => {
    setSelected(id);
    onChange?.(id);
  };

  return (
    <div className="space-y-4">
      {methods.map((method) => {
        const isActive = selected === method.id;

        return (
          <button
            key={method.id}
            onClick={() => handleSelect(method.id)}
            className={cn(
              'w-full flex items-center justify-between p-5 rounded-xl border transition',
              isActive
                ? 'border-[#e87722] bg-[#fff5ee]'
                : 'border-gray-300 bg-white hover:bg-gray-50',
            )}
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <IconImage src={method.icon} alt={method.title} width={28} height={28} />
              </div>

              <div className="text-left">
                <p className="font-semibold text-gray-900">{method.title}</p>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
            </div>

            {/* Right check */}
            <div>{isActive && <span className="text-green-500 text-xl">✓</span>}</div>
          </button>
        );
      })}
    </div>
  );
}
