/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: "/mywebsite",
    trailingSlash: true,
    assetPrefix: '/mywebsite/css'
  };

export default nextConfig;
