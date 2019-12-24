const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const buildWebpackConfig = merge(baseWebpackConfig, {
    // BUILD config
    mode: 'production',
    devtool: "none",
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            }
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
            {
                test: /\.(jpg|png|ttf|tiff|svg|eot|woff|woff2|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    }, {
                        loader: 'postcss-loader',
                        options: { config: { path: `./postcss.config.js` } }
                    }, {
                        loader: 'sass-loader',
                    }
                ]
            }, {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                    }, {
                        loader: 'postcss-loader',
                        options: {  config: { path: `./postcss.config.js` } }
                    }
                ]
            }]
    },
    plugins: [
    new HtmlWebpackPlugin({
        hash: false,
        template: './src/index.html',
        filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })
]
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig)
});