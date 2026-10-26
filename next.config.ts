import type { NextConfig } from "next";

const cmsOrigin = new URL(process.env.POCKETBASE_URL ?? process.env.NEXT_PUBLIC_POCKETBASE_URL ?? "https://kasiservices.ryucode.site");

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
    remotePatterns: [
      { protocol: cmsOrigin.protocol.replace(":", "") as "http" | "https", hostname: cmsOrigin.hostname, pathname: "/api/files/**" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
};

export default nextConfig;
