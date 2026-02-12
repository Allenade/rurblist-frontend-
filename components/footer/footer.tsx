'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, MessageCircle, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FooterColumn {
  title: string
  links: Array<{ label: string; href: string }>
}

interface FooterProps {
  columns?: FooterColumn[]
  description?: string
  className?: string
  showSocialIcons?: boolean
}

const defaultColumns: FooterColumn[] = [
  {
    title: 'Locations',
    links: [
      { label: 'Logos', href: '#' },
      { label: 'Delta', href: '#' },
      { label: 'Enugu', href: '#' },
      { label: 'Abuja etc', href: '#' }
    ]
  },
  {
    title: 'Learn more',
    links: [
      { label: 'Lands', href: '#' },
      { label: 'Apartments', href: '#' },
      { label: 'Business properties', href: '#' },
      { label: 'Listings', href: '#' },
      { label: 'Agents', href: '#' }
    ]
  },
  {
    title: 'Contact info',
    links: [
      { label: 'Phone: +234-845-678', href: 'tel:+2348456789' },
      { label: 'Email: info@rurblist.com', href: 'mailto:info@rurblist.com' }
    ]
  }
]

const defaultDescription =
  'Housing made easy! At rurblist we strive to give you the best services and the best apartment. at a low cost, you can enjoy our services.'

export function Footer({
  columns = defaultColumns,
  description = defaultDescription,
  className,
  showSocialIcons = true
}: FooterProps) {
  const socialIcons = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: MessageCircle, href: '#', label: 'WhatsApp' },
    { Icon: Mail, href: '#', label: 'Email' }
  ]

  return (
    <footer
      className={cn(
        'relative bg-cover bg-center bg-no-repeat pt-20 pb-8',
        className
      )}
      style={{
        backgroundImage: 'url(/footer-bg.jpg)'
      }}
    >
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-script text-gray-900 mb-3">Rurblist</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 max-w-xs">
              {description}
            </p>

            {/* Social icons */}
            {showSocialIcons && (
              <div className="flex gap-3">
                {socialIcons.map(({ Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-2 text-gray-600 bg-gray-200 rounded-full transition-all hover:bg-transparent hover:text-[#e87722]"
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Link columns */}
          {columns.map((column, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="font-semibold text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-2 flex flex-col">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-[#e87722] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom divider */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-500 text-xs text-center">
            © 2024 Rurblist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
