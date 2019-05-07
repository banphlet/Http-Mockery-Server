'use strict'
require("dotenv").config()
const withPlugins = require('next-compose-plugins')
const sass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const withFonts = require('next-fonts')
const webpack = require('webpack')
const withImages = require('next-images')
const { PHASE_PRODUCTION_BUILD } = require('next/constants')

const nextConfig = {
  webpack: config => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))
    return config
  },
}

const cssSassConfig = {
  // cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[path]___[local]___[hash:base64:5]',
  },
  [PHASE_PRODUCTION_BUILD]: {
    cssLoaderOptions: {
      localIdentName: '[hash:base64:8]',
    },
  },
}

module.exports = withPlugins(
  [[sass, cssSassConfig], [withCss, cssSassConfig], [withFonts], [withImages]],
  nextConfig
)
