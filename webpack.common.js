const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        alias: {
            '@api': path.resolve(__dirname, 'src/api/'),
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@data': path.resolve(__dirname, 'src/data/'),
            '@store': path.resolve(__dirname, 'src/store/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@types': path.resolve(__dirname, 'src/types/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@plugins': path.resolve(__dirname, 'src/plugins/'),
        },
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};
