module.exports = [
	{
		entry: './src/js/makeIframe.js',
		mode: 'development',
		output: {
			path: `${__dirname}/dist`,
			filename: 'mainBundle.js',
		},
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'css-loader',
                    ],
                },
                {
                    test: /\.html$/,
                    exclude: /node_modules/,
                    use: { loader: 'html-loader' }
                }

            ],
        }
	}
]

