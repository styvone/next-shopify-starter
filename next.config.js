const withPWA = require('next-pwa');

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Boquet Vaginal Prebiotic',
    siteDescription: 'An easy-to-use vaginal tablet that relieves irritation and odor changes by promoting the growth of good bacteria in the vaginal flora (instead of stripping it away). Backed by science, our tablet is a natural prebiotic that is gentle enough to be used everyday.',
    siteKeywords: 'prebiotic, health, vaginal tablet, vaginal flora, vagina prebiotic, good bacteria, natural, natural prebiotic, balance, hormonal balance, restore, fishy odor, vaginal odor, bacterial vaginosis',
    siteUrl: 'https://www.withboquet.com/',
    siteImagePreviewUrl: '/images/main.jpg',
    instagramHandle: '@withboquet',
  },
  images: {
    domains: ['cdn.shopify.com'],
  },
})
