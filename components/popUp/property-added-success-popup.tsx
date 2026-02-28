"use client";

type PropertyAddedSuccessPopupProps = {
  open: boolean;
  onClose: () => void;
};

export function PropertyAddedSuccessPopup({
  open,
  onClose,
}: PropertyAddedSuccessPopupProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="property-added-success-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute left-4 top-4 text-muted-foreground hover:text-foreground"
          aria-label="Close"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center pt-6">
          <span className="flex h-14 w-14 items-center justify-center text-muted-foreground" aria-hidden>
            <svg
              className="h-14 w-14"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </span>
          <h2
            id="property-added-success-title"
            className="mt-4 text-center text-xl font-bold text-foreground sm:text-2xl"
          >
            Property successfully added
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="mt-6 w-full rounded-lg bg-brand-500 py-3 text-sm font-medium text-white hover:bg-brand-600"
          >
            Back to profile
          </button>
        </div>
      </div>
    </div>
  );
}
