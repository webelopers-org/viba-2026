import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import config from '@payload-config'

export async function Hero() {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings' })
  const { hero } = settings

  return (
    <section className="relative w-full h-[90vh] flex items-end justify-center pb-24">
      {/* Imagen de fondo */}
      {hero?.image && typeof hero.image === 'object' && hero.image.url ? (
        <Image
          src={hero.image.url}
          alt="Victoria Ballet Academy"
          fill
          className="object-cover object-center"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-primary" />
      )}

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-heading text-4xl md:text-6xl font-semibold text-white tracking-widest uppercase mb-6">
          {hero?.title || 'Victoria International Ballet Academy'}
        </h1>
        {hero?.subtitle && (
          <p className="font-body text-lg md:text-xl text-white/90 mb-8 italic">{hero.subtitle}</p>
        )}
        {hero?.ctaLabel && hero?.ctaUrl && (
          <Link
            href={hero.ctaUrl}
            className="inline-block bg-primary hover:bg-primary-dark text-white font-body font-medium tracking-[2px] uppercase text-sm px-8 py-4 transition-colors"
          >
            {hero.ctaLabel}
          </Link>
        )}
      </div>
    </section>
  )
}
