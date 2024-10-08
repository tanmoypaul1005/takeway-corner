/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['images.deliveryhero.io','imrs.foodibd.com',"plus.unsplash.com" ,"motionview.com.bd","www.doctorbangladesh.com","adminapi.applegadgetsbd.com",'www.applegadgetsbd.com', 'adminapi.applegadgetsbd.com', 'images.unsplash.com', 'lh3.googleusercontent.com', 'i.imgur.com'],
    },
    serverActions: {
      bodySizeLimit: '2mb' // Set desired value here
    }
  };
  
  export default nextConfig;