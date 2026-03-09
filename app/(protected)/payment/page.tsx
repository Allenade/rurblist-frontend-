"use client";

import Link from "next/link";

const SECTION_HEADING_CLASS =
  "font-serif text-xl font-bold text-brand-900 sm:text-2xl";

const PAYMENT_LINE_ITEMS = [
  { label: "Property Price:", amount: "₦5,000,000" },
  { label: "Agency Fee (4%):", amount: "₦200,000" },
  { label: "Escrow Fee (2%):", amount: "₦200,000" },
  { label: "Verification Fee:", amount: "₦200,000" },
] as const;

const TOTAL_AMOUNT = "₦5,315,000";

const PAYMENT_METHODS = [
  {
    title: "Bank Transfer",
    description: "Transfer directly from your bank account",
    icon: "bank",
    iconBg: "bg-amber-100",
  },
  {
    title: "USSD",
    description: "Pay using your mobile phone",
    icon: "ussd",
    iconBg: "bg-blue-100",
  },
  {
    title: "Debit/Credit Card",
    description: "Pay with your card instantly",
    icon: "card",
    iconBg: "bg-amber-200",
  },
  {
    title: "Digital Wallet",
    description: "Pay from your digital wallet",
    icon: "wallet",
    iconBg: "bg-amber-50",
  },
] as const;

function PaymentMethodIcon({ type }: { type: string }) {
  if (type === "bank") {
    return (
      <svg className="h-6 w-6 text-brand-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    );
  }
  if (type === "ussd") {
    return (
      <svg className="h-6 w-6 text-brand-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    );
  }
  if (type === "card") {
    return (
      <svg className="h-6 w-6 text-brand-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    );
  }
  return (
    <svg className="h-6 w-6 text-brand-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2h-2m-4-1V7" />
    </svg>
  );
}

export default function MakePaymentPage() {
  return (
    <div className="min-h-screen bg-muted/30 pt-16 pb-10">
      <div className="mx-auto max-w-2xl px-4 pt-6 sm:pt-8">
        {/* Back icon only (per Figma) */}
        <Link
          href="/"
          className="mb-4 inline-flex text-brand-900 hover:opacity-80"
          aria-label="Back"
        >
          <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>

        {/* Page title */}
        <h1 className="text-center font-serif text-2xl font-bold text-brand-900 sm:text-3xl">
          Make Payment
        </h1>

        {/* Payment Summary – light grey box, heading inside, border radius 16 */}
        <section className="mt-10">
          <div className="rounded-2xl border border-gray-300 bg-gray-50 p-4 sm:p-6">
            <h2 className={`mb-4 ${SECTION_HEADING_CLASS}`}>Payment Summary</h2>
            <dl className="space-y-3">
              {PAYMENT_LINE_ITEMS.map(({ label, amount }) => (
                <div key={label} className="flex justify-between text-sm">
                  <dt className="text-foreground">{label}</dt>
                  <dd className="font-bold text-foreground">{amount}</dd>
                </div>
              ))}
            </dl>
            <hr className="my-4 border-gray-300" />
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-foreground">Total Amount:</span>
              <span className="text-lg font-bold text-brand-900">{TOTAL_AMOUNT}</span>
            </div>
          </div>
        </section>

        {/* Choose Payment Method */}
        <section className="mt-10">
          <h2 className={SECTION_HEADING_CLASS}>Choose Payment Method</h2>
          <div className="mt-4 space-y-3">
            {PAYMENT_METHODS.map((method) => (
              <button
                key={method.title}
                type="button"
                className="flex w-full items-center gap-4 rounded-2xl border border-gray-300 bg-gray-50 p-4 text-left transition-colors hover:bg-gray-100"
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${method.iconBg}`}>
                  <PaymentMethodIcon type={method.icon} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-foreground">{method.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{method.description}</p>
                </div>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center text-green-600" aria-hidden>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              </button>
            ))}
          </div>
          <Link
            href="/payment/success"
            className="mt-6 block w-full rounded-lg bg-brand-500 py-3.5 text-center text-base font-semibold text-white hover:bg-brand-600"
          >
            Complete Payment - {TOTAL_AMOUNT}
          </Link>
        </section>
      </div>
    </div>
  );
}
