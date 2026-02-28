"use client";

const MODAL_HEADING_CLASS =
  "font-serif text-base font-bold text-brand-800 sm:text-lg";

type AddNewPropertyPopupProps = {
  open: boolean;
  onClose: () => void;
  onPublishSuccess?: () => void;
};

export function AddNewPropertyPopup({
  open,
  onClose,
  onPublishSuccess,
}: AddNewPropertyPopupProps) {
  function handlePublish() {
    onClose();
    onPublishSuccess?.();
  }
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="add-property-title"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-lg flex-col rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex shrink-0 items-center border-b border-border p-4">
          <button
            type="button"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <h2
            id="add-property-title"
            className="flex-1 text-center text-xl font-bold text-foreground sm:text-2xl"
          >
            Add new property
          </h2>
          <div className="w-5" aria-hidden />
        </div>

        <div className="overflow-y-auto p-6">
          <section>
            <h3 className={MODAL_HEADING_CLASS}>Basic Details</h3>
            <div className="mt-3 space-y-3">
              <div>
                <label
                  htmlFor="property-title"
                  className="block text-sm font-medium text-foreground"
                >
                  Property title
                </label>
                <input
                  id="property-title"
                  type="text"
                  placeholder="E.g A luxury 2 bedroom flat"
                  className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="property-address"
                  className="block text-sm font-medium text-foreground"
                >
                  Property address
                </label>
                <input
                  id="property-address"
                  type="text"
                  placeholder="E.g Ugbomro"
                  className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="property-description"
                  className="block text-sm font-medium text-foreground"
                >
                  Description
                </label>
                <textarea
                  id="property-description"
                  rows={4}
                  placeholder="Describe the property in full. Every detail matters."
                  className="mt-1 w-full resize-y rounded-lg border border-border px-3 py-2 text-sm"
                />
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h3 className={MODAL_HEADING_CLASS}>Property Specifications</h3>
            <div className="mt-3 space-y-3">
              <div>
                <label
                  htmlFor="property-type"
                  className="block text-sm font-medium text-foreground"
                >
                  Type
                </label>
                <select
                  id="property-type"
                  className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm"
                  defaultValue="1 bedroom flat"
                >
                  <option value="1 bedroom flat">1 bedroom flat</option>
                  <option value="2 bedroom flat">2 bedroom flat</option>
                  <option value="3 bedroom flat">3 bedroom flat</option>
                  <option value="bedsitter">Bedsitter</option>
                  <option value="self contain">Self contain</option>
                  <option value="duplex">Duplex</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="property-status"
                  className="block text-sm font-medium text-foreground"
                >
                  Status
                </label>
                <select
                  id="property-status"
                  className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm"
                  defaultValue="For rent"
                >
                  <option value="For rent">For rent</option>
                  <option value="For sale">For sale</option>
                  <option value="Sold">Sold</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="property-bedrooms"
                  className="block text-sm font-medium text-foreground"
                >
                  Number of bedrooms
                </label>
                <input
                  id="property-bedrooms"
                  type="text"
                  placeholder="Input number of bedrooms"
                  className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="property-bathrooms"
                  className="block text-sm font-medium text-foreground"
                >
                  Number of bathrooms
                </label>
                <input
                  id="property-bathrooms"
                  type="text"
                  placeholder="Input number of bathrooms"
                  className="mt-1 w-full rounded-lg border border-border px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="property-price"
                  className="block text-sm font-medium text-foreground"
                >
                  Price
                </label>
                <div className="mt-1 flex overflow-hidden rounded-lg border border-border">
                  <span className="flex items-center border-r border-border bg-muted/30 px-3 text-sm text-muted-foreground">
                    $
                  </span>
                  <input
                    id="property-price"
                    type="text"
                    placeholder="0"
                    className="w-full px-3 py-2 text-sm"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6">
            <h3 className={MODAL_HEADING_CLASS}>Media Uploads</h3>
            <div className="mt-3">
              <p className="mb-2 text-sm font-medium text-foreground">Images</p>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/20 text-muted-foreground"
                  >
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-sm font-medium text-foreground">
                Video (optional)
              </p>
              <div className="mt-2 flex aspect-video items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/20 text-muted-foreground">
                <svg
                  className="h-10 w-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </div>
            </div>
          </section>
        </div>

        <div className="flex shrink-0 gap-3 border-t border-border p-4">
          <button
            type="button"
            className="flex-1 rounded-lg border border-border bg-gray-100 py-3 text-sm font-medium text-foreground hover:bg-gray-200"
          >
            Save as draft
          </button>
          <button
            type="button"
            onClick={handlePublish}
            className="flex-1 rounded-lg bg-brand-500 py-3 text-sm font-medium text-white hover:bg-brand-600"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}
