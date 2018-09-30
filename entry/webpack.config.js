const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const isProd = process.env.NODE_ENV;

class HelloPlugin {
	constructor(options) {
		this.options = options;
	}

	apply(compiler) {
		compiler.hooks.done.tap('HelloPlugin', () => {
			console.log('hello Plugin');
			console.log(this.options);
		})
	}
}

module.exports = {
	mode: "development",//development|production|none
	entry: {
		main: './src/index.js',
		one: './src/one.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		//filename: isProd ? '[name].[hash].js' : '[name].js'
		publicPath: 'http://cdn.example.com/assets/[hash]/'
	},
	module: {
		rules: [
			{
			 test: /\.(c|sc)ss$/,
			 use: [!isProd ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			}, //按数组顺序编译 style-loader, css-loader
			{
				test:/\.(js|jsx)$/,
				use: ['babel-loader'],
				exclude: /node_modules/ 
			}
		]
	},
	devtool: "source-map",//用源文件调试
	devServer: {
		port: 9000,
		hot: true
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),

		new MiniCssExtractPlugin({//将css文件与js文件分离
			filename: "[name].css", //打包文件名称
			disable: !isProd
		}),

		new HtmlWebpackPlugin({//自动打包html文件
			minify: {collapseWhitespace: true}, //是否压缩html文件
			title: 'Hello Webpack!', //网页标题
			template: './index.html', //模板文件，不指定会把原版html中内容清空掉
			hash: true
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),

		new HelloPlugin({setting: true, hello: 'world'})

	]
};