const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'development',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, '..', 'dist'),
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].js',
        publicPath: 'http://localhost:8087/'
    },
    devServer: {
        port: 8087,
        historyApiFallback: {
            index: 'index.html'
        },
        contentBase: path.join(__dirname, '..', 'dist'),
        writeToDisk: true
    }
}

module.exports = merge(commonConfig, devConfig);