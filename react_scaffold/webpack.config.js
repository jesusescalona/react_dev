const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const HTMLWebPackPluginConfig = new HTMLWebPackPlugin({

	template: './app/index.html',
	filename: 'index.html',
	injet: 'body'
});

const config  = {

	entry: './app/index.jsx',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},
	module:{
		rules: [
			{
				test: /.jsx$/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [HTMLWebPackPluginConfig]

};

module.exports  = config;