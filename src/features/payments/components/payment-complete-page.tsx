'use client';

import { useGetVerificationById } from '@/features/verification/hooks/use-get-verification-by-id';
import { IconImage, OrangeButton } from '@/shared/ui';
import { useParams, useRouter } from 'next/navigation';
import TransactionTimeline from './time-line-ui';
import VerificationCertificate from './verification-ui';

export function PaymentCompletePage() {
  const params = useParams();
  const id = params.id as string;
  const router = useRouter();
  const { data, isLoading } = useGetVerificationById(id);
  const verification = data?.data;
  const verificationStatus = normalizeStatus(verification?.status);
  const isVerificationCompleted = verificationStatus === 'completed';
  const statusContent = getStatusContent(verificationStatus);
  const propertyTitle = verification?.property?.title || 'Property';
  const completedDate = formatDisplayDate(
    verification?.completedAt || verification?.certificate?.issuedAt || verification?.updatedAt,
  );
  const certificateId =
    verification?.certificate?.certificateId || verification?._id || 'Not available';
  const timelineItems = verification?.timeline?.length
    ? verification.timeline.map((item) => ({
        label: item.title,
        date: formatDisplayDate(item.date),
        highlight:
          item.status?.toLowerCase() === 'completed' ||
          item.title?.toLowerCase().includes('funds released'),
      }))
    : [
        {
          label: verification?.currentStage?.title || 'Verification Started',
          date: formatDisplayDate(verification?.createdAt),
        },
      ];

  if (isLoading) {
    return <PaymentCompleteSkeleton />;
  }

  return (
    <>
      <header className="w-full bg-white  pt-[80px]">
        <div className="relative mx-auto flex min-h-[140px] w-full max-w-6xl flex-col items-center justify-center px-5 sm:flex-row sm:px-8 pb-6">
          {/* 🔙 Back button (Mobile - top) */}
          <div className="w-full sm:hidden mb-4 flex justify-start">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex h-9 w-9 items-center justify-center rounded-full text-black hover:bg-gray-100"
            >
              <IconImage
                src="/icons/chevron-left.svg"
                alt="back"
                className="h-6 w-6"
                width={20}
                height={20}
              />
            </button>
          </div>

          {/* 🔙 Back button (Desktop - left side) */}
          <button
            type="button"
            onClick={() => router.back()}
            className="hidden sm:flex absolute left-5 top-6 h-9 w-9 items-center justify-center rounded-full text-black hover:bg-gray-100 sm:left-8"
          >
            <IconImage
              src="/icons/chevron-left.svg"
              alt="back"
              className="h-6 w-6 sm:h-7 sm:w-7"
              width={20}
              height={20}
            />
          </button>

          {/* ✅ Center Content */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[19px] font-semibold text-black sm:text-[22px]">
              {statusContent.title}
            </h1>

            <p className="mt-4 text-[17px] font-medium text-black sm:text-[20px]">
              {statusContent.subtitle}
            </p>

            {statusContent.description && (
              <p className="mt-2 text-[12px] text-black sm:text-[14px]">
                {statusContent.description}
              </p>
            )}
          </div>
        </div>
      </header>

      <VerificationCertificate
        property={propertyTitle}
        verificationDate={completedDate}
        certificateId={certificateId}
        status={verification?.status || 'pending'}
        qrCodeSrc="/icons/noto_mobile-phone.svg"
        showQrCode={isVerificationCompleted}
        subtitle={statusContent.certificateSubtitle}
      />

      {isVerificationCompleted && (
        <section className="w-full px-4 sm:px-6 lg:px-8 pb-10">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 mt-8">
            <OrangeButton
              fullWidth
              iconSrc="/icons/Document.svg"
              iconAlt="certificate"
              iconSize={22}
              className="min-h-[64px] sm:min-h-[68px] rounded-md text-base sm:text-[16px]"
            >
              Download Verification Certificate
            </OrangeButton>

            <OrangeButton
              fullWidth
              variant="white"
              iconSrc="/icons/Receipt.svg"
              iconAlt="receipt"
              iconSize={24}
              className="min-h-[64px] sm:min-h-[68px] rounded-md border-[#e87722] text-base text-[#e87722] text-[14px] hover:bg-[#fff7f1] sm:text-[16px]"
            >
              Download Receipts & Timeline
            </OrangeButton>

            <OrangeButton
              fullWidth
              variant="white"
              iconSrc="/icons/Star1.svg"
              iconAlt="rate agent"
              iconSize={26}
              className="min-h-[64px] sm:min-h-[68px] rounded-md border-[#e87722] text-base text-[#e87722] text-[14px] hover:bg-[#fff7f1] sm:text-[16px]"
            >
              Rate Your Agent
            </OrangeButton>
          </div>
        </section>
      )}
      <TransactionTimeline items={timelineItems} onStartNewTransaction={() => router.push('/')} />
    </>
  );
}

function normalizeStatus(status?: string | null) {
  return status?.toLowerCase().replaceAll('-', '_').replaceAll(' ', '_');
}

function getStatusContent(status?: string) {
  switch (status) {
    case 'completed':
      return {
        title: 'Congratulations! Deal Closed',
        subtitle: 'Verification Completed Successfully',
        description: 'Funds have been released to seller',
        certificateSubtitle: 'Property Verification Completed Successfully',
      };
    case 'payment_confirmed':
      return {
        title: 'Payment Confirmed',
        subtitle: 'Verification is waiting to start',
        description: 'Your payment has been received and the verification process will begin soon.',
        certificateSubtitle: 'Property verification is waiting to start.',
      };
    case 'verification_started':
      return {
        title: 'Verification Started',
        subtitle: 'Property verification is in progress',
        description: 'Our team has started reviewing the property details.',
        certificateSubtitle: 'Property verification is in progress.',
      };
    case 'documents_under_review':
      return {
        title: 'Documents Under Review',
        subtitle: 'Property documents are being checked',
        description: 'We are reviewing the submitted documents before moving to the next stage.',
        certificateSubtitle: 'Property documents are being reviewed.',
      };
    case 'inspection_scheduled':
      return {
        title: 'Inspection Scheduled',
        subtitle: 'Property inspection is scheduled',
        description: 'The property inspection has been scheduled and verification is still ongoing.',
        certificateSubtitle: 'Property inspection has been scheduled.',
      };
    case 'rejected':
      return {
        title: 'Verification Rejected',
        subtitle: 'Property verification was not approved',
        description: 'Please review the timeline for more details about the rejection.',
        certificateSubtitle: 'Property verification was not approved.',
      };
    case 'cancelled':
      return {
        title: 'Verification Cancelled',
        subtitle: 'This verification has been cancelled',
        description: 'The verification process is no longer active.',
        certificateSubtitle: 'Property verification has been cancelled.',
      };
    case 'pending':
    default:
      return {
        title: 'Verification Pending',
        subtitle: 'Property verification is pending',
        description: 'We are waiting for the next step before verification can continue.',
        certificateSubtitle: 'Property verification is pending.',
      };
  }
}

function formatDisplayDate(date?: string | null) {
  if (!date) return 'Not available';

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return 'Not available';
  }

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(parsedDate);
}

