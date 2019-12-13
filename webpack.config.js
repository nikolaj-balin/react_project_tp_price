const path = require("path");
const webpack =  require('webpack');
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: '',
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ["babel-loader"]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            // url: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {sourceMap: true, config: {path: './postcss.config.js'}}
                    },
                    {
                        loader: "sass-loader",
                        options: {sourceMap: true}
                    }
                ]
            },
            {
                test: /\.(jpg|png|ttf|tiff|svg|eot|woff|woff2|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    name: '[name].[ext]'
                }
            }
        ]
    },
    devtool: "cheap-module-eval-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            hash: false,
            template: './src/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new webpack.SourceMapDevToolPlugin({
            filename: "[file].map"
        })
    ]
};