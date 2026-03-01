"use client"

interface PropertyMapProps {
  location: string
  height?: string
}

export default function PropertyMap({
  location,
  height = "h-[400px]",
}: PropertyMapProps) {
  const encodedLocation = encodeURIComponent(location)

  return (
    <section className="w-full mt-5">
      <div className="max-w-300 mx-auto px-2">
        <div
          className={`w-full ${height}  overflow-hidden border border-gray-200`}
        >
          <iframe
            title="Property Location"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodedLocation}&output=embed`}
            className="w-full h-full"
          />
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-200" />
      </div>
    </section>
  )
}