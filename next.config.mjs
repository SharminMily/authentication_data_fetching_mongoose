/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'dummyjson.com'],
      },

      experimental:{
        serverActions: true,
      },
  }
  
  export default nextConfig;

