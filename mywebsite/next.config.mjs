/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/mywebsite",
    trailingSlash: true,
    assetPrefix: '/mywebsite/_next/static/css/'
  };

export default nextConfig;
