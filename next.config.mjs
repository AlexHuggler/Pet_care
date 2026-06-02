/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Produce a fully static site in ./out so it can be served by GitHub Pages.
  output: "export",
  // GitHub Pages has no Next.js image optimizer, so serve images as-is.
  images: { unoptimized: true },
  // Emit directory-style URLs (e.g. /path/) which static hosts serve cleanly.
  trailingSlash: true,
};

export default nextConfig;
