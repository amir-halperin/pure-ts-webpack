var weback = require('webpack');
var path = require('path');

module.exports = {
    entry: './app.ts',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js', '.html']
    },
    plugins: [
        // new weback.optimize.UglifyJsPlugin({
        //     compress: { warnings: false }
        // })
    ],
    module: {
        loaders: [
            { test: /\.(ts)$/, loader: 'ts-loader' }
        ]
    }
}