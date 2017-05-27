var weback = require('webpack');
module.exports = {
    entry: './app.ts',
    output: {
        filename: './js/bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    plugins: [
        new weback.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ],
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
}