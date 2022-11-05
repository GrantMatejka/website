/** @type {import('next').NextConfig} */
module.exports = {
   compiler: {
      styledComponents: true,
   },
   reactStrictMode: true,
   i18n: {
      locales: ['en-US'],
      defaultLocale: 'en-US',
   },
   webpack(config) {
      config.experiments = {
         layers: true,
         asyncWebAssembly: true,
      };
      return config;
   },
};
