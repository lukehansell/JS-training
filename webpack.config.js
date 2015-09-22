var path = require("path");
var webpack = require("webpack");

module.exports = {
	minified: {
		cache: true,
		entry: {
			app: "./app/"
		},
		output: {
			path: path.join(__dirname, "dist/js"),
			publicPath: "dist/js",
			filename: "app.js",
			chunkFilename: "[chunkhash].min.js"
		},
		plugins: [new webpack.optimize.UglifyJsPlugin({minimize: true})],
		externals: {
			react: 'React',
			'react/addons': 'React',
			'react-router': 'ReactRouter',
			'react-bootstrap': 'ReactBootstrap'
		},
		module: {
			loaders: [
				// required to write "require('./style.css')"
				{ test: /\.css$/,    loader: "style-loader!css-loader" },

				// required for bootstrap icons
				{ test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
				{ test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
				{ test: /\.eot$/,    loader: "file-loader?prefix=font/" },
				{ test: /\.svg$/,    loader: "file-loader?prefix=font/" },

				// required for react jsx
				{ test: /\.js$/,    loader: "jsx-loader" },
				{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
				{ test: /\.jsx$/,   loader: "jsx-loader?insertPragma=React.DOM" },
				{ test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader"},
			]
		}
	},
	uncompressed: {
		cache: true,
		entry: {
			app: "./app/"
		},
		output: {
			path: path.join(__dirname, "dev/js"),
			publicPath: "dev/js",
			filename: "app.js",
			chunkFilename: "[chunkhash].js"
		},
		externals: {
			react: 'React',
			'react/addons': 'React',
			'react-router': 'ReactRouter',
			'react-bootstrap': 'ReactBootstrap'
		},
		module: {
			loaders: [
				// required to write "require('./style.css')"
				{ test: /\.css$/,    loader: "style-loader!css-loader" },

				// required for bootstrap icons
				{ test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
				{ test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
				{ test: /\.eot$/,    loader: "file-loader?prefix=font/" },
				{ test: /\.svg$/,    loader: "file-loader?prefix=font/" },

				// required for react jsx
				{ test: /\.js$/,    loader: "jsx-loader" },
				{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
				{ test: /\.jsx$/,   loader: "jsx-loader?insertPragma=React.DOM" },
				{ test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader"},
			]
		}
	}
};