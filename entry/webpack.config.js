const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	mode: "development",//development|production|none
	entry: {
		main: './src/index.js',
		one: './src/one.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
			 test: /\.(css|scss)$/,
			 use: [{
				loader: MiniCssExtractPlugin.loader,
			}, 'css-loader', 'sass-loader']}, //按数组顺序编译 style-loader, css-loader
			
		]
	},
	plugins: [
		new MiniCssExtractPlugin({//将css文件与js文件分离
			filename: "[name].css"
		})
	]
};