'use client';

import { useRouter } from 'next/navigation';
import { OrangeButton } from '../button/button';
import { IconImage } from '../icon-image/icon-image';

interface Props {
  transactionId: string;
  paymentMethod: string;
  date: string;
  amount: string;
  name: string;
  onDownload?: () => void;
  onComplete?: () => void;
  loading?: boolean;
  isDownloading?: boolean;
}

export default function PaymentReceipt({
  transactionId,
  paymentMethod,
  date,
  amount,
  name,
  onDownload,
  onComplete,
  loading = false,
  isDownloading = false,
}: Props) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white px-4 py-6 mt-17">
      {/* 🔙 Back Arrow */}
      <div className="max-w-3xl mx-auto mb-4">
        <button onClick={() => router.back()} className="text-xl text-black">
          <IconImage src="/icons/chevron-left.svg" width={18} height={18} alt={''} />
        </button>
      </div>

      {/* Main Card */}
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-[20px] md:text-[24px] font-semibold text-black">Payment Received!</h1>

        <p className="text-[14px] md:text-[16px] text-black mt-2">
          Your funds are now in safe escrow.
        </p>

        <p className="text-[13px] text-gray-500 mt-1">
          Receipt sent to your email with payment breakdown
        </p>

        {/* Summary Box */}
        <div className="bg-[#EFEFEF] rounded-xl mt-6 p-6 md:p-8 text-left">
          <h2 className="text-center font-medium text-[16px] mb-6">Payment Summary</h2>

          {/* Rows */}
          <div className="space-y-4 text-[14px]">
            <div className="flex justify-between">
              <span className="text-[#5A5A5A]">Transaction ID:</span>
              <span className="text-[#5A5A5A]">{transactionId}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#5A5A5A]">Payment Method:</span>
              <span className="text-[#5A5A5A]">{paymentMethod}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#5A5A5A]">Date:</span>
              <span className="text-[#5A5A5A]">{date}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#CBCBCB] my-6"></div>

          {/* Total */}
          <div className="flex justify-between items-center">
            <span className="font-semibold text-[15px] text-[#262626]">Total Paid:</span>
            <span className="font-semibold text-[16px]">{amount}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 space-y-3">
          <OrangeButton
            fullWidth
            variant="orange"
            onClick={onComplete}
            loading={loading}
            className="py-3 text-[14px]"
          >
            {name === 'tour' ? 'Continue' : `Complete Payment - ${amount}`}
          </OrangeButton>

          <OrangeButton
            fullWidth
            variant="white"
            onClick={onDownload}
            loading={isDownloading}
            className="py-3 text-[14px] border-[#e87722] text-[#e87722]"
          >
            Download Receipt
          </OrangeButton>
        </div>
      </div>
    </div>
  );
}
