import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      admin: {
        description: 'Ej: Estudiante, Padre/Madre',
      },
    },
    {
      name: 'program',
      type: 'select',
      options: [
        { label: 'After School', value: 'after-school' },
        { label: 'Pre-Professional', value: 'pre-professional' },
        { label: 'Professional', value: 'professional' },
        { label: 'Adults', value: 'adults' },
      ],
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
