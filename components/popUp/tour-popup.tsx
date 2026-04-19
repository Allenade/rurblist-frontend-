'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { OrangeButton } from '@/components/button/button';
import { IconImage } from '@/components/icon-image/icon-image';

interface TourSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBackToProfile?: () => void;
}

export default function TourSuccessModal({
  isOpen,
  onClose,
  onBackToProfile,
}: TourSuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/40 flex items-end sm:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="
              w-full
              sm:max-w-130
              bg-white
              rounded-t-2xl sm:rounded-2xl
              overflow-hidden
            "
          >
            {/* ================= HEADER ================= */}
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <button onClick={onClose} className="text-lg">
                ✕
              </button>
              <h2 className="font-medium text-base">Book a tour</h2>
              <div />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="flex flex-col items-center text-center px-6 sm:px-10 py-12 sm:py-16">
              {/* Icon */}
              <IconImage
                src="/icons/star.svg"
                alt="success"
                className="w-12 h-12 sm:w-14 sm:h-14 mb-6"
              />

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-[#9b4b17] mb-2">
                Tour successfully booked
              </h3>

              {/* Subtitle */}
              <p className="text-sm text-gray-500 max-w-75 mb-10">
                Check your email for confirmation message and reminder
              </p>

              {/* Button */}
              <div className="w-full max-w-90">
                <OrangeButton
                  fullWidth
                  onClick={onBackToProfile}
                  className="py-3 text-sm rounded-lg"
                >
                  Back to profile
                </OrangeButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
