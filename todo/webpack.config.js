var path = require('path');

var APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
    entry: APP_DIR + '/index.jsx',
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
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'app'),
            "node_modules"
        ],
        extensions: ['.js', '.jsx']
    }

};
