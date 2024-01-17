/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: ["localhost"],
    loader: "default", // Add this line to specify the default loader
    path: "https://cdn.sanity.io", // Specify the base path for the remote images
  },
};

module.exports = nextConfig;
