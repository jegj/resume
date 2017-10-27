const webpack = require('webpack'),
			path = require('path'),
			fs = require('fs'),
			HtmlWebpackPlugin = require('html-webpack-plugin'),
			CopyWebpackPlugin = require('copy-webpack-plugin');

/* babel */
const babelSettings = JSON.parse(fs.readFileSync(".babelrc"));
const config = {
	entry: [
		'./src/index.js',
		// 'react-hot-loader/patch',
	],
	devServer: {
		contentBase: path.resolve(__dirname, '../public'),
		host: '0.0.0.0',
		port: 9001,
		hot: true,
		inline: true,
	},
	module: {
		loaders: [
			{
				test: /\.jsx|.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: babelSettings
			},
			// {
			// 	test: /\.jsx|.js$/,
			// 	exclude: /(node_modules)/,
			// 	loader: 'react-hot'
			// }
		]
	},
	resolve: {
		extensions: ['.js', '.jsx' ],
		modules: ['node_modules', 'src']
	},
	output: {
		path: path.resolve('./build'),
		filename: 'js/bundle.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
			hash: true,
			filename: 'index.html',
			inject: 'body'
		}),
		new CopyWebpackPlugin([
			{ from: 'public/css', to: 'css' },
			{ from: 'public/fonts', to: 'fonts' },
			{ from: 'public/js', to: 'js' },
			{ from: 'public/images', to: 'images' },
			// { from: 'public/manifest.json', to: '.' },
		])
	]
};
module.exports = config