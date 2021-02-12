const path = require('path');

const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require('./webpack.common');
const packageJSON = require('../package.json');

const devConfig = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/index.tsx',
    devServer: {
        port: 8085,
        contentBase: path.join(__dirname, '..', 'dist'),
    },
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
                "marketing": "marketing@http://localhost:8086/remoteEntry.js"
            },
            shared: packageJSON.dependencies
        }),
    ],
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             default: false,
    //             vendors: false,
    //             vendor: {
    //                 name: 'vendor',
    //                 // Include Sync or Async Import
    //                 chunks: 'all',
    //                  // import file path containing node_modules
    //                 test: /node_modules/,
    //                 // priority
    //                 priority: 20
    //             },
    //              // common chunk
    //             common: {
    //                 name: 'common',
    //                 minChunks: 2,
    //                 chunks: 'async',
    //                 priority: 10,
    //                 reuseExistingChunk: true,
    //                 enforce: true
    //             },
    //         }
    //     }
    // }
}

module.exports = merge(commonConfig, devConfig);