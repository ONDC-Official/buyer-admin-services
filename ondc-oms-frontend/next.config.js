/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less');

const nextConfig = withAntdLess({
  // optional: you can modify antd less variables directly here
  // modifyVars: { '@primary-color': '#293972' },
  // optional https://github.com/webpack-contrib/css-loader#object
  modifyVars: { '@primary-color': '#389F74' },
  cssLoaderOptions: {},

  // Other Config Here...
  reactStrictMode: true,

  webpack(config) {
    return config;
  },

});

module.exports = nextConfig
