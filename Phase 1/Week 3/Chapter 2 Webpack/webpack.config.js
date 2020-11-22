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
    }
}

module.exports = config