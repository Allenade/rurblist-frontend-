import Image from 'next/image'

interface IconImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function IconImage({
  src,
  alt,
  width = 24,
  height = 24,
  className = ''
}: IconImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  )
}
