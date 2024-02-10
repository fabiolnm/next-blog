/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/messages/next-image-unconfigured-host
  images: {
    domains: ['source.unsplash.com'],
  },
};

export default nextConfig;
