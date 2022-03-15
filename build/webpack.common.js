const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (url) {
    return path.resolve(__dirname, '..', url)
}

module.exports = {
    entry: resolve('src/index.js'),
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('index.html'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    }
}