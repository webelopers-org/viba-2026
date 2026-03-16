import type { CollectionConfig } from 'payload'

export const Classes: CollectionConfig = {
  slug: 'classes',
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
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'level',
      type: 'select',
      required: true,
      options: [
        { label: 'After School', value: 'after-school' },
        { label: 'Pre-Professional', value: 'pre-professional' },
        { label: 'Professional', value: 'professional' },
        { label: 'Adults', value: 'adults' },
      ],
    },
    {
      name: 'ageRange',
      type: 'text',
      admin: {
        description: 'Ej: 5-8 años',
      },
    },
    {
      name: 'schedule',
      type: 'textarea',
      admin: {
        description: 'Días y horarios',
      },
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
