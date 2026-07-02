import type { NextConfig } from "next";

const basePath = "/needledrop_media_demo";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: `${basePath}/`,
};

export default nextConfig;