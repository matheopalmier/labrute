/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true, // Pour Netlify
  },
  output: 'standalone', // Pour améliorer les performances sur Netlify
};

module.exports = nextConfig; 