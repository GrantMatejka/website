/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  webpack(config) {
    config.experiments = {
      layers: true,
      asyncWebAssembly: true
    };
    return config;
  }
};
