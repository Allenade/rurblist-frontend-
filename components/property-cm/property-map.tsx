"use client"

interface PropertyMapProps {
  address?: string
  latitude?: number
  longitude?: number
  height?: string
}

export default function PropertyMap({
  address,
  latitude,
  longitude,
  height = "h-[400px]",
}: PropertyMapProps) {

  let mapSrc = ""

  if (latitude && longitude) {
    mapSrc = `https://www.google.com/maps?q=${latitude},${longitude}&output=embed`
  } else if (address) {
    const encodedLocation = encodeURIComponent(address)
    mapSrc = `https://www.google.com/maps?q=${encodedLocation}&output=embed`
  }

  return (
    <section className="w-full mt-5">
      <div className="max-w-300 mx-auto px-2">
        <div
          className={`w-full ${height} overflow-hidden border border-gray-200`}
        >
          <iframe
            title="Property Location"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={mapSrc}
            className="w-full h-full"
          />
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-200" />
      </div>
    </section>
  )
}