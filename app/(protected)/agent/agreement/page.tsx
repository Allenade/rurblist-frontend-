"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AgreementAcceptedPopup } from "@/components/popUp";
import { Footer } from "@/components/footer/footer";
import { useLayoutStore } from "@/store/layout-store";

const SECTION_HEADING_CLASS =
  "font-serif text-base font-bold text-brand-800 sm:text-lg";

export default function AgentAgreementPage() {
  const router = useRouter();
  const setHideNavbar = useLayoutStore((s) => s.setHideNavbar);
  const [agreed, setAgreed] = useState(false);
  const [agentName, setAgentName] = useState("");
  const [showAcceptedPopup, setShowAcceptedPopup] = useState(false);

  useEffect(() => {
    setHideNavbar(true);
    return () => setHideNavbar(false);
  }, [setHideNavbar]);

  function handleAccept() {
    if (!agreed) return;
    setShowAcceptedPopup(true);
  }

  function handleContinue() {
    setShowAcceptedPopup(false);
    router.push("/agent/request");
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-8 pb-4">
        {/* Header: Back + Logo */}
        <div className="relative flex items-center justify-between">
          <Link
            href="/agent/request"
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
            alt="Rurblist"
            width={48}
            height={15}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
          />
          <div className="w-14" aria-hidden />
        </div>

        {/* Document content – matches screenshot layout */}
        <div className="mt-8">
          {/* Title + subtitle in bordered box (per screenshot) */}
          <div className="rounded-lg border-2 border-gray-300 bg-gray-50 px-4 py-4 text-center sm:px-6 sm:py-5">
            <h1 className="font-serif text-2xl font-bold text-brand-800 sm:text-3xl">
              Agent Participation Agreement
            </h1>
            <p className="mt-1.5 text-sm text-gray-600">
              This Agreement outlines the terms for agents participating on the
              Rurblist platform. Please read carefully before accepting.
            </p>
          </div>

          {/* One border around entire agreement block: Rurblist title → Accept button */}
          <div className="mt-6 rounded-2xl border-2 border-gray-300 bg-white px-4 py-5 sm:px-6 sm:py-6">
            <p className="font-serif text-xl font-bold text-brand-800">
              Rurblist Agent Participation Agreement
            </p>

            {/* Parties box: light beige bg, thin orange-brown border */}
            <div className="mt-3 rounded-2xl border border-brand-500 bg-amber-50/40 px-4 py-4 sm:px-5 sm:py-5">
            <p className="text-sm font-medium text-foreground">
              This Agreement is entered into by and between:
            </p>
            <p className="mt-2 flex flex-wrap items-baseline gap-1 text-sm text-foreground">
              <span>• Rurblist (&quot;Platform&quot;), and</span>
              <input
                type="text"
                value={agentName}
                onChange={(e) => setAgentName(e.target.value)}
                placeholder="____________________"
                className="min-w-48 flex-1 border-0 border-b border-gray-500 bg-transparent px-0 py-0.5 text-sm text-foreground placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-0"
                aria-label="Agent name"
              />
              <span> (&quot;Agent&quot;), today.</span>
            </p>
          </div>

          {/* 1. Platform Participation */}
          <h2 className={`mt-8 ${SECTION_HEADING_CLASS}`}>
            1. Platform Participation
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            Agent agrees to list properties on Rurblist and will only represent
            properties they are authorized to offer.
          </p>

          {/* 2. Payment Structure */}
          <h2 className={`mt-6 ${SECTION_HEADING_CLASS}`}>
            2. Payment Structure
          </h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-foreground">
            <li>
              Agent agrees that Rurblist will collect 100% of the agency fee from
              users.
            </li>
            <li>
              Rurblist retains 20% as platform commission and disburses 80% to
              the Agent within 5 working days, after:
              <ul className="mt-1 list-disc space-y-0.5 pl-5">
                <li>Confirmation that the deal is closed,</li>
                <li>Rating and feedback from the user is submitted.</li>
              </ul>
            </li>
          </ul>

          {/* 3. Trust & Performance */}
          <h2 className={`mt-6 ${SECTION_HEADING_CLASS}`}>
            3. Trust & Performance
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            Agents who:
          </p>
          <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm leading-relaxed text-foreground">
            <li>Do not deliver as promised,</li>
            <li>Receive consistent poor ratings,</li>
            <li>Or attempt to bypass the platform for direct deals</li>
          </ul>
          <p className="mt-1 pl-5 text-sm leading-relaxed text-foreground">
            ...may be suspended or removed without notice.
          </p>

          {/* 4. Media Content */}
          <h2 className={`mt-6 ${SECTION_HEADING_CLASS}`}>
            4. Media Content
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            All property listings must include:
          </p>
          <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm leading-relaxed text-foreground">
            <li>At least 3 clear pictures of the property.</li>
            <li>Documents if available (for verification badge).</li>
          </ul>

          {/* 5. Acceptance */}
          <h2 className={`mt-6 ${SECTION_HEADING_CLASS}`}>5. Acceptance</h2>
          <p className="mt-2 text-sm leading-relaxed text-foreground">
            By signing this, the Agent agrees to all terms above and affirms
            intent to operate professionally on Rurblist.
          </p>

          {/* Checkbox: white interior, orange-brown border (per screenshot) */}
          <div className="mt-8 rounded-2xl border border-brand-500 bg-white px-4 py-4 sm:px-5 sm:py-5">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-5 w-5 shrink-0 rounded border-2 border-brand-500 text-brand-500 focus:ring-brand-500"
              />
              <span className="text-sm font-medium text-foreground">
                I have read and agree to all terms in this Agent Participation
                Agreement
              </span>
            </label>
          </div>

            <button
              type="button"
              onClick={handleAccept}
              disabled={!agreed}
              className="mt-6 w-full rounded-lg bg-brand-500 py-3 text-sm font-medium text-white hover:bg-brand-600 disabled:opacity-50 disabled:hover:bg-brand-500"
            >
              Accept agreement
            </button>
          </div>
        </div>
      </div>

      <Footer />

      <AgreementAcceptedPopup
        open={showAcceptedPopup}
        onClose={handleContinue}
      />
    </div>
  );
}
