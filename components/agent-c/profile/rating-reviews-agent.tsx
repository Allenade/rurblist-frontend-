'use client';

import React from 'react';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
}

interface Props {
  averageRating: number;
  totalReviews: number;
  ratingBreakdown: {
    star: number;
    count: number;
  }[];
  reviews: Review[];
}

export default function RatingsSection({
  averageRating,
  totalReviews,
  ratingBreakdown,
  reviews,
}: Props) {
  const maxCount = Math.max(...ratingBreakdown.map((r) => r.count), 1);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold text-[#7A3E0A] mb-6">Ratings and Reviews</h2>

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-10">
        {/* Left: Average */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-4xl sm:text-5xl font-bold">{averageRating.toFixed(1)}</h3>

          <Stars rating={averageRating} />

          <p className="text-sm text-gray-500 mt-2">({totalReviews} ratings)</p>
        </div>

        {/* Right: Breakdown */}
        <div className="space-y-3 w-full">
          {ratingBreakdown.map((item) => {
            const percentage = (item.count / maxCount) * 100;

            return (
              <div key={item.star} className="flex items-center gap-3">
                <span className="w-6 text-sm flex items-center gap-1">
                  {item.star} <span className={`text-sm text-[#e87722]`}>★</span>
                </span>

                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#e87722] rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex mt-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`text-xl ${i <= Math.round(rating) ? 'text-[#e87722]' : 'text-gray-300'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="border rounded-xl p-5 bg-white">
      {/* Stars */}
      <div className="flex mb-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`text-sm ${i <= review.rating ? 'text-[#e87722]' : 'text-gray-300'}`}
          >
            ★
          </span>
        ))}
      </div>

      {/* Name */}
      <h4 className="font-semibold text-gray-900 mb-2">{review.name}</h4>

      {/* Comment */}
      <p className="text-sm text-gray-600 leading-relaxed">{review.comment}</p>
    </div>
  );
}
