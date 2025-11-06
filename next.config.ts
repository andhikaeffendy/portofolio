import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: isProd ? "/portofolio" : "",
  assetPrefix: isProd ? "/portofolio/" : "",
  output: "export", // <-- INI PENTING!
  images: {
    unoptimized: true, // Disable built-in image optimization
    path: '/_next/image/', // Default path for images
  },
};

export default nextConfig;
