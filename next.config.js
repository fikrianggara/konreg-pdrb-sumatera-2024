/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/kegiatan",
        destination: "/kegiatan/lokasi",
        permanent: true,
      },
    ];
  },
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = withPWA({
  ...nextConfig,
  reactStrictMode: true,
});
