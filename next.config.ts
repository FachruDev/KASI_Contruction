import path from "path";
import { fileURLToPath } from "url";
import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
    // Uploads are streamed through Payload's own file route, so every image is same-origin.
    localPatterns: [{ pathname: "/api/media/file/**" }, { pathname: "/assets/**" }],
  },
  turbopack: { root: dirname },
  // The site and the admin each have their own root layout, so unmatched URLs need a standalone 404.
  experimental: { globalNotFound: true },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
