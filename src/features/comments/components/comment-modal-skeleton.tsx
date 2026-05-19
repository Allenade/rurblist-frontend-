'use client';

export default function CommentModalSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex gap-3 py-5 border-b border-gray-200 last:border-b-0">
          <div className="h-10 w-10 rounded-full bg-gray-200" />

          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-4 w-32 rounded bg-gray-200" />
              <div className="h-3 w-16 rounded bg-gray-200" />
            </div>

            <div className="h-3 w-24 rounded bg-gray-200" />
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-5/6 rounded bg-gray-200" />
            <div className="h-4 w-20 rounded bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
