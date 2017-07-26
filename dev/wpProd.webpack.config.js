const webpack = require('webpack');
const path = require ('path');
const glob = require("glob")
const files = glob.sync('./js/**/*.js');
const fs = require('fs');
const extractTextPlugin = require('extract-text-webpack-plugin');
const entryPoints = {

	'./js/app': [
		'babel-polyfill',

		// is the index file
		'./js/hrmEntry.js'
	]
};

files.map( entry => {
	const location = entry.replace('.js','');
	const keyName = entry.replace(/dev|\.js/g,'');

	// keyName = './js/' + keyName;  |\.\/js\/

	entryPoints[keyName] = location;
});

console.log('OA! xi');

module.exports = {
	entry: entryPoints,
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({ name: './js/vendor', filename: '[name].js', minChunks: Infinity }),

		new extractTextPlugin("../assets/css/master.css"),

		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				// Disabled because of an issue with Uglify breaking seemingly valid code:
				// https://github.com/facebookincubator/create-react-app/issues/2376
				// Pending further investigation:
				// https://github.com/mishoo/UglifyJS2/issues/2011
				comparisons: false,
			},
			output: {
				comments: false,
				// Turned on because emoji and regex is not minified properly using default
				// https://github.com/facebookincubator/create-react-app/issues/2488
				ascii_only: true,
			},
			sourceMap: true,
		}),

	],
	output: {
		path: path.resolve(__dirname, '../web/assets/'),
		filename: '[name].js',
		publicPath: '/assets/'
	},
	watch: true,
	devtool: 'source-map',
	node: {
		fs: 'empty'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules$/,
				use: extractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							// Interprets imports and requires inside CSS
							{
								loader: 'css-loader',
								options: {
									minimize: true
								}
							},
							// Adds vendor prefixers
							{
								loader: 'postcss-loader',
								options: {
									plugins: (() => [require('autoprefixer')]) 
								}

							},
							// Compiles SASS to CSS
							{
								loader: 'sass-loader',
							}
						]
				})
			},
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: /node_modules/,
				enforce: 'pre'
			},
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules$/
			}
		]
	}
};
