var path = require("path");
var webpack = require("webpack");

var plugins = [];
if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true}))
}

module.exports = {
  cache: true,
  entry: {
    worker: './app/worker'
  },
  output: {
    path: path.join(__dirname, "public/js/"),
    publicPath: "/public/js/",
    filename: "[name].js"
  },
  target: 'webworker',
  plugins: plugins,
  module: {
    loaders: [
      // required to write "require('./style.css')"
      { test: /\.css$/,    loader: "style-loader!css-loader" },

      // required for bootstrap icons
      { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
      { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
      { test: /\.svg$/,    loader: "file-loader?prefix=font/" }
    ]
  }
};
