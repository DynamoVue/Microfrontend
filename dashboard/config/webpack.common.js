const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJSON = require('../package.json');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript',
                            '@babel/preset-react',
                        ],
                        plugins: [
                            [
                                '@babel/plugin-transform-runtime', {
                                    regenerator: true
                                }
                            ],
                        ]
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new CleanWebpackPlugin(),
        new ModuleFederationPlugin({
            name: 'marketing',
            library: { type: "var", name: "dashboard" },
            filename: 'remoteEntry.js',
            exposes: {
                "./DashboardApp": "./src/bootstrap.tsx"
            },
            shared: packageJSON.dependencies
        }),
    ]
}