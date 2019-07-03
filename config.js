module.exports = {
  title: 'Title',
  description: 'Description',
  defaultLocale: 'en',
  locales: [
    { code: 'en', iso: 'en-US', name: 'English' },
    { code: 'es', iso: 'es-ES', name: 'Español' }
  ],
  content: {
    frontMatterFormat: 'yaml',
    systems: [
      'cdn',
      'site-delivery',
      'api'
    ]
  },
  theme: {
    scheduled: {
      position: 'aboveGlobalStatus'
    }
  }
}
