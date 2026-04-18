'use client';

import React from 'react';

type PaymentItem = {
  label: string;
  value: number;
};

interface PaymentSummaryProps {
  items: PaymentItem[];
  currency?: string;
  title?: string;
}

const formatCurrency = (value: number, currency: string) => {
  return `${currency}${value.toLocaleString()}`;
};

export default function PaymentSummary({
  items,
  currency = '₦',
  title = 'Payment Summary',
}: PaymentSummaryProps) {
  const total = items.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="w-full border border-gray-300 rounded-xl p-10 bg-[#EFEFEF]">
      {/* Title */}
      <h3 className="text-lg font-semibold mb-4">{title}</h3>

      {/* Items */}
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between text-sm text-[#5A5A5A]">
            <span>{item.label}</span>
            <span className="font-medium text-[#262626]">
              {formatCurrency(item.value, currency)}
            </span>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t my-4 border-[#CBCBCB]" />

      {/* Total */}
      <div className="flex justify-between font-semibold text-gray-900">
        <span>Total Amount:</span>
        <span>{formatCurrency(total, currency)}</span>
      </div>
    </div>
  );
}
