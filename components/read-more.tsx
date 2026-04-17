'use client';

import { useState } from 'react';

type ReadMoreTextProps = {
  text: string;
  maxLength?: number;
  className?: string;
};

export default function ReadMoreText({ text, maxLength = 160, className }: ReadMoreTextProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = text.length > maxLength;

  const displayedText = isExpanded
    ? text
    : text.slice(0, maxLength) + (shouldTruncate ? '...' : '');

  return (
    <p className={className}>
      {displayedText}

      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded((prev) => !prev)}
          className="ml-2 text-blue-600 hover:underline font-medium"
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </p>
  );
}
