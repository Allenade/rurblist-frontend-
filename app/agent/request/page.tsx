"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Footer } from "@/components/footer/footer";
import { useLayoutStore } from "@/store/layout-store";

const SECTION_HEADING_CLASS =
  "font-serif text-lg font-bold text-brand-800 sm:text-xl";

const LABEL_CLASS = "block text-sm font-medium text-foreground";
const INPUT_CLASS =
  "mt-1 w-full rounded-md border-2 border-gray-300 bg-white px-3 py-2.5 text-sm text-foreground placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500";

function UploadZone({
  icon = "document",
  label,
  id,
}: {
  icon?: "camera" | "document";
  label: string;
  id: string;
}) {
  return (
    <label
      htmlFor={id}
      className="flex min-h-[100px] cursor-pointer flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-gray-300 bg-gray-50/50 px-4 py-5 text-gray-500 transition-colors hover:border-brand-400 hover:bg-brand-50/30"
    >
      {icon === "camera" ? (
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
            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 13v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7"
          />
        </svg>
      ) : (
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      )}
      <span className="text-center text-sm">{label}</span>
      <input id={id} type="file" className="sr-only" accept="image/*,.pdf" />
    </label>
  );
}

export default function AgentRequestFormPage() {
  const router = useRouter();
  const setHideNavbar = useLayoutStore((s) => s.setHideNavbar);

  useEffect(() => {
    setHideNavbar(true);
    return () => setHideNavbar(false);
  }, [setHideNavbar]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push("/agent/agreement");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-2xl px-4 py-8 pb-4">
        {/* White card container (matches screenshot) */}
        <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/80">
          <div className="p-6 sm:p-8">
            {/* Header: Back + Logo */}
            <div className="relative flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-brand-900 hover:underline"
                aria-label="Back"
              >
                <svg
                  className="h-5 w-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="text-sm font-medium">Back</span>
              </Link>
              <Image
                src="/Rublist.svg"
                alt="Rubrlist"
                width={48}
                height={15}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
              />
              <div className="w-14" aria-hidden />
            </div>

            {/* Form title – bordered box around text (per design) */}
            <div className="mt-8 rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-4 text-center sm:px-6 sm:py-5">
              <h1 className="font-serif text-2xl font-bold text-brand-800 sm:text-3xl">
                Agent Request Form
              </h1>
              <p className="mt-1.5 text-sm text-gray-600">
                Please fill out your information to become a verified agent
              </p>
            </div>

            <form className="mt-8" onSubmit={handleSubmit}>
              {/* Personal Information */}
              <h2 className={SECTION_HEADING_CLASS}>Personal Information</h2>
              <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="selfie" className={LABEL_CLASS}>
                Upload Selfie
              </label>
              <UploadZone
                id="selfie"
                icon="camera"
                label="Click to upload your selfie"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className={LABEL_CLASS}>
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  className={INPUT_CLASS}
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="last-name" className={LABEL_CLASS}>
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  className={INPUT_CLASS}
                  placeholder=""
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="dob" className={LABEL_CLASS}>
                  Date of Birth
                </label>
                <div className="relative mt-1">
                  <input
                    id="dob"
                    type="text"
                    className={`${INPUT_CLASS} pr-10`}
                    placeholder="dd----yyyy"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
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
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div>
                <label htmlFor="city" className={LABEL_CLASS}>
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  className={INPUT_CLASS}
                  placeholder=""
                />
              </div>
            </div>
            <div>
              <label htmlFor="address" className={LABEL_CLASS}>
                Address
              </label>
              <input
                id="address"
                type="text"
                className={INPUT_CLASS}
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="nationality" className={LABEL_CLASS}>
                Nationality
              </label>
              <select
                id="nationality"
                className={INPUT_CLASS}
                defaultValue="Nigeria"
              >
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="Kenya">Kenya</option>
                <option value="South Africa">South Africa</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="nin" className={LABEL_CLASS}>
                NIN Number
              </label>
              <input
                id="nin"
                type="text"
                className={INPUT_CLASS}
                placeholder=""
              />
            </div>
            <div>
              <label htmlFor="nin-slip" className={LABEL_CLASS}>
                Upload NIN Slip
              </label>
              <UploadZone
                id="nin-slip"
                icon="document"
                label="Click to upload your NIN Slip"
              />
            </div>
              </div>

              {/* Business Information (Optional) */}
              <div className="mt-8">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className={SECTION_HEADING_CLASS}>Business Information</h2>
                  <span className="rounded bg-brand-100 px-2.5 py-1 text-xs font-medium text-brand-800">
                    Optional
                  </span>
                </div>
                <div className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="cac" className={LABEL_CLASS}>
                      CAC Number
                    </label>
                    <input
                      id="cac"
                      type="text"
                      className={INPUT_CLASS}
                      placeholder=""
                    />
                  </div>
                  <div>
                    <label htmlFor="cac-slip" className={LABEL_CLASS}>
                      Upload CAC Slip
                    </label>
                    <UploadZone
                      id="cac-slip"
                      icon="document"
                      label="Click to upload your CAC Slip (Optional)"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-8 w-full rounded-lg bg-brand-500 py-3 text-sm font-medium text-white hover:bg-brand-600"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
