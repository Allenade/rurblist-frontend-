'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { OrangeButton } from '@/components/button/button';
import { IconImage } from '@/components/icon-image/icon-image';

interface InspectionFeeModalProps {
  isOpen: boolean;
  inspectionFee?: number;
  onClose: () => void;
  onContinue?: () => void;
}

export default function InspectionFeeModal({
  isOpen,
  inspectionFee,
  onClose,
  onContinue,
}: InspectionFeeModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="
              w-full
              sm:max-w-150
              bg-white
              rounded-t-2xl
              sm:rounded-2xl
              max-h-[85vh]
              flex
              flex-col
            "
          >
            {/* Header */}
            <div className="flex items-center justify-center px-6 py-5 border-b relative">
              <h2 className="text-lg sm:text-xl font-semibold">Book a tour</h2>
            </div>

            {/* Content */}
            <div className="px-6 sm:px-10 py-10 sm:py-14 text-center space-y-6">
              <IconImage
                src="/icons/check-circle.svg"
                alt="confirm"
                className="mx-auto w-14 h-14 sm:w-16 sm:h-16"
              />

              <h3 className="text-xl sm:text-2xl font-semibold text-[#9b4b17]">
                Confirm Inspection Fee
              </h3>

              <p className="text-sm sm:text-base text-gray-600 max-w-112.5 mx-auto">
                An Inspection fee of{' '}
                <span className="font-semibold text-[#454444]">
                  ₦{inspectionFee?.toLocaleString() ?? '20,000'}
                </span>{' '}
                will be charged. Do you want to continue?
              </p>

              <div className="text-xs sm:text-sm text-gray-500 space-y-1">
                <p>
                  <span className="font-semibold text-[#454444]">Refund Policy:</span> Full refund
                  within 24 hours if you decide not to rent
                </p>
                <p>
                  <span className="font-semibold text-[#454444]">Security:</span> Payment processed
                  securely via encrypted gateway
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <OrangeButton fullWidth onClick={onContinue}>
                  Continue
                </OrangeButton>

                <OrangeButton
                  variant="white"
                  fullWidth
                  className="border border-[#e87722] text-[#e87722]"
                  onClick={onClose}
                >
                  Back
                </OrangeButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
