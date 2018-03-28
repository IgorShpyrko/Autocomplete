const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: [
		'./src/index.js',
		'./src/css/style.scss',
	],
	// output: {
	//     path: path.resolve(__dirname, 'dist'),
	// },
	module: {
		rules: [{
			test: /\.scss$/,
			use: [{
				loader: "style-loader" // creates style nodes from JS strings
			}, {
				loader: "css-loader" // translates CSS into CommonJS
			}, {
				loader: "sass-loader" // compiles Sass to CSS
			}]
		}]
	},
	devServer: {
		contentBase: './src',
		open: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		})
	]

	
};