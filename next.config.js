/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US'
  },
  webpack(config) {
    config.experiments = {
      asyncWebAssembly: true
    };
    return config;
  }
};
