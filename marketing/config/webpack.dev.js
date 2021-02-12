const path = require('path');

const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');

const devConfig = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        publicPath: 'http://localhost:8086/'
    },
    devServer: {
        port: 8086,
        historyApiFallback: {
            index: 'index.html'
        },
        contentBase: path.join(__dirname, '..', 'dist'),
        writeToDisk: true
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

module.exports = merge(commonConfig, devConfig);