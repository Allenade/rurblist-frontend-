"use client";

type AgreementAcceptedPopupProps = {
  open: boolean;
  onClose: () => void;
};

export function AgreementAcceptedPopup({
  open,
  onClose,
}: AgreementAcceptedPopupProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="agreement-accepted-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center">
          <span
            className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600"
            aria-hidden
          >
            <svg
              className="h-10 w-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          <h2
            id="agreement-accepted-title"
            className="mt-4 text-xl font-bold text-foreground sm:text-2xl"
          >
            Agreement Accepted!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            You have successfully accepted the Rurblist Agent Participation
            Agreement. Welcome to our platform!
          </p>
          <button
            type="button"
            onClick={onClose}
            className="mt-6 w-full rounded-lg bg-brand-500 py-3 text-sm font-medium text-white hover:bg-brand-600"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
