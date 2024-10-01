/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/mywebsite",
    trailingSlash: true,
    assetPrefix: '/mywebsite/out'
  };

export default nextConfig;
