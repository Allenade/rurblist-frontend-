"use client";

import { useRouter } from "next/navigation";

export default function DealClosedPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-muted/30 pt-16 pb-10">
      <div className="mx-auto max-w-2xl px-4 pt-6 sm:pt-8">
        {/* Back icon only (per Figma) */}
        <button
          type="button"
          onClick={() => router.back()}
          className="mb-4 inline-flex text-brand-900 hover:opacity-80"
          aria-label="Back"
        >
          <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="text-center font-serif text-2xl font-bold text-brand-900 sm:text-3xl">
            Congratulations! Deal Closed
          </h1>
          <p className="mt-3 text-center font-semibold text-foreground">
            Verification Completed Successfully
          </p>
          <p className="mt-1 text-center text-muted-foreground">
            Funds have been released to seller.
          </p>

          {/* Verification Certificate */}
          <section className="mt-8">
            <h2 className="font-serif text-xl font-bold text-brand-900">
              Verification Certificate
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Property Verification Completed Successfully
            </p>
            <div className="mt-4 rounded-2xl border border-gray-300 bg-gray-50 p-4 sm:p-6">
              <dl className="space-y-3">
                <div>
                  <dt className="text-sm text-muted-foreground">Property</dt>
                  <dd className="font-bold text-foreground">3-Bedroom Duplex, Warri</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Verification Date</dt>
                  <dd className="font-bold text-foreground">Dec, 18 2024</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Certificate ID</dt>
                  <dd className="font-medium text-foreground">CERT-2024-001234</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Status</dt>
                  <dd>
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">
                      verified
                    </span>
                  </dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-col items-center gap-2 rounded-lg border border-dashed border-gray-300 bg-white p-6">
                <svg className="h-10 w-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
                <span className="text-sm font-medium text-muted-foreground">QR Code</span>
              </div>
            </div>
          </section>

          {/* Action buttons */}
          <div className="mt-8 space-y-3">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 py-3.5 text-base font-semibold text-white hover:bg-brand-600"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Verification Certificate
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-brand-500 bg-white py-3.5 text-base font-semibold text-brand-700 hover:bg-brand-50"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Receipts & Timeline
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-brand-500 bg-white py-3.5 text-base font-semibold text-brand-700 hover:bg-brand-50"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Rate Your Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
