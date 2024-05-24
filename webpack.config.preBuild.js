const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        entry: './src/js/app.js',
        mode: 'development',
        output: {
            path: `${__dirname}/dist`,
            filename: 'bundle.js',
        },

        plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
            template: './main.html'
        })],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                    ],
                },
                {
                    test: /\.(svg|gif|png|eot|woff|ttf)$/,
                    use: [
                        'url-loader',
                    ],
                },

                {
                    test: /\.html$/,
                    exclude: /node_modules/,
                    use: { loader: 'html-loader' }
                }

            ],
        },
    }
]

