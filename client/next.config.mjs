import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        if (process.env.NODE_ENV === 'development') {
          config.plugins.push(new CaseSensitivePathsPlugin());
        }
        return config;
      },
};

export default nextConfig;
