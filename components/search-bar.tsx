"use client";

type SearchBarProps = {
  placeholder?: string;
  buttonLabel?: string;
  ariaLabel?: string;
  onSearch?: (value: string) => void;
};

export function SearchBar({
  placeholder = "Enter an address, neighborhood, city or zip code",
  buttonLabel = "Search...",
  ariaLabel = "Search by address or location",
  onSearch,
}: SearchBarProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector<HTMLInputElement>('input[type="text"]');
    if (input?.value.trim()) onSearch?.(input.value.trim());
  };

  return (
    <div className="mt-6 w-full md:max-w-xl md:mx-auto">
      <form onSubmit={handleSubmit} className="relative flex w-full items-stretch overflow-hidden rounded-xl border border-white/30 bg-white/95 p-2 shadow-lg sm:p-2.5">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full min-w-0 flex-1 bg-transparent py-3 pl-3 pr-[130px] text-[10px] placeholder:text-muted-foreground focus:outline-none focus:ring-0 sm:pl-4 sm:pr-[140px]"
          aria-label={ariaLabel}
        />
        <button
          type="submit"
          className="absolute right-2 top-2 bottom-2 flex min-w-[110px] items-center justify-center gap-2 rounded-lg bg-brand-400 px-4 text-sm font-medium text-white transition-colors hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 sm:right-2.5 sm:top-2.5 sm:min-w-[120px] sm:bottom-2.5 sm:px-5 sm:text-base"
        >
          <span>{buttonLabel}</span>
          <svg
            className="h-6 w-6 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
