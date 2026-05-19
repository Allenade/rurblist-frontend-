'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

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
    <div className={cn('whitespace-pre-line', className)}>
      {displayedText}

      {shouldTruncate && (
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="ml-2 text-blue-600 hover:underline font-medium"
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </div>
  );
}
