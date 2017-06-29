var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
    entry: APP_DIR + '/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: "[name]--[local]--[hash:base64:8]"
                        }
                    },
                    "postcss-loader" // has separate config, see postcss.config.js nearby
                ]
            },
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'app'),
            "node_modules"
        ],
        extensions: ['.js', '.jsx', '.css']
    }

};
