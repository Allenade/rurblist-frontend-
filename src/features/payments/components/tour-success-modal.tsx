'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { OrangeButton } from '@/shared/ui';
import { IconImage } from '@/shared/ui';

type TourSuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onBackToProfile?: () => void;
};

export default function TourSuccessModal({
  isOpen,
  onClose,
  onBackToProfile,
}: TourSuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/40 flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full overflow-hidden rounded-t-2xl bg-white sm:max-w-130 sm:rounded-2xl"
          >
            <div className="flex items-center justify-between border-b px-5 py-4">
              <button type="button" onClick={onClose} className="text-lg" aria-label="Close">
                x
              </button>
              <h2 className="text-base font-medium">Book a tour</h2>
              <div />
            </div>

            <div className="flex flex-col items-center px-6 py-12 text-center sm:px-10 sm:py-16">
              <IconImage
                src="/icons/star.svg"
                alt="success"
                className="mb-6 h-12 w-12 sm:h-14 sm:w-14"
              />

              <h3 className="mb-2 text-lg font-semibold text-[#9b4b17] sm:text-xl">
                Tour successfully booked
              </h3>

              <p className="mb-10 max-w-75 text-sm text-gray-500">
                Check your email for confirmation message and reminder
              </p>

              <div className="w-full max-w-90">
                <OrangeButton
                  fullWidth
                  onClick={onBackToProfile}
                  className="rounded-lg py-3 text-sm"
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
