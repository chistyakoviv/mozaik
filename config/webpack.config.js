const path = require('path');

module.exports = {
    entry: './example/Application.ts',
    devServer: {
        contentBase: path.resolve(__dirname, '../example'),
        overlay: {
            warnings: true,
            errors: true
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'js'),
        publicPath: 'js'
    }
};
