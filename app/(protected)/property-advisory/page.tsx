"use client";

import { useRouter } from "next/navigation";

const ADVISORY_SERVICES = [
  "Property verification and due diligence",
  "Market analysis and pricing guidance",
  "Legal documentation review",
  "Negotiation strategy and support",
  "End-to-end deal closure assistance",
];

export default function PropertyAdvisoryPage() {
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

        {/* Header */}
        <h1 className="font-serif text-2xl font-bold text-brand-900 sm:text-3xl">
          Need help verifying or closing your next property deal?
        </h1>
        <p className="mt-3 text-muted-foreground">
          Get expert guidance from our property advisors who know the market inside and out.
        </p>

        {/* Our Advisory Service Include */}
        <section className="mt-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-xl font-bold text-brand-900">
              Our Advisory Service Include
            </h2>
            <ul className="mt-4 space-y-3">
              {ADVISORY_SERVICES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-green-600" aria-hidden>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Get Expert Property Advice form */}
        <section className="mt-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-serif text-xl font-bold text-brand-900">
              Get Expert Property Advice
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your property needs and we&apos;ll connect you with the right advisor
            </p>

            <form className="mt-6 space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* What are you trying to buy/rent? */}
              <div>
                <label htmlFor="property-type" className="block text-sm font-medium text-foreground">
                  What are you trying to buy/rent?
                </label>
                <div className="relative mt-1.5">
                  <select
                    id="property-type"
                    className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-3 pl-4 pr-10 text-foreground focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                  >
                    <option value="">Select Property Type</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" aria-hidden>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-foreground">
                  Location
                </label>
                <input
                  id="location"
                  type="text"
                  placeholder="E.g enter city, area or Specific location"
                  className="mt-1.5 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-foreground placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
              </div>

              {/* Budget Range */}
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-foreground">
                  Budget Range
                </label>
                <div className="relative mt-1.5">
                  <select
                    id="budget"
                    className="w-full appearance-none rounded-lg border border-gray-300 bg-white py-3 pl-4 pr-10 text-foreground focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="1-5">₦1M - ₦5M</option>
                    <option value="5-10">₦5M - ₦10M</option>
                    <option value="10-20">₦10M - ₦20M</option>
                    <option value="20+">₦20M+</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" aria-hidden>
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Property Link (Optional) */}
              <div>
                <label className="block text-sm font-medium text-foreground">
                  Property Link (Optional)
                </label>
                <div
                  className="mt-1.5 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50/50 py-8 px-4 transition-colors hover:border-brand-400 hover:bg-brand-50/30"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && (e.currentTarget as HTMLDivElement).click()}
                >
                  <svg className="h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  <p className="mt-3 text-center text-sm text-foreground">
                    <span className="text-brand-600 font-medium">Paste Rublist Property Link Here</span>
                    {" "}or drag & drop files here
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Property documents, Images or links
                  </p>
                </div>
                <input
                  type="url"
                  placeholder="https://rublist.com/property/..."
                  className="mt-3 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-foreground placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
                />
              </div>

              {/* Talk to Our Team */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 py-3.5 text-base font-semibold text-white hover:bg-brand-600"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Talk to Our Team
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