function PaymentCompleteSkeleton() {
  return (
    <div className="min-h-screen bg-white pt-[80px]">
      <header className="w-full bg-white">
        <div className="mx-auto flex min-h-[140px] w-full max-w-6xl flex-col items-center justify-center px-5 pb-6 sm:px-8">
          <div className="h-6 w-64 animate-pulse rounded bg-gray-200" />
          <div className="mt-5 h-5 w-72 animate-pulse rounded bg-gray-200" />
          <div className="mt-3 h-4 w-48 animate-pulse rounded bg-gray-200" />
        </div>
      </header>

      <section className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl rounded-md bg-[#eeeeee] px-4 py-10 sm:px-8 sm:py-12 lg:px-16">
          <div className="mx-auto h-7 w-64 animate-pulse rounded bg-gray-300" />
          <div className="mx-auto mt-3 h-4 w-80 max-w-full animate-pulse rounded bg-gray-300" />

          <div className="mx-auto mt-10 grid w-full max-w-[680px] gap-7 rounded-lg bg-white px-6 py-7 sm:grid-cols-2 sm:px-10">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="space-y-2">
                <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
                <div className="h-5 w-40 animate-pulse rounded bg-gray-200" />
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 h-[96px] w-[96px] animate-pulse rounded-md bg-gray-300" />
        </div>
      </section>

      <section className="w-full px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-5">
          {[1, 2, 3].map((item) => (
            <div key={item} className="h-16 animate-pulse rounded-md bg-gray-200" />
          ))}
        </div>
      </section>
    </div>
  );
}
