const HTMLWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')


const config = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        hot: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./public/index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}

module.exports = config