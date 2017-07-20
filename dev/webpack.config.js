const webpack = require('webpack');
const path = require ('path');
const glob = require("glob")
const files = glob.sync('./js/**/*.js');
const entryPoints = {
	// // activate HMR for React
	//  rhl: 'react-hot-loader/patch',
	//  client: 'webpack-dev-server/client?http://localhost:3000',
 //    // bundle the client for webpack-dev-server
 //    // and connect to the provided endpoint

 //    ods: 'webpack/hot/only-dev-server'
 //    // bundle the client for hot reloading
 //    // only- means to only hot reload for successful updates

 	 app: [
        // 'webpack-dev-server/client?http://localhost:3000',
        // 'webpack/hot/only-dev-server',
        'babel-polyfill',
        'react-hot-loader/patch',
        './js/viewLoader.js'
    ]

};

files.map( entry => {
	const location = entry.replace('.js','');
	const keyName = entry.replace(/dev|\.js/g,'');

	entryPoints[keyName] = location;
});

module.exports = {
	entry: entryPoints,
	plugins: [
		// enable HMR globally
		new webpack.HotModuleReplacementPlugin(),

		// prints more readable module names in the browser console on HMR updates
		new webpack.NamedModulesPlugin()
	],
	output: {
		path: path.resolve(__dirname, '../web/assets/js'),
		filename: '[name].js',
		publicPath: '/assets/'
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
  		},
  		overlay: {
			errors: true
			// warnings: true
		},
	},
	watch: true,
	devtool: 'cheap-module-eval-source-map',
	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
			},
			// {
			// 	test: /\.js$/,
			// 	loader: 'eslint-loader',
			// 	exclude: /node_modules/,
			// 	enforce: 'pre'
			// },
			{
				test: /\.js$/,
				use: ['babel-loader'],
				exclude: /node_modules$/
			}
		]
	}
};
