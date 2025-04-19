import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: isProd ? "/portofolio" : "",
  assetPrefix: isProd ? "/portofolio/" : "",
  output: "export", // <-- INI PENTING!
};

export default nextConfig;
