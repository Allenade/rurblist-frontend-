"use client";

import { useRouter } from "next/navigation";

const DOCUMENTS = [
  { name: "Certificate of Occupancy", status: "verified" as const },
  { name: "Survey Plan", status: "Submitted" as const },
  { name: "Deed of Assignment", status: "Under Review" as const },
];

const TIMELINE_ITEMS = [
  { label: "Payment Received and Confirmed", date: "Dec, 15 2024 at 2:30pm" },
  { label: "Verification Process Initiated", date: "Dec, 15 2024 at 2:35pm" },
  { label: "Document Review in Progress", date: "Dec, 15 2024 at 3:00pm" },
];

function StatusBadge({ status }: { status: string }) {
  const isVerified = status === "verified";
  return (
    <span
      className={
        isVerified
          ? "inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800"
          : "inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-sm font-medium text-amber-800"
      }
    >
      {status}
    </span>
  );
}

export default function VerificationTrackerPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-muted/30 pt-16 pb-10">
      <div className="mx-auto max-w-2xl px-4 pt-6 sm:pt-8">
        {/* Back icon */}
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

        <h1 className="font-serif text-2xl font-bold text-brand-900 sm:text-3xl">
          Verification Tracker
        </h1>
        <p className="mt-1 text-muted-foreground">
          Live status dashboard for your property verification.
        </p>

        {/* Your Agent */}
        <section className="mt-8">
          <h2 className="font-serif text-lg font-bold text-brand-900">Your Agent</h2>
          <div className="mt-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <p className="font-bold text-foreground">Horald Alice</p>
            <p className="text-sm text-muted-foreground">Premium Real Estate</p>
            <p className="mt-1 text-sm font-medium text-foreground">Trust score 4.8/5</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <button
                type="button"
                className="rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600"
              >
                Chat with Agent
              </button>
              <button
                type="button"
                className="rounded-lg border-2 border-red-500 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
              >
                Report Agent
              </button>
            </div>
          </div>
        </section>

        {/* Current Status */}
        <section className="mt-8">
          <h2 className="font-serif text-lg font-bold text-brand-900">Current Status</h2>
          <div className="mt-3 flex gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50">
              <svg className="h-6 w-6 text-brand-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            <div>
              <p className="font-semibold text-foreground">Documents under Review</p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Our team is verifying property documents. Estimated completion: 2-3 business days.
              </p>
            </div>
          </div>
        </section>

        {/* Document Status */}
        <section className="mt-8">
          <h2 className="font-serif text-lg font-bold text-brand-900">Document Status</h2>
          <ul className="mt-3 space-y-2">
            {DOCUMENTS.map((doc) => (
              <li
                key={doc.name}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
                  doc.status === "verified" ? "border-green-200 bg-green-50" : "border-amber-200 bg-amber-50/50"
                }`}
              >
                <span className="font-medium text-foreground">{doc.name}</span>
                <StatusBadge status={doc.status} />
              </li>
            ))}
          </ul>
        </section>

        {/* Activity Timeline */}
        <section className="mt-8">
          <h2 className="font-serif text-lg font-bold text-brand-900">Activity Timeline</h2>
          <ul className="mt-3 space-y-4">
            {TIMELINE_ITEMS.map((item) => (
              <li key={item.label} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center text-green-600" aria-hidden>
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Simulate Verification */}
        <div className="mt-8">
          <button
            type="button"
            className="w-full rounded-lg bg-brand-500 py-3.5 text-base font-semibold text-white hover:bg-brand-600"
          >
            Simulate Verification
          </button>
        </div>
      </div>
    </div>
  );
}
