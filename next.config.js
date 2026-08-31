/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  // SEO / hygiene: don't leak the framework in response headers.
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
};

module.exports = nextConfig;
