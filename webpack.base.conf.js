const path = require('path');
const webpack =  require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
    src: path.join(__dirname, 'src/'),
    dist: path.join(__dirname, 'dist/'),
    assets: 'public/'
};

module.exports = {

    externals: {
        paths: PATHS
    },
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "/dist"),
        publicPath: ''
    },
    resolve: {
        alias: {
            '~': PATHS.src
        }
    }
}