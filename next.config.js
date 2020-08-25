// next.config.js
const withLess = require('@zeit/next-less')
const path = require('path')

module.exports = withLess({
  cssModules: true,
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
})
