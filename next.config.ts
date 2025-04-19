import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true, // Opsional, agar URL mengakhiri dengan slash (/)
  basePath: '/portofolio',  // Gantilah dengan nama repository kamu di GitHub
  assetPrefix: '/portofolio/', // Ini untuk mengatasi masalah dengan asset di GitHub Pages
};

export default nextConfig;
