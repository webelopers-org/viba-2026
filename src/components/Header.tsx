import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Teachers', href: '/about/our-teachers' },
      { label: 'Our Alumni', href: '/about/our-alumni' },
      { label: 'Facilities and Rentals', href: '/about/facilities' },
    ],
  },
  {
    label: 'Classes',
    href: '/classes',
    children: [
      { label: 'Ballet Classes', href: '/classes/ballet' },
      { label: 'Adult Ballet Programs', href: '/classes/adults' },
      { label: 'Summer Ballet Intensive', href: '/classes/summer-intensive' },
      { label: 'Teacher Training Program', href: '/classes/teacher-training' },
    ],
  },
  {
    label: 'Professional',
    href: '/professional',
    children: [
      { label: 'Professional Program', href: '/professional' },
      { label: 'International Students', href: '/professional/international' },
    ],
  },
  { label: 'Ballet Productions', href: 'https://victoriaballet.ca', external: true },
  { label: 'Contact', href: '/contact' },
  { label: 'Online Registration', href: '#', isRegistration: true },
]

export async function Header() {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  return (
    <header className="sticky top-0 z-50 bg-primary">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          {settings.logo && typeof settings.logo === 'object' && settings.logo.url ? (
            <Image
              src={settings.logo.url}
              alt="Victoria Ballet Academy"
              width={70}
              height={70}
              className="object-contain rounded-full"
            />
          ) : (
            <span className="font-serif text-lg font-bold text-white">Victoria Ballet Academy</span>
          )}
        </Link>

        {/* Nav desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.isRegistration ? settings.registrationUrl || '#' : item.href}
                target={item.external || item.isRegistration ? '_blank' : undefined}
                className="text-xs font-semibold tracking-[3px] uppercase text-gold hover:text-gold-light px-3 py-2 block transition-colors"
              >
                {item.label}
                {item.children && <span className="ml-1 text-[10px]">▾</span>}
              </Link>

              {/* Dropdown */}
              {item.children && (
                <div className="absolute top-full left-0 bg-primary shadow-lg py-2 min-w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-gold hover:text-gold-light hover:bg-primary-dark transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}
