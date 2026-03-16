import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  admin: {
    useAsTitle: 'caption',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'Performance', value: 'performance' },
        { label: 'Clases', value: 'classes' },
        { label: 'Intensivo de Verano', value: 'summer-intensive' },
        { label: 'Behind the Scenes', value: 'behind-the-scenes' },
      ],
    },
  ],
}
