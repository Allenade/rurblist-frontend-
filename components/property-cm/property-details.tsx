'use client';

import { IconImage } from '../icon-image/icon-image';
import ReadMoreText from '../read-more';

interface PropertyDetailsProps {
  price: number;
  location: string;
  status: 'For_Rent' | 'For_Sale' | 'Sold';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: string;
  verificationStatus?: string;
  amenities?: string[];
  furnishingStatus?: string;
  description?: string;
}

export default function PropertyDetails({
  price,
  location,
  status,
  sqft,
  bathrooms,
  bedrooms,
  type,
  verificationStatus,
  amenities = [],
  furnishingStatus,
  description,
}: PropertyDetailsProps) {
  const isVerified = verificationStatus?.toLowerCase() === 'verified';
  const isLand = type.toLowerCase() === 'land';

  return (
    <div className="w-full max-w-full lg:max-w-200">
      <div className="mb-8 sm:mb-10">
        {/* Status */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-green-600">
            <span className="w-2 h-2 bg-green-600 rounded-full" />
            {status === 'For_Rent' ? 'For rent' : 'For sale'}
          </div>
          <div
            className={`rounded-full px-3 py-1 text-xs sm:text-sm font-medium text-white ${
              isVerified ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {isVerified ? 'Verified' : 'Unverified'}
          </div>
        </div>

        {/* Price */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 leading-tight">
          ₦{price.toLocaleString()}
          {status === 'For_Rent' && (
            <span className="text-sm sm:text-base font-normal text-gray-500">yearly</span>
          )}
        </h1>

        {/* Location */}
        <p className="text-sm sm:text-base text-gray-600 mb-5 wrap-break-word">{location}</p>

        {/* Quick Meta */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:text-base text-gray-600 mb-8">
          {!isLand && (
            <span className="flex items-center gap-1">
              <IconImage
                className="w-4 h-4 sm:w-5 sm:h-5"
                src="/icons/mdi_bedroom-outline (1).svg"
                alt="bedroom"
              />
              {bedrooms} bedroom
            </span>
          )}
          {!isLand && <span className="hidden sm:block w-px h-4 bg-gray-300" />}
          {!isLand && (
            <span className="flex items-center gap-1">
              <IconImage
                className="w-4 h-4 sm:w-5 sm:h-5"
                src="/icons/mingcute_bath-line.svg"
                alt="bedroom"
              />{' '}
              {bathrooms} bath
            </span>
          )}
          {!isLand && <span className="hidden sm:block w-px h-4 bg-gray-300" />}
          <span className="flex items-center gap-1">
            <IconImage
              className="w-4 h-4 sm:w-5 sm:h-5"
              src="/icons/tdesign_measurement-2 (1).svg"
              alt="bedroom"
            />{' '}
            {sqft} sqft
          </span>
        </div>

        <hr className="border-gray-200 mb-8" />

        {/* About */}
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-[#e87722] mb-3">About</h2>

        <ReadMoreText
          maxLength={250}
          className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 max-w-[65ch]"
          text={description ?? 'No description available.'}
        />
        <hr className="border-gray-200 mb-8" />

        {/* Features */}
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-[#e87722] mb-4">
          Property features
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 text-sm sm:text-base text-gray-600 list-disc pl-5">
          <li>Property Type: {type}</li>
          <li>Size: {sqft} sqm</li>
          {!isLand && <li>Bedrooms: {bedrooms}</li>}
          {!isLand && <li>Bathrooms: {bathrooms}</li>}
          {!isLand && <li>Furnished: {furnishingStatus || 'Unfurnished'}</li>}
          {!isLand && amenities.length > 0 && <li>Amenities: {amenities.join(', ')}</li>}
        </ul>
      </div>
    </div>
  );
}
