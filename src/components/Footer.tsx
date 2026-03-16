import config from '@payload-config'
import { ChevronRight, Clock, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import { SiFacebook, SiInstagram, SiX, SiYoutube } from 'react-icons/si'

const links = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Teachers', href: '/about/our-teachers' },
  { label: 'Our Production', href: 'https://victoriaballet.ca' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

export async function Footer() {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Columna izquierda */}
        <div className="flex flex-col gap-4">
          {settings.logo && typeof settings.logo === 'object' && settings.logo.url && (
            <Image
              src={settings.logo.url}
              alt="Victoria Ballet Academy"
              width={100}
              height={100}
              className="object-contain"
            />
          )}
          <h3 className="font-bold text-lg text-white">Victoria International Ballet Academy</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
              <span>
                {settings.footer?.address || '7 Bradwick Drive, Vaughan, Ontario, L4K 2T4'}
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={14} className="text-gold shrink-0" />
              <span>Monday - Friday: 9 a.m. - 7 p.m.</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock size={14} className="text-gold shrink-0" />
              <span>Sat. and Sun. 10 a.m. - 1 p.m.</span>
            </li>
            {settings.footer?.phone && (
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold shrink-0" />
                <a
                  href={`tel:${settings.footer.phone}`}
                  className="hover:text-gold transition-colors"
                >
                  {settings.footer.phone}
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Columna centro - Links */}
        <div>
          <h3 className="text-gold font-semibold tracking-widest uppercase text-sm mb-6">
            Our Links
          </h3>
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-gold transition-colors"
                >
                  <ChevronRight size={14} className="text-gold shrink-0" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna derecha - Redes */}
        <div>
          <h3 className="text-gold font-semibold tracking-widest uppercase text-sm mb-6">
            Follow Us
          </h3>
          <ul className="space-y-3 text-sm">
            {settings.footer?.facebookUrl && (
              <li>
                <a
                  href={settings.footer.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
                >
                  <SiFacebook size={16} className="text-gold shrink-0" /> Facebook
                </a>
              </li>
            )}
            {settings.footer?.instagramUrl && (
              <li>
                <a
                  href={settings.footer.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
                >
                  <SiInstagram size={16} className="text-gold shrink-0" /> Instagram
                </a>
              </li>
            )}
            {settings.footer?.twitterUrl && (
              <li>
                <a
                  href={settings.footer.twitterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
                >
                  <SiX size={16} className="text-gold shrink-0" /> Twitter
                </a>
              </li>
            )}
            {settings.footer?.youtubeUrl && (
              <li>
                <a
                  href={settings.footer.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
                >
                  <SiYoutube size={16} className="text-gold shrink-0" /> YouTube
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/50">
        Copyright © {new Date().getFullYear()} Victoria Ballet Academy
      </div>
    </footer>
  )
}
