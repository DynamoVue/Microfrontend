const path = require('path');

const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        publicPath: `${domain}`
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            library: { type: "var", name: "marketing" },
            filename: 'remoteEntry.js',
            exposes: {
                "./MarketingApp": "./src/bootstrap.tsx"
            },
            shared: packageJSON.dependencies
        }),
    ],
}

module.exports = merge(commonConfig, prodConfig);