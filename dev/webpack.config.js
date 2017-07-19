const webpack = require('webpack');
const path = require ('path');
const glob = require("glob")
// const fs = require('fs');
const entryPoints = {
	hmr: 'webpack/hot/only-dev-server',
	rhr:  'react-hot-loader/patch'
};

const files = glob.sync('./js/**/*.js');

files.map( entry => {
	const location = entry.replace('.js','');
	const keyName = path.basename(entry, path.extname(entry));

	entryPoints[keyName] = location;
});

module.exports = {
	entry: entryPoints,
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	],
	output: {
		path: path.resolve(__dirname, '../web/assets/js'),
		filename: '[name].js',
		publicPath: '/assets/js/'
	},
	devServer: {
		// Server entry point
		inline: true,
		hot: true,
		contentBase: path.join(__dirname, '../web/WEB-INF/templates/views/'),
		compress: true,
		port: 3000,
		stats: {
			chunks: false
  		}
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
			},
			// {
			// 	test: /\.js$/,
			// 	loader: "jshint-loader",
			// 	exclude: /node_modules/,
			// 	options: {
			// 		eslintPath: path.join(__dirname, ".eslintrc"),
			// 	},
			// 	enforce: "pre"
			// },
			{
				test: /\.js$/,
				loader: 'babel-loader',
				// include: [
				// 	path.resolve(__dirname, 'js'),
				// ],
				exclude: /node_modules$/,
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};
