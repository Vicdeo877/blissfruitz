/** @type {import('next').NextConfig} */
const apiOrigin = (
  process.env.NEXT_PUBLIC_API_URL ||
  process.env.API_REWRITE_TARGET ||
  ""
).replace(/\/$/, "");

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

if (apiOrigin) {
  nextConfig.rewrites = async () => [
    {
      source: "/api/:path*",
      destination: `${apiOrigin}/api/:path*`,
    },
  ];
}

export default nextConfig;
