const nextConfig = {
  images: {
    domains: [
      'images.deliveryhero.io',
      'imrs.foodibd.com',
      'plus.unsplash.com',
      'motionview.com.bd',
      'www.doctorbangladesh.com',
      'adminapi.applegadgetsbd.com',
      'www.applegadgetsbd.com',
      'adminapi.applegadgetsbd.com',
      'images.unsplash.com',
      'lh3.googleusercontent.com',
      'i.imgur.com'
    ],
  },
  serverActions: {
    bodySizeLimit: '2mb', // Set desired value here
  },
  webpack: (config, { buildId }) => {
    config.module.rules.push({
      test: /\.html$/,
      use: ['html-loader'],
    });

    return config; // Ensure the modified config is returned
  },
};

export default nextConfig;