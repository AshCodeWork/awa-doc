const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { WebpackPluginServe: Serve } = require('webpack-plugin-serve');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const clientOptions = {
    host: '0.0.0.0',
    port: 1200,
    hmr: false,
    liveReload: true,
    static: path.join(__dirname, '../example/dist')
}

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
    entry: {
        "app": ['./example/src/main.js','webpack-plugin-serve/client']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../example/dist'),
        publicPath: './'
    },
    devtool: 'inline-source-map',
    watch: true,
    plugins: [
        new CleanWebpackPlugin(),
        new ProgressBarPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './example/index.html',
            inject: true
        }),
        new Serve({
            ...clientOptions,
            middleware: (app, builtins) =>
                app.use(async (ctx, next) => {
                    // ctx.body = 'Hello world';
                    await next();
            })
        })
        // new Serve(clientOptions)
    ]
})