/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['react-dom'] = 'react-dom'
    }
    return config
  },
  devServer: (config) => {
    config.hot = false
    return config
  },
}

module.exports = nextConfig
