const path = require('path');

const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        chunkFilename: '[name].[contenthash].js',
        filename: '[name].[contenthash].js',
        publicPath: '/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                "marketing": `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJSON.dependencies
        }),
    ],
}

module.exports = merge(commonConfig, prodConfig);