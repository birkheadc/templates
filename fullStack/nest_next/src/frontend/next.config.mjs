import createnextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createnextIntlPlugin('./src/intl/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
