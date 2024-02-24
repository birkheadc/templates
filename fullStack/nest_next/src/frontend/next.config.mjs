import createnextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createnextIntlPlugin('./src/intl/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default withNextIntl(nextConfig);
