export default function LoadMoreSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
           className="animate-pulse transition-opacity duration-300 bg-white rounded-lg overflow-hidden"
        >
          {/* Image */}
          <div className="w-full h-62.5 bg-gray-200" />

          {/* Content */}
          <div className="p-4 space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="h-6 bg-gray-200 rounded w-1/3 mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
}