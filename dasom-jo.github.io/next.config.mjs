/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/dasom-jo.github.io/" : "",
  basePath: process.env.NODE_ENV === "production" ? "/dasom-jo.github.io" : "",
  trailingSlash: true,
};

export default nextConfig;
