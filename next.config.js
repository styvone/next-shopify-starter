const withPWA = require('next-pwa');

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Boquet',
    siteDescription: 'Get some Doggy Stickers!',
    siteKeywords: 'dog, stickers, fun',
    siteUrl: 'https://www.doggystickers.xyz',
    siteImagePreviewUrl: '/images/main.jpg',
    twitterHandle: '@deepwhitman',
    instagramHandle: '@styvone',
  },
  images: {
    domains: ['cdn.shopify.com'],
  },
})
