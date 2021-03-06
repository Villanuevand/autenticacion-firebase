const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const plugins  = [
    new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        host: 'localhost',
        port: 5000,
        server: { baseDir: ['./app'] }
    }),
    new CleanWebpackPlugin(['./app/dist'], {
        root: path.resolve(__dirname , '..'),
        verbose: true,
        dry: false
    })
];

const config = {
    entry: './app/src/js/app.js',
    output: {
        filename: 'app.min.js',
        path: path.resolve(__dirname, './app/dist')
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: plugins
};


module.exports = config;