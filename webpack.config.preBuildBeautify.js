const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const TerserPlugin = require("terser-webpack-plugin");

module.exports = [
    {
        entry: './src/js/app.js',
        mode: 'development',

        devtool: 'source-map',
        output: {
            path: `${__dirname}/dist`,
            filename: 'bundle.js',
        },

        plugins: [
            new MiniCssExtractPlugin(),
            new HtmlWebpackPlugin({
                template: './main.html'
            }),
            new UglifyJsPlugin({
                uglifyOptions: {
                  output: {
                    comments: false,
                    beautify: true
                  },
                }
              })
        ],
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
        optimization: {
            minimize: false,
            // minimizer: [
            //     new TerserPlugin({
            //       terserOptions: {
            //         format: {
            //           comments: false,
            //         },
            //       },
            //       extractComments: false,
            //     }),
            //   ]
        }
    }
]

