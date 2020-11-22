// Tell webpack to compile the "bar" package, necessary if you're using the export statement for example
// https://www.npmjs.com/package/next-transpile-modules

const withPlugins = require('next-compose-plugins')
const images = require('next-images')
const withTM = require('next-transpile-modules')([
  '@dane-redux/foo',
  '@dane-redux/bar'
])


const nextConfig = {
}


module.exports = withPlugins([
  withTM,
  images
], nextConfig)
