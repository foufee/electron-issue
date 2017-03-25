var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/app',
    ],
    output: {
        path: __dirname + "/build",
        publicPath: '/',
        filename: 'app.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: "url-loader"
            },
            {
                enforce: "post",
                loader:  "transform-loader?brfs"
            }
        ]
    },
    target: 'electron-renderer'
};