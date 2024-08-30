/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["plus.unsplash.com" ,"motionview.com.bd",'m.media-amazon.com',"adminapi.applegadgetsbd.com",'www.applegadgetsbd.com', 'adminapi.applegadgetsbd.com', 'images.unsplash.com', 'lh3.googleusercontent.com', 'i.imgur.com'],
    },
    serverActions: {
      bodySizeLimit: '2mb' // Set desired value here
    }
  };
  
  export default nextConfig;