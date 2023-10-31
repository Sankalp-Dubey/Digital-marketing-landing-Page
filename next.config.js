/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["admin.spirehubs.com"],
  },
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },
};

module.exports = nextConfig;
