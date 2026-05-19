'use client';

import Image from 'next/image';

type VerificationCertificateProps = {
  property: string;
  verificationDate: string;
  certificateId: string;
  status?: string;
  qrCodeSrc?: string;
  showQrCode?: boolean;
  title?: string;
  subtitle?: string;
};

export default function VerificationCertificate({
  property,
  verificationDate,
  certificateId,
  status = 'verified',
  qrCodeSrc = '/icons/qr-code.svg',
  showQrCode = true,
  title = 'Verification Certificate',
  subtitle = 'Property Verification Completed Successfully',
}: VerificationCertificateProps) {
  const statusStyle = getStatusStyle(status);

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-5xl rounded-md bg-[#eeeeee] px-4 py-10 sm:px-8 sm:py-12 lg:px-16">
        <div className="text-center">
          <h2 className="text-[22px] font-semibold leading-tight text-black sm:text-[26px]">
            {title}
          </h2>
          <p className="mt-1 text-sm text-black sm:text-base">{subtitle}</p>
        </div>

        <div className="mx-auto mt-10 w-full max-w-[680px] rounded-lg bg-white px-6 py-7 sm:px-10">
          <div className="grid gap-7 sm:grid-cols-2 sm:gap-12">
            <div className="space-y-6">
              <InfoItem label="Property:" value={property} />
              <InfoItem label="Verification Date" value={verificationDate} />
            </div>

            <div className="space-y-7 sm:pl-8">
              <div>
                <p className="text-sm text-[#9c9c9c]">Certificate ID:</p>
                <p className="mt-1 text-xs font-medium text-[#9c9c9c]">{certificateId}</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-[#9c9c9c]">Status:</span>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyle}`}>
                  {status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {showQrCode && (
          <div className="mt-12 flex justify-center">
            <div className="flex h-[96px] w-[96px] flex-col items-center justify-center rounded-md border border-[#8f8f8f] bg-white">
              <Image src={qrCodeSrc} alt="QR Code" width={28} height={28} />
              <p className="mt-3 text-sm text-black">QR Code</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function normalizeStatus(status?: string) {
  return status?.toLowerCase().replaceAll('-', '_').replaceAll(' ', '_');
}

function getStatusStyle(status?: string) {
  switch (normalizeStatus(status)) {
    case 'completed':
      return 'bg-[#bff3cf] text-[#1f9d55]';
    case 'payment_confirmed':
      return 'bg-[#dbeafe] text-[#1d4ed8]';
    case 'verification_started':
      return 'bg-[#e0f2fe] text-[#0369a1]';
    case 'documents_under_review':
    case 'inspection_scheduled':
      return 'bg-[#fef3c7] text-[#b45309]';
    case 'rejected':
      return 'bg-[#fee2e2] text-[#b91c1c]';
    case 'cancelled':
      return 'bg-[#e5e7eb] text-[#4b5563]';
    case 'pending':
    default:
      return 'bg-[#f3f4f6] text-[#6b7280]';
  }
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-base text-[#5f5f5f]">{label}</p>
      <p className="mt-1 text-lg font-semibold leading-snug text-black">{value}</p>
    </div>
  );
}
