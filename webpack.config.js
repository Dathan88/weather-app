import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import webpack from 'webpack';
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
	mode: process.env.NODE_ENV || 'development',
	target: 'web',
	context: __dirname,
	devtool: 'inline-source-map',
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, 'public'),
		filename: '[name].bundle.js',
		publicPath: '/',
		pathinfo: false,
	},
	stats: {
		errorDetails: true,
		colors: false,
		modules: true,
		reasons: true,
	},
	optimization: {
		removeAvailableModules: false,
		removeEmptyChunks: false,
		splitChunks: false,
	},
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		compress: true,
		port: 6660,
		open: true,
		hot: true,
		index: 'index.html',
		watchContentBase: true,
		historyApiFallback: true,
		publicPath: '/',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebPackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
		}),
	],
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules'],
		extensions: ['.wasm', '.mjs', '.js', '.json', 'jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader', // creates style nodes from JS strings
					'css-loader', // translates CSS into CommonJS
				],
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				loaders: ['file-loader'],
			},
			{
				test: require.resolve('jquery'),
				use: [
					{
						loader: 'expose-loader',
						options: 'jQuery',
					},
					{
						loader: 'expose-loader',
						options: '$',
					},
				],
			},
		],
	},
});
