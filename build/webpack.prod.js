const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const baseWebpackConfig = require('./webpack.base');
const merge = require('webpack-merge');

module.exports = merge( baseWebpackConfig, {
    mode: 'production',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../awa-doc'),
        publicPath: 'awa-doc/',
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    externals: {
        vue: 'vue'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new CleanWebpackPlugin(),
        // new VueLoaderPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
});