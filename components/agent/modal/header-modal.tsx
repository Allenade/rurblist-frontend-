"use client";

interface ModalHeaderProps {
  title: string;
  onClose: () => void;
}

export default function ModalHeader({ title, onClose }: ModalHeaderProps) {
  return (
    <div className="sticky top-0 z-20 bg-white border-b px-4 sm:px-6 py-4">
      <div className="relative flex items-center justify-center">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute left-0 text-xl text-gray-600 hover:text-black transition"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-base sm:text-lg font-medium text-gray-900">
          {title}
        </h2>

      </div>
    </div>
  );
}