var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: {
        app: ['./javascripts/entry.js'],
        openfin: ['./javascripts/openfin.js']
    },
    output: {
        path: __dirname + "/public/build",
        filename: '[name].js',
        publicPath: 'http://localhost:8080/build/'
    },
    devServer: {
        hot: true,
        inline: true,
        contentBase: ['./src'] ,
        publicPath: 'http://localhost:8080/build/'       
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'react']
                }
            },
            { 
                test: /\.css$/, 
                exclude: /node_modules/,
                loader: 'style-loader!css-loader' 
            },
            { 
                test: /\.less$/, 
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!less-loader' 
            },
            { 
                test: /\.scss$/, 
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!sass-loader' 
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}