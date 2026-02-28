"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const SUMMARY_ITEMS = [
  { label: "Transaction ID:", value: "TXN-2024-00123" },
  { label: "Payment Method:", value: "Bank Transfer" },
  { label: "Date:", value: "March, 24 2024" },
] as const;
const TOTAL_PAID = "₦5,315,000";

export default function PaymentSuccessPage() {
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
            Payment Received!
          </h1>
          <p className="mt-3 text-center text-muted-foreground">
            Your funds are now in safe escrow.
          </p>
          <p className="text-center text-muted-foreground">
            Receipt sent to your email with payment breakdown
          </p>

          {/* Payment Summary */}
          <section className="mt-8">
            <h2 className="text-center font-serif text-xl font-bold text-brand-900">
              Payment Summary
            </h2>
            <div className="mt-4 rounded-2xl border border-gray-300 bg-gray-50 p-4 sm:p-6">
              <dl className="space-y-3">
                {SUMMARY_ITEMS.map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <dt className="text-foreground">{label}</dt>
                    <dd className="font-medium text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
              <hr className="my-4 border-gray-300" />
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-foreground">Total Paid:</span>
                <span className="text-lg font-bold text-brand-900">{TOTAL_PAID}</span>
              </div>
            </div>
          </section>

          {/* Actions */}
          <div className="mt-8 space-y-3">
            <Link
              href="/payment/complete"
              className="block w-full rounded-lg bg-brand-500 py-3.5 text-center text-base font-semibold text-white hover:bg-brand-600"
            >
              Complete Payment - {TOTAL_PAID}
            </Link>
            <button
              type="button"
              className="w-full rounded-lg border-2 border-gray-300 bg-white py-3.5 text-base font-semibold text-foreground hover:bg-gray-50"
            >
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
