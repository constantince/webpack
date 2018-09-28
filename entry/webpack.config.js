const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
			filename: "[name].css" //打包文件名称
		}),

		new HtmlWebpackPlugin({//自动打包html文件
			minify: {collapseWhitespace: true}, //是否压缩html文件
			title: 'Hello Webpack!', //网页标题
			template: './index.html', //模板文件，不指定会把原版html中内容清空掉
			hash: true
		})

	]
};