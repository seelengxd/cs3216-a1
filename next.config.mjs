/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/cs3216-a1",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  images: { unoptimized: true },
};

export default nextConfig;
