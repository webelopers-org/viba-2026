import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'registrationUrl',
      type: 'text',
      label: 'Online Registration URL',
      defaultValue: 'https://app.gostudiopro.com/online/index.php?account_id=31952',
    },
    // Hero
    {
      name: 'hero',
      type: 'group',
      label: 'Hero',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Victoria International Ballet Academy',
        },
        {
          name: 'subtitle',
          type: 'text',
          defaultValue: 'Your professional ballet training awaits…',
        },
        {
          name: 'ctaLabel',
          type: 'text',
          defaultValue: 'Choose Your Class Today',
        },
        {
          name: 'ctaUrl',
          type: 'text',
          defaultValue: '/classes',
        },
      ],
    },
    // Footer
    {
      name: 'footer',
      type: 'group',
      label: 'Footer',
      fields: [
        {
          name: 'address',
          type: 'text',
          defaultValue: '7 Bradwick Drive, Vaughan, Ontario, L4K 2T4',
        },
        {
          name: 'phone',
          type: 'text',
          defaultValue: '905-707-7580',
        },
        {
          name: 'email',
          type: 'text',
          defaultValue: 'info@victoriaballet.ca',
        },
        {
          name: 'instagramUrl',
          type: 'text',
        },
        {
          name: 'facebookUrl',
          type: 'text',
        },
        {
          name: 'youtubeUrl',
          type: 'text',
        },
        {
          name: 'twitterUrl',
          type: 'text',
        },
      ],
    },
  ],
}
